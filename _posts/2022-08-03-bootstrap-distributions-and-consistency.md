---
layout: "post"
title: "Bootstrap Distributions and Consistency"
date: "2022-08-03"
tags: ["statistics", "resampling"]
excerpt: "Conditional bootstrap distributions, quantile consistency, random parameter substitution, and local power under contiguity."
note_series: "Bootstrap and subsampling"
note_source: "assets/notes/Overleaf Projects (32 items)/Bootstrapping, Subsampling/stats.tex"
redirect_from: ["/2023/03/04/bootstrap-distributions-and-conditional-convergence/", "/2023/03/04/bootstrap-distributions-and-consistency/", "/2023/03/23/bootstrap/", "/2023/04/12/asymptotic-behaviour/"]
---

<div class="note-content" markdown="0">
<div data-note-section="title" id="setup-and-terminology">
</div>
<p>The bootstrap estimates a statistic’s sampling distribution by sampling from an estimated population. Its validity requires the estimated and true sampling laws to approach the same limit. This note states that requirement, derives quantile and coverage consequences, and applies contiguity to the local power of a parametric-bootstrap test.</p>

<p>Let {% raw %}<span class="math inline">\(X_1,X_2,\ldots\)</span>{% endraw %} be i.i.d. with law {% raw %}<span class="math inline">\(P\in\mathcal P\)</span>{% endraw %}, and write {% raw %}<span class="math inline">\(X^n=(X_1,\ldots,X_n)\)</span>{% endraw %}. The target is a functional {% raw %}<span class="math inline">\(\theta(P)\)</span>{% endraw %} with range</p>


{% raw %}<div class="math display">\[\begin{aligned}
    \Theta = \{ \theta(P) : P \in \mathcal P \}
\end{aligned}\]</div>{% endraw %}

<p>A root {% raw %}<span class="math inline">\(R_n(X^n,\theta(P))\)</span>{% endraw %} is a real-valued statistic depending on the sample and the target. Its distribution determines the cutoffs used for inference. When defined, the plug-in estimator is {% raw %}<span class="math inline">\(\widehat\theta_n=\theta(\widehat P_n)\)</span>{% endraw %}, where</p>


{% raw %}<div class="math display">\[\begin{aligned}
    \hat P_n (E) = \frac1n \sum_{1 \leq i \leq n} \mathbb 1 \{X_i \in E\}
\end{aligned}\]</div>{% endraw %}
<p>is the empirical probability measure. The functional must be defined at the empirical measure for this particular plug-in construction.</p>

<p>Write {% raw %}<span class="math inline">\(J_n(P)\)</span>{% endraw %} for the law of the root under the sample law {% raw %}<span class="math inline">\(P^{\otimes n}\)</span>{% endraw %}, and define its cdf by</p>


{% raw %}<div class="math display">\[\begin{aligned}
    J_n (x, P) = P(R_n (X^n, \theta(P)) \leq x)
\end{aligned}\]</div>{% endraw %}
<p>Quantiles of this cdf calibrate confidence regions. The notation {% raw %}<span class="math inline">\(P(R_n\le x)\)</span>{% endraw %} in the display denotes probability under the entire i.i.d. sample law.</p>

<p>If {% raw %}<span class="math inline">\(J_n(P)\)</span>{% endraw %} is the same for every {% raw %}<span class="math inline">\(P\in\mathcal P\)</span>{% endraw %}, the root is a pivot. Choose constants {% raw %}<span class="math inline">\(a,b\)</span>{% endraw %} such that</p>



{% raw %}<div class="math display">\[\begin{aligned}
    P( a \leq R_n (X^n, \theta(P)) \leq b ) \geq 1 - \alpha ~.
\end{aligned}\]</div>{% endraw %}
<p> Therefore, the confidence region </p>

