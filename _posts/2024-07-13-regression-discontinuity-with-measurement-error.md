---
layout: "post"
title: "Regression Discontinuity with Measurement Error"
date: "2024-07-13"
tags: ["econometrics", "causal inference"]
excerpt: "Measurement error in a running variable need not destroy an RD design."
note_series: "Regression discontinuity with measurement error"
note_source: "assets/notes/Overleaf Projects (32 items)/Notes on RDD Measurement Error (Dong Kolesar)/stats.tex"
redirect_from: ["/2024/07/13/when-measurement-error-can-be-ignored-in-regression-discontinuity/", "/2024/07/24/sharp-regression-discontinuity-with-measurement-error/", "/2024/08/05/fuzzy-regression-discontinuity-with-measurement-error/", "/2024/08/17/interpreting-the-measurement-error-conditions/"]
---

<div class="note-content" markdown="0">

<p>An RD comparison relies on knowing which side of the assignment cutoff an observation occupies. Measurement error may preserve that classification even while changing which latent values occur near the observed cutoff. <span class="citation" data-cites="dong_when_2023"><a href="#ref-dong_when_2023" role="doc-biblioref">Dong and Kolesár (2023)</a></span> separate these questions: whether the observed jump identifies an effect, and which population’s effect it identifies.</p>

<h3 data-note-section="1" id="20-0-what-the-observed-discontinuity-identifies">1. What the observed discontinuity identifies</h3>
<p>Let {% raw %}<span class="math inline">\(X^*=X+e\)</span>{% endraw %} be the latent running variable, with cutoff zero. Suppose assignment agrees almost surely with {% raw %}<span class="math inline">\(Z=1\{X\ge0\}\)</span>{% endraw %}. This is a substantive restriction on the measurement process; ordinary additive noise need not satisfy it.</p>

<div id="rd-error-sharp" class="theorem" data-note-number="1" data-note-kind="Theorem">
<p><strong>Theorem 1</strong>. In a sharp design, let {% raw %}<span class="math inline">\(T=Z\)</span>{% endraw %}. If {% raw %}<span class="math inline">\(g_t(x)=\mathbb{E}[Y(t)\mid X=x]\)</span>{% endraw %} is continuous at zero for {% raw %}<span class="math inline">\(t=0,1\)</span>{% endraw %}, the observed outcome jump identifies</p>

{% raw %}<div class="math display">\[
\tau=\mathbb{E}[Y(1)-Y(0)\mid X=0].
\]</div>{% endraw %}
<p>If, additionally, conditioning on the measurement error does not alter the conditional treatment effect at a given {% raw %}<span class="math inline">\(X^*\)</span>{% endraw %}, then</p>

{% raw %}<div class="math display">\[
\tau=\int\tau^*(e)\,dF_{e\mid X}(e\mid0),
\qquad \tau^*(x)=\mathbb{E}[Y(1)-Y(0)\mid X^*=x].
\]</div>{% endraw %}
</div>
<p>The first conclusion follows by taking limits of the treated and untreated conditional means. The second is an iterated-expectations calculation: among observations with {% raw %}<span class="math inline">\(X=0\)</span>{% endraw %}, the latent running variable equals {% raw %}<span class="math inline">\(e\)</span>{% endraw %}.</p>

<h3 data-note-section="2" id="20-0-the-estimand-can-move">2. The estimand can move</h3>
<p>The observed cutoff selects a distribution of latent values. It does not generally select {% raw %}<span class="math inline">\(X^*=0\)</span>{% endraw %}. For example, if {% raw %}<span class="math inline">\(\tau^*(x)=a+bx\)</span>{% endraw %}, then</p>

{% raw %}<div class="math display">\[
\tau=a+b\,\mathbb{E}[e\mid X=0].
\]</div>{% endraw %}
<p>Even perfect classification leaves a difference from the latent-cutoff effect {% raw %}<span class="math inline">\(a\)</span>{% endraw %} when the conditional error mean is nonzero. Constant treatment effects make this distinction disappear; unrestricted heterogeneity does not.</p>

