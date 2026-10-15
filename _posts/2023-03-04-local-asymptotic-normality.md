---
layout: "post"
title: "Local Asymptotic Normality"
date: "2023-03-04"
tags: ["statistics", "asymptotic theory"]
excerpt: "Local Asymptotic Normality. Notes on local asymptotic normality and efficiency."
note_series: "Local asymptotic normality and efficiency"
note_source: "assets/notes/Overleaf Projects (32 items)/Asymptotic Normality and Efficiency (Chapters 7 and 8)/main.tex"
---

<div class="note-content" markdown="0">

<p>How much can a sample tell us about two nearby parameter values? If their separation is comparable to the sampling error, neither value can be discarded simply by taking a large sample. Local asymptotic normality describes the likelihood at this scale. The <a href="{% post_url 2022-05-07-contiguity-change-of-measure-and-m-estimation %}#08-0-calibration-example">contiguity note</a> motivates that scale with a calibration example and gives a <a href="{% post_url 2022-05-07-contiguity-change-of-measure-and-m-estimation %}#08-0-qmd-to-lan">full square-root-likelihood proof of QMD-to-LAN</a>. The calculations below show how the score determines its random part and Fisher information determines its curvature. When using LAN to study an estimator, distinguish a fixed-direction expansion from the compact-uniform expansion required by the <a href="{% post_url 2022-05-07-contiguity-change-of-measure-and-m-estimation %}#08-0-argmax-general">argmax theorem</a>.</p>

<div id="basics-of-local-asymptotic-normality" data-note-section="title">

</div>
<div>
<p>We want to describe the likelihood near a fixed parameter {% raw %}<span class="math inline">\(\theta\)</span>{% endraw %}. The relevant alternatives are {% raw %}<span class="math inline">\(\theta+h/\sqrt n\)</span>{% endraw %}, where {% raw %}<span class="math inline">\(h\)</span>{% endraw %} remains bounded as the sample size grows. Write {% raw %}<span class="math inline">\(p_\theta\)</span>{% endraw %} for a density relative to a common dominating measure {% raw %}<span class="math inline">\(\mu\)</span>{% endraw %}, and let {% raw %}<span class="math inline">\(\ell_\theta(x)=\log p_\theta(x)\)</span>{% endraw %}. At this scale, summing the small changes in log likelihood produces two terms of comparable size: a centered random sum and a deterministic quadratic correction. The expansion below makes this balance explicit.</p>

</div>
<div>
<p>In a one-dimensional smooth model, a Taylor expansion suggests </p>

{% raw %}<div class="math display">\[\ell_{\theta+t}(x)-\ell_\theta(x)
 =t\dot\ell_\theta(x)+\frac{1}{2}t^2\ddot\ell_\theta(x)+o(t^2).\]</div>{% endraw %}
<p> Under the usual conditions for differentiating the integral of the density, {% raw %}<span class="math inline">\(E_\theta\dot\ell_\theta(X)=0\)</span>{% endraw %} and {% raw %}<span class="math inline">\(-E_\theta\ddot\ell_\theta(X)=I_\theta=E_\theta\dot\ell_\theta(X)^2\)</span>{% endraw %}. Taking {% raw %}<span class="math inline">\(t=h/\sqrt n\)</span>{% endraw %} and summing over the observations gives the heuristic expansion </p>

{% raw %}<div class="math display">\[\sum_{i=1}^n\log\frac{p_{\theta+h/\sqrt n}(X_i)}{p_\theta(X_i)}
 =h\Delta_{n,\theta}-\frac{1}{2} h^2I_\theta+o_{P_\theta}(1),
 \qquad \Delta_{n,\theta}=n^{-1/2}\sum_{i=1}^n\dot\ell_\theta(X_i).\]</div>{% endraw %}
<p> The formal calculation leaves a question about the remainder. There are more observations as the local displacement shrinks, so the individual Taylor errors must remain small after summation. A pointwise Taylor expansion alone does not establish this.</p>

