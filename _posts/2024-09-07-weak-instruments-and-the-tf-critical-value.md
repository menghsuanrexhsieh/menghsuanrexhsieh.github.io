---
layout: "post"
title: "Weak Instruments and the tF Critical Value"
date: "2024-09-07"
tags: ["econometrics", "instrumental variables"]
excerpt: "In a just-identified IV regression, the usual t statistic depends on the strength of the first stage even under the null."
note_series: "Weak instruments"
note_source: "assets/notes/Overleaf Projects (32 items)/Notes on Weak Instruments/stats.tex"
redirect_from: ["/2024/09/07/the-tf-test-and-weak-instrument-inference/", "/2024/10/15/the-gaussian-problem-behind-the-tf-critical-value/", "/2024/11/23/constructing-the-tf-critical-value-function/"]
---

<div class="note-content" markdown="0">

<p>The usual IV {% raw %}<span class="math inline">\(t\)</span>{% endraw %} statistic divides by a quantity estimated using the first stage. When that stage is weak, the resulting null distribution can differ substantially from the normal approximation. The {% raw %}<span class="math inline">\(tF\)</span>{% endraw %} procedure of <span class="citation" data-cites="lee_valid_2022">(<a href="#ref-lee_valid_2022" role="doc-biblioref">Lee et al. 2022</a>)</span> uses the reported first-stage {% raw %}<span class="math inline">\(F\)</span>{% endraw %} to choose a critical value that accounts for this distortion.</p>

<h3 data-note-section="1" id="24-0-a-useful-identity">1. A useful identity</h3>
<p>Let {% raw %}<span class="math inline">\(\widehat\Gamma\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\widehat\pi\)</span>{% endraw %} be the reduced-form and first-stage coefficients, so {% raw %}<span class="math inline">\(\widehat\beta=\widehat\Gamma/\widehat\pi\)</span>{% endraw %}. Under {% raw %}<span class="math inline">\(H_0:\beta=\beta_0\)</span>{% endraw %}, write</p>

{% raw %}<div class="math display">\[
A\triangleq\frac{\widehat\Gamma-\beta_0\widehat\pi}{s_a},
\qquad f\triangleq\frac{\widehat\pi}{s_\pi},
\qquad \rho\triangleq\frac{\operatorname{Cov}(\widehat\Gamma-\beta_0\widehat\pi,\widehat\pi)}{s_as_\pi}.
\]</div>{% endraw %}
<p>Here {% raw %}<span class="math inline">\(s_a\)</span>{% endraw %} and {% raw %}<span class="math inline">\(s_\pi\)</span>{% endraw %} are the corresponding standard deviations. In the Gaussian limit experiment, {% raw %}<span class="math inline">\((A,f)\)</span>{% endraw %} has unit marginal variances, correlation {% raw %}<span class="math inline">\(\rho\)</span>{% endraw %}, and mean {% raw %}<span class="math inline">\((0,f_0)\)</span>{% endraw %}. The nuisance parameter {% raw %}<span class="math inline">\(f_0\)</span>{% endraw %} measures first-stage strength.</p>

<p>The delta-method variance used by the conventional IV statistic has the form</p>

{% raw %}<div class="math display">\[
s_\beta^2=\widehat\pi^{-2}
(s_a^2-2(\widehat\beta-\beta_0)\rho s_as_\pi
+(\widehat\beta-\beta_0)^2s_\pi^2).
\]</div>{% endraw %}
<p>Substituting {% raw %}<span class="math inline">\(\widehat\beta-\beta_0=s_aA/\widehat\pi\)</span>{% endraw %} gives the central identity</p>

{% raw %}<div class="math display">\[
t^2=\frac{A^2}{1-2\rho A/f+(A/f)^2},\qquad F=f^2.
\]</div>{% endraw %}
<p>The numerator looks familiar, but its denominator uses the same Gaussian score together with the noisy first stage. It cannot generally be replaced by one. That dependence is the source of the failure of ordinary normal critical values.</p>

<h3 data-note-section="2" id="24-0-the-main-inference-result">2. The main inference result</h3>
<div id="tf-calibration" class="theorem" data-note-number="1" data-note-kind="Theorem">
<p><strong>Theorem 1</strong>. The paper constructs an {% raw %}<span class="math inline">\(F\)</span>{% endraw %}-dependent critical-value function {% raw %}<span class="math inline">\(c_\alpha\)</span>{% endraw %} so that, in the relevant IV limit experiment,</p>