{% raw %}<div class="math display">\[\begin{aligned}
    C_n = \{ \theta \in \Theta : a \leq R_n (X^n, \theta) \leq b \} 
\end{aligned}\]</div>{% endraw %}
<p> contains {% raw %}<span class="math inline">\(\theta(P)\)</span>{% endraw %} with probability at least {% raw %}<span class="math inline">\(1-\alpha\)</span>{% endraw %} under {% raw %}<span class="math inline">\(P\)</span>{% endraw %}.</p>
<div class="remark" data-note-kind="Remark" data-note-number="1" id="result-1"><p><strong>Remark 1.</strong> A pivot’s distribution need not have a closed form. Its independence from the unknown population nevertheless allows calibration from a single law, analytically or by simulation.</p>
</div>
<p>A root is asymptotically pivotal if {% raw %}<span class="math inline">\(J_n(P)\)</span>{% endraw %} converges to a common law independent of {% raw %}<span class="math inline">\(P\)</span>{% endraw %}. This can permit asymptotic calibration even when the finite-sample distribution depends on {% raw %}<span class="math inline">\(P\)</span>{% endraw %}.</p>

<p>A limiting law can also depend on unknown features of {% raw %}<span class="math inline">\(P\)</span>{% endraw %}. For example, if {% raw %}<span class="math inline">\(\theta(P)=E_PX\)</span>{% endraw %} and {% raw %}<span class="math inline">\(0&lt;\sigma^2(P)=\operatorname{Var}_P(X)&lt;\infty\)</span>{% endraw %}, then {% raw %}<span class="math inline">\(\sqrt n(\overline X_n-\theta(P))\Rightarrow\mathcal{N}(0,\sigma^2(P))\)</span>{% endraw %}. A consistent variance estimate permits normal calibration. The bootstrap estimates the distribution itself.</p>

<h2 id="bootstrap">1. Conditional distributions and confidence regions</h2>
<p>Conditional on {% raw %}<span class="math inline">\(X^n\)</span>{% endraw %}, draw an i.i.d. sample {% raw %}<span class="math inline">\(X^{n*}\)</span>{% endraw %} from an estimated population {% raw %}<span class="math inline">\(\widehat P_n\)</span>{% endraw %}. The conditional distribution of {% raw %}<span class="math inline">\(R_n(X^{n*},\theta(\widehat P_n))\)</span>{% endraw %} is {% raw %}<span class="math inline">\(J_n(\widehat P_n)\)</span>{% endraw %}. It is a random probability measure because {% raw %}<span class="math inline">\(\widehat P_n\)</span>{% endraw %} depends on the data. Consistency concerns its distance from the true sampling law {% raw %}<span class="math inline">\(J_n(P)\)</span>{% endraw %} as {% raw %}<span class="math inline">\(n\)</span>{% endraw %} grows.</p>

<p>For any cdf {% raw %}<span class="math inline">\(H\)</span>{% endraw %} and {% raw %}<span class="math inline">\(0&lt;u&lt;1\)</span>{% endraw %}, the generalized quantile</p>

{% raw %}<div class="math display">\[H^{-1}(u)=\inf\{x:H(x)\ge u\}\]</div>{% endraw %}
<p>is well defined and finite. Neither continuity nor strict increase is required. Right continuity gives {% raw %}<span class="math inline">\(H(H^{-1}(u))\ge u\)</span>{% endraw %}, while {% raw %}<span class="math inline">\(H(H^{-1}(u)-)\le u\)</span>{% endraw %}. In particular, with {% raw %}<span class="math inline">\(q=J_n^{-1}(1-\alpha,P)\)</span>{% endraw %},</p>
{% raw %}<div class="math display">\[P\{R_n(X^n,\theta(P))\le q\}=J_n(q,P)\ge1-\alpha.\]</div>{% endraw %}
<p>Equality holds if the cdf is continuous at {% raw %}<span class="math inline">\(q\)</span>{% endraw %}; an atom there may make the inequality strict. Thus the known-law confidence region is {% raw %}<span class="math inline">\(\{\theta\in\Theta:R_n(X^n,\theta)\le q\}\)</span>{% endraw %}. The bootstrap replaces the unknown population quantile by the same generalized inverse of the conditional bootstrap cdf:</p>
{% raw %}<div class="math display">\[J_n^{-1}(1-\alpha,\hat P_n)=\inf\{x:J_n(x,\hat P_n)\ge1-\alpha\}.\]</div>{% endraw %}
<p>This defines the bootstrap confidence region</p>

