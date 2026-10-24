---
layout: "post"
title: "Local Asymptotic Normality"
date: "2023-03-04"
tags: ["statistics", "asymptotic theory"]
excerpt: "The sequential LAN expansion, its Gaussian limit experiment, and the distinction between deterministic directions and uniform likelihood approximation."
note_series: "Local asymptotic normality and efficiency"
note_source: "assets/notes/Overleaf Projects (32 items)/Asymptotic Normality and Efficiency (Chapters 7 and 8)/main.tex"
---

<div class="note-content" markdown="0">
<p>Local asymptotic normality describes likelihood ratios at parameter displacements of order {% raw %}<span class="math inline">\(n^{-1/2}\)</span>{% endraw %}. Under QMD, the log likelihood ratio is a linear function of the normalized score plus a deterministic quadratic term. Its Gaussian limit determines both contiguity and the distribution of the score under local alternatives.</p>

<div data-note-section="title" id="basics-of-local-asymptotic-normality">
</div>
<div>
<p>Let {% raw %}<span class="math inline">\(P_\theta\)</span>{% endraw %} have density {% raw %}<span class="math inline">\(p_\theta\)</span>{% endraw %} relative to a fixed measure {% raw %}<span class="math inline">\(\mu\)</span>{% endraw %}, with {% raw %}<span class="math inline">\(\theta\)</span>{% endraw %} interior to {% raw %}<span class="math inline">\(\Theta\subset\mathbb R^d\)</span>{% endraw %}. Write {% raw %}<span class="math inline">\(\ell_\theta=\log p_\theta\)</span>{% endraw %}. The observations are i.i.d. and their joint law is {% raw %}<span class="math inline">\(P_\theta^{\otimes n}\)</span>{% endraw %}. The local alternatives are {% raw %}<span class="math inline">\(\theta+h_n/\sqrt n\)</span>{% endraw %}, with deterministic {% raw %}<span class="math inline">\(h_n\to h\)</span>{% endraw %}.</p>

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
<p>Differentiability of the square-root density controls the integrated error. The following assumption uses that control in place of a pointwise second derivative.</p>

</div>
<h2 id="lan-expansion">Quadratic-mean differentiability and the likelihood expansion</h2>
<div class="assumption" data-note-kind="Assumption" data-note-number="1" id="Ass:Quadratic_Mean_Diff"><p><strong>Assumption 1 (QMD).</strong> There is a measurable score {% raw %}<span class="math inline">\(\dot\ell_\theta\in L^2(P_\theta;\mathbb R^d)\)</span>{% endraw %} such that {% raw %}<span class="math display">\[
\int\left(\sqrt{p_{\theta+t}}-\sqrt{p_\theta}-\frac12t^\top\dot\ell_\theta\sqrt{p_\theta}\right)^2d\mu=o(\|t\|^2).
\]</span>{% endraw %} The <a href="{% post_url 2022-04-13-quadratic-mean-differentiability %}#qmd-definition">QMD note</a> gives the equivalent square-root derivative definition and verification conditions.</p>
</div>
<div class="theorem" data-note-kind="Theorem" data-note-number="2" id="Thm:local_asymptotic_normality_1">
<p><strong>Theorem 2</strong>.  Let {% raw %}<span class="math inline">\(\Theta\subset\mathbb R^d\)</span>{% endraw %} be open, and suppose the model with densities {% raw %}<span class="math inline">\(p_\theta\)</span>{% endraw %} is differentiable in quadratic mean at {% raw %}<span class="math inline">\(\theta\)</span>{% endraw %}, with square-integrable score {% raw %}<span class="math inline">\(\dot\ell_\theta\)</span>{% endraw %}. Then {% raw %}<span class="math inline">\(E_\theta\dot\ell_\theta=0\)</span>{% endraw %} and {% raw %}<span class="math inline">\(I_\theta=E_\theta[\dot\ell_\theta\dot\ell_\theta^\top]\)</span>{% endraw %} is finite. If {% raw %}<span class="math inline">\(h_n\to h\)</span>{% endraw %}, then for i.i.d. observations from {% raw %}<span class="math inline">\(P_\theta\)</span>{% endraw %}, </p>

{% raw %}<div class="math display">\[\log\prod_{i=1}^n\frac{p_{\theta+h_n/\sqrt n}(X_i)}{p_\theta(X_i)}
 =\frac1{\sqrt n}\sum_{i=1}^n h^\top\dot\ell_\theta(X_i)-\frac12h^\top I_\theta h+o_{P_\theta}(1).\]</div>{% endraw %}
