---
layout: "post"
title: "Bootstrap Distributions and Consistency"
date: "2022-08-03"
tags: ["statistics", "resampling"]
excerpt: "The theory of permutation and and randomization tests, while powerful and has good properties, can only be used in certain problems where the randomization hypothesis holds."
note_series: "Bootstrap and subsampling"
note_source: "assets/notes/Overleaf Projects (32 items)/Bootstrapping, Subsampling/stats.tex"
redirect_from: ["/2023/03/04/bootstrap-distributions-and-conditional-convergence/", "/2023/03/04/bootstrap-distributions-and-consistency/", "/2023/03/23/bootstrap/", "/2023/04/12/asymptotic-behaviour/"]
---

<div class="note-content" markdown="0">

<div id="setup-and-terminology" data-note-section="title">

</div>
<p>A confidence interval requires information about the sampling error of an estimator. Sometimes an exact pivot or a randomization argument supplies that information. More often the error distribution depends on the unknown population. The bootstrap estimates this distribution by applying the sampling procedure to an estimated population. The issue is then to justify replacing the population while the sample size is also changing.</p>

<p>First fix the sampling model and the parameter. Let {% raw %}<span class="math inline">\(X^n = (X_1, \dots, X_n)\)</span>{% endraw %} denote a sample of {% raw %}<span class="math inline">\(n\)</span>{% endraw %} i.i.d. random variables taking values in a sample space {% raw %}<span class="math inline">\(\mathcal S\)</span>{% endraw %}, and they have an unknown probability distribution {% raw %}<span class="math inline">\(P\)</span>{% endraw %}. The distribution {% raw %}<span class="math inline">\(P\)</span>{% endraw %} belongs to a class of distributions, denoted {% raw %}<span class="math inline">\(\mathcal P\)</span>{% endraw %}. We are interested in conducting inference on some parameter {% raw %}<span class="math inline">\(\theta = \theta(P)\)</span>{% endraw %}. We focus on confidence regions; by test inversion, the same discussion applies to hypothesis tests. Let </p>

{% raw %}<div class="math display">\[\begin{aligned}
    \Theta = \{ \theta(P) : P \in \mathcal P \}
\end{aligned}\]</div>{% endraw %}
<p> denote the collection of all parameters {% raw %}<span class="math inline">\(\theta(P)\)</span>{% endraw %}.</p>

<p>To construct a confidence region around {% raw %}<span class="math inline">\(\theta(P)\)</span>{% endraw %}, we use a statistic that measures discrepancy between the data and a proposed value of {% raw %}<span class="math inline">\(\theta(P)\)</span>{% endraw %}. Its sampling distribution calibrates which discrepancies are compatible with {% raw %}<span class="math inline">\(\theta(P)\)</span>{% endraw %}. A real-valued functional that depends on both the data and {% raw %}<span class="math inline">\(\theta(P)\)</span>{% endraw %} is called a <em>root</em>, denoted {% raw %}<span class="math inline">\(R_n (X^n, \theta(P))\)</span>{% endraw %}. And, under {% raw %}<span class="math inline">\(P\)</span>{% endraw %}, we may always want to use the plug-in estimator for estimating {% raw %}<span class="math inline">\(\theta(P)\)</span>{% endraw %}, denoted {% raw %}<span class="math inline">\(\hat \theta_n = \theta(\hat P_n)\)</span>{% endraw %}, where </p>

{% raw %}<div class="math display">\[\begin{aligned}
    \hat P_n (E) = \frac1n \sum_{1 \leq i \leq n} \mathbb 1 \{X_i \in E\}
\end{aligned}\]</div>{% endraw %}
<p> is the empirical probability measure, assuming {% raw %}<span class="math inline">\(\theta(\hat P_n)\)</span>{% endraw %} is well-defined. We will return to this momentarily.</p>

<p>To study the distribution of the root, let {% raw %}<span class="math inline">\(J_n (P)\)</span>{% endraw %} denote the distribution of {% raw %}<span class="math inline">\(R_n (X^n, \theta(P))\)</span>{% endraw %} under the distribution {% raw %}<span class="math inline">\(P\)</span>{% endraw %}. Let </p>

{% raw %}<div class="math display">\[\begin{aligned}
    J_n (x, P) = P(R_n (X^n, \theta(P)) \leq x)
\end{aligned}\]</div>{% endraw %}
<p> denote the cumulative distribution function associated with {% raw %}<span class="math inline">\(J_n(P)\)</span>{% endraw %}. Note that we need to know the appropriate quantiles or the sampling distribution {% raw %}<span class="math inline">\(J_n(P)\)</span>{% endraw %}, to construct a confidence region for {% raw %}<span class="math inline">\(\theta(P)\)</span>{% endraw %} based on the root {% raw %}<span class="math inline">\(R_n(X^n, \theta(P))\)</span>{% endraw %}. We begin with the case in which these quantiles do not depend on the unknown population.</p>

