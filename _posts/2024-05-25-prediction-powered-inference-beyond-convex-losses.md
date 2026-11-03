---
layout: "post"
title: "Prediction-Powered Inference Beyond Convex Losses"
date: "2024-05-25"
tags: ["statistics", "machine learning"]
excerpt: "Using predictions for inference when the loss is nonconvex."
note_series: "Prediction-powered inference"
note_source: "assets/notes/Overleaf Projects (32 items)/prediction powered inference notes/ideas.tex"
---

<div class="note-content" markdown="0">

<p>A zero population gradient can identify a local maximum or another stationary point when the loss is nonconvex. Inference on a global minimizer therefore requires a comparison of risks. The minimizer’s risk is no larger than the risk at any admissible benchmark, which gives an inequality that can be tested directly.</p>

<p>The exposition below is based on Section 4.1 of <span class="citation" data-cites="angelopoulos_prediction-powered_2023">Angelopoulos et al. (<a href="#ref-angelopoulos_prediction-powered_2023" role="doc-biblioref">2023</a>)</span>. The authors use predictions to estimate both sides of this comparison. They choose a benchmark on one part of the unlabeled sample and evaluate it on the remaining observations. A parameter value is retained when a lower confidence bound for its risk does not exceed an upper confidence bound for the benchmark’s risk. At a population minimizer, rejection requires at least one of these bounds to fail.</p>



<div id="31-29-why-split-the-unlabeled-sample">

</div>
<h3 data-note-section="1" id="31-29-risk-minimization-and-the-benchmark">1. Risk minimization and the benchmark</h3>
<p>Let {% raw %}<span class="math inline">\(\Theta\)</span>{% endraw %} be a parameter space and let {% raw %}<span class="math inline">\(\ell_\theta(x,y)\)</span>{% endraw %} be a measurable loss. Define</p>

{% raw %}<span id="eq:ppi-risk-identity"></span><div class="math display">\[
L(\theta)\triangleq\mathbb{E}[\ell_\theta(X,Y)],
\qquad
L^f(\theta)\triangleq\mathbb{E}[\ell_\theta(X,f(X))],
\qquad
\Delta(\theta)\triangleq L(\theta)-L^f(\theta).

\tag{1}\]</div>{% endraw %}
<p>Assume these expectations are finite at every parameter used below, and fix a population minimizer {% raw %}<span class="math inline">\(\theta^*\in\arg\min_{\theta\in\Theta}L(\theta)\)</span>{% endraw %}. Neither convexity of the loss nor convexity of {% raw %}<span class="math inline">\(\Theta\)</span>{% endraw %} is required.</p>

<p>Observe an independent and identically distributed labeled sample {% raw %}<span class="math inline">\((X_i,Y_i)_{i=1}^n\)</span>{% endraw %} from {% raw %}<span class="math inline">\(P\)</span>{% endraw %} and an independent unlabeled sample whose observations are independent and identically distributed according to {% raw %}<span class="math inline">\(P_X\)</span>{% endraw %}. Hold the prediction rule {% raw %}<span class="math inline">\(f\)</span>{% endraw %} fixed, or condition on independent training data. Split the unlabeled sample into a selection sample {% raw %}<span class="math inline">\(\mathcal U_1\)</span>{% endraw %} of size {% raw %}<span class="math inline">\(N_1\)</span>{% endraw %} and an evaluation sample {% raw %}<span class="math inline">\(\mathcal U_2\)</span>{% endraw %} of size {% raw %}<span class="math inline">\(N_2\)</span>{% endraw %}.</p>

<p>Let {% raw %}<span class="math inline">\(\mathcal F_1\)</span>{% endraw %} denote the information in the selection sample and any independent training data. Choose a measurable benchmark {% raw %}<span class="math inline">\(b\in\Theta\)</span>{% endraw %} using only {% raw %}<span class="math inline">\(\mathcal F_1\)</span>{% endraw %}. The paper uses a minimizer of predicted empirical loss,</p>

