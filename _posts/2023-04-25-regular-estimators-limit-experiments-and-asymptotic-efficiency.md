---
layout: "post"
title: "Regular Estimators, Limit Experiments, and Asymptotic Efficiency"
date: "2023-04-25"
tags: ["statistics", "asymptotic theory"]
excerpt: "Regularity under local alternatives, Gaussian limit experiments, convolution bounds, and the additional conditions needed for risk comparisons."
note_series: "Local asymptotic normality and efficiency"
note_source: "assets/notes/Overleaf Projects (32 items)/Asymptotic Normality and Efficiency (Chapters 7 and 8)/main.tex"
redirect_from: ["/2023/04/25/asymptotic-efficiency-and-regular-estimators/", "/2023/06/17/statistical-experiments-and-limit-experiments/"]
---

<div class="note-content" markdown="0">
<p>Let {% raw %}<span class="math inline">\(P_\theta^{\otimes n}\)</span>{% endraw %} be an i.i.d. experiment with {% raw %}<span class="math inline">\(\theta\)</span>{% endraw %} interior to an open subset of {% raw %}<span class="math inline">\(\mathbb R^k\)</span>{% endraw %}. Assume QMD at {% raw %}<span class="math inline">\(\theta\)</span>{% endraw %} and positive definite information {% raw %}<span class="math inline">\(I_\theta\)</span>{% endraw %}. The target is a differentiable map {% raw %}<span class="math inline">\(\varphi:\Theta\to\mathbb R^m\)</span>{% endraw %}, with derivative {% raw %}<span class="math inline">\(A=\varphi'_\theta\)</span>{% endraw %}. The <a href="{% post_url 2023-03-04-local-asymptotic-normality %}">LAN expansion</a> and <a href="{% post_url 2022-01-09-contiguity-change-of-measure-and-m-estimation %}#08-0-le-cam-third">change-of-measure formula</a> determine which limiting estimator distributions are possible under {% raw %}<span class="math inline">\(\theta+h/\sqrt n\)</span>{% endraw %}.</p><p>Likelihood ratios below mean derivatives of the absolutely continuous parts of the alternative laws. QMD makes their singular masses vanish, as proved in the <a href="{% post_url 2022-01-09-contiguity-change-of-measure-and-m-estimation %}#08-0-qmd-to-lan">contiguity note</a>.</p>


<div data-note-section="title" id="basics-of-asymptotic-efficiency">
</div>
<p>Regularity requires the centered limiting distribution to be unchanged by each fixed local displacement {% raw %}<span class="math inline">\(h\)</span>{% endraw %}. Under this restriction, the convolution theorem represents the limit as the efficient Gaussian law plus independent error. The covariance bound follows when second moments exist. Statements about risks require a specified loss and, for risk convergence, additional integrability.</p>

<p>Pointwise convergence of {% raw %}<span class="math inline">\(\sqrt n(T_n-\varphi(\theta))\)</span>{% endraw %} at every fixed parameter does not imply regularity. Hodges’ estimator illustrates the difference: its limiting error improves at one parameter while its risk deteriorates along parameters approaching that point.</p>

<p>For a limiting error law {% raw %}<span class="math inline">\(L_\theta\)</span>{% endraw %} and a nonnegative loss {% raw %}<span class="math inline">\(\ell\)</span>{% endraw %}, the limiting-law risk is {% raw %}<span class="math inline">\(\int\ell\,dL_\theta\)</span>{% endraw %}. This integral need not equal the limit of the finite-sample risks. The distinction is relevant even when the weak limit is normal.</p>

<h2 id="efficiency-pointwise">Pointwise limits and local regularity</h2>
<div class="example" data-note-kind="Example" data-note-number="1" id="Example:Hodge">
<p><strong>Example 1</strong> (Hodges' estimator). Suppose {% raw %}<span class="math inline">\(\sqrt n(T_n-\theta)\Rightarrow L_\theta\)</span>{% endraw %} at every fixed real {% raw %}<span class="math inline">\(\theta\)</span>{% endraw %}, and set</p>
{% raw %}<div class="math display">\[S_n=T_n\mathbf1\{|T_n|\ge n^{-1/4}\}.\]</div>{% endraw %}
<p>For {% raw %}<span class="math inline">\(\theta\ne0\)</span>{% endraw %}, consistency gives {% raw %}<span class="math inline">\(P_\theta(S_n=T_n)\to1\)</span>{% endraw %}, so {% raw %}<span class="math inline">\(\sqrt n(S_n-\theta)\Rightarrow L_\theta\)</span>{% endraw %}. At {% raw %}<span class="math inline">\(\theta=0\)</span>{% endraw %}, tightness of {% raw %}<span class="math inline">\(\sqrt nT_n\)</span>{% endraw %} gives {% raw %}<span class="math inline">\(P_0(|T_n|\ge n^{-1/4})\to0\)</span>{% endraw %}. Consequently, for every deterministic scalar sequence {% raw %}<span class="math inline">\(r_n\)</span>{% endraw %}, {% raw %}<span class="math inline">\(r_nS_n\xrightarrow{P}0\)</span>{% endraw %}, since the probability that it is nonzero tends to zero.</p>
<p>The improvement at zero can come at a large cost nearby. In the normal mean model {% raw %}<span class="math inline">\(X_i\sim\mathcal{N}(\theta,1)\)</span>{% endraw %}, take {% raw %}<span class="math inline">\(T_n=\overline X_n\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\theta_n=\frac12n^{-1/4}\)</span>{% endraw %}. The sampling error is {% raw %}<span class="math inline">\(O_P(n^{-1/2})\)</span>{% endraw %}, so {% raw %}<span class="math inline">\(P_{\theta_n}(S_n=0)\to1\)</span>{% endraw %}, and</p>
{% raw %}<div class="math display">\[n\mathbb{E}_{\theta_n}(S_n-\theta_n)^2\ge n\theta_n^2P_{\theta_n}(S_n=0)\sim\frac{\sqrt n}{4}\longrightarrow\infty.\]</div>{% endraw %}
<p>Pointwise limits therefore conceal deterioration at parameter values that approach zero with the sample size.</p>
</div>
<p>For two asymptotically normal procedures, relative efficiency compares the sample sizes needed for the same limiting precision. Suppose, at a fixed parameter,</p>
<span id="Eq:Requirement1"></span>
{% raw %}<div class="math display">\[\sqrt n(T_{n,j}-\varphi(\theta))\Rightarrow\mathcal{N}(0,\sigma_j^2(\theta)),\qquad j=1,2,\quad0&lt;\sigma_j^2(\theta)&lt;\infty.\tag{1}\]</div>{% endraw %}
<p>Choose deterministic sample sizes {% raw %}<span class="math inline">\(n_{k,j}\)</span>{% endraw %} satisfying {% raw %}<span class="math inline">\(n_{k,j}/k\to\sigma_j^2(\theta)\)</span>{% endraw %}. Then both procedures have the same precision on the common scale:</p>
<span id="Eq:Requirement2"></span>
{% raw %}<div class="math display">\[\sqrt k(T_{n_{k,j},j}-\varphi(\theta))
=\sqrt{\frac{k}{n_{k,j}}}\sqrt{n_{k,j}}(T_{n_{k,j},j}-\varphi(\theta))\Rightarrow\mathcal{N}(0,1).\tag{2}\]</div>{% endraw %}
<div class="definition" data-note-kind="Definition" data-note-number="2" id="Def:relative_efficiency">
<p><strong>Definition 2.</strong> The asymptotic relative efficiency of procedure 1 with respect to procedure 2 is the ratio of the sample size required by procedure 2 to that required by procedure 1:</p>
<span id="Eq:Relative_Efficiency"></span>
{% raw %}<div class="math display">\[\lim_{k\to\infty}\frac{n_{k,2}}{n_{k,1}}=\frac{\sigma_2^2(\theta)}{\sigma_1^2(\theta)}.\tag{3}\]</div>{% endraw %}
<p>Under this convention, a value greater than one favors procedure 1. The ratio generally depends on the parameter.</p>
</div>
<h2 id="statistical-experiments">Gaussian representation of local limits</h2>
<p>The deterioration in Example 1 motivates comparison along local alternatives. For each {% raw %}<span class="math inline">\(h\)</span>{% endraw %}, the centering must use the target at {% raw %}<span class="math inline">\(\theta+h/\sqrt n\)</span>{% endraw %}.</p>

<p>Suppose that under {% raw %}<span class="math inline">\(P_{\theta+h/\sqrt n}^{\otimes n}\)</span>{% endraw %}, for every fixed {% raw %}<span class="math inline">\(h\in\mathbb R^k\)</span>{% endraw %},</p>


{% raw %}<span id="Eq:Experiment_Limiting_Behaviour"></span><div class="math display">\[\begin{aligned}
    
    \sqrt{n} \left( T_n - \varphi\left( \theta  + \frac{h}{\sqrt{n}} \right) \right) \xrightarrow{\rm d} L_{\theta, h} \qquad \forall h \in \mathop{\mathrm{\mathbf{R}}}^k
\end{aligned}\tag{4}\]</div>{% endraw %}
<p> Assume differentiability of the map {% raw %}<span class="math inline">\(\theta \mapsto \varphi(\theta)\)</span>{% endraw %}, and fix the definition {% raw %}<span class="math inline">\(\varphi: \Theta \to \mathop{\mathrm{\mathbf{R}}}^m\)</span>{% endraw %} for some open subset {% raw %}<span class="math inline">\(\Theta \subset \mathop{\mathrm{\mathbf{R}}}^k\)</span>{% endraw %}.</p>
<div class="theorem" data-note-kind="Theorem" data-note-number="3" id="Thm:Lower_Bound_Experiments">
<p><strong>Theorem 3</strong> (Lower Bound).  Let the collection of experiments {% raw %}<span class="math inline">\((P_{\theta} : \theta \in \Theta)\)</span>{% endraw %} be differentiable in quadratic mean, i.e. Assumption <a data-reference="Ass:Quadratic_Mean_Diff" data-reference-type="ref" href="{% post_url 2023-03-04-local-asymptotic-normality %}#Ass:Quadratic_Mean_Diff">1</a>. At the fixed parameter {% raw %}<span class="math inline">\(\theta\)</span>{% endraw %}, assume the Fisher information matrix {% raw %}<span class="math inline">\(I_{\theta}\)</span>{% endraw %} is invertible, and {% raw %}<span class="math inline">\(\varphi\)</span>{% endraw %} is differentiable at {% raw %}<span class="math inline">\(\theta\)</span>{% endraw %}. Suppose <a data-reference="Eq:Experiment_Limiting_Behaviour" data-reference-type="eqref" href="#Eq:Experiment_Limiting_Behaviour">(4)</a> holds for all {% raw %}<span class="math inline">\(h \in \mathop{\mathrm{\mathbf{R}}}^k\)</span>{% endraw %}. Then, there exists a randomized statistic {% raw %}<span class="math inline">\(T\)</span>{% endraw %} in the experiments {% raw %}<span class="math inline">\((\mathcal{N}(h,I_{\theta}^{-1}): h\in\mathbb R^k)\)</span>{% endraw %} such that {% raw %}<span class="math inline">\((T-\varphi'_{\theta} h)\)</span>{% endraw %} has distribution {% raw %}<span class="math inline">\(L_{\theta,h}\)</span>{% endraw %} for all {% raw %}<span class="math inline">\(h \in \mathop{\mathrm{\mathbf{R}}}^k\)</span>{% endraw %}.</p>
</div>
<div class="proof">
<p><em>Proof.</em> Write {% raw %}<span class="math inline">\(A=\varphi'_\theta\)</span>{% endraw %}, {% raw %}<span class="math inline">\(P_{n,h}=P_{\theta+h/\sqrt n}^n\)</span>{% endraw %}, {% raw %}<span class="math inline">\(Z_n=\sqrt n(T_n-\varphi(\theta))\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(\Delta_n=n^{-1/2}\sum_{i=1}^n\ell'_\theta(X_i)\)</span>{% endraw %}. Under {% raw %}<span class="math inline">\(P_{n,0}\)</span>{% endraw %}, both {% raw %}<span class="math inline">\(Z_n\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\Delta_n\)</span>{% endraw %} are tight. Every joint convergent subsequence has a limit {% raw %}<span class="math inline">\((S,\Delta)\)</span>{% endraw %}, with {% raw %}<span class="math inline">\(\Delta\sim\mathcal{N}(0,I_\theta)\)</span>{% endraw %}. LAN gives, for every fixed {% raw %}<span class="math inline">\(h\)</span>{% endraw %},</p>
{% raw %}<div class="math display">\[\log\frac{dP_{n,h}}{dP_{n,0}}=h^\top\Delta_n-\frac12h^\top I_\theta h+o_{P_{n,0}}(1).\]</div>{% endraw %}
<p>The limiting likelihood ratio has expectation one. Le Cam's third lemma therefore gives the limit law of {% raw %}<span class="math inline">\(Z_n\)</span>{% endraw %} under {% raw %}<span class="math inline">\(P_{n,h}\)</span>{% endraw %} as the law of {% raw %}<span class="math inline">\(S\)</span>{% endraw %} under the tilted joint measure with density {% raw %}<span class="math inline">\(\exp(h^\top\Delta-\frac12h^\top I_\theta h)\)</span>{% endraw %}. By differentiability, this is the translate of {% raw %}<span class="math inline">\(L_{\theta,h}\)</span>{% endraw %} by {% raw %}<span class="math inline">\(Ah\)</span>{% endraw %}.</p>
<p>Let {% raw %}<span class="math inline">\(K(\delta,\cdot)\)</span>{% endraw %} be the conditional law of {% raw %}<span class="math inline">\(S\)</span>{% endraw %} given {% raw %}<span class="math inline">\(\Delta=\delta\)</span>{% endraw %}; such a probability kernel exists because both spaces are Euclidean. In the Gaussian experiment observe {% raw %}<span class="math inline">\(X\sim\mathcal{N}(h,I_\theta^{-1})\)</span>{% endraw %}, and draw {% raw %}<span class="math inline">\(T\)</span>{% endraw %} conditionally from {% raw %}<span class="math inline">\(K(I_\theta X,\cdot)\)</span>{% endraw %}. Under {% raw %}<span class="math inline">\(h=0\)</span>{% endraw %}, the pair {% raw %}<span class="math inline">\((T,I_\theta X)\)</span>{% endraw %} has the law of {% raw %}<span class="math inline">\((S,\Delta)\)</span>{% endraw %}. Under general {% raw %}<span class="math inline">\(h\)</span>{% endraw %}, its likelihood ratio relative to the central experiment is</p>
{% raw %}<div class="math display">\[\frac{d\mathcal{N}(h,I_\theta^{-1})}{d\mathcal{N}(0,I_\theta^{-1})}(X)
=\exp(h^\top I_\theta X-\frac12h^\top I_\theta h).\]</div>{% endraw %}
<p>The likelihood factor changes the marginal law of the observed Gaussian coordinate and leaves the conditional kernel unchanged. Thus {% raw %}<span class="math inline">\(T-Ah\)</span>{% endraw %} has law {% raw %}<span class="math inline">\(L_{\theta,h}\)</span>{% endraw %} for every {% raw %}<span class="math inline">\(h\)</span>{% endraw %}. The same joint subsequence supplies one kernel for all fixed alternatives; no separate choice of a kernel for each {% raw %}<span class="math inline">\(h\)</span>{% endraw %} is made. This is also the implication stated in <a href="https://doi.org/10.1017/CBO9780511802256.009">van der Vaart, Theorem 8.3</a>. □</p>
</div>
<div class="definition" data-note-kind="Definition" data-note-number="4" id="Def:Regular">
<p><strong>Definition 4</strong>.  A sequence of estimators {% raw %}<span class="math inline">\((T_n)\)</span>{% endraw %} is <em>regular</em> at {% raw %}<span class="math inline">\(\theta \in \Theta\)</span>{% endraw %} for estimating {% raw %}<span class="math inline">\(\varphi(\theta)\)</span>{% endraw %} if </p>

{% raw %}<div class="math display">\[\sqrt{n} \left( T_n - \varphi\left( \theta + \frac{h}{\sqrt{n}} \right) \right) \xrightarrow[\theta + \frac{h}{\sqrt{n}}]{\rm d} L_{\theta}\]</div>{% endraw %}
<p> for all {% raw %}<span class="math inline">\(h \in \mathop{\mathrm{\mathbf{R}}}^k\)</span>{% endraw %}.</p>
</div>
<p>Regularity requires the law {% raw %}<span class="math inline">\(L_\theta\)</span>{% endraw %} to be the same for every fixed {% raw %}<span class="math inline">\(h\)</span>{% endraw %}. The Gaussian representation theorem then yields an estimator whose centered law is invariant under shifts of the Gaussian experiment. This is equivariance in distribution; it does not require a particular samplewise form for the estimator.</p>

<div class="proposition" id="regular-influence-function">
<p><strong>Proposition (Regular asymptotically linear estimators).</strong> Suppose {% raw %}<span class="math display">\[
\sqrt n\{T_n-\varphi(\theta)\}=\frac1{\sqrt n}\sum_{i=1}^n\psi(X_i)+o_{P_\theta^{\otimes n}}(1),
\qquad E_\theta\psi=0,\quad E_\theta\|\psi\|^2&lt;\infty.
\]</span>{% endraw %} Put {% raw %}<span class="math inline">\(V=E_\theta[\psi\psi^\top]\)</span>{% endraw %} and {% raw %}<span class="math inline">\(C=E_\theta[\psi\dot\ell_\theta^\top]\)</span>{% endraw %}. Under the local alternative, the centered error has limit {% raw %}<span class="math inline">\(\mathcal{N}_m((C-A)h,V)\)</span>{% endraw %}. The estimator {% raw %}<span class="math inline">\(T_n\)</span>{% endraw %} is regular if and only if {% raw %}<span class="math inline">\(C=A\)</span>{% endraw %}. In that case, {% raw %}<span class="math display">\[
V-AI_\theta^{-1}A^\top
=E_\theta[(\psi-AI_\theta^{-1}\dot\ell_\theta)
(\psi-AI_\theta^{-1}\dot\ell_\theta)^\top]\succeq0.
\]</span>{% endraw %}</p>
</div>
<p><em>Proof.</em> The joint CLT for {% raw %}<span class="math inline">\(\psi\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\dot\ell_\theta\)</span>{% endraw %}, followed by the third lemma, shifts the first component by {% raw %}<span class="math inline">\(Ch\)</span>{% endraw %}. Contiguity transfers the remainder. Differentiability gives {% raw %}<span class="math inline">\(\sqrt n\{\varphi(\theta+h/\sqrt n)-\varphi(\theta)\}\to Ah\)</span>{% endraw %}, yielding the centered limit. Its characteristic function is {% raw %}<span class="math inline">\(\exp\{it^\top(C-A)h-t^\top Vt/2\}\)</span>{% endraw %}. Independence of {% raw %}<span class="math inline">\(h\)</span>{% endraw %} is equivalent to {% raw %}<span class="math inline">\(C=A\)</span>{% endraw %}, even when {% raw %}<span class="math inline">\(V\)</span>{% endraw %} is singular. Expanding the residual second moment and using {% raw %}<span class="math inline">\(C=A\)</span>{% endraw %} proves the matrix identity. Equality holds exactly when {% raw %}<span class="math inline">\(\psi=AI_\theta^{-1}\dot\ell_\theta\)</span>{% endraw %} almost surely. {% raw %}<span class="math inline">\(\square\)</span>{% endraw %}</p>
<p>This proposition proves the covariance comparison directly when an asymptotically linear representation is available. The convolution theorem below covers regular estimators without assuming such a representation.</p>
<h2 id="efficiency-convolution">Convolution and efficiency</h2>
<div class="theorem" data-note-kind="Theorem" data-note-number="5" id="Thm:Convolution">
<p><strong>Theorem 5</strong>.  Let {% raw %}<span class="math inline">\((P_{\theta} : \theta \in \Theta)\)</span>{% endraw %} be differentiable in quadratic mean (i.e. Assumption <a data-reference="Ass:Quadratic_Mean_Diff" data-reference-type="ref" href="{% post_url 2023-03-04-local-asymptotic-normality %}#Ass:Quadratic_Mean_Diff">1</a>) at a point {% raw %}<span class="math inline">\(\theta\)</span>{% endraw %}, where {% raw %}<span class="math inline">\(I_{\theta}\)</span>{% endraw %} is invertible. Let {% raw %}<span class="math inline">\(\varphi\)</span>{% endraw %} be differentiable at {% raw %}<span class="math inline">\(\theta\)</span>{% endraw %}. Let {% raw %}<span class="math inline">\(T_n\)</span>{% endraw %} be a regular estimator sequence in the experiments {% raw %}<span class="math inline">\((P^n_{\theta} : \theta \in \Theta)\)</span>{% endraw %} at {% raw %}<span class="math inline">\(\theta\)</span>{% endraw %}, with limiting distribution {% raw %}<span class="math inline">\(L_{\theta}\)</span>{% endraw %}. Then, there exists a probability measure {% raw %}<span class="math inline">\(M_{\theta}\)</span>{% endraw %} such that {% raw %}<span class="math inline">\(L_{\theta} = \mathcal{N}(0, \varphi'_{\theta} I_{\theta}^{-1} {\varphi'_{\theta}}^\intercal) \ast M_{\theta}\)</span>{% endraw %}. If {% raw %}<span class="math inline">\(L_{\theta}\)</span>{% endraw %} has covariance matrix {% raw %}<span class="math inline">\(\Sigma_{\theta}\)</span>{% endraw %}, then the matrix {% raw %}<span class="math inline">\(\Sigma_{\theta} - \varphi'_{\theta} I_{\theta}^{-1} {\varphi'_{\theta}}^\intercal\)</span>{% endraw %} is nonnegative-definite.</p>
</div><p>In the joint limit with the central sequence, {% raw %}<span class="math inline">\(S=AI^{-1}\Delta+R\)</span>{% endraw %}, where {% raw %}<span class="math inline">\(\Delta\sim\mathcal{N}_k(0,I)\)</span>{% endraw %} and {% raw %}<span class="math inline">\(R\)</span>{% endraw %} is independent of {% raw %}<span class="math inline">\(\Delta\)</span>{% endraw %}. The proof establishes this independence by factorizing their joint characteristic function. When second moments exist, independence yields {% raw %}<span class="math display">\[
\operatorname{Cov}(S)=AI^{-1}A^\top+\operatorname{Cov}(R).
\]</span>{% endraw %} The appendix proves the representation without assuming moments for {% raw %}<span class="math inline">\(S\)</span>{% endraw %}.</p>
<p>The proof is in <a href="#efficiency-appendix-convolution">Appendix A. Joint convolution representation</a>.</p>


<p>Pointwise limits need not be regular at every parameter. The next argument explains why the convolution conclusion nevertheless holds almost everywhere.</p>
<div class="lemma" data-note-kind="Lemma" data-note-number="6" id="Lem:Convolution_AE_Building_Block">
<p><strong>Lemma 6</strong> (Regular Subsequence).  Let {% raw %}<span class="math inline">\(T_n\)</span>{% endraw %} be estimators in the experiments {% raw %}<span class="math inline">\((P_{n,\theta} : \theta \in \Theta)\)</span>{% endraw %} indexed by open {% raw %}<span class="math inline">\(\Theta \subset \mathop{\mathrm{\mathbf{R}}}^k\)</span>{% endraw %}. Assume {% raw %}<span class="math inline">\(\theta \mapsto P_{n,\theta} (A)\)</span>{% endraw %} is measurable for every measurable subset {% raw %}<span class="math inline">\(A\)</span>{% endraw %} and every {% raw %}<span class="math inline">\(n\)</span>{% endraw %}. Assume {% raw %}<span class="math inline">\(\theta \mapsto \varphi(\theta)\)</span>{% endraw %} is measurable. Furthermore, suppose there exist distributions {% raw %}<span class="math inline">\(L_{\theta}\)</span>{% endraw %} such that for Lebesgue a.e. {% raw %}<span class="math inline">\(\theta\)</span>{% endraw %}, the following holds: </p>

{% raw %}<div class="math display">\[\begin{aligned}
        r_n (T_n - \varphi(\theta)) \xrightarrow{\rm d} L_{\theta}
    
\end{aligned}\]</div>{% endraw %}
<p> Then, for every sequence {% raw %}<span class="math inline">\((\tau_n)\)</span>{% endraw %} tending to zero, there exists a subsequence {% raw %}<span class="math inline">\((\tau_{n_k})\)</span>{% endraw %} such that for Lebesgue a.e. {% raw %}<span class="math inline">\((\theta,h)\)</span>{% endraw %}, along the subsequence, </p>

{% raw %}<div class="math display">\[\begin{aligned}
        r_n (T_n - \varphi(\theta + \tau_n h)) \xrightarrow[\theta + \tau_n h]{\rm d} L_{\theta}
    
\end{aligned}\]</div>{% endraw %}
</div><p>The proof is in <a href="#efficiency-appendix-subsequence">Appendix B. A common regular subsequence</a>.</p>



<p>Combining the subsequence lemma with the Gaussian representation yields the almost-everywhere convolution theorem.</p>
<div class="theorem" data-note-kind="Theorem" data-note-number="7" id="Thm:Lower_Bound_Experiments_AE">
<p><strong>Theorem 7.</strong> Suppose the model is differentiable in quadratic mean at every point of an open {% raw %}<span class="math inline">\(\Theta\subset\mathbb R^k\)</span>{% endraw %}, its Fisher information is nonsingular, and {% raw %}<span class="math inline">\(\varphi\)</span>{% endraw %} is differentiable. Assume the parameterized probabilities are measurable and {% raw %}<span class="math inline">\(\sqrt n(T_n-\varphi(\theta))\Rightarrow L_\theta\)</span>{% endraw %} under every fixed {% raw %}<span class="math inline">\(\theta\)</span>{% endraw %}. Then for Lebesgue-almost every {% raw %}<span class="math inline">\(\theta\)</span>{% endraw %},</p>
{% raw %}<div class="math display">\[L_\theta=\mathcal{N}(0,\varphi'_\theta I_\theta^{-1}(\varphi'_\theta)^\top)*M_\theta\]</div>{% endraw %}
<p>for some probability measure {% raw %}<span class="math inline">\(M_\theta\)</span>{% endraw %}. If {% raw %}<span class="math inline">\(L_\theta\)</span>{% endraw %} has finite covariance, its covariance minus the displayed Gaussian covariance is nonnegative definite.</p>
</div><p>The proof is in <a href="#efficiency-appendix-ae">Appendix C. Almost-everywhere convolution</a>.</p>


<p>The convolution theorem bounds regular limits. It does not order all estimators under every loss. The following normal example compares squared-error risk and has a limit depending on the local displacement at the origin.</p>

<h2 id="efficiency-loss">Shrinkage and loss comparisons</h2>
<div class="example" data-note-kind="Example" data-note-number="8" id="result-8">
<p><strong>Example 8 (Stein’s shrinkage estimator).</strong> Let {% raw %}<span class="math inline">\(X_1,\ldots,X_n\)</span>{% endraw %} be i.i.d. {% raw %}<span class="math inline">\(\mathcal{N}_k(\theta,I_k)\)</span>{% endraw %}, with {% raw %}<span class="math inline">\(k\ge3\)</span>{% endraw %}. Consider</p>


{% raw %}<div class="math display">\[\begin{aligned}
        T_n = \overline{X}_n - (k-2) \frac{\overline{X}_n}{n\norm{\overline{X}_n}^2}
    
\end{aligned}\]</div>{% endraw %}
<p> If {% raw %}<span class="math inline">\(\theta \neq 0\)</span>{% endraw %}, then {% raw %}<span class="math inline">\(T_n = \overline{X}_n - (k-2) \frac{\overline{X}_n}{n\norm{\overline{X}_n}^2} =\overline X_n+O_{P_\theta}(n^{-1})\)</span>{% endraw %} by the weak law of large numbers. Therefore, {% raw %}<span class="math inline">\(\sqrt{n} (T_n - \overline{X}_n) \xrightarrow{P} 0\)</span>{% endraw %}, so {% raw %}<span class="math inline">\(T_n\)</span>{% endraw %} is regular for every {% raw %}<span class="math inline">\(\theta \neq 0\)</span>{% endraw %}. For {% raw %}<span class="math inline">\(\theta = \frac{h}{\sqrt{n}}\)</span>{% endraw %}, we have that {% raw %}<span class="math inline">\(\sqrt{n} \overline{X}_n \sim X \sim \mathcal{N}(h,I_k)\)</span>{% endraw %}. Furthermore, the standardized estimator {% raw %}<span class="math inline">\(\sqrt{n} (T_n - \frac{h}{\sqrt{n}}) \sim T-h\)</span>{% endraw %}, with {% raw %}<span class="math inline">\(T(X) = X - (k-2) \frac{X}{\norm{X}^2}\)</span>{% endraw %}. This is <em>Stein’s shrinkage estimator</em>.</p>
<p>At a fixed {% raw %}<span class="math inline">\(\theta\ne0\)</span>{% endraw %}, contiguity transfers the {% raw %}<span class="math inline">\(o_P(1)\)</span>{% endraw %} difference from the sample mean to every local alternative, proving regularity there. At {% raw %}<span class="math inline">\(\theta=0\)</span>{% endraw %}, the law of {% raw %}<span class="math inline">\(T(X)-h\)</span>{% endraw %} depends on {% raw %}<span class="math inline">\(h\)</span>{% endraw %}, so regularity fails.</p>

<p>For every {% raw %}<span class="math inline">\(h\in\mathbb R^k\)</span>{% endraw %}, the squared-error risks satisfy</p>


{% raw %}<div class="math display">\[\mathbb{E}_h \norm{T-h}^2 &lt; \mathbb{E}_h \norm{X-h}^2 = k\]</div>{% endraw %}
<p>Thus the shrinkage estimator has smaller squared-error risk at every local displacement than the sample mean. Its local error law depends on {% raw %}<span class="math inline">\(h\)</span>{% endraw %}, so this comparison does not contradict the convolution theorem for regular estimators.</p>

</div>
<p>The strict risk improvement in Example 8 follows by a direct calculation. For {% raw %}<span class="math inline">\(X\sim \mathcal{N}_k(h,I_k)\)</span>{% endraw %}, write {% raw %}<span class="math inline">\(a=k-2\)</span>{% endraw %} and {% raw %}<span class="math inline">\(b(x)=-ax/\|x\|^2\)</span>{% endraw %}. Gaussian integration by parts gives {% raw %}<span class="math inline">\(E_h[(X-h)^\top b(X)]=E_h\operatorname{div}b(X)\)</span>{% endraw %}. Since</p>

{% raw %}<div class="math display">\[\|b(x)\|^2=\frac{a^2}{\|x\|^2},\qquad\operatorname{div}b(x)=-\frac{a(k-2)}{\|x\|^2},\]</div>{% endraw %}

<p>expanding the squared error yields</p>

{% raw %}<div class="math display">\[E_h\|X+b(X)-h\|^2=k-(k-2)^2 E_h\|X\|^{-2}&lt;k.\]</div>{% endraw %}

<p>The reciprocal-square moment is finite for {% raw %}<span class="math inline">\(k&gt;2\)</span>{% endraw %}: near zero its radial integral is bounded by a constant times {% raw %}<span class="math inline">\(\int_0^1 r^{k-3}\,dr\)</span>{% endraw %}, and outside the unit ball it is bounded by one. Integration by parts can first be performed outside a ball of radius {% raw %}<span class="math inline">\(\varepsilon\)</span>{% endraw %}; its boundary contribution is {% raw %}<span class="math inline">\(O(\varepsilon^{k-2})\)</span>{% endraw %}, which vanishes. The Gaussian tail removes the outer boundary. This proves the strict inequality and explains the dimension restriction.</p>
<p>The comparison must specify both where the risk is measured and which loss is used. The preceding examples raise two restrictions:</p>
<ol>
<li><p>For the Gaussian concentration comparison furnished by the convolution theorem, an improvement in the limiting law can occur only on a Lebesgue-null set of fixed parameters, as evidenced by Theorem <a data-reference="Thm:Lower_Bound_Experiments_AE" data-reference-type="ref" href="#Thm:Lower_Bound_Experiments_AE">7</a>.</p></li>
<li><p>Risk comparisons must specify a loss function; the convolution theorem does not order arbitrary losses or finite-sample risks.</p></li>
</ol>
<p>A local minimax criterion compares the largest risk over a collection of local displacements. Definition 9 uses fixed finite sets of directions; the supremum over those sets is taken after the asymptotic limit. It is distinct from a pointwise risk comparison.</p>

<div class="lemma" id="efficiency-weak-limits-and-risk">
<p><strong>Lemma (Weak limits and risks).</strong> If {% raw %}<span class="math inline">\(Z_n\Rightarrow Z\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\ell\ge0\)</span>{% endraw %} is lower semicontinuous, then {% raw %}<span class="math inline">\(E\ell(Z)\le\liminf_nE\ell(Z_n)\)</span>{% endraw %}. If, additionally, {% raw %}<span class="math inline">\(\ell\)</span>{% endraw %} is continuous {% raw %}<span class="math inline">\(\mathcal L(Z)\)</span>{% endraw %}-almost surely and {% raw %}<span class="math inline">\(\{\ell(Z_n)\}\)</span>{% endraw %} is uniformly integrable, then {% raw %}<span class="math inline">\(E\ell(Z_n)\to E\ell(Z)\)</span>{% endraw %}.</p>
</div>
<p><em>Proof.</em> The first claim is the nonnegative lower-semicontinuous form of portmanteau. For the second, continuous mapping gives {% raw %}<span class="math inline">\(\ell(Z_n)\Rightarrow\ell(Z)\)</span>{% endraw %}. Apply weak convergence to {% raw %}<span class="math inline">\(x\mapsto x\wedge K\)</span>{% endraw %}, then let {% raw %}<span class="math inline">\(K\to\infty\)</span>{% endraw %} using uniform integrability. Fatou’s inequality for the truncated expectations also gives integrability of the limit. {% raw %}<span class="math inline">\(\square\)</span>{% endraw %}</p>
<p>For squared loss, weak convergence alone is insufficient. A variable equal to {% raw %}<span class="math inline">\(n\)</span>{% endraw %} with probability {% raw %}<span class="math inline">\(1/n\)</span>{% endraw %} and zero otherwise converges to zero in probability, while its second moment equals {% raw %}<span class="math inline">\(n\)</span>{% endraw %}. Thus an efficient weak limit does not establish convergence of mean-squared error.</p>
<div class="theorem" id="efficiency-squared-loss-minimax">
<p><strong>Theorem (Local minimax bound for squared loss).</strong> Under the QMD and differentiability conditions above, suppose the target is scalar and {% raw %}<span class="math inline">\(v=AI_\theta^{-1}A^\top&gt;0\)</span>{% endraw %}. For every measurable estimator sequence {% raw %}<span class="math inline">\(T_n\)</span>{% endraw %}, {% raw %}<span class="math display">\[
\sup_{F\subset\mathbb R^k,\,F\text{ finite}}
\liminf_{n\to\infty}\max_{h\in F}
E_{\theta+h/\sqrt n}\!\left[n\{T_n-\varphi(\theta+h/\sqrt n)\}^2\right]\ge v.
\]</span>{% endraw %} An efficient regular sequence attains this bound if its squared local errors are uniformly integrable for each fixed {% raw %}<span class="math inline">\(h\)</span>{% endraw %}.</p>
</div>
<p><em>Remark.</em> In the proof of the lower bound in the <a href="#efficiency-squared-loss-minimax">local minimax theorem for squared loss</a>, regularity of {% raw %}<span class="math inline">\(T_n\)</span>{% endraw %} is not assumed. The attainment statement concerns efficient regular sequences with uniformly integrable squared local errors.</p>
<p>The lower bound is proved in <a href="#efficiency-appendix-minimax">Appendix D</a>. For attainment, the risk lemma gives convergence to {% raw %}<span class="math inline">\(v\)</span>{% endraw %} at each direction; the maximum over any fixed finite set therefore also converges to {% raw %}<span class="math inline">\(v\)</span>{% endraw %}. This establishes the squared-loss case of the criterion below. For other losses, both the Gaussian benchmark and the loss-specific lower bound must be considered.</p>
<div class="definition" data-note-kind="Definition" data-note-number="9" id="Def:local_a_minmax">
<p><strong>Definition 9</strong>.  An estimator sequence {% raw %}<span class="math inline">\((T_n)\)</span>{% endraw %} is <em>locally asymptotically minimax</em> for a given loss function {% raw %}<span class="math inline">\(\ell\)</span>{% endraw %} (for estimating {% raw %}<span class="math inline">\(\varphi(\theta)\)</span>{% endraw %}) if the following holds: </p>

{% raw %}<div class="math display">\[\begin{aligned}
        \sup_{I\subset\mathop{\mathrm{\mathbf{R}}}^k,\;I\text{ finite}} \limsup_{n\to\infty} \sup_{h \in I} \mathbb{E}_{\theta + \frac{h}{\sqrt{n}}} \ell \left( \sqrt{n} \left( T_n - \varphi\left( \theta + \frac{h}{\sqrt{n}} \right) \right) \right) \leqslant\int \ell \dif \mathcal{N}\left( 0, \varphi'_{\theta} I_{\theta}^{-1} {\varphi'_{\theta}}^{\intercal} \right)
    
\end{aligned}\]</div>{% endraw %}
</div>
<div class="proposition" data-note-kind="Proposition" data-note-number="10" id="result-10">
<p><strong>Proposition 10.</strong> Assume the LAN and differentiability conditions of Theorem 5, with a real-valued target and positive efficient variance {% raw %}<span class="math inline">\(v=\varphi'_\theta I_\theta^{-1}(\varphi'_\theta)^\top\)</span>{% endraw %}. Let {% raw %}<span class="math inline">\(T_n\)</span>{% endraw %} be regular. Suppose {% raw %}<span class="math inline">\(\ell\)</span>{% endraw %} is a nonnegative lower-semicontinuous symmetric bowl-shaped loss, nonconstant on {% raw %}<span class="math inline">\((0,\infty)\)</span>{% endraw %}, with {% raw %}<span class="math inline">\(\mathbb{E}\ell(G)&lt;\infty\)</span>{% endraw %} for {% raw %}<span class="math inline">\(G\sim\mathcal{N}(0,v)\)</span>{% endraw %}. If {% raw %}<span class="math inline">\(T_n\)</span>{% endraw %} satisfies Definition 9 for this loss, then its regular limit is {% raw %}<span class="math inline">\(\mathcal{N}(0,v)\)</span>{% endraw %}.</p>
</div>
<div class="proof">
<p><em>Proof.</em> By Theorem 5 the limit is {% raw %}<span class="math inline">\(G+R\)</span>{% endraw %}, with {% raw %}<span class="math inline">\(G\)</span>{% endraw %} and {% raw %}<span class="math inline">\(R\)</span>{% endraw %} independent. The risk condition at the singleton local set {% raw %}<span class="math inline">\(\{0\}\)</span>{% endraw %}, together with the portmanteau inequality, gives {% raw %}<span class="math inline">\(\mathbb{E}\ell(G+R)\le\mathbb{E}\ell(G)\)</span>{% endraw %}. For every nonzero shift {% raw %}<span class="math inline">\(r\)</span>{% endraw %} and every finite {% raw %}<span class="math inline">\(a&gt;0\)</span>{% endraw %}, strict unimodality of the Gaussian density gives {% raw %}<span class="math inline">\(P(|G+r|\le a)&lt;P(|G|\le a)\)</span>{% endraw %}. Integrating these strict inequalities over the sublevel sets of the nonconstant bowl-shaped loss yields {% raw %}<span class="math inline">\(\mathbb{E}\ell(G+r)&gt;\mathbb{E}\ell(G)\)</span>{% endraw %}. Conditioning on {% raw %}<span class="math inline">\(R\)</span>{% endraw %} therefore forces {% raw %}<span class="math inline">\(R=0\)</span>{% endraw %} almost surely.</p>
<p>The scalar, nondegenerate, nonconstant-loss assumptions matter: a constant loss cannot distinguish efficient from inefficient limits, and the scalar interval argument is not a claim of uniqueness of all multivariate minimax procedures. Conversely, an efficient weak limit gives convergence of these risks only with additional control, such as uniform integrability of the losses under the relevant local alternatives. □</p>
</div>
<p>The preceding shrinkage example also warns against identifying pointwise loss improvement with regularity. We next characterize efficient regular estimators by their first-order expansion in the score.</p>
<h2 id="efficiency-linear-representation">Efficient linear representations</h2>
<div class="proposition" data-note-kind="Proposition" data-note-number="11" id="Prop:Criterion_Optimality_Regularity">
<p><strong>Proposition 11</strong>.  Let {% raw %}<span class="math inline">\((P_{\theta} : \theta \in \Theta)\)</span>{% endraw %} be differentiable in quadratic mean (i.e. Assumption <a data-reference="Ass:Quadratic_Mean_Diff" data-reference-type="ref" href="{% post_url 2023-03-04-local-asymptotic-normality %}#Ass:Quadratic_Mean_Diff">1</a>) at a point {% raw %}<span class="math inline">\(\theta\)</span>{% endraw %}, where {% raw %}<span class="math inline">\(I_{\theta}\)</span>{% endraw %} is invertible. Let {% raw %}<span class="math inline">\(\varphi\)</span>{% endraw %} be differentiable at {% raw %}<span class="math inline">\(\theta\)</span>{% endraw %}. Let {% raw %}<span class="math inline">\(T_n\)</span>{% endraw %} be a regular estimator sequence in the experiments {% raw %}<span class="math inline">\((P^n_{\theta} : \theta \in \Theta)\)</span>{% endraw %} at {% raw %}<span class="math inline">\(\theta\)</span>{% endraw %}, such that </p>