<p>Suppose the distribution {% raw %}<span class="math inline">\(J_n (P)\)</span>{% endraw %} of {% raw %}<span class="math inline">\(R_n (X^n, \theta(P))\)</span>{% endraw %}, under {% raw %}<span class="math inline">\(P\)</span>{% endraw %}, <em>does not depend on {% raw %}<span class="math inline">\(P\)</span>{% endraw %}</em>. Then, we refer to the root {% raw %}<span class="math inline">\(R_n (X^n, \theta(P))\)</span>{% endraw %} as a <em>pivot</em>. Since the distribution {% raw %}<span class="math inline">\(J_n (P)\)</span>{% endraw %} is independent of {% raw %}<span class="math inline">\(P\)</span>{% endraw %}, we can construct a confidence region at level {% raw %}<span class="math inline">\(1-\alpha\)</span>{% endraw %} for {% raw %}<span class="math inline">\(\theta(P)\)</span>{% endraw %} by choosing constants {% raw %}<span class="math inline">\(a,b\)</span>{% endraw %} that satisfy </p>

{% raw %}<div class="math display">\[\begin{aligned}
    P( a \leq R_n (X^n, \theta(P)) \leq b ) \geq 1 - \alpha ~.
\end{aligned}\]</div>{% endraw %}
<p> Therefore, the confidence region </p>

{% raw %}<div class="math display">\[\begin{aligned}
    C_n = \{ \theta \in \Theta : a \leq R_n (X^n, \theta) \leq b \} 
\end{aligned}\]</div>{% endraw %}
<p> contains {% raw %}<span class="math inline">\(\theta(P)\)</span>{% endraw %} with probability at least {% raw %}<span class="math inline">\(1-\alpha\)</span>{% endraw %} under {% raw %}<span class="math inline">\(P\)</span>{% endraw %}.</p>

<div id="result-1" class="remark" data-note-number="1" data-note-kind="Remark">
<p><strong>Remark 1</strong>.  In general, if {% raw %}<span class="math inline">\(R_n (X^n, \theta(P))\)</span>{% endraw %} is a pivot, its distribution may not be explicitly computable or have a known tractable form. However, since there is only one distribution that needs to be known, the problem is much simpler than if the distribution depends on {% raw %}<span class="math inline">\(P\)</span>{% endraw %}.</p>

</div>
<p>Now, suppose the distribution {% raw %}<span class="math inline">\(J_n (P)\)</span>{% endraw %} of {% raw %}<span class="math inline">\(R_n (X^n, \theta(P))\)</span>{% endraw %}, under {% raw %}<span class="math inline">\(P\)</span>{% endraw %}, <em>does depend on {% raw %}<span class="math inline">\(P\)</span>{% endraw %}</em>. This is usually the case, because we do not know the underlying distribution {% raw %}<span class="math inline">\(P\)</span>{% endraw %} that generates the data. In a more tractable case, when we know {% raw %}<span class="math inline">\(J_n (P)\)</span>{% endraw %} converges weakly to a limiting distribution that is independent of {% raw %}<span class="math inline">\(P\)</span>{% endraw %}. Then, we call {% raw %}<span class="math inline">\(R_n (X^n, \theta(P))\)</span>{% endraw %} an <em>asymptotic pivot</em>.</p>

<p>In the less tractable but even more common case, {% raw %}<span class="math inline">\(J_n (P)\)</span>{% endraw %} converges weakly to a limiting distribution that does depend on {% raw %}<span class="math inline">\(P\)</span>{% endraw %}. Suppose that this limiting distribution has a known form, which depends on {% raw %}<span class="math inline">\(P\)</span>{% endraw %}, but only through some unknown parameter. An example is for estimating the nonparametric mean, where the root {% raw %}<span class="math inline">\(\sqrt{n} (\overline X_n - \theta(P))\)</span>{% endraw %} converges to {% raw %}<span class="math inline">\(\mathcal{N}(0, \sigma^2(P))\)</span>{% endraw %}. Therefore, the limiting distribution of {% raw %}<span class="math inline">\(J_n (P)\)</span>{% endraw %} depends on {% raw %}<span class="math inline">\(P\)</span>{% endraw %} through its dependence on {% raw %}<span class="math inline">\(\sigma^2(P)\)</span>{% endraw %}. In this common situation, we need to then do a normal approximation based on estimated variance {% raw %}<span class="math inline">\(\sigma^2 (\hat P_n)\)</span>{% endraw %}m which converges in probability to {% raw %}<span class="math inline">\(\sigma^2(P)\)</span>{% endraw %}, and the quantiles of {% raw %}<span class="math inline">\(J_n (P)\)</span>{% endraw %} may need to be approximated, too.</p>