{% raw %}<div class="math display">\[
b\in\arg\min_{\theta\in\Theta}
\frac1{N_1}\sum_{j\in\mathcal U_1}\ell_\theta(\widetilde X_j,f(\widetilde X_j)).
\]</div>{% endraw %}
<p>An approximate minimizer, or any other {% raw %}<span class="math inline">\(\mathcal F_1\)</span>{% endraw %}-measurable choice, also suffices for coverage. Conditional on {% raw %}<span class="math inline">\(\mathcal F_1\)</span>{% endraw %}, the benchmark is fixed and the evaluation observations retain their sampling distributions.</p>

<p>Estimate the two components of <a href="#eq:ppi-risk-identity">the risk identity</a> by</p>

{% raw %}<span id="eq:ppi-risk-estimates"></span><div class="math display">\[
\widetilde L^f(\theta)\triangleq\frac1{N_2}\sum_{j\in\mathcal U_2}
\ell_\theta(\widetilde X_j,f(\widetilde X_j)),
\qquad
\widehat\Delta(\theta)\triangleq\frac1n\sum_i
\{\ell_\theta(X_i,Y_i)-\ell_\theta(X_i,f(X_i))\}.

\tag{2}\]</div>{% endraw %}
<p>Write {% raw %}<span class="math inline">\(E_f(\theta)\triangleq\widetilde L^f(\theta)-L^f(\theta)\)</span>{% endraw %} for the error in estimating the predicted risk. Then</p>

{% raw %}<span id="eq:ppi-risk-error"></span><div class="math display">\[
L(\theta)=\widetilde L^f(\theta)+\Delta(\theta)-E_f(\theta).

\tag{3}\]</div>{% endraw %}
<p>The minus sign on {% raw %}<span class="math inline">\(E_f\)</span>{% endraw %} determines which one-sided bound is needed in the coverage proof.</p>

<div id="31-29-the-coverage-statement">

</div>
<div id="31-29-deriving-the-inequality">

</div>
<h3 data-note-section="2" id="31-29-coverage-from-four-one-sided-bounds">2. Coverage from four one-sided bounds</h3>
<p>Fix {% raw %}<span class="math inline">\(0&lt;\delta&lt;\alpha&lt;1\)</span>{% endraw %}. Let {% raw %}<span class="math inline">\(R^l(\theta)\)</span>{% endraw %} and {% raw %}<span class="math inline">\(R^u(\theta)\)</span>{% endraw %} be lower and upper bounds for {% raw %}<span class="math inline">\(\Delta(\theta)\)</span>{% endraw %}, and let {% raw %}<span class="math inline">\(T^l(\theta)\)</span>{% endraw %} and {% raw %}<span class="math inline">\(T^u(\theta)\)</span>{% endraw %} bound {% raw %}<span class="math inline">\(E_f(\theta)\)</span>{% endraw %}.</p>

<div id="ppi-risk-bounds" class="assumption" data-note-number="1" data-note-kind="Assumption">
<p><strong>Assumption 1</strong>. (Conditional one-sided coverage.) Conditional on {% raw %}<span class="math inline">\(\mathcal F_1\)</span>{% endraw %}, the following inequalities hold almost surely:</p>

{% raw %}<span id="eq:ppi-four-bounds"></span><div class="math display">\[
\begin{aligned}
\mathbb P\{R^l(\theta^*)\le\Delta(\theta^*)\mid\mathcal F_1\}&amp;\ge1-\delta/2,\\
\mathbb P\{\Delta(b)\le R^u(b)\mid\mathcal F_1\}&amp;\ge1-\delta/2,\\
\mathbb P\{E_f(\theta^*)\le T^u(\theta^*)\mid\mathcal F_1\}&amp;\ge1-(\alpha-\delta)/2,\\
\mathbb P\{T^l(b)\le E_f(b)\mid\mathcal F_1\}&amp;\ge1-(\alpha-\delta)/2.
\end{aligned}

\tag{4}\]</div>{% endraw %}
</div>
<p>These are the four bounds needed at the target and benchmark. They can be obtained from bounds valid for every fixed parameter value under the conditional sampling distribution. Sample splitting permits evaluating such a bound at {% raw %}<span class="math inline">\(b\)</span>{% endraw %}: after conditioning, the selected benchmark is fixed independently of the labeled and evaluation samples.</p>

<p>Define the lower and upper risk bounds</p>

