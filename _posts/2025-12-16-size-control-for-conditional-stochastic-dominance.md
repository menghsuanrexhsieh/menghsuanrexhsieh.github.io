---
layout: "post"
title: "Size Control for Conditional Stochastic Dominance"
date: "2025-12-16"
tags: ["statistics", "randomization inference"]
excerpt: "Coupling with uniforms bounds the null statistic. A second coupling proves convergence of rejection probabilities when outcomes can tie."
note_series: "Permutation and randomization inference"
note_source: "assets/notes/Overleaf Projects (32 items)/Permutation and Randomization Inference/stats.tex"
redirect_from: ["/2026/03/07/size-control-in-the-dominance-limit-experiment/", "/2026/04/12/size-control-for-conditional-stochastic-dominance/", "/2026/04/12/technical-lemmas-for-local-stochastic-dominance/"]
---

<div class="note-content" markdown="0">

<p>Suppose we want to test whether one outcome distribution stochastically dominates another at a specified covariate value. Under the conditions below, the outcomes whose covariates are closest to that value converge jointly to independent draws from the two target conditional distributions. The number of selected observations stays fixed, giving a finite-sample limit experiment. <span class="citation" data-cites="bugni_testing_2025"><a href="#ref-bugni_testing_2025" role="doc-biblioref">Bugni, Canay, and Kim (2025)</a></span> construct a one-sided Kolmogorov–Smirnov test from these observations and use a critical value computed from independent uniforms. We need to show that this critical value keeps the limiting rejection probability at or below the nominal level for every distribution satisfying the dominance null, including when the outcome distributions differ or have atoms.</p>

<p>The proof has two parts. In the limit experiment, a quantile representation bounds the null statistic by the statistic computed from uniforms. We then couple the selected observations with the limit vector and show that all pairwise inequalities and ties agree with probability approaching one. A small perturbation of tied outcomes can change a rank statistic by a fixed amount, so weak convergence alone is insufficient. Even with continuous outcomes, the reference statistic is discrete when the selected sample sizes are fixed. The rejection probability may therefore be below the nominal level.</p>

<h3 data-note-section="1" id="26-101-main-result-and-its-scope">1. The test and its finite-sample limit experiment</h3>

<p>Observe two independent samples,</p>

{% raw %}<div class="math display">\[
\{(Y_i,Z_i^Y):i=1,\ldots,n_y\},
\qquad
\{(X_j,Z_j^X):j=1,\ldots,n_x\},
\]</div>{% endraw %}

<p>with i.i.d. observations within each sample. The outcomes and covariates are real-valued, and the covariate distributions may differ between samples. Write</p>

{% raw %}<div class="math display">\[
F_Y(t\mid z)=\Pr(Y\leq t\mid Z^Y=z),
\qquad
F_X(t\mid z)=\Pr(X\leq t\mid Z^X=z).
\]</div>{% endraw %}

<p>Fix a target covariate value {% raw %}<span class="math inline">\(z_0\)</span>{% endraw %}. We abbreviate {% raw %}<span class="math inline">\(F_Y(t\mid z_0),F_X(t\mid z_0)\)</span>{% endraw %} as {% raw %}<span class="math inline">\(F_Y(t),F_X(t)\)</span>{% endraw %}. The null hypothesis is</p>

{% raw %}<div class="math display">\[
H_0:F_Y(t)\leq F_X(t)
\quad\text{for every }t\in\mathbb R.
\]</div>{% endraw %}

<p>With larger outcomes preferred, this says that {% raw %}<span class="math inline">\(Y\)</span>{% endraw %} stochastically dominates {% raw %}<span class="math inline">\(X\)</span>{% endraw %} at {% raw %}<span class="math inline">\(z_0\)</span>{% endraw %}. A positive difference {% raw %}<span class="math inline">\(F_Y(t)-F_X(t)\)</span>{% endraw %} at any threshold contradicts the null.</p>

<p>Select the {% raw %}<span class="math inline">\(q_y\)</span>{% endraw %} outcomes from the {% raw %}<span class="math inline">\(Y\)</span>{% endraw %}-sample and the {% raw %}<span class="math inline">\(q_x\)</span>{% endraw %} outcomes from the {% raw %}<span class="math inline">\(X\)</span>{% endraw %}-sample whose covariates are closest to {% raw %}<span class="math inline">\(z_0\)</span>{% endraw %}. The positive integers {% raw %}<span class="math inline">\(q_y\)</span>{% endraw %} and {% raw %}<span class="math inline">\(q_x\)</span>{% endraw %} stay fixed as both original sample sizes grow. Resolve equal covariate distances by the original observation order, as in the companion post. Let</p>

{% raw %}<div class="math display">\[
S_n=(Y_{n,[1]},\ldots,Y_{n,[q_y]},
     X_{n,[1]},\ldots,X_{n,[q_x]}),
\qquad n=\min\{n_y,n_x\},\quad q=q_y+q_x.
\]</div>{% endraw %}

<p>The brackets order observations by the distance of their covariates from {% raw %}<span class="math inline">\(z_0\)</span>{% endraw %}, not by the outcomes themselves.</p>

<p>Form the empirical cdfs</p>

{% raw %}<div class="math display">\[
\widehat F_{n,Y}(t)
=\frac1{q_y}\sum_{j=1}^{q_y}\mathbf1\{Y_{n,[j]}\leq t\},
\qquad
\widehat F_{n,X}(t)
=\frac1{q_x}\sum_{j=1}^{q_x}\mathbf1\{X_{n,[j]}\leq t\},
\]</div>{% endraw %}