<h2 data-note-section="1" id="bootstrap">1. Bootstrap</h2>
<p>The bootstrap takes the same plug-in idea one step further: it estimates the entire sampling distribution of the root. The use of the bootstrap to approximate a null distribution in the construction of hypothesis tests is discussed later. This is useful when the limiting distribution is difficult to calculate. It can also provide a different approximation when the limiting law is known but does not describe the finite-sample distribution accurately. To estimate {% raw %}<span class="math inline">\(J_n (P)\)</span>{% endraw %}, note that {% raw %}<span class="math inline">\(J_n(P)\)</span>{% endraw %} depends on {% raw %}<span class="math inline">\(n\)</span>{% endraw %}. So, we can proceed (heuristically) as follows: for each {% raw %}<span class="math inline">\(n\)</span>{% endraw %}, approximate {% raw %}<span class="math inline">\(J_n (P)\)</span>{% endraw %} by {% raw %}<span class="math inline">\(J_n (\hat P_n)\)</span>{% endraw %}, i.e. obtain a plug-in estimate of {% raw %}<span class="math inline">\(J_n (P)\)</span>{% endraw %}. Consistency requires this plug-in distribution and the true sampling distribution to approach the same limit {% raw %}<span class="math inline">\(J(P)\)</span>{% endraw %} under the stated assumptions.</p>

<p>The bootstrap law is random because it depends on the observed sample. Conditional on that sample it is an ordinary probability distribution. For any distribution function {% raw %}<span class="math inline">\(H\)</span>{% endraw %} and {% raw %}<span class="math inline">\(0&lt;u&lt;1\)</span>{% endraw %}, the generalized quantile</p>
{% raw %}<div class="math display">\[H^{-1}(u)=\inf\{x:H(x)\ge u\}\]</div>{% endraw %}
<p>is well defined and finite. Neither continuity nor strict increase is required. Right continuity gives {% raw %}<span class="math inline">\(H(H^{-1}(u))\ge u\)</span>{% endraw %}, while {% raw %}<span class="math inline">\(H(H^{-1}(u)-)\le u\)</span>{% endraw %}. In particular, with {% raw %}<span class="math inline">\(q=J_n^{-1}(1-\alpha,P)\)</span>{% endraw %},</p>
{% raw %}<div class="math display">\[P\{R_n(X^n,\theta(P))\le q\}=J_n(q,P)\ge1-\alpha.\]</div>{% endraw %}
<p>Equality holds if the cdf is continuous at {% raw %}<span class="math inline">\(q\)</span>{% endraw %}; an atom there may make the inequality strict. Thus the known-law confidence region is {% raw %}<span class="math inline">\(\{\theta\in\Theta:R_n(X^n,\theta)\le q\}\)</span>{% endraw %}. The bootstrap replaces the unknown population quantile by the same generalized inverse of the conditional bootstrap cdf:</p>
{% raw %}<div class="math display">\[J_n^{-1}(1-\alpha,\hat P_n)=\inf\{x:J_n(x,\hat P_n)\ge1-\alpha\}.\]</div>{% endraw %}
<p>This defines the bootstrap confidence region</p>