{% raw %}<div class="math display">\[\begin{aligned}
        \sqrt{n} (T_n - \varphi(\theta)) = \frac{1}{\sqrt{n}} \sum_{k=1}^{n} \varphi'_{\theta} I_{\theta}^{-1} \ell'_{\theta} (X_k) + o_{\rm P_{\theta}} (1)
    
\end{aligned}\]</div>{% endraw %}
<p> Then, {% raw %}<span class="math inline">\(T_n\)</span>{% endraw %} has the efficient regular limit for {% raw %}<span class="math inline">\(\varphi(\theta)\)</span>{% endraw %} at {% raw %}<span class="math inline">\(\theta\)</span>{% endraw %}. Conversely, every regular estimator sequence with that efficient limit satisfies this expansion.</p>
</div><p>Here “efficient” means that the centered limit is {% raw %}<span class="math inline">\(\mathcal{N}_m(0,AI_\theta^{-1}A^\top)\)</span>{% endraw %}. It is a statement about the limiting distribution. The risk lemma specifies the additional conditions for convergence of losses.</p>

<div class="proof">
<p><em>Proof.</em> Write {% raw %}<span class="math inline">\(\Delta_{n,\theta}=n^{-1/2}\sum_{k=1}^n\ell'_\theta(X_k)\)</span>{% endraw %}. Under {% raw %}<span class="math inline">\(P_\theta^n\)</span>{% endraw %}, the central limit theorem gives {% raw %}<span class="math inline">\(\Delta_{n,\theta}\rightsquigarrow\Delta_\theta\sim \mathcal{N}(0,I_\theta)\)</span>{% endraw %}, and local asymptotic normality gives </p>

{% raw %}<div class="math display">\[\log\frac{dP_{\theta+h/\sqrt n}^n}{dP_\theta^n}=h^\top\Delta_{n,\theta}-\frac12 h^\top I_\theta h+o_{P_\theta}(1).\]</div>{% endraw %}
<p> If the stated asymptotically linear expansion holds, the joint limit of the estimator and log likelihood ratio is </p>

{% raw %}<div class="math display">\[\left(\varphi'_\theta I_\theta^{-1}\Delta_\theta,\;h^\top\Delta_\theta-\frac12h^\top I_\theta h\right).\]</div>{% endraw %}
<p> Its covariance matrix is </p>

{% raw %}<div class="math display">\[\begin{pmatrix}\varphi'_\theta I_\theta^{-1}(\varphi'_\theta)^\top&amp;\varphi'_\theta h\\h^\top(\varphi'_\theta)^\top&amp;h^\top I_\theta h\end{pmatrix}.\]</div>{% endraw %}
<p> Le Cam’s third lemma shifts the estimator’s mean by {% raw %}<span class="math inline">\(\varphi'_\theta h\)</span>{% endraw %} under the local alternative. Differentiability of {% raw %}<span class="math inline">\(\varphi\)</span>{% endraw %} then gives the centered limit {% raw %}<span class="math inline">\(\mathcal{N}(0,\varphi'_\theta I_\theta^{-1}(\varphi'_\theta)^\top)\)</span>{% endraw %}, independently of {% raw %}<span class="math inline">\(h\)</span>{% endraw %}. This is the efficient regular limit.</p>
<p>For the converse, use the equality case of the convolution theorem in the joint limit with the central sequence. A regular limit has the representation {% raw %}<span class="math inline">\(\varphi'_\theta I_\theta^{-1}\Delta_\theta+Z\)</span>{% endraw %}, where {% raw %}<span class="math inline">\(Z\)</span>{% endraw %} is independent of {% raw %}<span class="math inline">\(\Delta_\theta\)</span>{% endraw %}. If the limit is the efficient normal distribution, its characteristic function forces {% raw %}<span class="math inline">\(Z=0\)</span>{% endraw %} almost surely. Applying this to every joint convergent subsequence yields </p>

{% raw %}<div class="math display">\[\sqrt n(T_n-\varphi(\theta))-\varphi'_\theta I_\theta^{-1}\Delta_{n,\theta}\xrightarrow{P_\theta^n}0\quad\text{in }P_\theta^n\text{-probability},\]</div>{% endraw %}
<p> which is the desired expansion. ◻</p>
</div>
<p>Large deviations concern a different scale: for fixed {% raw %}<span class="math inline">\(\varepsilon&gt;0\)</span>{% endraw %}, they bound the exponential rate at which {% raw %}<span class="math inline">\(P_\theta^{\otimes n}\{d(T_n,\varphi(\theta))&gt;\varepsilon\}\)</span>{% endraw %} can decrease. The following likelihood argument gives an upper bound on that rate.</p>

<div>
<h2 id="efficiency-large-deviations">An exponential error bound</h2>
<div class="proposition" data-note-kind="Proposition" data-note-number="12" id="result-12">
<p><strong>Proposition 12</strong>.  Suppose {% raw %}<span class="math inline">\(T_n\)</span>{% endraw %} is based on {% raw %}<span class="math inline">\(n\)</span>{% endraw %} i.i.d. observations and is consistent for {% raw %}<span class="math inline">\(\varphi(\theta)\)</span>{% endraw %} under every {% raw %}<span class="math inline">\(\theta\)</span>{% endraw %}. For a metric {% raw %}<span class="math inline">\(d\)</span>{% endraw %}, every {% raw %}<span class="math inline">\(\varepsilon&gt;0\)</span>{% endraw %}, and fixed {% raw %}<span class="math inline">\(\theta_0\)</span>{% endraw %}, </p>

{% raw %}<div class="math display">\[\limsup_{n\to\infty}-\frac1n\log P_{\theta_0}^n\{d(T_n,\varphi(\theta_0))&gt;\varepsilon\}\leqslant\inf_{\theta:\,d(\varphi(\theta),\varphi(\theta_0))&gt;\varepsilon}D(P_\theta\Vert P_{\theta_0}),\]</div>{% endraw %}
<p> where {% raw %}<span class="math inline">\(D(P\Vert Q)=\int\log(dP/dQ)\,dP\)</span>{% endraw %}, with value {% raw %}<span class="math inline">\(+\infty\)</span>{% endraw %} when appropriate.</p>
</div>
<div class="proof">
<p><em>Proof.</em> Fix an alternative in the infimum with finite divergence {% raw %}<span class="math inline">\(D\)</span>{% endraw %}. Consistency and the strict separation imply that the event {% raw %}<span class="math inline">\(A_n=\{d(T_n,\varphi(\theta_0))&gt;\varepsilon\}\)</span>{% endraw %} has {% raw %}<span class="math inline">\(P_\theta^n\)</span>{% endraw %}-probability tending to one. Under {% raw %}<span class="math inline">\(P_\theta^n\)</span>{% endraw %}, the law of large numbers gives {% raw %}<span class="math inline">\(n^{-1}\log(dP_\theta^n/dP_{\theta_0}^n)\xrightarrow{P_\theta^n} D\)</span>{% endraw %}. Thus, for each {% raw %}<span class="math inline">\(\eta&gt;0\)</span>{% endraw %}, </p>

{% raw %}<div class="math display">\[P_{\theta_0}^n(A_n)\geqslant e^{-n(D+\eta)}P_\theta^n\left(A_n\cap\left\{\log\frac{dP_\theta^n}{dP_{\theta_0}^n}\leqslant n(D+\eta)\right\}\right).\]</div>{% endraw %}
<p> The last probability tends to one. Take logarithms, then let {% raw %}<span class="math inline">\(\eta\downarrow0\)</span>{% endraw %}, and take the infimum over alternatives. ◻</p>
</div>
</div>
<nav aria-label="Related notes" class="note-related"><p>Related notes: <a href="{% post_url 2023-03-04-local-asymptotic-normality %}">Local Asymptotic Normality</a>.</p></nav>
<h2 id="efficiency-appendix-convolution">Appendix A. Joint convolution representation</h2><div class="proof">
<p><em>Proof.</em> Use the joint limit {% raw %}<span class="math inline">\((S,\Delta)\)</span>{% endraw %} constructed above, and put {% raw %}<span class="math inline">\(A=\varphi'_\theta\)</span>{% endraw %}, {% raw %}<span class="math inline">\(I=I_\theta\)</span>{% endraw %}, {% raw %}<span class="math inline">\(V=AI^{-1}A^\top\)</span>{% endraw %}. Regularity and likelihood tilting imply, for every {% raw %}<span class="math inline">\(t\in\mathbb R^m\)</span>{% endraw %} and {% raw %}<span class="math inline">\(h\in\mathbb R^k\)</span>{% endraw %},</p>
{% raw %}<div class="math display">\[\mathbb{E} e^{it^\top S+h^\top\Delta}
=\widehat L_\theta(t)\exp(\frac12h^\top I h+it^\top Ah).\]</div>{% endraw %}
<p>The normal marginal has exponential moments of every linear functional. Thus, for fixed {% raw %}<span class="math inline">\(t\)</span>{% endraw %}, the map {% raw %}<span class="math inline">\(z\mapsto E\exp(it^\top S+z^\top\Delta)\)</span>{% endraw %} is entire on {% raw %}<span class="math inline">\(\mathbb C^k\)</span>{% endraw %}: on each compact set of {% raw %}<span class="math inline">\(z\)</span>{% endraw %}'s, its derivatives are dominated by a polynomial in {% raw %}<span class="math inline">\(\|\Delta\|\)</span>{% endraw %} times {% raw %}<span class="math inline">\(e^{C\|\Delta\|}\)</span>{% endraw %}, which is Gaussian-integrable. Fixing all but one coordinate and using the one-variable identity theorem extends the preceding identity from real {% raw %}<span class="math inline">\(h\)</span>{% endraw %} to complex {% raw %}<span class="math inline">\(z\)</span>{% endraw %}, one coordinate at a time. In particular,</p>

{% raw %}<div class="math display">\[E e^{it^\top S+iv^\top\Delta}=\widehat L_\theta(t)\exp\{-\frac12v^\top Iv-t^\top Av\}.\]</div>{% endraw %}

<p>To compute the law of the residual, substitute {% raw %}<span class="math inline">\(v=u-I^{-1}A^\top t\)</span>{% endraw %}. Expanding the quadratic form cancels the two mixed terms and leaves {% raw %}<span class="math inline">\(-u^\top Iu/2+t^\top AI^{-1}A^\top t/2\)</span>{% endraw %}.</p>
<p>For {% raw %}<span class="math inline">\(R=S-AI^{-1}\Delta\)</span>{% endraw %}, this gives</p>

{% raw %}<div class="math display">\[\mathbb{E} e^{it^\top R+iu^\top\Delta}
=\left[\widehat L_\theta(t)e^{t^\top Vt/2}\right]e^{-u^\top Iu/2}.\]</div>{% endraw %}
<p>The bracket is the characteristic function of {% raw %}<span class="math inline">\(R\)</span>{% endraw %}, obtained by setting {% raw %}<span class="math inline">\(u=0\)</span>{% endraw %}. Thus {% raw %}<span class="math inline">\(R\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\Delta\)</span>{% endraw %} are independent, and {% raw %}<span class="math inline">\(S=AI^{-1}\Delta+R\)</span>{% endraw %}. This proves the convolution assertion, including its joint form. If {% raw %}<span class="math inline">\(S\)</span>{% endraw %} has a finite covariance, so does {% raw %}<span class="math inline">\(R\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(\operatorname{Cov}(S)=V+\operatorname{Cov}(R)\)</span>{% endraw %}. □</p>
</div><h2 id="efficiency-appendix-subsequence">Appendix B. A common regular subsequence</h2><div class="proof">
<p><em>Proof.</em> Choose a countable family of bounded continuous functions that determines weak convergence. For one such test function {% raw %}<span class="math inline">\(f\)</span>{% endraw %}, put {% raw %}<span class="math inline">\(g_n(\theta)=\mathbb{E}_\theta f(r_n(T_n-\varphi(\theta)))\)</span>{% endraw %} and {% raw %}<span class="math inline">\(g(\theta)=\int f\,dL_\theta\)</span>{% endraw %}. These functions are measurable and uniformly bounded, and {% raw %}<span class="math inline">\(g_n\to g\)</span>{% endraw %} almost everywhere. Extend both by zero outside the open parameter set.</p>
<p>Let {% raw %}<span class="math inline">\(V,H\)</span>{% endraw %} be independent standard Gaussian vectors, and let {% raw %}<span class="math inline">\(p_n\)</span>{% endraw %} and {% raw %}<span class="math inline">\(p\)</span>{% endraw %} be the densities of {% raw %}<span class="math inline">\(V+\tau_nH\)</span>{% endraw %} and {% raw %}<span class="math inline">\(V\)</span>{% endraw %}. Then {% raw %}<span class="math inline">\(\|p_n-p\|_1\to0\)</span>{% endraw %}. If {% raw %}<span class="math inline">\(|g_n|,|g|\le C\)</span>{% endraw %},</p>
{% raw %}<div class="math display">\[\mathbb{E}|g_n(V+\tau_nH)-g(V+\tau_nH)|
\le\int|g_n-g|p+2C\|p_n-p\|_1\longrightarrow0.\]</div>{% endraw %}
<p>Approximate {% raw %}<span class="math inline">\(g\)</span>{% endraw %} by a bounded continuous function {% raw %}<span class="math inline">\(g_\epsilon\)</span>{% endraw %} in {% raw %}<span class="math inline">\(L^1(p)\)</span>{% endraw %}. The same density comparison and dominated convergence give</p>
{% raw %}<div class="math display">\[\limsup_n\mathbb{E}|g(V+\tau_nH)-g(V)|\le2\int|g-g_\epsilon|p.\]</div>{% endraw %}
<p>Letting the approximation error tend to zero proves {% raw %}<span class="math inline">\(g_n(V+\tau_nH)\to g(V)\)</span>{% endraw %} in {% raw %}<span class="math inline">\(L^1\)</span>{% endraw %}. Normalize the determining functions to be bounded by one, and let {% raw %}<span class="math inline">\(e_{n,j}\)</span>{% endraw %} be the expected absolute error for function {% raw %}<span class="math inline">\(j\)</span>{% endraw %}. Choose {% raw %}<span class="math inline">\(n_k&gt;n_{k-1}\)</span>{% endraw %} so that {% raw %}<span class="math inline">\(\sum_{j\le k}e_{n_k,j}\le2^{-k}\)</span>{% endraw %}. For each fixed {% raw %}<span class="math inline">\(j\)</span>{% endraw %}, Tonelli’s theorem makes the sum of its nonnegative random errors finite almost surely; hence those errors converge to zero. Intersect over the countable family. The everywhere positive joint Gaussian density makes the exceptional set Lebesgue-null. Finally, for each {% raw %}<span class="math inline">\(\theta\)</span>{% endraw %} in the open parameter set, {% raw %}<span class="math inline">\(\theta+\tau_nh\)</span>{% endraw %} is eventually inside it. {% raw %}<span class="math inline">\(\square\)</span>{% endraw %}</p>

</div><h2 id="efficiency-appendix-ae">Appendix C. Almost-everywhere convolution</h2><div class="proof">
<p><em>Proof.</em> Apply Lemma 6 with {% raw %}<span class="math inline">\(r_n=\sqrt n\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\tau_n=n^{-1/2}\)</span>{% endraw %}. At almost every {% raw %}<span class="math inline">\(\theta\)</span>{% endraw %}, the local centered limit along its subsequence is {% raw %}<span class="math inline">\(L_\theta\)</span>{% endraw %} for almost every {% raw %}<span class="math inline">\(h\)</span>{% endraw %}. Extract a further joint limit with the central sequence and use the proof of Theorem 3. For each bounded continuous test function, the expectation in the tilted Gaussian experiment is continuous in {% raw %}<span class="math inline">\(h\)</span>{% endraw %}: Gaussian likelihood ratios are continuous in {% raw %}<span class="math inline">\(L^1\)</span>{% endraw %}, and the centering {% raw %}<span class="math inline">\(\varphi'_\theta h\)</span>{% endraw %} is continuous. Equality on almost every {% raw %}<span class="math inline">\(h\)</span>{% endraw %} therefore extends to every {% raw %}<span class="math inline">\(h\)</span>{% endraw %}. The joint convolution argument of Theorem 5 applies. This is the statement of <a href="https://doi.org/10.1017/CBO9780511802256.009">van der Vaart, Theorem 8.9</a>. □</p>
</div><h2 id="efficiency-appendix-minimax">Appendix D. A squared-error local minimax bound</h2><p>The argument first reduces the original experiment to a finite collection of Gaussian shifts, then constructs finite priors whose Gaussian Bayes risks approach {% raw %}<span class="math inline">\(v\)</span>{% endraw %}.</p>
<p>Fix directions {% raw %}<span class="math inline">\(h_1,\ldots,h_J\)</span>{% endraw %} and positive prior weights {% raw %}<span class="math inline">\(\pi_j\)</span>{% endraw %} summing to one. Put {% raw %}<span class="math inline">\(a_{n,j}=\sqrt n\{\varphi(\theta+h_j/\sqrt n)-\varphi(\theta)\}\to a_j=Ah_j\)</span>{% endraw %}, and let {% raw %}<span class="math inline">\(L_{n,j}\)</span>{% endraw %} be the absolutely continuous likelihood ratios relative to {% raw %}<span class="math inline">\(P_\theta^{\otimes n}\)</span>{% endraw %}. Set {% raw %}<span class="math inline">\(Z_n=\sqrt n(T_n-\varphi(\theta))\)</span>{% endraw %}. Discarding the nonnegative contributions on singular sets gives {% raw %}<span class="math display">\[
\begin{aligned}
\max_j E_{\theta+h_j/\sqrt n}(Z_n-a_{n,j})^2
&amp;\ge E_\theta\sum_j\pi_jL_{n,j}(Z_n-a_{n,j})^2\\
&amp;\ge E_\theta b(L_n,a_n),
\end{aligned}
\]</span>{% endraw %} where minimizing a weighted quadratic gives {% raw %}<span class="math display">\[
b(l,a)=\sum_j\pi_jl_ja_j^2-
\frac{(\sum_j\pi_jl_ja_j)^2}{\sum_j\pi_jl_j}.
\]</span>{% endraw %} Set {% raw %}<span class="math inline">\(b(0,a)=0\)</span>{% endraw %}. Cauchy–Schwarz makes {% raw %}<span class="math inline">\(b\)</span>{% endraw %} nonnegative, and {% raw %}<span class="math inline">\(0\le b(l,a)\le\sum_j\pi_jl_ja_j^2\)</span>{% endraw %} makes it continuous also at {% raw %}<span class="math inline">\(l=0\)</span>{% endraw %}.</p>
<p>Joint LAN gives {% raw %}<span class="math inline">\(L_n\Rightarrow L\)</span>{% endraw %}, where {% raw %}<span class="math inline">\(L_j=\exp(h_j^\top\Delta-h_j^\top I_\theta h_j/2)\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\Delta\sim\mathcal{N}_k(0,I_\theta)\)</span>{% endraw %}. Portmanteau applied to the nonnegative continuous function {% raw %}<span class="math inline">\(b\)</span>{% endraw %} yields {% raw %}<span class="math display">\[
\liminf_n\max_j E_{\theta+h_j/\sqrt n}(Z_n-a_{n,j})^2
\ge E b(L,a).
\]</span>{% endraw %} The right side is the Bayes risk for estimating {% raw %}<span class="math inline">\(Ah\)</span>{% endraw %} from {% raw %}<span class="math inline">\(X\sim\mathcal{N}_k(h,I_\theta^{-1})\)</span>{% endraw %} under the finite prior {% raw %}<span class="math inline">\(\pi\)</span>{% endraw %}. This follows from the same pointwise quadratic minimization; its minimizer is the posterior mean.</p>
<p>It remains to make these finite-prior risks approach {% raw %}<span class="math inline">\(v\)</span>{% endraw %}. Restrict to directions {% raw %}<span class="math inline">\(h=I_\theta^{-1}A^\top t/v\)</span>{% endraw %}. Then {% raw %}<span class="math inline">\(Ah=t\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(Y=AX\sim\mathcal{N}(t,v)\)</span>{% endraw %}. The residual {% raw %}<span class="math inline">\(X-I_\theta^{-1}A^\top Y/v\)</span>{% endraw %} has mean zero and is independent of {% raw %}<span class="math inline">\(Y\)</span>{% endraw %}, with law independent of {% raw %}<span class="math inline">\(t\)</span>{% endraw %}. Thus it supplies no additional information about {% raw %}<span class="math inline">\(t\)</span>{% endraw %}. Under a normal prior {% raw %}<span class="math inline">\(t\sim\mathcal{N}(0,\tau^2)\)</span>{% endraw %}, completing the square in the prior times likelihood gives posterior variance {% raw %}<span class="math display">\[
v_\tau=\frac{v\tau^2}{v+\tau^2}\uparrow v.
\]</span>{% endraw %}</p>
<p>To replace this prior by finite priors, truncate {% raw %}<span class="math inline">\(t\)</span>{% endraw %} to {% raw %}<span class="math inline">\([-m,m]\)</span>{% endraw %} and round to a grid of mesh {% raw %}<span class="math inline">\(1/m\)</span>{% endraw %}, obtaining {% raw %}<span class="math inline">\(t_m\to t\)</span>{% endraw %} in {% raw %}<span class="math inline">\(L^2\)</span>{% endraw %}. For the {% raw %}<span class="math inline">\(\mathcal{N}(0,v)\)</span>{% endraw %} density {% raw %}<span class="math inline">\(\gamma_v\)</span>{% endraw %}, define {% raw %}<span class="math display">\[
p_m(y)=E\gamma_v(y-t_m),\quad
u_m(y)=E[t_m\gamma_v(y-t_m)],\quad
s_m(y)=E[t_m^2\gamma_v(y-t_m)].
\]</span>{% endraw %} Dominated convergence gives pointwise convergence to {% raw %}<span class="math inline">\(p,u,s\)</span>{% endraw %}, since {% raw %}<span class="math inline">\(|t_m|\le|t|+1\)</span>{% endraw %} and the normal density is bounded. Also {% raw %}<span class="math inline">\(\int s_m=Et_m^2\to Et^2=\int s\)</span>{% endraw %}, so Scheffé’s argument gives {% raw %}<span class="math inline">\(s_m\to s\)</span>{% endraw %} in {% raw %}<span class="math inline">\(L^1\)</span>{% endraw %}. Because {% raw %}<span class="math inline">\(0\le u_m^2/p_m\le s_m\)</span>{% endraw %} and {% raw %}<span class="math inline">\(p&gt;0\)</span>{% endraw %}, generalized dominated convergence gives {% raw %}<span class="math display">\[
Et_m^2-\int\frac{u_m(y)^2}{p_m(y)}\,dy
\longrightarrow Et^2-\int\frac{u(y)^2}{p(y)}\,dy=v_\tau.
\]</span>{% endraw %} These are precisely the Bayes risks under the finite priors and the normal prior. The supremum of the finite-direction lower bounds is therefore at least {% raw %}<span class="math inline">\(v_\tau\)</span>{% endraw %}. Let {% raw %}<span class="math inline">\(\tau\to\infty\)</span>{% endraw %} to prove the theorem. The attainment statement follows from regularity and uniform integrability as explained in the main text. {% raw %}<span class="math inline">\(\square\)</span>{% endraw %}</p>
<nav aria-label="Notes in this series" class="note-series"><p>Previous: <a href="{% post_url 2023-03-04-local-asymptotic-normality %}">Local Asymptotic Normality</a></p></nav>
</div>