<p>and use the one-sided KS statistic</p>

{% raw %}<div class="math display">\[
T(S_n)
=\sup_{t\in\mathbb R}
\{\widehat F_{n,Y}(t)-\widehat F_{n,X}(t)\}.
\]</div>{% endraw %}

<p>Large values indicate a violation of dominance.</p>

<p>Under the support and continuity assumptions stated below, the <a href="{% post_url 2025-12-15-conditional-stochastic-dominance-with-nearest-observations %}">nearest-observation construction</a> gives</p>

{% raw %}<div class="math display">\[
S_n\Rightarrow S=(S_1,\ldots,S_q),
\]</div>{% endraw %}

<p>where all coordinates of {% raw %}<span class="math inline">\(S\)</span>{% endraw %} are independent, the first {% raw %}<span class="math inline">\(q_y\)</span>{% endraw %} have cdf {% raw %}<span class="math inline">\(F_Y\)</span>{% endraw %}, and the remaining {% raw %}<span class="math inline">\(q_x\)</span>{% endraw %} have cdf {% raw %}<span class="math inline">\(F_X\)</span>{% endraw %}. As the original sample sizes grow, the selected covariates get closer to the target. The limiting comparison still uses only {% raw %}<span class="math inline">\(q\)</span>{% endraw %} outcomes.</p>

<p>The empirical cdfs are therefore still random in the limit. They generally do not converge in probability to {% raw %}<span class="math inline">\(F_Y\)</span>{% endraw %} and {% raw %}<span class="math inline">\(F_X\)</span>{% endraw %} when {% raw %}<span class="math inline">\(q_y\)</span>{% endraw %} and {% raw %}<span class="math inline">\(q_x\)</span>{% endraw %} are fixed. The critical value must be based on the statistic's distribution with this fixed number of observations.</p>

<p>Fix a nominal level {% raw %}<span class="math inline">\(\alpha\in(0,1)\)</span>{% endraw %}. Let {% raw %}<span class="math inline">\(U_1,\ldots,U_q\)</span>{% endraw %} be independent {% raw %}<span class="math inline">\(U(0,1)\)</span>{% endraw %} variables. Split them into groups of sizes {% raw %}<span class="math inline">\(q_y\)</span>{% endraw %} and {% raw %}<span class="math inline">\(q_x\)</span>{% endraw %}, and compute the same statistic {% raw %}<span class="math inline">\(T(U)\)</span>{% endraw %}. Using the companion post's notation, define</p>

{% raw %}<div class="math display">\[
c_\alpha=c_\alpha(q_y,q)
=\inf\{c:\Pr(T(U)\leq c)\geq1-\alpha\}.
\]</div>{% endraw %}

<p>The test rejects when</p>

{% raw %}<div class="math display">\[
T(S_n)&gt;c_\alpha.
\]</div>{% endraw %}

<p>The critical value depends only on {% raw %}<span class="math inline">\(q_y,q_x\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\alpha\)</span>{% endraw %}, not on the observed outcomes.</p>

<div id="dominance-size" class="theorem" data-note-number="1" data-note-kind="Theorem">

<p><strong>Theorem 1</strong>. Suppose every neighborhood of {% raw %}<span class="math inline">\(z_0\)</span>{% endraw %} has positive covariate probability in each sample. Suppose also that, for {% raw %}<span class="math inline">\(a\in\{Y,X\}\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
\sup_{t\in\mathbb R}
|F_a(t\mid z)-F_a(t\mid z_0)|
\longrightarrow0
\qquad\text{as }z\to z_0
\]</div>{% endraw %}

<p>within the corresponding covariate support, and that each target conditional cdf has only finitely many discontinuities. Then, for every fixed data-generating distribution satisfying {% raw %}<span class="math inline">\(H_0\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
\Pr\{T(S_n)&gt;c_\alpha\}
\longrightarrow
\Pr\{T(S)&gt;c_\alpha\}
\leq
\bar\alpha
\leq\alpha,
\]</div>{% endraw %}

<p>where</p>

{% raw %}<div class="math display">\[
\bar\alpha=\Pr\{T(U)&gt;c_\alpha\}.
\]</div>{% endraw %}

<p>The bound {% raw %}<span class="math inline">\(\bar\alpha\)</span>{% endraw %} is attained in the limit experiment whenever {% raw %}<span class="math inline">\(F_Y=F_X\)</span>{% endraw %} is continuous.</p>

</div>

<p>This statement combines Theorems 2 and 4 of the paper's <a href="https://arxiv.org/html/2503.14747v3">November 19, 2025 version</a>. The convergence of rejection probabilities, stronger than the stated limsup bound in its Theorem 2, follows from the proof in Appendix A.1.</p>

<p>The assumption requires continuity in the conditioning value {% raw %}<span class="math inline">\(z\)</span>{% endraw %}, uniformly over outcome thresholds {% raw %}<span class="math inline">\(t\)</span>{% endraw %}. The outcome cdfs may have jumps, provided there are finitely many. This includes continuous distributions, distributions with finite support, and mixed distributions with finitely many atoms.</p>

<p>The asymptotic statement holds for each fixed data-generating distribution. If {% raw %}<span class="math inline">\(\mathcal P_0\)</span>{% endraw %} denotes the null class, this does not imply</p>

