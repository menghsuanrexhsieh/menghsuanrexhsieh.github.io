---
layout: "post"
title: "Regular Estimators, Limit Experiments, and Asymptotic Efficiency"
date: "2023-04-25"
tags: ["statistics", "asymptotic theory"]
excerpt: "One way to circumvent descriptions of best or most optimal is to look at two facts:"
note_series: "Local asymptotic normality and efficiency"
note_source: "assets/notes/Overleaf Projects (32 items)/Asymptotic Normality and Efficiency (Chapters 7 and 8)/main.tex"
redirect_from: ["/2023/04/25/asymptotic-efficiency-and-regular-estimators/", "/2023/06/17/statistical-experiments-and-limit-experiments/"]
---

<div class="note-content" markdown="0">

<p>Consider a parametric experiment {% raw %}<span class="math inline">\((P_\theta^n)\)</span>{% endraw %} near a fixed {% raw %}<span class="math inline">\(\theta\)</span>{% endraw %}. Local alternatives have the form {% raw %}<span class="math inline">\(\theta+h/\sqrt n\)</span>{% endraw %}; {% raw %}<span class="math inline">\(I_\theta\)</span>{% endraw %} is the Fisher information. The likelihood expansion is proved in <a href="{% post_url 2023-03-04-local-asymptotic-normality %}">local asymptotic normality</a>, and the change-of-measure argument uses <a href="{% post_url 2022-05-07-contiguity-change-of-measure-and-m-estimation %}">contiguity</a>.</p>

<div id="basics-of-asymptotic-efficiency" data-note-section="title">

</div>
<p>A likelihood expansion tells us what a sample can distinguish locally. We now ask what this implies for estimation. Suppose we want to estimate a parameter {% raw %}<span class="math inline">\(\varphi(\theta)\)</span>{% endraw %} based on observations from a model governed by the parameter {% raw %}<span class="math inline">\(\theta\)</span>{% endraw %}. We seek a lower bound on the asymptotic error of an estimator sequence {% raw %}<span class="math inline">\((T_n)\)</span>{% endraw %} for {% raw %}<span class="math inline">\(\varphi(\theta)\)</span>{% endraw %}.</p>

<p>To simplify the situation, we investigate the case where the sequence {% raw %}<span class="math inline">\(\sqrt{n} (T_n - \varphi(\theta))\)</span>{% endraw %} converges in distribution under every possible value of {% raw %}<span class="math inline">\(\theta\)</span>{% endraw %}. This reduces the comparison to limit distributions, but pointwise limits can hide poor behavior at nearby parameter values. In analogy with the Cramér-Rao theorem, a “best” limiting distribution is referred to as an asymptotic lower bound. Under certain restrictions the normal distribution with mean zero and covariance the inverse Fisher information is an asymptotic lower bound for estimating {% raw %}<span class="math inline">\(\varphi(\theta) = \theta\)</span>{% endraw %} in a smooth parametric model. The qualification is essential: the next example improves the limit at a single parameter by changing the estimator on a shrinking neighborhood.</p>

<p>A loss function gives one way to compare limiting errors. For instance, a limiting distribution is “good” if discrepancies of the type {% raw %}<span class="math inline">\(\int \ell \dif L_{\theta}\)</span>{% endraw %} are small (where {% raw %}<span class="math inline">\(\ell\)</span>{% endraw %} is some loss function, and {% raw %}<span class="math inline">\(L_{\theta}\)</span>{% endraw %} is the limiting distribution). Such a comparison depends on the loss. A distributional lower bound can support several loss comparisons at once, under the appropriate assumptions.</p>