{% raw %}<div class="math display">\[
\sup_{f_0,\rho}\Pr_{f_0,\rho}\{t^2&gt;c_\alpha(F)\}\le\alpha.
\]</div>{% endraw %}
<p>Under the conditions connecting the sample statistics to this experiment, inversion gives a confidence interval of the form</p>

{% raw %}<div class="math display">\[
\widehat\beta\ \pm\ \sqrt{c_\alpha(F)}\,\widehat s_\beta.
\]</div>{% endraw %}
</div>
<p>The adjustment uses the conventional coefficient, standard error, and first-stage {% raw %}<span class="math inline">\(F\)</span>{% endraw %}. Its guarantee belongs to the calibrated critical-value function from the paper’s tables or implementation. Increasing a critical value by an arbitrary monotone factor does not reproduce that calibration.</p>

<h3 data-note-section="3" id="24-0-why-screening-on-f-is-insufficient">3. Why screening on {% raw %}<span class="math inline">\(F\)</span>{% endraw %} is insufficient</h3>
<p>A rule that first checks whether {% raw %}<span class="math inline">\(F\)</span>{% endraw %} exceeds a threshold and then uses the ordinary {% raw %}<span class="math inline">\(t\)</span>{% endraw %} critical value changes the joint rejection region. Since {% raw %}<span class="math inline">\(A\)</span>{% endraw %} and {% raw %}<span class="math inline">\(f\)</span>{% endraw %} can be correlated, passing that screen does not turn the remaining {% raw %}<span class="math inline">\(t\)</span>{% endraw %} statistic into an independent standard normal variable.</p>

<p>The calibration instead evaluates the probability of the whole rejection region over the nuisance parameters. For a strong first stage, {% raw %}<span class="math inline">\(A/f\)</span>{% endraw %} becomes small and the identity approaches {% raw %}<span class="math inline">\(t^2=A^2\)</span>{% endraw %}. When the first stage is weak, the denominator cannot be replaced by one, and the adjustment can be substantial.</p>

<p>The Anderson–Rubin statistic works directly with the reduced-form null score {% raw %}<span class="math inline">\(A\)</span>{% endraw %}. The {% raw %}<span class="math inline">\(tF\)</span>{% endraw %} approach retains the familiar IV estimate and standard error while accounting for the distortion visible in the identity above. This is an inference correction; it does not repair violations of instrument exogeneity or exclusion. For a <a href="{% post_url 2023-08-05-shift-share-iv-exogenous-shares-and-rotemberg-weights %}">shift-share instrument</a>, for example, the argument establishing valid identifying variation remains a separate requirement.</p>

<h3 data-note-section="4" id="24-0-recovering-the-denominator-from-the-regression-residual">4. Recovering the denominator from the regression residual</h3>
<p>The conventional standard error estimates the variance of a structural residual formed using {% raw %}<span class="math inline">\(\widehat\beta\)</span>{% endraw %}. Under the null, write the reduced-form null error as {% raw %}<span class="math inline">\(a\)</span>{% endraw %} and the first-stage error as {% raw %}<span class="math inline">\(v\)</span>{% endraw %}. Replacing {% raw %}<span class="math inline">\(\beta_0\)</span>{% endraw %} by {% raw %}<span class="math inline">\(\widehat\beta\)</span>{% endraw %} changes the relevant error to</p>

{% raw %}<div class="math display">\[
a-(\widehat\beta-\beta_0)v.
\]</div>{% endraw %}
<p>Expanding the variance of this difference gives a covariance term as well as two variance terms:</p>

{% raw %}<div class="math display">\[
s_a^2-2(\widehat\beta-\beta_0)\rho s_as_\pi
 +(\widehat\beta-\beta_0)^2s_\pi^2.
\]</div>{% endraw %}
<p>The coefficient error is divided by the estimated first stage, and the variance estimate is divided by its square. Substituting {% raw %}<span class="math inline">\(\widehat\beta-\beta_0=s_aA/\widehat\pi\)</span>{% endraw %} cancels those common factors and produces the identity for {% raw %}<span class="math inline">\(t^2\)</span>{% endraw %}. The denominator is nonnegative because</p>

{% raw %}<div class="math display">\[
1-2\rho A/f+(A/f)^2
=(A/f-\rho)^2+1-\rho^2.
\]</div>{% endraw %}
<p>For {% raw %}<span class="math inline">\(|\rho|&lt;1\)</span>{% endraw %} it is strictly positive. Near {% raw %}<span class="math inline">\(|\rho|=1\)</span>{% endraw %}, however, it can be very small when {% raw %}<span class="math inline">\(A/f\)</span>{% endraw %} is close to {% raw %}<span class="math inline">\(\rho\)</span>{% endraw %}. Large conventional {% raw %}<span class="math inline">\(t\)</span>{% endraw %} values can then reflect joint behavior of the score and estimated residual variance, rather than a large standardized null score alone.</p>

