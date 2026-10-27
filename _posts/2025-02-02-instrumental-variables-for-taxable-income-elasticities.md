---
layout: "post"
title: "Instrumental Variables for Taxable-Income Elasticities"
date: "2025-02-02"
tags: ["econometrics", "bunching"]
excerpt: "Using tax reforms to estimate taxable-income elasticities."
note_series: "Taxable-income elasticities"
note_source: "assets/notes/Overleaf Projects (32 items)/Notes on Micro Elasticities Estimation/stats.tex"
---

<div class="note-content" markdown="0">

<p>Instrumental-variable estimates of taxable-income responses depend on both the source of tax variation and the elasticities of the taxpayers whose net-of-tax rates respond to that variation. A simulated instrument evaluates a tax reform at a fixed income level, avoiding evaluation of the new schedule at post-reform income. Its validity depends on the relation between the income used in the simulation, preferences, and untreated income growth. Even under valid exclusion restrictions, heterogeneous first-stage responses generally produce a weighted elasticity rather than the population mean.</p>

<p>The tax-schedule decomposition follows Proposition 1 and Appendix A of the published version of <span class="citation" data-cites="kumar_estimating_2020">Kumar and Liang (<a href="#ref-kumar_estimating_2020" role="doc-biblioref">2020</a>)</span>. The binary-instrument calculations provide a simpler special case, and the mean-reversion examples explain the concerns studied by <span class="citation" data-cites="gruber_elasticity_2002">Gruber and Saez (<a href="#ref-gruber_elasticity_2002" role="doc-biblioref">2002</a>)</span> and <span class="citation" data-cites="weber_toward_2014">Weber (<a href="#ref-weber_toward_2014" role="doc-biblioref">2014</a>)</span>. The note considers one scalar excluded instrument.</p>