<h3 data-note-section="3" id="20-0-fuzzy-assignment-adds-a-second-weighting">3. Fuzzy assignment adds a second weighting</h3>
<p>Now let {% raw %}<span class="math inline">\(T(z)\)</span>{% endraw %} be potential treatment status under assignment {% raw %}<span class="math inline">\(z\)</span>{% endraw %}, and let {% raw %}<span class="math inline">\(C=\{T(1)&gt;T(0)\}\)</span>{% endraw %} denote compliers. Impose exclusion, monotonicity, a positive treatment jump, and continuity at zero of the relevant potential-treatment and potential-outcome means.</p>

<div id="rd-error-fuzzy" class="theorem" data-note-number="2" data-note-kind="Theorem">
<p><strong>Theorem 2</strong>. The ratio of the outcome jump to the treatment jump identifies</p>

{% raw %}<div class="math display">\[
\tau_F=\mathbb{E}[Y(1)-Y(0)\mid C,X=0].
\]</div>{% endraw %}
<p>Under the corresponding nondifferential-error restrictions for compliance and complier effects,</p>

{% raw %}<div class="math display">\[
\tau_F=\int \tau_F^*(e)\,
\frac{\Pr(C\mid X^*=e)}{\int\Pr(C\mid X^*=u)\,dF_{e\mid X}(u\mid0)}
\,dF_{e\mid X}(e\mid0).
\]</div>{% endraw %}
</div>
<p>The outcome jump averages the treatment effect multiplied by the compliance indicator. The treatment jump averages that indicator alone. Their ratio therefore normalizes the complier weights. A small denominator makes the ratio unstable, as in <a href="{% post_url 2024-09-07-weak-instruments-and-the-tf-critical-value %}">weak-instrument inference</a>.</p>

<p>Once the weighted effect is identified, inference still requires smooth observed conditional means and control of local-polynomial bias. The measurement restriction preserves the assignment comparison; it does not supply those estimation conditions.</p>

<h3 data-note-section="4" id="20-0-deriving-the-observed-jump">4. Deriving the observed jump</h3>
<p>In the sharp design, observed outcomes satisfy</p>

{% raw %}<div class="math display">\[
Y=\mathbf1\{X\geq0\}Y(1)+\mathbf1\{X&lt;0\}Y(0).
\]</div>{% endraw %}
<p>Hence the right conditional mean is {% raw %}<span class="math inline">\(g_1(x)\)</span>{% endraw %} and the left conditional mean is {% raw %}<span class="math inline">\(g_0(x)\)</span>{% endraw %}. Continuity gives</p>

{% raw %}<div class="math display">\[
\lim_{x\downarrow0}\mathbb{E}[Y\mid X=x]
-\lim_{x\uparrow0}\mathbb{E}[Y\mid X=x]
=g_1(0)-g_0(0).
\]</div>{% endraw %}
<p>At a continuously distributed cutoff, these are limits of the specified continuous conditional-mean versions. Classification permits using treated potential outcomes on the right and untreated potential outcomes on the left, which is the essential step in the jump argument.</p>

<p>To see why this condition cannot be omitted, suppose instead that treatment is {% raw %}<span class="math inline">\(\mathbf1\{X^*\geq0\}\)</span>{% endraw %} and {% raw %}<span class="math inline">\(X=X^*+u\)</span>{% endraw %} contains ordinary continuous noise. Even with a constant treatment effect {% raw %}<span class="math inline">\(\tau\)</span>{% endraw %}, the observed regression can take the form</p>

{% raw %}<div class="math display">\[
\mathbb{E}[Y\mid X=x]
=\mathbb{E}[Y(0)\mid X=x]
 +\tau\,\mathbb P(X^*\geq0\mid X=x).
\]</div>{% endraw %}
<p>If assignment probability is smooth at the observed cutoff, the regression has no jump identifying {% raw %}<span class="math inline">\(\tau\)</span>{% endraw %}. More data estimate the smooth regression more accurately without restoring the lost classification. The theorem instead assumes assignment agrees with the observed side.</p>