{% raw %}<span id="eq:bootstrap-confidence-region"></span><div class="math display">\[\begin{aligned}
 
    B_n (1-\alpha, X^n) \triangleq \{ \theta \in \Theta : R_n (X^n, \theta) \leq J_n^{-1} (1-\alpha, \hat P_n) \} ~.
\end{aligned}\tag{1}\]</div>{% endraw %}
<div class="remark" data-note-kind="Remark" data-note-number="2" id="result-2"><p><strong>Remark 2 (Monte Carlo approximation).</strong> To approximate {% raw %}<span class="math inline">\(J_n(\widehat P_n)\)</span>{% endraw %}, generate {% raw %}<span class="math inline">\(K_n\)</span>{% endraw %} conditionally independent bootstrap samples and compute their roots. Their empirical cdf estimates the conditional bootstrap cdf. For the empirical population, each sample consists of {% raw %}<span class="math inline">\(n\)</span>{% endraw %} draws with replacement from the observed data. For a fitted parametric population, draws come from the fitted model. The sampling-distribution approximation and its Monte Carlo approximation are separate steps.</p>
</div>
<h2 id="asymptotic-behaviour">2. Sequential consistency and quantiles</h2>
<p>A statement holding only at each fixed population does not justify substitution of a random estimated population. The following proposition assumes convergence along a class of deterministic population sequences containing the estimated sequence almost surely. This yields a pathwise argument. The parametric result below uses convergence in probability and local tightness instead.</p>

<div class="proposition" data-note-kind="Proposition" data-note-number="3" id="prop:bootstrap-consistency"><p><strong>Proposition 3 (Sequential bootstrap consistency).</strong> Fix {% raw %}<span class="math inline">\(P\)</span>{% endraw %}. Let {% raw %}<span class="math inline">\(\mathcal S_P\)</span>{% endraw %} be a class of deterministic sequences {% raw %}<span class="math inline">\((Q_n)\)</span>{% endraw %} of probability laws, containing the constant sequence {% raw %}<span class="math inline">\(Q_n=P\)</span>{% endraw %}. Suppose {% raw %}<span class="math inline">\(J_n(Q_n)\Rightarrow J(P)\)</span>{% endraw %} for every {% raw %}<span class="math inline">\((Q_n)\in\mathcal S_P\)</span>{% endraw %}, where {% raw %}<span class="math inline">\(J(P)\)</span>{% endraw %} has continuous cdf {% raw %}<span class="math inline">\(J(\cdot,P)\)</span>{% endraw %}. Let the estimated populations be defined on the common sample probability space, and suppose {% raw %}<span class="math inline">\((\widehat P_n)\in\mathcal S_P\)</span>{% endraw %} almost surely. Then {% raw %}<span id="eq:bootstrap-strongly-consistent"></span><span class="math display">\[
\sup_x|J_n(x,\widehat P_n)-J_n(x,P)|\to0\quad\text{almost surely}.\tag{2}
\]</span>{% endraw %} For {% raw %}<span class="math inline">\(q=J^{-1}(1-\alpha,P)\)</span>{% endraw %}, assume also {% raw %}<span class="math inline">\(J(q-\varepsilon,P)&lt;1-\alpha&lt;J(q+\varepsilon,P)\)</span>{% endraw %} for every {% raw %}<span class="math inline">\(\varepsilon&gt;0\)</span>{% endraw %}. Then {% raw %}<span id="eq:bootstrap-quantile-consistent"></span><span class="math display">\[
J_n^{-1}(1-\alpha,\widehat P_n)\to q\quad\text{almost surely},\tag{3}
\]</span>{% endraw %} and the confidence region in (1) satisfies {% raw %}<span id="eq:bootstrap-weakly-consistent"></span><span class="math display">\[
P^{\otimes n}\{\theta(P)\in B_n(1-\alpha,X^n)\}\to1-\alpha.\tag{4}
\]</span>{% endraw %}</p>
</div>
<div class="proof">
<p><em>Proof.</em> On every sample path with {% raw %}<span class="math inline">\((\widehat P_n)\in\mathcal S_P\)</span>{% endraw %}, sequential convergence gives {% raw %}<span class="math inline">\(J_n(\widehat P_n)\Rightarrow J(P)\)</span>{% endraw %}. To pass from weak to uniform cdf convergence, let {% raw %}<span class="math inline">\(H_n\Rightarrow H\)</span>{% endraw %} with {% raw %}<span class="math inline">\(H\)</span>{% endraw %} continuous. For {% raw %}<span class="math inline">\(\eta&gt;0\)</span>{% endraw %}, choose a finite grid {% raw %}<span class="math inline">\(a=x_0&lt;\cdots&lt;x_m=b\)</span>{% endraw %} with both tail probabilities below {% raw %}<span class="math inline">\(\eta\)</span>{% endraw %} and every increment of {% raw %}<span class="math inline">\(H\)</span>{% endraw %} at most {% raw %}<span class="math inline">\(\eta\)</span>{% endraw %}. Eventually {% raw %}<span class="math inline">\(\max_j|H_n(x_j)-H(x_j)|&lt;\eta\)</span>{% endraw %}. Monotonicity then bounds {% raw %}<span class="math inline">\(|H_n-H|\)</span>{% endraw %} by {% raw %}<span class="math inline">\(2\eta\)</span>{% endraw %} between grid points and in the tails. Apply this to the estimated sequence and the constant sequence {% raw %}<span class="math inline">\(P\)</span>{% endraw %}, and use the triangle inequality to obtain (2).</p>
<p>The strict quantile condition and uniform convergence give, eventually on each such sample path, {% raw %}<span class="math display">\[
J_n(q-\varepsilon,\widehat P_n)&lt;1-\alpha&lt;J_n(q+\varepsilon,\widehat P_n).
\]</span>{% endraw %} The definition of the generalized inverse traps {% raw %}<span class="math inline">\(Q_n=J_n^{-1}(1-\alpha,\widehat P_n)\)</span>{% endraw %} between these endpoints, proving (3). Write {% raw %}<span class="math inline">\(R_n=R_n(X^n,\theta(P))\)</span>{% endraw %}. Without any independence assumption, {% raw %}<span class="math display">\[
\begin{aligned}
P(R_n\le q-\varepsilon)-P(|Q_n-q|&gt;\varepsilon)
&amp;\le P(R_n\le Q_n)\\
&amp;\le P(R_n\le q+\varepsilon)+P(|Q_n-q|&gt;\varepsilon).
\end{aligned}
\]</span>{% endraw %} Continuity and the quantile inequalities imply {% raw %}<span class="math inline">\(J(q,P)=1-\alpha\)</span>{% endraw %}. Let {% raw %}<span class="math inline">\(n\to\infty\)</span>{% endraw %} and then {% raw %}<span class="math inline">\(\varepsilon\downarrow0\)</span>{% endraw %} to obtain (4). {% raw %}<span class="math inline">\(\square\)</span>{% endraw %}</p>
</div>

