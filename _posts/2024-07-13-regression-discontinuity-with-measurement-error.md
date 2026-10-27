---
layout: "post"
title: "Regression Discontinuity with Measurement Error"
date: "2024-07-13"
tags: ["econometrics", "causal inference"]
excerpt: "When measurement error permits valid regression discontinuity inference."
note_series: "Regression discontinuity with measurement error"
note_source: "assets/notes/Overleaf Projects (32 items)/Notes on RDD Measurement Error (Dong Kolesar)/stats.tex"
redirect_from: ["/2024/07/13/when-measurement-error-can-be-ignored-in-regression-discontinuity/", "/2024/07/24/sharp-regression-discontinuity-with-measurement-error/", "/2024/08/05/fuzzy-regression-discontinuity-with-measurement-error/", "/2024/08/17/interpreting-the-measurement-error-conditions/"]
---

<div class="note-content" markdown="0">

<span id="20-0-appendix-gap"></span>
<span id="20-0-appendix-rd-replicate-variance"></span>
<span id="20-0-variance-estimation-with-repeated-support-points"></span>
<span id="eq:rd-covariance"></span>
<span id="eq:rd-fuzzy-bound"></span>
<span id="eq:rd-replicate-consistency"></span>
<span id="eq:rd-sharp-bound"></span>
<span id="rd-effect-bounds"></span>
<span id="rd-fuzzy-comparison"></span>
<span id="rd-gap-counterexample"></span>
<span id="rd-replicate-variance"></span>
<p>Regression discontinuity with a mismeasured running variable requires separate assumptions about treatment assignment, potential outcomes, and the support of the observed variable. With observations approaching the cutoff from both sides, correct classification and continuity identify the mean treatment effect there in a sharp design. Relating that effect to the latent cutoff requires further restrictions on measurement error and effect heterogeneity.</p>
<p>The sharp and fuzzy identification results are based on Lemmas 2.1 and 2.2 of <span class="citation" data-cites="dong_when_2023">Dong and Kolesár (<a href="#ref-dong_when_2023" role="doc-biblioref">2023</a>)</span>.</p>
<h3 data-note-section="1" id="20-0-model">1. Model, assignment, and conditional versions</h3>
<p>Let {% raw %}<span class="math inline">\(Y(0)\)</span>{% endraw %} and {% raw %}<span class="math inline">\(Y(1)\)</span>{% endraw %} be real-valued potential outcomes, and let {% raw %}<span class="math inline">\(T\in\{0,1\}\)</span>{% endraw %} be treatment received. Consistency means</p>
{% raw %}<div class="math display">\[
Y=Y(0)+T\{Y(1)-Y(0)\}.
\]</div>{% endraw %}
<p>Write {% raw %}<span class="math inline">\(\Delta Y=Y(1)-Y(0)\)</span>{% endraw %}. The administrator observes a real running variable {% raw %}<span class="math inline">\(X^*\)</span>{% endraw %} and assigns eligibility according to</p>
{% raw %}<div class="math display">\[
Z=\mathbf1\{X^*\ge0\}.
\]</div>{% endraw %}
<p>The researcher observes {% raw %}<span class="math inline">\(X\)</span>{% endraw %}, with measurement error defined by</p>
{% raw %}<span id="eq:rd-measurement"></span><div class="math display">\[
e=X^*-X,\qquad X^*=X+e.

\tag{1}\]</div>{% endraw %}
<p>The equation fixes the sign convention for the error. A sharp design has {% raw %}<span class="math inline">\(T=Z\)</span>{% endraw %}. A fuzzy design permits noncompliance and will use potential treatments {% raw %}<span class="math inline">\(T(0),T(1)\)</span>{% endraw %}.</p>
<p>The assignment condition used throughout the identification arguments is</p>
{% raw %}<span id="eq:rd-classification"></span><div class="math display">\[
\mathbf1\{X\ge0\}=\mathbf1\{X^*\ge0\}\quad\text{almost surely}.

\tag{2}\]</div>{% endraw %}
<p>Thus the observed and latent variables must classify eligibility identically. Equality of their numerical values is unnecessary. Conversely, a small mean-squared measurement error does not imply this classification condition.</p>
<p>We write {% raw %}<span class="math inline">\(\mathbb P\)</span>{% endraw %} for probability and {% raw %}<span class="math inline">\(\mathbb{E}\)</span>{% endraw %} for expectation. Assume {% raw %}<span class="math inline">\(\mathbb{E}|Y(t)|&lt;\infty\)</span>{% endraw %}, {% raw %}<span class="math inline">\(t=0,1\)</span>{% endraw %}. Every conditional moment used at the cutoff is also assumed finite; unconditional integrability alone does not determine a conditional moment at a null event. Let</p>
{% raw %}<div class="math display">\[
g_t(x)=\mathbb{E}[Y(t)\mid X=x],\qquad
g(x)=\mathbb{E}[Y\mid X=x].
\]</div>{% endraw %}
<p>For the point-identification results, zero is approached by observations from both sides:</p>
{% raw %}<span id="eq:rd-support"></span><div class="math display">\[
\mathbb P(-\varepsilon&lt;X&lt;0)&gt;0,\qquad
\mathbb P(0&lt;X&lt;\varepsilon)&gt;0
\quad\text{for every }\varepsilon&gt;0.

\tag{3}\]</div>{% endraw %}
<p>Only sufficiently small {% raw %}<span class="math inline">\(\varepsilon\)</span>{% endraw %} need be checked. This condition allows irregular support accumulating at zero, but excludes a fixed grid with an isolated cutoff and a fixed interval removed around zero.</p>
<p>Conditional expectations are determined only almost everywhere under the law of the conditioning variable. When {% raw %}<span class="math inline">\(\mathbb P(X=0)=0\)</span>{% endraw %}, expressions such as {% raw %}<span class="math inline">\(g_t(0)\)</span>{% endraw %} refer to specified versions whose limits are imposed by the continuity assumptions below. If two versions each have a finite one-sided limit, their limits agree: equality almost everywhere and the support condition ensure that every sufficiently small one-sided interval contains points outside their exceptional null sets. Choosing such a sequence of points proves equality of the limits.</p>
<p>For nested conditioning, choose conditional probability kernels whose iterated integrals agree with the conditional means at zero. Write {% raw %}<span class="math inline">\(Q_x\)</span>{% endraw %} for the conditional law of {% raw %}<span class="math inline">\(e\)</span>{% endraw %} given {% raw %}<span class="math inline">\(X=x\)</span>{% endraw %}, including its value {% raw %}<span class="math inline">\(Q_0\)</span>{% endraw %} at zero. Whenever a formula below integrates conditional moments against {% raw %}<span class="math inline">\(Q_0\)</span>{% endraw %}, require the corresponding disintegration identity to hold at zero. For example, with</p>
{% raw %}<div class="math display">\[
h_t(s,u)=\mathbb{E}[Y(t)\mid X^*=s,e=u],
\]</div>{% endraw %}
<p>the required identity is</p>
{% raw %}<span id="eq:rd-coherent-kernel"></span><div class="math display">\[
g_t(0)=\int h_t(u,u)\,Q_0(du),\qquad
\int |h_t(u,u)|\,Q_0(du)&lt;\infty.

\tag{4}\]</div>{% endraw %}
<p>The identity holds at almost every {% raw %}<span class="math inline">\(x\)</span>{% endraw %} with {% raw %}<span class="math inline">\(u\)</span>{% endraw %} replaced by {% raw %}<span class="math inline">\(x+u\)</span>{% endraw %} in the first argument. At zero, we require the identity even when {% raw %}<span class="math inline">\(\mathbb P(X=0)=0\)</span>{% endraw %}. <a href="#rd-continuity-kernel">Lemma 5</a> gives conditions under which the integral converges to {% raw %}<span class="math inline">\(g_t(0)\)</span>{% endraw %}. Continuity of the two scalar functions {% raw %}<span class="math inline">\(g_t\)</span>{% endraw %} alone does not specify the entire conditional error law at zero.</p>
<h3 data-note-section="2" id="20-0-what-the-observed-discontinuity-identifies">2. Sharp identification</h3>
<div id="rd-error-sharp" class="theorem" data-note-number="1" data-note-kind="Theorem">
<p><strong>Theorem 1</strong>. (Sharp RD at the observed cutoff.) Suppose consistency, integrability, the assignment condition, and the two-sided support condition hold. Let {% raw %}<span class="math inline">\(T=Z\)</span>{% endraw %}. Suppose {% raw %}<span class="math inline">\(g_0\)</span>{% endraw %} and {% raw %}<span class="math inline">\(g_1\)</span>{% endraw %} have versions continuous at zero. The observed regression then has a version with one-sided limits identifying</p>
{% raw %}<span id="eq:rd-sharp-jump"></span><div class="math display">\[
J_Y:=\lim_{x\downarrow0}g(x)-\lim_{x\uparrow0}g(x)
=g_1(0)-g_0(0)=:\tau.

\tag{5}\]</div>{% endraw %}
<p>The limits are taken through the corresponding support of {% raw %}<span class="math inline">\(X\)</span>{% endraw %}. With the specified conditional versions, {% raw %}<span class="math inline">\(\tau=\mathbb{E}[\Delta Y\mid X=0]\)</span>{% endraw %}.</p>
</div>
<div class="proof">
<p><em>Proof.</em> Consistency and correct classification give</p>
{% raw %}<div class="math display">\[
Y=\mathbf1\{X\ge0\}Y(1)+\mathbf1\{X&lt;0\}Y(0).
\]</div>{% endraw %}
<p>Conditioning on {% raw %}<span class="math inline">\(X\)</span>{% endraw %} therefore yields, almost surely,</p>
{% raw %}<div class="math display">\[
g(X)=\mathbf1\{X\ge0\}g_1(X)
     +\mathbf1\{X&lt;0\}g_0(X).
\]</div>{% endraw %}
<p>Choose the version {% raw %}<span class="math inline">\(g(x)=\mathbf1\{x\ge0\}g_1(x)+\mathbf1\{x&lt;0\}g_0(x)\)</span>{% endraw %}. Its right limit is {% raw %}<span class="math inline">\(g_1(0)\)</span>{% endraw %} by continuity, and its left limit is {% raw %}<span class="math inline">\(g_0(0)\)</span>{% endraw %}. The support condition makes these limits unique among versions possessing such limits, so both are determined by the observed law. Subtracting gives {% raw %}<span class="math inline">\(J_Y=g_1(0)-g_0(0)\)</span>{% endraw %}. Linearity of conditional expectation identifies the difference with the conditional mean of {% raw %}<span class="math inline">\(\Delta Y\)</span>{% endraw %} under the specified version. {% raw %}<span class="math inline">\(\square\)</span>{% endraw %}</p>
</div>
<p>Correct classification determines which potential outcome appears on each side. Continuity permits comparison of those two conditional means at the same value of {% raw %}<span class="math inline">\(X\)</span>{% endraw %}. Neither step replaces the conditioning event {% raw %}<span class="math inline">\(X=0\)</span>{% endraw %} by {% raw %}<span class="math inline">\(X^*=0\)</span>{% endraw %}.</p>
<div id="20-0-deriving-the-observed-jump">