<div id="Example:Hodge" class="example" data-note-number="1" data-note-kind="Example">
<p><strong>Example 1</strong> (Hodges' estimator). Suppose {% raw %}<span class="math inline">\(\sqrt n(T_n-\theta)\Rightarrow L_\theta\)</span>{% endraw %} at every fixed real {% raw %}<span class="math inline">\(\theta\)</span>{% endraw %}, and set</p>
{% raw %}<div class="math display">\[S_n=T_n\mathbf1\{|T_n|\ge n^{-1/4}\}.\]</div>{% endraw %}
<p>For {% raw %}<span class="math inline">\(\theta\ne0\)</span>{% endraw %}, consistency gives {% raw %}<span class="math inline">\(\Pr_\theta(S_n=T_n)\to1\)</span>{% endraw %}, so {% raw %}<span class="math inline">\(\sqrt n(S_n-\theta)\Rightarrow L_\theta\)</span>{% endraw %}. At {% raw %}<span class="math inline">\(\theta=0\)</span>{% endraw %}, tightness of {% raw %}<span class="math inline">\(\sqrt nT_n\)</span>{% endraw %} gives {% raw %}<span class="math inline">\(\Pr_0(|T_n|\ge n^{-1/4})\to0\)</span>{% endraw %}. Consequently, for every deterministic scalar sequence {% raw %}<span class="math inline">\(r_n\)</span>{% endraw %}, {% raw %}<span class="math inline">\(r_nS_n\to_P0\)</span>{% endraw %}, since the probability that it is nonzero tends to zero.</p>
<p>The improvement at zero can come at a large cost nearby. In the normal mean model {% raw %}<span class="math inline">\(X_i\sim\mathcal{N}(\theta,1)\)</span>{% endraw %}, take {% raw %}<span class="math inline">\(T_n=\overline X_n\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\theta_n=\frac12n^{-1/4}\)</span>{% endraw %}. The sampling error is {% raw %}<span class="math inline">\(O_P(n^{-1/2})\)</span>{% endraw %}, so {% raw %}<span class="math inline">\(\Pr_{\theta_n}(S_n=0)\to1\)</span>{% endraw %}, and</p>
{% raw %}<div class="math display">\[n\mathbb{E}_{\theta_n}(S_n-\theta_n)^2\ge n\theta_n^2\Pr_{\theta_n}(S_n=0)\sim\frac{\sqrt n}{4}\longrightarrow\infty.\]</div>{% endraw %}
<p>Pointwise limits therefore conceal deterioration at parameter values that approach zero with the sample size.</p>
</div>
<p>For two asymptotically normal procedures, relative efficiency compares the sample sizes needed for the same limiting precision. Suppose, at a fixed parameter,</p>
<span id="Eq:Requirement1"></span>
{% raw %}<div class="math display">\[\sqrt n(T_{n,j}-\varphi(\theta))\Rightarrow\mathcal{N}(0,\sigma_j^2(\theta)),\qquad j=1,2,\quad0&lt;\sigma_j^2(\theta)&lt;\infty.\tag{1}\]</div>{% endraw %}
<p>Choose deterministic sample sizes {% raw %}<span class="math inline">\(n_{k,j}\)</span>{% endraw %} satisfying {% raw %}<span class="math inline">\(n_{k,j}/k\to\sigma_j^2(\theta)\)</span>{% endraw %}. Then both procedures have the same precision on the common scale:</p>
<span id="Eq:Requirement2"></span>
{% raw %}<div class="math display">\[\sqrt k(T_{n_{k,j},j}-\varphi(\theta))
=\sqrt{\frac{k}{n_{k,j}}}\sqrt{n_{k,j}}(T_{n_{k,j},j}-\varphi(\theta))\Rightarrow\mathcal{N}(0,1).\tag{2}\]</div>{% endraw %}
<div id="Def:relative_efficiency" class="definition" data-note-number="2" data-note-kind="Definition">
<p><strong>Definition 2.</strong> The asymptotic relative efficiency of procedure 1 with respect to procedure 2 is the ratio of the sample size required by procedure 2 to that required by procedure 1:</p>
<span id="Eq:Relative_Efficiency"></span>
{% raw %}<div class="math display">\[\lim_{k\to\infty}\frac{n_{k,2}}{n_{k,1}}=\frac{\sigma_2^2(\theta)}{\sigma_1^2(\theta)}.\tag{3}\]</div>{% endraw %}
<p>Under this convention, a value greater than one favors procedure 1. The ratio generally depends on the parameter.</p>
</div>

<h3 data-note-section="1" id="statistical-experiments">1. Statistical Experiments</h3>
<p>Clearly, by Example <a href="#Example:Hodge" data-reference-type="ref" data-reference="Example:Hodge">1</a>, it is not enough to consider pointwise behaviour of statistical experiments, even for every {% raw %}<span class="math inline">\(\theta\)</span>{% endraw %}. The first step we can take is to describe the local behaviour of estimators for some fixed {% raw %}<span class="math inline">\(\theta\)</span>{% endraw %}, i.e. vary only by small “distances” away from the fixed parameter. The displacement will have the same order as the estimator’s usual sampling error.</p>

<p>For fixed {% raw %}<span class="math inline">\(\theta\)</span>{% endraw %}, let us look at {% raw %}<span class="math inline">\(\theta + \frac{h}{\sqrt{n}}\)</span>{% endraw %} for {% raw %}<span class="math inline">\(h\)</span>{% endraw %} ranging over {% raw %}<span class="math inline">\(\mathop{\mathrm{\mathbf{R}}}^k\)</span>{% endraw %}. Suppose that for certain limiting distributions {% raw %}<span class="math inline">\(L_{\theta,h}\)</span>{% endraw %}, </p>

{% raw %}<span id="Eq:Experiment_Limiting_Behaviour"></span><div class="math display">\[\begin{aligned}
    
    \sqrt{n} \left( T_n - \varphi\left( \theta  + \frac{h}{\sqrt{n}} \right) \right) \xrightarrow{\rm d} L_{\theta, h} \qquad \forall h \in \mathop{\mathrm{\mathbf{R}}}^k
\end{aligned}\tag{4}\]</div>{% endraw %}
<p> Assume differentiability of the map {% raw %}<span class="math inline">\(\theta \mapsto \varphi(\theta)\)</span>{% endraw %}, and fix the definition {% raw %}<span class="math inline">\(\varphi: \Theta \to \mathop{\mathrm{\mathbf{R}}}^m\)</span>{% endraw %} for some open subset {% raw %}<span class="math inline">\(\Theta \subset \mathop{\mathrm{\mathbf{R}}}^k\)</span>{% endraw %}.</p>

<div id="Thm:Lower_Bound_Experiments" class="theorem" data-note-number="3" data-note-kind="Theorem">
<p><strong>Theorem 3</strong> (Lower Bound).  Let the collection of experiments {% raw %}<span class="math inline">\((P_{\theta} : \theta \in \Theta)\)</span>{% endraw %} be differentiable in quadratic mean, i.e. Definition <a href="{% post_url 2023-03-04-local-asymptotic-normality %}#Ass:Quadratic_Mean_Diff" data-reference-type="ref" data-reference="Ass:Quadratic_Mean_Diff">1</a>. At the fixed parameter {% raw %}<span class="math inline">\(\theta\)</span>{% endraw %}, assume the Fisher information matrix {% raw %}<span class="math inline">\(I_{\theta}\)</span>{% endraw %} is invertible, and {% raw %}<span class="math inline">\(\varphi\)</span>{% endraw %} is differentiable at {% raw %}<span class="math inline">\(\theta\)</span>{% endraw %}. Suppose <a href="#Eq:Experiment_Limiting_Behaviour" data-reference-type="eqref" data-reference="Eq:Experiment_Limiting_Behaviour">(4)</a> holds for all {% raw %}<span class="math inline">\(h \in \mathop{\mathrm{\mathbf{R}}}^k\)</span>{% endraw %}. Then, there exists a randomized statistic {% raw %}<span class="math inline">\(T\)</span>{% endraw %} in the experiments {% raw %}<span class="math inline">\((\mathcal{N}(h,I_{\theta}^{-1}): h\in\mathbb R^k)\)</span>{% endraw %} such that {% raw %}<span class="math inline">\((T-\varphi&#x27;_{\theta} h)\)</span>{% endraw %} has distribution {% raw %}<span class="math inline">\(L_{\theta,h}\)</span>{% endraw %} for all {% raw %}<span class="math inline">\(h \in \mathop{\mathrm{\mathbf{R}}}^k\)</span>{% endraw %}.</p>

</div>
<div class="proof">
<p><em>Proof.</em> Write {% raw %}<span class="math inline">\(A=\varphi'_\theta\)</span>{% endraw %}, {% raw %}<span class="math inline">\(P_{n,h}=P_{\theta+h/\sqrt n}^n\)</span>{% endraw %}, {% raw %}<span class="math inline">\(Z_n=\sqrt n(T_n-\varphi(\theta))\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(\Delta_n=n^{-1/2}\sum_{i=1}^n\ell'_\theta(X_i)\)</span>{% endraw %}. Under {% raw %}<span class="math inline">\(P_{n,0}\)</span>{% endraw %}, both {% raw %}<span class="math inline">\(Z_n\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\Delta_n\)</span>{% endraw %} are tight. Every joint convergent subsequence has a limit {% raw %}<span class="math inline">\((S,\Delta)\)</span>{% endraw %}, with {% raw %}<span class="math inline">\(\Delta\sim\mathcal{N}(0,I_\theta)\)</span>{% endraw %}. LAN gives, for every fixed {% raw %}<span class="math inline">\(h\)</span>{% endraw %},</p>
{% raw %}<div class="math display">\[\log\frac{dP_{n,h}}{dP_{n,0}}=h^\top\Delta_n-\frac12h^\top I_\theta h+o_{P_{n,0}}(1).\]</div>{% endraw %}
<p>The limiting likelihood ratio has expectation one. Le Cam's third lemma therefore gives the limit law of {% raw %}<span class="math inline">\(Z_n\)</span>{% endraw %} under {% raw %}<span class="math inline">\(P_{n,h}\)</span>{% endraw %} as the law of {% raw %}<span class="math inline">\(S\)</span>{% endraw %} under the tilted joint measure with density {% raw %}<span class="math inline">\(\exp(h^\top\Delta-\frac12h^\top I_\theta h)\)</span>{% endraw %}. By differentiability, this is the translate of {% raw %}<span class="math inline">\(L_{\theta,h}\)</span>{% endraw %} by {% raw %}<span class="math inline">\(Ah\)</span>{% endraw %}.</p>
<p>Let {% raw %}<span class="math inline">\(K(\delta,\cdot)\)</span>{% endraw %} be the conditional law of {% raw %}<span class="math inline">\(S\)</span>{% endraw %} given {% raw %}<span class="math inline">\(\Delta=\delta\)</span>{% endraw %}; such a probability kernel exists because both spaces are Euclidean. In the Gaussian experiment observe {% raw %}<span class="math inline">\(X\sim\mathcal{N}(h,I_\theta^{-1})\)</span>{% endraw %}, and draw {% raw %}<span class="math inline">\(T\)</span>{% endraw %} conditionally from {% raw %}<span class="math inline">\(K(I_\theta X,\cdot)\)</span>{% endraw %}. Under {% raw %}<span class="math inline">\(h=0\)</span>{% endraw %}, the pair {% raw %}<span class="math inline">\((T,I_\theta X)\)</span>{% endraw %} has the law of {% raw %}<span class="math inline">\((S,\Delta)\)</span>{% endraw %}. Under general {% raw %}<span class="math inline">\(h\)</span>{% endraw %}, its likelihood ratio relative to the central experiment is</p>
{% raw %}<div class="math display">\[\frac{d\mathcal{N}(h,I_\theta^{-1})}{d\mathcal{N}(0,I_\theta^{-1})}(X)
=\exp(h^\top I_\theta X-\frac12h^\top I_\theta h).\]</div>{% endraw %}
<p>This tilts only the observed coordinate and leaves the conditional kernel unchanged. Thus {% raw %}<span class="math inline">\(T-Ah\)</span>{% endraw %} has law {% raw %}<span class="math inline">\(L_{\theta,h}\)</span>{% endraw %} for every {% raw %}<span class="math inline">\(h\)</span>{% endraw %}. The same joint subsequence supplies one kernel for all fixed alternatives; no separate choice of a kernel for each {% raw %}<span class="math inline">\(h\)</span>{% endraw %} is made. This is also the implication stated in <a href="https://doi.org/10.1017/CBO9780511802256.009">van der Vaart, Theorem 8.3</a>. □</p>
</div>

<div id="Def:Regular" class="definition" data-note-number="4" data-note-kind="Definition">
<p><strong>Definition 4</strong>.  A sequence of estimators {% raw %}<span class="math inline">\((T_n)\)</span>{% endraw %} is <em>regular</em> at {% raw %}<span class="math inline">\(\theta \in \Theta\)</span>{% endraw %} for estimating {% raw %}<span class="math inline">\(\varphi(\theta)\)</span>{% endraw %} if </p>

{% raw %}<div class="math display">\[\sqrt{n} \left( T_n - \varphi\left( \theta + \frac{h}{\sqrt{n}} \right) \right) \xrightarrow[\theta + \frac{h}{\sqrt{n}}]{\rm d} L_{\theta}\]</div>{% endraw %}
<p> for all {% raw %}<span class="math inline">\(h \in \mathop{\mathrm{\mathbf{R}}}^k\)</span>{% endraw %}.</p>

</div>
<p>Because the right-hand side of the Definition <a href="#Def:Regular" data-reference-type="ref" data-reference="Def:Regular">4</a> is independent of {% raw %}<span class="math inline">\(h\)</span>{% endraw %}, it must be that {% raw %}<span class="math inline">\(\theta \in \Theta\)</span>{% endraw %} that is regular determines the limiting distribution. By the proof of Theorem <a href="#Thm:Lower_Bound_Experiments" data-reference-type="ref" data-reference="Thm:Lower_Bound_Experiments">3</a>, we see that every estimator sequence corresponds to a limiting normal experiment (i.e. some {% raw %}<span class="math inline">\(T\)</span>{% endraw %} in {% raw %}<span class="math inline">\((\mathcal{N}(h,I_{\theta}^{-1}) : h\in\mathbb R^k)\)</span>{% endraw %}). Therefore, a regular estimator sequence is matched by an equivariant-in-law estimator for {% raw %}<span class="math inline">\(\varphi&#x27;_{\theta} h\)</span>{% endraw %}. An alternative name for a regular estimator sequence is <em>asymptotic equivariant-in-law</em>.</p>

<div id="Thm:Convolution" class="theorem" data-note-number="5" data-note-kind="Theorem">
<p><strong>Theorem 5</strong>.  Let {% raw %}<span class="math inline">\((P_{\theta} : \theta \in \Theta)\)</span>{% endraw %} be differentiable in quadratic mean (i.e. Definition <a href="{% post_url 2023-03-04-local-asymptotic-normality %}#Ass:Quadratic_Mean_Diff" data-reference-type="ref" data-reference="Ass:Quadratic_Mean_Diff">1</a>) at a point {% raw %}<span class="math inline">\(\theta\)</span>{% endraw %}, where {% raw %}<span class="math inline">\(I_{\theta}\)</span>{% endraw %} is invertible. Let {% raw %}<span class="math inline">\(\varphi\)</span>{% endraw %} be differentiable at {% raw %}<span class="math inline">\(\theta\)</span>{% endraw %}. Let {% raw %}<span class="math inline">\(T_n\)</span>{% endraw %} be a regular estimator sequence in the experiments {% raw %}<span class="math inline">\((P^n_{\theta} : \theta \in \Theta)\)</span>{% endraw %} at {% raw %}<span class="math inline">\(\theta\)</span>{% endraw %}, with limiting distribution {% raw %}<span class="math inline">\(L_{\theta}\)</span>{% endraw %}. Then, there exists a probability measure {% raw %}<span class="math inline">\(M_{\theta}\)</span>{% endraw %} such that {% raw %}<span class="math inline">\(L_{\theta} = \mathcal{N}(0, \varphi&#x27;_{\theta} I_{\theta}^{-1} {\varphi&#x27;_{\theta}}^\intercal) \ast M_{\theta}\)</span>{% endraw %}. If {% raw %}<span class="math inline">\(L_{\theta}\)</span>{% endraw %} has covariance matrix {% raw %}<span class="math inline">\(\Sigma_{\theta}\)</span>{% endraw %}, then the matrix {% raw %}<span class="math inline">\(\Sigma_{\theta} - \varphi&#x27;_{\theta} I_{\theta}^{-1} {\varphi&#x27;_{\theta}}^\intercal\)</span>{% endraw %} is nonnegative-definite.</p>

</div>
<div class="proof">
<p><em>Proof.</em> Use the joint limit {% raw %}<span class="math inline">\((S,\Delta)\)</span>{% endraw %} constructed above, and put {% raw %}<span class="math inline">\(A=\varphi'_\theta\)</span>{% endraw %}, {% raw %}<span class="math inline">\(I=I_\theta\)</span>{% endraw %}, {% raw %}<span class="math inline">\(V=AI^{-1}A^\top\)</span>{% endraw %}. Regularity and likelihood tilting imply, for every {% raw %}<span class="math inline">\(t\in\mathbb R^m\)</span>{% endraw %} and {% raw %}<span class="math inline">\(h\in\mathbb R^k\)</span>{% endraw %},</p>
{% raw %}<div class="math display">\[\mathbb{E} e^{it^\top S+h^\top\Delta}
=\widehat L_\theta(t)\exp(\frac12h^\top I h+it^\top Ah).\]</div>{% endraw %}
<p>The normal marginal has exponential moments of every linear functional. Thus, for fixed {% raw %}<span class="math inline">\(t\)</span>{% endraw %}, the map {% raw %}<span class="math inline">\(z\mapsto E\exp(it^\top S+z^\top\Delta)\)</span>{% endraw %} is entire on {% raw %}<span class="math inline">\(\mathbb C^k\)</span>{% endraw %}: on each compact set of {% raw %}<span class="math inline">\(z\)</span>{% endraw %}'s, its derivatives are dominated by a polynomial in {% raw %}<span class="math inline">\(\|\Delta\|\)</span>{% endraw %} times {% raw %}<span class="math inline">\(e^{C\|\Delta\|}\)</span>{% endraw %}, which is Gaussian-integrable. Fixing all but one coordinate and using the one-variable identity theorem extends the preceding identity from real {% raw %}<span class="math inline">\(h\)</span>{% endraw %} to complex {% raw %}<span class="math inline">\(z\)</span>{% endraw %}, one coordinate at a time. In particular,</p>

{% raw %}<div class="math display">\[E e^{it^\top S+iv^\top\Delta}=\widehat L_\theta(t)\exp\{-\frac12v^\top Iv-t^\top Av\}.\]</div>{% endraw %}

<p>To compute the law of the residual, substitute {% raw %}<span class="math inline">\(v=u-I^{-1}A^\top t\)</span>{% endraw %}. Expanding the quadratic form cancels the two mixed terms and leaves {% raw %}<span class="math inline">\(-u^\top Iu/2+t^\top AI^{-1}A^\top t/2\)</span>{% endraw %}.</p>
<p>Gaussian exponential integrability of {% raw %}<span class="math inline">\(\Delta\)</span>{% endraw %} permits analytic continuation in each coordinate of {% raw %}<span class="math inline">\(h\)</span>{% endraw %}. Substituting imaginary arguments and then subtracting {% raw %}<span class="math inline">\(AI^{-1}\Delta\)</span>{% endraw %} gives, for {% raw %}<span class="math inline">\(R=S-AI^{-1}\Delta\)</span>{% endraw %},</p>
{% raw %}<div class="math display">\[\mathbb{E} e^{it^\top R+iu^\top\Delta}
=\left[\widehat L_\theta(t)e^{t^\top Vt/2}\right]e^{-u^\top Iu/2}.\]</div>{% endraw %}
<p>The bracket is the characteristic function of {% raw %}<span class="math inline">\(R\)</span>{% endraw %}, obtained by setting {% raw %}<span class="math inline">\(u=0\)</span>{% endraw %}. Thus {% raw %}<span class="math inline">\(R\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\Delta\)</span>{% endraw %} are independent, and {% raw %}<span class="math inline">\(S=AI^{-1}\Delta+R\)</span>{% endraw %}. This proves the convolution assertion, including its joint form. If {% raw %}<span class="math inline">\(S\)</span>{% endraw %} has a finite covariance, so does {% raw %}<span class="math inline">\(R\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(\operatorname{Cov}(S)=V+\operatorname{Cov}(R)\)</span>{% endraw %}. □</p>
</div>
<p>Pointwise limits need not be regular at every parameter. The next argument explains why the convolution conclusion nevertheless holds almost everywhere.</p>

<div id="Lem:Convolution_AE_Building_Block" class="lemma" data-note-number="6" data-note-kind="Lemma">
<p><strong>Lemma 6</strong> (Regular Subsequence).  Let {% raw %}<span class="math inline">\(T_n\)</span>{% endraw %} be estimators in the experiments {% raw %}<span class="math inline">\((P_{n,\theta} : \theta \in \Theta)\)</span>{% endraw %} indexed by open {% raw %}<span class="math inline">\(\Theta \subset \mathop{\mathrm{\mathbf{R}}}^k\)</span>{% endraw %}. Assume {% raw %}<span class="math inline">\(\theta \mapsto P_{n,\theta} (A)\)</span>{% endraw %} is measurable for every measurable subset {% raw %}<span class="math inline">\(A\)</span>{% endraw %} and every {% raw %}<span class="math inline">\(n\)</span>{% endraw %}. Assume {% raw %}<span class="math inline">\(\theta \mapsto \varphi(\theta)\)</span>{% endraw %} is measurable. Furthermore, suppose there exists distributions {% raw %}<span class="math inline">\(L_{\theta}\)</span>{% endraw %} such that for Lebesgue a.e. {% raw %}<span class="math inline">\(\theta\)</span>{% endraw %}, the following holds: </p>

{% raw %}<div class="math display">\[\begin{aligned}
        r_n (T_n - \varphi(\theta)) \xrightarrow{\rm d} L_{\theta}
    
\end{aligned}\]</div>{% endraw %}
<p> Then, for every sequence {% raw %}<span class="math inline">\((\tau_n)\)</span>{% endraw %} tending to zero, there exists a subsequence {% raw %}<span class="math inline">\((\tau_{n_k})\)</span>{% endraw %} such that for Lebesgue a.e. {% raw %}<span class="math inline">\((\theta,h)\)</span>{% endraw %}, along the subsequence, </p>

{% raw %}<div class="math display">\[\begin{aligned}
        r_n (T_n - \varphi(\theta + \tau_n h)) \xrightarrow[\theta + \tau_n h]{\rm d} L_{\theta}
    
\end{aligned}\]</div>{% endraw %}
</div>
<div class="proof">
<p><em>Proof.</em> Choose a countable family of bounded continuous functions that determines weak convergence. For one such test function {% raw %}<span class="math inline">\(f\)</span>{% endraw %}, put {% raw %}<span class="math inline">\(g_n(\theta)=\mathbb{E}_\theta f(r_n(T_n-\varphi(\theta)))\)</span>{% endraw %} and {% raw %}<span class="math inline">\(g(\theta)=\int f\,dL_\theta\)</span>{% endraw %}. These functions are measurable and uniformly bounded, and {% raw %}<span class="math inline">\(g_n\to g\)</span>{% endraw %} almost everywhere. Extend both by zero outside the open parameter set.</p>
<p>Let {% raw %}<span class="math inline">\(V,H\)</span>{% endraw %} be independent standard Gaussian vectors, and let {% raw %}<span class="math inline">\(p_n\)</span>{% endraw %} and {% raw %}<span class="math inline">\(p\)</span>{% endraw %} be the densities of {% raw %}<span class="math inline">\(V+\tau_nH\)</span>{% endraw %} and {% raw %}<span class="math inline">\(V\)</span>{% endraw %}. Then {% raw %}<span class="math inline">\(\|p_n-p\|_1\to0\)</span>{% endraw %}. If {% raw %}<span class="math inline">\(|g_n|,|g|\le C\)</span>{% endraw %},</p>
{% raw %}<div class="math display">\[\mathbb{E}|g_n(V+\tau_nH)-g(V+\tau_nH)|
\le\int|g_n-g|p+2C\|p_n-p\|_1\longrightarrow0.\]</div>{% endraw %}
<p>Approximate {% raw %}<span class="math inline">\(g\)</span>{% endraw %} by a bounded continuous function {% raw %}<span class="math inline">\(g_\epsilon\)</span>{% endraw %} in {% raw %}<span class="math inline">\(L^1(p)\)</span>{% endraw %}. The same density comparison and dominated convergence give</p>
{% raw %}<div class="math display">\[\limsup_n\mathbb{E}|g(V+\tau_nH)-g(V)|\le2\int|g-g_\epsilon|p.\]</div>{% endraw %}
<p>Letting the approximation error tend to zero proves {% raw %}<span class="math inline">\(g_n(V+\tau_nH)\to g(V)\)</span>{% endraw %} in {% raw %}<span class="math inline">\(L^1\)</span>{% endraw %}. For the first {% raw %}<span class="math inline">\(j\)</span>{% endraw %} members of the countable determining family, choose a common subsequence whose expected errors are summable. Markov's inequality and Borel–Cantelli give simultaneous almost-sure convergence. The joint Gaussian density is everywhere positive, so the exceptional set is also Lebesgue-null. For {% raw %}<span class="math inline">\(\theta\)</span>{% endraw %} in the open parameter set, {% raw %}<span class="math inline">\(\theta+\tau_nh\)</span>{% endraw %} eventually remains inside it. This proves the lemma. □</p>
</div>
<p>The common subsequence in Lemma 6 can be chosen explicitly. Normalize the determining functions to be bounded by one, and let {% raw %}<span class="math inline">\(e_{n,j}\)</span>{% endraw %} be the expected absolute error for the {% raw %}<span class="math inline">\(j\)</span>{% endraw %}-th function. After proving {% raw %}<span class="math inline">\(e_{n,j}\to0\)</span>{% endraw %} for each {% raw %}<span class="math inline">\(j\)</span>{% endraw %}, choose {% raw %}<span class="math inline">\(n_k&gt;n_{k-1}\)</span>{% endraw %} so that {% raw %}<span class="math inline">\(\sum_{j\le k}e_{n_k,j}\le2^{-k}\)</span>{% endraw %}. For each fixed {% raw %}<span class="math inline">\(j\)</span>{% endraw %}, the sum of its expected errors over {% raw %}<span class="math inline">\(k\ge j\)</span>{% endraw %} is finite. Tonelli's theorem makes the corresponding sum of nonnegative random errors finite almost surely, and hence those errors tend to zero. Intersecting these probability-one sets over the countable family proves simultaneous weak convergence. Positivity of the Gaussian joint density converts this into the required Lebesgue almost-everywhere statement.</p>
<p>Combining the subsequence lemma with the Gaussian representation yields the almost-everywhere convolution theorem.</p>

<div id="Thm:Lower_Bound_Experiments_AE" class="theorem" data-note-number="7" data-note-kind="Theorem">
<p><strong>Theorem 7.</strong> Suppose the model is differentiable in quadratic mean at every point of an open {% raw %}<span class="math inline">\(\Theta\subset\mathbb R^k\)</span>{% endraw %}, its Fisher information is nonsingular, and {% raw %}<span class="math inline">\(\varphi\)</span>{% endraw %} is differentiable. Assume the parameterized probabilities are measurable and {% raw %}<span class="math inline">\(\sqrt n(T_n-\varphi(\theta))\Rightarrow L_\theta\)</span>{% endraw %} under every fixed {% raw %}<span class="math inline">\(\theta\)</span>{% endraw %}. Then for Lebesgue-almost every {% raw %}<span class="math inline">\(\theta\)</span>{% endraw %},</p>
{% raw %}<div class="math display">\[L_\theta=\mathcal{N}(0,\varphi'_\theta I_\theta^{-1}(\varphi'_\theta)^\top)*M_\theta\]</div>{% endraw %}
<p>for some probability measure {% raw %}<span class="math inline">\(M_\theta\)</span>{% endraw %}. If {% raw %}<span class="math inline">\(L_\theta\)</span>{% endraw %} has finite covariance, its covariance minus the displayed Gaussian covariance is nonnegative definite.</p>
</div>
<div class="proof">
<p><em>Proof.</em> Apply Lemma 6 with {% raw %}<span class="math inline">\(r_n=\sqrt n\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\tau_n=n^{-1/2}\)</span>{% endraw %}. At almost every {% raw %}<span class="math inline">\(\theta\)</span>{% endraw %}, the local centered limit along its subsequence is {% raw %}<span class="math inline">\(L_\theta\)</span>{% endraw %} for almost every {% raw %}<span class="math inline">\(h\)</span>{% endraw %}. Extract a further joint limit with the central sequence and use the proof of Theorem 3. For each bounded continuous test function, the expectation in the tilted Gaussian experiment is continuous in {% raw %}<span class="math inline">\(h\)</span>{% endraw %}: Gaussian likelihood ratios are continuous in {% raw %}<span class="math inline">\(L^1\)</span>{% endraw %}, and the centering {% raw %}<span class="math inline">\(\varphi'_\theta h\)</span>{% endraw %} is continuous. Equality on almost every {% raw %}<span class="math inline">\(h\)</span>{% endraw %} therefore extends to every {% raw %}<span class="math inline">\(h\)</span>{% endraw %}. The joint convolution argument of Theorem 5 applies. This is the statement of <a href="https://doi.org/10.1017/CBO9780511802256.009">van der Vaart, Theorem 8.9</a>. □</p>
</div>

<p>While all the results above indicate that the most suitable (i.e. best) possible limiting distribution is {% raw %}<span class="math inline">\(\mathcal{N}(0, \varphi&#x27;_{\theta} I_{\theta}^{-1} {\varphi&#x27;_{\theta}}^{\intercal})\)</span>{% endraw %}, it is certainly not the most ideal in every situation. The results above only indicate the “optimal” normal limit of a sequence of statistical experiments, which is just the distribution of the estimator {% raw %}<span class="math inline">\(\varphi&#x27;_{\theta} X\)</span>{% endraw %} in the normal limit experiments. There are examples where this is not optimal <em>per se</em>.</p>

<div id="result-8" class="example" data-note-number="8" data-note-kind="Example">
<p><strong>Example 8</strong> (Stein’s Shrinkage Estimator).  Let {% raw %}<span class="math inline">\(X_1,\dots,X_n\ \text{are iid }\mathcal{N}_k(\theta,I_k),\ k\ge3\)</span>{% endraw %}. Let the dimension of the observations be at least {% raw %}<span class="math inline">\(3\)</span>{% endraw %}. Consider the estimator </p>

{% raw %}<div class="math display">\[\begin{aligned}
        T_n = \overline{X}_n - (k-2) \frac{\overline{X}_n}{n\norm{\overline{X}_n}^2}
    
\end{aligned}\]</div>{% endraw %}
<p> If {% raw %}<span class="math inline">\(\theta \neq 0\)</span>{% endraw %}, then {% raw %}<span class="math inline">\(T_n = \overline{X}_n - (k-2) \frac{\overline{X}_n}{n\norm{\overline{X}_n}^2} =\overline X_n+O_{P_\theta}(n^{-1})\)</span>{% endraw %} by the weak law of large numbers. Therefore, {% raw %}<span class="math inline">\(\sqrt{n} (T_n - \overline{X}_n) \xrightarrow{\rm P} 0\)</span>{% endraw %}, so {% raw %}<span class="math inline">\(T_n\)</span>{% endraw %} is regular for every {% raw %}<span class="math inline">\(\theta \neq 0\)</span>{% endraw %}. For {% raw %}<span class="math inline">\(\theta = \frac{h}{\sqrt{n}}\)</span>{% endraw %}, we have that {% raw %}<span class="math inline">\(\sqrt{n} \overline{X}_n \sim X \sim \mathcal{N}(h,I_k)\)</span>{% endraw %}. Furthermore, the standardized estimator {% raw %}<span class="math inline">\(\sqrt{n} (T_n - \frac{h}{\sqrt{n}}) \sim T-h\)</span>{% endraw %}, with {% raw %}<span class="math inline">\(T(X) = X - (k-2) \frac{X}{\norm{X}^2}\)</span>{% endraw %}. This is <em>Stein’s shrinkage estimator</em>.</p>

<p>Note that the distribution of {% raw %}<span class="math inline">\(T-h\)</span>{% endraw %} depends on {% raw %}<span class="math inline">\(h\)</span>{% endraw %}, so the sequence {% raw %}<span class="math inline">\(T_n\)</span>{% endraw %} is <em>not</em> regular at {% raw %}<span class="math inline">\(\theta=0\)</span>{% endraw %}.</p>

<p>It follows the remarkable fact that, for every {% raw %}<span class="math inline">\(h \in \mathop{\mathrm{\mathbf{R}}}^k\)</span>{% endraw %}, </p>

{% raw %}<div class="math display">\[\mathbb{E}_h \norm{T-h}^2 &lt; \mathbb{E}_h \norm{X-h}^2 = k\]</div>{% endraw %}
<p> we have local limiting distributions {% raw %}<span class="math inline">\(L_{0,h}\)</span>{% endraw %} of {% raw %}<span class="math inline">\(\sqrt{n} (T_n - \frac{h}{\sqrt{n}})\)</span>{% endraw %} (under {% raw %}<span class="math inline">\(\theta = \frac{h}{\sqrt{n}}\)</span>{% endraw %}) are all better than {% raw %}<span class="math inline">\(\mathcal{N}(0,I_k)\)</span>{% endraw %} limiting distribution of the best regular estimator sequence {% raw %}<span class="math inline">\(\overline{X}_n\)</span>{% endraw %}.</p>

</div>
<p>The strict risk improvement in Example 8 follows by a direct calculation. For {% raw %}<span class="math inline">\(X\sim N_k(h,I_k)\)</span>{% endraw %}, write {% raw %}<span class="math inline">\(a=k-2\)</span>{% endraw %} and {% raw %}<span class="math inline">\(b(x)=-ax/\|x\|^2\)</span>{% endraw %}. Gaussian integration by parts gives {% raw %}<span class="math inline">\(E_h[(X-h)^\top b(X)]=E_h\operatorname{div}b(X)\)</span>{% endraw %}. Since</p>

{% raw %}<div class="math display">\[\|b(x)\|^2=\frac{a^2}{\|x\|^2},\qquad\operatorname{div}b(x)=-\frac{a(k-2)}{\|x\|^2},\]</div>{% endraw %}

<p>expanding the squared error yields</p>

{% raw %}<div class="math display">\[E_h\|X+b(X)-h\|^2=k-(k-2)^2 E_h\|X\|^{-2}&lt;k.\]</div>{% endraw %}

<p>The reciprocal-square moment is finite for {% raw %}<span class="math inline">\(k&gt;2\)</span>{% endraw %}: near zero its radial integral is bounded by a constant times {% raw %}<span class="math inline">\(\int_0^1 r^{k-3}\,dr\)</span>{% endraw %}, and outside the unit ball it is bounded by one. Integration by parts can first be performed outside a ball of radius {% raw %}<span class="math inline">\(\varepsilon\)</span>{% endraw %}; its boundary contribution is {% raw %}<span class="math inline">\(O(\varepsilon^{k-2})\)</span>{% endraw %}, which vanishes. The Gaussian tail removes the outer boundary. This proves the strict inequality and explains the dimension restriction.</p>
<p>The comparison must specify both where the risk is measured and which loss is used. The preceding examples raise two restrictions:</p>

<ol>
<li><p>For the Gaussian concentration comparison furnished by the convolution theorem, an improvement in the limiting law can occur only on a Lebesgue-null set of fixed parameters, as evidenced by Theorem <a href="#Thm:Lower_Bound_Experiments_AE" data-reference-type="ref" data-reference="Thm:Lower_Bound_Experiments_AE">7</a>.</p></li>
<li><p>Risk comparisons must specify a loss function; the convolution theorem does not order arbitrary losses or finite-sample risks.</p></li>
</ol>
<p>In light of these facts, we could ask if, <em>locally</em>, we can find a best-worst case of estimator sequence {% raw %}<span class="math inline">\(T_n\)</span>{% endraw %} for {% raw %}<span class="math inline">\(\varphi(\theta)\)</span>{% endraw %}. Therefore, for a given loss function {% raw %}<span class="math inline">\(\ell\)</span>{% endraw %}, we have the following definition.</p>

<div id="Def:local_a_minmax" class="definition" data-note-number="9" data-note-kind="Definition">
<p><strong>Definition 9</strong>.  An estimator sequence {% raw %}<span class="math inline">\((T_n)\)</span>{% endraw %} is <em>locally asymptotically minimax</em> for a given loss function {% raw %}<span class="math inline">\(\ell\)</span>{% endraw %} (for estimating {% raw %}<span class="math inline">\(\varphi(\theta)\)</span>{% endraw %}) if the following holds: </p>

{% raw %}<div class="math display">\[\begin{aligned}
        \sup_{I\subset\mathop{\mathrm{\mathbf{R}}}^k,\;I\text{ finite}} \limsup_{n\to\infty} \sup_{h \in I} \mathbb{E}_{\theta + \frac{h}{\sqrt{n}}} \ell \left( \sqrt{n} \left( T_n - \varphi\left( \theta + \frac{h}{\sqrt{n}} \right) \right) \right) \leqslant\int \ell \dif \mathcal{N}\left( 0, \varphi&#x27;_{\theta} I_{\theta}^{-1} {\varphi&#x27;_{\theta}}^{\intercal} \right)
    
\end{aligned}\]</div>{% endraw %}
</div>
<div id="result-10" class="proposition" data-note-number="10" data-note-kind="Proposition">
<p><strong>Proposition 10.</strong> Assume the LAN and differentiability conditions of Theorem 5, with a real-valued target and positive efficient variance {% raw %}<span class="math inline">\(v=\varphi'_\theta I_\theta^{-1}(\varphi'_\theta)^\top\)</span>{% endraw %}. Let {% raw %}<span class="math inline">\(T_n\)</span>{% endraw %} be regular. Suppose {% raw %}<span class="math inline">\(\ell\)</span>{% endraw %} is a nonnegative lower-semicontinuous symmetric bowl-shaped loss, nonconstant on {% raw %}<span class="math inline">\((0,\infty)\)</span>{% endraw %}, with {% raw %}<span class="math inline">\(\mathbb{E}\ell(G)&lt;\infty\)</span>{% endraw %} for {% raw %}<span class="math inline">\(G\sim\mathcal{N}(0,v)\)</span>{% endraw %}. If {% raw %}<span class="math inline">\(T_n\)</span>{% endraw %} satisfies Definition 9 for this loss, then its regular limit is {% raw %}<span class="math inline">\(\mathcal{N}(0,v)\)</span>{% endraw %}.</p>
</div>
<div class="proof">
<p><em>Proof.</em> By Theorem 5 the limit is {% raw %}<span class="math inline">\(G+R\)</span>{% endraw %}, with {% raw %}<span class="math inline">\(G\)</span>{% endraw %} and {% raw %}<span class="math inline">\(R\)</span>{% endraw %} independent. The risk condition at the singleton local set {% raw %}<span class="math inline">\(\{0\}\)</span>{% endraw %}, together with the portmanteau inequality, gives {% raw %}<span class="math inline">\(\mathbb{E}\ell(G+R)\le\mathbb{E}\ell(G)\)</span>{% endraw %}. For every nonzero shift {% raw %}<span class="math inline">\(r\)</span>{% endraw %} and every finite {% raw %}<span class="math inline">\(a&gt;0\)</span>{% endraw %}, strict unimodality of the Gaussian density gives {% raw %}<span class="math inline">\(\Pr(|G+r|\le a)&lt;\Pr(|G|\le a)\)</span>{% endraw %}. Integrating these strict inequalities over the sublevel sets of the nonconstant bowl-shaped loss yields {% raw %}<span class="math inline">\(\mathbb{E}\ell(G+r)&gt;\mathbb{E}\ell(G)\)</span>{% endraw %}. Conditioning on {% raw %}<span class="math inline">\(R\)</span>{% endraw %} therefore forces {% raw %}<span class="math inline">\(R=0\)</span>{% endraw %} almost surely.</p>
<p>The scalar, nondegenerate, nonconstant-loss assumptions matter: a constant loss cannot distinguish efficient from inefficient limits, and the scalar interval argument is not a claim of uniqueness of all multivariate minimax procedures. Conversely, an efficient weak limit gives convergence of these risks only with additional control, such as uniform integrability of the losses under the relevant local alternatives. □</p>
</div>

<p>The preceding shrinkage example also warns against identifying pointwise loss improvement with regularity. We next characterize efficient regular estimators by their first-order expansion in the score.</p>

<div id="Prop:Criterion_Optimality_Regularity" class="proposition" data-note-number="11" data-note-kind="Proposition">
<p><strong>Proposition 11</strong>.  Let {% raw %}<span class="math inline">\((P_{\theta} : \theta \in \Theta)\)</span>{% endraw %} be differentiable in quadratic mean (i.e. Definition <a href="{% post_url 2023-03-04-local-asymptotic-normality %}#Ass:Quadratic_Mean_Diff" data-reference-type="ref" data-reference="Ass:Quadratic_Mean_Diff">1</a>) at a point {% raw %}<span class="math inline">\(\theta\)</span>{% endraw %}, where {% raw %}<span class="math inline">\(I_{\theta}\)</span>{% endraw %} is invertible. Let {% raw %}<span class="math inline">\(\varphi\)</span>{% endraw %} be differentiable at {% raw %}<span class="math inline">\(\theta\)</span>{% endraw %}. Let {% raw %}<span class="math inline">\(T_n\)</span>{% endraw %} be a regular estimator sequence in the experiments {% raw %}<span class="math inline">\((P^n_{\theta} : \theta \in \Theta)\)</span>{% endraw %} at {% raw %}<span class="math inline">\(\theta\)</span>{% endraw %}, such that </p>

{% raw %}<div class="math display">\[\begin{aligned}
        \sqrt{n} (T_n - \varphi(\theta)) = \frac{1}{\sqrt{n}} \sum_{k=1}^{n} \varphi&#x27;_{\theta} I_{\theta}^{-1} \ell&#x27;_{\theta} (X_k) + o_{\rm P_{\theta}} (1)
    
\end{aligned}\]</div>{% endraw %}
<p> Then, {% raw %}<span class="math inline">\(T_n\)</span>{% endraw %} is best regular estimator for {% raw %}<span class="math inline">\(\varphi(\theta)\)</span>{% endraw %} at {% raw %}<span class="math inline">\(\theta\)</span>{% endraw %}. Conversely, every best regular estimator sequence satisfies this expansion.</p>

</div>
<div class="proof">
<p><em>Proof.</em> Write {% raw %}<span class="math inline">\(\Delta_{n,\theta}=n^{-1/2}\sum_{k=1}^n\ell&#x27;_\theta(X_k)\)</span>{% endraw %}. Under {% raw %}<span class="math inline">\(P_\theta^n\)</span>{% endraw %}, the central limit theorem gives {% raw %}<span class="math inline">\(\Delta_{n,\theta}\rightsquigarrow\Delta_\theta\sim \mathcal{N}(0,I_\theta)\)</span>{% endraw %}, and local asymptotic normality gives </p>

{% raw %}<div class="math display">\[\log\frac{dP_{\theta+h/\sqrt n}^n}{dP_\theta^n}=h^\top\Delta_{n,\theta}-\frac12 h^\top I_\theta h+o_{P_\theta}(1).\]</div>{% endraw %}
<p> If the stated asymptotically linear expansion holds, the joint limit of the estimator and log likelihood ratio is </p>

{% raw %}<div class="math display">\[\left(\varphi&#x27;_\theta I_\theta^{-1}\Delta_\theta,\;h^\top\Delta_\theta-\frac12h^\top I_\theta h\right).\]</div>{% endraw %}
<p> Its covariance matrix is </p>

{% raw %}<div class="math display">\[\begin{pmatrix}\varphi&#x27;_\theta I_\theta^{-1}(\varphi&#x27;_\theta)^\top&amp;\varphi&#x27;_\theta h\\h^\top(\varphi&#x27;_\theta)^\top&amp;h^\top I_\theta h\end{pmatrix}.\]</div>{% endraw %}
<p> Le Cam’s third lemma shifts the estimator’s mean by {% raw %}<span class="math inline">\(\varphi&#x27;_\theta h\)</span>{% endraw %} under the local alternative. Differentiability of {% raw %}<span class="math inline">\(\varphi\)</span>{% endraw %} then gives the centered limit {% raw %}<span class="math inline">\(\mathcal{N}(0,\varphi&#x27;_\theta I_\theta^{-1}(\varphi&#x27;_\theta)^\top)\)</span>{% endraw %}, independently of {% raw %}<span class="math inline">\(h\)</span>{% endraw %}. This is the efficient regular limit.</p>

<p>For the converse, use the equality case of the convolution theorem in the joint limit with the central sequence. A regular limit has the representation {% raw %}<span class="math inline">\(\varphi&#x27;_\theta I_\theta^{-1}\Delta_\theta+Z\)</span>{% endraw %}, where {% raw %}<span class="math inline">\(Z\)</span>{% endraw %} is independent of {% raw %}<span class="math inline">\(\Delta_\theta\)</span>{% endraw %}. If the limit is the efficient normal distribution, its characteristic function forces {% raw %}<span class="math inline">\(Z=0\)</span>{% endraw %} almost surely. Applying this to every joint convergent subsequence yields </p>

{% raw %}<div class="math display">\[\sqrt n(T_n-\varphi(\theta))-\varphi&#x27;_\theta I_\theta^{-1}\Delta_{n,\theta}\longrightarrow0\quad\text{in }P_\theta^n\text{-probability},\]</div>{% endraw %}
<p> which is the desired expansion. ◻</p>

</div>
<p>As a final remark, a general method that can be used to strengthen consistency of an estimator sequence {% raw %}<span class="math inline">\(T_n\)</span>{% endraw %} is to make {% raw %}<span class="math inline">\(\mathop{\mathrm{\mathds{P}}}(d(T_n, \varphi(\theta) &gt; \varepsilon)\)</span>{% endraw %} as small as possible—and as quickly as possible—under fixed {% raw %}<span class="math inline">\(\varepsilon&gt; 0\)</span>{% endraw %}. An equivalent statement is to investigate what the value of this probability is <em>in the worst, rarest case possible</em>. This is (very, very roughly speaking) a <em>large deviation</em> result.</p>

<div>
<div id="result-12" class="proposition" data-note-number="12" data-note-kind="Proposition">
<p><strong>Proposition 12</strong>.  Suppose {% raw %}<span class="math inline">\(T_n\)</span>{% endraw %} is based on {% raw %}<span class="math inline">\(n\)</span>{% endraw %} i.i.d. observations and is consistent for {% raw %}<span class="math inline">\(\varphi(\theta)\)</span>{% endraw %} under every {% raw %}<span class="math inline">\(\theta\)</span>{% endraw %}. For a metric {% raw %}<span class="math inline">\(d\)</span>{% endraw %}, every {% raw %}<span class="math inline">\(\varepsilon&gt;0\)</span>{% endraw %}, and fixed {% raw %}<span class="math inline">\(\theta_0\)</span>{% endraw %}, </p>

{% raw %}<div class="math display">\[\limsup_{n\to\infty}-\frac1n\log P_{\theta_0}^n\{d(T_n,\varphi(\theta_0))&gt;\varepsilon\}\leqslant\inf_{\theta:\,d(\varphi(\theta),\varphi(\theta_0))&gt;\varepsilon}D(P_\theta\Vert P_{\theta_0}),\]</div>{% endraw %}
<p> where {% raw %}<span class="math inline">\(D(P\Vert Q)=\int\log(dP/dQ)\,dP\)</span>{% endraw %}, with value {% raw %}<span class="math inline">\(+\infty\)</span>{% endraw %} when appropriate.</p>

</div>
<div class="proof">
<p><em>Proof.</em> Fix an alternative in the infimum with finite divergence {% raw %}<span class="math inline">\(D\)</span>{% endraw %}. Consistency and the strict separation imply that the event {% raw %}<span class="math inline">\(A_n=\{d(T_n,\varphi(\theta_0))&gt;\varepsilon\}\)</span>{% endraw %} has {% raw %}<span class="math inline">\(P_\theta^n\)</span>{% endraw %}-probability tending to one. Under {% raw %}<span class="math inline">\(P_\theta^n\)</span>{% endraw %}, the law of large numbers gives {% raw %}<span class="math inline">\(n^{-1}\log(dP_\theta^n/dP_{\theta_0}^n)\to D\)</span>{% endraw %}. Thus, for each {% raw %}<span class="math inline">\(\eta&gt;0\)</span>{% endraw %}, </p>

{% raw %}<div class="math display">\[P_{\theta_0}^n(A_n)\geqslant e^{-n(D+\eta)}P_\theta^n\left(A_n\cap\left\{\log\frac{dP_\theta^n}{dP_{\theta_0}^n}\leqslant n(D+\eta)\right\}\right).\]</div>{% endraw %}
<p> The last probability tends to one. Take logarithms, then let {% raw %}<span class="math inline">\(\eta\downarrow0\)</span>{% endraw %}, and take the infimum over alternatives. ◻</p>

</div>
</div>

<nav class="note-related" aria-label="Related notes"><p>Related notes: <a href="{% post_url 2023-03-04-local-asymptotic-normality %}">Local Asymptotic Normality</a>.</p></nav>

<nav class="note-series" aria-label="Notes in this series"><p>Previous: <a href="{% post_url 2023-03-04-local-asymptotic-normality %}">Local Asymptotic Normality</a></p></nav>

</div>