<p>At {% raw %}<span class="math inline">\(\rho=0\)</span>{% endraw %}, the denominator is at least one, so {% raw %}<span class="math inline">\(t^2\leq A^2\)</span>{% endraw %} pathwise. Thus weakness does not create the same distortion for every nuisance parameter. A uniform critical value must also protect the correlated cases, which is why calibrating at a convenient value of {% raw %}<span class="math inline">\(\rho\)</span>{% endraw %} would be insufficient.</p>

<h3 data-note-section="5" id="24-0-why-a-first-stage-screen-changes-the-score-distribution">5. Why a first-stage screen changes the score distribution</h3>
<p>The Gaussian experiment admits the representation</p>

{% raw %}<div class="math display">\[
f=f_0+V,\qquad
A=\rho V+\sqrt{1-\rho^2}\,E,
\]</div>{% endraw %}
<p>with independent standard normals {% raw %}<span class="math inline">\(V,E\)</span>{% endraw %}. Conditional on {% raw %}<span class="math inline">\(f=u\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
A\mid f=u\sim \mathcal{N}(\rho(u-f_0),1-\rho^2).
\]</div>{% endraw %}
<p>When the true first stage {% raw %}<span class="math inline">\(f_0\)</span>{% endraw %} is small, an unusually large observed {% raw %}<span class="math inline">\(f\)</span>{% endraw %} can be caused by a large {% raw %}<span class="math inline">\(V\)</span>{% endraw %}. If {% raw %}<span class="math inline">\(\rho\ne0\)</span>{% endraw %}, the same {% raw %}<span class="math inline">\(V\)</span>{% endraw %} shifts the null score. Conditioning on a large first-stage statistic therefore selects a different distribution of {% raw %}<span class="math inline">\(A\)</span>{% endraw %}. Screening on {% raw %}<span class="math inline">\(F=f^2\)</span>{% endraw %} mixes the two signs of this effect; it does not remove it.</p>

<p>The unconditional probability of any proposed rejection rule {% raw %}<span class="math inline">\(R(A,f)\)</span>{% endraw %} is, for {% raw %}<span class="math inline">\(|\rho|&lt;1\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
\int_{\mathbb R}\int_{\mathbb R}
\mathbf1\{R(a,u)\}
\frac{\phi((a-\rho(u-f_0))/\sqrt{1-\rho^2})}
 {\sqrt{1-\rho^2}}
\phi(u-f_0)\,da\,du.
\]</div>{% endraw %}
<p>For the {% raw %}<span class="math inline">\(tF\)</span>{% endraw %} procedure, use the rejection event {% raw %}<span class="math inline">\(R(a,u)=\{a^2/[1-2\rho a/u+(a/u)^2]&gt;c_\alpha(u^2)\}\)</span>{% endraw %}. Calibration bounds this double integral for all allowed nuisance parameters. A few selected first-stage values cannot establish that uniform probability bound.</p>

<p>The rejection region can be written as a quadratic inequality, which helps explain what calibration must accomplish. At a realized first stage {% raw %}<span class="math inline">\(f\ne0\)</span>{% endraw %}, put {% raw %}<span class="math inline">\(c=c_\alpha(f^2)\)</span>{% endraw %}. Multiplying by the positive variance denominator gives, for {% raw %}<span class="math inline">\(|\rho|&lt;1\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
t^2&gt;c
\quad\Longleftrightarrow\quad
(f^2-c)A^2+2c\rho fA-cf^2&gt;0.
\]</div>{% endraw %}
<p>For a fixed {% raw %}<span class="math inline">\(f\)</span>{% endraw %}, this inequality can describe two tails or a bounded interval in {% raw %}<span class="math inline">\(A\)</span>{% endraw %}, depending on its leading coefficient and discriminant. It is not generally the event {% raw %}<span class="math inline">\(|A|&gt;\sqrt c\)</span>{% endraw %}. The conditional normal law of {% raw %}<span class="math inline">\(A\)</span>{% endraw %} is also shifted by {% raw %}<span class="math inline">\(\rho(f-f_0)\)</span>{% endraw %}, so both the rejection region and the probability assigned to it change with the first stage.</p>

<p>At {% raw %}<span class="math inline">\(\rho=0\)</span>{% endraw %}, the formula simplifies to</p>