</div>
<div>
<p>The central limit theorem gives {% raw %}<span class="math inline">\(\Delta_{n,\theta}\Rightarrow \mathcal{N}(0,I_\theta)\)</span>{% endraw %} when the score is square-integrable. Thus the local log likelihood has a Gaussian linear term and a quadratic drift. Differentiability in quadratic mean gives a way to prove this without requiring a pointwise second derivative of the log density.</p>

</div>
<div>
<p>The square root of a density belongs to a Hilbert space, where differentiability controls the integrated error directly. We therefore impose a smoothness condition on the square root of the density. The score below is denoted {% raw %}<span class="math inline">\(\dot\ell_\theta\)</span>{% endraw %}.</p>

</div>
<div id="Ass:Quadratic_Mean_Diff" class="assumption" data-note-number="1" data-note-kind="Assumption">
<p><strong>Assumption 1</strong>.  {% raw %}<span class="math inline">\(\theta \mapsto \sqrt{\mathbb{P}_{\theta}}\)</span>{% endraw %} is <em>differentiable in quadratic mean</em>, i.e. </p>

{% raw %}<div class="math display">\[\begin{aligned}
        \int \left( \sqrt{\mathbb{P}_{\theta+h}} - \sqrt{\mathbb{P}_{\theta}} - \frac{1}{2} h^{\intercal} \dot{\ell}_{\theta} \sqrt{\mathbb{P}_{\theta}} \right)^2 \dif \mu = o(\norm{h}^2)
    
\end{aligned}\]</div>{% endraw %}
</div>
<div id="Thm:local_asymptotic_normality_1" class="theorem" data-note-number="2" data-note-kind="Theorem">
<p><strong>Theorem 2</strong>.  Let {% raw %}<span class="math inline">\(\Theta\subset\mathbb R^k\)</span>{% endraw %} be open, and suppose the model with densities {% raw %}<span class="math inline">\(p_\theta\)</span>{% endraw %} is differentiable in quadratic mean at {% raw %}<span class="math inline">\(\theta\)</span>{% endraw %}, with square-integrable score {% raw %}<span class="math inline">\(\dot\ell_\theta\)</span>{% endraw %}. Then {% raw %}<span class="math inline">\(E_\theta\dot\ell_\theta=0\)</span>{% endraw %} and {% raw %}<span class="math inline">\(I_\theta=E_\theta[\dot\ell_\theta\dot\ell_\theta^\top]\)</span>{% endraw %} is finite. If {% raw %}<span class="math inline">\(h_n\to h\)</span>{% endraw %}, then for i.i.d. observations from {% raw %}<span class="math inline">\(P_\theta\)</span>{% endraw %}, </p>

{% raw %}<div class="math display">\[\log\prod_{i=1}^n\frac{p_{\theta+h_n/\sqrt n}(X_i)}{p_\theta(X_i)}
 =\frac1{\sqrt n}\sum_{i=1}^n h^\top\dot\ell_\theta(X_i)-\frac12h^\top I_\theta h+o_{P_\theta}(1).\]</div>{% endraw %}