{% raw %}<div class="math display">\[
\limsup_{n\to\infty}
\sup_{P\in\mathcal P_0}
\Pr_P\{T(S_n)&gt;c_\alpha\}
\leq\alpha.
\]</div>{% endraw %}

<p>To prove this stronger result, we would need a bound on the approximation error that holds uniformly over the null class.</p>

<h3 data-note-section="2" id="26-101-the-useful-calculation-couple-the-two-samples">2. Why the uniform statistic bounds the dominance null</h3>

<p>First consider the limit experiment {% raw %}<span class="math inline">\(S\)</span>{% endraw %}. Its observations have the target conditional distributions. We need to bound the distribution of {% raw %}<span class="math inline">\(T(S)\)</span>{% endraw %} for every pair {% raw %}<span class="math inline">\(F_Y,F_X\)</span>{% endraw %} satisfying the null.</p>

<p>For {% raw %}<span class="math inline">\(a\in\{Y,X\}\)</span>{% endraw %}, define the generalized quantile function</p>

{% raw %}<div class="math display">\[
Q_a(u)=\inf\{t:F_a(t)\geq u\},
\qquad 0&lt;u&lt;1.
\]</div>{% endraw %}

<p>Using the independent uniforms introduced above, construct</p>

{% raw %}<div class="math display">\[
\begin{aligned}
S_j&amp;=Q_Y(U_j),&amp; j&amp;=1,\ldots,q_y,\\
S_{q_y+j}&amp;=Q_X(U_{q_y+j}),&amp; j&amp;=1,\ldots,q_x.
\end{aligned}
\]</div>{% endraw %}

<p>Each coordinate of this copy of the limit vector {% raw %}<span class="math inline">\(S\)</span>{% endraw %} uses its own independent uniform. We can therefore compare its statistic with that of {% raw %}<span class="math inline">\(U\)</span>{% endraw %} for each realization of the uniforms. The quantile transformation also works for distributions with atoms; it does not require {% raw %}<span class="math inline">\(F_Y(S_j)\)</span>{% endraw %} to be uniform for {% raw %}<span class="math inline">\(j\leq q_y\)</span>{% endraw %}.</p>

<p>Write</p>

{% raw %}<div class="math display">\[
A(u)=\frac1{q_y}\sum_{j=1}^{q_y}\mathbf1\{U_j\leq u\},
\qquad
B(u)=\frac1{q_x}\sum_{j=1}^{q_x}
\mathbf1\{U_{q_y+j}\leq u\}.
\]</div>{% endraw %}

<p>The identity</p>

{% raw %}<div class="math display">\[
Q_a(u)\leq t
\quad\Longleftrightarrow\quad
u\leq F_a(t)
\]</div>{% endraw %}

<p>gives the empirical cdfs of the coupled sample:</p>

{% raw %}<div class="math display">\[
\widehat F_Y(t)=A(F_Y(t)),
\qquad
\widehat F_X(t)=B(F_X(t)).
\]</div>{% endraw %}

<p>Under the null, for every threshold and every realization of the uniforms,</p>

{% raw %}<div class="math display">\[
\begin{aligned}
\widehat F_Y(t)-\widehat F_X(t)
&amp;=A(F_Y(t))-B(F_X(t))\\
&amp;\leq A(F_X(t))-B(F_X(t)).
\end{aligned}
\]</div>{% endraw %}

<p>The inequality follows because {% raw %}<span class="math inline">\(F_Y(t)\leq F_X(t)\)</span>{% endraw %} and {% raw %}<span class="math inline">\(A\)</span>{% endraw %} is nondecreasing. Taking suprema,</p>

{% raw %}<div class="math display">\[
\begin{aligned}
T(S)
&amp;\leq
\sup_{t\in\mathbb R}
\{A(F_X(t))-B(F_X(t))\}\\
&amp;\leq
\sup_{0\leq u\leq1}\{A(u)-B(u)\}\\
&amp;=T(U).
\end{aligned}
\]</div>{% endraw %}

<p>Thus, on this probability space,</p>

{% raw %}<div class="math display">\[
T(S)\leq T(U)
\quad\text{almost surely}.
\]</div>{% endraw %}

<p>It follows that</p>

{% raw %}<div class="math display">\[
\Pr\{T(S)&gt;c_\alpha\}
\leq
\Pr\{T(U)&gt;c_\alpha\}
=\bar\alpha
\leq\alpha.
\]</div>{% endraw %}

<p>This bound for independent target draws uses only the dominance inequality. It holds for arbitrary outcome cdfs, including cdfs with infinitely many atoms, and does not require exchangeability. We use the continuity and finite-atom assumptions in Theorem 1 to prove that the selected sample's rejection probability converges to that of the limit test.</p>

<p>If {% raw %}<span class="math inline">\(F_Y=F_X=F\)</span>{% endraw %}, the first inequality becomes equality. If {% raw %}<span class="math inline">\(F\)</span>{% endraw %} is continuous, its range contains every {% raw %}<span class="math inline">\(u\in(0,1)\)</span>{% endraw %}, so taking the supremum over {% raw %}<span class="math inline">\(F(t)\)</span>{% endraw %} gives the same value as taking it over all probability thresholds. Therefore,</p>

{% raw %}<div class="math display">\[
T(S)=T(U)
\quad\text{almost surely under the coupling}.
\]</div>{% endraw %}

