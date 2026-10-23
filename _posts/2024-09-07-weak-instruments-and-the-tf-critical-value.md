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

<p>In a just-identified IV regression, the usual {% raw %}<span class="math inline">\(t\)</span>{% endraw %} statistic depends on the strength of the first stage even under the null. The {% raw %}<span class="math inline">\(tF\)</span>{% endraw %} procedure of <span class="citation" data-cites="lee_valid_2022">Lee et al. (<a href="#ref-lee_valid_2022" role="doc-biblioref">2022</a>)</span> adjusts the critical value using the first-stage {% raw %}<span class="math inline">\(F\)</span>{% endraw %} statistic. Its application requires only the IV estimate, its standard error, and {% raw %}<span class="math inline">\(F\)</span>{% endraw %}, but its justification depends on the joint distribution of the reduced-form and first-stage estimators.</p>

<p>Write {% raw %}<span class="math inline">\(c_\alpha(F)\)</span>{% endraw %} for the critical value of the <strong>squared</strong> statistic, so the cutoff for {% raw %}<span class="math inline">\(|t|\)</span>{% endraw %} is {% raw %}<span class="math inline">\(\sqrt{c_\alpha(F)}\)</span>{% endraw %}. The model has one endogenous regressor and one excluded instrument.</p>

<h3 data-note-section="1" id="24-0-model">1. Model and weak-instrument asymptotics</h3>
<p>Let {% raw %}<span class="math inline">\(Y_i\)</span>{% endraw %}, {% raw %}<span class="math inline">\(X_i\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(Z_i\)</span>{% endraw %} denote the outcome, endogenous regressor, and excluded instrument. Included exogenous controls, including an intercept, are partialled out of all three variables. Write the residualized structural equation and first stage as</p>

{% raw %}<span id="eq:tf-model"></span><div class="math display">\[
Y_i=\beta X_i+u_i,
\qquad
X_i=\pi_n Z_i+v_i,
\qquad
\mathbb{E}[Z_i u_i]=\mathbb{E}[Z_i v_i]=0.

\tag{1}\]</div>{% endraw %}
<p>The subscript on {% raw %}<span class="math inline">\(\pi_n\)</span>{% endraw %} permits instrument strength to change with the sample size. Correlation between {% raw %}<span class="math inline">\(u_i\)</span>{% endraw %} and {% raw %}<span class="math inline">\(v_i\)</span>{% endraw %} is allowed. Instrument validity is imposed through the moment restriction on {% raw %}<span class="math inline">\(u_i\)</span>{% endraw %}; the {% raw %}<span class="math inline">\(tF\)</span>{% endraw %} adjustment does not establish that restriction. For a <a href="{% post_url 2022-12-28-shift-share-iv-exogenous-shares-and-rotemberg-weights %}">shift-share instrument</a>, for example, the source of exogenous variation must be justified separately.</p>

<p>With {% raw %}<span class="math inline">\(Z&#x27;Z&gt;0\)</span>{% endraw %}, define</p>

{% raw %}<span id="eq:tf-estimators"></span><div class="math display">\[
\widehat\Gamma=\frac{Z&#x27;Y}{Z&#x27;Z},
\qquad
\widehat\pi=\frac{Z&#x27;X}{Z&#x27;Z},
\qquad
\widehat\beta=\frac{\widehat\Gamma}{\widehat\pi}.

\tag{2}\]</div>{% endraw %}
<p>The last equality is the just-identified 2SLS estimator, defined when {% raw %}<span class="math inline">\(\widehat\pi\ne0\)</span>{% endraw %}. Let the estimated covariance matrix of the reduced-form and first-stage coefficients be</p>

{% raw %}<div class="math display">\[
\widehat\Sigma=
\begin{pmatrix}
\widehat s_\Gamma^2&amp;\widehat s_{\Gamma\pi}\\
\widehat s_{\Gamma\pi}&amp;\widehat s_\pi^2
\end{pmatrix}.
\]</div>{% endraw %}
<p>Use a common covariance estimator and normalization throughout. The algebra below applies to homoskedastic, heteroskedasticity-consistent, cluster, and time-series estimators with a common bilinear form. The limit theory also requires covariance consistency under the relevant sampling scheme; for clustered inference, this includes conditions on the number and structure of clusters.</p>

<p>For the null hypothesis {% raw %}<span class="math inline">\(H_0:\beta=\beta_0\)</span>{% endraw %}, put</p>

{% raw %}<div class="math display">\[
M_0=
\begin{pmatrix}1&amp;-\beta_0\\0&amp;1\end{pmatrix},
\qquad
\widehat s_a^2=
\widehat s_\Gamma^2-2\beta_0\widehat s_{\Gamma\pi}
+\beta_0^2\widehat s_\pi^2.
\]</div>{% endraw %}
<div id="tf-weak-assumptions" class="assumption" data-note-number="1" data-note-kind="Assumption">
<p><strong>Assumption 1</strong>. (Weak-instrument sequence.) Under {% raw %}<span class="math inline">\(H_0\)</span>{% endraw %}, suppose</p>

{% raw %}<span id="eq:tf-clt"></span><div class="math display">\[
\sqrt n\,\pi_n\longrightarrow\kappa\in\mathbb R,
\qquad
\sqrt n
\begin{pmatrix}
\widehat\Gamma-\beta_0\widehat\pi\\
\widehat\pi-\pi_n
\end{pmatrix}
\Rightarrow
\mathcal{N}(0,\Omega_0),

\tag{3}\]</div>{% endraw %}
<p>where</p>

{% raw %}<div class="math display">\[
\Omega_0=
\begin{pmatrix}
\sigma_a^2&amp;\rho\sigma_a\sigma_\pi\\
\rho\sigma_a\sigma_\pi&amp;\sigma_\pi^2
\end{pmatrix},
\qquad
\sigma_a,\sigma_\pi&gt;0,
\quad |\rho|&lt;1.
\]</div>{% endraw %}
<p>Assume also that {% raw %}<span class="math inline">\(nM_0\widehat\Sigma M_0&#x27;\xrightarrow{p}\Omega_0\)</span>{% endraw %} and that {% raw %}<span class="math inline">\(\widehat\Sigma\)</span>{% endraw %} is positive definite with probability tending to one.</p>

</div>
<p>These are high-level conditions on the coefficient estimators and their covariance estimates. They state the joint central limit theorem and consistency requirements used in the paper’s online Appendix A.1. The normalization is written for a {% raw %}<span class="math inline">\(\sqrt n\)</span>{% endraw %} rate; other sampling schemes require the corresponding rate and local sequence. Finite-sample normality of the observations is not assumed.</p>

<p>Define the standardized null score, signed first-stage statistic, and estimated score correlation by</p>

{% raw %}<span id="eq:tf-standardized-statistics"></span><div class="math display">\[
\widehat A=
\frac{\widehat\Gamma-\beta_0\widehat\pi}{\widehat s_a},
\qquad
\widehat f=\frac{\widehat\pi}{\widehat s_\pi},
\qquad
\widehat\rho_0=
\frac{\widehat s_{\Gamma\pi}-\beta_0\widehat s_\pi^2}
{\widehat s_a\widehat s_\pi}.

\tag{4}\]</div>{% endraw %}
<p>Slutsky’s theorem gives</p>

{% raw %}<span id="eq:tf-gaussian-experiment"></span><div class="math display">\[
(\widehat A,\widehat f,\widehat\rho_0)
\Rightarrow(A,f,\rho),
\qquad
\begin{pmatrix}A\\f\end{pmatrix}
\sim\mathcal{N}\left(
\begin{pmatrix}0\\f_0\end{pmatrix},
\begin{pmatrix}1&amp;\rho\\\rho&amp;1\end{pmatrix}
\right),
\qquad f_0=\frac{\kappa}{\sigma_\pi}.

\tag{5}\]</div>{% endraw %}
<p>The signed score {% raw %}<span class="math inline">\(\widehat A\)</span>{% endraw %} is the t-ratio form of the Anderson–Rubin statistic: {% raw %}<span class="math inline">\(\widehat A^2\)</span>{% endraw %} is the one-instrument AR statistic when its covariance calculation agrees with {% raw %}<span class="math inline">\(\widehat\Sigma\)</span>{% endraw %}. The first-stage Wald statistic is {% raw %}<span class="math inline">\(\widehat F=\widehat f^2\)</span>{% endraw %}. Its limit satisfies</p>

{% raw %}<div class="math display">\[
F=f^2\sim\chi_1^2(f_0^2),
\qquad \mathbb{E}[F]=1+f_0^2.
\]</div>{% endraw %}
<p>Thus {% raw %}<span class="math inline">\(f_0\)</span>{% endraw %} is a parameter of the first-stage distribution, whereas {% raw %}<span class="math inline">\(\widehat F\)</span>{% endraw %} is an observed statistic. Even when {% raw %}<span class="math inline">\(f_0=0\)</span>{% endraw %}, {% raw %}<span class="math inline">\(F\)</span>{% endraw %} remains random. The weak-instrument experiment therefore allows a large observed first stage to result from sampling variation.</p>

<h3 data-note-section="2" id="24-0-variance-identity">2. The IV variance identity</h3>
<p><span id="24-0-a-useful-identity"></span></p>

<p>The conventional IV standard error can be written</p>

{% raw %}<span id="eq:tf-iv-variance"></span><div class="math display">\[
\widehat s_\beta^2=
\frac{
\widehat s_\Gamma^2-2\widehat\beta\widehat s_{\Gamma\pi}
+\widehat\beta^2\widehat s_\pi^2}
{\widehat\pi^2}.

\tag{6}\]</div>{% endraw %}
<p>This is an algebraic relation between compatible covariance estimates. The residual calculation in the <a href="#24-0-covariance-proof">appendix</a> establishes it directly. Its use here does not assume that the delta-method normal approximation for {% raw %}<span class="math inline">\(\widehat\beta\)</span>{% endraw %} is valid.</p>

<div id="tf-variance-lemma" class="lemma" data-note-number="2" data-note-kind="Lemma">
<p><strong>Lemma 2</strong>. (Sample variance identity.) Suppose {% raw %}<span class="math inline">\(\widehat\pi\ne0\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\widehat\Sigma\)</span>{% endraw %} is positive definite. For {% raw %}<span class="math inline">\(\widehat t=(\widehat\beta-\beta_0)/\widehat s_\beta\)</span>{% endraw %},</p>

{% raw %}<span id="eq:tf-wald-identity"></span><div class="math display">\[
\widehat t^{\,2}=
\frac{\widehat A^2}
{1-2\widehat\rho_0\widehat A/\widehat f
+(\widehat A/\widehat f)^2}.

\tag{7}\]</div>{% endraw %}
</div>
<p><em>Proof.</em> Write {% raw %}<span class="math inline">\(d=\widehat\beta-\beta_0\)</span>{% endraw %}. Expanding the numerator of the variance around {% raw %}<span class="math inline">\(\beta_0\)</span>{% endraw %} yields</p>

{% raw %}<div class="math display">\[
\widehat\pi^2\widehat s_\beta^2
=\widehat s_a^2
-2d(\widehat s_{\Gamma\pi}-\beta_0\widehat s_\pi^2)
+d^2\widehat s_\pi^2.
\]</div>{% endraw %}
<p>Since {% raw %}<span class="math inline">\(d=\widehat s_a\widehat A/\widehat\pi\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
\widehat\pi^2\widehat s_\beta^2
=\widehat s_a^2
\left(1-2\widehat\rho_0\frac{\widehat A}{\widehat f}
+\frac{\widehat A^2}{\widehat f^2}\right),
\qquad
d^2=\frac{\widehat s_a^2\widehat A^2}{\widehat\pi^2}.
\]</div>{% endraw %}
<p>Taking {% raw %}<span class="math inline">\(d^2/\widehat s_\beta^2\)</span>{% endraw %} proves the identity. {% raw %}<span class="math inline">\(\square\)</span>{% endraw %}</p>

<p>Under the weak-instrument assumptions, the continuous mapping theorem now gives</p>

{% raw %}<span id="eq:tf-limit-statistic"></span><div class="math display">\[
\widehat t^{\,2}\Rightarrow
T(A,f;\rho)
\triangleq
\frac{A^2f^2}{f^2-2\rho Af+A^2},
\qquad
\widehat F\Rightarrow F=f^2.

\tag{8}\]</div>{% endraw %}
<p>The denominator is</p>

{% raw %}<div class="math display">\[
f^2-2\rho Af+A^2
=(A-\rho f)^2+(1-\rho^2)f^2.
\]</div>{% endraw %}
<p>For {% raw %}<span class="math inline">\(|\rho|&lt;1\)</span>{% endraw %}, it is positive except at {% raw %}<span class="math inline">\((A,f)=(0,0)\)</span>{% endraw %}, an event of probability zero. The equivalent expression</p>

{% raw %}<div class="math display">\[
T(A,f;\rho)=
\frac{A^2}{1-2\rho A/f+(A/f)^2}
\]</div>{% endraw %}
<p>holds whenever {% raw %}<span class="math inline">\(f\ne0\)</span>{% endraw %}. Its numerator has a {% raw %}<span class="math inline">\(\chi_1^2\)</span>{% endraw %} distribution under the null. The denominator depends on both the null score and the first-stage noise, so the ratio generally does not have that distribution.</p>

<p>Weakness alone does not imply overrejection at every parameter value. If {% raw %}<span class="math inline">\(\rho=0\)</span>{% endraw %}, then</p>

{% raw %}<div class="math display">\[
T(A,f;0)=\frac{A^2f^2}{A^2+f^2}\leq A^2.
\]</div>{% endraw %}
<p>Consequently the ordinary squared normal critical value gives a conservative test in this case. When {% raw %}<span class="math inline">\(|\rho|\)</span>{% endraw %} is close to one, the denominator can instead be small relative to {% raw %}<span class="math inline">\(A^2f^2\)</span>{% endraw %}. A size correction that permits unrestricted score correlation must account for these cases too.</p>

<h3 data-note-section="3" id="24-0-screening">3. First-stage screening and the strong-instrument limit</h3>
<p><span id="24-0-why-screening-on-f-is-insufficient"></span> <span id="24-0-why-a-first-stage-screen-changes-the-score-distribution"></span></p>

<p>The Gaussian experiment has the representation</p>

{% raw %}<span id="eq:tf-independent-representation"></span><div class="math display">\[
f=f_0+V,
\qquad
A=\rho V+\sqrt{1-\rho^2}\,E,
\qquad V,E\overset{\mathrm{ind}}{\sim}\mathcal{N}(0,1).

\tag{9}\]</div>{% endraw %}
<p>It follows that</p>

{% raw %}<span id="eq:tf-conditional-score"></span><div class="math display">\[
A\mid f=u\sim
\mathcal{N}\big(\rho(u-f_0),1-\rho^2\big).

\tag{10}\]</div>{% endraw %}
<p>A large {% raw %}<span class="math inline">\(|f|\)</span>{% endraw %} can select a large realization of {% raw %}<span class="math inline">\(V\)</span>{% endraw %}, which also enters {% raw %}<span class="math inline">\(A\)</span>{% endraw %} when {% raw %}<span class="math inline">\(\rho\ne0\)</span>{% endraw %}. Conditioning on {% raw %}<span class="math inline">\(F=f^2\)</span>{% endraw %} mixes the conditional distributions at {% raw %}<span class="math inline">\(f=\sqrt F\)</span>{% endraw %} and {% raw %}<span class="math inline">\(f=-\sqrt F\)</span>{% endraw %}. This mixture generally differs from the unconditional standard normal law of {% raw %}<span class="math inline">\(A\)</span>{% endraw %}.</p>

<p>Fix a significance level {% raw %}<span class="math inline">\(\alpha\in(0,1)\)</span>{% endraw %}. Let {% raw %}<span class="math inline">\(z_{1-\alpha/2}=\Phi^{-1}(1-\alpha/2)\)</span>{% endraw %} and {% raw %}<span class="math inline">\(q_\alpha=z_{1-\alpha/2}^2\)</span>{% endraw %}, where {% raw %}<span class="math inline">\(\Phi\)</span>{% endraw %} is the standard normal distribution function. A rule that rejects only when {% raw %}<span class="math inline">\(F&gt;K\)</span>{% endraw %} and {% raw %}<span class="math inline">\(T&gt;q_\alpha\)</span>{% endraw %} has rejection probability</p>

{% raw %}<span id="eq:tf-step-rule"></span><div class="math display">\[
\Pr_{f_0,\rho}\{T&gt;q_\alpha,\ F&gt;K\}.

\tag{11}\]</div>{% endraw %}
<p>This is an unconditional probability of a joint event. It differs from the rejection probability conditional on passing the screen. Inverting the joint rule gives the entire real line when the screen fails; dropping those specifications from the analysis changes the inferential procedure.</p>

<p>For {% raw %}<span class="math inline">\(\alpha=0.05\)</span>{% endraw %}, the paper’s numerical calculations give a worst-case rejection probability of approximately {% raw %}<span class="math inline">\(0.113\)</span>{% endraw %} for {% raw %}<span class="math inline">\(K=10\)</span>{% endraw %} and the usual {% raw %}<span class="math inline">\(1.96\)</span>{% endraw %} cutoff. Using {% raw %}<span class="math inline">\(1.96\)</span>{% endraw %} with a threshold of approximately {% raw %}<span class="math inline">\(104.7\)</span>{% endraw %}, or using approximately {% raw %}<span class="math inline">\(3.43\)</span>{% endraw %} with the threshold {% raw %}<span class="math inline">\(10\)</span>{% endraw %}, controls rejection at {% raw %}<span class="math inline">\(0.05\)</span>{% endraw %} in those calculations. These are results for the complete joint rules, including nonrejection below the threshold; see online Appendix A.7. The {% raw %}<span class="math inline">\(tF\)</span>{% endraw %} curve replaces such a step rule with a critical value that varies with {% raw %}<span class="math inline">\(F\)</span>{% endraw %}.</p>

<h4 data-note-section="3.1" id="24-0-strong-limit">3.1. The strong-instrument limit</h4>
<p><span id="24-0-the-strong-first-stage-limit"></span></p>

<p>Within the Gaussian experiment, let {% raw %}<span class="math inline">\(|f_0|\to\infty\)</span>{% endraw %} with {% raw %}<span class="math inline">\(\rho\)</span>{% endraw %} fixed. Since {% raw %}<span class="math inline">\(f=f_0+O_p(1)\)</span>{% endraw %} and {% raw %}<span class="math inline">\(A=O_p(1)\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
\frac{A}{f}=O_p(|f_0|^{-1}),
\qquad
T(A,f;\rho)-A^2=o_p(1).
\]</div>{% endraw %}
<p>More precisely, expansion of the reciprocal denominator gives</p>

{% raw %}<span id="eq:tf-strong-expansion"></span><div class="math display">\[
T(A,f;\rho)
=A^2+\frac{2\rho A^3}{f}
+\frac{(4\rho^2-1)A^4}{f^2}
+O_p(|f_0|^{-3}).

\tag{12}\]</div>{% endraw %}
<p>For fixed {% raw %}<span class="math inline">\(\rho\)</span>{% endraw %}, the reciprocal of {% raw %}<span class="math inline">\(1-2\rho x+x^2\)</span>{% endraw %} has a Taylor remainder bounded by a constant times {% raw %}<span class="math inline">\(|x|^3\)</span>{% endraw %} near zero. Substituting {% raw %}<span class="math inline">\(x=A/f\)</span>{% endraw %} and multiplying by {% raw %}<span class="math inline">\(A^2=O_p(1)\)</span>{% endraw %} gives the displayed remainder. This argument requires {% raw %}<span class="math inline">\(|f_0|\to\infty\)</span>{% endraw %}. Under a weak-instrument sequence with bounded {% raw %}<span class="math inline">\(f_0\)</span>{% endraw %}, a large realized {% raw %}<span class="math inline">\(F\)</span>{% endraw %} does not imply that {% raw %}<span class="math inline">\(A/f\)</span>{% endraw %} converges to zero.</p>

<h3 data-note-section="4" id="24-0-construction">4. Construction and coverage of the tF procedure</h3>
<p><span id="24-0-the-main-inference-result"></span></p>

<p>For a measurable candidate critical-value function {% raw %}<span class="math inline">\(k:[0,\infty)\to(0,\infty]\)</span>{% endraw %}, define its null rejection probability in the Gaussian experiment by</p>

{% raw %}<span id="eq:tf-size-function"></span><div class="math display">\[
r_k(f_0,\rho)
\triangleq\Pr_{f_0,\rho}\{T(A,f;\rho)&gt;k(f^2)\}.

\tag{13}\]</div>{% endraw %}
<p>The calibration problem is to choose {% raw %}<span class="math inline">\(c_\alpha\)</span>{% endraw %} such that</p>

{% raw %}<span id="eq:tf-size-bound"></span><div class="math display">\[
\sup_{f_0\in\mathbb R,\ |\rho|&lt;1}
r_{c_\alpha}(f_0,\rho)\leq\alpha.

\tag{14}\]</div>{% endraw %}
<p>Boundary experiments with {% raw %}<span class="math inline">\(|\rho|=1\)</span>{% endraw %} and {% raw %}<span class="math inline">\(f_0\ne0\)</span>{% endraw %} are also used in the construction. These singular Gaussian laws are handled directly, rather than by substituting them into a nonsingular bivariate density.</p>

<h4 data-note-section="4.1" id="24-0-boundary">4.1. The boundary experiment</h4>
<p>At {% raw %}<span class="math inline">\(\rho=1\)</span>{% endraw %} and {% raw %}<span class="math inline">\(f_0&gt;0\)</span>{% endraw %}, {% raw %}<span class="math inline">\(A=f-f_0\)</span>{% endraw %} almost surely, and</p>

{% raw %}<span id="eq:tf-quartic"></span><div class="math display">\[
T(A,f;1)=\frac{f^2(f-f_0)^2}{f_0^2}.

\tag{15}\]</div>{% endraw %}
<p>As a function of {% raw %}<span class="math inline">\(f\)</span>{% endraw %}, this quartic has zeros at {% raw %}<span class="math inline">\(0\)</span>{% endraw %} and {% raw %}<span class="math inline">\(f_0\)</span>{% endraw %}, and a local maximum of {% raw %}<span class="math inline">\(f_0^2/16\)</span>{% endraw %} at {% raw %}<span class="math inline">\(f_0/2\)</span>{% endraw %}. For sufficiently small {% raw %}<span class="math inline">\(f_0\)</span>{% endraw %}, the construction seeks a decreasing curve {% raw %}<span class="math inline">\(\widetilde c_\alpha\)</span>{% endraw %} for which the acceptance set is a single interval {% raw %}<span class="math inline">\([\ell(f_0),r(f_0)]\)</span>{% endraw %}. Exact acceptance probability {% raw %}<span class="math inline">\(1-\alpha\)</span>{% endraw %} requires</p>

{% raw %}<span id="eq:tf-boundary-system"></span><div class="math display">\[
\begin{aligned}
\frac{\ell(f_0)^2(\ell(f_0)-f_0)^2}{f_0^2}
&amp;=\widetilde c_\alpha(\ell(f_0)^2),\\
\Phi(r(f_0)-f_0)-\Phi(\ell(f_0)-f_0)
&amp;=1-\alpha,\\
\frac{r(f_0)^2(r(f_0)-f_0)^2}{f_0^2}
&amp;=\widetilde c_\alpha(r(f_0)^2).
\end{aligned}

\tag{16}\]</div>{% endraw %}
<p>The existence of a curve satisfying these equations is a separate mathematical result. The paper proves a local existence and uniqueness statement in online Appendix B.2, Lemma 9, and extends the curve by an iterative construction. In the notation used here, its expansion is</p>

{% raw %}<span id="eq:tf-boundary-expansion"></span><div class="math display">\[
\widetilde c_\alpha(F)
=\frac{q_\alpha^3}{F-q_\alpha}
-\left(3q_\alpha-\frac{q_\alpha^2}{2}
+\frac{q_\alpha^3}{6}\right)
+O\big(\sqrt{F-q_\alpha}\big),
\qquad F\downarrow q_\alpha.

\tag{17}\]</div>{% endraw %}
<p>The <a href="#24-0-curve-proof">construction appendix</a> states the scope of that result and derives the map used to extend the curve. The expansion is local; evaluating its leading terms at an arbitrary {% raw %}<span class="math inline">\(F\)</span>{% endraw %} is not an implementation of the {% raw %}<span class="math inline">\(tF\)</span>{% endraw %} test.</p>

<h4 data-note-section="4.2" id="24-0-plateau">4.2. The decreasing segment and the plateau</h4>
<p>The paper considers functions that are infinite on {% raw %}<span class="math inline">\(F\leq q_\alpha\)</span>{% endraw %}, decrease on an interval immediately above {% raw %}<span class="math inline">\(q_\alpha\)</span>{% endraw %}, and then become constant. Online Appendix B.2, Propositions 1 and 2, establish that its candidate class is nonempty and that two candidates agree wherever both decrease. Their plateau locations can differ. The {% raw %}<span class="math inline">\(tF\)</span>{% endraw %} choice uses the lowest plateau consistent with the size restriction and the construction’s acceptance-region condition.</p>

<p>For the published calibrations, the relevant values are:</p>

<table>
<colgroup>
<col style="width: 25%" />
<col style="width: 25%" />
<col style="width: 25%" />
<col style="width: 25%" />
</colgroup>
<thead>
<tr>
<th style="text-align: left;">Significance level {% raw %}<span class="math inline">\(\alpha\)</span>{% endraw %}</th>
<th style="text-align: right;">Boundary {% raw %}<span class="math inline">\(q_\alpha\)</span>{% endraw %}</th>
<th style="text-align: right;">Approximate {% raw %}<span class="math inline">\(F\)</span>{% endraw %} where the plateau begins</th>
<th style="text-align: right;">Plateau for {% raw %}<span class="math inline">\(\sqrt{c_\alpha(F)}\)</span>{% endraw %}</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: left;">{% raw %}<span class="math inline">\(0.05\)</span>{% endraw %}</td>
<td style="text-align: right;">{% raw %}<span class="math inline">\(3.84146\)</span>{% endraw %}</td>
<td style="text-align: right;">{% raw %}<span class="math inline">\(104.7\)</span>{% endraw %}</td>
<td style="text-align: right;">{% raw %}<span class="math inline">\(1.96\)</span>{% endraw %}</td>
</tr>
<tr>
<td style="text-align: left;">{% raw %}<span class="math inline">\(0.01\)</span>{% endraw %}</td>
<td style="text-align: right;">{% raw %}<span class="math inline">\(6.63490\)</span>{% endraw %}</td>
<td style="text-align: right;">{% raw %}<span class="math inline">\(252.34\)</span>{% endraw %}</td>
<td style="text-align: right;">{% raw %}<span class="math inline">\(2.73\)</span>{% endraw %}</td>
</tr>
</tbody>
</table>
<p>These values come from Tables 3A–3B and Section IIIB of <span class="citation" data-cites="lee_valid_2022">Lee et al. (<a href="#ref-lee_valid_2022" role="doc-biblioref">2022</a>)</span>. The 1% calibration retains a plateau above the ordinary {% raw %}<span class="math inline">\(2.576\)</span>{% endraw %} cutoff. Consequently the published 99% procedure remains conservative in the strong-instrument limit, even though {% raw %}<span class="math inline">\(T\)</span>{% endraw %} itself converges to {% raw %}<span class="math inline">\(A^2\)</span>{% endraw %}.</p>

<p>Lemma 9 establishes the local curve and its expansion. The authors select the plateau and assess size by numerical integration. Section IIIB, footnote 45, specifies a grid over {% raw %}<span class="math inline">\(f_0\in[0,80]\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\rho\in[0,1]\)</span>{% endraw %}, with a finer grid near {% raw %}<span class="math inline">\(\rho=1\)</span>{% endraw %}. This checks the reported calibration to numerical accuracy on that grid; it does not prove the supremum bound over the full parameter space. Online Appendix B.5 proves a local size result for small {% raw %}<span class="math inline">\(f_0\)</span>{% endraw %} and {% raw %}<span class="math inline">\(|\rho|\)</span>{% endraw %} near one. Neither local result establishes that {% raw %}<span class="math inline">\(|\rho|=1\)</span>{% endraw %} is least favorable for every {% raw %}<span class="math inline">\(f_0\)</span>{% endraw %}.</p>

<h4 data-note-section="4.3" id="24-0-inference">4.3. Test inversion and asymptotic coverage</h4>
<p>On samples with {% raw %}<span class="math inline">\(\widehat\Sigma\)</span>{% endraw %} positive definite and {% raw %}<span class="math inline">\(\widehat\pi\ne0\)</span>{% endraw %}, a function satisfying the size bound defines the test that rejects {% raw %}<span class="math inline">\(H_0:\beta=\beta_0\)</span>{% endraw %} when</p>

{% raw %}<div class="math display">\[
\frac{(\widehat\beta-\beta_0)^2}{\widehat s_\beta^2}
&gt;c_\alpha(\widehat F).
\]</div>{% endraw %}
<p>On all other samples, do not reject any candidate coefficient and set the confidence set to {% raw %}<span class="math inline">\(\mathbb R\)</span>{% endraw %}. For the convergence argument, assign {% raw %}<span class="math inline">\(\widehat t=\widehat F=0\)</span>{% endraw %} on these samples. This convention avoids evaluating an undefined IV estimate or standard error.</p>

<p>Because {% raw %}<span class="math inline">\(\widehat\beta\)</span>{% endraw %}, {% raw %}<span class="math inline">\(\widehat s_\beta\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(\widehat F\)</span>{% endraw %} do not change with the hypothesized value {% raw %}<span class="math inline">\(\beta_0\)</span>{% endraw %}, inversion gives</p>

{% raw %}<span id="eq:tf-confidence-set"></span><div class="math display">\[
\mathcal C_{tF}=
\begin{cases}
\mathbb R,&amp;\widehat F\leq q_\alpha,\\[2pt]
\left[\widehat\beta-\sqrt{c_\alpha(\widehat F)}\,\widehat s_\beta,
\ \widehat\beta+\sqrt{c_\alpha(\widehat F)}\,\widehat s_\beta\right],
&amp;\widehat F&gt;q_\alpha.
\end{cases}

\tag{18}\]</div>{% endraw %}
<div id="tf-calibration" class="proposition" data-note-number="3" data-note-kind="Proposition">
<p><strong>Proposition 3</strong>. (Coverage under the calibration bound.) Suppose the weak-instrument assumptions hold. Let {% raw %}<span class="math inline">\(c_\alpha\)</span>{% endraw %} be infinite on {% raw %}<span class="math inline">\([0,q_\alpha]\)</span>{% endraw %}, finite, continuous, and positive on {% raw %}<span class="math inline">\((q_\alpha,\infty)\)</span>{% endraw %}, and satisfy the Gaussian size bound. Then, along each sequence covered by those assumptions,</p>

{% raw %}<div class="math display">\[
\lim_{n\to\infty}
\Pr_{\beta_0}\{\widehat t^{\,2}&gt;c_\alpha(\widehat F)\}
=r_{c_\alpha}(f_0,\rho)\leq\alpha,
\qquad
\liminf_{n\to\infty}
\Pr_{\beta_0}\{\beta_0\in\mathcal C_{tF}\}\geq1-\alpha.
\]</div>{% endraw %}
</div>
<p><em>Proof.</em> The probability that {% raw %}<span class="math inline">\(\widehat\Sigma\)</span>{% endraw %} is not positive definite tends to zero by assumption. On the remaining samples, {% raw %}<span class="math inline">\(\widehat\pi=0\)</span>{% endraw %} implies {% raw %}<span class="math inline">\(\widehat f=0\)</span>{% endraw %}. Since {% raw %}<span class="math inline">\(\widehat f\Rightarrow f\)</span>{% endraw %} and {% raw %}<span class="math inline">\(f\)</span>{% endraw %} has a density, the Portmanteau theorem gives {% raw %}<span class="math inline">\(\Pr(\widehat f=0)\to0\)</span>{% endraw %} after any fixed extension of {% raw %}<span class="math inline">\(\widehat f\)</span>{% endraw %} to the exceptional samples. Thus the nonrejection convention affects an event of vanishing probability.</p>

<p>The variance identity and the Gaussian limit give joint convergence of {% raw %}<span class="math inline">\((\widehat t^{\,2},\widehat F)\)</span>{% endraw %}. For {% raw %}<span class="math inline">\(F&lt;q_\alpha\)</span>{% endraw %}, the test never rejects. On {% raw %}<span class="math inline">\(F&gt;q_\alpha\)</span>{% endraw %}, continuity of {% raw %}<span class="math inline">\(c_\alpha\)</span>{% endraw %} implies that a boundary point of the rejection region must satisfy {% raw %}<span class="math inline">\(T=c_\alpha(F)\)</span>{% endraw %}. For fixed {% raw %}<span class="math inline">\(f\ne0\)</span>{% endraw %} with {% raw %}<span class="math inline">\(f^2&gt;q_\alpha\)</span>{% endraw %}, this equality is</p>

{% raw %}<div class="math display">\[
\big(f^2-c_\alpha(f^2)\big)A^2
+2c_\alpha(f^2)\rho fA-c_\alpha(f^2)f^2=0.
\]</div>{% endraw %}
<p>Its constant term is strictly negative, so the polynomial is not identically zero and has at most two roots. The conditional law of {% raw %}<span class="math inline">\(A\)</span>{% endraw %} given {% raw %}<span class="math inline">\(f\)</span>{% endraw %} has a density when {% raw %}<span class="math inline">\(|\rho|&lt;1\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(\Pr(F=q_\alpha)=0\)</span>{% endraw %}. The entire rejection boundary therefore has probability zero. The Portmanteau theorem gives convergence of rejection probabilities, and test inversion gives coverage. {% raw %}<span class="math inline">\(\square\)</span>{% endraw %}</p>

<p>The Gaussian size bound is uniform in {% raw %}<span class="math inline">\((f_0,\rho)\)</span>{% endraw %}; the sample assumptions give convergence along each specified sequence. Uniform asymptotic coverage over a class of data-generating processes requires uniform approximation and covariance-consistency conditions for that class. The proposition does not assert finite-sample coverage.</p>

<h3 data-note-section="5" id="24-0-implementation">5. Implementing the adjustment</h3>
<p>For {% raw %}<span class="math inline">\(\widehat F&gt;q_\alpha\)</span>{% endraw %}, define</p>

{% raw %}<span id="eq:tf-adjustment-factor"></span><div class="math display">\[
a_\alpha(\widehat F)
\triangleq\frac{\sqrt{c_\alpha(\widehat F)}}{z_{1-\alpha/2}},
\qquad
\widehat s_{\beta,tF,\alpha}
=a_\alpha(\widehat F)\widehat s_\beta.

\tag{19}\]</div>{% endraw %}
<p>The interval is then {% raw %}<span class="math inline">\(\widehat\beta\pm z_{1-\alpha/2}\widehat s_{\beta,tF,\alpha}\)</span>{% endraw %}. The adjusted quantity implements a test at a specified significance level. It is not a new consistent estimator of the sampling standard deviation of {% raw %}<span class="math inline">\(\widehat\beta\)</span>{% endraw %}. Changing the confidence level requires the corresponding adjustment function.</p>

<p>The first-stage statistic must test the excluded instrument in the same specification as the IV regression. Its covariance estimator must agree with the covariance prescription used for the IV standard error. An overall regression {% raw %}<span class="math inline">\(F\)</span>{% endraw %} statistic or a statistic from a multiple-instrument model cannot be substituted into this one-instrument calibration.</p>

<p>For a numerical example, suppose a regression reports</p>

{% raw %}<div class="math display">\[
\widehat\beta=0.50,
\qquad \widehat s_\beta=0.20,
\qquad \widehat F=10.
\]</div>{% endraw %}
<p>Table 3A reports adjustment factors {% raw %}<span class="math inline">\(1.767\)</span>{% endraw %} at {% raw %}<span class="math inline">\(F=9.835\)</span>{% endraw %} and {% raw %}<span class="math inline">\(1.727\)</span>{% endraw %} at {% raw %}<span class="math inline">\(F=10.253\)</span>{% endraw %}. The paper states that the underlying adjustment function is convex, so linear interpolation between exact entries lies above the curve and gives a conservative approximation. The reported entries introduce rounding error as well. The paper’s example at {% raw %}<span class="math inline">\(F=10\)</span>{% endraw %} gives</p>

{% raw %}<div class="math display">\[
a_{0.05}(10)
\approx
1.727+
\frac{10.253-10}{10.253-9.835}(1.767-1.727)
=1.75121.
\]</div>{% endraw %}
<p>Thus {% raw %}<span class="math inline">\(\widehat s_{\beta,tF,0.05}\approx0.35024\)</span>{% endraw %} and the 95% interval is approximately</p>

{% raw %}<div class="math display">\[
0.50\pm1.96(0.35024)=[-0.1865,1.1865].
\]</div>{% endraw %}
<p>The conventional interval is {% raw %}<span class="math inline">\([0.108,0.892]\)</span>{% endraw %}. The usual statistic is {% raw %}<span class="math inline">\(2.5\)</span>{% endraw %}, which exceeds {% raw %}<span class="math inline">\(1.96\)</span>{% endraw %} but is below the adjusted cutoff of approximately {% raw %}<span class="math inline">\(3.4324\)</span>{% endraw %}. At {% raw %}<span class="math inline">\(\widehat F\leq q_{0.05}\approx3.84146\)</span>{% endraw %}, the 95% {% raw %}<span class="math inline">\(tF\)</span>{% endraw %} set would instead be {% raw %}<span class="math inline">\(\mathbb R\)</span>{% endraw %}. For more precise adjustment factors, the authors provide an implementation linked in footnote 19 of the published paper.</p>

<p>The empirical exercise in <span class="citation" data-cites="lee_valid_2022">Lee et al. (<a href="#ref-lee_valid_2022" role="doc-biblioref">2022</a>)</span> examines 61 AER studies using single-instrument specifications. Each study receives equal weight, divided equally among its specifications. In this weighted sample, at least one-quarter of the specifications with usable first-stage information have interval-length increases of at least 49% at 95% confidence and 136% at 99% confidence.</p>

<h3 data-note-section="6" id="24-0-ar-comparison">6. Anderson–Rubin confidence sets and interval length</h3>
<p><span id="24-0-inverting-andersonrubin-for-comparison"></span></p>

<p>Anderson–Rubin inference tests a candidate coefficient {% raw %}<span class="math inline">\(b\)</span>{% endraw %} using the reduced-form null score</p>

{% raw %}<div class="math display">\[
\widehat A(b)=
\frac{\widehat\Gamma-b\widehat\pi}
{\sqrt{\widehat s_\Gamma^2-2b\widehat s_{\Gamma\pi}
+b^2\widehat s_\pi^2}}.
\]</div>{% endraw %}
<p>Its confidence set is</p>

{% raw %}<span id="eq:tf-ar-set"></span><div class="math display">\[
\mathcal C_{AR}
=\left\{b\in\mathbb R:
(\widehat\Gamma-b\widehat\pi)^2
\leq q_\alpha
(\widehat s_\Gamma^2-2b\widehat s_{\Gamma\pi}
+b^2\widehat s_\pi^2)
\right\}.

\tag{20}\]</div>{% endraw %}
<p>Under the null, {% raw %}<span class="math inline">\(\widehat A(\beta_0)\Rightarrow\mathcal{N}(0,1)\)</span>{% endraw %} regardless of {% raw %}<span class="math inline">\(f_0\)</span>{% endraw %}. AR obtains its weak-instrument validity from this score limit. Its inversion nevertheless depends on the observed first stage because the null variance changes with {% raw %}<span class="math inline">\(b\)</span>{% endraw %}.</p>

<p>Moving all terms to the left yields</p>

{% raw %}<span id="eq:tf-ar-quadratic"></span><div class="math display">\[
H b^2-2Jb+K\leq0,
\quad
\begin{aligned}
H&amp;=\widehat\pi^2-q_\alpha\widehat s_\pi^2,\\
J&amp;=\widehat\Gamma\widehat\pi-q_\alpha\widehat s_{\Gamma\pi},\\
K&amp;=\widehat\Gamma^2-q_\alpha\widehat s_\Gamma^2.
\end{aligned}

\tag{21}\]</div>{% endraw %}
<p>If {% raw %}<span class="math inline">\(\widehat\Sigma\)</span>{% endraw %} is positive definite and {% raw %}<span class="math inline">\(\widehat F&gt;q_\alpha\)</span>{% endraw %}, then {% raw %}<span class="math inline">\(H&gt;0\)</span>{% endraw %} and {% raw %}<span class="math inline">\(J^2-HK&gt;0\)</span>{% endraw %}. Hence</p>

{% raw %}<div class="math display">\[
\mathcal C_{AR}
=\left[
\frac{J-\sqrt{J^2-HK}}{H},
\frac{J+\sqrt{J^2-HK}}{H}
\right].
\]</div>{% endraw %}
<p>The center is generally different from {% raw %}<span class="math inline">\(\widehat\beta\)</span>{% endraw %}. If {% raw %}<span class="math inline">\(\widehat F&lt;q_\alpha\)</span>{% endraw %}, the set is either the whole line or two unbounded rays. At equality it is a half-line or the whole line. The <a href="#24-0-ar-proof">appendix</a> gives the full classification, including the discriminant argument. Both AR and {% raw %}<span class="math inline">\(tF\)</span>{% endraw %} therefore produce bounded intervals exactly when {% raw %}<span class="math inline">\(\widehat F&gt;q_\alpha\)</span>{% endraw %}, although their unbounded sets can differ.</p>

<h4 data-note-section="6.1" id="24-0-length-comparison">6.1. Power and conditional expected length</h4>
<p>The two tests target the same significance level. In the paper’s comparisons, neither has greater power at every alternative and every nuisance-parameter configuration. The interval-length comparison averages over observations conditional on obtaining a bounded interval.</p>

<p>To state it precisely, work in the Gaussian experiment at the true coefficient {% raw %}<span class="math inline">\(\beta\)</span>{% endraw %}. Set {% raw %}<span class="math inline">\(\tau=\sigma_a/\sigma_\pi\)</span>{% endraw %}, {% raw %}<span class="math inline">\(q=q_\alpha\)</span>{% endraw %}, and</p>

{% raw %}<div class="math display">\[
B=A-\rho f.
\]</div>{% endraw %}
<p>The representation above implies</p>

{% raw %}<span id="eq:tf-independent-B"></span><div class="math display">\[
B=-\rho f_0+\sqrt{1-\rho^2}\,E,
\qquad B\ \text{is independent of } f.

\tag{22}\]</div>{% endraw %}
<p>On {% raw %}<span class="math inline">\(F&gt;q\)</span>{% endraw %}, the limiting lengths, measured in units of the original coefficient, are</p>

{% raw %}<span id="eq:tf-lengths"></span><div class="math display">\[
L_{AR}
=\frac{2\tau\sqrt q
\sqrt{B^2+(1-\rho^2)(F-q)}}{F-q},
\qquad
L_{tF}
=\frac{2\tau\sqrt{c_\alpha(F)}
\sqrt{B^2+(1-\rho^2)F}}{F}.

\tag{23}\]</div>{% endraw %}
<div id="tf-length-proposition" class="proposition" data-note-number="4" data-note-kind="Proposition">
<p><strong>Proposition 4</strong>. (Conditional expected length.) Fix {% raw %}<span class="math inline">\(\alpha\in(0,1)\)</span>{% endraw %}, finite {% raw %}<span class="math inline">\(f_0\)</span>{% endraw %}, {% raw %}<span class="math inline">\(|\rho|&lt;1\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(\tau&gt;0\)</span>{% endraw %}. Let {% raw %}<span class="math inline">\(c_\alpha:(q_\alpha,\infty)\to[0,\infty)\)</span>{% endraw %} be measurable, bounded on {% raw %}<span class="math inline">\([q_\alpha+\delta,\infty)\)</span>{% endraw %} for every {% raw %}<span class="math inline">\(\delta&gt;0\)</span>{% endraw %}, and satisfy</p>

{% raw %}<div class="math display">\[
c_\alpha(F)=O\big((F-q_\alpha)^{-1}\big)
\qquad(F\downarrow q_\alpha).
\]</div>{% endraw %}
<p>Then, in the Gaussian experiment,</p>

{% raw %}<div class="math display">\[
\mathbb{E}[L_{AR}\mid F&gt;q_\alpha]=\infty,
\qquad
\mathbb{E}[L_{tF}\mid F&gt;q_\alpha]&lt;\infty.
\]</div>{% endraw %}
</div>
<p>The published {% raw %}<span class="math inline">\(tF\)</span>{% endraw %} curve satisfies these conditions by its local expansion and plateau. The length argument needs only the stated upper bound, not the higher-order terms in that expansion or the size calibration. The proof in the <a href="#24-0-length-proof">appendix</a> uses the independence of {% raw %}<span class="math inline">\(B\)</span>{% endraw %} and {% raw %}<span class="math inline">\(F\)</span>{% endraw %}. Near {% raw %}<span class="math inline">\(F=q\)</span>{% endraw %}, the conditional mean AR length is bounded below by a positive multiple of {% raw %}<span class="math inline">\((F-q)^{-1}\)</span>{% endraw %}, whereas the conditional mean {% raw %}<span class="math inline">\(tF\)</span>{% endraw %} length is bounded above by a multiple of {% raw %}<span class="math inline">\((F-q)^{-1/2}\)</span>{% endraw %}. The density of {% raw %}<span class="math inline">\(F\)</span>{% endraw %} is positive and continuous at {% raw %}<span class="math inline">\(q\)</span>{% endraw %}, so the first singularity is nonintegrable and the second is integrable.</p>

<p>Both procedures have infinite unconditional expected length because {% raw %}<span class="math inline">\(\Pr(F\leq q)&gt;0\)</span>{% endraw %} and their sets are unbounded on that event. The conditional comparison does not say that every realized {% raw %}<span class="math inline">\(tF\)</span>{% endraw %} interval is shorter, nor that coverage remains {% raw %}<span class="math inline">\(1-\alpha\)</span>{% endraw %} after conditioning on {% raw %}<span class="math inline">\(F&gt;q\)</span>{% endraw %}. It is a result about lengths in the limiting Gaussian experiment; convergence in distribution of sample lengths alone does not imply convergence of their expectations.</p>

<h3 data-note-section="7" id="24-0-technical-appendix">7. Technical appendix</h3>
<h4 data-note-section="7.1" id="24-0-covariance-proof">7.1. The covariance identity from regression residuals</h4>
<p><span id="24-0-recovering-the-denominator-from-the-regression-residual"></span></p>

<p>Let</p>

{% raw %}<div class="math display">\[
\widehat e=Y-Z\widehat\Gamma,
\qquad
\widehat v=X-Z\widehat\pi,
\qquad
\widehat u=Y-X\widehat\beta.
\]</div>{% endraw %}
<p>Since {% raw %}<span class="math inline">\(\widehat\Gamma=\widehat\beta\widehat\pi\)</span>{% endraw %},</p>

{% raw %}<span id="eq:tf-residual-identity"></span><div class="math display">\[
\widehat u=\widehat e-\widehat\beta\widehat v.

\tag{24}\]</div>{% endraw %}
<p>For a fixed sample, write {% raw %}<span class="math inline">\(\widehat Q(r,s)\)</span>{% endraw %} for the symmetric bilinear covariance calculation applied to the instrument-weighted residuals. Examples are</p>

{% raw %}<div class="math display">\[
\widehat Q(r,s)=\sum_i Z_i^2r_is_i
\quad\text{or}\quad
\widehat Q(r,s)=\sum_g(Z_g&#x27;r_g)(Z_g&#x27;s_g)
\]</div>{% endraw %}
<p>for heteroskedasticity-consistent and one-way cluster covariance estimates without degrees-of-freedom adjustments. A common adjustment factor can be included. HAC calculations have the same bilinear form when the same weights are used for all entries. The required coefficient covariance entries are</p>

{% raw %}<div class="math display">\[
\widehat s_\Gamma^2=\frac{\widehat Q(\widehat e,\widehat e)}{(Z&#x27;Z)^2},
\quad
\widehat s_{\Gamma\pi}=\frac{\widehat Q(\widehat e,\widehat v)}{(Z&#x27;Z)^2},
\quad
\widehat s_\pi^2=\frac{\widehat Q(\widehat v,\widehat v)}{(Z&#x27;Z)^2}.
\]</div>{% endraw %}
<p>The just-identified IV sandwich variance is {% raw %}<span class="math inline">\(\widehat Q(\widehat u,\widehat u)/(Z&#x27;X)^2\)</span>{% endraw %}. Bilinearity and the residual identity give</p>

{% raw %}<div class="math display">\[
\begin{aligned}
\widehat Q(\widehat u,\widehat u)
&amp;=\widehat Q(\widehat e,\widehat e)
-2\widehat\beta\widehat Q(\widehat e,\widehat v)
+\widehat\beta^2\widehat Q(\widehat v,\widehat v),\\
Z&#x27;X&amp;=\widehat\pi Z&#x27;Z.
\end{aligned}
\]</div>{% endraw %}
<p>Substitution proves the <a href="#eq:tf-iv-variance">IV variance formula</a>. The null residual from regressing {% raw %}<span class="math inline">\(Y-\beta_0X\)</span>{% endraw %} on {% raw %}<span class="math inline">\(Z\)</span>{% endraw %} is {% raw %}<span class="math inline">\(\widehat a=\widehat e-\beta_0\widehat v\)</span>{% endraw %}, so</p>

{% raw %}<div class="math display">\[
\widehat u=\widehat a-(\widehat\beta-\beta_0)\widehat v.
\]</div>{% endraw %}
<p>This second representation yields the expansion used in the sample variance lemma. Software-specific corrections that use different normalizations in the first stage and IV regression can break exact finite-sample equality. The asymptotic argument remains applicable when those discrepancies vanish and the stated covariance consistency conditions hold.</p>

<h4 data-note-section="7.2" id="24-0-size-integral">7.2. Rejection probabilities by one-dimensional integration</h4>
<p>For {% raw %}<span class="math inline">\(|\rho|&lt;1\)</span>{% endraw %} and fixed {% raw %}<span class="math inline">\(f=u\)</span>{% endraw %}, let</p>

{% raw %}<div class="math display">\[
\mu_u=\rho(u-f_0),
\qquad s=\sqrt{1-\rho^2}.
\]</div>{% endraw %}
<p>When {% raw %}<span class="math inline">\(c=k(u^2)\)</span>{% endraw %} is finite and positive, the rejection event is</p>

{% raw %}<span id="eq:tf-rejection-quadratic"></span><div class="math display">\[
(u^2-c)A^2+2c\rho uA-cu^2&gt;0.

\tag{25}\]</div>{% endraw %}
<p>For {% raw %}<span class="math inline">\(u\ne0\)</span>{% endraw %}, write {% raw %}<span class="math inline">\(a_2=u^2-c\)</span>{% endraw %}, {% raw %}<span class="math inline">\(a_1=2c\rho u\)</span>{% endraw %}, {% raw %}<span class="math inline">\(a_0=-cu^2\)</span>{% endraw %}, and</p>

{% raw %}<div class="math display">\[
D=a_1^2-4a_2a_0
=4cu^2\big(u^2-c(1-\rho^2)\big).
\]</div>{% endraw %}
<p>If {% raw %}<span class="math inline">\(a_2&gt;0\)</span>{% endraw %}, {% raw %}<span class="math inline">\(D&gt;0\)</span>{% endraw %} and rejection occurs outside the two roots. If {% raw %}<span class="math inline">\(a_2&lt;0\)</span>{% endraw %} and {% raw %}<span class="math inline">\(D&gt;0\)</span>{% endraw %}, rejection occurs between the roots; if {% raw %}<span class="math inline">\(a_2&lt;0\)</span>{% endraw %} and {% raw %}<span class="math inline">\(D\leq0\)</span>{% endraw %}, it never occurs. Order the roots as {% raw %}<span class="math inline">\(r_-&lt;r_+\)</span>{% endraw %}. The conditional rejection probability is respectively</p>

{% raw %}<div class="math display">\[
\Phi\left(\frac{r_--\mu_u}{s}\right)
+1-\Phi\left(\frac{r_+-\mu_u}{s}\right)
\quad\text{or}\quad
\Phi\left(\frac{r_+-\mu_u}{s}\right)
-\Phi\left(\frac{r_--\mu_u}{s}\right).
\]</div>{% endraw %}
<p>If {% raw %}<span class="math inline">\(a_2=0\)</span>{% endraw %}, solve the linear inequality {% raw %}<span class="math inline">\(a_1A+a_0&gt;0\)</span>{% endraw %}; it is empty when {% raw %}<span class="math inline">\(a_1=0\)</span>{% endraw %}. Set the conditional probability to zero wherever {% raw %}<span class="math inline">\(k(u^2)=\infty\)</span>{% endraw %}. The value assigned at {% raw %}<span class="math inline">\(u=0\)</span>{% endraw %} does not affect the integral. Calling the resulting conditional probability {% raw %}<span class="math inline">\(p_k(u;f_0,\rho)\)</span>{% endraw %} gives</p>

{% raw %}<span id="eq:tf-one-dimensional-integral"></span><div class="math display">\[
r_k(f_0,\rho)
=\int_{\mathbb R}p_k(u;f_0,\rho)\phi(u-f_0)\,du,

\tag{26}\]</div>{% endraw %}
<p>where {% raw %}<span class="math inline">\(\phi\)</span>{% endraw %} is the standard normal density. The integral evaluates rejection at a fixed pair {% raw %}<span class="math inline">\((f_0,\rho)\)</span>{% endraw %}; the size bound requires its supremum over those parameters.</p>

<p>At {% raw %}<span class="math inline">\(\rho=1\)</span>{% endraw %} and {% raw %}<span class="math inline">\(f_0\ne0\)</span>{% endraw %}, use {% raw %}<span class="math inline">\(A=f-f_0\)</span>{% endraw %} and integrate the quartic rejection indicator against {% raw %}<span class="math inline">\(\phi(f-f_0)\)</span>{% endraw %}. For the nonsingular experiments, the transformation {% raw %}<span class="math inline">\((A,f)\mapsto(-A,-f)\)</span>{% endraw %} changes {% raw %}<span class="math inline">\(f_0\)</span>{% endraw %} to {% raw %}<span class="math inline">\(-f_0\)</span>{% endraw %} while preserving {% raw %}<span class="math inline">\(\rho\)</span>{% endraw %}, {% raw %}<span class="math inline">\(T\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(F\)</span>{% endraw %}. The transformation {% raw %}<span class="math inline">\((A,f)\mapsto(-A,f)\)</span>{% endraw %} changes {% raw %}<span class="math inline">\(\rho\)</span>{% endraw %} to {% raw %}<span class="math inline">\(-\rho\)</span>{% endraw %} while preserving {% raw %}<span class="math inline">\(f_0\)</span>{% endraw %}, {% raw %}<span class="math inline">\(T\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(F\)</span>{% endraw %}. Hence {% raw %}<span class="math inline">\(r_k(f_0,\rho)=r_k(-f_0,\rho)=r_k(f_0,-\rho)\)</span>{% endraw %}. The same reflections relate the boundary experiments when {% raw %}<span class="math inline">\(f_0\ne0\)</span>{% endraw %}. They justify restricting numerical searches to nonnegative nuisance parameters, but not to {% raw %}<span class="math inline">\(|\rho|=1\)</span>{% endraw %} alone.</p>

<h4 data-note-section="7.3" id="24-0-curve-proof">7.3. The boundary functional equation and its local solution</h4>
<p>The boundary system can be reduced to a functional equation. Suppose its positive endpoint is {% raw %}<span class="math inline">\(r=\sqrt F&gt;f_0\)</span>{% endraw %}, and the curve takes the value {% raw %}<span class="math inline">\(y=\widetilde c_\alpha(F)\)</span>{% endraw %}. Taking the positive square root in the quartic equality gives</p>

{% raw %}<div class="math display">\[
\sqrt y=\frac{\sqrt F(\sqrt F-f_0)}{f_0},
\qquad
h(F,y)\triangleq f_0=\frac{F}{\sqrt y+\sqrt F}.
\]</div>{% endraw %}
<p>The acceptance-probability equation then determines the negative endpoint:</p>

{% raw %}<div class="math display">\[
g(F,y)\triangleq
h(F,y)+\Phi^{-1}\big(
\Phi(\sqrt F-h(F,y))-1+\alpha
\big).
\]</div>{% endraw %}
<p>On the local solution, the argument of {% raw %}<span class="math inline">\(\Phi^{-1}\)</span>{% endraw %} lies in {% raw %}<span class="math inline">\((0,1)\)</span>{% endraw %} and {% raw %}<span class="math inline">\(g(F,y)&lt;0\)</span>{% endraw %}. Substituting this endpoint into the quartic yields</p>

{% raw %}<span id="eq:tf-functional-equation"></span><div class="math display">\[
\widetilde c_\alpha\big(g(F,y)^2\big)
=\frac{g(F,y)^2(g(F,y)-h(F,y))^2}{h(F,y)^2},
\qquad y=\widetilde c_\alpha(F).

\tag{27}\]</div>{% endraw %}
<p>This map moves toward the boundary {% raw %}<span class="math inline">\(q_\alpha\)</span>{% endraw %}. To see the direction, write the negative endpoint as {% raw %}<span class="math inline">\(\ell=-s\)</span>{% endraw %} and the positive endpoint as {% raw %}<span class="math inline">\(r&gt;f_0\)</span>{% endraw %}. If {% raw %}<span class="math inline">\(s\geq r\)</span>{% endraw %}, then {% raw %}<span class="math inline">\(s(s+f_0)&gt;r(r-f_0)\)</span>{% endraw %}, while decreasingness gives {% raw %}<span class="math inline">\(\widetilde c_\alpha(s^2)\leq\widetilde c_\alpha(r^2)\)</span>{% endraw %}. These inequalities contradict the two endpoint equations. Thus {% raw %}<span class="math inline">\(g(F,y)^2=s^2&lt;r^2=F\)</span>{% endraw %}.</p>

<p>Extension toward larger {% raw %}<span class="math inline">\(F\)</span>{% endraw %} uses the <strong>inverse</strong> map. Regard a known point {% raw %}<span class="math inline">\((F_-,y_-)\)</span>{% endraw %} as belonging to the negative endpoint {% raw %}<span class="math inline">\(\ell=-\sqrt{F_-}\)</span>{% endraw %}. Its quartic equality gives</p>

{% raw %}<div class="math display">\[
\sqrt{y_-}
=\frac{\sqrt{F_-}(\sqrt{F_-}+f_0)}{f_0},
\qquad
f_0=\frac{F_-}{\sqrt{y_-}-\sqrt{F_-}}.
\]</div>{% endraw %}
<p>The acceptance probability then determines the positive endpoint and the next point on the curve:</p>

{% raw %}<span id="eq:tf-inverse-map"></span><div class="math display">\[
\begin{aligned}
r&amp;=f_0+\Phi^{-1}\!\left(1-\alpha+
\Phi(-\sqrt{F_-}-f_0)\right),\\
F_+&amp;=r^2,\\
\widetilde c_\alpha(F_+)
&amp;=\frac{F_+(r-f_0)^2}{f_0^2}.
\end{aligned}

\tag{28}\]</div>{% endraw %}
<p>These formulas require {% raw %}<span class="math inline">\(y_-&gt;F_-\)</span>{% endraw %}, a quantile argument in {% raw %}<span class="math inline">\((0,1)\)</span>{% endraw %}, and the branch {% raw %}<span class="math inline">\(r&gt;f_0\)</span>{% endraw %}. On the decreasing solution with a single acceptance interval, {% raw %}<span class="math inline">\(F_+&gt;F_-\)</span>{% endraw %}. Online Appendix B.3 uses this inverse map, starting from a fine grid near {% raw %}<span class="math inline">\(q_\alpha\)</span>{% endraw %} and checking that the extension remains decreasing. The authors truncate the extension to retain a single acceptance interval. If the acceptance set splits into disjoint intervals, its probability can no longer be computed from only the two outer endpoints.</p>

<p>For fixed {% raw %}<span class="math inline">\(\alpha\)</span>{% endraw %}, online Appendix B.2, Lemma 9 proves that there is a {% raw %}<span class="math inline">\(\delta&gt;0\)</span>{% endraw %} and a smooth local solution on {% raw %}<span class="math inline">\((q_\alpha,q_\alpha+\delta]\)</span>{% endraw %} with the stated expansion. If another solution obeys</p>

{% raw %}<div class="math display">\[
\check c_\alpha(F)
=\frac{q_\alpha^3}{F-q_\alpha}
-\left(3q_\alpha-\frac{q_\alpha^2}{2}+\frac{q_\alpha^3}{6}\right)
+o\big((F-q_\alpha)^{1/3}\big),
\]</div>{% endraw %}
<p>then the two solutions coincide on some neighborhood of the boundary. This uniqueness is restricted to solutions of the functional equation with the stated remainder. The paper proves Lemma 9 by transforming the equation into an invariant-curve problem for a degenerate map. We use that lemma for existence and local uniqueness; its invariant-curve proof is in the supplement.</p>

<p>The candidate class in online Appendix B.1 has four restrictions. Write {% raw %}<span class="math inline">\(\widetilde c(F;\overline F)\)</span>{% endraw %} for a candidate with plateau point {% raw %}<span class="math inline">\(\overline F\)</span>{% endraw %}. It is continuous and positive for {% raw %}<span class="math inline">\(F&gt;q_\alpha\)</span>{% endraw %}, strictly decreasing up to {% raw %}<span class="math inline">\(\overline F\)</span>{% endraw %}, and constant thereafter. Put</p>

{% raw %}<div class="math display">\[
\overline f_0=
\frac{\overline F}
{\sqrt{\overline F}+\sqrt{\widetilde c(\overline F;\overline F)}}.
\]</div>{% endraw %}
<p>The candidate must give rejection probability exactly {% raw %}<span class="math inline">\(\alpha\)</span>{% endraw %} at {% raw %}<span class="math inline">\(|\rho|=1\)</span>{% endraw %} for {% raw %}<span class="math inline">\(0&lt;|f_0|&lt;\overline f_0\)</span>{% endraw %}. Its acceptance set in {% raw %}<span class="math inline">\(f\)</span>{% endraw %} must be a single interval for {% raw %}<span class="math inline">\(0&lt;|f_0|\leq\overline f_0\)</span>{% endraw %}. Finally, it must satisfy the preceding expansion with the {% raw %}<span class="math inline">\(o((F-q_\alpha)^{1/3})\)</span>{% endraw %} remainder. The latter two restrictions delimit the extension and the uniqueness class. Within that class, the authors choose the largest admissible plateau point subject also to the full size restriction. Since the common segment decreases, this selects the lowest admissible plateau.</p>

<p>The critical value diverges from above and is defined to be infinite at and below the boundary:</p>

{% raw %}<div class="math display">\[
c_\alpha(F)\longrightarrow\infty
\quad(F\downarrow q_\alpha),
\qquad
c_\alpha(F)=\infty\quad(F\leq q_\alpha).
\]</div>{% endraw %}
<p>The plateau is attached after constructing the decreasing segment. At 5%, the published plateau equals {% raw %}<span class="math inline">\(q_{0.05}\)</span>{% endraw %}; at 1%, the construction reaches its admissible endpoint before falling to {% raw %}<span class="math inline">\(q_{0.01}\)</span>{% endraw %}, producing the higher plateau reported above. The two significance levels therefore require different standard-error multipliers.</p>

<h4 data-note-section="7.4" id="24-0-ar-proof">7.4. Complete inversion of the AR inequality</h4>
<p>Use {% raw %}<span class="math inline">\(H,J,K\)</span>{% endraw %} from the AR quadratic and write {% raw %}<span class="math inline">\(D_{AR}=J^2-HK\)</span>{% endraw %}. For {% raw %}<span class="math inline">\(H&gt;0\)</span>{% endraw %}, the quadratic is strictly negative at {% raw %}<span class="math inline">\(b=\widehat\beta\)</span>{% endraw %}, since the reduced-form numerator is zero there and its variance is positive. Thus {% raw %}<span class="math inline">\(D_{AR}&gt;0\)</span>{% endraw %}, and the accepted set is the bounded interval between the two roots.</p>

<p>For {% raw %}<span class="math inline">\(H&lt;0\)</span>{% endraw %}, the quadratic tends to {% raw %}<span class="math inline">\(-\infty\)</span>{% endraw %} in both tails. If {% raw %}<span class="math inline">\(D_{AR}&gt;0\)</span>{% endraw %}, order the roots as {% raw %}<span class="math inline">\(b_-&lt;b_+\)</span>{% endraw %}; the accepted set is {% raw %}<span class="math inline">\((-\infty,b_-]\cup[b_+,\infty)\)</span>{% endraw %}. If {% raw %}<span class="math inline">\(D_{AR}\leq0\)</span>{% endraw %}, the quadratic is nonpositive everywhere, so the set is {% raw %}<span class="math inline">\(\mathbb R\)</span>{% endraw %}.</p>

<p>For {% raw %}<span class="math inline">\(H=0\)</span>{% endraw %}, the inequality becomes {% raw %}<span class="math inline">\(-2Jb+K\leq0\)</span>{% endraw %}. It gives {% raw %}<span class="math inline">\([K/(2J),\infty)\)</span>{% endraw %} when {% raw %}<span class="math inline">\(J&gt;0\)</span>{% endraw %} and {% raw %}<span class="math inline">\((-\infty,K/(2J)]\)</span>{% endraw %} when {% raw %}<span class="math inline">\(J&lt;0\)</span>{% endraw %}. If {% raw %}<span class="math inline">\(J=0\)</span>{% endraw %} as well, positive definiteness implies {% raw %}<span class="math inline">\(K&lt;0\)</span>{% endraw %}: writing {% raw %}<span class="math inline">\(q=q_\alpha\)</span>{% endraw %}, the identities {% raw %}<span class="math inline">\(\widehat\pi^2=q\widehat s_\pi^2\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\widehat\Gamma\widehat\pi=q\widehat s_{\Gamma\pi}\)</span>{% endraw %} give</p>

{% raw %}<div class="math display">\[
K=q\left(
\frac{\widehat s_{\Gamma\pi}^2}{\widehat s_\pi^2}
-\widehat s_\Gamma^2\right)&lt;0.
\]</div>{% endraw %}
<p>The set is then {% raw %}<span class="math inline">\(\mathbb R\)</span>{% endraw %}. These cases prove the boundedness criterion stated in the main text.</p>

<p>For the length calculation, evaluate {% raw %}<span class="math inline">\(\widehat s_a\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\widehat\rho_0\)</span>{% endraw %} at the true coefficient, so {% raw %}<span class="math inline">\(\beta_0=\beta\)</span>{% endraw %}. Define</p>

{% raw %}<div class="math display">\[
\widehat\tau=\frac{\widehat s_a}{\widehat s_\pi}
\xrightarrow{p}\tau.
\]</div>{% endraw %}
<p>On a sample with positive definite {% raw %}<span class="math inline">\(\widehat\Sigma\)</span>{% endraw %}, parameterize the entire coefficient line by {% raw %}<span class="math inline">\(b=\beta+\widehat\tau x\)</span>{% endraw %}. Dividing the sample AR inequality by {% raw %}<span class="math inline">\(\widehat s_a^2\)</span>{% endraw %} gives the exact relation</p>

{% raw %}<div class="math display">\[
(\widehat A-x\widehat f)^2
\leq q(1-2\widehat\rho_0x+x^2).
\]</div>{% endraw %}
<p>The coefficients of this quadratic converge jointly to those of</p>

{% raw %}<div class="math display">\[
(A-xf)^2\leq q(1-2\rho x+x^2),
\]</div>{% endraw %}
<p>or</p>

{% raw %}<div class="math display">\[
(F-q)x^2-2(Af-q\rho)x+(A^2-q)\leq0.
\]</div>{% endraw %}
<p>Its discriminant after removing the factor four is</p>

{% raw %}<div class="math display">\[
\begin{aligned}
(Af-q\rho)^2-(F-q)(A^2-q)
&amp;=q\big(A^2-2\rho Af+F-q(1-\rho^2)\big)\\
&amp;=q\big(B^2+(1-\rho^2)(F-q)\big).
\end{aligned}
\]</div>{% endraw %}
<p>On {% raw %}<span class="math inline">\(F&gt;q\)</span>{% endraw %}, the leading coefficient and discriminant are positive, so the roots are continuous functions of the coefficients. Their difference, multiplied by the limit {% raw %}<span class="math inline">\(\tau\)</span>{% endraw %} of {% raw %}<span class="math inline">\(\widehat\tau\)</span>{% endraw %}, gives {% raw %}<span class="math inline">\(L_{AR}\)</span>{% endraw %}. For {% raw %}<span class="math inline">\(tF\)</span>{% endraw %}, the sample variance identity gives</p>

{% raw %}<div class="math display">\[
\widehat\beta-\beta
=\widehat\tau\frac{\widehat A}{\widehat f},
\qquad
\widehat s_\beta
=\widehat\tau
\frac{\sqrt{\widehat A^2-2\widehat\rho_0\widehat A\widehat f
+\widehat f^2}}{\widehat f^2}.
\]</div>{% endraw %}
<p>Since {% raw %}<span class="math inline">\(\Pr(f=0)=0\)</span>{% endraw %}, the continuous mapping theorem implies</p>

{% raw %}<div class="math display">\[
\widehat s_\beta\Rightarrow
\tau\frac{\sqrt{A^2-2\rho Af+f^2}}{f^2}
=\tau\frac{\sqrt{B^2+(1-\rho^2)F}}{F}.
\]</div>{% endraw %}
<p>Multiplication by {% raw %}<span class="math inline">\(2\sqrt{c_\alpha(F)}\)</span>{% endraw %} gives {% raw %}<span class="math inline">\(L_{tF}\)</span>{% endraw %} on {% raw %}<span class="math inline">\(F&gt;q\)</span>{% endraw %}.</p>

<h4 data-note-section="7.5" id="24-0-length-proof">7.5. Proof of the conditional expected-length result</h4>
<p>Let {% raw %}<span class="math inline">\(w(x)\)</span>{% endraw %} be the density of {% raw %}<span class="math inline">\(F=f^2\)</span>{% endraw %}:</p>

{% raw %}<div class="math display">\[
w(x)=\frac{\phi(\sqrt x-f_0)+\phi(-\sqrt x-f_0)}{2\sqrt x},
\qquad x&gt;0.
\]</div>{% endraw %}
<p>Since {% raw %}<span class="math inline">\(q&gt;0\)</span>{% endraw %} and {% raw %}<span class="math inline">\(f_0\)</span>{% endraw %} is finite, {% raw %}<span class="math inline">\(w\)</span>{% endraw %} is continuous and strictly positive near {% raw %}<span class="math inline">\(q\)</span>{% endraw %}. Also {% raw %}<span class="math inline">\(B\)</span>{% endraw %} is independent of {% raw %}<span class="math inline">\(F\)</span>{% endraw %} and has a nondegenerate normal distribution when {% raw %}<span class="math inline">\(|\rho|&lt;1\)</span>{% endraw %}. Hence {% raw %}<span class="math inline">\(m\triangleq\mathbb{E}|B|\)</span>{% endraw %} is finite and strictly positive.</p>

<p>For AR, the length formula gives</p>

{% raw %}<div class="math display">\[
\mathbb{E}[L_{AR}\mid F=x]
\geq\frac{2\tau\sqrt q\,m}{x-q},
\qquad x&gt;q.
\]</div>{% endraw %}
<p>Choose {% raw %}<span class="math inline">\(\delta&gt;0\)</span>{% endraw %} so that {% raw %}<span class="math inline">\(w(x)\geq w_*&gt;0\)</span>{% endraw %} on {% raw %}<span class="math inline">\([q,q+\delta]\)</span>{% endraw %}. By Tonelli’s theorem,</p>

{% raw %}<div class="math display">\[
\begin{aligned}
\mathbb{E}[L_{AR}\mid F&gt;q]
&amp;=\frac{1}{\Pr(F&gt;q)}
\int_q^\infty\mathbb{E}[L_{AR}\mid F=x]w(x)\,dx\\
&amp;\geq\frac{2\tau\sqrt q\,m w_*}{\Pr(F&gt;q)}
\int_q^{q+\delta}\frac{dx}{x-q}
=\infty.
\end{aligned}
\]</div>{% endraw %}
<p>For {% raw %}<span class="math inline">\(tF\)</span>{% endraw %}, use {% raw %}<span class="math inline">\(\sqrt{B^2+(1-\rho^2)x}\leq|B|+\sqrt{1-\rho^2}\sqrt x\)</span>{% endraw %}. Independence gives</p>

{% raw %}<div class="math display">\[
\begin{aligned}
\mathbb{E}[L_{tF}\mid F=x]
&amp;\leq2\tau\sqrt{c_\alpha(x)}
\left(\frac{m}{x}+\frac{\sqrt{1-\rho^2}}{\sqrt x}\right)\\
&amp;\leq C\sqrt{c_\alpha(x)},\qquad x&gt;q,
\end{aligned}
\]</div>{% endraw %}
<p>where {% raw %}<span class="math inline">\(C=2\tau(m/q+\sqrt{1-\rho^2}/\sqrt q)&lt;\infty\)</span>{% endraw %}. The assumed bound on {% raw %}<span class="math inline">\(c_\alpha\)</span>{% endraw %} gives {% raw %}<span class="math inline">\(\sqrt{c_\alpha(x)}=O((x-q)^{-1/2})\)</span>{% endraw %}. Because {% raw %}<span class="math inline">\(w\)</span>{% endraw %} is bounded near {% raw %}<span class="math inline">\(q\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
\int_q^{q+\delta}\sqrt{c_\alpha(x)}w(x)\,dx&lt;\infty.
\]</div>{% endraw %}
<p>On {% raw %}<span class="math inline">\([q+\delta,\infty)\)</span>{% endraw %} the critical-value function is bounded, and {% raw %}<span class="math inline">\(w\)</span>{% endraw %} integrates to at most one. The remaining integral is therefore finite. Dividing by {% raw %}<span class="math inline">\(\Pr(F&gt;q)&gt;0\)</span>{% endraw %} proves the result. {% raw %}<span class="math inline">\(\square\)</span>{% endraw %}</p>

<p>The notation in this note corresponds to {% raw %}<span class="math inline">\(A=t_{AR}(\beta_0)\)</span>{% endraw %}, {% raw %}<span class="math inline">\(\widehat A=\widehat t_{AR}(\beta_0)\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(T=t^2\)</span>{% endraw %} in the published paper. The covariance identities are in its online Appendix A.2–A.4; the construction is in Section IIIB and online Appendix B; and the expected-length results are in Section IIIC and online Appendix C. The <a href="https://doi.org/10.1257/aer.20211063">published article</a> and the <a href="https://drive.google.com/file/d/1bkIrLAh8b2hK_nwVrJWFM_mima0B64tV/view">authors’ supplement</a> provide the source statements and the invariant-curve proof used above.</p>

<div id="refs" class="references csl-bib-body hanging-indent" data-entry-spacing="0" role="list">
<div id="ref-lee_valid_2022" class="csl-entry" role="listitem">
Lee, David S., Justin McCrary, Marcelo J. Moreira, and Jack Porter. 2022. <span>“Valid <em>t</em> -Ratio Inference for IV.”</span> <em>American Economic Review</em> 112 (10): 3260–90. <a href="https://doi.org/10.1257/aer.20211063">https://doi.org/10.1257/aer.20211063</a>.
</div>
</div>



</div>