</div>
<div class="proof">
<p><em>Proof.</em> Fix {% raw %}<span class="math inline">\(h_n\to h\)</span>{% endraw %}, put {% raw %}<span class="math inline">\(p_n=p_{\theta+h_n/\sqrt n}\)</span>{% endraw %}, {% raw %}<span class="math inline">\(p=p_\theta\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(g=h^\top\dot\ell_\theta\)</span>{% endraw %}. Differentiability in quadratic mean gives </p>

{% raw %}<div class="math display">\[\sqrt n(\sqrt{p_n}-\sqrt p)\longrightarrow\frac{1}{2}g\sqrt p
 \quad\text{in }L^2(\mu).\]</div>{% endraw %}
<p> Since {% raw %}<span class="math inline">\(\int(p_n-p)\,d\mu=0\)</span>{% endraw %}, taking the inner product with {% raw %}<span class="math inline">\(\sqrt{p_n}+\sqrt p\)</span>{% endraw %} shows that {% raw %}<span class="math inline">\(E_\theta g=0\)</span>{% endraw %}. Applying this to the coordinate directions gives the mean-zero score. Define, on {% raw %}<span class="math inline">\(\{p&gt;0\}\)</span>{% endraw %}, </p>

{% raw %}<span id="Eq:W_ni"></span><div class="math display">\[
 W_{n,i}=2\left(\sqrt{p_n/p}(X_i)-1\right).\tag{1}\]</div>{% endraw %}
<p> The quadratic-mean condition implies {% raw %}<span class="math inline">\(E_\theta(\sqrt nW_{n,1}-g(X_1))^2\to0\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(n\int_{\{p=0\}}p_n\,d\mu\to0\)</span>{% endraw %}. Normalization of {% raw %}<span class="math inline">\(p_n\)</span>{% endraw %} therefore gives </p>

{% raw %}<div class="math display">\[E_\theta W_{n,1}+\frac{1}{4}E_\theta W_{n,1}^2
 =-\int_{\{p=0\}}p_n\,d\mu,
 \qquad nE_\theta W_{n,1}\to-\frac{1}{4}E_\theta g^2.\]</div>{% endraw %}
<p> The next step separates the mean of the square-root increment from its fluctuation. Independence and the {% raw %}<span class="math inline">\(L^2\)</span>{% endraw %} approximation show that the centered difference between {% raw %}<span class="math inline">\(\sum_iW_{n,i}\)</span>{% endraw %} and {% raw %}<span class="math inline">\(n^{-1/2}\sum_i g(X_i)\)</span>{% endraw %} has variance tending to zero. Thus </p>

{% raw %}<div class="math display">\[\sum_iW_{n,i}=n^{-1/2}\sum_i g(X_i)-\frac{1}{4}E_\theta g^2+o_P(1).\]</div>{% endraw %}
<p>To see the variance bound explicitly, put {% raw %}<span class="math inline">\(A_{n,i}=\sqrt nW_{n,i}-g(X_i)\)</span>{% endraw %}. The variables within each row are independent and identically distributed, so</p>

{% raw %}<div class="math display">\[\operatorname{Var}\!\left\{\sum_{i=1}^nW_{n,i}-n^{-1/2}\sum_{i=1}^ng(X_i)\right\}=\operatorname{Var}(A_{n,1})\le E A_{n,1}^{2}\longrightarrow0.\]</div>{% endraw %}

<p>Its mean is {% raw %}<span class="math inline">\(nEW_{n,1}\)</span>{% endraw %}, because {% raw %}<span class="math inline">\(Eg=0\)</span>{% endraw %}. Combining the mean limit with Chebyshev's inequality gives the preceding expansion. The contribution outside the support of {% raw %}<span class="math inline">\(p\)</span>{% endraw %} must be retained in the normalization identity: on {% raw %}<span class="math inline">\(\{p=0\}\)</span>{% endraw %} the QMD approximation term vanishes, so QMD itself bounds {% raw %}<span class="math inline">\(\int_{\{p=0\}}p_n\,d\mu=o(n^{-1})\)</span>{% endraw %}.</p>
<p> Moreover, {% raw %}<span class="math inline">\(\sum_i(W_{n,i}-g(X_i)/\sqrt n)^2\to_P0\)</span>{% endraw %}. Cauchy–Schwarz and the law of large numbers imply {% raw %}<span class="math inline">\(\sum_iW_{n,i}^2\to_P E_\theta g^2\)</span>{% endraw %}. The {% raw %}<span class="math inline">\(L^2\)</span>{% endraw %} approximation also makes {% raw %}<span class="math inline">\((\sqrt nW_{n,1})^2\)</span>{% endraw %} uniformly integrable, so </p>

{% raw %}<div class="math display">\[P\!\left(\max_i|W_{n,i}|&gt;\varepsilon\right)
 \leqslant\varepsilon^{-2}nE[W_{n,1}^2\mathbf1\{|W_{n,1}|&gt;\varepsilon\}]\to0.\]</div>{% endraw %}
<p>Here is the squared-sum calculation. Markov's inequality gives {% raw %}<span class="math inline">\(n^{-1}\sum_i A_{n,i}^2\to_P0\)</span>{% endraw %}, while {% raw %}<span class="math inline">\(n^{-1}\sum_i g(X_i)^2\to_P Eg^2\)</span>{% endraw %}. Hence</p>

{% raw %}<div class="math display">\[\left|\sum_iW_{n,i}^2-\frac1n\sum_i g(X_i)^2\right|\le2\left(\frac1n\sum_i g(X_i)^2\right)^{1/2}\left(\frac1n\sum_i A_{n,i}^2\right)^{1/2}+\frac1n\sum_i A_{n,i}^2\to_P0.\]</div>{% endraw %}

<p>Also, {% raw %}<span class="math inline">\(\sqrt nW_{n,1}\to g(X_1)\)</span>{% endraw %} in {% raw %}<span class="math inline">\(L^2\)</span>{% endraw %} implies convergence of their squares in {% raw %}<span class="math inline">\(L^1\)</span>{% endraw %}, by Cauchy–Schwarz. The squares are therefore uniformly integrable. In the maximum bound above the truncation level is {% raw %}<span class="math inline">\(\varepsilon^2 n\)</span>{% endraw %}, which tends to infinity; uniform integrability makes that tail expectation vanish.</p>
<p> The maximum bound ensures that every observed increment lies in the region where the logarithm has a uniform Taylor expansion, with probability tending to one. We can consequently apply {% raw %}<span class="math inline">\(2\log(1+w/2)=w-w^2/4+o(w^2)\)</span>{% endraw %} uniformly over the observations. Summing gives </p>

{% raw %}<div class="math display">\[\log\prod_i\frac{p_n(X_i)}{p(X_i)}
 =\sum_iW_{n,i}-\frac{1}{4}\sum_iW_{n,i}^2+o_P(1)
 =n^{-1/2}\sum_i g(X_i)-\frac{1}{2}E_\theta g^2+o_P(1).\]</div>{% endraw %}
<p>More explicitly, define {% raw %}<span class="math inline">\(r(w)=[2\log(1+w/2)-w+w^2/4]/w^2\)</span>{% endraw %} for {% raw %}<span class="math inline">\(w\ne0\)</span>{% endraw %}, with {% raw %}<span class="math inline">\(r(0)=0\)</span>{% endraw %}. On {% raw %}<span class="math inline">\(|w|\le1\)</span>{% endraw %}, this is continuous and {% raw %}<span class="math inline">\(r(w)\to0\)</span>{% endraw %} as {% raw %}<span class="math inline">\(w\to0\)</span>{% endraw %}. With probability tending to one all {% raw %}<span class="math inline">\(|W_{n,i}|\le1\)</span>{% endraw %}, so all likelihood ratios at the observed sample points are positive and</p>

{% raw %}<div class="math display">\[\left|\sum_iW_{n,i}^2r(W_{n,i})\right|\le\sup_{|w|\le\max_i|W_{n,i}|}|r(w)|\sum_iW_{n,i}^2=o_P(1)O_P(1)=o_P(1).\]</div>{% endraw %}

<p>This justifies summing the Taylor errors; pointwise small errors without the maximum bound would not suffice.</p>
<p> Since {% raw %}<span class="math inline">\(E_\theta g^2=h^\top I_\theta h\)</span>{% endraw %}, this is the desired expansion. ◻</p>

</div>

<nav class="note-series" aria-label="Notes in this series"><p>Next: <a href="{% post_url 2023-04-25-regular-estimators-limit-experiments-and-asymptotic-efficiency %}">Regular Estimators, Limit Experiments, and Asymptotic Efficiency</a></p></nav>

</div>