<h2 id="bootstrap-parametric">3. Parametric bootstrap distributions</h2><p>For the parametric bootstrap, fit {% raw %}<span class="math inline">\(P_{\widehat\theta_n}\)</span>{% endraw %} and recompute the estimator in an independent sample drawn from that fitted law. Assume QMD at an interior {% raw %}<span class="math inline">\(\theta\)</span>{% endraw %}, positive definite information, and a differentiable scalar target {% raw %}<span class="math inline">\(g\)</span>{% endraw %}. Write {% raw %}<span class="math inline">\(\dot g(\theta)\)</span>{% endraw %} as a row vector, and assume it is nonzero. For an efficient regular estimator, consider the root</p>


{% raw %}<div class="math display">\[\begin{aligned}
    R_n (X^n, \theta) = \sqrt{n} (g(\hat \theta_n) - g(\theta)) ~.
\end{aligned}\]</div>{% endraw %}
<p>Let {% raw %}<span class="math inline">\(J_n(x,\theta)\)</span>{% endraw %} denote its sampling cdf. The efficient regular limit and the delta method give</p>


{% raw %}<div class="math display">\[\begin{aligned}
    J_n (x, \theta) \to J(x, \theta) = \Phi \left( \frac{x}{\sigma_\theta} \right) ~,~ \text{where } \sigma_\theta^2 \triangleq \dot g(\theta) I(\theta)^{-1} \dot g(\theta)^{\top} ~.
\end{aligned}\]</div>{% endraw %}
<p>If {% raw %}<span class="math inline">\(\dot g\)</span>{% endraw %} and {% raw %}<span class="math inline">\(I\)</span>{% endraw %} are continuous at {% raw %}<span class="math inline">\(\theta\)</span>{% endraw %}, consistency of {% raw %}<span class="math inline">\(\widehat\theta_n\)</span>{% endraw %} and nonsingularity of {% raw %}<span class="math inline">\(I(\theta)\)</span>{% endraw %} imply consistency of the plug-in variance estimate</p>