{% raw %}<span id="eq:ppi-risk-bounds"></span><div class="math display">\[
\underline L(\theta)\triangleq\widetilde L^f(\theta)+R^l(\theta)-T^u(\theta),
\qquad
\overline L(\theta)\triangleq\widetilde L^f(\theta)+R^u(\theta)-T^l(\theta).

\tag{5}\]</div>{% endraw %}
<div id="ppi-risk" class="theorem" data-note-number="2" data-note-kind="Theorem">
<p><strong>Theorem 2</strong>. (Coverage of a risk minimizer.) Under Assumption <a href="#ppi-risk-bounds">1</a>, the set</p>

{% raw %}<span id="eq:ppi-risk-set"></span><div class="math display">\[
\begin{aligned}
C_\alpha
&amp;\triangleq\{\theta\in\Theta:\underline L(\theta)\le\overline L(b)\}\\
&amp;=\left\{\theta\in\Theta:\widetilde L^f(\theta)
\le\widetilde L^f(b)-R^l(\theta)+R^u(b)+T^u(\theta)-T^l(b)\right\}
\end{aligned}

\tag{6}\]</div>{% endraw %}
<p>satisfies {% raw %}<span class="math inline">\(\mathbb P(\theta^*\in C_\alpha\mid\mathcal F_1)\ge1-\alpha\)</span>{% endraw %} almost surely. Consequently, {% raw %}<span class="math inline">\(\mathbb P(\theta^*\in C_\alpha)\ge1-\alpha\)</span>{% endraw %}.</p>

</div>
<div class="proof">
<p><em>Proof.</em> Conditional on {% raw %}<span class="math inline">\(\mathcal F_1\)</span>{% endraw %}, the probability that at least one event in <a href="#eq:ppi-four-bounds">the four bounds</a> fails is at most</p>

{% raw %}<div class="math display">\[
\frac\delta2+\frac\delta2
+\frac{\alpha-\delta}2+\frac{\alpha-\delta}2=\alpha.
\]</div>{% endraw %}
<p>On the event that all four bounds hold, <a href="#eq:ppi-risk-error">the risk decomposition</a> and population optimality give</p>

{% raw %}<span id="eq:ppi-risk-chain"></span><div class="math display">\[
\underline L(\theta^*)\le L(\theta^*)\le L(b)\le\overline L(b).

\tag{7}\]</div>{% endraw %}
<p>Thus {% raw %}<span class="math inline">\(\theta^*\in C_\alpha\)</span>{% endraw %} on this event. Taking expectations of the conditional coverage inequality proves the unconditional statement. {% raw %}<span class="math inline">\(\square\)</span>{% endraw %}</p>

</div>
<p>All four bounds can be dependent. For example, the labeled sample is used at both {% raw %}<span class="math inline">\(\theta^*\)</span>{% endraw %} and {% raw %}<span class="math inline">\(b\)</span>{% endraw %}. The union bound controls their combined failure probability. Selecting {% raw %}<span class="math inline">\(b\)</span>{% endraw %} with the evaluation sample would require confidence bounds that remain valid after that selection, such as simultaneous bounds over the possible benchmarks.</p>

<p>The theorem covers each specified population minimizer. If the target is the entire set of minimizers, the bounds at the minimizers must hold jointly over that set. The benchmark’s quality affects how many other parameters can be excluded. Let</p>

{% raw %}<div class="math display">\[
\eta\triangleq L(b)-L(\theta^*)\ge0.
\]</div>{% endraw %}
<p>With exact risk evaluation, the comparison retains precisely the sublevel set {% raw %}<span class="math inline">\(\{\theta:L(\theta)-L(\theta^*)\le\eta\}\)</span>{% endraw %}. A benchmark with small excess risk therefore permits a more informative comparison, while the inequality protecting {% raw %}<span class="math inline">\(\theta^*\)</span>{% endraw %} holds for every admissible benchmark.</p>

<div id="31-29-a-finite-sample-construction-with-bounded-loss">

</div>
<h3 data-note-section="3" id="31-29-bounded-losses">3. Bounded losses</h3>
<p>Suppose a known constant {% raw %}<span class="math inline">\(B&gt;0\)</span>{% endraw %} bounds both the observed and predicted losses:</p>