<h3 data-note-section="1" id="17-15-start-with-the-population-iv-estimand">1. Model and population IV estimand</h3>
<p>Let {% raw %}<span class="math inline">\(q_{it}&gt;0\)</span>{% endraw %} be taxable income in a common unit of purchasing power, {% raw %}<span class="math inline">\(y_{it}=\log q_{it}\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(\tau_{it}(q)&lt;1\)</span>{% endraw %} the marginal tax rate at income {% raw %}<span class="math inline">\(q\)</span>{% endraw %}. Write</p>

{% raw %}<div class="math display">\[
r_{it}(q)\triangleq\log(1-\tau_{it}(q)).
\]</div>{% endraw %}
<p>For two dates {% raw %}<span class="math inline">\(t=0,1\)</span>{% endraw %}, consider the random-coefficient model</p>

{% raw %}<div class="math display">\[
y_{it}=\varepsilon_i r_{it}(q_{it})+\alpha_{it},
\qquad
\varepsilon_i\ \text{constant across the two dates}.
\]</div>{% endraw %}
<p>First differencing gives</p>

{% raw %}<span id="eti-model"></span><div class="math display">\[
Y_i=\varepsilon_iX_i+U_i,
\qquad
\begin{aligned}
Y_i&amp;\triangleq y_{i1}-y_{i0},\\
X_i&amp;\triangleq r_{i1}(q_{i1})-r_{i0}(q_{i0}),\\
U_i&amp;\triangleq\alpha_{i1}-\alpha_{i0}.
\end{aligned}

\tag{1}\]</div>{% endraw %}
<p>Here {% raw %}<span class="math inline">\(\varepsilon_i\)</span>{% endraw %} is the slope of log taxable income with respect to the log net-of-tax rate in the maintained behavioral equation. Interpreting that slope as a structural elasticity requires the equation to hold under the contemplated tax changes, with other behavioral channels accounted for. In the quasi-linear model of Kumar and Liang, income effects are absent. Applying the same equation to a broader model requires an argument for excluding or modeling those effects.</p>

<p>A conventional baseline-income instrument is</p>

{% raw %}<span id="eti-simulated"></span><div class="math display">\[
Z_i^{\mathrm{base}}
\triangleq r_{i1}(q_{i0})-r_{i0}(q_{i0}).

\tag{2}\]</div>{% endraw %}
<p>Both schedules in <a href="#eti-simulated">(2)</a> are evaluated at the same real income. The instrument therefore avoids evaluating the new schedule at {% raw %}<span class="math inline">\(q_{i1}\)</span>{% endraw %}, which responds to the reform. Nevertheless, {% raw %}<span class="math inline">\(q_{i0}\)</span>{% endraw %} may depend on {% raw %}<span class="math inline">\(\varepsilon_i\)</span>{% endraw %} and on shocks entering {% raw %}<span class="math inline">\(U_i\)</span>{% endraw %}.</p>

<p>Suppress the individual subscript when writing population moments. For the covariance calculations, assume that {% raw %}<span class="math inline">\(X,Z,U,\varepsilon X\)</span>{% endraw %} are square-integrable and that {% raw %}<span class="math inline">\(\mathbb{E}|\varepsilon|&lt;\infty\)</span>{% endraw %}. These conditions imply {% raw %}<span class="math inline">\(Y\in L^2\)</span>{% endraw %} and ensure the products used below are integrable. With</p>

{% raw %}<div class="math display">\[
D\triangleq\operatorname{Cov}(Z,X)\ne0,
\qquad \bar\varepsilon\triangleq\mathbb{E}\varepsilon,
\]</div>{% endraw %}
<p>the population IV coefficient, with an intercept, is</p>

{% raw %}<span id="eti-mean-decomposition"></span><div class="math display">\[
\begin{aligned}
\beta_{\mathrm{IV}}
&amp;\triangleq\frac{\operatorname{Cov}(Z,Y)}{D}\\
&amp;=\bar\varepsilon
+\frac{\operatorname{Cov}(Z,(\varepsilon-\bar\varepsilon)X)}{D}
+\frac{\operatorname{Cov}(Z,U)}{D}.
\end{aligned}

\tag{3}\]</div>{% endraw %}
<p>Equation <a href="#eti-mean-decomposition">(3)</a> follows by substituting {% raw %}<span class="math inline">\(Y=\bar\varepsilon X+(\varepsilon-\bar\varepsilon)X+U\)</span>{% endraw %} and using covariance linearity. The restriction {% raw %}<span class="math inline">\(\operatorname{Cov}(Z,U)=0\)</span>{% endraw %} removes the disturbance term. Under that restriction, recovery of {% raw %}<span class="math inline">\(\bar\varepsilon\)</span>{% endraw %} requires {% raw %}<span class="math inline">\(\operatorname{Cov}(Z,(\varepsilon-\bar\varepsilon)X)=0\)</span>{% endraw %}. An instrument may identify a causal weighted elasticity without identifying the unweighted mean.</p>

<p>For an independent and identically distributed sample, the just-identified IV estimator is</p>

{% raw %}<div class="math display">\[
\widehat\beta_n
=\frac{n^{-1}\sum_{i=1}^n(Z_i-\bar Z_n)(Y_i-\bar Y_n)}
       {n^{-1}\sum_{i=1}^n(Z_i-\bar Z_n)(X_i-\bar X_n)}.
\]</div>{% endraw %}
<p>The law of large numbers applies to {% raw %}<span class="math inline">\(Z_iY_i\)</span>{% endraw %}, {% raw %}<span class="math inline">\(Z_iX_i\)</span>{% endraw %}, and the sample means under the stated moments. The numerator and denominator converge in probability to {% raw %}<span class="math inline">\(\operatorname{Cov}(Z,Y)\)</span>{% endraw %} and {% raw %}<span class="math inline">\(D\)</span>{% endraw %}, respectively. Since {% raw %}<span class="math inline">\(D\ne0\)</span>{% endraw %}, the probability that the absolute sample denominator exceeds {% raw %}<span class="math inline">\(|D|/2\)</span>{% endraw %} tends to one, and {% raw %}<span class="math inline">\(\widehat\beta_n\xrightarrow{P}\beta_{\mathrm{IV}}\)</span>{% endraw %}. An arbitrary definition on samples with zero denominator does not change this limit. With overlapping panel differences, consistency instead requires a law of large numbers appropriate to the sampling dependence. Inference under a weak first stage is discussed in the <a href="{% post_url 2024-09-07-weak-instruments-and-the-tf-critical-value %}">weak-instruments note</a>.</p>

<h3 data-note-section="2" id="17-15-what-a-valid-binary-instrument-averages">2. Binary instruments and elasticity weights</h3>
<p>Let {% raw %}<span class="math inline">\(X_i(0)\)</span>{% endraw %} and {% raw %}<span class="math inline">\(X_i(1)\)</span>{% endraw %} denote the potential changes in the log net-of-tax rate under two instrument values. Consistency means that the observed change is {% raw %}<span class="math inline">\(X_i=X_i(Z_i)\)</span>{% endraw %}. In the linear-response model, exclusion means that the potential outcome at treatment value {% raw %}<span class="math inline">\(x\)</span>{% endraw %} is {% raw %}<span class="math inline">\(Y_i(x)=\varepsilon_i x+U_i\)</span>{% endraw %}, with no separate dependence on {% raw %}<span class="math inline">\(Z_i\)</span>{% endraw %}.</p>

<div id="eti-weighted-response" class="proposition" data-note-number="1" data-note-kind="Proposition">
<p><strong>Proposition 1</strong>. Suppose {% raw %}<span class="math inline">\(Z_i\in\{0,1\}\)</span>{% endraw %}, {% raw %}<span class="math inline">\(\pi\triangleq\mathbb P(Z_i=1)\in(0,1)\)</span>{% endraw %}, and</p>

{% raw %}<div class="math display">\[
Z_i\ \perp\ (X_i(0),X_i(1),\varepsilon_i,U_i).
\]</div>{% endraw %}
<p>Assume consistency, exclusion, integrability of {% raw %}<span class="math inline">\(X_i(j)\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\varepsilon_iX_i(j)\)</span>{% endraw %} for {% raw %}<span class="math inline">\(j=0,1\)</span>{% endraw %}, and integrability of {% raw %}<span class="math inline">\(U_i\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\varepsilon_i\)</span>{% endraw %}. If {% raw %}<span class="math inline">\(\delta_i\triangleq X_i(1)-X_i(0)\ge0\)</span>{% endraw %} almost surely and {% raw %}<span class="math inline">\(\mathbb{E}\delta_i&gt;0\)</span>{% endraw %}, then</p>

{% raw %}<span id="eti-binary-weights"></span><div class="math display">\[
\beta_{\mathrm{IV}}
=\frac{\mathbb{E}[\varepsilon_i\delta_i]}{\mathbb{E}\delta_i}
=\mathbb{E}[w_i\varepsilon_i],
\qquad
w_i\triangleq\frac{\delta_i}{\mathbb{E}\delta_i}\ge0,
\qquad \mathbb{E}w_i=1.

\tag{4}\]</div>{% endraw %}
</div>
<p><strong>Proof.</strong> For any integrable random variable {% raw %}<span class="math inline">\(V\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
\operatorname{Cov}(Z,V)
=\pi(1-\pi)(\mathbb{E}[V\mid Z=1]-\mathbb{E}[V\mid Z=0]).
\]</div>{% endraw %}
<p>Consistency and joint independence give</p>

{% raw %}<div class="math display">\[
\begin{aligned}
\mathbb{E}[Y\mid Z=1]-\mathbb{E}[Y\mid Z=0]
&amp;=\mathbb{E}[\varepsilon X(1)+U]-\mathbb{E}[\varepsilon X(0)+U]\\
&amp;=\mathbb{E}[\varepsilon\delta],\\
\mathbb{E}[X\mid Z=1]-\mathbb{E}[X\mid Z=0]
&amp;=\mathbb{E}\delta.
\end{aligned}
\]</div>{% endraw %}
<p>The factor {% raw %}<span class="math inline">\(\pi(1-\pi)\)</span>{% endraw %} cancels in the covariance ratio. The assumptions on {% raw %}<span class="math inline">\(\delta\)</span>{% endraw %} give the sign and normalization of {% raw %}<span class="math inline">\(w\)</span>{% endraw %}. {% raw %}<span class="math inline">\(\square\)</span>{% endraw %}</p>

<p><span id="17-15-deriving-the-weights-rather-than-naming-an-average"></span></p>

<p>In Proposition <a href="#eti-weighted-response">1</a>, the weight measures the change in the regressor induced by the instrument. Taxpayers with {% raw %}<span class="math inline">\(\delta_i=0\)</span>{% endraw %} receive zero weight. The equality {% raw %}<span class="math inline">\(\beta_{\mathrm{IV}}=\mathbb{E}\varepsilon\)</span>{% endraw %} holds precisely when {% raw %}<span class="math inline">\(\operatorname{Cov}(\varepsilon,\delta)=0\)</span>{% endraw %}, since</p>

{% raw %}<div class="math display">\[
\beta_{\mathrm{IV}}-\mathbb{E}\varepsilon
=\frac{\operatorname{Cov}(\varepsilon,\delta)}{\mathbb{E}\delta}.
\]</div>{% endraw %}
<p>For example, suppose two equally common taxpayer types have elasticities {% raw %}<span class="math inline">\(0.2\)</span>{% endraw %} and {% raw %}<span class="math inline">\(0.8\)</span>{% endraw %}, and first-stage responses {% raw %}<span class="math inline">\(0.10\)</span>{% endraw %} and {% raw %}<span class="math inline">\(0.02\)</span>{% endraw %}. The unweighted mean elasticity is {% raw %}<span class="math inline">\(0.5\)</span>{% endraw %}, whereas</p>

{% raw %}<div class="math display">\[
\beta_{\mathrm{IV}}
=\frac{0.2(0.10)+0.8(0.02)}{0.10+0.02}=0.3.
\]</div>{% endraw %}
<p>The discrepancy is due entirely to the first-stage weights. If all taxpayers have the same positive first-stage response, the weighted and unweighted elasticities coincide.</p>

<h4 data-note-section="2.1" id="17-15-nonlinear-individual-responses">2.1. Nonlinear individual responses</h4>
<p>For nonlinear responses, assume that {% raw %}<span class="math inline">\(x\mapsto Y_i(x)\)</span>{% endraw %} is absolutely continuous on the interval between {% raw %}<span class="math inline">\(X_i(0)\)</span>{% endraw %} and {% raw %}<span class="math inline">\(X_i(1)\)</span>{% endraw %}. Assume the potential responses and a version of their derivatives are jointly measurable. Absolute continuity supplies the integral representation needed below; differentiability alone is insufficient.</p>

<div id="eti-nonlinear-response" class="proposition" data-note-number="2" data-note-kind="Proposition">
<p><strong>Proposition 2</strong>. Let {% raw %}<span class="math inline">\(Z\)</span>{% endraw %} be binary with assignment probability in {% raw %}<span class="math inline">\((0,1)\)</span>{% endraw %} and jointly independent of the potential treatments and response function. Assume consistency, exclusion through {% raw %}<span class="math inline">\(Y_i=Y_i(X_i(Z_i))\)</span>{% endraw %}, {% raw %}<span class="math inline">\(X_i(1)\ge X_i(0)\)</span>{% endraw %} almost surely, {% raw %}<span class="math inline">\(0&lt;\mathbb{E}\delta_i&lt;\infty\)</span>{% endraw %}, integrable potential outcomes {% raw %}<span class="math inline">\(Y_i(X_i(j))\)</span>{% endraw %} and treatments {% raw %}<span class="math inline">\(X_i(j)\)</span>{% endraw %}, and</p>

{% raw %}<div class="math display">\[
\mathbb{E}\int_{X_i(0)}^{X_i(1)}|Y_i&#x27;(u)|\,du&lt;\infty.
\]</div>{% endraw %}
<p>Under the stated absolute-continuity and measurability conditions,</p>

{% raw %}<span id="eti-nonlinear"></span><div class="math display">\[
\beta_{\mathrm{IV}}
=\frac{1}{\mathbb{E}\delta_i}
  \int_{\mathbb R}\mathbb{E}[Y_i&#x27;(u)\mathbf1\{X_i(0)\le u&lt;X_i(1)\}]\,du.

\tag{5}\]</div>{% endraw %}
</div>
<p>Absolute continuity gives, for almost every taxpayer,</p>

{% raw %}<div class="math display">\[
Y_i(X_i(1))-Y_i(X_i(0))
=\int_{X_i(0)}^{X_i(1)}Y_i&#x27;(u)\,du.
\]</div>{% endraw %}
<p>Instrument independence converts the reduced-form difference into the expectation of this individual response. Fubini’s theorem then yields <a href="#eti-nonlinear">(5)</a>. <a href="#17-15-nonlinear-response-weights">Appendix A</a> proves that the treatment-level weights integrate to one and that the weighted response is integrable.</p>

<p>The marginal response {% raw %}<span class="math inline">\(Y_i&#x27;(u)\)</span>{% endraw %} receives weight only when the instrument moves taxpayer {% raw %}<span class="math inline">\(i\)</span>{% endraw %} across {% raw %}<span class="math inline">\(u\)</span>{% endraw %}. When the outcome and treatment have their stated logarithmic meanings, that derivative is a marginal elasticity under the maintained exclusion restriction. It need not be constant across taxpayers or across treatment values for a given taxpayer.</p>

<h3 data-note-section="3" id="17-15-tax-schedule-variation">3. Tax-schedule variation and potentially invalid instruments</h3>
<p>Let {% raw %}<span class="math inline">\(S_i\)</span>{% endraw %} describe the change in taxpayer {% raw %}<span class="math inline">\(i\)</span>{% endraw %}’s entire log net-of-tax schedule, evaluated at fixed real-income levels. Its coordinates are</p>

{% raw %}<div class="math display">\[
S_i(q)\triangleq r_{i1}(q)-r_{i0}(q).
\]</div>{% endraw %}
<p>The observed change {% raw %}<span class="math inline">\(X_i=r_{i1}(q_{i1})-r_{i0}(q_{i0})\)</span>{% endraw %} evaluates the schedules at potentially different, endogenously chosen incomes. Thus {% raw %}<span class="math inline">\(S_i\)</span>{% endraw %} and {% raw %}<span class="math inline">\(X_i\)</span>{% endraw %} are distinct random objects. Write {% raw %}<span class="math inline">\(S\)</span>{% endraw %} as a vector of schedule parameters, or more generally as a random element for which the following conditional expectations exist.</p>

<p>For a possibly invalid scalar instrument {% raw %}<span class="math inline">\(Z\)</span>{% endraw %}, define</p>

{% raw %}<div class="math display">\[
T\triangleq\mathbb{E}[Z\mid S],
\qquad R\triangleq Z-T,
\qquad D_S\triangleq\operatorname{Cov}(T,X).
\]</div>{% endraw %}
<p>The component {% raw %}<span class="math inline">\(T\)</span>{% endraw %} is a function of schedule changes. The residual {% raw %}<span class="math inline">\(R\)</span>{% endraw %} has conditional mean zero given {% raw %}<span class="math inline">\(S\)</span>{% endraw %}, but may remain related to preferences within a given schedule change. The law of total covariance gives</p>

{% raw %}<span id="eti-first-stage-split"></span><div class="math display">\[
D=D_S+B,
\qquad B\triangleq\mathbb{E}[\operatorname{Cov}(Z,X\mid S)].

\tag{6}\]</div>{% endraw %}
<div id="eti-schedule-decomposition" class="proposition" data-note-number="3" data-note-kind="Proposition">
<p><strong>Proposition 3</strong>. Assume the covariance moment conditions in Section <a href="#17-15-start-with-the-population-iv-estimand">1</a>, the model {% raw %}<span class="math inline">\(Y=\varepsilon X+U\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(S\perp(\varepsilon,U)\)</span>{% endraw %}. Suppose {% raw %}<span class="math inline">\(D_S&gt;0\)</span>{% endraw %} and {% raw %}<span class="math inline">\(D\ne0\)</span>{% endraw %}. Define</p>

{% raw %}<div class="math display">\[
\begin{aligned}
\beta_S&amp;\triangleq\frac{\operatorname{Cov}(T,Y)}{D_S},\\
A_\varepsilon&amp;\triangleq\mathbb{E}[\operatorname{Cov}(Z,\varepsilon X\mid S)],\\
A_U&amp;\triangleq\mathbb{E}[\operatorname{Cov}(Z,U\mid S)].
\end{aligned}
\]</div>{% endraw %}
<p>Then</p>

{% raw %}<span id="eti-schedule-decomp"></span><div class="math display">\[
\begin{aligned}
\beta_{\mathrm{IV}}
&amp;=\frac{D_S\beta_S+A_\varepsilon+A_U}{D_S+B}\\
&amp;=\beta_S+\frac{A_\varepsilon-\beta_SB}{D}
             +\frac{A_U}{D}.
\end{aligned}

\tag{7}\]</div>{% endraw %}
<p>For {% raw %}<span class="math inline">\(c(e)\triangleq\operatorname{Cov}(T,X\mid\varepsilon=e)\)</span>{% endraw %},</p>

{% raw %}<span id="eti-schedule-weights"></span><div class="math display">\[
\beta_S=\frac{\mathbb{E}[\varepsilon c(\varepsilon)]}{\mathbb{E}[c(\varepsilon)]},
\qquad \mathbb{E}[c(\varepsilon)]=D_S.

\tag{8}\]</div>{% endraw %}
<p>If {% raw %}<span class="math inline">\(c(\varepsilon)\ge0\)</span>{% endraw %} almost surely, the weights {% raw %}<span class="math inline">\(c(\varepsilon)/D_S\)</span>{% endraw %} are nonnegative and have expectation one.</p>

</div>
<p><strong>Derivation.</strong> Since {% raw %}<span class="math inline">\(\mathbb{E}[R\mid S]=0\)</span>{% endraw %}, the residual is orthogonal to square-integrable functions of {% raw %}<span class="math inline">\(S\)</span>{% endraw %}. Consequently,</p>

{% raw %}<div class="math display">\[
\begin{aligned}
\operatorname{Cov}(Z,Y)
&amp;=\operatorname{Cov}(T,Y)+\mathbb{E}[\operatorname{Cov}(Z,Y\mid S)]\\
&amp;=D_S\beta_S+A_\varepsilon+A_U.
\end{aligned}
\]</div>{% endraw %}
<p>Dividing by <a href="#eti-first-stage-split">(6)</a> yields the first equality in <a href="#eti-schedule-decomp">(7)</a>; subtracting {% raw %}<span class="math inline">\(\beta_S\)</span>{% endraw %} yields the second. Independence of {% raw %}<span class="math inline">\(S\)</span>{% endraw %} from {% raw %}<span class="math inline">\((\varepsilon,U)\)</span>{% endraw %} implies independence of {% raw %}<span class="math inline">\(T\)</span>{% endraw %} from that pair. In particular, {% raw %}<span class="math inline">\(\operatorname{Cov}(T,U)=0\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\mathbb{E}[T\mid\varepsilon]=\mathbb{E}T\)</span>{% endraw %}. Therefore</p>

{% raw %}<div class="math display">\[
\begin{aligned}
\operatorname{Cov}(T,Y)
&amp;=\mathbb{E}[\varepsilon X(T-\mathbb{E}T)]
 =\mathbb{E}[\varepsilon c(\varepsilon)],\\
\operatorname{Cov}(T,X)
&amp;=\mathbb{E}[X(T-\mathbb{E}T)]
 =\mathbb{E}[c(\varepsilon)].
\end{aligned}
\]</div>{% endraw %}
<p>Conditional Jensen and Cauchy–Schwarz give</p>

{% raw %}<div class="math display">\[
\mathbb{E}|\varepsilon c(\varepsilon)|
\le\mathbb{E}|\varepsilon X(T-\mathbb{E}T)|
\le\|\varepsilon X\|_2\|T-\mathbb{E}T\|_2&lt;\infty.
\]</div>{% endraw %}
<p>The corresponding bound without {% raw %}<span class="math inline">\(\varepsilon\)</span>{% endraw %} proves integrability of {% raw %}<span class="math inline">\(c(\varepsilon)\)</span>{% endraw %}. These bounds justify the iterated expectations and prove <a href="#eti-schedule-weights">(8)</a>. {% raw %}<span class="math inline">\(\square\)</span>{% endraw %}</p>

<p>Proposition <a href="#eti-schedule-decomposition">3</a> restates the decomposition in Kumar and Liang’s Proposition 1 using {% raw %}<span class="math inline">\(S\)</span>{% endraw %} for their vector {% raw %}<span class="math inline">\(\Delta\mathbf x\)</span>{% endraw %}, {% raw %}<span class="math inline">\(X\)</span>{% endraw %} for their scalar {% raw %}<span class="math inline">\(\Delta x\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(T\)</span>{% endraw %} for their conditional-mean instrument. Their preference-independence assumption implies the independence used here. Equation <a href="#eti-schedule-weights">(8)</a> also accommodates discrete or mixed elasticity distributions. If an elasticity density {% raw %}<span class="math inline">\(f_\varepsilon\)</span>{% endraw %} exists, the corresponding unnormalized density weight is {% raw %}<span class="math inline">\(c(e)f_\varepsilon(e)\)</span>{% endraw %}.</p>

<p>The published equations (9) and (11) further divide the two residual numerator terms by {% raw %}<span class="math inline">\(B\)</span>{% endraw %}. When {% raw %}<span class="math inline">\(B\ne0\)</span>{% endraw %}, their expression is algebraically equivalent to</p>

{% raw %}<div class="math display">\[
\beta_{\mathrm{IV}}
=\frac{D_S}{D_S+B}\beta_S
+\frac{B}{D_S+B}\left(\frac{A_\varepsilon}{B}+\frac{A_U}{B}\right).
\]</div>{% endraw %}
<p>Equation <a href="#eti-schedule-decomp">(7)</a> remains defined when {% raw %}<span class="math inline">\(B=0\)</span>{% endraw %}. The two coefficients {% raw %}<span class="math inline">\(D_S/(D_S+B)\)</span>{% endraw %} and {% raw %}<span class="math inline">\(B/(D_S+B)\)</span>{% endraw %} need not be nonnegative. The decomposition is a convex average only under additional sign restrictions. The term {% raw %}<span class="math inline">\((A_\varepsilon-\beta_SB)/D\)</span>{% endraw %} measures the departure due to elasticity heterogeneity relative to {% raw %}<span class="math inline">\(\beta_S\)</span>{% endraw %}; it vanishes when {% raw %}<span class="math inline">\(\varepsilon\)</span>{% endraw %} is constant. The term {% raw %}<span class="math inline">\(A_U/D\)</span>{% endraw %} measures the departure due to untreated income growth.</p>

<p>If {% raw %}<span class="math inline">\(Z=T\)</span>{% endraw %} almost surely, all three quantities {% raw %}<span class="math inline">\(B,A_\varepsilon,A_U\)</span>{% endraw %} vanish and {% raw %}<span class="math inline">\(\beta_{\mathrm{IV}}=\beta_S\)</span>{% endraw %}. Merely assuming {% raw %}<span class="math inline">\(B=0\)</span>{% endraw %} is insufficient: a residual instrument can be uncorrelated with {% raw %}<span class="math inline">\(X\)</span>{% endraw %} and correlated with {% raw %}<span class="math inline">\(\varepsilon X\)</span>{% endraw %}.</p>

<p><em>Remark on the scope of the counterexample.</em> <a href="#17-15-zero-residual-first-stage">Appendix B</a> gives a covariance example and implements it using the paper’s isoelastic quasi-linear preferences and progressive tax schedules. The implementation verifies optimal income choices, independence of the entire schedule change from all preference parameters, a positive first stage, and individual monotonicity. A continuous version also supplies an elasticity density. The example refutes the statement following the paper’s Proposition 1 that {% raw %}<span class="math inline">\(w_{\mathrm{bias}}=0\)</span>{% endraw %} alone implies {% raw %}<span class="math inline">\(\beta^{\mathrm{IV}}=\beta^{\mathrm{LATE}}\)</span>{% endraw %}. It does not refute the total-covariance identity in Appendix A or the sufficient condition {% raw %}<span class="math inline">\(Z=\mathbb{E}[Z\mid S]\)</span>{% endraw %} for instruments depending only on schedule changes. The problematic zero denominator is {% raw %}<span class="math inline">\(B=w_{\mathrm{bias}}\)</span>{% endraw %} in the normalized bias terms; the example’s actual IV denominator is positive.</p>

<h4 data-note-section="3.1" id="17-15-sufficient-conditions-for-nonnegative-weights">3.1. Sufficient conditions for nonnegative weights</h4>
<p>The sign of {% raw %}<span class="math inline">\(D_S=\mathbb{E}[c(\varepsilon)]\)</span>{% endraw %} does not determine the sign of {% raw %}<span class="math inline">\(c(e)\)</span>{% endraw %} for each elasticity value. A monotonicity restriction on the conditional first-stage mean suffices to ensure nonnegative weights.</p>

<div id="eti-monotone-weights" class="lemma" data-note-number="4" data-note-kind="Lemma">
<p><strong>Lemma 4</strong>. Under the moment and independence conditions of Proposition <a href="#eti-schedule-decomposition">3</a>, suppose that, for almost every {% raw %}<span class="math inline">\(e\)</span>{% endraw %}, a version of</p>

{% raw %}<div class="math display">\[
m_e(t)\triangleq\mathbb{E}[X\mid T=t,\varepsilon=e]
\]</div>{% endraw %}
<p>is nondecreasing on the support of {% raw %}<span class="math inline">\(T\)</span>{% endraw %}. Then {% raw %}<span class="math inline">\(c(e)\ge0\)</span>{% endraw %} for almost every {% raw %}<span class="math inline">\(e\)</span>{% endraw %}.</p>

</div>
<p><strong>Proof.</strong> Iterated expectation gives {% raw %}<span class="math inline">\(c(e)=\operatorname{Cov}(T,m_e(T)\mid\varepsilon=e)\)</span>{% endraw %}. Let {% raw %}<span class="math inline">\(T&#x27;\)</span>{% endraw %} be an independent copy of {% raw %}<span class="math inline">\(T\)</span>{% endraw %} under this conditional law. Square integrability permits expansion of the product, yielding</p>

{% raw %}<div class="math display">\[
2c(e)=\mathbb{E}[(T-T&#x27;)(m_e(T)-m_e(T&#x27;))\mid\varepsilon=e]\ge0.
\]</div>{% endraw %}
<p>The inequality follows from monotonicity of {% raw %}<span class="math inline">\(m_e\)</span>{% endraw %}. {% raw %}<span class="math inline">\(\square\)</span>{% endraw %}</p>

<p>For example, the hypothesis of Lemma <a href="#eti-monotone-weights">4</a> follows from a scalar-index first stage {% raw %}<span class="math inline">\(X=g(T,H)\)</span>{% endraw %} when {% raw %}<span class="math inline">\(T\perp(H,\varepsilon)\)</span>{% endraw %} and {% raw %}<span class="math inline">\(g(\cdot,h)\)</span>{% endraw %} is nondecreasing for almost every {% raw %}<span class="math inline">\(h\)</span>{% endraw %}: conditional averaging over {% raw %}<span class="math inline">\(H\)</span>{% endraw %} preserves that order. With multidimensional schedule changes, reducing the first stage to such an index requires an additional restriction. Independence of schedule changes and preferences establishes the covariance representation; it does not establish monotonicity by itself.</p>

<h3 data-note-section="4" id="17-15-why-baseline-income-instruments-remain-delicate">4. Mean reversion and lagged income</h3>
<p><span id="17-15-a-calculation-of-mean-reversion-bias"></span></p>

<p>Consider untreated log incomes {% raw %}<span class="math inline">\(y_0=a+e_0\)</span>{% endraw %} and {% raw %}<span class="math inline">\(y_1(0)=a+e_1\)</span>{% endraw %}, where {% raw %}<span class="math inline">\(a,e_0,e_1\)</span>{% endraw %} are mutually independent and centered, with variances {% raw %}<span class="math inline">\(\sigma_a^2,\sigma_e^2,\sigma_e^2\)</span>{% endraw %}. Assume {% raw %}<span class="math inline">\(\sigma_y^2\triangleq\sigma_a^2+\sigma_e^2&gt;0\)</span>{% endraw %}. The untreated change is {% raw %}<span class="math inline">\(U=e_1-e_0\)</span>{% endraw %}. For the illustrative instrument {% raw %}<span class="math inline">\(Z=y_0\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
\operatorname{Cov}(Z,U)
=\operatorname{Cov}(a+e_0,e_1-e_0)=-\sigma_e^2.
\]</div>{% endraw %}
<p>In the homogeneous response model {% raw %}<span class="math inline">\(Y=\varepsilon X+U\)</span>{% endraw %}, suppose the population first-stage projection is {% raw %}<span class="math inline">\(X=\alpha_Z+\pi_Z Z+v\)</span>{% endraw %}, with {% raw %}<span class="math inline">\(\mathbb{E}v=0\)</span>{% endraw %}, {% raw %}<span class="math inline">\(\operatorname{Cov}(Z,v)=0\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(\pi_Z\ne0\)</span>{% endraw %}. Then</p>

{% raw %}<span id="eti-linear-reversion"></span><div class="math display">\[
\beta_{\mathrm{IV}}-\varepsilon
=-\frac{\sigma_e^2}{\pi_Z(\sigma_a^2+\sigma_e^2)}.

\tag{9}\]</div>{% endraw %}
<p>The transitory baseline shock enters {% raw %}<span class="math inline">\(Z\)</span>{% endraw %} positively and untreated growth negatively. The sign of the resulting IV bias also depends on {% raw %}<span class="math inline">\(\pi_Z\)</span>{% endraw %}.</p>

<p>If {% raw %}<span class="math inline">\(a,e_0,e_1\)</span>{% endraw %} are jointly Gaussian, the regression formula gives</p>

{% raw %}<span id="eti-gaussian-trend"></span><div class="math display">\[
\mathbb{E}[U\mid y_0]=-\kappa y_0,
\qquad
\kappa\triangleq\frac{\sigma_e^2}{\sigma_a^2+\sigma_e^2}.

\tag{10}\]</div>{% endraw %}
<p>For any measurable {% raw %}<span class="math inline">\(h\)</span>{% endraw %} with {% raw %}<span class="math inline">\(\mathbb{E}[h(y_0)^2]&lt;\infty\)</span>{% endraw %}, iterated expectation now gives</p>

{% raw %}<span id="eti-nonlinear-reversion"></span><div class="math display">\[
\operatorname{Cov}(h(y_0),U)
=-\kappa\operatorname{Cov}(h(y_0),y_0).

\tag{11}\]</div>{% endraw %}
<p>Equation <a href="#eti-nonlinear-reversion">(11)</a> applies to a simulated instrument {% raw %}<span class="math inline">\(Z=h(y_0)\)</span>{% endraw %} within a fixed reform and taxpayer group. It allows nonlinear and discontinuous tax schedules without differentiating {% raw %}<span class="math inline">\(h\)</span>{% endraw %}. In pooled data, the schedule and taxpayer characteristics may also vary; the formula then needs an appropriate conditional model for those variables.</p>

<p>The conditional trend <a href="#eti-gaussian-trend">(10)</a> can be removed by including {% raw %}<span class="math inline">\(y_0\)</span>{% endraw %} in a correctly specified linear trend model. Identification nevertheless requires residual instrument variation. If {% raw %}<span class="math inline">\(h\)</span>{% endraw %} is affine, controlling linearly for {% raw %}<span class="math inline">\(y_0\)</span>{% endraw %} removes the instrument completely. A nonlinear {% raw %}<span class="math inline">\(h\)</span>{% endraw %} can leave variation after linear controls, but unrestricted conditioning on {% raw %}<span class="math inline">\(y_0\)</span>{% endraw %} removes every deterministic function of {% raw %}<span class="math inline">\(y_0\)</span>{% endraw %}. Identification in that case must use variation across reform episodes or groups, together with restrictions on their untreated trends.</p>

<h4 data-note-section="4.1" id="17-15-persistent-transitory-shocks">4.1. Persistent transitory shocks</h4>
<p>Replace independence across dates by a stationary process</p>

{% raw %}<div class="math display">\[
e_{t+1}=\rho e_t+\eta_{t+1},
\qquad 0\le\rho&lt;1,
\qquad \operatorname{Var}(e_t)=\sigma_e^2,
\]</div>{% endraw %}
<p>with centered independent innovations of variance {% raw %}<span class="math inline">\((1-\rho^2)\sigma_e^2\)</span>{% endraw %}, independent of past shocks and of {% raw %}<span class="math inline">\(a\)</span>{% endraw %}. Assume the stationary process is independent of {% raw %}<span class="math inline">\(a\)</span>{% endraw %}, and set {% raw %}<span class="math inline">\(y_t=a+e_t\)</span>{% endraw %}. For {% raw %}<span class="math inline">\(Z_k=y_{-k}\)</span>{% endraw %}, {% raw %}<span class="math inline">\(k\ge0\)</span>{% endraw %},</p>

{% raw %}<span id="eti-lag-covariance"></span><div class="math display">\[
\operatorname{Cov}(Z_k,e_1-e_0)
=\sigma_e^2\rho^k(\rho-1).

\tag{12}\]</div>{% endraw %}
<p>The convention is {% raw %}<span class="math inline">\(\rho^0=1\)</span>{% endraw %}, including {% raw %}<span class="math inline">\(\rho=0\)</span>{% endraw %}. Thus a lag {% raw %}<span class="math inline">\(k\ge1\)</span>{% endraw %} removes the covariance when shocks are serially independent, whereas every finite lag retains a nonzero covariance when {% raw %}<span class="math inline">\(0&lt;\rho&lt;1\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\sigma_e^2&gt;0\)</span>{% endraw %}. Its magnitude decreases geometrically in {% raw %}<span class="math inline">\(k\)</span>{% endraw %}.</p>

<p>The denominator {% raw %}<span class="math inline">\(\operatorname{Cov}(Z_k,X)\)</span>{% endraw %} also changes with the lag. Consequently, geometric decay of the disturbance covariance alone does not imply decreasing IV bias. Under Gaussianity, the corresponding calculation for {% raw %}<span class="math inline">\(h(y_{-k})\)</span>{% endraw %} is</p>

{% raw %}<div class="math display">\[
\operatorname{Cov}(h(y_{-k}),U)
=\frac{\sigma_e^2\rho^k(\rho-1)}{\sigma_a^2+\sigma_e^2}
 \operatorname{Cov}(h(y_{-k}),y_{-k}).
\]</div>{% endraw %}
<p><a href="#17-15-gaussian-and-lag-calculations">Appendix C</a> derives the Gaussian and lag formulas. The calculations give a specific reason for examining shock persistence when selecting lagged-income instruments, as in <span class="citation" data-cites="weber_toward_2014">Weber (<a href="#ref-weber_toward_2014" role="doc-biblioref">2014</a>)</span>. They do not address additional dependence from permanent-income trends or heterogeneous elasticities.</p>

<h3 data-note-section="5" id="17-15-what-residualization-does-to-the-identifying-moment">5. Included controls and conditional IV weights</h3>
<p>Let {% raw %}<span class="math inline">\(W\)</span>{% endraw %} denote pre-treatment controls. For population conditional-mean residualization, define</p>

{% raw %}<div class="math display">\[
\widetilde Z\triangleq Z-\mathbb{E}[Z\mid W],
\qquad
\widetilde X\triangleq X-\mathbb{E}[X\mid W].
\]</div>{% endraw %}
<p>In the homogeneous model {% raw %}<span class="math inline">\(Y=\varepsilon X+g(W)+U\)</span>{% endraw %}, assume square integrability of {% raw %}<span class="math inline">\(Z,X,U,g(W)\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\mathbb{E}[\widetilde Z\widetilde X]\ne0\)</span>{% endraw %}. Since {% raw %}<span class="math inline">\(\mathbb{E}[\widetilde Z\mid W]=0\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
\mathbb{E}[\widetilde Zg(W)]=0,
\qquad
\mathbb{E}[\widetilde ZX]=\mathbb{E}[\widetilde Z\widetilde X].
\]</div>{% endraw %}
<p>Multiplying the response equation by {% raw %}<span class="math inline">\(\widetilde Z\)</span>{% endraw %} and taking expectations gives</p>

{% raw %}<span id="eti-residual-moment"></span><div class="math display">\[
\frac{\mathbb{E}[\widetilde ZY]}{\mathbb{E}[\widetilde Z\widetilde X]}
=\varepsilon+
\frac{\mathbb{E}[\widetilde ZU]}{\mathbb{E}[\widetilde Z\widetilde X]}.

\tag{13}\]</div>{% endraw %}
<p>Identification in <a href="#eti-residual-moment">(13)</a> requires the residualized moment {% raw %}<span class="math inline">\(\mathbb{E}[\widetilde ZU]=0\)</span>{% endraw %}. Conditional orthogonality, {% raw %}<span class="math inline">\(\mathbb{E}[\widetilde ZU\mid W]=0\)</span>{% endraw %} almost surely, is a stronger sufficient restriction. Neither condition follows merely from the definition of {% raw %}<span class="math inline">\(\widetilde Z\)</span>{% endraw %}.</p>

<p>Ordinary 2SLS with a finite vector of controls uses linear projections rather than conditional expectations. Let {% raw %}<span class="math inline">\(H=h(W)\)</span>{% endraw %} include a constant, with {% raw %}<span class="math inline">\(\mathbb{E}[HH^\top]\)</span>{% endraw %} finite and nonsingular. Define {% raw %}<span class="math inline">\(Z^\perp\)</span>{% endraw %} and {% raw %}<span class="math inline">\(X^\perp\)</span>{% endraw %} by projecting {% raw %}<span class="math inline">\(Z\)</span>{% endraw %} and {% raw %}<span class="math inline">\(X\)</span>{% endraw %} onto the span of {% raw %}<span class="math inline">\(H\)</span>{% endraw %}. If {% raw %}<span class="math inline">\(g(W)=H^\top\gamma\)</span>{% endraw %}, the population coefficient on {% raw %}<span class="math inline">\(X\)</span>{% endraw %} in just-identified 2SLS is</p>

{% raw %}<div class="math display">\[
\frac{\mathbb{E}[Z^\perp Y]}{\mathbb{E}[Z^\perp X^\perp]}
=\varepsilon+\frac{\mathbb{E}[Z^\perp U]}{\mathbb{E}[Z^\perp X^\perp]},
\]</div>{% endraw %}
<p>provided the denominator is nonzero. If {% raw %}<span class="math inline">\(g\)</span>{% endraw %} lies outside the control span, the numerator also contains {% raw %}<span class="math inline">\(\mathbb{E}[Z^\perp g(W)]\)</span>{% endraw %}. <a href="#17-15-control-projections-and-conditional-weights">Appendix D</a> proves the projection formula.</p>

<h4 data-note-section="5.1" id="17-15-conditional-binary-instrument-interpretation">5.1. Conditional binary-instrument interpretation</h4>
<p>For a binary instrument, let {% raw %}<span class="math inline">\(p(W)\triangleq\mathbb P(Z=1\mid W)\)</span>{% endraw %} and assume {% raw %}<span class="math inline">\(0&lt;p(W)&lt;1\)</span>{% endraw %} almost surely. Define</p>

{% raw %}<div class="math display">\[
\begin{aligned}
\Delta_X(W)&amp;\triangleq\mathbb{E}[X\mid Z=1,W]-\mathbb{E}[X\mid Z=0,W],\\
\Delta_Y(W)&amp;\triangleq\mathbb{E}[Y\mid Z=1,W]-\mathbb{E}[Y\mid Z=0,W].
\end{aligned}
\]</div>{% endraw %}
<div id="eti-conditional-weights" class="proposition" data-note-number="5" data-note-kind="Proposition">
<p><strong>Proposition 5</strong>. Suppose consistency and the linear-response exclusion restriction hold, and</p>

{% raw %}<div class="math display">\[
Z\ \perp\ (X(0),X(1),\varepsilon,U)\mid W.
\]</div>{% endraw %}
<p>Assume overlap, the integrability conditions of Proposition <a href="#eti-weighted-response">1</a>, {% raw %}<span class="math inline">\(\delta=X(1)-X(0)\ge0\)</span>{% endraw %} almost surely, and</p>

{% raw %}<div class="math display">\[
D_W\triangleq\mathbb{E}[p(W)(1-p(W))\delta]&gt;0.
\]</div>{% endraw %}
<p>Then the conditional-mean residualized IV ratio satisfies</p>

{% raw %}<span id="eti-individual-conditional-weights"></span><div class="math display">\[
\beta_W\triangleq\frac{\mathbb{E}[(Z-p(W))Y]}{\mathbb{E}[(Z-p(W))X]}
=\frac{\mathbb{E}[p(W)(1-p(W))\varepsilon\delta]}{D_W}.

\tag{14}\]</div>{% endraw %}
<p>On {% raw %}<span class="math inline">\(\{\Delta_X(W)&gt;0\}\)</span>{% endraw %} set {% raw %}<span class="math inline">\(\theta(W)\triangleq\Delta_Y(W)/\Delta_X(W)\)</span>{% endraw %}, and set {% raw %}<span class="math inline">\(\theta(W)=0\)</span>{% endraw %} otherwise. Then</p>

{% raw %}<span id="eti-group-conditional-weights"></span><div class="math display">\[
\beta_W
=\frac{\mathbb{E}[p(W)(1-p(W))\Delta_X(W)\theta(W)]}
       {\mathbb{E}[p(W)(1-p(W))\Delta_X(W)]}.

\tag{15}\]</div>{% endraw %}
</div>
<p>To obtain these weights, first condition on {% raw %}<span class="math inline">\(W\)</span>{% endraw %}:</p>

{% raw %}<div class="math display">\[
\begin{aligned}
\mathbb{E}[(Z-p(W))Y\mid W]
&amp;=p(W)(1-p(W))\Delta_Y(W),\\
\Delta_Y(W)&amp;=\mathbb{E}[\varepsilon\delta\mid W],
\qquad
\Delta_X(W)=\mathbb{E}[\delta\mid W].
\end{aligned}
\]</div>{% endraw %}
<p>Integrating the first equality gives the numerator of <a href="#eti-individual-conditional-weights">(14)</a>; the calculation for {% raw %}<span class="math inline">\(X\)</span>{% endraw %} gives its denominator. Monotonicity implies that {% raw %}<span class="math inline">\(\Delta_X(W)=0\)</span>{% endraw %} only on covariate strata where {% raw %}<span class="math inline">\(\delta=0\)</span>{% endraw %} almost surely. On those strata {% raw %}<span class="math inline">\(\Delta_Y(W)=0\)</span>{% endraw %}, so the chosen value of {% raw %}<span class="math inline">\(\theta\)</span>{% endraw %} contributes zero to <a href="#eti-group-conditional-weights">(15)</a>. Appendix D supplies the measure-theoretic and integrability details.</p>

<p>Proposition <a href="#eti-conditional-weights">5</a> gives more weight to groups with greater instrument variation, through {% raw %}<span class="math inline">\(p(W)(1-p(W))\)</span>{% endraw %}, and larger first-stage responses, through {% raw %}<span class="math inline">\(\Delta_X(W)\)</span>{% endraw %}. The individual weights depend on {% raw %}<span class="math inline">\(\delta\)</span>{% endraw %}. The proposition concerns residualization by the true conditional mean. Linear controls have the same residual instrument only when their projection of {% raw %}<span class="math inline">\(Z\)</span>{% endraw %} equals {% raw %}<span class="math inline">\(p(W)\)</span>{% endraw %} almost surely, as with saturated indicators for a finite set of strata.</p>

<h3 data-note-section="6" id="17-15-instrument-choice">6. Instrument choice and interpretation</h3>
<p>A fixed-dollar instrument evaluates schedule changes at a common income level {% raw %}<span class="math inline">\(q^*\)</span>{% endraw %}:</p>

{% raw %}<div class="math display">\[
Z^{q^*}=r_{i1}(q^*)-r_{i0}(q^*)=S_i(q^*).
\]</div>{% endraw %}
<p>Because {% raw %}<span class="math inline">\(Z^{q^*}\)</span>{% endraw %} is a function of {% raw %}<span class="math inline">\(S_i\)</span>{% endraw %}, it equals its conditional expectation given {% raw %}<span class="math inline">\(S_i\)</span>{% endraw %}. Under the independence and relevance assumptions of Proposition <a href="#eti-schedule-decomposition">3</a>, its residual bias terms vanish. Nonnegative elasticity weights require the sign condition in that proposition, for example through Lemma <a href="#eti-monotone-weights">4</a>. Independence of schedule changes from preferences remains a substantive assumption: demographic characteristics can determine both the schedule change and the elasticity.</p>

<p>By contrast, {% raw %}<span class="math inline">\(Z_i^{\mathrm{base}}=S_i(q_{i0})\)</span>{% endraw %} evaluates the schedule change at an income that may depend on preferences. Even when {% raw %}<span class="math inline">\(S_i\)</span>{% endraw %} is independent of preferences, this evaluation can make {% raw %}<span class="math inline">\(Z_i^{\mathrm{base}}\)</span>{% endraw %} dependent on them. The distinction explains why holding income fixed during simulation does not by itself establish instrument validity.</p>

<p>Section 3.1 of <span class="citation" data-cites="kumar_estimating_2020">Kumar and Liang (<a href="#ref-kumar_estimating_2020" role="doc-biblioref">2020</a>)</span> combines fixed-dollar instruments to use variation across the schedule. For any fixed coefficients {% raw %}<span class="math inline">\(a_j\)</span>{% endraw %}, a scalar combination {% raw %}<span class="math inline">\(Z_a=\sum_j a_jS(q_j)\)</span>{% endraw %} is still a function of {% raw %}<span class="math inline">\(S\)</span>{% endraw %}, so the schedule-based exclusion argument applies. Its elasticity weights depend on its own first stage. Arbitrary combinations need not preserve monotonicity, and the nonnegativity of their weights must be checked separately. This observation concerns a specified scalar combination; it does not identify every multiple-instrument 2SLS coefficient with an arbitrary average of single-instrument estimates.</p>

<p>Different valid instruments can therefore identify different weighted elasticities. Changes in reform episodes alter the schedule variation; controls alter the residual instrument; and different income points or combinations alter the first-stage response. Comparisons with a <a href="{% post_url 2023-08-11-taxable-income-elasticities-and-what-kinks-identify %}">bunching elasticity</a> also require attention to the local population and counterfactual density used by the bunching design. Equality of the resulting estimates is not implied by the validity of either design.</p>

<h3 data-note-section="7" id="17-15-technical-appendix">7. Technical appendix</h3>
<h4 data-note-section="7.1" id="17-15-nonlinear-response-weights">7.1. A. Nonlinear-response weights</h4>
<p>Under Proposition <a href="#eti-nonlinear-response">2</a>, instrument independence and consistency yield the Wald numerator</p>

{% raw %}<div class="math display">\[
\mathbb{E}[Y\mid Z=1]-\mathbb{E}[Y\mid Z=0]
=\mathbb{E}[Y_i(X_i(1))-Y_i(X_i(0))].
\]</div>{% endraw %}
<p>Absolute continuity gives the integral of {% raw %}<span class="math inline">\(Y_i&#x27;\)</span>{% endraw %} over the interval crossed by the instrument. Changing endpoint conventions does not affect a Lebesgue integral. The assumed absolute integrability permits Fubini’s theorem, proving <a href="#eti-nonlinear">(5)</a>. The denominator is {% raw %}<span class="math inline">\(\mathbb{E}\delta_i&gt;0\)</span>{% endraw %} by the same independence argument applied to {% raw %}<span class="math inline">\(X\)</span>{% endraw %}.</p>

<p>For almost every {% raw %}<span class="math inline">\(u\)</span>{% endraw %}, set</p>

{% raw %}<div class="math display">\[
\begin{aligned}
a(u)&amp;\triangleq\mathbb P(X_i(0)\le u&lt;X_i(1)),\\
\kappa(u)&amp;\triangleq\frac{a(u)}{\mathbb{E}\delta_i},\\
\mu(u)&amp;\triangleq
\frac{\mathbb{E}[Y_i&#x27;(u)\mathbf1\{X_i(0)\le u&lt;X_i(1)\}]}{a(u)}
\quad\text{when }a(u)&gt;0.
\end{aligned}
\]</div>{% endraw %}
<p>Define {% raw %}<span class="math inline">\(\mu(u)=0\)</span>{% endraw %} when {% raw %}<span class="math inline">\(a(u)=0\)</span>{% endraw %} and on any remaining Lebesgue-null set where the numerator is not defined. Tonelli’s theorem gives</p>

{% raw %}<div class="math display">\[
\int_{\mathbb R}\kappa(u)\,du
=\frac{\mathbb{E}\int_{\mathbb R}\mathbf1\{X_i(0)\le u&lt;X_i(1)\}\,du}{\mathbb{E}\delta_i}=1.
\]</div>{% endraw %}
<p>Also,</p>

{% raw %}<div class="math display">\[
\int_{\mathbb R}|\mu(u)|\kappa(u)\,du
\le\frac{\mathbb{E}\int_{X_i(0)}^{X_i(1)}|Y_i&#x27;(u)|\,du}{\mathbb{E}\delta_i}&lt;\infty.
\]</div>{% endraw %}
<p>Hence {% raw %}<span class="math inline">\(\beta_{\mathrm{IV}}=\int\mu(u)\kappa(u)\,du\)</span>{% endraw %} is a well-defined weighted average. The conditional mean {% raw %}<span class="math inline">\(\mu(u)\)</span>{% endraw %} averages derivatives among taxpayers moved across {% raw %}<span class="math inline">\(u\)</span>{% endraw %}, while {% raw %}<span class="math inline">\(\kappa\)</span>{% endraw %} records how often each treatment level is crossed. For {% raw %}<span class="math inline">\(Y_i&#x27;(u)=\varepsilon_i\)</span>{% endraw %}, integrating the indicator yields {% raw %}<span class="math inline">\(\delta_i\)</span>{% endraw %} and recovers Proposition <a href="#eti-weighted-response">1</a>.</p>

<h4 data-note-section="7.2" id="17-15-zero-residual-first-stage">7.2. B. Zero residual first stage and a behavioral implementation</h4>
<p>Let {% raw %}<span class="math inline">\(V\)</span>{% endraw %} and {% raw %}<span class="math inline">\(H\)</span>{% endraw %} be independent random signs, each equal to {% raw %}<span class="math inline">\(-1\)</span>{% endraw %} or {% raw %}<span class="math inline">\(1\)</span>{% endraw %} with probability {% raw %}<span class="math inline">\(1/2\)</span>{% endraw %}. Independently, let {% raw %}<span class="math inline">\(\varepsilon\)</span>{% endraw %} equal {% raw %}<span class="math inline">\(1\)</span>{% endraw %} or {% raw %}<span class="math inline">\(2\)</span>{% endraw %} with probability {% raw %}<span class="math inline">\(1/2\)</span>{% endraw %}. The scalar {% raw %}<span class="math inline">\(V\)</span>{% endraw %} indexes a policy state. The tax schedules constructed below make the full schedule change {% raw %}<span class="math inline">\(S\)</span>{% endraw %} generate the same sigma-field as {% raw %}<span class="math inline">\(V\)</span>{% endraw %}. Set</p>

{% raw %}<div class="math display">\[
U=0,\qquad X=V+H,\qquad
Z=V+(\varepsilon-3/2)H,\qquad Y=\varepsilon X.
\]</div>{% endraw %}
<p>All variables are bounded. Since {% raw %}<span class="math inline">\(\sigma(S)=\sigma(V)\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
T=\mathbb{E}[Z\mid S]=\mathbb{E}[Z\mid V]=V,\qquad
D_S=\operatorname{Cov}(V,V+H)=1.
\]</div>{% endraw %}
<p>Conditional on {% raw %}<span class="math inline">\(\varepsilon=e\)</span>{% endraw %}, the first-stage mean is {% raw %}<span class="math inline">\(m_e(t)=t\)</span>{% endraw %}, so the weights in Proposition <a href="#eti-schedule-decomposition">3</a> are nonnegative and {% raw %}<span class="math inline">\(\beta_S=\mathbb{E}\varepsilon=3/2\)</span>{% endraw %}. Nevertheless,</p>

{% raw %}<div class="math display">\[
\begin{aligned}
B&amp;=\mathbb{E}[\operatorname{Cov}(Z,X\mid S)]
  =\mathbb{E}[(\varepsilon-3/2)H^2]=0,\\
A_\varepsilon
&amp;=\mathbb{E}[(\varepsilon-3/2)H\,\varepsilon(V+H)]\\
&amp;=\mathbb{E}[(\varepsilon-3/2)\varepsilon]
  =\operatorname{Var}(\varepsilon)=\frac14.
\end{aligned}
\]</div>{% endraw %}
<p>The term containing {% raw %}<span class="math inline">\(VH\)</span>{% endraw %} vanishes by independence and centering. Since {% raw %}<span class="math inline">\(A_U=0\)</span>{% endraw %} and {% raw %}<span class="math inline">\(D=D_S+B=1\)</span>{% endraw %}, equation <a href="#eti-schedule-decomp">(7)</a> gives {% raw %}<span class="math inline">\(\beta_{\mathrm{IV}}=7/4\)</span>{% endraw %}, whereas {% raw %}<span class="math inline">\(\beta_S=3/2\)</span>{% endraw %}. This calculation alone concerns random variables. Its application to the paper requires the following behavioral construction.</p>

<p><strong>Preferences and tax schedules.</strong> Use {% raw %}<span class="math inline">\(q\)</span>{% endraw %} for taxable income in levels and {% raw %}<span class="math inline">\(c\)</span>{% endraw %} for consumption. Give each taxpayer the utility function in equation (1) of <span class="citation" data-cites="kumar_estimating_2020">Kumar and Liang (<a href="#ref-kumar_estimating_2020" role="doc-biblioref">2020</a>)</span>, written in this note’s notation:</p>

{% raw %}<div class="math display">\[
u(q,c)=c-\frac{\exp(-\alpha/\varepsilon)}{1+1/\varepsilon}
q^{1+1/\varepsilon},
\qquad
\alpha=12(1-H),\qquad \varepsilon&gt;0.
\]</div>{% endraw %}
<p>Both preference parameters are constant across dates, so {% raw %}<span class="math inline">\(U=\alpha_1-\alpha_0=0\)</span>{% endraw %}. With an income threshold normalized to one, define the log marginal net-of-tax schedules by</p>

{% raw %}<div class="math display">\[
\begin{aligned}
r_0(q)&amp;=
\begin{cases}
-3,&amp;0&lt;q&lt;1,\\
-6,&amp;q\ge1,
\end{cases}
&amp;
r_{1,v}(q)&amp;=
\begin{cases}
v-2,&amp;0&lt;q&lt;1,\\
v-7,&amp;q\ge1,
\end{cases}
\qquad -2&lt;v&lt;2.
\end{aligned}
\]</div>{% endraw %}
<p>For each date and policy state, set {% raw %}<span class="math inline">\(c_t(q)=\int_0^q\exp(r_t(a))\,da\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\phi_t(q)=q-c_t(q)\)</span>{% endraw %}. This gives the paper’s budget constraint with its exogenous other-income term set to zero. Marginal tax rates {% raw %}<span class="math inline">\(1-\exp(r_t(q))\)</span>{% endraw %} lie strictly between zero and one and increase at the threshold. Consumption is continuous, increasing, and concave in {% raw %}<span class="math inline">\(q\)</span>{% endraw %}. The convention for the marginal rate exactly at the kink does not affect consumption or any optimum below. These schedules depend on {% raw %}<span class="math inline">\(v\)</span>{% endraw %}, not on a taxpayer’s preference type.</p>

<p>The full schedule change is</p>

{% raw %}<div class="math display">\[
S(q)=r_{1,V}(q)-r_0(q)=
\begin{cases}
V+1,&amp;0&lt;q&lt;1,\\
V-1,&amp;q\ge1.
\end{cases}
\]</div>{% endraw %}
<p>Thus {% raw %}<span class="math inline">\(\sigma(S)=\sigma(V)\)</span>{% endraw %}: any fixed income below the threshold recovers {% raw %}<span class="math inline">\(V\)</span>{% endraw %} from {% raw %}<span class="math inline">\(S(q)-1\)</span>{% endraw %}. In particular, {% raw %}<span class="math inline">\(V\)</span>{% endraw %} is not a uniform shift of the baseline schedule. Since {% raw %}<span class="math inline">\(V\perp(\varepsilon,H)\)</span>{% endraw %}, the entire schedule change is independent of both preference parameters. In the paper’s equation (8), take the permanent component of {% raw %}<span class="math inline">\(\alpha\)</span>{% endraw %} to be {% raw %}<span class="math inline">\(12(1-H)\)</span>{% endraw %} and all transitory components, trends, and innovations to be zero. Schedule changes are then independent of the full preference vector used in Proposition 1.</p>

<p><strong>Optimal choices and monotonicity.</strong> Utility increases with consumption, so the budget binds. After substituting the budget constraint, the objective is strictly concave: consumption is concave and {% raw %}<span class="math inline">\(q^{1+1/\varepsilon}\)</span>{% endraw %} is strictly convex. Away from the kink, its first-order condition is</p>

{% raw %}<div class="math display">\[
\exp(r_t(q_t))
=\exp(-\alpha/\varepsilon)q_t^{1/\varepsilon},
\qquad
y_t=\log q_t=\alpha+\varepsilon r_t(q_t).
\]</div>{% endraw %}
<p>The candidate choices are</p>

{% raw %}<div class="math display">\[
\begin{array}{c|cc}
&amp;y_0&amp;y_1(v)\\ \hline
H=1&amp;-3\varepsilon&amp;(v-2)\varepsilon\\
H=-1&amp;24-6\varepsilon&amp;24+(v-7)\varepsilon.
\end{array}
\]</div>{% endraw %}
<p>For {% raw %}<span class="math inline">\(\varepsilon\in\{1,2\}\)</span>{% endraw %} and {% raw %}<span class="math inline">\(-2&lt;v&lt;2\)</span>{% endraw %}, the first row is strictly below zero and the second strictly above zero. Hence each candidate lies inside its asserted tax segment and satisfies the first-order condition there. Strict concavity makes it the unique global maximizer, ruling out a better choice at the kink or in the other segment. Evaluating the schedules at these optimal choices gives</p>

{% raw %}<div class="math display">\[
X(v)=r_{1,v}(q_1(v))-r_0(q_0)=v+H,
\qquad
Y(v)=y_1(v)-y_0=\varepsilon(v+H).
\]</div>{% endraw %}
<p>The behavioral model produces exactly the random variables used in the covariance calculation. Since {% raw %}<span class="math inline">\(T(v)=v\)</span>{% endraw %}, {% raw %}<span class="math inline">\(\partial X(v)/\partial T=1\)</span>{% endraw %} for every taxpayer. This verifies the paper’s individual monotonicity condition on a differentiable family of policy states, including neighborhoods of the two realized states. The first-stage covariances are {% raw %}<span class="math inline">\(D_S=D=1&gt;0\)</span>{% endraw %}, and every conditional elasticity weight is {% raw %}<span class="math inline">\(c(e)=1\)</span>{% endraw %}.</p>

<p>Proposition 1 allows a general, possibly invalid instrument. The instrument {% raw %}<span class="math inline">\(Z\)</span>{% endraw %} here is deliberately dependent on preferences and is not a fixed-dollar instrument. It need not rely on observing latent parameters: baseline log income identifies {% raw %}<span class="math inline">\(H\)</span>{% endraw %} by its sign and identifies {% raw %}<span class="math inline">\(\varepsilon\)</span>{% endraw %} as {% raw %}<span class="math inline">\(-y_0/3\)</span>{% endraw %} in the lower segment or {% raw %}<span class="math inline">\((24-y_0)/6\)</span>{% endraw %} in the upper segment. Thus {% raw %}<span class="math inline">\(Z\)</span>{% endraw %} can be constructed from baseline income and the observed policy state in this model.</p>

<p><strong>A continuous version.</strong> To accommodate both a continuously distributed policy state and the elasticity density used in the paper’s notation, replace the two-point laws by independent</p>

{% raw %}<div class="math display">\[
V\sim\operatorname{Unif}[-\sqrt3,\sqrt3],
\qquad
\varepsilon\sim\operatorname{Unif}
\left[\frac32-\frac{\sqrt3}{2},\frac32+\frac{\sqrt3}{2}\right],
\]</div>{% endraw %}
<p>and retain the independent random sign {% raw %}<span class="math inline">\(H\)</span>{% endraw %}, the same preferences, schedules, and instrument. Now {% raw %}<span class="math inline">\(\varepsilon&gt;0\)</span>{% endraw %}, {% raw %}<span class="math inline">\(\mathbb{E}V=0\)</span>{% endraw %}, {% raw %}<span class="math inline">\(\operatorname{Var}(V)=1\)</span>{% endraw %}, {% raw %}<span class="math inline">\(\mathbb{E}\varepsilon=3/2\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(\operatorname{Var}(\varepsilon)=1/4\)</span>{% endraw %}. Lower-segment choices remain below the threshold because {% raw %}<span class="math inline">\(v\le\sqrt3&lt;2\)</span>{% endraw %}. For upper-segment taxpayers,</p>

{% raw %}<div class="math display">\[
y_0\ge15-3\sqrt3&gt;0,
\qquad
y_1(v)\ge
24-(7+\sqrt3)\frac{3+\sqrt3}{2}
=12-5\sqrt3&gt;0.
\]</div>{% endraw %}
<p>The same global-optimality and monotonicity arguments apply. The covariance calculations use only independence and the displayed moments, so {% raw %}<span class="math inline">\(D_S=D=1\)</span>{% endraw %}, {% raw %}<span class="math inline">\(B=0\)</span>{% endraw %}, {% raw %}<span class="math inline">\(A_\varepsilon=1/4\)</span>{% endraw %}, {% raw %}<span class="math inline">\(\beta_S=3/2\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(\beta_{\mathrm{IV}}=7/4\)</span>{% endraw %} remain unchanged. Independent draws of taxpayers give an i.i.d. sample with bounded regression variables, so the sample IV ratio converges to this population coefficient.</p>

<p><em>Qualification.</em> The finite covariance calculation by itself did not establish compatibility with the paper’s behavioral model; the utility and schedule construction supplies that missing step. The counterexample concerns the claim that a zero residual first-stage covariance suffices to eliminate bias for a possibly invalid instrument. It preserves the paper’s independence, relevance, and individual monotonicity assumptions, and the continuous version supplies the elasticity density. It leaves intact the total-covariance identity and the result for {% raw %}<span class="math inline">\(Z=T\)</span>{% endraw %}, which removes the residual instrument itself. No claim about the paper’s empirical estimates follows from this example.</p>

<h4 data-note-section="7.3" id="17-15-gaussian-and-lag-calculations">7.3. C. Gaussian and lag calculations</h4>
<p>For the independent-shock model, {% raw %}<span class="math inline">\(\operatorname{Cov}(U,y_0)=-\sigma_e^2\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\operatorname{Var}(y_0)=\sigma_y^2&gt;0\)</span>{% endraw %}. Define {% raw %}<span class="math inline">\(V=U+\kappa y_0\)</span>{% endraw %}, where {% raw %}<span class="math inline">\(\kappa=\sigma_e^2/\sigma_y^2\)</span>{% endraw %}. Then {% raw %}<span class="math inline">\(\operatorname{Cov}(V,y_0)=0\)</span>{% endraw %}. Under joint Gaussianity, {% raw %}<span class="math inline">\(V\)</span>{% endraw %} and {% raw %}<span class="math inline">\(y_0\)</span>{% endraw %} are independent, including degenerate Gaussian cases. Since {% raw %}<span class="math inline">\(V\)</span>{% endraw %} is centered, {% raw %}<span class="math inline">\(\mathbb{E}[U\mid y_0]=-\kappa y_0\)</span>{% endraw %}, proving <a href="#eti-gaussian-trend">(10)</a>.</p>

<p>For square-integrable {% raw %}<span class="math inline">\(h(y_0)\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
\begin{aligned}
\operatorname{Cov}(h(y_0),U)
&amp;=\mathbb{E}[(h(y_0)-\mathbb{E}h(y_0))\mathbb{E}[U\mid y_0]]\\
&amp;=-\kappa\operatorname{Cov}(h(y_0),y_0).
\end{aligned}
\]</div>{% endraw %}
<p>In the stationary autoregressive model, iterating the recursion gives, for {% raw %}<span class="math inline">\(j\ge0\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
e_{t+j}=\rho^j e_t+\sum_{\ell=1}^j\rho^{j-\ell}\eta_{t+\ell}.
\]</div>{% endraw %}
<p>Every innovation in the sum is uncorrelated with {% raw %}<span class="math inline">\(e_t\)</span>{% endraw %}. Consequently,</p>

{% raw %}<div class="math display">\[
\operatorname{Cov}(e_{t+j},e_t)=\rho^j\sigma_e^2.
\]</div>{% endraw %}
<p>Independence of {% raw %}<span class="math inline">\(a\)</span>{% endraw %} from the shock process now yields</p>

{% raw %}<div class="math display">\[
\begin{aligned}
\operatorname{Cov}(y_{-k},e_1-e_0)
&amp;=\operatorname{Cov}(e_{-k},e_1)-\operatorname{Cov}(e_{-k},e_0)\\
&amp;=\sigma_e^2(\rho^{k+1}-\rho^k),
\end{aligned}
\]</div>{% endraw %}
<p>which proves <a href="#eti-lag-covariance">(12)</a>. If {% raw %}<span class="math inline">\(a\)</span>{% endraw %} and the stationary process are jointly Gaussian, the Gaussian regression argument applies to {% raw %}<span class="math inline">\((U,y_{-k})\)</span>{% endraw %} with this covariance and variance {% raw %}<span class="math inline">\(\sigma_y^2\)</span>{% endraw %}. Conditioning on {% raw %}<span class="math inline">\(y_{-k}\)</span>{% endraw %} then proves the stated formula for a nonlinear lagged-income instrument.</p>

<h4 data-note-section="7.4" id="17-15-control-projections-and-conditional-weights">7.4. D. Control projections and conditional weights</h4>
<p>Let {% raw %}<span class="math inline">\(Q\triangleq\mathbb{E}[HH^\top]\)</span>{% endraw %} be nonsingular. The linear-projection residual is</p>

{% raw %}<div class="math display">\[
Z^\perp=Z-H^\top Q^{-1}\mathbb{E}[HZ],
\qquad \mathbb{E}[HZ^\perp]=0,
\]</div>{% endraw %}
<p>and similarly for {% raw %}<span class="math inline">\(X^\perp\)</span>{% endraw %}. The population just-identified IV equations for coefficients {% raw %}<span class="math inline">\((b,d)\)</span>{% endraw %} are</p>

{% raw %}<div class="math display">\[
\mathbb{E}[H(Y-bX-H^\top d)]=0,
\qquad
\mathbb{E}[Z(Y-bX-H^\top d)]=0.
\]</div>{% endraw %}
<p>Subtracting the appropriate linear combination of the first equations from the second gives {% raw %}<span class="math inline">\(\mathbb{E}[Z^\perp(Y-bX)]=0\)</span>{% endraw %}. Because {% raw %}<span class="math inline">\(X-X^\perp\)</span>{% endraw %} lies in the control span, {% raw %}<span class="math inline">\(\mathbb{E}[Z^\perp X]=\mathbb{E}[Z^\perp X^\perp]\)</span>{% endraw %}. The assumed nonzero denominator determines {% raw %}<span class="math inline">\(b\)</span>{% endraw %}, and the first equations then determine {% raw %}<span class="math inline">\(d\)</span>{% endraw %}. Substitution of {% raw %}<span class="math inline">\(Y=\varepsilon X+H^\top\gamma+U\)</span>{% endraw %} proves the homogeneous coefficient formula. For a general {% raw %}<span class="math inline">\(g(W)\)</span>{% endraw %}, the same substitution retains the term {% raw %}<span class="math inline">\(\mathbb{E}[Z^\perp g(W)]\)</span>{% endraw %}.</p>

<p>For Proposition <a href="#eti-conditional-weights">5</a>, write {% raw %}<span class="math inline">\(p=p(W)\)</span>{% endraw %} and {% raw %}<span class="math inline">\(m_j(W)=\mathbb{E}[Y\mid Z=j,W]\)</span>{% endraw %}. Conditional expectation over the two values of {% raw %}<span class="math inline">\(Z\)</span>{% endraw %} gives</p>

{% raw %}<div class="math display">\[
\begin{aligned}
\mathbb{E}[(Z-p)Y\mid W]
&amp;=p(1-p)m_1+(1-p)(-p)m_0\\
&amp;=p(1-p)\Delta_Y(W).
\end{aligned}
\]</div>{% endraw %}
<p>Conditional instrument independence and consistency imply</p>

{% raw %}<div class="math display">\[
m_j(W)=\mathbb{E}[\varepsilon X(j)+U\mid W].
\]</div>{% endraw %}
<p>Subtracting the expressions for {% raw %}<span class="math inline">\(j=1,0\)</span>{% endraw %} gives {% raw %}<span class="math inline">\(\Delta_Y(W)=\mathbb{E}[\varepsilon\delta\mid W]\)</span>{% endraw %}. Repeating the calculation with {% raw %}<span class="math inline">\(X\)</span>{% endraw %} gives {% raw %}<span class="math inline">\(\Delta_X(W)=\mathbb{E}[\delta\mid W]\)</span>{% endraw %} and the denominator {% raw %}<span class="math inline">\(D_W\)</span>{% endraw %}. This proves <a href="#eti-individual-conditional-weights">(14)</a>.</p>

<p>Let {% raw %}<span class="math inline">\(A=\{\Delta_X(W)=0\}\)</span>{% endraw %}. Since {% raw %}<span class="math inline">\(\delta\ge0\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
\mathbb{E}[\delta\mathbf1_A]
=\mathbb{E}[\Delta_X(W)\mathbf1_A]=0
\quad\Longrightarrow\quad
\delta\mathbf1_A=0\ \text{almost surely}.
\]</div>{% endraw %}
<p>It follows that {% raw %}<span class="math inline">\(\Delta_Y(W)\mathbf1_A=0\)</span>{% endraw %} almost surely. Thus {% raw %}<span class="math inline">\(\Delta_Y(W)=\Delta_X(W)\theta(W)\)</span>{% endraw %} with the convention stated in Proposition <a href="#eti-conditional-weights">5</a>. Integrability follows from</p>

{% raw %}<div class="math display">\[
\mathbb{E}[p(1-p)|\Delta_X\theta|]
\le\mathbb{E}[p(1-p)\mathbb{E}[|\varepsilon\delta|\mid W]]
\le\frac14\mathbb{E}|\varepsilon\delta|&lt;\infty.
\]</div>{% endraw %}
<p>Equation <a href="#eti-group-conditional-weights">(15)</a> is therefore well defined even when the conditional ratio is large on strata with a small positive first stage. Its normalized group weights are nonnegative and sum to one in expectation. No uniform lower bound on {% raw %}<span class="math inline">\(\Delta_X(W)\)</span>{% endraw %} is needed for this population identity.</p>

<h4 data-note-section="7.5" id="17-15-keeping-the-covariance-decomposition-well-defined">7.5. E. Conditioning on the endogenous rate change</h4>
<p><span id="17-15-a-covariance-simplification-worth-keeping"></span></p>

<p>The decomposition using {% raw %}<span class="math inline">\(\overline Z_X\triangleq\mathbb{E}[Z\mid X]\)</span>{% endraw %} is a valid covariance identity. Its interpretation differs from conditioning on the schedule change {% raw %}<span class="math inline">\(S\)</span>{% endraw %} in Proposition <a href="#eti-schedule-decomposition">3</a>.</p>

<p>Let {% raw %}<span class="math inline">\(R_X\triangleq Z-\overline Z_X\)</span>{% endraw %}. For any square-integrable {% raw %}<span class="math inline">\(h(X)\)</span>{% endraw %}, Cauchy–Schwarz ensures that {% raw %}<span class="math inline">\(R_Xh(X)\)</span>{% endraw %} is integrable, and</p>

{% raw %}<div class="math display">\[
\mathbb{E}[R_Xh(X)]
=\mathbb{E}[h(X)\mathbb{E}[R_X\mid X]]=0.
\]</div>{% endraw %}
<p>Taking {% raw %}<span class="math inline">\(h(X)=X\)</span>{% endraw %} gives {% raw %}<span class="math inline">\(\operatorname{Cov}(R_X,X)=0\)</span>{% endraw %}. For square-integrable {% raw %}<span class="math inline">\(Y\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
\begin{aligned}
\operatorname{Cov}(R_X,Y)
&amp;=\mathbb{E}[R_XY]\\
&amp;=\mathbb{E}[\mathbb{E}[ZY\mid X]-\mathbb{E}[Z\mid X]\mathbb{E}[Y\mid X]]\\
&amp;=\mathbb{E}[\operatorname{Cov}(Z,Y\mid X)].
\end{aligned}
\]</div>{% endraw %}
<p>Hence</p>

{% raw %}<div class="math display">\[
\beta_{\mathrm{IV}}
=\frac{\operatorname{Cov}(\overline Z_X,Y)}{D}
+\frac{\mathbb{E}[\operatorname{Cov}(Z,Y\mid X)]}{D},
\qquad
D=\operatorname{Cov}(\overline Z_X,X).
\]</div>{% endraw %}
<p>There is only one first-stage denominator: {% raw %}<span class="math inline">\(\mathbb{E}[\operatorname{Cov}(Z,X\mid X)]=0\)</span>{% endraw %} identically. Neither term involving {% raw %}<span class="math inline">\(\overline Z_X\)</span>{% endraw %} acquires a causal interpretation from conditional expectation alone, since {% raw %}<span class="math inline">\(X\)</span>{% endraw %} is endogenous. By contrast, Proposition <a href="#eti-schedule-decomposition">3</a> uses independence of schedule changes from preferences to justify the elasticity representation of {% raw %}<span class="math inline">\(\beta_S\)</span>{% endraw %}.</p>

<div id="refs" class="references csl-bib-body hanging-indent" data-entry-spacing="0" role="list">
<div id="ref-gruber_elasticity_2002" class="csl-entry" role="listitem">
Gruber, Jon, and Emmanuel Saez. 2002. <span>“The Elasticity of Taxable Income: Evidence and Implications.”</span> <em>Journal of Public Economics</em> 84 (1): 1–32. <a href="https://doi.org/10.1016/S0047-2727(01)00085-8">https://doi.org/10.1016/S0047-2727(01)00085-8</a>.
</div>
<div id="ref-kumar_estimating_2020" class="csl-entry" role="listitem">
Kumar, Anil, and Che-Yuan Liang. 2020. <span>“Estimating Taxable Income Responses with Elasticity Heterogeneity.”</span> <em>Journal of Public Economics</em> 188 (August): 104209. <a href="https://doi.org/10.1016/j.jpubeco.2020.104209">https://doi.org/10.1016/j.jpubeco.2020.104209</a>.
</div>
<div id="ref-weber_toward_2014" class="csl-entry" role="listitem">
Weber, Caroline E. 2014. <span>“Toward Obtaining a Consistent Estimate of the Elasticity of Taxable Income Using Difference-in-Differences.”</span> <em>Journal of Public Economics</em> 117 (September): 90–103. <a href="https://doi.org/10.1016/j.jpubeco.2014.05.004">https://doi.org/10.1016/j.jpubeco.2014.05.004</a>.
</div>
</div>

</div>