{% raw %}<div class="math display">\[\begin{aligned}
    \hat \sigma_n^2 = \dot g(\hat \theta_n) I(\hat \theta_n)^{-1} \dot g(\hat \theta_n)^{\top} ~.
\end{aligned}\]</div>{% endraw %}
<p>Variance consistency alone does not establish bootstrap consistency. The required sampling-law condition is stated next.</p>

<p>The local condition used below is stronger than a pointwise normal approximation: for every deterministic sequence {% raw %}<span class="math inline">\(h_n\to h\in\mathbb R^d\)</span>{% endraw %}, with {% raw %}<span class="math inline">\(\theta_n=\theta+h_n/\sqrt n\)</span>{% endraw %} in the model, assume</p>
{% raw %}<div class="math display">\[\sqrt n\{g(\hat\theta_n)-g(\theta_n)\}\ \rightsquigarrow\ \mathcal{N}(0,\sigma_\theta^2)\quad\text{under }P_{\theta_n}^n.\]</div>{% endraw %}
<p>Assume also {% raw %}<span class="math inline">\(\sqrt n(\widehat\theta_n-\theta)=O_{P_\theta^{\otimes n}}(1)\)</span>{% endraw %}. For a regular efficient estimator in a QMD model, fixed-direction limits extend to convergent directions by the <a href="{% post_url 2022-01-09-contiguity-change-of-measure-and-m-estimation %}#contiguity-sequential-lan">Hellinger argument</a>. These hypotheses concern the estimator recomputed in a sample from each indicated population.</p>


<div class="proposition" data-note-kind="Proposition" data-note-number="4" id="result-4">
<p><strong>Proposition 4</strong>.  In the parametric bootstrap setup above, under {% raw %}<span class="math inline">\(\theta\)</span>{% endraw %}, {% raw %}<span class="math inline">\(J_n (x, \hat \theta_n)\)</span>{% endraw %} converges uniformly in probability to {% raw %}<span class="math inline">\(J(x,\theta)\)</span>{% endraw %}, i.e. </p>

{% raw %}<div class="math display">\[\begin{aligned}\sup_x |J_n (x,\hat\theta_n) - J (x,\theta)| &amp;\xrightarrow{P} 0 ~, \end{aligned}\]</div><p>and</p>
<div class="math display">\[\begin{aligned}\sup_x |J_n (x, \hat \theta_n) - J_n (x, \theta)| &amp;\xrightarrow{P} 0 ~.\end{aligned}\]</div>{% endraw %}
</div>
<div class="proof"><p><em>Proof.</em> Let {% raw %}<span class="math inline">\(d_n(h)=\sup_x|J_n(x,\theta+h/\sqrt n)-J(x,\theta)|\)</span>{% endraw %}. The sequential local assumption and continuity of the normal cdf imply {% raw %}<span class="math inline">\(d_n(h_n)\to0\)</span>{% endraw %} whenever {% raw %}<span class="math inline">\(h_n\to h\)</span>{% endraw %}. Consequently {% raw %}<span class="math inline">\(\sup_{\|h\|\le M}d_n(h)\to0\)</span>{% endraw %} for every fixed {% raw %}<span class="math inline">\(M\)</span>{% endraw %}, restricting the supremum to parameters in the model: otherwise a violating sequence in this compact ball would have a convergent subsequence. Tightness of {% raw %}<span class="math inline">\(\sqrt n(\hat\theta_n-\theta)\)</span>{% endraw %} now gives {% raw %}<span class="math inline">\(d_n(\sqrt n(\hat\theta_n-\theta))\xrightarrow{P}0\)</span>{% endraw %} in probability. Taking {% raw %}<span class="math inline">\(h=0\)</span>{% endraw %} and applying the triangle inequality proves the second assertion. This argument works in every finite dimension. ◻</p></div>
<p>For {% raw %}<span class="math inline">\(H_n=\sqrt n(\widehat\theta_n-\theta)\)</span>{% endraw %}, the uniform bound on each compact ball gives</p>