{% raw %}<div class="math display">\[
0\le\ell_\theta(X,Y)\le B,
\qquad
0\le\ell_\theta(X,f(X))\le B
\]</div>{% endraw %}
<p>almost surely, for every {% raw %}<span class="math inline">\(\theta\in\Theta\)</span>{% endraw %}. Conditional on {% raw %}<span class="math inline">\(\mathcal F_1\)</span>{% endraw %}, each labeled rectifier summand lies in {% raw %}<span class="math inline">\([-B,B]\)</span>{% endraw %}. Hoeffding’s one-sided inequality gives</p>

{% raw %}<div class="math display">\[
\mathbb P\{\widehat\Delta(\theta)-\Delta(\theta)&gt;t\mid\mathcal F_1\}
\le\exp\{-nt^2/(2B^2)\}.
\]</div>{% endraw %}
<p>The same bound applies to the opposite tail. Each predicted loss lies in {% raw %}<span class="math inline">\([0,B]\)</span>{% endraw %}, so</p>

{% raw %}<div class="math display">\[
\mathbb P\{\widetilde L^f(\theta)-L^f(\theta)&gt;t\mid\mathcal F_1\}
\le\exp\{-2N_2t^2/B^2\},
\]</div>{% endraw %}
<p>with the same bound for its opposite tail. Set</p>