<p>Continuity is sufficient; strict monotonicity of {% raw %}<span class="math inline">\(F\)</span>{% endraw %} is unnecessary.</p>

<p>With a common distribution containing atoms, the cdf skips intervals of probability values. The process {% raw %}<span class="math inline">\(A(u)-B(u)\)</span>{% endraw %} may attain its maximum inside one of those intervals, where it cannot be evaluated as {% raw %}<span class="math inline">\(A(F(t))-B(F(t))\)</span>{% endraw %}. The supremum over all {% raw %}<span class="math inline">\(u\)</span>{% endraw %} can then exceed the statistic computed from the outcomes, making the test conservative.</p>

<p>Enlarging the set of thresholds over which we take a supremum can only increase its value. For an integrated statistic, we would also have to compare the integration measures and weights. The paper shows that tests using uniform critical values with Cramér–von Mises or Anderson–Darling statistics can overreject with discrete outcomes. A statistic's dependence on ranks alone does not imply the required bound. See <a href="https://arxiv.org/html/2503.14747v3">Appendix C.2</a>.</p>

<h3 data-note-section="3" id="26-101-why-ties-need-a-separate-argument">3. From the limit experiment to the selected observations</h3>

<p>We have bounded the rejection probability for {% raw %}<span class="math inline">\(T(S)\)</span>{% endraw %}. The test uses {% raw %}<span class="math inline">\(T(S_n)\)</span>{% endraw %}, so we still need to prove convergence of rejection probabilities.</p>

<p>Weak convergence {% raw %}<span class="math inline">\(S_n\Rightarrow S\)</span>{% endraw %} alone is insufficient when the limit vector can contain ties. For example, with one observation in each group,</p>

{% raw %}<div class="math display">\[
S_n=(d-1/n,d)\longrightarrow S=(d,d).
\]</div>{% endraw %}

<p>For every {% raw %}<span class="math inline">\(n\)</span>{% endraw %}, the {% raw %}<span class="math inline">\(Y\)</span>{% endraw %}-observation is smaller than the {% raw %}<span class="math inline">\(X\)</span>{% endraw %}-observation, giving {% raw %}<span class="math inline">\(T(S_n)=1\)</span>{% endraw %}. At the limit both observations enter their empirical cdfs together, giving {% raw %}<span class="math inline">\(T(S)=0\)</span>{% endraw %}. The observations converge in value while the statistic does not.</p>

<p>We use a second coupling to compare strict inequalities and ties in the selected vector and its limit. By the almost-sure representation theorem, there are vectors {% raw %}<span class="math inline">\(\widetilde S_n,\widetilde S\)</span>{% endraw %} on a common probability space such that</p>

{% raw %}<div class="math display">\[
\widetilde S_n\overset d=S_n,
\qquad
\widetilde S\overset d=S,
\qquad
\widetilde S_n\to\widetilde S
\quad\text{almost surely}.
\]</div>{% endraw %}

<p>The representation preserves the joint law of each vector, including dependence among the selected observations and independence among the limit coordinates. It need not share a probability space with the uniform coupling in Section 2.</p>

<p>For any pair with unequal limit values, convergence eventually preserves their order. Tied limit coordinates require an additional argument: approaching an atom does not guarantee that the approximating observation equals that atom.</p>

<span id="26-101-filling-in-the-atom-calculation"></span>

<p>For example, let {% raw %}<span class="math inline">\(V=d\)</span>{% endraw %} almost surely and {% raw %}<span class="math inline">\(V_n=d+1/n\)</span>{% endraw %}. Then {% raw %}<span class="math inline">\(V_n\to V\)</span>{% endraw %}, but {% raw %}<span class="math inline">\(V_n\neq d\)</span>{% endraw %} for every {% raw %}<span class="math inline">\(n\)</span>{% endraw %}. In this example,</p>

{% raw %}<div class="math display">\[
\|F_{V_n}-F_V\|_\infty=1.
\]</div>{% endraw %}

<p>Here the unit jump moves away from {% raw %}<span class="math inline">\(d\)</span>{% endraw %}. Uniform cdf convergence rules out such a shift, however small its distance.</p>

<p>The conditional-cdf assumption implies uniform cdf convergence for each selected observation. Consider a selected {% raw %}<span class="math inline">\(Y\)</span>{% endraw %}-observation and let {% raw %}<span class="math inline">\(Z^Y_{n,[j]}\)</span>{% endraw %} denote its covariate. Conditional on the covariates, its cdf is {% raw %}<span class="math inline">\(F_Y(\,\cdot\mid Z^Y_{n,[j]})\)</span>{% endraw %}. Hence</p>

{% raw %}<div class="math display">\[
F_{Y_{n,[j]}}(t)
=\mathbb E\!\left[F_Y(t\mid Z^Y_{n,[j]})\right],
\]</div>{% endraw %}

<p>and</p>

{% raw %}<div class="math display">\[
\begin{aligned}
\sup_t|F_{Y_{n,[j]}}(t)-F_Y(t)|
&amp;\leq
\mathbb E\!\left[
\sup_t
|F_Y(t\mid Z^Y_{n,[j]})-F_Y(t\mid z_0)|
\right]\\
&amp;\longrightarrow0.
\end{aligned}
\]</div>{% endraw %}