{% raw %}<div class="math display">\[P_\theta\{d_n(H_n)&gt;\varepsilon\}\le P_\theta(\|H_n\|&gt;M)+\mathbf1\{\sup_{\|h\|\le M}d_n(h)&gt;\varepsilon\}.\]</div>{% endraw %}

<p>Taking {% raw %}<span class="math inline">\(n\to\infty\)</span>{% endraw %} and then {% raw %}<span class="math inline">\(M\to\infty\)</span>{% endraw %} proves convergence in probability. An almost-sure limit for {% raw %}<span class="math inline">\(H_n\)</span>{% endraw %} is unnecessary.</p>

<p>The quantile argument gives {% raw %}<span class="math inline">\(\widehat q_n=J_n^{-1}(1-\alpha,\widehat\theta_n)\xrightarrow{P_\theta^{\otimes n}}\sigma_\theta z_{1-\alpha}\)</span>{% endraw %} in {% raw %}<span class="math inline">\(P_\theta^{\otimes n}\)</span>{% endraw %}-probability. Hence {% raw %}<span class="math inline">\(g(\widehat\theta_n)-\widehat q_n/\sqrt n\)</span>{% endraw %} is an asymptotic one-sided lower confidence bound. At a null parameter with {% raw %}<span class="math inline">\(g(\theta)=0\)</span>{% endraw %}, rejecting when {% raw %}<span class="math inline">\(\sqrt n g(\widehat\theta_n)&gt;\widehat q_n\)</span>{% endraw %} has rejection probability tending to {% raw %}<span class="math inline">\(\alpha\)</span>{% endraw %}. This is a pointwise statement at that null parameter; uniform size over a composite null requires additional uniform assumptions.</p>

<h2 id="bootstrap-local-power">4. Local power and simulation error</h2>
<div class="proposition" data-note-kind="Proposition" data-note-number="5" id="result-5">
<p><strong>Proposition 5</strong>.  In the parametric bootstrap setup above, with {% raw %}<span class="math inline">\(\theta\)</span>{% endraw %} satisfying {% raw %}<span class="math inline">\(g(\theta)=0\)</span>{% endraw %}, the limiting power of the test that rejects when {% raw %}<span class="math inline">\(\sqrt{n} g(\hat \theta_n) &gt; J_n^{-1} (1-\alpha, \hat \theta_n)\)</span>{% endraw %} against the sequence {% raw %}<span class="math inline">\(\theta_n = \theta + \frac{h}{\sqrt{n}}\)</span>{% endraw %} is characterized by </p>

{% raw %}<div class="math display">\[\begin{aligned}
        P_{\theta_n}^{n} (\sqrt{n} g(\hat \theta_n) &gt; J_n^{-1} (1-\alpha, \hat \theta_n)) \to 1 - \Phi \left( z_{1-\alpha} - \sigma_\theta^{-1} \langle \dot g(\theta)^{\top}, h \rangle \right) ~.
    
\end{aligned}\]</div>{% endraw %}
</div>
<div class="proof">
<p><em>Proof.</em> Put {% raw %}<span class="math inline">\(P_n=P_\theta^{\otimes n}\)</span>{% endraw %} and {% raw %}<span class="math inline">\(Q_{n,h}=P_{\theta+h/\sqrt n}^{\otimes n}\)</span>{% endraw %}. QMD gives {% raw %}<span class="math inline">\(Q_{n,h}\lhd P_n\)</span>{% endraw %}, so {% raw %}<span class="math inline">\(\widehat q_n\xrightarrow{Q_{n,h}}\sigma_\theta z_{1-\alpha}\)</span>{% endraw %} also in {% raw %}<span class="math inline">\(Q_{n,h}\)</span>{% endraw %}-probability. The assumed sequential limit and differentiability of {% raw %}<span class="math inline">\(g\)</span>{% endraw %} give, under {% raw %}<span class="math inline">\(Q_{n,h}\)</span>{% endraw %}, {% raw %}<span class="math display">\[
\sqrt n\{g(\widehat\theta_n)-g(\theta+h/\sqrt n)\}\Rightarrow\mathcal{N}(0,\sigma_\theta^2),\qquad
\sqrt n g(\theta+h/\sqrt n)\to\dot g(\theta)h.
\]</span>{% endraw %} The <a href="{% post_url 2022-04-16-asymptotic-power-relative-efficiency-and-optimal-tests %}#local-power-random-cutoff">random-cutoff lemma</a> therefore yields {% raw %}<span class="math inline">\(1-\Phi(z_{1-\alpha}-\dot g(\theta)h/\sigma_\theta)\)</span>{% endraw %}. The argument also holds along {% raw %}<span class="math inline">\(h_n\to h\)</span>{% endraw %}. {% raw %}<span class="math inline">\(\square\)</span>{% endraw %}</p>
</div>