</div><p>Define {% raw %}<span class="math inline">\(\Delta_{n,\theta}=n^{-1/2}\sum_i\dot\ell_\theta(X_i)\)</span>{% endraw %}. Since {% raw %}<span class="math inline">\(h_n-h\to0\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\Delta_{n,\theta}=O_{P_\theta^{\otimes n}}(1)\)</span>{% endraw %}, the expansion may equivalently be written {% raw %}<span class="math display">\[
\log L_{n,h_n}=h_n^\top\Delta_{n,\theta}-\frac12h_n^\top I_\theta h_n+o_{P_\theta^{\otimes n}}(1),\qquad
\Delta_{n,\theta}\Rightarrow\mathcal{N}_d(0,I_\theta).
\]</span>{% endraw %} Here {% raw %}<span class="math inline">\(L_{n,h_n}\)</span>{% endraw %} denotes the derivative of the absolutely continuous part of the alternative sample law. QMD makes the omitted singular mass vanish. If {% raw %}<span class="math inline">\(h^\top I_\theta h=0\)</span>{% endraw %}, the log-likelihood limit is the constant zero; nonsingularity is unnecessary for the expansion.</p>
<p>The proof in <a href="#lan-proof">Appendix A</a> starts with {% raw %}<span class="math inline">\(W_{n,i}=2(\sqrt{p_{\theta+h_n/\sqrt n}/p_\theta}(X_i)-1)\)</span>{% endraw %}. The proof requires three estimates: {% raw %}<span class="math display">\[
\sum_iW_{n,i}=h^\top\Delta_{n,\theta}-\frac14h^\top I_\theta h+o_P(1),\quad
\sum_iW_{n,i}^2\xrightarrow{P} h^\top I_\theta h,\quad
\max_i|W_{n,i}|\xrightarrow{P}0.
\]</span>{% endraw %} The bound on the largest increment places all {% raw %}<span class="math inline">\(W_{n,i}\)</span>{% endraw %} in a common Taylor neighborhood with probability tending to one. Since the largest increment tends to zero in probability, the remainder coefficient tends uniformly to zero over the observations. The bound on the sum of squares then makes the sum of the remainders in {% raw %}<span class="math inline">\(2\log(1+w/2)=w-w^2/4+o(w^2)\)</span>{% endraw %} equal to {% raw %}<span class="math inline">\(o_P(1)\)</span>{% endraw %}. Finally, the expansion of {% raw %}<span class="math inline">\(\sum_iW_{n,i}\)</span>{% endraw %} and the term {% raw %}<span class="math inline">\(-\frac14\sum_iW_{n,i}^2\)</span>{% endraw %} each contribute {% raw %}<span class="math inline">\(-h^\top I_\theta h/4\)</span>{% endraw %}, giving the total drift {% raw %}<span class="math inline">\(-h^\top I_\theta h/2\)</span>{% endraw %}.</p>
<h2 id="lan-gaussian-experiment">The Gaussian limit experiment</h2>
<div class="proposition" id="lan-score-under-alternatives">
<p><strong>Proposition (Score under local alternatives).</strong> Under Assumption 1, the reference and local alternative sample laws are mutually contiguous, and {% raw %}<span class="math display">\[
\Delta_{n,\theta}\xRightarrow[P_{\theta+h_n/\sqrt n}^{\otimes n}]{}
\mathcal{N}_d(I_\theta h,I_\theta).
\]</span>{% endraw %}</p>
</div>
<p><em>Proof.</em> The null log-likelihood limit is normal with mean {% raw %}<span class="math inline">\(-h^\top I_\theta h/2\)</span>{% endraw %} and variance {% raw %}<span class="math inline">\(h^\top I_\theta h\)</span>{% endraw %}. Its exponential has expectation one and is strictly positive, giving mutual contiguity by the first lemma. The joint limit of the score and log likelihood is {% raw %}<span class="math inline">\((\Delta,h^\top\Delta-h^\top I_\theta h/2)\)</span>{% endraw %}. Its cross covariance is {% raw %}<span class="math inline">\(I_\theta h\)</span>{% endraw %}. The Gaussian form of the <a href="{% post_url 2022-01-09-contiguity-change-of-measure-and-m-estimation %}#08-0-calculate-the-gaussian-mean-shift">third lemma</a> gives the assertion. {% raw %}<span class="math inline">\(\square\)</span>{% endraw %}</p>
<p>If {% raw %}<span class="math inline">\(I_\theta\)</span>{% endraw %} is positive definite, {% raw %}<span class="math inline">\(I_\theta^{-1}\Delta\)</span>{% endraw %} has law {% raw %}<span class="math inline">\(\mathcal{N}_d(h,I_\theta^{-1})\)</span>{% endraw %} under the tilted experiment. Its likelihood ratio relative to {% raw %}<span class="math inline">\(h=0\)</span>{% endraw %} is {% raw %}<span class="math inline">\(\exp(h^\top\Delta-h^\top I_\theta h/2)\)</span>{% endraw %}. This identifies the Gaussian shift experiment used in the <a href="{% post_url 2023-04-25-regular-estimators-limit-experiments-and-asymptotic-efficiency %}">efficiency note</a>.</p>
<h2 id="lan-uniformity">Uniformity and estimation</h2>
<p>Theorem 2 applies along every deterministic convergent direction. Compactness and the <a href="{% post_url 2022-01-09-contiguity-change-of-measure-and-m-estimation %}#contiguity-sequential-lan">sequential contiguity lemma</a> extend contiguity to every bounded deterministic sequence. Substituting a sample-dependent maximizer requires a likelihood approximation that is uniform over bounded sets of directions.</p>
<p>The required bound is {% raw %}<span class="math display">\[
\sup_{\|h\|\le K}|\log L_{n,h}-h^\top\Delta_{n,\theta}+\frac12h^\top I_\theta h|\xrightarrow{P}0
\]</span>{% endraw %} for each fixed {% raw %}<span class="math inline">\(K\)</span>{% endraw %}, together with tightness of the fitted local direction. The <a href="{% post_url 2022-04-13-quadratic-mean-differentiability %}#qmd-technical-appendix">QMD likelihood-estimator argument</a> derives both properties under a square-integrable log-Lipschitz condition. The <a href="{% post_url 2022-01-09-contiguity-change-of-measure-and-m-estimation %}#quadratic-m-estimation">quadratic M-estimation proposition</a> then gives the estimator’s linear representation.</p>