<p>The selected covariate converges in probability to {% raw %}<span class="math inline">\(z_0\)</span>{% endraw %}. The expression inside the expectation then converges to zero in probability. It is bounded by one, so its expectation tends to zero. The same argument applies to every selected {% raw %}<span class="math inline">\(X\)</span>{% endraw %}-coordinate. Since the coupling leaves the marginal distributions unchanged, these bounds also hold for the corresponding coordinates of {% raw %}<span class="math inline">\(\widetilde S_n\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\widetilde S\)</span>{% endraw %}.</p>

<p>These two convergence conditions imply that, when a limit coordinate equals an atom, its approximating coordinate equals the same atom with probability tending to one. To prove this, suppose</p>

{% raw %}<div class="math display">\[
V_n\to V\quad\text{in probability},
\qquad
\eta_n:=\|F_{V_n}-F_V\|_\infty\to0.
\]</div>{% endraw %}

<p>For any fixed {% raw %}<span class="math inline">\(d\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\varepsilon&gt;0\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
\Pr(V=d,V_n\neq d)
\leq
\Pr(|V_n-V|\geq\varepsilon)
+
\Pr(0&lt;|V_n-d|&lt;\varepsilon).
\]</div>{% endraw %}

<p>On the event {% raw %}<span class="math inline">\(V=d\)</span>{% endraw %}, failure to equal {% raw %}<span class="math inline">\(d\)</span>{% endraw %} means either that {% raw %}<span class="math inline">\(V_n\)</span>{% endraw %} is at least {% raw %}<span class="math inline">\(\varepsilon\)</span>{% endraw %} away or that it lies in the punctured neighborhood of {% raw %}<span class="math inline">\(d\)</span>{% endraw %}.</p>

<p>We can bound the second probability using the cdfs and their left limits. Write {% raw %}<span class="math inline">\(F(x-)=\lim_{t\uparrow x}F(t)\)</span>{% endraw %}. The uniform cdf bound also holds at these left limits, so</p>

{% raw %}<div class="math display">\[
\begin{aligned}
\Pr(0&lt;|V_n-d|&lt;\varepsilon)
={}&amp;F_{V_n}(d-)-F_{V_n}(d-\varepsilon)\\
&amp;+F_{V_n}((d+\varepsilon)-)-F_{V_n}(d)\\
\leq{}&amp;
\Pr(0&lt;|V-d|&lt;\varepsilon)+4\eta_n.
\end{aligned}
\]</div>{% endraw %}

<p>For fixed {% raw %}<span class="math inline">\(\varepsilon\)</span>{% endraw %}, the convergence assumptions therefore imply</p>

{% raw %}<div class="math display">\[
\limsup_{n\to\infty}\Pr(V=d,V_n\neq d)
\leq
\Pr(0&lt;|V-d|&lt;\varepsilon).
\]</div>{% endraw %}

<p>As {% raw %}<span class="math inline">\(\varepsilon\downarrow0\)</span>{% endraw %}, the punctured neighborhoods decrease to the empty set. Their probability tends to zero even if {% raw %}<span class="math inline">\(\Pr(V=d)&gt;0\)</span>{% endraw %}. Thus</p>

{% raw %}<div class="math display">\[
\Pr(V=d,V_n\neq d)\longrightarrow0.
\]</div>{% endraw %}

<p>This argument at a fixed atom appears in Lemma 6 of the paper and is applied to the selected coordinates in Lemma 3. Apply it to each coordinate of the coupled vectors. There are finitely many atoms and selected observations, so a union bound shows that, with probability tending to one, every coordinate whose limit is an atom equals that atom.</p>

<p>Two independent limit coordinates can be equal with positive probability only at a common atom. Indeed, for independent limit coordinates {% raw %}<span class="math inline">\(V,W\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
\Pr(V=W)
=\int\Pr(V=w)\,dF_W(w)
=\sum_d\Pr(V=d)\Pr(W=d),
\]</div>{% endraw %}

<p>where the sum is over common atoms. The coordinates may have different distributions. Independence is essential here: dependent continuous variables can coincide with positive probability.</p>

<p>On the event that two limit coordinates are unequal, the indicator of an order mismatch tends to zero almost surely. By bounded convergence, the probability of an order mismatch on this event tends to zero. Together with the preceding result for ties, a union bound over the finitely many pairs gives</p>

{% raw %}<div class="math display">\[
\Pr\!\left\{
\operatorname{sgn}(\widetilde S_{n,i}-\widetilde S_{n,j})
=
\operatorname{sgn}(\widetilde S_i-\widetilde S_j)
\text{ for all }i,j
\right\}\longrightarrow1.
\]</div>{% endraw %}

<p>On this event, the vectors have the same ordered groups of tied observations and the same group labels within each tie. At a value shared by {% raw %}<span class="math inline">\(m_y\)</span>{% endraw %} observations from the first group and {% raw %}<span class="math inline">\(m_x\)</span>{% endraw %} from the second, the empirical-cdf difference changes by {% raw %}<span class="math inline">\(m_y/q_y-m_x/q_x\)</span>{% endraw %} in a single step. Arbitrarily ordering observations within that tie could insert intermediate values the empirical-cdf difference never takes. The two empirical-cdf differences therefore take the same successive values, so</p>

{% raw %}<div class="math display">\[
T(\widetilde S_n)=T(\widetilde S).
\]</div>{% endraw %}