<div class="lemma" id="bootstrap-monte-carlo-quantiles"><p><strong>Lemma (Simulated quantiles).</strong> Let {% raw %}<span class="math inline">\(\widehat F_n\)</span>{% endraw %} be a conditional cdf, let {% raw %}<span class="math inline">\(u\in(0,1)\)</span>{% endraw %}, and put {% raw %}<span class="math inline">\(q=F^{-1}(u)\)</span>{% endraw %} for a fixed cdf {% raw %}<span class="math inline">\(F\)</span>{% endraw %}. Suppose, for every {% raw %}<span class="math inline">\(\varepsilon&gt;0\)</span>{% endraw %}, {% raw %}<span class="math display">\[
\widehat F_n(q\pm\varepsilon)\xrightarrow{P} F(q\pm\varepsilon)\quad\text{in probability},
\qquad F(q-\varepsilon)&lt;u&lt;F(q+\varepsilon).
\]</span>{% endraw %} For a deterministic number {% raw %}<span class="math inline">\(K_n\to\infty\)</span>{% endraw %} of conditionally independent draws from {% raw %}<span class="math inline">\(\widehat F_n\)</span>{% endraw %}, let {% raw %}<span class="math inline">\(\widehat F_{n,K_n}\)</span>{% endraw %} be the empirical cdf. Then {% raw %}<span class="math inline">\(\widehat F_{n,K_n}^{-1}(u)\xrightarrow{P} q\)</span>{% endraw %} in joint probability over data and simulation.</p>
</div>
<p><em>Proof.</em> At each fixed {% raw %}<span class="math inline">\(x\)</span>{% endraw %}, the conditional variance of {% raw %}<span class="math inline">\(\widehat F_{n,K_n}(x)-\widehat F_n(x)\)</span>{% endraw %} is at most {% raw %}<span class="math inline">\(1/(4K_n)\)</span>{% endraw %}. Conditional Chebyshev followed by expectation makes this difference vanish in probability. Apply this at {% raw %}<span class="math inline">\(q-\varepsilon\)</span>{% endraw %} and {% raw %}<span class="math inline">\(q+\varepsilon\)</span>{% endraw %}. With probability tending to one the two simulated cdf values lie on opposite sides of {% raw %}<span class="math inline">\(u\)</span>{% endraw %}, which traps the simulated quantile between the endpoints. {% raw %}<span class="math inline">\(\square\)</span>{% endraw %}</p>
<p>The common-randomization lemma in the <a href="{% post_url 2023-03-25-randomization-tests-invariance-ties-and-validity %}#randomization-kernel-contiguity">randomization note</a> transfers this simulated-quantile convergence to local alternatives. Thus Proposition 5 also applies when {% raw %}<span class="math inline">\(K_n\to\infty\)</span>{% endraw %}. The proof gives no vanishing Monte Carlo error for a fixed number of replicates.</p>

<div class="remark" data-note-kind="Remark" data-note-number="6" id="result-6"><p><strong>Remark 6.</strong> Bootstrap calibration preserves the first-order local power determined by the underlying estimator and its variance. Estimating the sampling law accurately does not remove an efficiency loss in that estimator.</p>
</div>
<nav aria-label="Notes in this series" class="note-series"><p>Next: <a href="{% post_url 2022-09-29-bootstrapping-the-mean-and-coverage-accuracy %}">Bootstrapping the Mean and Coverage Accuracy</a></p></nav>
</div>