<h3 data-note-section="5" id="20-0-from-the-observed-cutoff-to-a-latent-effect-average">5. From the observed cutoff to a latent-effect average</h3>
<p>Let {% raw %}<span class="math inline">\(\Delta Y=Y(1)-Y(0)\)</span>{% endraw %}. Iterated expectations always imply</p>

{% raw %}<div class="math display">\[
\mathbb{E}[\Delta Y\mid X=0]
=\int\mathbb{E}[\Delta Y\mid X=0,e=u]\,dF_{e\mid X}(u\mid0).
\]</div>{% endraw %}
<p>Since {% raw %}<span class="math inline">\(X^*=X+e\)</span>{% endraw %}, the inner conditioning fixes {% raw %}<span class="math inline">\(X^*=u\)</span>{% endraw %}. To replace that inner expectation by {% raw %}<span class="math inline">\(\tau^*(u)\)</span>{% endraw %}, one needs precisely the restriction that conditioning additionally on the measurement error does not change the mean effect at that latent value. Without it, two people at the same {% raw %}<span class="math inline">\(X^*\)</span>{% endraw %} but with different measurement errors could have different effects, and the latent-effect function alone would not describe the selected population.</p>

<p>For a quadratic latent effect, {% raw %}<span class="math inline">\(\tau^*(x)=a+bx+cx^2\)</span>{% endraw %}, the corresponding calculation is</p>

{% raw %}<div class="math display">\[
\tau-a=b\,\mathbb{E}[e\mid X=0]
+c\,\mathbb{E}[e^2\mid X=0].
\]</div>{% endraw %}
<p>Thus even conditionally mean-zero error does not generally recover the latent-cutoff effect. Curvature matters. More generally, if {% raw %}<span class="math inline">\(\tau^*\)</span>{% endraw %} is Lipschitz with constant {% raw %}<span class="math inline">\(K\)</span>{% endraw %}, then</p>

{% raw %}<div class="math display">\[
|\tau-\tau^*(0)|\leq K\,\mathbb{E}[|e|\mid X=0].
\]</div>{% endraw %}
<p>The bound states what measurement-quality information would imply under the weighting representation. It does not identify the unknown error law from the observed RD data.</p>

<h3 data-note-section="6" id="20-0-the-fuzzy-numerator-and-denominator-term-by-term">6. The fuzzy numerator and denominator, term by term</h3>
<p>Under exclusion, the potential observed outcome under assignment {% raw %}<span class="math inline">\(z\)</span>{% endraw %} is {% raw %}<span class="math inline">\(Y(T(z))\)</span>{% endraw %}. For binary treatment,</p>

{% raw %}<div class="math display">\[
Y(T(1))-Y(T(0))
=(Y(1)-Y(0))(T(1)-T(0)).
\]</div>{% endraw %}
<p>Monotonicity makes {% raw %}<span class="math inline">\(T(1)-T(0)=\mathbf1_C\)</span>{% endraw %}. Continuity of the appropriate conditional means therefore gives an outcome jump and treatment jump equal to</p>

{% raw %}<div class="math display">\[
J_Y=\mathbb{E}[\Delta Y\,\mathbf1_C\mid X=0],
\qquad J_T=\mathbb P(C\mid X=0).
\]</div>{% endraw %}
<p>Provided {% raw %}<span class="math inline">\(J_T&gt;0\)</span>{% endraw %}, their ratio is the mean effect among compliers at the observed cutoff. Always-takers and never-takers contribute zero to both differences; defiers would contribute with the opposite sign and invalidate this nonnegative-weight interpretation.</p>

<p>For the latent representation, write {% raw %}<span class="math inline">\(c(u)=\mathbb P(C\mid X^*=u)\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\tau_C^*(u)=\mathbb{E}[\Delta Y\mid C,X^*=u]\)</span>{% endraw %}. Under the additional error restrictions,</p>