{% raw %}<span id="eq:bootstrap-confidence-region"></span><div class="math display">\[\begin{aligned}
 
    B_n (1-\alpha, X^n) \triangleq \{ \theta \in \Theta : R_n (X^n, \theta) \leq J_n^{-1} (1-\alpha, \hat P_n) \} ~.
\end{aligned}\tag{1}\]</div>{% endraw %}
<div id="result-2" class="remark" data-note-number="2" data-note-kind="Remark">
<p><strong>Remark 2</strong>.  <a href="#eq:bootstrap-confidence-region" data-reference-type="eqref" data-reference="eq:bootstrap-confidence-region">(1)</a> is usually difficult to compute exactly. Direct computation involves {% raw %}<span class="math inline">\(n\)</span>{% endraw %}-fold convolutions in computing this exactly. Bootstrap confidence regions are usually constructed using Monte Carlo approximations of {% raw %}<span class="math inline">\(J_n (P)\)</span>{% endraw %}. When {% raw %}<span class="math inline">\(P\)</span>{% endraw %} is the empirical distribution, this is equivalent to resampling the original observations {% raw %}<span class="math inline">\(X^n\)</span>{% endraw %} with replacement. The bootstrap estimator {% raw %}<span class="math inline">\(J_n (\hat P_n)\)</span>{% endraw %} is approximated by the empirical distribution of the values {% raw %}<span class="math inline">\(R_n ({X_j^n}^*, \hat \theta_n)\)</span>{% endraw %}, where {% raw %}<span class="math inline">\({X_j^n}^*\)</span>{% endraw %} is the sample of {% raw %}<span class="math inline">\(n\)</span>{% endraw %} i.i.d. observations drawn with replacement from {% raw %}<span class="math inline">\(\hat P_n\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(\hat \theta_n\)</span>{% endraw %} is the estimator for {% raw %}<span class="math inline">\(\theta(P)\)</span>{% endraw %}. We sample with replacement for {% raw %}<span class="math inline">\(B\)</span>{% endraw %} bootstraps, i.e. {% raw %}<span class="math inline">\(j\)</span>{% endraw %} ranges from {% raw %}<span class="math inline">\(1\)</span>{% endraw %} to {% raw %}<span class="math inline">\(B\)</span>{% endraw %}. This procedure can be seen as a plug-in estimator of a distribution function.</p>

</div>
<h3 data-note-section="1.1" id="asymptotic-behaviour">1.1. Asymptotic Behaviour</h3>
<p>We hope the bootstrap estimator {% raw %}<span class="math inline">\(J_n (\hat P_n)\)</span>{% endraw %} is consistent for the true sampling distribution {% raw %}<span class="math inline">\(J_n (P)\)</span>{% endraw %} for {% raw %}<span class="math inline">\(R_n (X^n, \theta(P))\)</span>{% endraw %}, but this is not clear from the discussion above. We need to show {% raw %}<span class="math inline">\(J_n (P)\)</span>{% endraw %} converges weakly to a limit law {% raw %}<span class="math inline">\(J(P)\)</span>{% endraw %} (that is nondegenerate). The bootstrap replaces {% raw %}<span class="math inline">\(P\)</span>{% endraw %} by {% raw %}<span class="math inline">\(\hat P_n\)</span>{% endraw %} in {% raw %}<span class="math inline">\(J_n (\cdot)\)</span>{% endraw %}, so we need to study {% raw %}<span class="math inline">\(J_n (P_n)\)</span>{% endraw %} under more general sequences {% raw %}<span class="math inline">\(\{P_n\}\)</span>{% endraw %}. In particular, because {% raw %}<span class="math inline">\(\hat P_n\)</span>{% endraw %} is random, we should aim to first understand the limiting behaviour of {% raw %}<span class="math inline">\(J_n (P_n)\)</span>{% endraw %} for <em>fixed</em> sequences {% raw %}<span class="math inline">\(\{P_n\}\)</span>{% endraw %}. Because we need to study the limiting behaviour of {% raw %}<span class="math inline">\(J_n (P)\)</span>{% endraw %}, {% raw %}<span class="math inline">\(J_n (P)\)</span>{% endraw %} should be required to be smooth in {% raw %}<span class="math inline">\(P\)</span>{% endraw %} (in particular, we will replace {% raw %}<span class="math inline">\(P\)</span>{% endraw %} by {% raw %}<span class="math inline">\(\hat P_n\)</span>{% endraw %}, so the smoothness requirement is natural). Under this requirement, if we have sequences of probability distributions {% raw %}<span class="math inline">\(\{P_n\}\)</span>{% endraw %} converging to {% raw %}<span class="math inline">\(P\)</span>{% endraw %} in some suitable sense, then we can seek a consistency result for <em>fixed</em> sequences {% raw %}<span class="math inline">\(\{P_n\}\)</span>{% endraw %}. Then, it becomes straightforward to study the limiting behaviour for random sequences.</p>

<div id="prop:bootstrap-consistency" class="proposition" data-note-number="3" data-note-kind="Proposition">
<p><strong>Proposition 3</strong>.  Let {% raw %}<span class="math inline">\(\mathbf S_P\)</span>{% endraw %} denote the set of sequences {% raw %}<span class="math inline">\(\{P_n \in \mathcal P\}\)</span>{% endraw %} such that it contains the sequence {% raw %}<span class="math inline">\(\{P, P, \dots\}\)</span>{% endraw %}. Assume for every sequence {% raw %}<span class="math inline">\(\{P_n\} \in \mathbf S_P\)</span>{% endraw %}, {% raw %}<span class="math inline">\(J_n (P_n)\)</span>{% endraw %} converges weakly to a continuous limit law {% raw %}<span class="math inline">\(J(P)\)</span>{% endraw %}, with distribution function {% raw %}<span class="math inline">\(J(x,P)\)</span>{% endraw %}. Let {% raw %}<span class="math inline">\(X^n\)</span>{% endraw %} be a sample of size {% raw %}<span class="math inline">\(n\)</span>{% endraw %} drawn from {% raw %}<span class="math inline">\(P\)</span>{% endraw %}. Assume {% raw %}<span class="math inline">\(\hat P_n\)</span>{% endraw %} is an estimator of {% raw %}<span class="math inline">\(P\)</span>{% endraw %} based on {% raw %}<span class="math inline">\(X^n\)</span>{% endraw %}, such that {% raw %}<span class="math inline">\(\{\hat P_1, \hat P_2, \dots \} \in \mathbf S_P\)</span>{% endraw %} with probability one. Then, {% raw %}<span class="math inline">\(J_n (x, \hat P_n)\)</span>{% endraw %} converges uniformly almost surely to {% raw %}<span class="math inline">\(J_n (x, P)\)</span>{% endraw %} over {% raw %}<span class="math inline">\(x\)</span>{% endraw %}, i.e. </p>

{% raw %}<span id="eq:bootstrap-strongly-consistent"></span><div class="math display">\[\begin{aligned}
 
        \sup_x |J_n (x, \hat P_n) - J_n (x, P)| \to 0 ~~\text{with probability one} ~.
    
\end{aligned}\tag{2}\]</div>{% endraw %}
<p> If {% raw %}<span class="math inline">\(J(\cdot, P)\)</span>{% endraw %} is continuous and strictly increasing at {% raw %}<span class="math inline">\(J^{-1} (1-\alpha, P)\)</span>{% endraw %}, then </p>

{% raw %}<span id="eq:bootstrap-quantile-consistent"></span><div class="math display">\[\begin{aligned}
 
        J_n^{-1} (1-\alpha, \hat P_n) \to J^{-1} (1-\alpha, P) ~~\text{with probability one} ~.
    
\end{aligned}\tag{3}\]</div>{% endraw %}
<p> Finally, <a href="#eq:bootstrap-confidence-region" data-reference-type="eqref" data-reference="eq:bootstrap-confidence-region">(1)</a> is pointwise consistent (in level {% raw %}<span class="math inline">\(\alpha\)</span>{% endraw %}), i.e. under {% raw %}<span class="math inline">\(P\)</span>{% endraw %}, </p>

{% raw %}<span id="eq:bootstrap-weakly-consistent"></span><div class="math display">\[\begin{aligned}
 
        P( \theta(P) \in B_n(1-\alpha, X^n) ) \to 1-\alpha ~.
    
\end{aligned}\tag{4}\]</div>{% endraw %}
</div>
<div class="proof"><p><em>Proof.</em> On every sample path whose estimated-distribution sequence belongs to {% raw %}<span class="math inline">\(\mathbf S_P\)</span>{% endraw %}, the assumed sequential convergence applies to {% raw %}<span class="math inline">\(J_n(\hat P_n)\)</span>{% endraw %}. Weak convergence to a continuous cdf is uniform: choose a finite grid with small limiting cdf increments and small tail probabilities, then use monotonicity between grid points. Apply this both to the estimated sequence and to the constant sequence {% raw %}<span class="math inline">\(P_n=P\)</span>{% endraw %}, and use the triangle inequality to obtain (2).</p>
<p>For completeness, if {% raw %}<span class="math inline">\(H_n\Rightarrow H\)</span>{% endraw %} and {% raw %}<span class="math inline">\(H\)</span>{% endraw %} is continuous, fix {% raw %}<span class="math inline">\(\eta&gt;0\)</span>{% endraw %}. Choose {% raw %}<span class="math inline">\(a&lt;b\)</span>{% endraw %} with {% raw %}<span class="math inline">\(H(a)&lt;\eta\)</span>{% endraw %} and {% raw %}<span class="math inline">\(1-H(b)&lt;\eta\)</span>{% endraw %}, and a finite grid {% raw %}<span class="math inline">\(a=x_0&lt;\cdots&lt;x_m=b\)</span>{% endraw %} on which every increment of {% raw %}<span class="math inline">\(H\)</span>{% endraw %} is at most {% raw %}<span class="math inline">\(\eta\)</span>{% endraw %}. Once {% raw %}<span class="math inline">\(\max_j|H_n(x_j)-H(x_j)|&lt;\eta\)</span>{% endraw %}, monotonicity gives {% raw %}<span class="math inline">\(|H_n(x)-H(x)|&lt;2\eta\)</span>{% endraw %} between grid points and in both tails. This proves uniform convergence without assuming a density. Apply it separately on each of the probability-one sample paths in the hypothesis.</p>
<p>Write {% raw %}<span class="math inline">\(q=J^{-1}(1-\alpha,P)\)</span>{% endraw %}. The quantile condition means, precisely, that for every {% raw %}<span class="math inline">\(\varepsilon&gt;0\)</span>{% endraw %},</p>
{% raw %}<div class="math display">\[J(q-\varepsilon,P)&lt;1-\alpha&lt;J(q+\varepsilon,P).\]</div>{% endraw %}
<p>Uniform cdf convergence traps the bootstrap quantile between these two endpoints, proving (3). Finally, the root converges in law to {% raw %}<span class="math inline">\(J(P)\)</span>{% endraw %} and its random critical value converges in probability to {% raw %}<span class="math inline">\(q\)</span>{% endraw %}. Sandwiching the coverage event between the events with fixed thresholds {% raw %}<span class="math inline">\(q-\varepsilon\)</span>{% endraw %} and {% raw %}<span class="math inline">\(q+\varepsilon\)</span>{% endraw %}, then letting {% raw %}<span class="math inline">\(\varepsilon\downarrow0\)</span>{% endraw %}, proves (4). No independence between the root and its estimated critical value is needed. ◻</p></div>

<p>The last sandwich has the explicit form, for {% raw %}<span class="math inline">\(Q_n=J_n^{-1}(1-\alpha,\hat P_n)\)</span>{% endraw %} and {% raw %}<span class="math inline">\(R_n=R_n(X^n,\theta(P))\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[P(R_n\le q-\varepsilon)-P(|Q_n-q|&gt;\varepsilon)\le P(R_n\le Q_n)\le P(R_n\le q+\varepsilon)+P(|Q_n-q|&gt;\varepsilon).\]</div>{% endraw %}

<p>Its lower and upper limits are {% raw %}<span class="math inline">\(J(q-\varepsilon,P)\)</span>{% endraw %} and {% raw %}<span class="math inline">\(J(q+\varepsilon,P)\)</span>{% endraw %}. Continuity and the quantile inequalities imply {% raw %}<span class="math inline">\(J(q,P)=1-\alpha\)</span>{% endraw %}, so both bounds converge to the same desired coverage. The strict quantile condition is needed for this part of Proposition 3, in addition to continuity of the limiting cdf.</p>
<p>In a parametric model, the estimated population remains in the model. This gives the <em>parametric bootstrap</em>, whose consistency can be related directly to local asymptotic normality. Suppose {% raw %}<span class="math inline">\(X^n\)</span>{% endraw %} is a sample from a quadratic mean differentiable model {% raw %}<span class="math inline">\(\{P_\theta : \theta \in \mathbf T\}\)</span>{% endraw %}, where {% raw %}<span class="math inline">\(\mathbf T \subset \mathbb R^d\)</span>{% endraw %}. Assume the information matrix is positive definite, the parameter is an interior point, and let {% raw %}<span class="math inline">\(\hat \theta_n\)</span>{% endraw %} be an efficient likelihood estimator. Let {% raw %}<span class="math inline">\(g : \mathbf T \to \mathbb R\)</span>{% endraw %} be a differentiable map with nonzero gradient vector {% raw %}<span class="math inline">\(\dot g(\theta)\)</span>{% endraw %}. Consider the root </p>

{% raw %}<div class="math display">\[\begin{aligned}
    R_n (X^n, \theta) = \sqrt{n} (g(\hat \theta_n) - g(\theta)) ~.
\end{aligned}\]</div>{% endraw %}
<p> Let {% raw %}<span class="math inline">\(J_n (x, \theta)\)</span>{% endraw %} denote the distribution function of {% raw %}<span class="math inline">\(R_n (X^n, \theta)\)</span>{% endraw %}. By standard results on limiting distribution of likelihood estimators, we have </p>

{% raw %}<div class="math display">\[\begin{aligned}
    J_n (x, \theta) \to J(x, \theta) = \Phi \left( \frac{x}{\sigma_\theta} \right) ~,~ \text{where } \sigma_\theta^2 \triangleq \dot g(\theta) I(\theta)^{-1} \dot g(\theta)^{\top} ~.
\end{aligned}\]</div>{% endraw %}
<p> To estimate the distribution of {% raw %}<span class="math inline">\(\sqrt{n} (g(\hat \theta_n) - g(\theta))\)</span>{% endraw %}, we can use the normal approximation {% raw %}<span class="math inline">\(\mathcal{N}(0, \sigma_\theta^2)\)</span>{% endraw %}, provided we have access to a consistent estimator of {% raw %}<span class="math inline">\(\sigma_\theta^2\)</span>{% endraw %}. For now, suppose we know the forms of {% raw %}<span class="math inline">\(\dot g(\cdot)\)</span>{% endraw %} and {% raw %}<span class="math inline">\(I(\cdot)\)</span>{% endraw %}; and assume these maps are continuous at the true parameter, then a consistent estimator of {% raw %}<span class="math inline">\(\sigma_\theta^2\)</span>{% endraw %} is </p>

{% raw %}<div class="math display">\[\begin{aligned}
    \hat \sigma_n^2 = \dot g(\hat \theta_n) I(\hat \theta_n)^{-1} \dot g(\hat \theta_n)^{\top} ~.
\end{aligned}\]</div>{% endraw %}
<p> If we are able to consistently estimate {% raw %}<span class="math inline">\(\sigma_\theta^2\)</span>{% endraw %}, then we have the following result.</p>

<p>The local condition used below is stronger than a pointwise normal approximation: for every deterministic sequence {% raw %}<span class="math inline">\(h_n\to h\in\mathbb R^d\)</span>{% endraw %}, with {% raw %}<span class="math inline">\(\theta_n=\theta+h_n/\sqrt n\)</span>{% endraw %} in the model, assume</p>
{% raw %}<div class="math display">\[\sqrt n\{g(\hat\theta_n)-g(\theta_n)\}\ \rightsquigarrow\ \mathcal{N}(0,\sigma_\theta^2)\quad\text{under }P_{\theta_n}^n.\]</div>{% endraw %}
<p>Also assume {% raw %}<span class="math inline">\(\sqrt n(\hat\theta_n-\theta)=O_{P_\theta}(1)\)</span>{% endraw %}. These properties hold for regular efficient estimators in the LAN setting. They specify the local sampling-distribution assumptions needed for the parametric bootstrap; knowledge of the variance formula alone is insufficient.</p>

<div id="result-4" class="proposition" data-note-number="4" data-note-kind="Proposition">
<p><strong>Proposition 4</strong>.  In the parametric bootstrap setup above, under {% raw %}<span class="math inline">\(\theta\)</span>{% endraw %}, {% raw %}<span class="math inline">\(J_n (x, \hat \theta_n)\)</span>{% endraw %} converges uniformly in probability to {% raw %}<span class="math inline">\(J(x,\theta)\)</span>{% endraw %}, i.e. </p>

{% raw %}<div class="math display">\[\begin{aligned}\sup_x |J_n (x,\hat\theta_n) - J (x,\theta)| &amp;\xrightarrow{P} 0 ~, \end{aligned}\]</div><p>and</p>

<div class="math display">\[\begin{aligned}\sup_x |J_n (x, \hat \theta_n) - J_n (x, \theta)| &amp;\xrightarrow{P} 0 ~.\end{aligned}\]</div>{% endraw %}
</div>
<div class="proof"><p><em>Proof.</em> Let {% raw %}<span class="math inline">\(d_n(h)=\sup_x|J_n(x,\theta+h/\sqrt n)-J(x,\theta)|\)</span>{% endraw %}. The sequential local assumption and continuity of the normal cdf imply {% raw %}<span class="math inline">\(d_n(h_n)\to0\)</span>{% endraw %} whenever {% raw %}<span class="math inline">\(h_n\to h\)</span>{% endraw %}. Consequently {% raw %}<span class="math inline">\(\sup_{\|h\|\le M}d_n(h)\to0\)</span>{% endraw %} for every fixed {% raw %}<span class="math inline">\(M\)</span>{% endraw %}, restricting the supremum to parameters in the model: otherwise a violating sequence in this compact ball would have a convergent subsequence. Tightness of {% raw %}<span class="math inline">\(\sqrt n(\hat\theta_n-\theta)\)</span>{% endraw %} now gives {% raw %}<span class="math inline">\(d_n(\sqrt n(\hat\theta_n-\theta))\to0\)</span>{% endraw %} in probability. Taking {% raw %}<span class="math inline">\(h=0\)</span>{% endraw %} and applying the triangle inequality proves the second assertion. This argument works in every finite dimension. ◻</p></div>

<p>To spell out the compactness step in Proposition 4, a failure of uniform convergence would give {% raw %}<span class="math inline">\(\varepsilon&gt;0\)</span>{% endraw %}, indices {% raw %}<span class="math inline">\(n_j\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(\|h_j\|\le M\)</span>{% endraw %} with {% raw %}<span class="math inline">\(d_{n_j}(h_j)&gt;\varepsilon\)</span>{% endraw %}. Extract {% raw %}<span class="math inline">\(h_j\to h\)</span>{% endraw %} and extend these values to a full sequence by setting the remaining {% raw %}<span class="math inline">\(h_n=h\)</span>{% endraw %}. The sequential assumption contradicts the displayed lower bound. With {% raw %}<span class="math inline">\(H_n=\sqrt n(\hat\theta_n-\theta)\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[P_\theta\{d_n(H_n)&gt;\varepsilon\}\le P_\theta(\|H_n\|&gt;M)+\mathbf1\{\sup_{\|h\|\le M}d_n(h)&gt;\varepsilon\}.\]</div>{% endraw %}

<p>First take {% raw %}<span class="math inline">\(n\to\infty\)</span>{% endraw %}, then {% raw %}<span class="math inline">\(M\to\infty\)</span>{% endraw %}. This is why tightness of the local estimator suffices and almost-sure convergence of {% raw %}<span class="math inline">\(H_n\)</span>{% endraw %} is unnecessary.</p>
<p>Thus, a one-sided bootstrap lower confidence bound for {% raw %}<span class="math inline">\(g(\theta)\)</span>{% endraw %} is of the form {% raw %}<span class="math inline">\(g(\hat \theta_n) - \frac{1}{\sqrt{n}} J_n^{-1} (1-\alpha, \hat \theta_n)\)</span>{% endraw %}. The quantile argument in Proposition <a href="#prop:bootstrap-consistency" data-reference-type="ref" data-reference="prop:bootstrap-consistency">3</a>, applied in probability to Proposition 4, implies that, under {% raw %}<span class="math inline">\(\theta\)</span>{% endraw %}, we have {% raw %}<span class="math inline">\(J_n^{-1} (1-\alpha, \hat \theta_n) \xrightarrow{P} \sigma_\theta z_{1-\alpha}\)</span>{% endraw %}. Now consider testing {% raw %}<span class="math inline">\(H_0 : g(\theta)=0\)</span>{% endraw %} versus {% raw %}<span class="math inline">\(H_1 : g(\theta)&gt;0\)</span>{% endraw %}. By the duality between confidence regions and tests, reject the null if {% raw %}<span class="math inline">\(\sqrt{n} g(\hat \theta_n) &gt; J_n^{-1} (1-\alpha, \hat \theta_n)\)</span>{% endraw %}. Note that under {% raw %}<span class="math inline">\(g(\theta)=0\)</span>{% endraw %}, {% raw %}<span class="math inline">\(\sqrt{n} (g(\hat \theta_n) - g(\theta)) \xrightarrow{d} \mathcal{N}(0, \sigma_\theta^2)\)</span>{% endraw %} by Slutsky’s theorem. Therefore, this test is asymptotically level {% raw %}<span class="math inline">\(\alpha\)</span>{% endraw %}. To characterize the limiting power of this test against a contiguous sequence of alternatives, we have the following result.</p>

<div id="result-5" class="proposition" data-note-number="5" data-note-kind="Proposition">
<p><strong>Proposition 5</strong>.  In the parametric bootstrap setup above, with {% raw %}<span class="math inline">\(\theta\)</span>{% endraw %} satisfying {% raw %}<span class="math inline">\(g(\theta)=0\)</span>{% endraw %}, the limiting power of the test that rejects when {% raw %}<span class="math inline">\(\sqrt{n} g(\hat \theta_n) &gt; J_n^{-1} (1-\alpha, \hat \theta_n)\)</span>{% endraw %} against the sequence {% raw %}<span class="math inline">\(\theta_n = \theta + \frac{h}{\sqrt{n}}\)</span>{% endraw %} is characterized by </p>

{% raw %}<div class="math display">\[\begin{aligned}
        P_{\theta_n}^{n} (\sqrt{n} g(\hat \theta_n) &gt; J_n^{-1} (1-\alpha, \hat \theta_n)) \to 1 - \Phi \left( z_{1-\alpha} - \sigma_\theta^{-1} \langle \dot g(\theta)^{\top}, h \rangle \right) ~.
    
\end{aligned}\]</div>{% endraw %}
</div>
<div class="proof">
<p><em>Proof.</em> This follows from a result from the theory of efficient likelihood estimators. First, note that </p>

{% raw %}<div class="math display">\[\begin{aligned}
        &amp;P_{\theta_n}^{n} (\sqrt{n} g(\hat \theta_n) &gt; J_n^{-1} (1-\alpha, \hat \theta_n)) \\
        =\; &amp; P_{\theta_n}^{n} (\sqrt{n} (g(\hat \theta_n) - g(\theta_n)) &gt; J_n^{-1} (1-\alpha, \hat \theta_n) - \sqrt{n} g(\theta_n)) ~. 
    
\end{aligned}\]</div>{% endraw %}
<p> Then, note that {% raw %}<span class="math inline">\(J_n^{-1} (1-\alpha, \hat \theta_n) \xrightarrow{P_\theta^n} \sigma_\theta z_{1-\alpha}\)</span>{% endraw %}. Contiguity implies that under {% raw %}<span class="math inline">\(P_{\theta_n}^n\)</span>{% endraw %}, {% raw %}<span class="math inline">\(J_n^{-1} (1-\alpha, \hat \theta_n) \xrightarrow{P_{\theta_n}^n} \sigma_\theta z_{1-\alpha}\)</span>{% endraw %}. Therefore, because {% raw %}<span class="math inline">\(g(\theta)=0\)</span>{% endraw %} and {% raw %}<span class="math inline">\(g\)</span>{% endraw %} is differentiable, we have {% raw %}<span class="math inline">\(\sqrt{n} g(\theta_n) \to \langle \dot g(\theta)^{\top}, h \rangle\)</span>{% endraw %}. Appealing to the limiting distribution results of efficient likelihood estimators, we have that {% raw %}<span class="math inline">\(\sqrt{n} (g(\hat \theta_n) - g(\theta_n)) \xrightarrow{d} \mathcal{N}(0,\sigma_\theta^2)\)</span>{% endraw %}, hence, by Slutsky’s theorem, </p>

{% raw %}<div class="math display">\[\begin{aligned}
        P(\sqrt{n} (g(\hat \theta_n) - g(\theta_n)) &gt; J_n^{-1} (1-\alpha, \hat \theta_n) - \sqrt{n} g(\theta_n)) \to P(\sigma_\theta Z &gt; \sigma_\theta z_{1-\alpha} - \langle \dot g(\theta)^{\top}, h \rangle) ~,
    
\end{aligned}\]</div>{% endraw %}
<p> which is the desired result. ◻</p>

</div>
<div id="result-6" class="remark" data-note-number="6" data-note-kind="Remark">
<p><strong>Remark 6</strong>.  The bootstrap can produce an asymptotically optimal test, in the sense that the limiting power is optimal, as above. However, this can only happen if the initial estimator or test statistic is optimally chosen. If the root is based on a suboptimal estimator, then accurately approximating its sampling distribution does not remove that loss of efficiency.</p>

</div>

<nav class="note-series" aria-label="Notes in this series"><p>Next: <a href="{% post_url 2022-09-29-bootstrapping-the-mean-and-coverage-accuracy %}">Bootstrapping the Mean and Coverage Accuracy</a></p></nav>

</div>