{% raw %}<span id="eq:ppi-risk-radii"></span><div class="math display">\[
r_\Delta\triangleq B\sqrt{\frac{2\log(2/\delta)}n},
\qquad
r_f\triangleq B\sqrt{\frac{\log\{2/(\alpha-\delta)\}}{2N_2}}.

\tag{8}\]</div>{% endraw %}
<p>Then {% raw %}<span class="math inline">\(R^l=\widehat\Delta-r_\Delta\)</span>{% endraw %}, {% raw %}<span class="math inline">\(R^u=\widehat\Delta+r_\Delta\)</span>{% endraw %}, {% raw %}<span class="math inline">\(T^l=-r_f\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(T^u=r_f\)</span>{% endraw %} satisfy Assumption <a href="#ppi-risk-bounds">1</a>. Each radius assigns the required probability to one tail.</p>

<div id="ppi-bounded-risk" class="corollary" data-note-number="3" data-note-kind="Corollary">
<p><strong>Corollary 3</strong>. (Bounded-loss confidence set.) Under the sampling and boundedness conditions above, put {% raw %}<span class="math inline">\(\widehat L^{\mathrm{PP}}(\theta)\triangleq\widetilde L^f(\theta)+\widehat\Delta(\theta)\)</span>{% endraw %}. The set</p>

{% raw %}<span id="eq:ppi-bounded-risk-set"></span><div class="math display">\[
C_\alpha=\left\{\theta\in\Theta:
\widehat L^{\mathrm{PP}}(\theta)-\widehat L^{\mathrm{PP}}(b)
\le2r_\Delta+2r_f\right\}

\tag{9}\]</div>{% endraw %}
<p>covers {% raw %}<span class="math inline">\(\theta^*\)</span>{% endraw %} with probability at least {% raw %}<span class="math inline">\(1-\alpha\)</span>{% endraw %}, conditional on {% raw %}<span class="math inline">\(\mathcal F_1\)</span>{% endraw %} and unconditionally.</p>

</div>
<div class="proof">
<p><em>Proof.</em> Substituting the four bounds into <a href="#eq:ppi-risk-set">the risk-comparison set</a> gives the displayed inequality. Theorem <a href="#ppi-risk">2</a> supplies its coverage. {% raw %}<span class="math inline">\(\square\)</span>{% endraw %}</p>

</div>
<p>The two copies of each radius account for uncertainty at {% raw %}<span class="math inline">\(\theta\)</span>{% endraw %} and at the benchmark {% raw %}<span class="math inline">\(b\)</span>{% endraw %}. Testing more parameter values does not increase the error budget needed to cover the fixed {% raw %}<span class="math inline">\(\theta^*\)</span>{% endraw %}: the proof uses the bounds for {% raw %}<span class="math inline">\(\theta\)</span>{% endraw %} only at {% raw %}<span class="math inline">\(\theta^*\)</span>{% endraw %}. For example, the loss {% raw %}<span class="math inline">\(\ell_\theta(y)=\mathbf1\{y\ne\theta\}\)</span>{% endraw %} on a finite outcome space is bounded by {% raw %}<span class="math inline">\(B=1\)</span>{% endraw %}. Its risk is {% raw %}<span class="math inline">\(1-\mathbb P(Y=\theta)\)</span>{% endraw %}, so the construction covers any specified population mode.</p>

<div id="31-29-why-paired-risk-differences-can-be-more-precise">

</div>
<h3 data-note-section="4" id="31-29-paired-risk-differences">4. Paired risk differences</h3>
<p>Separate bounds at {% raw %}<span class="math inline">\(\theta\)</span>{% endraw %} and at the benchmark {% raw %}<span class="math inline">\(b\)</span>{% endraw %} can be conservative when their estimation errors are positively correlated. Conditioning on {% raw %}<span class="math inline">\(\mathcal F_1\)</span>{% endraw %}, define</p>

{% raw %}<div class="math display">\[
D_\theta(X,Y)\triangleq\ell_\theta(X,Y)-\ell_b(X,Y),
\qquad
D_\theta^f(X)\triangleq\ell_\theta(X,f(X))-\ell_b(X,f(X)).
\]</div>{% endraw %}
<p>Their expectations satisfy</p>

{% raw %}<div class="math display">\[
L(\theta)-L(b)=\mathbb{E}[D_\theta-D_\theta^f\mid\mathcal F_1]
+\mathbb{E}[D_\theta^f\mid\mathcal F_1].
\]</div>{% endraw %}
<p>The corresponding corrected difference is</p>

{% raw %}<span id="eq:ppi-paired-difference"></span><div class="math display">\[
\widehat d(\theta)\triangleq\frac1n\sum_i
\{D_\theta(X_i,Y_i)-D_\theta^f(X_i)\}
+\frac1{N_2}\sum_{j\in\mathcal U_2}D_\theta^f(\widetilde X_j).

\tag{10}\]</div>{% endraw %}
<p>When the summands have finite second moments, independence of the evaluation samples gives</p>

{% raw %}<span id="eq:ppi-paired-variance"></span><div class="math display">\[
\operatorname{Var}(\widehat d(\theta)\mid\mathcal F_1)
=\frac{\operatorname{Var}(D_\theta-D_\theta^f\mid\mathcal F_1)}n
+\frac{\operatorname{Var}(D_\theta^f\mid\mathcal F_1)}{N_2}.

\tag{11}\]</div>{% endraw %}
<p>To see the effect of pairing, write {% raw %}<span class="math inline">\(E_a\triangleq\ell_a(X,Y)-\ell_a(X,f(X))\)</span>{% endraw %}. The labeled variance becomes</p>

{% raw %}<div class="math display">\[
\operatorname{Var}(E_\theta-E_b\mid\mathcal F_1)
=\operatorname{Var}(E_\theta\mid\mathcal F_1)
+\operatorname{Var}(E_b\mid\mathcal F_1)
-2\operatorname{Cov}(E_\theta,E_b\mid\mathcal F_1).
\]</div>{% endraw %}
<p>Prediction errors shared by the two risk estimates reduce the variance of their difference. A direct bound for this difference can use that covariance.</p>

<div id="ppi-paired-coverage" class="proposition" data-note-number="4" data-note-kind="Proposition">
<p><strong>Proposition 4</strong>. (Coverage from a risk difference.) Suppose {% raw %}<span class="math inline">\(\underline d(\theta)\)</span>{% endraw %} satisfies</p>

{% raw %}<div class="math display">\[
\mathbb P\{\underline d(\theta^*)\le L(\theta^*)-L(b)\mid\mathcal F_1\}
\ge1-\alpha.
\]</div>{% endraw %}
<p>Then {% raw %}<span class="math inline">\(C_\alpha^{\mathrm{diff}}\triangleq\{\theta\in\Theta:\underline d(\theta)\le0\}\)</span>{% endraw %} covers {% raw %}<span class="math inline">\(\theta^*\)</span>{% endraw %} with conditional probability at least {% raw %}<span class="math inline">\(1-\alpha\)</span>{% endraw %}.</p>

</div>
<div class="proof">
<p><em>Proof.</em> On the event in the hypothesis, {% raw %}<span class="math inline">\(\underline d(\theta^*)\le L(\theta^*)-L(b)\le0\)</span>{% endraw %}, so the target belongs to the reported set. {% raw %}<span class="math inline">\(\square\)</span>{% endraw %}</p>

</div>
<p>This follows directly from the risk inequality. A normal lower bound based on <a href="#eq:ppi-paired-variance">the paired variance</a> requires a central limit theorem and a consistent variance estimator. If the benchmark changes with the sample sizes, those conditions must hold along the resulting sequence; conditional independence alone does not establish that approximation.</p>

<div id="31-29-an-example-where-the-first-order-condition-is-insufficient">

</div>
<h3 data-note-section="5" id="31-29-a-nonconvex-example">5. A nonconvex example</h3>
<p>Take {% raw %}<span class="math inline">\(\Theta=\mathbb R\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\ell_\theta(Y)=(\theta^2-Y)^2\)</span>{% endraw %}, with {% raw %}<span class="math inline">\(\mathbb{E}[Y^2]&lt;\infty\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\mu\triangleq\mathbb{E}[Y]&gt;0\)</span>{% endraw %}. Expanding the risk gives</p>

{% raw %}<span id="eq:ppi-quartic-risk"></span><div class="math display">\[
L(\theta)=\theta^4-2\mu\theta^2+\mathbb{E}[Y^2],
\qquad
L&#x27;(\theta)=4\theta(\theta^2-\mu).

\tag{12}\]</div>{% endraw %}
<p>The stationary points are {% raw %}<span class="math inline">\(0\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\pm\sqrt\mu\)</span>{% endraw %}. Since</p>

{% raw %}<div class="math display">\[
L(\theta)-L(\sqrt\mu)=(\theta^2-\mu)^2,
\]</div>{% endraw %}
<p>only {% raw %}<span class="math inline">\(\pm\sqrt\mu\)</span>{% endraw %} minimize the risk. At zero, {% raw %}<span class="math inline">\(L&#x27;&#x27;(0)=-4\mu&lt;0\)</span>{% endraw %} and the excess risk is {% raw %}<span class="math inline">\(\mu^2\)</span>{% endraw %}. The observation-level derivative {% raw %}<span class="math inline">\(4\theta(\theta^2-Y)\)</span>{% endraw %} is identically zero at {% raw %}<span class="math inline">\(\theta=0\)</span>{% endraw %}. A test based solely on this derivative has no information with which to exclude zero.</p>

<p>The risk difference has a simpler form. For a benchmark {% raw %}<span class="math inline">\(b\)</span>{% endraw %} fixed by {% raw %}<span class="math inline">\(\mathcal F_1\)</span>{% endraw %},</p>

{% raw %}<span id="eq:ppi-quartic-pair"></span><div class="math display">\[
D_\theta(Y)=(\theta^2-b^2)(\theta^2+b^2-2Y),
\qquad
D_\theta-D_\theta^f=-2(\theta^2-b^2)\{Y-f(X)\}.

\tag{13}\]</div>{% endraw %}
<p>The squared outcomes cancel when the two losses are subtracted. If {% raw %}<span class="math inline">\(\mathbb{E}[f(X)^2]&lt;\infty\)</span>{% endraw %}, the paired difference can therefore be estimated using the corrected mean</p>

{% raw %}<div class="math display">\[
\widehat\mu^{\mathrm{PP}}\triangleq
\frac1{N_2}\sum_{j\in\mathcal U_2}f(\widetilde X_j)
+\frac1n\sum_i\{Y_i-f(X_i)\}.
\]</div>{% endraw %}
<p>Substitution into <a href="#eq:ppi-paired-difference">the paired estimator</a> yields</p>

{% raw %}<div class="math display">\[
\widehat d(\theta)=(\theta^2-b^2)(\theta^2+b^2-2\widehat\mu^{\mathrm{PP}}),
\]</div>{% endraw %}
<p>and</p>

{% raw %}<span id="eq:ppi-quartic-variance"></span><div class="math display">\[
\operatorname{Var}(\widehat d(\theta)\mid\mathcal F_1)
=4(\theta^2-b^2)^2
\left\{\frac{\operatorname{Var}(Y-f(X))}{n}
+\frac{\operatorname{Var}(f(X))}{N_2}\right\}.

\tag{14}\]</div>{% endraw %}
<p>Thus second moments suffice for the paired variance, even though a variance calculation for each separate squared loss can require fourth moments.</p>

<p>A confidence interval for {% raw %}<span class="math inline">\(\mu\)</span>{% endraw %} also gives a lower bound for every risk difference. Suppose {% raw %}<span class="math inline">\([a,u]\)</span>{% endraw %} covers {% raw %}<span class="math inline">\(\mu\)</span>{% endraw %} with conditional probability at least {% raw %}<span class="math inline">\(1-\alpha\)</span>{% endraw %}, and put {% raw %}<span class="math inline">\(c_\theta\triangleq\theta^2-b^2\)</span>{% endraw %}. Minimizing {% raw %}<span class="math inline">\(c_\theta(\theta^2+b^2-2m)\)</span>{% endraw %} over {% raw %}<span class="math inline">\(m\in[a,u]\)</span>{% endraw %} gives</p>

{% raw %}<span id="eq:ppi-quartic-lower"></span><div class="math display">\[
\underline d(\theta)=
\begin{cases}
 c_\theta(\theta^2+b^2-2u),&amp;c_\theta\ge0,\\
 c_\theta(\theta^2+b^2-2a),&amp;c_\theta&lt;0.
\end{cases}

\tag{15}\]</div>{% endraw %}
<p>On the single event {% raw %}<span class="math inline">\(\mu\in[a,u]\)</span>{% endraw %}, this bound is valid for all {% raw %}<span class="math inline">\(\theta\)</span>{% endraw %}. The set {% raw %}<span class="math inline">\(\{\theta:\underline d(\theta)\le0\}\)</span>{% endraw %} consequently contains both population minimizers on that event. The normal mean interval from the <a href="{% post_url 2024-01-27-prediction-powered-inference %}">companion post</a>, computed with the evaluation sample size {% raw %}<span class="math inline">\(N_2\)</span>{% endraw %}, supplies asymptotic coverage under its stated moment and variance conditions. The deterministic implication remains valid for any benchmark selected independently of these evaluation observations.</p>

<p>For a benchmark with {% raw %}<span class="math inline">\(b^2=\mu\)</span>{% endraw %}, the lower bound at zero is {% raw %}<span class="math inline">\(\mu(2a-\mu)\)</span>{% endraw %}. If the mean interval shrinks to {% raw %}<span class="math inline">\(\mu\)</span>{% endraw %}, this converges to the positive risk gap {% raw %}<span class="math inline">\(\mu^2\)</span>{% endraw %}, so zero is eventually excluded with probability approaching one. The comparison can therefore distinguish a global minimizer from a stationary point whose score is identically zero.</p>

<p>All sets above are defined over {% raw %}<span class="math inline">\(\Theta\)</span>{% endraw %}. An approximate benchmark preserves the inequality {% raw %}<span class="math inline">\(L(\theta^*)\le L(b)\)</span>{% endraw %} used in the proof. Approximating the confidence set requires separate care: an implementation should return a set containing all parameter values accepted by the defining inequality, or establish a bound on the numerical approximation error.</p>

<div id="refs" class="references csl-bib-body hanging-indent" data-entry-spacing="0" role="list">
<div id="ref-angelopoulos_prediction-powered_2023" class="csl-entry" role="listitem">
Angelopoulos, Anastasios N., Stephen Bates, Clara Fannjiang, Michael I. Jordan, and Tijana Zrnic. 2023. <span>“Prediction-Powered Inference.”</span> arXiv. <a href="http://arxiv.org/abs/2301.09633">http://arxiv.org/abs/2301.09633</a>.
</div>
</div>

<nav class="note-series" aria-label="Notes in this series"><p>Previous: <a href="{% post_url 2024-01-27-prediction-powered-inference %}">Prediction-Powered Inference</a></p></nav>

</div>