{% raw %}<div class="math display">\[
t^2=\frac{A^2f^2}{A^2+f^2}&lt;f^2.
\]</div>{% endraw %}
<p>In this uncorrelated case, an {% raw %}<span class="math inline">\(F\)</span>{% endraw %} below the positive squared critical value precludes rejection. Correlation changes the cross-term in the denominator, which can instead become small. A calibration based only on the uncorrelated case would miss this source of overrejection.</p>

<p>The {% raw %}<span class="math inline">\(F\)</span>{% endraw %}-dependent curve controls the unconditional rejection probability uniformly over true first stages and score correlations. It does not assert exact conditional size at each observed {% raw %}<span class="math inline">\(F\)</span>{% endraw %}. Conditioning on the first stage selects noise correlated with the null score, as the conditional Gaussian formula shows.</p>

<h3 data-note-section="6" id="24-0-the-strong-first-stage-limit">6. The strong-first-stage limit</h3>
<p>If {% raw %}<span class="math inline">\(|f_0|\to\infty\)</span>{% endraw %}, then {% raw %}<span class="math inline">\(f/f_0\to1\)</span>{% endraw %} in probability while {% raw %}<span class="math inline">\(A=O_p(1)\)</span>{% endraw %}. Consequently {% raw %}<span class="math inline">\(A/f=o_p(1)\)</span>{% endraw %}, and</p>

{% raw %}<div class="math display">\[
t^2-A^2=o_p(1).
\]</div>{% endraw %}
<p>For a more detailed approximation, put {% raw %}<span class="math inline">\(x=A/f\)</span>{% endraw %}. Around {% raw %}<span class="math inline">\(x=0\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
\frac1{1-2\rho x+x^2}
=1+2\rho x+(4\rho^2-1)x^2+O(x^3).
\]</div>{% endraw %}
<p>The leading correction to {% raw %}<span class="math inline">\(A^2\)</span>{% endraw %} is {% raw %}<span class="math inline">\(2\rho A^3/f\)</span>{% endraw %}. A strong first stage makes it vanish. In weak-IV asymptotics, {% raw %}<span class="math inline">\(f_0\)</span>{% endraw %} can remain bounded while {% raw %}<span class="math inline">\(f\)</span>{% endraw %} approaches zero, so {% raw %}<span class="math inline">\(A/f\)</span>{% endraw %} need not be a small expansion parameter. The series then provides no justification for the ordinary delta-method approximation.</p>

<h3 data-note-section="7" id="24-0-inverting-andersonrubin-for-comparison">7. Inverting Anderson–Rubin for comparison</h3>
<p>The null score {% raw %}<span class="math inline">\(A(\beta)\)</span>{% endraw %} uses {% raw %}<span class="math inline">\(\widehat\Gamma-\beta\widehat\pi\)</span>{% endraw %} and its null variance. Squaring an Anderson–Rubin inequality gives</p>

{% raw %}<div class="math display">\[
(\widehat\Gamma-\beta\widehat\pi)^2
\leq z_{1-\alpha/2}^2
(s_\Gamma^2-2\beta s_{\Gamma\pi}+\beta^2s_\pi^2).
\]</div>{% endraw %}
<p>This is a quadratic inequality in {% raw %}<span class="math inline">\(\beta\)</span>{% endraw %}. The coefficient on {% raw %}<span class="math inline">\(\beta^2\)</span>{% endraw %} after moving the right side to the left is</p>

{% raw %}<div class="math display">\[
\widehat\pi^2-z_{1-\alpha/2}^2s_\pi^2.
\]</div>{% endraw %}
<p>A nonpositive coefficient can leave the accepted set unbounded, reflecting limited information about a ratio with a weak denominator. The {% raw %}<span class="math inline">\(tF\)</span>{% endraw %} method uses a different rejection region expressed through the conventional estimate and standard error. Its validity still depends on the calibrated critical values and their weak-first-stage qualifications.</p>

<div id="refs" class="references csl-bib-body hanging-indent" data-entry-spacing="0" role="list">
<div id="ref-lee_valid_2022" class="csl-entry" role="listitem">
Lee, David S., Justin McCrary, Marcelo J. Moreira, and Jack Porter. 2022. <span>“Valid <em>t</em> -Ratio Inference for IV.”</span> <em>American Economic Review</em> 112 (10): 3260–90. <a href="https://doi.org/10.1257/aer.20211063">https://doi.org/10.1257/aer.20211063</a>.
</div>
</div>

<nav class="note-series" aria-label="Notes in this series"><p></p></nav>

</div>