<p>In particular, for any fixed critical value {% raw %}<span class="math inline">\(c\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
\begin{aligned}
\left|
\Pr\{T(S_n)&gt;c\}-\Pr\{T(S)&gt;c\}
\right|
&amp;\leq
\Pr\{T(\widetilde S_n)\neq T(\widetilde S)\}\\
&amp;\longrightarrow0.
\end{aligned}
\]</div>{% endraw %}

<p>Rejection probabilities therefore converge even when the limiting statistic equals the critical value with positive probability. Together with the quantile bound, this proves Theorem 1.</p>

<h3 data-note-section="4" id="26-101-the-permutation-connection">4. Permutation critical values and discrete rejection probabilities</h3>

<p>We can also compute the uniform reference distribution by counting label orders. The independent uniforms have no ties almost surely, and all</p>

{% raw %}<div class="math display">\[
\binom{q_y+q_x}{q_y}
\]</div>{% endraw %}

<p>arrangements of the {% raw %}<span class="math inline">\(Y\)</span>{% endraw %}- and {% raw %}<span class="math inline">\(X\)</span>{% endraw %}-labels in increasing outcome order are equally likely.</p>

<p>For any fixed pooled sample without ties, uniformly permuting its labels produces these same arrangements with the same probabilities. Since the statistic depends only on the ordered labels, its permutation distribution equals the distribution of {% raw %}<span class="math inline">\(T(U)\)</span>{% endraw %}. The two critical values are equal.</p>

<p>In the limit experiment, continuous {% raw %}<span class="math inline">\(F_Y,F_X\)</span>{% endraw %} imply that the independent coordinates have no ties. The two distributions need not be equal: under dominance, the quantile bound controls the rejection probability, and permuting the labels gives the same critical value.</p>

<p>Continuity of the target cdfs alone does not rule out ties in a finite selected sample. Under the assumptions of Theorem 1, Section 3 shows that the selected sample has no ties with probability tending to one when the limit has none. The permutation and uniform critical values therefore agree with probability tending to one, so the two tests have the same limiting rejection probability.</p>

<p>Ties change this calculation. If {% raw %}<span class="math inline">\(q_y=q_x=1\)</span>{% endraw %} and both outcomes equal {% raw %}<span class="math inline">\(d\)</span>{% endraw %}, every permutation has statistic zero. With two independent continuous uniforms, however,</p>

{% raw %}<div class="math display">\[
\Pr\{T(U)=0\}=\Pr\{T(U)=1\}=\frac12.
\]</div>{% endraw %}

<p>At level {% raw %}<span class="math inline">\(0.1\)</span>{% endraw %}, the uniform critical value is one, whereas the tied-sample permutation critical value is zero. Neither test rejects the tied sample, so the different critical values do not show that either test overrejects. The bound above applies to the uniform critical value. The cited version of the paper leaves the validity of permutation tests under general discrete dominance nulls unresolved.</p>

<span id="26-101-a-complete-critical-value-calculation-with-four-observations"></span>

<p>Even without ties, the reference statistic is discrete because only finitely many label orders are possible. For {% raw %}<span class="math inline">\(q_y=q_x=2\)</span>{% endraw %}, reading a {% raw %}<span class="math inline">\(Y\)</span>{% endraw %}-label in increasing outcome order raises the empirical-cdf difference by {% raw %}<span class="math inline">\(1/2\)</span>{% endraw %}; reading an {% raw %}<span class="math inline">\(X\)</span>{% endraw %}-label lowers it by {% raw %}<span class="math inline">\(1/2\)</span>{% endraw %}. The statistic is the largest partial sum, including zero.</p>

<table>
<thead>
<tr>
<th>Increasing label order</th>
<th>Partial sums</th>
<th>{% raw %}<span class="math inline">\(T\)</span>{% endraw %}</th>
</tr>
</thead>
<tbody>
<tr>
<td>{% raw %}<span class="math inline">\(YYXX\)</span>{% endraw %}</td>
<td>{% raw %}<span class="math inline">\(1/2,1,1/2,0\)</span>{% endraw %}</td>
<td>{% raw %}<span class="math inline">\(1\)</span>{% endraw %}</td>
</tr>
<tr>
<td>{% raw %}<span class="math inline">\(YXYX\)</span>{% endraw %}</td>
<td>{% raw %}<span class="math inline">\(1/2,0,1/2,0\)</span>{% endraw %}</td>
<td>{% raw %}<span class="math inline">\(1/2\)</span>{% endraw %}</td>
</tr>
<tr>
<td>{% raw %}<span class="math inline">\(YXXY\)</span>{% endraw %}</td>
<td>{% raw %}<span class="math inline">\(1/2,0,-1/2,0\)</span>{% endraw %}</td>
<td>{% raw %}<span class="math inline">\(1/2\)</span>{% endraw %}</td>
</tr>
<tr>
<td>{% raw %}<span class="math inline">\(XYYX\)</span>{% endraw %}</td>
<td>{% raw %}<span class="math inline">\(-1/2,0,1/2,0\)</span>{% endraw %}</td>
<td>{% raw %}<span class="math inline">\(1/2\)</span>{% endraw %}</td>
</tr>
<tr>
<td>{% raw %}<span class="math inline">\(XYXY\)</span>{% endraw %}</td>
<td>{% raw %}<span class="math inline">\(-1/2,0,-1/2,0\)</span>{% endraw %}</td>
<td>{% raw %}<span class="math inline">\(0\)</span>{% endraw %}</td>
</tr>
<tr>
<td>{% raw %}<span class="math inline">\(XXYY\)</span>{% endraw %}</td>
<td>{% raw %}<span class="math inline">\(-1/2,-1,-1/2,0\)</span>{% endraw %}</td>
<td>{% raw %}<span class="math inline">\(0\)</span>{% endraw %}</td>
</tr>
</tbody>
</table>

