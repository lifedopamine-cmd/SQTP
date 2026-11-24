// SQTP GPA calculation core.
// The browser prototype currently mirrors these functions in app.js. This file
// is kept portable for native builds and a future WebAssembly build.
#include <cmath>
#include <iomanip>
#include <iostream>
#include <limits>

namespace sqtp {

double course_point(double score) {
  if (!std::isfinite(score)) return std::numeric_limits<double>::quiet_NaN();
  if (score >= 95) return 5.0;
  if (score >= 92) return 4.8;
  if (score >= 89) return 4.5;
  if (score >= 86) return 4.2;
  if (score >= 83) return 3.9;
  if (score >= 80) return 3.6;
  if (score >= 77) return 3.3;
  if (score >= 74) return 3.0;
  if (score >= 71) return 2.7;
  if (score >= 68) return 2.4;
  if (score >= 65) return 2.1;
  if (score >= 62) return 1.8;
  if (score >= 60) return 1.5;
  return 0.0;
}

double weighted_score(const double* weights, const double* scores, int count) {
  if (!weights || !scores || count <= 0) return std::numeric_limits<double>::quiet_NaN();
  double weight_sum = 0.0;
  double total = 0.0;
  for (int i = 0; i < count; ++i) {
    if (!std::isfinite(weights[i]) || !std::isfinite(scores[i]) ||
        weights[i] < 0.0 || scores[i] < 0.0 || scores[i] > 100.0) {
      return std::numeric_limits<double>::quiet_NaN();
    }
    weight_sum += weights[i];
    total += weights[i] * scores[i] / 100.0;
  }
  if (std::abs(weight_sum - 100.0) > 1e-6) return std::numeric_limits<double>::quiet_NaN();
  return total;
}

double credit_weighted_gpa(const double* points, const double* credits, int count) {
  if (!points || !credits || count <= 0) return std::numeric_limits<double>::quiet_NaN();
  double weighted_points = 0.0;
  double credit_sum = 0.0;
  for (int i = 0; i < count; ++i) {
    if (!std::isfinite(points[i]) || !std::isfinite(credits[i]) || credits[i] < 0.0) {
      return std::numeric_limits<double>::quiet_NaN();
    }
    weighted_points += points[i] * credits[i];
    credit_sum += credits[i];
  }
  return credit_sum > 0.0 ? weighted_points / credit_sum
                          : std::numeric_limits<double>::quiet_NaN();
}

}  // namespace sqtp

// Stable C ABI suitable for a future Emscripten/WebAssembly wrapper.
extern "C" double sqtp_course_point(double score) {
  return sqtp::course_point(score);
}

extern "C" double sqtp_weighted_score(const double* weights, const double* scores, int count) {
  return sqtp::weighted_score(weights, scores, count);
}

extern "C" double sqtp_credit_weighted_gpa(const double* points, const double* credits, int count) {
  return sqtp::credit_weighted_gpa(points, credits, count);
}

#ifdef SQTP_GPA_STANDALONE
int main() {
  const double weights[] = {20.0, 30.0, 50.0};
  const double scores[] = {92.0, 84.0, 88.0};
  const double final_score = sqtp::weighted_score(weights, scores, 3);
  std::cout << std::fixed << std::setprecision(1)
            << "Estimated final score: " << final_score << '\n'
            << "Course grade point: " << sqtp::course_point(final_score) << '\n';
  return 0;
}
#endif