{% raw %}<div class="math display">\[
J_Y=\int c(u)\tau_C^*(u)\,dF_{e\mid X}(u\mid0),
\qquad
J_T=\int c(u)\,dF_{e\mid X}(u\mid0).
\]</div>{% endraw %}
<p>Dividing gives the theorem’s weights. Latent values with more compliers receive more weight even if the measurement-error distribution itself is symmetric. For instance, two equally likely latent values with compliance probabilities {% raw %}<span class="math inline">\(1/4\)</span>{% endraw %} and {% raw %}<span class="math inline">\(3/4\)</span>{% endraw %} receive normalized weights {% raw %}<span class="math inline">\(1/4\)</span>{% endraw %} and {% raw %}<span class="math inline">\(3/4\)</span>{% endraw %}, not {% raw %}<span class="math inline">\(1/2\)</span>{% endraw %} each.</p>

<p>The compliance reweighting has a useful covariance decomposition. Take all expectations in the next display with respect to {% raw %}<span class="math inline">\(F_{e\mid X}(\cdot\mid0)\)</span>{% endraw %}, and suppose {% raw %}<span class="math inline">\(\mathbb{E}c&gt;0\)</span>{% endraw %}. Then</p>

{% raw %}<div class="math display">\[
\tau_F
=\frac{\mathbb{E}[c\tau_C^*]}{\mathbb{E}c}
=\mathbb{E}\tau_C^*
+\frac{\operatorname{Cov}(c,\tau_C^*)}{\mathbb{E}c}.
\]</div>{% endraw %}
<p>The first term averages latent complier effects over the cutoff’s error distribution. The covariance term accounts for greater weight at latent values with more compliers. Centered, symmetric error need not make that covariance zero.</p>

<p>If {% raw %}<span class="math inline">\(\tau_C^*\)</span>{% endraw %} is Lipschitz with constant {% raw %}<span class="math inline">\(K\)</span>{% endraw %}, its distance from the latent-cutoff complier effect is bounded by</p>

{% raw %}<div class="math display">\[
|\tau_F-\tau_C^*(0)|
\leq K\frac{\mathbb{E}[c(e)|e|]}{\mathbb{E}c(e)}.
\]</div>{% endraw %}
<p>The relevant error magnitude is itself weighted by compliance. Knowing the unweighted mean absolute measurement error can be insufficient for a sharp interpretation bound when compliance varies strongly with {% raw %}<span class="math inline">\(e\)</span>{% endraw %}.</p>

<p>Correct classification preserves the observed-cutoff discontinuity. Measurement error determines which latent values that cutoff represents, and compliance reweights those values in a fuzzy design. These changes in interpretation remain even with perfectly estimated jumps.</p>

<p>Finally, for estimated jumps {% raw %}<span class="math inline">\(\widehat J_Y,\widehat J_T\)</span>{% endraw %}, a first-order ratio expansion is</p>

{% raw %}<div class="math display">\[
\widehat\tau_F-\tau_F
\approx\frac{(\widehat J_Y-J_Y)-\tau_F(\widehat J_T-J_T)}{J_T}.
\]</div>{% endraw %}
<p>Both jumps use the same observations, so their covariance enters the variance of the expanded numerator. A small {% raw %}<span class="math inline">\(J_T\)</span>{% endraw %} magnifies error and smoothing bias in either jump. Establishing the weighted estimand is therefore distinct from obtaining an accurate confidence interval.</p>

<div id="refs" class="references csl-bib-body hanging-indent" data-entry-spacing="0" role="list">
<div id="ref-dong_when_2023" class="csl-entry" role="listitem">
Dong, Yingying, and Michal Kolesár. 2023. <span>“When Can We Ignore Measurement Error in the Running Variable?”</span> <em>Journal of Applied Econometrics</em> 38 (5): 735–50. <a href="https://doi.org/10.1002/jae.2974">https://doi.org/10.1002/jae.2974</a>.
</div>
</div>



</div>