<p>Each row has probability {% raw %}<span class="math inline">\(1/6\)</span>{% endraw %}, so</p>

{% raw %}<div class="math display">\[
\Pr\{T(U)=0\}=\frac13,\qquad
\Pr\{T(U)=1/2\}=\frac12,\qquad
\Pr\{T(U)=1\}=\frac16.
\]</div>{% endraw %}

<p>At nominal level {% raw %}<span class="math inline">\(\alpha=0.2\)</span>{% endraw %}, the critical value is {% raw %}<span class="math inline">\(1/2\)</span>{% endraw %}, and the test rejects with probability {% raw %}<span class="math inline">\(1/6\)</span>{% endraw %}. At level {% raw %}<span class="math inline">\(\alpha=0.1\)</span>{% endraw %}, the critical value is one, and the test cannot reject.</p>

<p>Thus, continuous outcomes do not imply a continuous reference distribution. The rejection probability can be below {% raw %}<span class="math inline">\(\alpha\)</span>{% endraw %} for three reasons. A strict dominance inequality can reduce the statistic relative to the equality case. Atoms can make the inequality between the outcome and uniform statistics strict. Even under a common continuous distribution, we may have {% raw %}<span class="math inline">\(\bar\alpha&lt;\alpha\)</span>{% endraw %} because the reference statistic has discrete support.</p>

<span id="26-101-count-the-reference-paths-for-arbitrary-retained-sizes"></span>

<p>The reference probabilities can be computed exactly for any choice of sample sizes. After reading {% raw %}<span class="math inline">\(i\)</span>{% endraw %} {% raw %}<span class="math inline">\(Y\)</span>{% endraw %}-labels and {% raw %}<span class="math inline">\(j\)</span>{% endraw %} {% raw %}<span class="math inline">\(X\)</span>{% endraw %}-labels, the empirical-cdf difference is</p>

{% raw %}<div class="math display">\[
\frac{i}{q_y}-\frac{j}{q_x}.
\]</div>{% endraw %}

<p>For {% raw %}<span class="math inline">\(c\geq0\)</span>{% endraw %}, let {% raw %}<span class="math inline">\(N_c(i,j)\)</span>{% endraw %} count label paths reaching {% raw %}<span class="math inline">\((i,j)\)</span>{% endraw %} whose partial differences never exceed {% raw %}<span class="math inline">\(c\)</span>{% endraw %}. Set {% raw %}<span class="math inline">\(N_c(0,0)=1\)</span>{% endraw %}, assign zero to counts with negative indices, and use</p>

{% raw %}<div class="math display">\[
N_c(i,j)
=
\mathbf1\left\{\frac{i}{q_y}-\frac{j}{q_x}\leq c\right\}
\{N_c(i-1,j)+N_c(i,j-1)\}
\]</div>{% endraw %}

<p>at every other grid point with {% raw %}<span class="math inline">\(0\leq i\leq q_y\)</span>{% endraw %} and {% raw %}<span class="math inline">\(0\leq j\leq q_x\)</span>{% endraw %}.</p>

<p>A path reaches {% raw %}<span class="math inline">\((i,j)\)</span>{% endraw %} by appending either a {% raw %}<span class="math inline">\(Y\)</span>{% endraw %}-label or an {% raw %}<span class="math inline">\(X\)</span>{% endraw %}-label. The indicator excludes paths that cross the boundary at the new point. Consequently,</p>

{% raw %}<div class="math display">\[
\Pr\{T(U)\leq c\}
=
\frac{N_c(q_y,q_x)}
{\binom{q_y+q_x}{q_y}}.
\]</div>{% endraw %}

<p>For {% raw %}<span class="math inline">\(q_y=q_x=2\)</span>{% endraw %}, the counts at {% raw %}<span class="math inline">\(c=0\)</span>{% endraw %} and {% raw %}<span class="math inline">\(c=1/2\)</span>{% endraw %} are two and five, giving the probabilities in the table. We can use these counts to find the smallest critical value satisfying the cdf inequality, without simulation.</p>

<p>In the limit experiment, randomizing at the critical value gives rejection probability exactly {% raw %}<span class="math inline">\(\alpha\)</span>{% endraw %} when {% raw %}<span class="math inline">\(F_Y=F_X\)</span>{% endraw %} is continuous. Set {% raw %}<span class="math inline">\(c=c_\alpha\)</span>{% endraw %}. Reject whenever {% raw %}<span class="math inline">\(T&gt;c\)</span>{% endraw %}; when {% raw %}<span class="math inline">\(T=c\)</span>{% endraw %}, use an independent random draw to reject with probability</p>

{% raw %}<div class="math display">\[
\gamma
=
\frac{\alpha-\Pr\{T(U)&gt;c\}}
{\Pr\{T(U)=c\}}.
\]</div>{% endraw %}

<p>Because {% raw %}<span class="math inline">\(T(U)\)</span>{% endraw %} has finite support and {% raw %}<span class="math inline">\(\alpha\in(0,1)\)</span>{% endraw %}, the critical value has positive probability. Its quantile definition gives</p>