</div>
<h4 data-note-section="2.1" id="20-0-continuous-noise-can-remove-the-discontinuity">2.1. Continuous noise can remove the discontinuity</h4>
<p>Footnote 12 of <span class="citation" data-cites="dong_when_2023">Dong and Kolesár (<a href="#ref-dong_when_2023" role="doc-biblioref">2023</a>)</span> observes that continuous measurement error can smooth away the outcome discontinuity. The following calculation verifies this claim for Gaussian error. Consider {% raw %}<span class="math inline">\(X^*\sim\mathcal{N}(0,1)\)</span>{% endraw %} and {% raw %}<span class="math inline">\(U\sim\mathcal{N}(0,\sigma^2)\)</span>{% endraw %} independently, with {% raw %}<span class="math inline">\(\sigma&gt;0\)</span>{% endraw %}. Let {% raw %}<span class="math inline">\(X=X^*+U\)</span>{% endraw %}, {% raw %}<span class="math inline">\(Y(0)=0\)</span>{% endraw %}, {% raw %}<span class="math inline">\(Y(1)=a\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(T=Z=\mathbf1\{X^*\ge0\}\)</span>{% endraw %}. Completing the square in the joint normal density gives</p>
{% raw %}<div class="math display">\[
X^*\mid X=x\sim
\mathcal{N}\left(\frac{x}{1+\sigma^2},
                \frac{\sigma^2}{1+\sigma^2}\right).
\]</div>{% endraw %}
<p>Indeed, the terms involving {% raw %}<span class="math inline">\(s=X^*\)</span>{% endraw %} in the exponent are</p>
{% raw %}<div class="math display">\[
s^2+\frac{(x-s)^2}{\sigma^2}
=\frac{1+\sigma^2}{\sigma^2}
 \left(s-\frac{x}{1+\sigma^2}\right)^2
 +\frac{x^2}{1+\sigma^2}.
\]</div>{% endraw %}
<p>Consequently,</p>
{% raw %}<div class="math display">\[
g(x)=a\,\mathbb P(X^*\ge0\mid X=x)
=a\,\Phi\left(\frac{x}{\sigma\sqrt{1+\sigma^2}}\right),
\]</div>{% endraw %}
<p>where {% raw %}<span class="math inline">\(\Phi\)</span>{% endraw %} is the standard normal distribution function. This regression is continuous at zero, so {% raw %}<span class="math inline">\(J_Y=0\)</span>{% endraw %} even when {% raw %}<span class="math inline">\(a\ne0\)</span>{% endraw %}. Both eligibility statuses have positive conditional probability at every finite {% raw %}<span class="math inline">\(x\)</span>{% endraw %}.</p>
<h3 data-note-section="3" id="20-0-the-estimand-can-move">3. Observed and latent cutoff effects</h3>
<p>Define the latent conditional mean effects</p>
{% raw %}<div class="math display">\[
\tau^*(s)=\mathbb{E}[\Delta Y\mid X^*=s],\qquad
\widetilde\tau(s,u)=\mathbb{E}[\Delta Y\mid X^*=s,e=u].
\]</div>{% endraw %}
<p>Choose versions satisfying the disintegration identities at zero. The mean treatment effects at the latent and observed cutoffs are {% raw %}<span class="math inline">\(\tau^*(0)\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\tau\)</span>{% endraw %}, respectively.</p>
<div id="20-0-from-the-observed-cutoff-to-a-latent-effect-average">

</div>
<div id="rd-latent-average" class="proposition" data-note-number="2" data-note-kind="Proposition">
<p><strong>Proposition 2</strong>. (Latent-effect representation.) Suppose the sharp identification assumptions hold and the conditional kernels satisfy the disintegration identities at zero. Then</p>
{% raw %}<span id="eq:rd-general-sharp-average"></span><div class="math display">\[
\tau=\int\widetilde\tau(u,u)\,Q_0(du).

\tag{6}\]</div>{% endraw %}
<p>If, in addition,</p>
{% raw %}<span id="eq:rd-effect-restriction"></span><div class="math display">\[
\widetilde\tau(u,u)=\tau^*(u)
\quad\text{for }Q_0\text{-almost every }u,

\tag{7}\]</div>{% endraw %}
<p>then</p>
{% raw %}<span id="eq:rd-sharp-average"></span><div class="math display">\[
\tau=\int\tau^*(u)\,Q_0(du).

\tag{8}\]</div>{% endraw %}
<p>Assume that the displayed integrands are absolutely integrable with respect to {% raw %}<span class="math inline">\(Q_0\)</span>{% endraw %}.</p>
</div>
<div class="proof">
<p><em>Proof.</em> Conditional on {% raw %}<span class="math inline">\(X=0\)</span>{% endraw %} and {% raw %}<span class="math inline">\(e=u\)</span>{% endraw %}, the identity {% raw %}<span class="math inline">\(X^*=X+e\)</span>{% endraw %} fixes {% raw %}<span class="math inline">\(X^*=u\)</span>{% endraw %}. Integrating first over the conditional outcome law and then over {% raw %}<span class="math inline">\(Q_0\)</span>{% endraw %} gives</p>
{% raw %}<div class="math display">\[
\begin{aligned}
\tau
&amp;=\int\mathbb{E}[\Delta Y\mid X=0,e=u]\,Q_0(du)\\
&amp;=\int\mathbb{E}[\Delta Y\mid X^*=u,e=u]\,Q_0(du)\\
&amp;=\int\widetilde\tau(u,u)\,Q_0(du).
\end{aligned}
\]</div>{% endraw %}
<p>The disintegration identities at zero justify the first two equalities; absolute integrability justifies the iterated integrals. Substituting {% raw %}<span class="math inline">\(\widetilde\tau(u,u)=\tau^*(u)\)</span>{% endraw %} gives {% raw %}<span class="math inline">\(\tau=\int\tau^*(u)\,Q_0(du)\)</span>{% endraw %}. {% raw %}<span class="math inline">\(\square\)</span>{% endraw %}</p>
</div>
<p>The restriction concerns the mean treatment effect on the diagonal {% raw %}<span class="math inline">\((s,u)=(u,u)\)</span>{% endraw %}. Conditional independence of {% raw %}<span class="math inline">\((Y(0),Y(1))\)</span>{% endraw %} and {% raw %}<span class="math inline">\(e\)</span>{% endraw %} given {% raw %}<span class="math inline">\(X^*\)</span>{% endraw %}, with the required versions at the cutoff, is sufficient but stronger.</p>
<p>The latent-cutoff comparison uses a different conditional law. Let {% raw %}<span class="math inline">\(Q_0^*\)</span>{% endraw %} be the specified law of {% raw %}<span class="math inline">\(e\)</span>{% endraw %} given {% raw %}<span class="math inline">\(X^*=0\)</span>{% endraw %}. Then</p>
{% raw %}<div class="math display">\[
\tau^*(0)=\int\widetilde\tau(0,u)\,Q_0^*(du).
\]</div>{% endraw %}
<p>The observed effect averages {% raw %}<span class="math inline">\(\widetilde\tau(u,u)\)</span>{% endraw %} under {% raw %}<span class="math inline">\(Q_0\)</span>{% endraw %}; the latent effect averages {% raw %}<span class="math inline">\(\widetilde\tau(0,u)\)</span>{% endraw %} under {% raw %}<span class="math inline">\(Q_0^*\)</span>{% endraw %}. Neither the integrands nor the measures generally coincide.</p>
<p>Remark 1 of <span class="citation" data-cites="dong_when_2023">Dong and Kolesár (<a href="#ref-dong_when_2023" role="doc-biblioref">2023</a>)</span> compares the two effects when {% raw %}<span class="math inline">\(\tau^*(u)=a+bu\)</span>{% endraw %}. Under the latent-effect representation and {% raw %}<span class="math inline">\(\int|u|\,Q_0(du)&lt;\infty\)</span>{% endraw %},</p>
{% raw %}<div class="math display">\[
\tau=\int(a+bu)\,Q_0(du)=a+b\int u\,Q_0(du),
\qquad \tau^*(0)=a.
\]</div>{% endraw %}
<p>Thus {% raw %}<span class="math inline">\(\tau-\tau^*(0)=b\,\mathbb{E}[e\mid X=0]\)</span>{% endraw %}. In the paper’s example, {% raw %}<span class="math inline">\(\mathbb{E}[e\mid X=0]=1/2\)</span>{% endraw %}, giving {% raw %}<span class="math inline">\(\tau=a+b/2\)</span>{% endraw %}. Constant treatment effects give {% raw %}<span class="math inline">\(\tau=\tau^*(0)\)</span>{% endraw %}.</p>
<!-- RD source scope: additional-sharp-effect-bounds
The quadratic comparison and Lipschitz bound are additional results, not results of Dong and Kolesar. The linear calculation from their Remark 1 is retained above.

::: {.corollary #rd-effect-bounds}
(Heterogeneity and error magnitude.) Under the representation $\tau=\int\tau^*\,dQ_0$:

(a) If $\tau^*(u)=a+bu$ and $\int|u|\,Q_0(du)<\infty$, then

$$
\tau-\tau^*(0)=b\int u\,Q_0(du).
$$

(b) If $\tau^*(u)=a+bu+du^2$ and $\int u^2\,Q_0(du)<\infty$, then

$$
\tau-\tau^*(0)=b\int u\,Q_0(du)+d\int u^2\,Q_0(du).
$$

(c) If $|\tau^*(u)-\tau^*(0)|\le L|u|$ for $Q_0$-almost every $u$, then

$$
|\tau-\tau^*(0)|\le L\int|u|\,Q_0(du).
\label{eq:rd-sharp-bound}
$$
:::

::: {.proof}
*Proof.* For (a) and (b), integrate the polynomial and use $Q_0(\mathbb R)=1$ and $\tau^*(0)=a$. For (c), subtract the constant $\tau^*(0)$ inside the integral and apply the triangle inequality:

$$
\left|\int\{\tau^*(u)-\tau^*(0)\}\,Q_0(du)\right|
\le\int|\tau^*(u)-\tau^*(0)|\,Q_0(du)
\le L\int|u|\,Q_0(du).
$$

$\square$
:::

A zero conditional error mean removes the linear term in (b), but leaves the quadratic term $d\int u^2\,dQ_0$. If the treatment effect is constant, then $\tau=\tau^*(0)$.
-->
<h3 data-note-section="4" id="20-0-fuzzy-assignment-adds-a-second-weighting">4. Fuzzy identification and complier weights</h3>
<p>Let {% raw %}<span class="math inline">\(T(z)\in\{0,1\}\)</span>{% endraw %} be the treatment that would be received under eligibility {% raw %}<span class="math inline">\(z\)</span>{% endraw %}, and assume {% raw %}<span class="math inline">\(T=T(Z)\)</span>{% endraw %}. Exclusion means that eligibility affects the outcome only through treatment received, so</p>
{% raw %}<div class="math display">\[
Y=Y(T(Z))=Y(0)+T(Z)\Delta Y.
\]</div>{% endraw %}
<p>Write {% raw %}<span class="math inline">\(C=\{T(1)&gt;T(0)\}\)</span>{% endraw %} for the complier event, and define</p>
{% raw %}<div class="math display">\[
p_z(x)=\mathbb{E}[T(z)\mid X=x],\qquad
m_z(x)=\mathbb{E}[Y(T(z))\mid X=x],\qquad
p(x)=\mathbb{E}[T\mid X=x].
\]</div>{% endraw %}
<div id="rd-error-fuzzy" class="theorem" data-note-number="3" data-note-kind="Theorem">
<p><strong>Theorem 3</strong>. (Fuzzy RD at the observed cutoff.) Suppose consistency, exclusion, correct classification, two-sided support at zero, and the conditional-version and integrability conventions above hold. Assume that {% raw %}<span class="math inline">\(p_z\)</span>{% endraw %} and {% raw %}<span class="math inline">\(m_z\)</span>{% endraw %} are continuous at zero for {% raw %}<span class="math inline">\(z=0,1\)</span>{% endraw %}, and that</p>
{% raw %}<span id="eq:rd-fuzzy-assumptions"></span><div class="math display">\[
\mathbb P(T(1)\ge T(0)\mid X=0)=1,\qquad
\pi_C:=\mathbb P(C\mid X=0)&gt;0.

\tag{9}\]</div>{% endraw %}
<p>Then the outcome and treatment jumps satisfy</p>
{% raw %}<span id="eq:rd-fuzzy-jumps"></span><div class="math display">\[
J_Y=\mathbb{E}[\Delta Y\mathbf1_C\mid X=0],\qquad
J_T:=\lim_{x\downarrow0}p(x)-\lim_{x\uparrow0}p(x)=\pi_C.

\tag{10}\]</div>{% endraw %}
<p>Their ratio identifies</p>
{% raw %}<span id="eq:rd-fuzzy-effect"></span><div class="math display">\[
\tau_F:=\frac{J_Y}{J_T}
=\mathbb{E}[\Delta Y\mid C,X=0].

\tag{11}\]</div>{% endraw %}
</div>
<div id="20-0-the-fuzzy-numerator-and-denominator-term-by-term">

</div>
<div class="proof">
<p><em>Proof.</em> Correct classification implies {% raw %}<span class="math inline">\(T=T(1)\)</span>{% endraw %} on {% raw %}<span class="math inline">\(\{X\ge0\}\)</span>{% endraw %} and {% raw %}<span class="math inline">\(T=T(0)\)</span>{% endraw %} on {% raw %}<span class="math inline">\(\{X&lt;0\}\)</span>{% endraw %}. Exclusion therefore permits the regression version {% raw %}<span class="math inline">\(g(x)=m_1(x)\)</span>{% endraw %} on the nonnegative side and {% raw %}<span class="math inline">\(g(x)=m_0(x)\)</span>{% endraw %} on the negative side. Continuity and the support condition imply</p>
{% raw %}<div class="math display">\[
\begin{aligned}
J_Y
&amp;=m_1(0)-m_0(0)\\
&amp;=\mathbb{E}[Y(T(1))-Y(T(0))\mid X=0]\\
&amp;=\mathbb{E}[\Delta Y\{T(1)-T(0)\}\mid X=0].
\end{aligned}
\]</div>{% endraw %}
<p>The last equality follows by subtracting {% raw %}<span class="math inline">\(Y(T(z))=Y(0)+T(z)\Delta Y\)</span>{% endraw %} for {% raw %}<span class="math inline">\(z=0,1\)</span>{% endraw %}. Since treatment is binary, monotonicity makes {% raw %}<span class="math inline">\(T(1)-T(0)=\mathbf1_C\)</span>{% endraw %} under the specified conditional law at zero. Thus {% raw %}<span class="math inline">\(J_Y=\mathbb{E}[\Delta Y\mathbf1_C\mid X=0]\)</span>{% endraw %}.</p>
<p>Applying the same side-specific argument to {% raw %}<span class="math inline">\(p\)</span>{% endraw %} gives</p>
{% raw %}<div class="math display">\[
J_T=p_1(0)-p_0(0)
=\mathbb{E}[T(1)-T(0)\mid X=0]
=\pi_C.
\]</div>{% endraw %}
<p>Finally, the definition of conditional expectation on the event {% raw %}<span class="math inline">\(C\)</span>{% endraw %}, whose conditional probability is positive, gives</p>
{% raw %}<div class="math display">\[
\mathbb{E}[\Delta Y\mathbf1_C\mid X=0]
=\pi_C\mathbb{E}[\Delta Y\mid C,X=0].
\]</div>{% endraw %}
<p>Dividing by {% raw %}<span class="math inline">\(\pi_C\)</span>{% endraw %} gives {% raw %}<span class="math inline">\(\tau_F=\mathbb{E}[\Delta Y\mid X=0,C]\)</span>{% endraw %}. {% raw %}<span class="math inline">\(\square\)</span>{% endraw %}</p>
</div>
<p>The continuity assumption is on {% raw %}<span class="math inline">\(\mathbb{E}[Y(T(z))\mid X=x]\)</span>{% endraw %}. Continuity of {% raw %}<span class="math inline">\(\mathbb{E}[Y(t)\mid X=x]\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\mathbb{E}[T(z)\mid X=x]\)</span>{% endraw %} separately would not generally imply continuity of the conditional product {% raw %}<span class="math inline">\(\mathbb{E}[T(z)\Delta Y\mid X=x]\)</span>{% endraw %}.</p>
<p>Always-takers and never-takers have {% raw %}<span class="math inline">\(T(1)-T(0)=0\)</span>{% endraw %} and contribute to neither jump. Without monotonicity, defiers have {% raw %}<span class="math inline">\(T(1)-T(0)=-1\)</span>{% endraw %}. The numerator then subtracts their effect contribution and the denominator subtracts their probability; the ratio no longer has the stated nonnegative complier weights. If {% raw %}<span class="math inline">\(\pi_C=0\)</span>{% endraw %} under monotonicity, both jumps are zero and the ratio does not define a complier mean.</p>
<h4 data-note-section="4.1" id="20-0-the-conditional-distribution-of-error-among-compliers">4.1. The conditional distribution of error among compliers</h4>
<p>Put</p>
{% raw %}<div class="math display">\[
c_0(u)=\mathbb P(C\mid X=0,e=u),\qquad
\mu_0(u)=\mathbb{E}[\Delta Y\mid C,X=0,e=u].
\]</div>{% endraw %}
<p>Define {% raw %}<span class="math inline">\(\mu_0\)</span>{% endraw %} arbitrarily, say as zero, where {% raw %}<span class="math inline">\(c_0=0\)</span>{% endraw %}; only the product {% raw %}<span class="math inline">\(c_0\mu_0\)</span>{% endraw %} will enter. Integrating the conditional compliance probability over {% raw %}<span class="math inline">\(Q_0\)</span>{% endraw %} gives</p>
{% raw %}<div class="math display">\[
\pi_C=\int c_0(u)\,Q_0(du).
\]</div>{% endraw %}
<p>For every measurable set {% raw %}<span class="math inline">\(A\)</span>{% endraw %},</p>
{% raw %}<span id="eq:rd-complier-law"></span><div class="math display">\[
\mathbb P(e\in A\mid C,X=0)
=\frac{\mathbb P(e\in A,C\mid X=0)}{\pi_C}
=\frac{\int_A c_0(u)\,Q_0(du)}{\pi_C}.

\tag{12}\]</div>{% endraw %}
<p>Among compliers, error values with higher compliance probabilities receive more weight. The denominator makes these weights integrate to one.</p>
<div id="rd-fuzzy-latent" class="proposition" data-note-number="4" data-note-kind="Proposition">
<p><strong>Proposition 4</strong>. (Latent complier representation.) Under the fuzzy identification assumptions, with conditional laws satisfying the disintegration identities at zero,</p>
{% raw %}<div class="math display">\[
\tau_F=\frac{\int c_0(u)\mu_0(u)\,Q_0(du)}{\int c_0(u)\,Q_0(du)}.
\]</div>{% endraw %}
<p>Define the conditional compliance probability at each latent value by</p>
{% raw %}<div class="math display">\[
c(s)=\mathbb P(C\mid X^*=s).
\]</div>{% endraw %}
<p>Where {% raw %}<span class="math inline">\(c(s)&gt;0\)</span>{% endraw %}, also define {% raw %}<span class="math inline">\(\tau_C^*(s)=\mathbb{E}[\Delta Y\mid C,X^*=s]\)</span>{% endraw %}. Set {% raw %}<span class="math inline">\(\tau_C^*(s)=0\)</span>{% endraw %} where {% raw %}<span class="math inline">\(c(s)=0\)</span>{% endraw %} when writing weighted integrals. Suppose</p>
{% raw %}<span id="eq:rd-fuzzy-error-restrictions"></span><div class="math display">\[
c_0(u)=c(u)\quad Q_0\text{-almost everywhere},
\qquad
\mu_0(u)=\tau_C^*(u)\quad c(u)Q_0(du)\text{-almost everywhere}.

\tag{13}\]</div>{% endraw %}
<p>Then</p>
{% raw %}<span id="eq:rd-fuzzy-weights"></span><div class="math display">\[
\tau_F=\int\tau_C^*(u)\,W_0(du),\qquad
W_0(du)=\frac{c(u)Q_0(du)}{\int c(v)\,Q_0(dv)}.

\tag{14}\]</div>{% endraw %}
<p>Here {% raw %}<span class="math inline">\(W_0\)</span>{% endraw %} is a probability measure, and {% raw %}<span class="math inline">\(\int c|\tau_C^*|\,dQ_0&lt;\infty\)</span>{% endraw %} is required.</p>
</div>
<div class="proof">
<p><em>Proof.</em> Disintegrating the numerator of the fuzzy jump ratio gives</p>
{% raw %}<div class="math display">\[
\begin{aligned}
\mathbb{E}[\Delta Y\mathbf1_C\mid X=0]
&amp;=\int\mathbb{E}[\Delta Y\mathbf1_C\mid X=0,e=u]\,Q_0(du)\\
&amp;=\int c_0(u)\mu_0(u)\,Q_0(du).
\end{aligned}
\]</div>{% endraw %}
<p>The denominator equals {% raw %}<span class="math inline">\(\int c_0\,dQ_0\)</span>{% endraw %}. Substitute the two additional restrictions and divide by this positive integral. Nonnegativity of {% raw %}<span class="math inline">\(c\)</span>{% endraw %} gives {% raw %}<span class="math inline">\(W_0\ge0\)</span>{% endraw %}, and integrating its definition gives {% raw %}<span class="math inline">\(W_0(\mathbb R)=1\)</span>{% endraw %}. Values assigned to {% raw %}<span class="math inline">\(\tau_C^*\)</span>{% endraw %} where {% raw %}<span class="math inline">\(c=0\)</span>{% endraw %} do not affect any weighted integral. {% raw %}<span class="math inline">\(\square\)</span>{% endraw %}</p>
</div>
<p>The first additional restriction concerns selection into compliance; the second concerns selection in mean effects among compliers. Together, the compliance and mean-effect restrictions give the representation using functions of {% raw %}<span class="math inline">\(X^*\)</span>{% endraw %} alone.</p>
<!-- RD source scope: two-point-complier-example
An added numerical illustration, separate from the derivation of Lemma 2.2.

For a simple calculation, suppose $Q_0$ assigns probability $1/2$ to each of two latent values, with compliance probabilities $1/4$ and $3/4$ and complier effects $a_1,a_2$. The denominator is $1/2$, and

$$
\tau_F=\frac{a_1/8+3a_2/8}{1/2}
=\frac14a_1+\frac34a_2.
$$

The equal error probabilities do not produce equal complier weights.
-->
<!-- RD source scope: additional-complier-effect-bounds
The covariance decomposition and Lipschitz comparison are additional results. Lemma 2.2 and its compliance-weight derivation remain visible.

::: {.corollary #rd-fuzzy-comparison}
(Comparing observed and latent complier effects.) Let $\mathbb E_0$ and $\operatorname{Cov}_0$ denote expectation and covariance under $Q_0$. Assume the latent complier representation in [Proposition 5](#rd-fuzzy-latent), including its two additional restrictions, so that

$$
\tau_F=\frac{\mathbb E_0[c\tau_C^*]}{\mathbb E_0c},\qquad
W_0(du)=\frac{c(u)Q_0(du)}{\mathbb E_0c},\qquad \mathbb E_0c>0.
$$

(a) If $c>0$ $Q_0$-almost everywhere and $\mathbb E_0|\tau_C^*|<\infty$, then

$$
\tau_F
=\mathbb E_0\tau_C^*
 +\frac{\operatorname{Cov}_0(c,\tau_C^*)}{\mathbb E_0c}.
\label{eq:rd-covariance}
$$

(b) To compare $\tau_F$ with $\tau_C^*(0)$, suppose $c(0)>0$ and $\tau_C^*(0)$ is finite. Assume

$$
|\tau_C^*(u)-\tau_C^*(0)|\le L|u|
\quad W_0\text{-almost everywhere}.
$$

Then, provided the right side is finite,

$$
|\tau_F-\tau_C^*(0)|
\le L\frac{\mathbb E_0[c(e)|e|]}{\mathbb E_0c(e)}.
\label{eq:rd-fuzzy-bound}
$$
The positivity and unweighted integrability conditions in (a) are not required for (b).
:::

::: {.proof}
*Proof.* For (a), $0\le c\le1$ and integrability of $\tau_C^*$ imply integrability of $c\tau_C^*$. Expand the covariance definition:

$$
\mathbb E_0[c\tau_C^*]
=\mathbb E_0c\,\mathbb E_0\tau_C^*
 +\operatorname{Cov}_0(c,\tau_C^*).
$$

Divide by $\mathbb E_0c>0$ and use the assumed representation of $\tau_F$. For (b), $W_0$ has mass one, so

$$
\begin{aligned}
|\tau_F-\tau_C^*(0)|
&=\left|\int\{\tau_C^*(u)-\tau_C^*(0)\}\,W_0(du)\right|\\
&\le\int|\tau_C^*(u)-\tau_C^*(0)|\,W_0(du)\\
&\le L\int|u|\,W_0(du)
=L\frac{\mathbb E_0[c(e)|e|]}{\mathbb E_0c(e)}.
\end{aligned}
$$

Every integral uses only values with positive $W_0$ weight. $\square$
:::

If $c=0$ on a set of positive $Q_0$ measure, the unweighted mean $\mathbb E_0\tau_C^*$ depends on the values assigned to $\tau_C^*$ there. Those values receive zero weight in $\tau_F$. Symmetry or centering of $Q_0$ alone does not eliminate the covariance term. If only $\mathbb E_0|e|$ is known, $c\le1$ gives the weaker bound $L\mathbb E_0|e|/\pi_C$. A known positive lower bound on $\pi_C$ turns this expression into a numerical upper bound.
-->
<h3 data-note-section="5" id="20-0-measurement-mechanisms">5. Measurement mechanisms and support at the cutoff</h3>
<h4 data-note-section="5.1" id="20-0-rounding-and-trimming">5.1. Rounding and trimming</h4>
<p>Suppose {% raw %}<span class="math inline">\(X=\delta\lfloor X^*/\delta\rfloor\)</span>{% endraw %}, with {% raw %}<span class="math inline">\(\delta&gt;0\)</span>{% endraw %} and cutoff zero. If {% raw %}<span class="math inline">\(X^*\ge0\)</span>{% endraw %}, its rounded-down value is nonnegative. If {% raw %}<span class="math inline">\(X^*&lt;0\)</span>{% endraw %}, its rounded-down value is at most {% raw %}<span class="math inline">\(-\delta\)</span>{% endraw %}. Thus classification is exact. The observed value {% raw %}<span class="math inline">\(X=0\)</span>{% endraw %} represents {% raw %}<span class="math inline">\(0\le X^*&lt;\delta\)</span>{% endraw %}. Under the mean-effect restriction, {% raw %}<span class="math inline">\(\tau\)</span>{% endraw %} averages latent effects over this interval. For example, a uniform latent distribution within the bin and {% raw %}<span class="math inline">\(\tau^*(s)=a+bs\)</span>{% endraw %} give</p>
{% raw %}<div class="math display">\[
\tau=\frac1\delta\int_0^\delta(a+bs)\,ds
=a+\frac{b\delta}{2}.
\]</div>{% endraw %}
<p>There are no support values in {% raw %}<span class="math inline">\((-\delta,0)\)</span>{% endraw %} or {% raw %}<span class="math inline">\((0,\delta)\)</span>{% endraw %}, so the two-sided support assumption of <a href="#rd-error-sharp">Theorem 1</a> fails. Identifying {% raw %}<span class="math inline">\(\tau\)</span>{% endraw %} from this grid requires restrictions linking the observed conditional means to their values at zero.</p>
<p>For a more general bounded error, suppose {% raw %}<span class="math inline">\(e\in[s_0,s_1]\)</span>{% endraw %} almost surely, where {% raw %}<span class="math inline">\(s_0\le0\le s_1\)</span>{% endraw %}. If {% raw %}<span class="math inline">\(X&lt;-s_1\)</span>{% endraw %}, then {% raw %}<span class="math inline">\(X^*=X+e&lt;0\)</span>{% endraw %}. If {% raw %}<span class="math inline">\(X\ge-s_0\)</span>{% endraw %}, then {% raw %}<span class="math inline">\(X^*\ge0\)</span>{% endraw %}. Removing observations with</p>
{% raw %}<div class="math display">\[
X\in[-s_1,-s_0)
\]</div>{% endraw %}
<p>therefore ensures correct classification in the retained sample. The half-open endpoints follow from the convention that equality at zero is eligible. With {% raw %}<span class="math inline">\(|e|\le a\)</span>{% endraw %}, retaining only {% raw %}<span class="math inline">\(|X|&gt;a\)</span>{% endraw %} is a simpler sufficient rule.</p>
<p>In the independent Gaussian example above, both eligibility statuses have positive conditional probability at every finite {% raw %}<span class="math inline">\(x\)</span>{% endraw %}. Integrating the probability of the wrong status over either retained tail therefore gives a positive probability of misclassification. No finite trimming interval repairs classification in that example. <!-- RD source scope: dependent-gaussian-counterexample
This dependent Gaussian construction is not in the paper and is not needed for the bounded-error trimming calculation.

A Gaussian marginal error distribution alone does not imply this failure: if $e\sim\mathcal N(0,1)$, $X=e$, and $X^*=2e$, then $X^*=X+e$ and both variables always have the same sign. Dependence between the error and the running variable matters.
--></p>
<p>After trimming a fixed neighborhood of zero, estimating the jump requires extrapolating the regressions to zero. If trimming also selects a subgroup with different reporting precision, the continuity assumptions concern that subgroup’s potential-outcome means.</p>
<h4 data-note-section="5.2" id="20-0-a-support-gap-and-partial-identification">5.2. A support gap and partial identification</h4>
<p>For {% raw %}<span class="math inline">\(M\ge0\)</span>{% endraw %}, define {% raw %}<span class="math inline">\(\mathcal F_{\mathrm{RD}}(M)\)</span>{% endraw %} to be the functions</p>
{% raw %}<div class="math display">\[
f(x)=\mathbf1\{x\ge0\}f_+(x)+\mathbf1\{x&lt;0\}f_-(x)
\]</div>{% endraw %}
<p>whose branches extend to zero, are continuously differentiable on their respective sides, and satisfy</p>
{% raw %}<span id="eq:rd-smoothness-class"></span><div class="math display">\[
|f_s&#x27;(x)-f_s&#x27;(y)|\le M|x-y|,\qquad s\in\{-,+\}.

\tag{15}\]</div>{% endraw %}
<p>The derivative at zero is one-sided. The branches may have different intercepts and slopes. The constant {% raw %}<span class="math inline">\(M\)</span>{% endraw %} bounds curvature on each side. Its definition includes continuously differentiable functions with a Lipschitz derivative, even when a second derivative fails to exist at finitely many points.</p>
<p>Remark 4 of <span class="citation" data-cites="dong_when_2023">Dong and Kolesár (<a href="#ref-dong_when_2023" role="doc-biblioref">2023</a>)</span> interprets the smoothness restriction through extensions of the observed regression beyond its support. For an observed regression {% raw %}<span class="math inline">\(g\)</span>{% endraw %} on the support {% raw %}<span class="math inline">\(S\)</span>{% endraw %} of {% raw %}<span class="math inline">\(X\)</span>{% endraw %}, the corresponding set of jump values is</p>
{% raw %}<span id="eq:rd-identified-set"></span><div class="math display">\[
\mathcal I_M(g,S)=
\{f_+(0)-f_-(0): f\in\mathcal F_{\mathrm{RD}}(M),\ f(X)=g(X)\text{ almost surely}\}.

\tag{16}\]</div>{% endraw %}
<p>The set {% raw %}<span class="math inline">\(\mathcal I_M(g,S)\)</span>{% endraw %} collects regression jumps compatible with the observed law and curvature bound. Additional potential-outcome restrictions can narrow it.</p>
<!-- RD source scope: sharp-support-gap-interval
Remark 4 discusses partial identification under irregular support, but does not derive this sharp interval or the associated causal attainment construction.

::: {.proposition #rd-gap-counterexample}
(Sharp jump bounds across a support gap.) Let $a,M>0$, suppose $S\subseteq[-2a,-a]\cup[a,2a]$, and let the observed outcome be zero. Then

$$
[-Ma^2,Ma^2]\subseteq\mathcal I_M(0,S).
$$

Every value in this interval is also compatible with a sharp design satisfying $X^*=X$, consistency, and continuous potential-outcome means at zero. If $S=[-2a,-a]\cup[a,2a]$, then

$$
\mathcal I_M(0,S)=[-Ma^2,Ma^2].
$$
:::

For the upper bound under full interval support, continuity and $f(X)=0$ almost surely imply $f_+(a)=f_+'(a)=0$ and $f_-(-a)=f_-'(-a)=0$. Integrating the derivative bound from the adjacent endpoint gives

$$
|f_+(0)|\leq\int_0^a M(a-x)\,dx=\frac{Ma^2}{2},
\qquad |f_-(0)|\leq\frac{Ma^2}{2}.
$$

Hence the jump lies in $[-Ma^2,Ma^2]$. To attain a jump $j$ in that interval, choose $b_+=j/2$ and $b_-=-j/2$, and set

$$
f_+(x)=b_+(1-x/a)_+^2\quad(x\geq0),\qquad
f_-(x)=b_-(1+x/a)_+^2\quad(x\leq0).
$$

Both observed branches vanish on $S$, and $f_+(0)-f_-(0)=j$. The [appendix](#20-0-appendix-gap) verifies the curvature bound and constructs the potential outcomes.
-->
<h3 data-note-section="6" id="20-0-smoothness">6. Sufficient continuity and smoothness conditions</h3>
<p>The continuity of {% raw %}<span class="math inline">\(g_t(x)\)</span>{% endraw %} depends jointly on the latent conditional means and the conditional error law. The following conditions control both.</p>
<div id="rd-continuity-kernel" class="lemma" data-note-number="5" data-note-kind="Lemma">
<p><strong>Lemma 5</strong>. (Continuity through a conditional kernel.) Let {% raw %}<span class="math inline">\(I\)</span>{% endraw %} be an open interval containing zero. Suppose the specified law {% raw %}<span class="math inline">\(Q_x\)</span>{% endraw %} has density {% raw %}<span class="math inline">\(f(u;x)\)</span>{% endraw %} relative to a fixed measure {% raw %}<span class="math inline">\(\lambda\)</span>{% endraw %}, and</p>
{% raw %}<div class="math display">\[
g_t(x)=\int h_t(x+u,u)f(u;x)\,\lambda(du),\qquad x\in I.
\]</div>{% endraw %}
<p>Assume that, for {% raw %}<span class="math inline">\(\lambda\)</span>{% endraw %}-almost every {% raw %}<span class="math inline">\(u\)</span>{% endraw %}, the product {% raw %}<span class="math inline">\(h_t(x+u,u)f(u;x)\)</span>{% endraw %} converges to {% raw %}<span class="math inline">\(h_t(u,u)f(u;0)\)</span>{% endraw %} as {% raw %}<span class="math inline">\(x\to0\)</span>{% endraw %}. Suppose there is an integrable function {% raw %}<span class="math inline">\(D_t\)</span>{% endraw %} with</p>
{% raw %}<div class="math display">\[
|h_t(x+u,u)f(u;x)|\le D_t(u),\qquad x\in I.
\]</div>{% endraw %}
<p>Then {% raw %}<span class="math inline">\(g_t\)</span>{% endraw %} is continuous at zero, with limit {% raw %}<span class="math inline">\(\int h_t(u,u)f(u;0)\,\lambda(du)\)</span>{% endraw %}.</p>
</div>
<div class="proof">
<p><em>Proof.</em> For every sequence {% raw %}<span class="math inline">\(x_n\to0\)</span>{% endraw %} in {% raw %}<span class="math inline">\(I\)</span>{% endraw %}, the integrands converge almost everywhere and are bounded in absolute value by {% raw %}<span class="math inline">\(D_t\)</span>{% endraw %}. Dominated convergence gives</p>
{% raw %}<div class="math display">\[
g_t(x_n)\longrightarrow\int h_t(u,u)f(u;0)\,\lambda(du)=g_t(0).
\]</div>{% endraw %}
<p>Sequential continuity is equivalent to continuity for real-valued functions on {% raw %}<span class="math inline">\(I\)</span>{% endraw %}. The same domination makes the integral at zero finite. {% raw %}<span class="math inline">\(\square\)</span>{% endraw %}</p>
</div>
<p>The lemma applies to the fuzzy conditional means by replacing {% raw %}<span class="math inline">\(h_t\)</span>{% endraw %} with versions of {% raw %}<span class="math inline">\(\mathbb{E}[T(z)\mid X^*,e]\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\mathbb{E}[Y(T(z))\mid X^*,e]\)</span>{% endraw %}.</p>
<p>Appendix A.1 of <span class="citation" data-cites="dong_when_2023">Dong and Kolesár (<a href="#ref-dong_when_2023" role="doc-biblioref">2023</a>)</span> differentiates the conditional-mean integral after a change of variables. The calculation below gives the first two derivatives under explicit domination and support-boundary conditions. These are sufficient conditions for twice continuous differentiability; the paper states a more general result in terms of Hölder smoothness.</p>
<div id="rd-smoothing" class="proposition" data-note-number="6" data-note-kind="Proposition">
<p><strong>Proposition 6</strong>. (Smoothing by the conditional density.) Let {% raw %}<span class="math inline">\(Q_x\)</span>{% endraw %} have a Lebesgue density {% raw %}<span class="math inline">\(f(u;x)\)</span>{% endraw %} for {% raw %}<span class="math inline">\(x\)</span>{% endraw %} in an open interval {% raw %}<span class="math inline">\(I\)</span>{% endraw %}, and put</p>
{% raw %}<div class="math display">\[
g(x)=\int h(x+u,u)f(u;x)\,du
=\int H(y,x)\,dy,\qquad
H(y,x)=h(y,y-x)f(y-x;x).
\]</div>{% endraw %}
<p>Suppose {% raw %}<span class="math inline">\(h(y,u)\)</span>{% endraw %} is twice continuously differentiable in {% raw %}<span class="math inline">\(u\)</span>{% endraw %} for almost every {% raw %}<span class="math inline">\(y\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(f(u;x)\)</span>{% endraw %} is twice continuously differentiable jointly in {% raw %}<span class="math inline">\((u,x)\)</span>{% endraw %} on the needed domain. After extending the density by zero when necessary, require these differentiability conditions to remain valid across support boundaries. Suppose {% raw %}<span class="math inline">\(H\)</span>{% endraw %} and its first two derivatives in {% raw %}<span class="math inline">\(x\)</span>{% endraw %} are dominated on {% raw %}<span class="math inline">\(I\)</span>{% endraw %} by integrable functions {% raw %}<span class="math inline">\(A_0(y),A_1(y),A_2(y)\)</span>{% endraw %}, respectively. Then {% raw %}<span class="math inline">\(g\)</span>{% endraw %} is twice continuously differentiable and</p>
{% raw %}<span id="eq:rd-smoothing-derivatives"></span><div class="math display">\[
\begin{aligned}
g&#x27;(x)&amp;=\int\{-h_2f+h(f_x-f_u)\}\,dy,\\
g&#x27;&#x27;(x)&amp;=\int\{h_{22}f-2h_2(f_x-f_u)
                  +h(f_{xx}-2f_{ux}+f_{uu})\}\,dy,
\end{aligned}

\tag{17}\]</div>{% endraw %}
<p>where {% raw %}<span class="math inline">\(h,h_2,h_{22}\)</span>{% endraw %} are evaluated at {% raw %}<span class="math inline">\((y,y-x)\)</span>{% endraw %} and all density terms at {% raw %}<span class="math inline">\((y-x;x)\)</span>{% endraw %}. In particular,</p>
{% raw %}<div class="math display">\[
|g&#x27;&#x27;(x)|\le\int A_2(y)\,dy.
\]</div>{% endraw %}
</div>
<div class="proof">
<p><em>Proof.</em> The substitution {% raw %}<span class="math inline">\(y=x+u\)</span>{% endraw %} has Jacobian one and gives the second integral representation. Keeping {% raw %}<span class="math inline">\(y\)</span>{% endraw %} fixed, the chain rule gives</p>
{% raw %}<div class="math display">\[
\partial_x h(y,y-x)=-h_2(y,y-x),\qquad
\partial_x f(y-x;x)=-f_u(y-x;x)+f_x(y-x;x).
\]</div>{% endraw %}
<p>Their product derivative is the first displayed integrand. Differentiating it again gives {% raw %}<span class="math inline">\(h_{22}f\)</span>{% endraw %}, two copies of {% raw %}<span class="math inline">\(-h_2(f_x-f_u)\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(h(f_{xx}-2f_{ux}+f_{uu})\)</span>{% endraw %}.</p>
<p>To justify differentiation under the integral, fix {% raw %}<span class="math inline">\(x\in I\)</span>{% endraw %} and take {% raw %}<span class="math inline">\(v\)</span>{% endraw %} small enough that the segment from {% raw %}<span class="math inline">\(x\)</span>{% endraw %} to {% raw %}<span class="math inline">\(x+v\)</span>{% endraw %} lies in {% raw %}<span class="math inline">\(I\)</span>{% endraw %}. The fundamental theorem of calculus yields</p>
{% raw %}<div class="math display">\[
\frac{H(y,x+v)-H(y,x)}{v}
=\int_0^1\partial_xH(y,x+tv)\,dt.
\]</div>{% endraw %}
<p>Its absolute value is at most {% raw %}<span class="math inline">\(A_1(y)\)</span>{% endraw %}, and it converges pointwise almost everywhere to {% raw %}<span class="math inline">\(\partial_xH(y,x)\)</span>{% endraw %}. Dominated convergence proves the formula for {% raw %}<span class="math inline">\(g&#x27;\)</span>{% endraw %}. Apply the same argument to {% raw %}<span class="math inline">\(\partial_xH\)</span>{% endraw %} with envelope {% raw %}<span class="math inline">\(A_2\)</span>{% endraw %} to obtain {% raw %}<span class="math inline">\(g&#x27;&#x27;\)</span>{% endraw %}. Continuity of both derivatives follows from their pointwise continuity and the same dominating functions. Finally, integrate {% raw %}<span class="math inline">\(|\partial_x^2H|\le A_2\)</span>{% endraw %} to obtain the bound. {% raw %}<span class="math inline">\(\square\)</span>{% endraw %}</p>
</div>
<p>No derivative of {% raw %}<span class="math inline">\(h\)</span>{% endraw %} in its first argument appears in this proof. Changing variables places the differentiation on the error argument and the density.</p>
<p>Remark 3 of <span class="citation" data-cites="dong_when_2023">Dong and Kolesár (<a href="#ref-dong_when_2023" role="doc-biblioref">2023</a>)</span> states that measurement error can smooth a latent kink into a regression with bounded curvature. To verify the calculation for a kink, let {% raw %}<span class="math inline">\(e\)</span>{% endraw %} have a continuous compactly supported density {% raw %}<span class="math inline">\(f\)</span>{% endraw %} independent of {% raw %}<span class="math inline">\(X\)</span>{% endraw %}, and take {% raw %}<span class="math inline">\(h(s,u)=|s|\)</span>{% endraw %}. Then</p>
{% raw %}<div class="math display">\[
g(x)=\int|x+u|f(u)\,du.
\]</div>{% endraw %}
<p>The difference quotients of {% raw %}<span class="math inline">\(|x+u|\)</span>{% endraw %} are bounded by one and converge to {% raw %}<span class="math inline">\(\operatorname{sign}(x+u)\)</span>{% endraw %} except at {% raw %}<span class="math inline">\(u=-x\)</span>{% endraw %}, a set of probability zero. Dominated convergence gives</p>
{% raw %}<div class="math display">\[
g&#x27;(x)=1-2F(-x),\qquad g&#x27;&#x27;(x)=2f(-x),
\]</div>{% endraw %}
<p>where {% raw %}<span class="math inline">\(F\)</span>{% endraw %} is the distribution function associated with {% raw %}<span class="math inline">\(f\)</span>{% endraw %}. Thus a latent kink becomes a regression with bounded curvature whenever {% raw %}<span class="math inline">\(f\)</span>{% endraw %} is bounded.</p>
<h3 data-note-section="7" id="20-0-estimation">7. Local-polynomial estimates and their conditional bias</h3>
<p>Let {% raw %}<span class="math inline">\((Y_i,T_i,X_i)_{i=1}^n\)</span>{% endraw %} be independent observations, and condition on the design {% raw %}<span class="math inline">\(\mathcal X_n=(X_1,\ldots,X_n)\)</span>{% endraw %}. Use conditional versions under which the pairs {% raw %}<span class="math inline">\((Y_i,T_i)\)</span>{% endraw %} are independent given {% raw %}<span class="math inline">\(\mathcal X_n\)</span>{% endraw %} and each pair’s conditional law is its law given {% raw %}<span class="math inline">\(X_i\)</span>{% endraw %}. Assume common conditional mean functions {% raw %}<span class="math inline">\(g\)</span>{% endraw %} and {% raw %}<span class="math inline">\(p\)</span>{% endraw %} for {% raw %}<span class="math inline">\(Y_i\)</span>{% endraw %} and {% raw %}<span class="math inline">\(T_i\)</span>{% endraw %}. More generally, an outcome {% raw %}<span class="math inline">\(V_i\)</span>{% endraw %} below has conditional mean {% raw %}<span class="math inline">\(m_V(X_i)\)</span>{% endraw %} for a common regression function {% raw %}<span class="math inline">\(m_V\)</span>{% endraw %}. These conditions hold for independent identically distributed observations.</p>
<p>Choose a polynomial degree {% raw %}<span class="math inline">\(q\ge0\)</span>{% endraw %}, a bandwidth {% raw %}<span class="math inline">\(h&gt;0\)</span>{% endraw %}, and nonnegative design weights {% raw %}<span class="math inline">\(k_i\)</span>{% endraw %} that vanish outside {% raw %}<span class="math inline">\(|X_i|\le h\)</span>{% endraw %}. These choices may depend on {% raw %}<span class="math inline">\(\mathcal X_n\)</span>{% endraw %}, but are fixed after conditioning on it; they do not depend on the outcomes. Let</p>
{% raw %}<div class="math display">\[
r_q(v)=(1,v,\ldots,v^q)^\top,\qquad v_0=(1,0,\ldots,0)^\top,
\]</div>{% endraw %}
<p>and define {% raw %}<span class="math inline">\(I_+=\{i:X_i\ge0\}\)</span>{% endraw %} and {% raw %}<span class="math inline">\(I_-=\{i:X_i&lt;0\}\)</span>{% endraw %}. For {% raw %}<span class="math inline">\(s\in\{-,+\}\)</span>{% endraw %}, put</p>
{% raw %}<div class="math display">\[
G_s=\sum_{i\in I_s}k_i r_q(X_i/h)r_q(X_i/h)^\top.
\]</div>{% endraw %}
<p>When {% raw %}<span class="math inline">\(G_s\)</span>{% endraw %} is invertible, the fitted intercept for an outcome {% raw %}<span class="math inline">\(V_i\)</span>{% endraw %} is</p>
{% raw %}<div class="math display">\[
\widehat m_{V,s}(0)=v_0^\top G_s^{-1}
                  \sum_{i\in I_s}k_i r_q(X_i/h)V_i.
\]</div>{% endraw %}
<p>The jump estimator has the linear representation</p>
{% raw %}<span id="eq:rd-linear-estimator"></span><div class="math display">\[
\widehat J_V=\widehat m_{V,+}(0)-\widehat m_{V,-}(0)
=\sum_{i=1}^n w_iV_i,

\tag{18}\]</div>{% endraw %}
<p>where</p>
{% raw %}<div class="math display">\[
a_{i,s}=\mathbf1\{i\in I_s\}k_i v_0^\top G_s^{-1}r_q(X_i/h),
\qquad w_i=a_{i,+}-a_{i,-}.
\]</div>{% endraw %}
<p>Weights on observations outside the window are zero. If either Gram matrix is singular, this estimator is undefined; the inference results below are stated for nonsingular designs.</p>
<div id="rd-polynomial-reproduction" class="lemma" data-note-number="7" data-note-kind="Lemma">
<p><strong>Lemma 7</strong>. (Rank and reproduction.) The matrix {% raw %}<span class="math inline">\(G_s\)</span>{% endraw %} is positive definite if and only if the side contains at least {% raw %}<span class="math inline">\(q+1\)</span>{% endraw %} distinct values of {% raw %}<span class="math inline">\(X_i\)</span>{% endraw %} with {% raw %}<span class="math inline">\(k_i&gt;0\)</span>{% endraw %}. For such a design,</p>
{% raw %}<span id="eq:rd-reproduction"></span><div class="math display">\[
\sum_{i\in I_s}a_{i,s}X_i^j=\mathbf1\{j=0\},\qquad j=0,\ldots,q.

\tag{19}\]</div>{% endraw %}
<p>Consequently, if the conditional regression of {% raw %}<span class="math inline">\(V\)</span>{% endraw %} is a polynomial of degree at most {% raw %}<span class="math inline">\(q\)</span>{% endraw %} on each side within the window, then {% raw %}<span class="math inline">\(\mathbb{E}[\widehat J_V\mid\mathcal X_n]=J_V\)</span>{% endraw %} for the corresponding polynomial extension at zero.</p>
</div>
<div class="proof">
<p><em>Proof.</em> For a coefficient vector {% raw %}<span class="math inline">\(b\)</span>{% endraw %},</p>
{% raw %}<div class="math display">\[
b^\top G_sb=\sum_{i\in I_s}k_i\{b^\top r_q(X_i/h)\}^2.
\]</div>{% endraw %}
<p>If there are at least {% raw %}<span class="math inline">\(q+1\)</span>{% endraw %} distinct positive-weight points, a nonzero polynomial of degree at most {% raw %}<span class="math inline">\(q\)</span>{% endraw %} cannot vanish at all of them, so the quadratic form is positive for {% raw %}<span class="math inline">\(b\ne0\)</span>{% endraw %}. If there are at most {% raw %}<span class="math inline">\(q\)</span>{% endraw %} distinct points, the product of the factors {% raw %}<span class="math inline">\(v-X_i/h\)</span>{% endraw %} over those distinct points is a nonzero polynomial of degree at most {% raw %}<span class="math inline">\(q\)</span>{% endraw %} vanishing at every point. Its coefficient vector makes the quadratic form zero. For an empty side use the constant polynomial one.</p>
<p>Next,</p>
{% raw %}<div class="math display">\[
\sum_{i\in I_s}a_{i,s}r_q(X_i/h)^\top
=v_0^\top G_s^{-1}G_s=v_0^\top.
\]</div>{% endraw %}
<p>Reading off each coordinate and multiplying by {% raw %}<span class="math inline">\(h^j\)</span>{% endraw %} proves reproduction. Integrating a side-specific polynomial against these weights retains only its intercept. Subtracting the two intercepts proves conditional unbiasedness. {% raw %}<span class="math inline">\(\square\)</span>{% endraw %}</p>
</div>
<p>For {% raw %}<span class="math inline">\(q=1\)</span>{% endraw %}, a curvature restriction gives a bias bound without assuming an exactly linear regression. Let {% raw %}<span class="math inline">\(m_V\in\mathcal F_{\mathrm{RD}}(M_V)\)</span>{% endraw %} be the regression extension used to define {% raw %}<span class="math inline">\(J_V\)</span>{% endraw %}. For either branch and a point {% raw %}<span class="math inline">\(x\)</span>{% endraw %} on that side,</p>
{% raw %}<span id="eq:rd-taylor-bound"></span><div class="math display">\[
m_{V,s}(x)=m_{V,s}(0)+xm_{V,s}&#x27;(0)+R_s(x),
\qquad |R_s(x)|\le\frac{M_Vx^2}{2}.

\tag{20}\]</div>{% endraw %}
<p>To obtain the bound, write the remainder as the oriented integral {% raw %}<span class="math inline">\(\int_0^x\{m_{V,s}&#x27;(t)-m_{V,s}&#x27;(0)\}\,dt\)</span>{% endraw %} and integrate the Lipschitz bound {% raw %}<span class="math inline">\(M_V|t|\)</span>{% endraw %}. This argument applies on the negative side as well.</p>
<p>The triangle-inequality calculation below gives a conservative bias bound. Section 2.1 of <span class="citation" data-cites="dong_when_2023">Dong and Kolesár (<a href="#ref-dong_when_2023" role="doc-biblioref">2023</a>)</span> computes the exact worst-case bias by applying the local-linear estimator to {% raw %}<span class="math inline">\(v(x)=M_Vx^2(\mathbf1\{x&lt;0\}-\mathbf1\{x\ge0\})/2\)</span>{% endraw %}. The bound below may be larger; its role here is to make the coverage argument explicit.</p>
<div id="rd-bias-variance" class="proposition" data-note-number="8" data-note-kind="Proposition">
<p><strong>Proposition 8</strong>. (Conditional bias and covariance.) For a nonsingular local-linear design, define</p>
{% raw %}<span id="eq:rd-bias-bound"></span><div class="math display">\[
B_V=\frac{M_V}{2}\sum_i|w_i|X_i^2.

\tag{21}\]</div>{% endraw %}
<p>Then {% raw %}<span class="math inline">\(|\mathbb{E}[\widehat J_V\mid\mathcal X_n]-J_V|\le B_V\)</span>{% endraw %}. For outcomes {% raw %}<span class="math inline">\(U,V\)</span>{% endraw %} with finite conditional second moments,</p>
{% raw %}<span id="eq:rd-covariance-estimators"></span><div class="math display">\[
\operatorname{Cov}(\widehat J_U,\widehat J_V\mid\mathcal X_n)
=\sum_iw_i^2\operatorname{Cov}(U_i,V_i\mid X_i),

\tag{22}\]</div>{% endraw %}
<p>when the same weights are used for both outcomes. With different weights, replace {% raw %}<span class="math inline">\(w_i^2\)</span>{% endraw %} by {% raw %}<span class="math inline">\(w_{U,i}w_{V,i}\)</span>{% endraw %}.</p>
</div>
<div class="proof">
<p><em>Proof.</em> Polynomial reproduction cancels the intercept and slope terms in the conditional bias, leaving</p>
{% raw %}<div class="math display">\[
\mathbb{E}[\widehat J_V\mid\mathcal X_n]-J_V
=\sum_{i\in I_+}a_{i,+}R_+(X_i)
 -\sum_{i\in I_-}a_{i,-}R_-(X_i).
\]</div>{% endraw %}
<p>The triangle inequality and the remainder bound give {% raw %}<span class="math inline">\(B_V\)</span>{% endraw %}, because each observation belongs to only one side. For the covariance, expand the covariance of the two weighted sums. Conditional independence makes every cross-unit covariance zero, leaving the stated within-unit sum. {% raw %}<span class="math inline">\(\square\)</span>{% endraw %}</p>
</div>
<p>The smoothness constant must bound the chosen extension throughout the distance between each used observation and zero, including any unobserved gap.</p>
<!-- RD source scope: repeated-cell-variance-estimator
An additional variance estimator and consistency result; the paper discusses Eicker-Huber-White standard errors and refers to the bias-aware inference literature for implementation.

### Variance estimation with repeated support points

Suppose the design has cells indexed by $j$, with $m_j\ge2$ independent observations at the same running-variable value. Within each cell the outcomes $V_{j\ell}$ are identically distributed, with mean $\mu_j$, variance $\sigma_j^2$, and finite fourth central moment $\kappa_j$. The design weights are constant within a cell; write this common weight as $w_j$. Define

$$
\overline V_j=\frac1{m_j}\sum_{\ell=1}^{m_j}V_{j\ell},\qquad
S_j^2=\frac1{m_j-1}\sum_{\ell=1}^{m_j}(V_{j\ell}-\overline V_j)^2.
$$

::: {.proposition #rd-replicate-variance}
(Variance estimation from repeated observations.) Conditional on the design,

$$
s_n^2=\sum_jm_jw_j^2\sigma_j^2,\qquad
\widehat s_n^2=\sum_jm_jw_j^2S_j^2
$$

satisfy $\mathbb E[\widehat s_n^2\mid\mathcal X_n]=s_n^2$. If $s_n^2>0$ and

$$
\frac{\sum_jm_j^2w_j^4\kappa_j/(m_j-1)}{s_n^4}\longrightarrow0,
\label{eq:rd-replicate-consistency}
$$

then $\widehat s_n/s_n\xrightarrow{P}1$ for the nonnegative square root $\widehat s_n$. The number of cells may change with $n$.
:::

Within each repeated-support cell, the sample variance is unbiased for its conditional variance. Independence across cells gives

$$
E[\widehat s_n^2\mid\mathcal X_n]=s_n^2,\qquad
\operatorname{Var}(\widehat s_n^2\mid\mathcal X_n)
\leq\sum_j\frac{m_j^2w_j^4\kappa_j}{m_j-1}.
$$

The assumed bound on this sum relative to $s_n^4$ yields ratio consistency by Chebyshev's inequality.

The proof is in the [appendix](#20-0-appendix-rd-replicate-variance).

For the vector $(Y,T)$, replace $S_j^2$ by its within-cell sample covariance matrix. The resulting estimated covariance matrix for the two jumps is positive semidefinite. For fixed $\theta$, its quadratic form with $(1,-\theta)$ is exactly the variance estimator above for $V=Y-\theta T$. [Proposition 12](#rd-replicate-variance) applies when $V$ satisfies the stated fourth-moment and variance conditions.
-->
<h3 data-note-section="8" id="20-0-ratio-inference">8. Ratio expansion and normal approximation</h3>
<p>Section 2.3 of <span class="citation" data-cites="dong_when_2023">Dong and Kolesár (<a href="#ref-dong_when_2023" role="doc-biblioref">2023</a>)</span> uses the delta method for a ratio of local-polynomial estimates. For the fuzzy estimator {% raw %}<span class="math inline">\(\widehat\tau_F=\widehat J_Y/\widehat J_T\)</span>{% endraw %}, put</p>
{% raw %}<div class="math display">\[
\delta_Y=\widehat J_Y-J_Y,\qquad
\delta_T=\widehat J_T-J_T,\qquad
A=\delta_Y-\tau_F\delta_T.
\]</div>{% endraw %}
<p>Whenever {% raw %}<span class="math inline">\(\widehat J_T\ne0\)</span>{% endraw %}, direct subtraction gives the exact identity</p>
{% raw %}<span id="eq:rd-ratio-exact"></span><div class="math display">\[
\widehat\tau_F-\tau_F
=\frac{A}{J_T+\delta_T}
=\frac{A}{J_T}
 -\frac{A\delta_T}{J_T(J_T+\delta_T)}.

\tag{23}\]</div>{% endraw %}
<p>On the event {% raw %}<span class="math inline">\(|\delta_T|\le J_T/2\)</span>{% endraw %}, the absolute value of the last term is at most {% raw %}<span class="math inline">\(2|A\delta_T|/J_T^2\)</span>{% endraw %}. The remainder is small relative to the linear term when {% raw %}<span class="math inline">\(|\delta_T|/J_T\)</span>{% endraw %} is small.</p>
<div id="rd-ratio-clt" class="proposition" data-note-number="9" data-note-kind="Proposition">
<p><strong>Proposition 9</strong>. (A fixed positive first stage.) Let {% raw %}<span class="math inline">\(J_T&gt;0\)</span>{% endraw %} be fixed, {% raw %}<span class="math inline">\(J_Y=\tau_FJ_T\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(r_n\to\infty\)</span>{% endraw %}. Suppose, for vectors {% raw %}<span class="math inline">\(b_n\in\mathbb R^2\)</span>{% endraw %},</p>
{% raw %}<div class="math display">\[
r_n\left\{\begin{pmatrix}\delta_Y\\\delta_T\end{pmatrix}-b_n\right\}
\Rightarrow\mathcal{N}(0,\Omega),\qquad r_nb_n\longrightarrow b,
\]</div>{% endraw %}
<p>where {% raw %}<span class="math inline">\(\Omega\)</span>{% endraw %} is a finite positive semidefinite matrix. Then</p>
{% raw %}<span id="eq:rd-ratio-limit"></span><div class="math display">\[
r_n(\widehat\tau_F-\tau_F)
\Rightarrow\mathcal{N}\left(
\frac{(1,-\tau_F)b}{J_T},
\frac{\Omega_{YY}-2\tau_F\Omega_{YT}+\tau_F^2\Omega_{TT}}{J_T^2}
\right).

\tag{24}\]</div>{% endraw %}
<p>The estimator may be assigned any finite value on the event {% raw %}<span class="math inline">\(\widehat J_T=0\)</span>{% endraw %}, whose probability tends to zero under these assumptions.</p>
</div>
<div class="proof">
<p><em>Proof.</em> The joint convergence and {% raw %}<span class="math inline">\(r_nb_n\to b\)</span>{% endraw %} imply {% raw %}<span class="math inline">\((\delta_Y,\delta_T)=O_{\mathbb P}(r_n^{-1})\)</span>{% endraw %}, so {% raw %}<span class="math inline">\(\widehat J_T\xrightarrow{P}J_T&gt;0\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\mathbb P(|\delta_T|\le J_T/2)\to1\)</span>{% endraw %}. On this event the exact remainder, multiplied by {% raw %}<span class="math inline">\(r_n\)</span>{% endraw %}, is {% raw %}<span class="math inline">\(O_{\mathbb P}(r_n^{-1})=o_{\mathbb P}(1)\)</span>{% endraw %}. The first term in the expansion is the linear combination {% raw %}<span class="math inline">\(A/J_T\)</span>{% endraw %}. Applying the assumed joint limit to that linear combination gives its mean and variance, and Slutsky’s theorem removes the remainder. Finally, {% raw %}<span class="math inline">\(\{\widehat J_T=0\}\subseteq\{|\delta_T|&gt;J_T/2\}\)</span>{% endraw %}, so the exceptional-event definition does not affect the limit. {% raw %}<span class="math inline">\(\square\)</span>{% endraw %}</p>
</div>
<p>The covariance {% raw %}<span class="math inline">\(\Omega_{YT}\)</span>{% endraw %} is present because both jumps use the same observations. When {% raw %}<span class="math inline">\(b\ne0\)</span>{% endraw %}, an interval centered at the uncorrected ratio and using only its variance need not have the nominal coverage. The factor {% raw %}<span class="math inline">\(J_T^{-2}\)</span>{% endraw %} in the remainder bound explains the sensitivity to a small first stage, as in <a href="{% post_url 2024-09-07-weak-instruments-and-the-tf-critical-value %}">weak-instrument inference</a>.</p>
<p>A higher-moment condition gives a conditional normal approximation for the scalar jump estimator.</p>
<div id="rd-weighted-clt" class="lemma" data-note-number="10" data-note-kind="Lemma">
<p><strong>Lemma 10</strong>. (A weighted central limit theorem.) Conditional on a fixed design sequence, let {% raw %}<span class="math inline">\(\varepsilon_{n,i}=V_{n,i}-\mathbb{E}[V_{n,i}\mid\mathcal X_n]\)</span>{% endraw %} be independent, mean zero, and have finite {% raw %}<span class="math inline">\((2+\eta)\)</span>{% endraw %}th moments for some {% raw %}<span class="math inline">\(\eta&gt;0\)</span>{% endraw %}. Write</p>
{% raw %}<div class="math display">\[
s_n^2=\sum_iw_{n,i}^2\mathbb{E}[\varepsilon_{n,i}^2\mid\mathcal X_n]&gt;0.
\]</div>{% endraw %}
<p>If</p>
{% raw %}<span id="eq:rd-lyapunov"></span><div class="math display">\[
\frac{\sum_i|w_{n,i}|^{2+\eta}
\mathbb{E}[|\varepsilon_{n,i}|^{2+\eta}\mid\mathcal X_n]}{s_n^{2+\eta}}
\longrightarrow0,

\tag{25}\]</div>{% endraw %}
<p>then, with {% raw %}<span class="math inline">\(Z_n=\sum_iw_{n,i}\varepsilon_{n,i}/s_n\)</span>{% endraw %},</p>
{% raw %}<span id="eq:rd-kolmogorov"></span><div class="math display">\[
\sup_{z\in\mathbb R}|\mathbb P(Z_n\le z\mid\mathcal X_n)-\Phi(z)|\longrightarrow0.

\tag{26}\]</div>{% endraw %}
</div>
<p>For every fixed {% raw %}<span class="math inline">\(\epsilon&gt;0\)</span>{% endraw %}, the conditional Lindeberg sum is bounded by {% raw %}<span class="math inline">\(\epsilon^{-\eta}\)</span>{% endraw %} times the stated Lyapunov ratio. It therefore vanishes. The Lindeberg–Feller theorem gives the normal limit, and monotonicity of distribution functions upgrades convergence to the continuous normal cdf to uniform convergence.</p>
<p>The proof is in the <a href="#20-0-appendix-rd-weighted-clt">appendix</a>.</p>
<p>The <a href="{% post_url 2022-03-25-central-limit-theorems-and-worked-examples %}">central limit theorem note</a> gives the underlying triangular-array theorem. For a joint jump limit, apply the scalar argument to every fixed linear combination of the centered outcomes and use the Cramér–Wold theorem.</p>
<!-- RD source scope: undersmoothing-rate
This separate undersmoothing rate calculation is not part of the paper's bias-aware construction.

As one rate calculation, suppose a local-linear design has $\sum_i|w_i|=O(1)$, variance of order $(nh)^{-1}$, and $nh\to\infty$. Since used observations satisfy $|X_i|\le h$, the bias bound is $O(h^2)$. Its ratio to the standard deviation is therefore $O(\sqrt{nh}\,h^2)$. The condition $nh^5\to0$ makes the bias-to-standard-deviation bound negligible.
-->
<h3 data-note-section="9" id="20-0-bias-aware-inference">9. Confidence intervals with a bound on bias</h3>
<p>Equation (4) of <span class="citation" data-cites="dong_when_2023">Dong and Kolesár (<a href="#ref-dong_when_2023" role="doc-biblioref">2023</a>)</span> accounts for conditional bias through a folded-normal critical value. The following calculations establish coverage and justify replacing the standard deviation by a consistent estimate. Fix {% raw %}<span class="math inline">\(0&lt;\alpha&lt;1/2\)</span>{% endraw %}, and let {% raw %}<span class="math inline">\(z_p=\Phi^{-1}(p)\)</span>{% endraw %}. For {% raw %}<span class="math inline">\(r\ge0\)</span>{% endraw %}, define {% raw %}<span class="math inline">\(c_\alpha(r)\)</span>{% endraw %} by</p>
{% raw %}<span id="eq:rd-critical-value"></span><div class="math display">\[
\Phi(c_\alpha(r)-r)-\Phi(-c_\alpha(r)-r)=1-\alpha.

\tag{27}\]</div>{% endraw %}
<p>Equivalently, {% raw %}<span class="math inline">\(c_\alpha(r)\)</span>{% endraw %} is the {% raw %}<span class="math inline">\((1-\alpha)\)</span>{% endraw %} quantile of {% raw %}<span class="math inline">\(|N+r|\)</span>{% endraw %} for {% raw %}<span class="math inline">\(N\sim\mathcal{N}(0,1)\)</span>{% endraw %}. The left side is continuous and strictly increasing from zero to one as the critical value increases from zero to infinity, so the solution exists and is unique.</p>
<div id="rd-critical-radius" class="lemma" data-note-number="11" data-note-kind="Lemma">
<p><strong>Lemma 11</strong>. (Coverage and stability of the critical radius.) For fixed numbers {% raw %}<span class="math inline">\(s&gt;0\)</span>{% endraw %} and {% raw %}<span class="math inline">\(B\ge0\)</span>{% endraw %}, define</p>
{% raw %}<div class="math display">\[
R_\alpha(s,B)=s\,c_\alpha(B/s).
\]</div>{% endraw %}
<p>If {% raw %}<span class="math inline">\(\widehat J-J=\beta+sN\)</span>{% endraw %} with {% raw %}<span class="math inline">\(N\sim\mathcal{N}(0,1)\)</span>{% endraw %} and a fixed bias {% raw %}<span class="math inline">\(\beta\)</span>{% endraw %} satisfying {% raw %}<span class="math inline">\(|\beta|\le B\)</span>{% endraw %}, then</p>
{% raw %}<span id="eq:rd-gaussian-coverage"></span><div class="math display">\[
\mathbb P\{|\widehat J-J|\le R_\alpha(s,B)\}\ge1-\alpha.

\tag{28}\]</div>{% endraw %}
<p>The radius also satisfies</p>
{% raw %}<span id="eq:rd-radius-bounds"></span><div class="math display">\[
B+z_{1-\alpha}s\le R_\alpha(s,B)\le B+z_{1-\alpha/2}s,

\tag{29}\]</div>{% endraw %}
<p>and, for fixed {% raw %}<span class="math inline">\(B\)</span>{% endraw %}, {% raw %}<span class="math inline">\(R_\alpha(s,B)\)</span>{% endraw %} is Lipschitz in {% raw %}<span class="math inline">\(s&gt;0\)</span>{% endraw %} with a constant no larger than {% raw %}<span class="math inline">\(z_{1-\alpha/2}+\exp(-1/2)\)</span>{% endraw %}, uniformly in {% raw %}<span class="math inline">\(B\)</span>{% endraw %}.</p>
</div>
<p>For a fixed radius, normal coverage decreases with the absolute standardized bias, so the least favorable bias is {% raw %}<span class="math inline">\(|\beta|=B\)</span>{% endraw %}. Implicit differentiation of the critical-value equation gives</p>
{% raw %}<div class="math display">\[
c_\alpha&#x27;(r)=\tanh\{r c_\alpha(r)\},
\qquad
\partial_sR_\alpha(s,B)=c_\alpha(r)-r c_\alpha&#x27;(r),\quad r=B/s.
\]</div>{% endraw %}
<p>The radius bounds imply {% raw %}<span class="math inline">\(c_\alpha(r)\geq r\)</span>{% endraw %}. Hence the second expression is bounded above by {% raw %}<span class="math inline">\(z_{1-\alpha/2}+e^{-1/2}\)</span>{% endraw %}, uniformly in {% raw %}<span class="math inline">\(B\)</span>{% endraw %}.</p>
<p>The proof is in the <a href="#20-0-appendix-rd-critical-radius">appendix</a>.</p>
<p>The Lipschitz bound controls the change in the interval’s radius when {% raw %}<span class="math inline">\(s\)</span>{% endraw %} is replaced by an estimate, even when {% raw %}<span class="math inline">\(B/s\)</span>{% endraw %} grows.</p>
<div id="rd-feasible-coverage" class="theorem" data-note-number="12" data-note-kind="Theorem">
<p><strong>Theorem 12</strong>. (Confidence interval with an estimated standard error.) Conditional on a fixed sequence of nonsingular designs, let {% raw %}<span class="math inline">\(J_n\)</span>{% endraw %} denote the regression jump to be estimated, {% raw %}<span class="math inline">\(\beta_n=\mathbb{E}[\widehat J_n\mid\mathcal X_n]-J_n\)</span>{% endraw %} its conditional bias, and {% raw %}<span class="math inline">\(s_n^2=\operatorname{Var}(\widehat J_n\mid\mathcal X_n)&gt;0\)</span>{% endraw %}. Let {% raw %}<span class="math inline">\(B_n\)</span>{% endraw %} be a finite nonnegative bound depending only on the design, with {% raw %}<span class="math inline">\(|\beta_n|\le B_n\)</span>{% endraw %}. Thus {% raw %}<span class="math inline">\(J_n,\beta_n,s_n,B_n\)</span>{% endraw %} are fixed after conditioning on {% raw %}<span class="math inline">\(\mathcal X_n\)</span>{% endraw %}. Define {% raw %}<span class="math inline">\(Z_n\)</span>{% endraw %} by</p>
{% raw %}<div class="math display">\[
\widehat J_n-J_n=\beta_n+s_nZ_n.
\]</div>{% endraw %}
<p>Suppose the distribution functions of {% raw %}<span class="math inline">\(Z_n\)</span>{% endraw %} converge uniformly to {% raw %}<span class="math inline">\(\Phi\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(\widehat s_n/s_n\xrightarrow{P}1\)</span>{% endraw %} with {% raw %}<span class="math inline">\(\widehat s_n&gt;0\)</span>{% endraw %} with probability tending to one. Then</p>
{% raw %}<span id="eq:rd-feasible-coverage"></span><div class="math display">\[
\liminf_{n\to\infty}
\mathbb P\{J_n\in[\widehat J_n-R_\alpha(\widehat s_n,B_n),
                   \widehat J_n+R_\alpha(\widehat s_n,B_n)]
                   \mid\mathcal X_n\}
\ge1-\alpha.

\tag{30}\]</div>{% endraw %}
<p>If {% raw %}<span class="math inline">\(\widehat s_n\le0\)</span>{% endraw %}, take the confidence set to be {% raw %}<span class="math inline">\(\mathbb R\)</span>{% endraw %}.</p>
</div>
<p>The radius changes by a negligible amount relative to {% raw %}<span class="math inline">\(s_n\)</span>{% endraw %}:</p>
{% raw %}<div class="math display">\[
\frac{|R_\alpha(\widehat s_n,B_n)-R_\alpha(s_n,B_n)|}{s_n}
\leq(z_{1-\alpha/2}+e^{-1/2})
\left|\frac{\widehat s_n}{s_n}-1\right|\xrightarrow{P}0.
\]</div>{% endraw %}
<p>Uniform normal approximation controls the probability of every deterministic interval, including intervals whose endpoints depend on {% raw %}<span class="math inline">\(B_n/s_n\)</span>{% endraw %}. Reducing the ideal radius by {% raw %}<span class="math inline">\(o_P(s_n)\)</span>{% endraw %} then changes coverage by {% raw %}<span class="math inline">\(o(1)\)</span>{% endraw %}.</p>
<p>The proof is in the <a href="#20-0-appendix-rd-feasible-coverage">appendix</a>.</p>
<p>For a random design, assume that the conditional normal-approximation error tends to zero in probability and that, for every {% raw %}<span class="math inline">\(\delta&gt;0\)</span>{% endraw %}, {% raw %}<span class="math inline">\(\mathbb P(|\widehat s_n/s_n-1|&gt;\delta\mid\mathcal X_n)\xrightarrow{P}0\)</span>{% endraw %}. Also assume that the design is nonsingular with probability tending to one. Both conditional errors are bounded by one, so their expectations tend to zero. Taking expectations of the conditional coverage bound then gives the same unconditional coverage.</p>
<p>For a local-linear jump use {% raw %}<span class="math inline">\(B_n=M_V\sum_i|w_i|X_i^2/2\)</span>{% endraw %}. When {% raw %}<span class="math inline">\(s_n\to0\)</span>{% endraw %} but {% raw %}<span class="math inline">\(B_n\to B&gt;0\)</span>{% endraw %}, the radius bounds imply {% raw %}<span class="math inline">\(R_\alpha(s_n,B_n)\to B\)</span>{% endraw %}.</p>
<h3 data-note-section="10" id="20-0-fuzzy-confidence-sets">10. Fuzzy confidence sets by test inversion</h3>
<p>Section 2.3 of <span class="citation" data-cites="dong_when_2023">Dong and Kolesár (<a href="#ref-dong_when_2023" role="doc-biblioref">2023</a>)</span> constructs the fuzzy confidence set by inverting a test for the jump in a transformed outcome. To test {% raw %}<span class="math inline">\(H_0:\tau_F=\theta\)</span>{% endraw %}, define</p>
{% raw %}<div class="math display">\[
V_i(\theta)=Y_i-\theta T_i.
\]</div>{% endraw %}
<p>The conditional mean of {% raw %}<span class="math inline">\(V_i(\theta)\)</span>{% endraw %} is {% raw %}<span class="math inline">\(m_\theta(x)=g(x)-\theta p(x)\)</span>{% endraw %}, with jump</p>
{% raw %}<div class="math display">\[
J_\theta=J_Y-\theta J_T.
\]</div>{% endraw %}
<p>Under {% raw %}<span class="math inline">\(H_0\)</span>{% endraw %}, this jump is zero. Since {% raw %}<span class="math inline">\(J_T&gt;0\)</span>{% endraw %}, the converse also holds: {% raw %}<span class="math inline">\(J_\theta=0\)</span>{% endraw %} implies {% raw %}<span class="math inline">\(\tau_F=\theta\)</span>{% endraw %}. We therefore test {% raw %}<span class="math inline">\(H_0\)</span>{% endraw %} using an estimate of {% raw %}<span class="math inline">\(J_\theta\)</span>{% endraw %}.</p>
<div id="rd-test-inversion" class="proposition" data-note-number="13" data-note-kind="Proposition">
<p><strong>Proposition 13</strong>. (Fuzzy confidence set.) Suppose the observed outcome and treatment regressions have extensions {% raw %}<span class="math inline">\(g\in\mathcal F_{\mathrm{RD}}(M_Y)\)</span>{% endraw %} and {% raw %}<span class="math inline">\(p\in\mathcal F_{\mathrm{RD}}(M_T)\)</span>{% endraw %}. Let their jumps satisfy {% raw %}<span class="math inline">\(J_T&gt;0\)</span>{% endraw %}, and put {% raw %}<span class="math inline">\(\tau_F=J_Y/J_T\)</span>{% endraw %}. Use the same local-linear weights for their jump estimates and put</p>
{% raw %}<span id="eq:rd-transformed-bias"></span><div class="math display">\[
D_n=\frac12\sum_i|w_i|X_i^2,\qquad
B_\theta=(M_Y+|\theta|M_T)D_n.

\tag{31}\]</div>{% endraw %}
<p>Let {% raw %}<span class="math inline">\(\widehat s_\theta\)</span>{% endraw %} estimate the conditional standard deviation of {% raw %}<span class="math inline">\(\widehat J_Y-\theta\widehat J_T\)</span>{% endraw %}. Assume that {% raw %}<span class="math inline">\(\tau_F\)</span>{% endraw %} is finite and that {% raw %}<span class="math inline">\(\widehat J_Y-\tau_F\widehat J_T\)</span>{% endraw %} satisfies the assumptions of <a href="#rd-feasible-coverage">Theorem 12</a>, with bias bound {% raw %}<span class="math inline">\(B_{\tau_F}\)</span>{% endraw %} and conditional standard deviation {% raw %}<span class="math inline">\(s_{\tau_F}&gt;0\)</span>{% endraw %}. Then</p>
{% raw %}<span id="eq:rd-confidence-set"></span><div class="math display">\[
\mathcal C_{1-\alpha}
=\{\theta\in\mathbb R:
 |\widehat J_Y-\theta\widehat J_T|
 \le R_\alpha(\widehat s_\theta,B_\theta)\}

\tag{32}\]</div>{% endraw %}
<p>has limiting coverage at least {% raw %}<span class="math inline">\(1-\alpha\)</span>{% endraw %} for {% raw %}<span class="math inline">\(\tau_F\)</span>{% endraw %}. If {% raw %}<span class="math inline">\(\widehat s_\theta\le0\)</span>{% endraw %}, include {% raw %}<span class="math inline">\(\theta\)</span>{% endraw %} in {% raw %}<span class="math inline">\(\mathcal C_{1-\alpha}\)</span>{% endraw %}.</p>
</div>
<div class="proof">
<p><em>Proof.</em> For either side of the cutoff and two points {% raw %}<span class="math inline">\(x,y\)</span>{% endraw %} on that side,</p>
{% raw %}<div class="math display">\[
\begin{aligned}
|m_\theta&#x27;(x)-m_\theta&#x27;(y)|
&amp;\le |g&#x27;(x)-g&#x27;(y)|+|\theta|\,|p&#x27;(x)-p&#x27;(y)|\\
&amp;\le(M_Y+|\theta|M_T)|x-y|.
\end{aligned}
\]</div>{% endraw %}
<p>Thus {% raw %}<span class="math inline">\(m_\theta\in\mathcal F_{\mathrm{RD}}(M_Y+|\theta|M_T)\)</span>{% endraw %}. Linearity of the estimator gives</p>
{% raw %}<div class="math display">\[
\widehat J_{V(\theta)}=\sum_iw_i(Y_i-\theta T_i)
=\widehat J_Y-\theta\widehat J_T.
\]</div>{% endraw %}
<p><a href="#rd-bias-variance">Proposition 8</a> bounds the conditional bias of {% raw %}<span class="math inline">\(\widehat J_{V(\theta)}\)</span>{% endraw %} by {% raw %}<span class="math inline">\(B_\theta\)</span>{% endraw %}. At {% raw %}<span class="math inline">\(\theta=\tau_F\)</span>{% endraw %}, {% raw %}<span class="math inline">\(J_\theta=0\)</span>{% endraw %}. <a href="#rd-feasible-coverage">Theorem 12</a> therefore gives limiting coverage of at least {% raw %}<span class="math inline">\(1-\alpha\)</span>{% endraw %} for zero in the interval centered at {% raw %}<span class="math inline">\(\widehat J_Y-\tau_F\widehat J_T\)</span>{% endraw %}. This event is exactly {% raw %}<span class="math inline">\(\{\tau_F\in\mathcal C_{1-\alpha}\}\)</span>{% endraw %}. {% raw %}<span class="math inline">\(\square\)</span>{% endraw %}</p>
</div>
<p>With a common set of weights the conditional variance is</p>
{% raw %}<div class="math display">\[
\begin{aligned}
s_\theta^2
&amp;=\sum_iw_i^2\operatorname{Var}(Y_i-\theta T_i\mid X_i)\\
&amp;=s_Y^2-2\theta s_{YT}+\theta^2s_T^2,
\end{aligned}
\]</div>{% endraw %}
<p>where {% raw %}<span class="math inline">\(s_{YT}=\sum_iw_i^2\operatorname{Cov}(Y_i,T_i\mid X_i)\)</span>{% endraw %}. Use one covariance estimator for the pair {% raw %}<span class="math inline">\((\widehat J_Y,\widehat J_T)\)</span>{% endraw %}. A positive semidefinite estimate gives {% raw %}<span class="math inline">\(\widehat s_\theta^2\ge0\)</span>{% endraw %} for every {% raw %}<span class="math inline">\(\theta\)</span>{% endraw %}.</p>
<!-- RD source scope: fieller-two-rays-example
The zero-bias Fieller example is an additional special-case calculation. The transformed-outcome test and its coverage proof remain visible.

The confidence set can be disconnected or unbounded. For example, when both bias bounds are zero, $s_{YT}=0$, $s_Y,s_T>0$, and the standard errors are treated as known, a value $\theta$ belongs to the confidence set if and only if

$$
(\widehat J_Y-\theta\widehat J_T)^2
\le z_{1-\alpha/2}^2(s_Y^2+\theta^2s_T^2).
$$

After collecting powers of $\theta$, this becomes

$$
(\widehat J_T^2-z_{1-\alpha/2}^2s_T^2)\theta^2
-2\widehat J_Y\widehat J_T\theta
+(\widehat J_Y^2-z_{1-\alpha/2}^2s_Y^2)\le0.
$$

If $\widehat J_T=0$ and $|\widehat J_Y|>z_{1-\alpha/2}s_Y$, the confidence set consists of two rays:

$$
|\theta|\ge
\frac{\sqrt{\widehat J_Y^2-z_{1-\alpha/2}^2s_Y^2}}
     {z_{1-\alpha/2}s_T}.
$$

If $\widehat J_T=0$ and $|\widehat J_Y|\le z_{1-\alpha/2}s_Y$, the confidence set is $\mathbb R$.
-->
<p>If the population first stage itself is zero, the complier ratio is undefined. The same test applies to {% raw %}<span class="math inline">\(H_0:J_Y-\theta J_T=0\)</span>{% endraw %}.</p>
<!-- RD source scope: support-gap-proof
Proof of the additional sharp support-gap result commented out in the body.

## Appendix: sharpness across a support gap {#appendix-gap}

::: {.proof}
For $|b_+|,|b_-|\leq Ma^2/2$, the two constructed derivatives are

$$
f_+'(x)=-\frac{2b_+}{a}(1-x/a)_+,\qquad
f_-'(x)=\frac{2b_-}{a}(1+x/a)_+.
$$

Since $|v_+-w_+|\leq|v-w|$, their Lipschitz constants are at most $2|b_\pm|/a^2\leq M$. The derivatives agree with zero at $a$ and $-a$, respectively. Thus the function belongs to $\mathcal F_{\mathrm{RD}}(M)$ and reproduces the zero regression on every support contained in the two intervals.

Set $T=1\{X\geq0\}$, $X^*=X$, and define potential outcomes on the whole support by

$$
Y(0)=b_-(1+X/a)_+^2,\qquad
Y(1)=b_+(1-X/a)_+^2.
$$

The displayed functions specify continuous conditional-mean extensions through zero. Under consistency, observed outcomes vanish: the control branch is zero for $X\leq-a$ and the treated branch is zero for $X\geq a$. Their effect at zero is $b_+-b_-$, which ranges over the entire stated interval.

When the support equals the two full intervals, any continuous branch equal to zero almost surely must be zero throughout its observed interval. Otherwise continuity would give a neighborhood with nonzero values and positive probability by the definition of support. Its derivative is zero on the interval interior and at the adjacent endpoint by continuity. The integral bounds in the body then apply to every feasible extension, proving the reverse inclusion.
:::
-->
<!-- RD source scope: repeated-cell-variance-proof
Proof of the additional repeated-cell variance estimator commented out in the body.

## Appendix: Variance estimation with repeated support points {#appendix-rd-replicate-variance}

::: {.proof}
*Proof.* Work within one cell and suppress its index. Put $\varepsilon_\ell=V_\ell-\mu$, $A=\sum_\ell\varepsilon_\ell^2$, and $B=m\overline\varepsilon^{\,2}$. Then $S^2=(A-B)/(m-1)$. Independence and zero means give $\mathbb EA=m\sigma^2$ and $\mathbb EB=\sigma^2$, proving unbiasedness. Expansion of the products gives

$$
\begin{aligned}
\mathbb E A^2&=m\kappa+m(m-1)\sigma^4,\\
\mathbb E AB&=\kappa+(m-1)\sigma^4,\\
\mathbb E B^2&=\frac{\kappa}{m}+\frac{3(m-1)}m\sigma^4.
\end{aligned}
$$

In the last line, the fourth moment of $\sum_\ell\varepsilon_\ell$ contains the $m$ individual fourth moments and $6\binom m2$ products of two second moments; all other terms have a factor with mean zero. In the middle line, every off-diagonal term from $B$ likewise has a factor with mean zero. Substituting the three expressions and subtracting $(\mathbb ES^2)^2=\sigma^4$ gives

$$
\operatorname{Var}(S^2)
=\frac1m\left(\kappa-\frac{m-3}{m-1}\sigma^4\right)
\le\frac{\kappa}{m-1}.
$$

For $m\ge3$ the inequality follows by discarding the nonnegative subtracted term and using $1/m\le1/(m-1)$. For $m=2$, use $\sigma^4\le\kappa$, which is Cauchy--Schwarz applied to $\varepsilon^2$.

Cells are independent, so the variance of $\widehat s_n^2$ is at most $\sum_jm_j^2w_j^4\kappa_j/(m_j-1)$. Divide by $s_n^4$ and apply Chebyshev's inequality to obtain $\widehat s_n^2/s_n^2\xrightarrow{P}1$. Taking square roots gives $\widehat s_n/s_n\xrightarrow{P}1$. $\square$
:::
-->
<h3 data-note-section="11" id="20-0-appendix-rd-weighted-clt">11. Appendix: The weighted central limit theorem</h3>
<div class="proof">
<p><em>Proof.</em> Set {% raw %}<span class="math inline">\(\xi_{n,i}=w_{n,i}\varepsilon_{n,i}/s_n\)</span>{% endraw %}. The variances sum to one. For every {% raw %}<span class="math inline">\(a&gt;0\)</span>{% endraw %},</p>
{% raw %}<div class="math display">\[
\sum_i\mathbb{E}[\xi_{n,i}^2\mathbf1\{|\xi_{n,i}|&gt;a\}\mid\mathcal X_n]
\le a^{-\eta}\sum_i\mathbb{E}[|\xi_{n,i}|^{2+\eta}\mid\mathcal X_n]
\longrightarrow0.
\]</div>{% endraw %}
<p>Thus the Lindeberg condition holds, and the Lindeberg–Feller central limit theorem gives {% raw %}<span class="math inline">\(Z_n\Rightarrow\mathcal{N}(0,1)\)</span>{% endraw %}. Write {% raw %}<span class="math inline">\(F_n\)</span>{% endraw %} for the conditional distribution function. Fix {% raw %}<span class="math inline">\(\epsilon&gt;0\)</span>{% endraw %}. Choose a finite grid {% raw %}<span class="math inline">\(z_0&lt;\cdots&lt;z_K\)</span>{% endraw %} with {% raw %}<span class="math inline">\(\Phi(z_0)&lt;\epsilon\)</span>{% endraw %}, {% raw %}<span class="math inline">\(1-\Phi(z_K)&lt;\epsilon\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(\Phi(z_{k+1})-\Phi(z_k)&lt;\epsilon\)</span>{% endraw %}. Such a grid exists by continuity of {% raw %}<span class="math inline">\(\Phi\)</span>{% endraw %} on the compact interval between the two tail points. Put {% raw %}<span class="math inline">\(d_n=\max_{0\le k\le K}|F_n(z_k)-\Phi(z_k)|\)</span>{% endraw %}; convergence at the finitely many grid points gives {% raw %}<span class="math inline">\(d_n\to0\)</span>{% endraw %}. For {% raw %}<span class="math inline">\(z_k\le z\le z_{k+1}\)</span>{% endraw %}, monotonicity gives</p>
{% raw %}<div class="math display">\[
\begin{aligned}
F_n(z)-\Phi(z)
&amp;\le F_n(z_{k+1})-\Phi(z_k)\le d_n+\epsilon,\\
\Phi(z)-F_n(z)
&amp;\le\Phi(z_{k+1})-F_n(z_k)\le d_n+\epsilon.
\end{aligned}
\]</div>{% endraw %}
<p>If {% raw %}<span class="math inline">\(z&lt;z_0\)</span>{% endraw %}, both distribution functions lie between zero and {% raw %}<span class="math inline">\(\epsilon+d_n\)</span>{% endraw %}; if {% raw %}<span class="math inline">\(z&gt;z_K\)</span>{% endraw %}, both lie between {% raw %}<span class="math inline">\(1-\epsilon-d_n\)</span>{% endraw %} and one. Hence {% raw %}<span class="math inline">\(\sup_z|F_n(z)-\Phi(z)|\le\epsilon+d_n\)</span>{% endraw %}. Letting {% raw %}<span class="math inline">\(n\to\infty\)</span>{% endraw %} and then {% raw %}<span class="math inline">\(\epsilon\downarrow0\)</span>{% endraw %} gives {% raw %}<span class="math inline">\(\sup_z|F_n(z)-\Phi(z)|\to0\)</span>{% endraw %}. {% raw %}<span class="math inline">\(\square\)</span>{% endraw %}</p>
</div>
<h3 data-note-section="12" id="20-0-appendix-rd-critical-radius">12. Appendix: Coverage and stability of the critical radius</h3>
<div class="proof">
<p><em>Proof.</em> For {% raw %}<span class="math inline">\(c&gt;0\)</span>{% endraw %}, the probability {% raw %}<span class="math inline">\(\mathbb P(|N+r|\le c)=\Phi(c-r)-\Phi(-c-r)\)</span>{% endraw %} is even in {% raw %}<span class="math inline">\(r\)</span>{% endraw %}. Its derivative for {% raw %}<span class="math inline">\(r\ge0\)</span>{% endraw %} is {% raw %}<span class="math inline">\(-\phi(c-r)+\phi(c+r)\le0\)</span>{% endraw %}, because {% raw %}<span class="math inline">\(|c-r|\le c+r\)</span>{% endraw %} and the standard normal density {% raw %}<span class="math inline">\(\phi\)</span>{% endraw %} decreases with absolute value. Thus the smallest coverage over {% raw %}<span class="math inline">\(|\beta|/s\le B/s\)</span>{% endraw %} occurs at {% raw %}<span class="math inline">\(|\beta|/s=B/s\)</span>{% endraw %}. The definition of {% raw %}<span class="math inline">\(c_\alpha\)</span>{% endraw %} gives the coverage bound.</p>
<p>The defining probability is at most {% raw %}<span class="math inline">\(\Phi(c-r)\)</span>{% endraw %}, so {% raw %}<span class="math inline">\(c_\alpha(r)\ge r+z_{1-\alpha}\)</span>{% endraw %}. Conversely, {% raw %}<span class="math inline">\(|N+r|\le |N|+r\)</span>{% endraw %}, which gives {% raw %}<span class="math inline">\(c_\alpha(r)\le r+z_{1-\alpha/2}\)</span>{% endraw %}. Multiplication by {% raw %}<span class="math inline">\(s\)</span>{% endraw %} proves the radius bounds.</p>
<p>For stability, implicit differentiation of the defining equation yields</p>
{% raw %}<div class="math display">\[
c_\alpha&#x27;(r)=
\frac{\phi(c-r)-\phi(c+r)}{\phi(c-r)+\phi(c+r)}
=\tanh(cr),\qquad c=c_\alpha(r).
\]</div>{% endraw %}
<p>The last equality follows from {% raw %}<span class="math inline">\(\phi(c+r)/\phi(c-r)=\exp(-2cr)\)</span>{% endraw %}. With {% raw %}<span class="math inline">\(r=B/s\)</span>{% endraw %},</p>
{% raw %}<div class="math display">\[
\frac{\partial R_\alpha(s,B)}{\partial s}
=c-rc_\alpha&#x27;(r)
=(c-r)+r\{1-\tanh(cr)\}.
\]</div>{% endraw %}
<p>The first term lies between {% raw %}<span class="math inline">\(z_{1-\alpha}\)</span>{% endraw %} and {% raw %}<span class="math inline">\(z_{1-\alpha/2}\)</span>{% endraw %}. Since {% raw %}<span class="math inline">\(\alpha&lt;1/2\)</span>{% endraw %}, the lower bound on {% raw %}<span class="math inline">\(c\)</span>{% endraw %} implies {% raw %}<span class="math inline">\(c\ge r\)</span>{% endraw %}. Therefore</p>
{% raw %}<div class="math display">\[
0\le r\{1-\tanh(cr)\}
\le2r\exp(-2cr)
\le2r\exp(-2r^2)\le \exp(-1/2).
\]</div>{% endraw %}
<p>The last inequality follows by maximizing the function over {% raw %}<span class="math inline">\(r\ge0\)</span>{% endraw %}, whose maximum occurs at {% raw %}<span class="math inline">\(r=1/2\)</span>{% endraw %}. The derivative of {% raw %}<span class="math inline">\(R_\alpha\)</span>{% endraw %} is consequently bounded by the stated constant, independently of {% raw %}<span class="math inline">\(B\)</span>{% endraw %}. The mean value theorem proves the Lipschitz bound. At {% raw %}<span class="math inline">\(B=0\)</span>{% endraw %}, the radius is {% raw %}<span class="math inline">\(z_{1-\alpha/2}s\)</span>{% endraw %}, so the same bound holds. {% raw %}<span class="math inline">\(\square\)</span>{% endraw %}</p>
</div>
<h3 data-note-section="13" id="20-0-appendix-rd-feasible-coverage">13. Appendix: Coverage with an estimated standard error</h3>
<div class="proof">
<p><em>Proof.</em> Write {% raw %}<span class="math inline">\(r_n=B_n/s_n\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\mu_n=\beta_n/s_n\)</span>{% endraw %}. Let {% raw %}<span class="math inline">\(F_n\)</span>{% endraw %} be the conditional distribution function of {% raw %}<span class="math inline">\(Z_n\)</span>{% endraw %} and put {% raw %}<span class="math inline">\(\epsilon_n=\sup_z|F_n(z)-\Phi(z)|\)</span>{% endraw %}. For any fixed endpoints {% raw %}<span class="math inline">\(a\le b\)</span>{% endraw %},</p>
{% raw %}<div class="math display">\[
\mathbb P(a\le Z_n\le b\mid\mathcal X_n)=F_n(b)-F_n(a-).
\]</div>{% endraw %}
<p>Continuity of {% raw %}<span class="math inline">\(\Phi\)</span>{% endraw %} and the uniform bound imply {% raw %}<span class="math inline">\(|F_n(a-)-\Phi(a)|\le\epsilon_n\)</span>{% endraw %}, by letting {% raw %}<span class="math inline">\(z\uparrow a\)</span>{% endraw %} in {% raw %}<span class="math inline">\(|F_n(z)-\Phi(z)|\le\epsilon_n\)</span>{% endraw %}. Thus every closed interval probability differs from its normal counterpart by at most {% raw %}<span class="math inline">\(2\epsilon_n\)</span>{% endraw %}, even if {% raw %}<span class="math inline">\(Z_n\)</span>{% endraw %} has atoms. For a known standard deviation, take {% raw %}<span class="math inline">\(a=-c_\alpha(r_n)-\mu_n\)</span>{% endraw %} and {% raw %}<span class="math inline">\(b=c_\alpha(r_n)-\mu_n\)</span>{% endraw %}. The preceding lemma bounds the normal probability below by {% raw %}<span class="math inline">\(1-\alpha\)</span>{% endraw %}.</p>
<p>We can restrict the remaining argument to {% raw %}<span class="math inline">\(\widehat s_n&gt;0\)</span>{% endraw %}, an event whose probability tends to one. Its complement receives the confidence set {% raw %}<span class="math inline">\(\mathbb R\)</span>{% endraw %} and can only increase coverage. On this event, the Lipschitz property gives</p>
{% raw %}<div class="math display">\[
\frac{|R_\alpha(\widehat s_n,B_n)-R_\alpha(s_n,B_n)|}{s_n}
\le (z_{1-\alpha/2}+\exp(-1/2))
   \left|\frac{\widehat s_n}{s_n}-1\right|
\xrightarrow{P}0.
\]</div>{% endraw %}
<p>Fix {% raw %}<span class="math inline">\(0&lt;\eta&lt;z_{1-\alpha}\)</span>{% endraw %}. The radius bound gives {% raw %}<span class="math inline">\(c_\alpha(r_n)\ge r_n+z_{1-\alpha}&gt;\eta\)</span>{% endraw %}, so reducing the standardized radius by {% raw %}<span class="math inline">\(\eta\)</span>{% endraw %} leaves a nonempty interval. With probability tending to one, the interval using {% raw %}<span class="math inline">\(\widehat s_n\)</span>{% endraw %} contains the interval centered at {% raw %}<span class="math inline">\(\widehat J_n\)</span>{% endraw %} with radius {% raw %}<span class="math inline">\(R_\alpha(s_n,B_n)-\eta s_n\)</span>{% endraw %}. The reduction removes two intervals of total length {% raw %}<span class="math inline">\(2\eta\)</span>{% endraw %} from the normal acceptance event, with probability at most {% raw %}<span class="math inline">\(2\eta/\sqrt{2\pi}\)</span>{% endraw %}. Apply the same {% raw %}<span class="math inline">\(2\epsilon_n\)</span>{% endraw %} bound to the reduced interval and subtract the probability that {% raw %}<span class="math inline">\(\widehat s_n&gt;0\)</span>{% endraw %} and the estimated radius differs from {% raw %}<span class="math inline">\(R_\alpha(s_n,B_n)\)</span>{% endraw %} by more than {% raw %}<span class="math inline">\(\eta s_n\)</span>{% endraw %}. The coverage probability is therefore at least</p>
{% raw %}<div class="math display">\[
1-\alpha-2\epsilon_n-\frac{2\eta}{\sqrt{2\pi}}-o(1).
\]</div>{% endraw %}
<p>Let {% raw %}<span class="math inline">\(n\to\infty\)</span>{% endraw %} and then {% raw %}<span class="math inline">\(\eta\downarrow0\)</span>{% endraw %}. {% raw %}<span class="math inline">\(\square\)</span>{% endraw %}</p>
</div>
<div id="refs" class="references csl-bib-body hanging-indent" data-entry-spacing="0" role="list">
<div id="ref-dong_when_2023" class="csl-entry" role="listitem">
Dong, Yingying, and Michal Kolesár. 2023. <span>“When Can We Ignore Measurement Error in the Running Variable?”</span> <em>Journal of Applied Econometrics</em> 38 (5): 735–50. <a href="https://doi.org/10.1002/jae.2974">https://doi.org/10.1002/jae.2974</a>.
</div>
</div>


</div>