<h2 id="lan-proof">Appendix A. Proof of the sequential likelihood expansion</h2>
<div class="proof">
<p><em>Proof.</em> Fix {% raw %}<span class="math inline">\(h_n\to h\)</span>{% endraw %}, and put {% raw %}<span class="math inline">\(p_n=p_{\theta+h_n/\sqrt n}\)</span>{% endraw %}, {% raw %}<span class="math inline">\(p=p_\theta\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(g=h^\top\dot\ell_\theta\)</span>{% endraw %}. All probability limits in this proof are under {% raw %}<span class="math inline">\(P_\theta^{\otimes n}\)</span>{% endraw %}. QMD gives</p>
{% raw %}<div class="math display">\[\sqrt n(\sqrt{p_n}-\sqrt p)\longrightarrow\frac12g\sqrt p\quad\text{in }L^2(\mu).\]</div>{% endraw %}
<p>Since {% raw %}<span class="math inline">\(\int(p_n-p)\,d\mu=0\)</span>{% endraw %}, taking the inner product with {% raw %}<span class="math inline">\(\sqrt{p_n}+\sqrt p\)</span>{% endraw %} gives {% raw %}<span class="math inline">\(E_\theta g=0\)</span>{% endraw %}. Applying the same argument to each coordinate direction proves that the score has mean zero. On {% raw %}<span class="math inline">\(\{p&gt;0\}\)</span>{% endraw %}, define</p>
{% raw %}<span id="Eq:W_ni"></span>{% endraw %}{% raw %}<div class="math display">\[W_{n,i}=2\left(\sqrt{p_n/p}(X_i)-1\right).\tag{1}\]</div>{% endraw %}
<p>Write {% raw %}<span class="math inline">\(s_n=\int_{\{p=0\}}p_n\,d\mu\)</span>{% endraw %} for the alternative mass outside the reference support. QMD implies {% raw %}<span class="math inline">\(E_\theta(\sqrt nW_{n,1}-g(X_1))^2\to0\)</span>{% endraw %} and {% raw %}<span class="math inline">\(ns_n\to0\)</span>{% endraw %}. The singular mass of the product alternative is {% raw %}<span class="math inline">\(1-(1-s_n)^n\le ns_n\)</span>{% endraw %}, so it also vanishes. Normalization of {% raw %}<span class="math inline">\(p_n\)</span>{% endraw %} gives</p>
{% raw %}<div class="math display">\[E_\theta W_{n,1}+\frac14E_\theta W_{n,1}^2=-s_n,\qquad nE_\theta W_{n,1}^2\to E_\theta g^2,\qquad nE_\theta W_{n,1}\to-\frac14E_\theta g^2.\]</div>{% endraw %}
<p>For the sum of the increments, put {% raw %}<span class="math inline">\(A_{n,i}=\sqrt nW_{n,i}-g(X_i)\)</span>{% endraw %}. Independence within each row gives</p>
{% raw %}<div class="math display">\[\operatorname{Var}_\theta\!\left(\sum_iW_{n,i}-\frac1{\sqrt n}\sum_i g(X_i)\right)=\operatorname{Var}_\theta(A_{n,1})\le E_\theta A_{n,1}^2\to0.\]</div>{% endraw %}
<p>The mean of the difference inside the variance is {% raw %}<span class="math inline">\(nE_\theta W_{n,1}\)</span>{% endraw %}, because {% raw %}<span class="math inline">\(E_\theta g=0\)</span>{% endraw %}. Chebyshev’s inequality and the mean limit therefore yield</p>
{% raw %}<div class="math display">\[\sum_iW_{n,i}=\frac1{\sqrt n}\sum_i g(X_i)-\frac14E_\theta g^2+o_P(1).\]</div>{% endraw %}
<p>For the sum of squares, Markov’s inequality gives {% raw %}<span class="math inline">\(n^{-1}\sum_i A_{n,i}^2\xrightarrow{P}0\)</span>{% endraw %}, and the law of large numbers gives {% raw %}<span class="math inline">\(n^{-1}\sum_i g(X_i)^2\xrightarrow{P}E_\theta g^2\)</span>{% endraw %}. Cauchy–Schwarz bounds their effect on the quadratic sum:</p>
{% raw %}<div class="math display">\[\left|\sum_iW_{n,i}^2-\frac1n\sum_i g(X_i)^2\right|\le2\left(\frac1n\sum_i g(X_i)^2\right)^{1/2}\left(\frac1n\sum_i A_{n,i}^2\right)^{1/2}+\frac1n\sum_i A_{n,i}^2\xrightarrow{P}0.\]</div>{% endraw %}
<p>Hence {% raw %}<span class="math inline">\(\sum_iW_{n,i}^2\xrightarrow{P}E_\theta g^2\)</span>{% endraw %}. To control the largest increment, use the {% raw %}<span class="math inline">\(L^2\)</span>{% endraw %} convergence of {% raw %}<span class="math inline">\(\sqrt nW_{n,1}\)</span>{% endraw %} to {% raw %}<span class="math inline">\(g(X_1)\)</span>{% endraw %}. Cauchy–Schwarz gives convergence of their squares in {% raw %}<span class="math inline">\(L^1\)</span>{% endraw %}, so {% raw %}<span class="math inline">\(nW_{n,1}^2\)</span>{% endraw %} is uniformly integrable. A union bound and truncation now give, for every {% raw %}<span class="math inline">\(\varepsilon&gt;0\)</span>{% endraw %},</p>
{% raw %}<div class="math display">\[P_\theta^{\otimes n}\!\left(\max_i|W_{n,i}|&gt;\varepsilon\right)\le\varepsilon^{-2}E_\theta\!\left[nW_{n,1}^2\mathbf1_{\{nW_{n,1}^2&gt;n\varepsilon^2\}}\right]\to0.\]</div>{% endraw %}
<p>The truncation level {% raw %}<span class="math inline">\(n\varepsilon^2\)</span>{% endraw %} tends to infinity, so uniform integrability makes the expectation vanish. In particular, all increments lie in {% raw %}<span class="math inline">\([-1,1]\)</span>{% endraw %} with probability tending to one. On this interval, define the continuous remainder function</p>
{% raw %}<div class="math display">\[r(w)=\frac{2\log(1+w/2)-w+w^2/4}{w^2}\quad(w\ne0),\qquad r(0)=0.\]</div>{% endraw %}
<p>Since {% raw %}<span class="math inline">\(r(w)\to0\)</span>{% endraw %} as {% raw %}<span class="math inline">\(w\to0\)</span>{% endraw %}, the bound on the largest increment and the bound on the sum of squares imply</p>
{% raw %}<div class="math display">\[\left|\sum_iW_{n,i}^2r(W_{n,i})\right|\le\sup_{|w|\le\max_i|W_{n,i}|}|r(w)|\sum_iW_{n,i}^2=o_P(1)O_P(1)=o_P(1).\]</div>{% endraw %}
<p>Thus the accumulated Taylor remainder vanishes in probability. Substituting the limits for the sum of increments and the sum of their squares into the log likelihood gives</p>
{% raw %}<div class="math display">\[\begin{aligned}\log\prod_i\frac{p_n(X_i)}{p(X_i)}&amp;=\sum_iW_{n,i}-\frac14\sum_iW_{n,i}^2+o_P(1)\\&amp;=\frac1{\sqrt n}\sum_i g(X_i)-\frac12E_\theta g^2+o_P(1).\end{aligned}\]</div>{% endraw %}
<p>Finally, {% raw %}<span class="math inline">\(g=h^\top\dot\ell_\theta\)</span>{% endraw %} and {% raw %}<span class="math inline">\(E_\theta g^2=h^\top I_\theta h\)</span>{% endraw %}, which give the asserted LAN expansion. {% raw %}<span class="math inline">\(\square\)</span>{% endraw %}</p>
</div><nav aria-label="Notes in this series" class="note-series"><p>Next: <a href="{% post_url 2023-04-25-regular-estimators-limit-experiments-and-asymptotic-efficiency %}">Regular Estimators, Limit Experiments, and Asymptotic Efficiency</a></p></nav>
</div>