{% raw %}<div class="math display">\[
\Pr\{T(U)&gt;c\}\leq\alpha\leq\Pr\{T(U)\geq c\},
\]</div>{% endraw %}

<p>so {% raw %}<span class="math inline">\(0\leq\gamma\leq1\)</span>{% endraw %}. For the example with {% raw %}<span class="math inline">\(\alpha=0.2\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
\gamma
=
\frac{1/5-1/6}{1/2}
=\frac1{15}.
\]</div>{% endraw %}

<p>Conditional on the statistic, this rule rejects with probability zero below {% raw %}<span class="math inline">\(c\)</span>{% endraw %}, {% raw %}<span class="math inline">\(\gamma\)</span>{% endraw %} at {% raw %}<span class="math inline">\(c\)</span>{% endraw %}, and one above it. This is a nondecreasing function of the statistic, so the quantile coupling bounds the rejection probability by {% raw %}<span class="math inline">\(\alpha\)</span>{% endraw %} under every null distribution in the limit experiment. By Section 3, the rejection probability for the selected observations converges to that of the limit test. Tied outcomes still enter their empirical cdfs together. The nonrandomized test in Theorem 1 uses only strict rejection.</p>

<h3 data-note-section="5" id="26-101-why-size-and-power-must-be-discussed-separately">5. Sample sizes and power</h3>

<p>For some small sample sizes, the test cannot reject at the chosen level. The event {% raw %}<span class="math inline">\(T(U)=1\)</span>{% endraw %} occurs precisely when every {% raw %}<span class="math inline">\(Y\)</span>{% endraw %}-observation precedes every {% raw %}<span class="math inline">\(X\)</span>{% endraw %}-observation in increasing outcome order. There is one such label sequence, so</p>

{% raw %}<div class="math display">\[
\Pr\{T(U)=1\}
=
\binom{q_y+q_x}{q_y}^{-1}.
\]</div>{% endraw %}

<p>If</p>

{% raw %}<div class="math display">\[
\alpha&lt;
\binom{q_y+q_x}{q_y}^{-1},
\]</div>{% endraw %}

<p>the critical value is one and the nonrandomized test cannot reject any sample. This remains true as the original sample sizes grow if {% raw %}<span class="math inline">\(q_y\)</span>{% endraw %} and {% raw %}<span class="math inline">\(q_x\)</span>{% endraw %} stay fixed.</p>

<p>Consider again the example with four observations. Suppose the alternative target distributions place every {% raw %}<span class="math inline">\(Y\)</span>{% endraw %}-outcome below every {% raw %}<span class="math inline">\(X\)</span>{% endraw %}-outcome. Then {% raw %}<span class="math inline">\(T(S)=1\)</span>{% endraw %} with probability one. With {% raw %}<span class="math inline">\(q_y=q_x=2\)</span>{% endraw %}, the test in the limit experiment has power one at level {% raw %}<span class="math inline">\(0.2\)</span>{% endraw %}, but power zero at level {% raw %}<span class="math inline">\(0.1\)</span>{% endraw %}, because the latter critical value is also one. Under the regularity conditions of Theorem 1, the power based on selected observations converges to these values. At level {% raw %}<span class="math inline">\(0.1\)</span>{% endraw %}, rejection is impossible for every original sample size.</p>

<p>Suppose the regularity assumptions of Theorem 1 hold and {% raw %}<span class="math inline">\(H_0\)</span>{% endraw %} is false. The argument in Section 3 does not use the dominance inequality, so it gives</p>

{% raw %}<div class="math display">\[
\Pr\{T(S_n)&gt;c_\alpha\}
\longrightarrow
\Pr\{T(S)&gt;c_\alpha\},
\]</div>{% endraw %}

<p>with {% raw %}<span class="math inline">\(S\)</span>{% endraw %} now drawn from the alternative target distributions. This limiting power can lie strictly between zero and one. As the original sample grows, the selected covariates get closer to {% raw %}<span class="math inline">\(z_0\)</span>{% endraw %}, but the number of observations used in the test stays fixed.</p>

<p>If {% raw %}<span class="math inline">\(q_y\)</span>{% endraw %} and {% raw %}<span class="math inline">\(q_x\)</span>{% endraw %} grow, we need to bound both the distances of the selected covariates from the target and the resulting distributional approximation error. The paper studies this case under stronger assumptions in Section 4.2 and Appendix C.1; both posts here concern fixed selected sample sizes.</p>

<div id="refs" class="references csl-bib-body hanging-indent" data-entry-spacing="0" role="list">
<div id="ref-bugni_testing_2025" class="csl-entry" role="listitem">
Bugni, Federico A., Ivan A. Canay, and Deborah Kim. 2025. <span>“Testing Conditional Stochastic Dominance at Target Points.”</span> arXiv. <a href="https://doi.org/10.48550/arXiv.2503.14747">https://doi.org/10.48550/arXiv.2503.14747</a>.
</div>
</div>

<nav class="note-series" aria-label="Notes in this series"><p>Previous: <a href="{% post_url 2025-12-15-conditional-stochastic-dominance-with-nearest-observations %}">Conditional Stochastic Dominance with Nearest Observations</a> · Additional reading: <a href="{% post_url 2023-02-11-the-neymanpearson-lemma-and-unbiased-testing %}">The Neyman–Pearson Lemma and Unbiased Testing</a></p></nav>

</div>
