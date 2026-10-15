---
layout: "post"
title: "Stochastic Convergence Exercises: Rare Events and Consistent Estimation"
date: "2022-01-15"
tags: ["probability theory", "statistics"]
excerpt: "Convergence in probability permits rare large errors; almost-sure convergence concerns entire sample paths."
note_series: "Stochastic convergence exercises"
note_source: "assets/notes/stochastic-convergence-questions-1-23.md"
note_exercises: [13, 14, 19, 20, 15]
note_question_source: "assets/notes/VdW/07.0_pp_5_24_Stochastic_Convergence.pdf"
---

<div class="note-content" markdown="0">

<p>A rare error can have a small probability and still make a large contribution to an expectation. Its occurrence can also move through the probability space so that every sample path sees infinitely many errors. The first examples separate these two phenomena. Moment bounds and summable tail probabilities then give sufficient conditions for convergence, before a likelihood calculation applies them to estimation of the endpoint and rate of a shifted exponential distribution.</p>

<p>These are Exercises 13, 14, 19, 20, 15 from A. W. van der Vaart, <em>Asymptotic Statistics</em> (1998), Chapter 2, p. 24. The question numbers identify the original exercises. Write {% raw %}<span class="math inline">\(X_n\Rightarrow X\)</span>{% endraw %} for convergence in distribution and {% raw %}<span class="math inline">\(X_n\xrightarrow{P}X\)</span>{% endraw %} for convergence in probability.</p>

<p>For the underlying definitions, see <a href="{% post_url 2021-11-20-stochastic-convergence-exercises-slutsky-tightness-and-order-symbols %}">Slutsky and stochastic order</a>.</p>

<h3 data-note-section="1" id="scq-consistency-exercise-13">1. Vanishing probabilities with growing expectations</h3>
<p><strong>Question (Exercise 13).</strong> Find {% raw %}<span class="math inline">\(X_n\Rightarrow0\)</span>{% endraw %} with {% raw %}<span class="math inline">\(\mathbb{E} X_n\to\infty\)</span>{% endraw %}.</p>

<p><strong>Answer.</strong></p>

<p>Let {% raw %}<span class="math inline">\(U\sim\operatorname{Uniform}(0,1)\)</span>{% endraw %}, and define</p>

{% raw %}<div class="math display">\[
X_n=n^2\mathbf1_{\{U\le1/n\}}.
\]</div>{% endraw %}
<p>There are two quantities to keep separate: the probability of a nonzero value and the size of that value. The law is</p>

{% raw %}<div class="math display">\[
\mathbb P(X_n=n^2)=\frac1n,
\qquad \mathbb P(X_n=0)=1-\frac1n.
\]</div>{% endraw %}
<p>For every {% raw %}<span class="math inline">\(\varepsilon&gt;0\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
\mathbb P(|X_n|&gt;\varepsilon)
\le\mathbb P(U\le1/n)
=\frac1n\longrightarrow0.
\]</div>{% endraw %}
<p>Thus {% raw %}<span class="math inline">\(X_n\xrightarrow{P}0\)</span>{% endraw %}, and consequently {% raw %}<span class="math inline">\(X_n\Rightarrow0\)</span>{% endraw %}. Nevertheless,</p>

{% raw %}<div class="math display">\[
{\mathbb{E} X_n=n^2\frac1n=n\longrightarrow\infty.}
\]</div>{% endraw %}
<p>On the specified probability space the sequence even converges almost surely: for each {% raw %}<span class="math inline">\(u&gt;0\)</span>{% endraw %}, if {% raw %}<span class="math inline">\(n&gt;1/u\)</span>{% endraw %}, then {% raw %}<span class="math inline">\(1/n&lt;u\)</span>{% endraw %} and {% raw %}<span class="math inline">\(X_n(u)=0\)</span>{% endraw %}.</p>

<p>The expectation depends on the product of size and probability. Here the increasing size outweighs the decreasing probability, and the upper-tail expectations are not uniformly small. For any {% raw %}<span class="math inline">\(K&gt;0\)</span>{% endraw %} and any integer {% raw %}<span class="math inline">\(n&gt;\sqrt K\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
\mathbb{E}[X_n\mathbf1_{\{X_n&gt;K\}}]
=n^2\mathbb P(U\le1/n)=n.
\]</div>{% endraw %}
<p>Thus the sequence is not uniformly integrable. This calculation explains why even almost-sure convergence in this coupling does not justify passing the limit through the expectation.</p>

<h3 data-note-section="2" id="scq-consistency-exercise-14">2. The typewriter sequence</h3>
<p><strong>Question (Exercise 14).</strong> Find {% raw %}<span class="math inline">\(X_n\xrightarrow{P}0\)</span>{% endraw %} such that {% raw %}<span class="math inline">\(X_n\)</span>{% endraw %} does not converge almost surely.</p>

<p><strong>Answer.</strong></p>

<p>Let {% raw %}<span class="math inline">\(U\sim\operatorname{Uniform}[0,1)\)</span>{% endraw %}. Every integer {% raw %}<span class="math inline">\(n\ge1\)</span>{% endraw %} can be written uniquely as</p>

{% raw %}<div class="math display">\[
n=2^k+j,\qquad k\ge0,\quad 0\le j&lt;2^k.
\]</div>{% endraw %}
<p>Define</p>

{% raw %}<div class="math display">\[
X_{2^k+j}
=
\mathbf1_{\left\{
j2^{-k}\le U&lt;(j+1)2^{-k}
\right\}}.
\]</div>{% endraw %}
<p>For {% raw %}<span class="math inline">\(0&lt;\varepsilon&lt;1\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
\mathbb P(|X_{2^k+j}|&gt;\varepsilon)
=2^{-k}\longrightarrow0
\qquad(k\to\infty).
\]</div>{% endraw %}
<p>Since {% raw %}<span class="math inline">\(2^k\le n&lt;2^{k+1}\)</span>{% endraw %}, we also have {% raw %}<span class="math inline">\(2^{-k}&lt;2/n\)</span>{% endraw %}. For {% raw %}<span class="math inline">\(\varepsilon\ge1\)</span>{% endraw %}, this probability is zero. Since {% raw %}<span class="math inline">\(n\to\infty\)</span>{% endraw %} implies {% raw %}<span class="math inline">\(k\to\infty\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
X_n\xrightarrow{P}0.
\]</div>{% endraw %}
<p>Fix any {% raw %}<span class="math inline">\(u\in[0,1)\)</span>{% endraw %}. In each block</p>

{% raw %}<div class="math display">\[
X_{2^k}(u),\,X_{2^k+1}(u),\,\ldots,\,X_{2^{k+1}-1}(u),
\]</div>{% endraw %}
<p>the intervals sweep through the whole probability space. For this fixed point, exactly one term equals {% raw %}<span class="math inline">\(1\)</span>{% endraw %}, because the corresponding intervals partition {% raw %}<span class="math inline">\([0,1)\)</span>{% endraw %}. When {% raw %}<span class="math inline">\(k\ge1\)</span>{% endraw %}, the block also contains a term equal to {% raw %}<span class="math inline">\(0\)</span>{% endraw %}. Hence</p>

{% raw %}<div class="math display">\[
\limsup_{n\to\infty}X_n(u)=1,
\qquad
\liminf_{n\to\infty}X_n(u)=0.
\]</div>{% endraw %}
<p>Thus the sequence fails to converge at every point of this probability space:</p>

{% raw %}<div class="math display">\[
{\mathbb P\bigl((X_n)\text{ converges}\bigr)=0.}
\]</div>{% endraw %}
<p>For fixed {% raw %}<span class="math inline">\(u\in[0,1)\)</span>{% endraw %}, let</p>

{% raw %}<div class="math display">\[
j_k=\lfloor2^ku\rfloor,
\qquad n_k=2^k+j_k.
\]</div>{% endraw %}
<p>Then {% raw %}<span class="math inline">\(0\le j_k&lt;2^k\)</span>{% endraw %}, and</p>

{% raw %}<div class="math display">\[
\frac{j_k}{2^k}\le u&lt;\frac{j_k+1}{2^k},
\qquad X_{n_k}(u)=1.
\]</div>{% endraw %}
<p>For {% raw %}<span class="math inline">\(k\ge1\)</span>{% endraw %}, choose the next interval cyclically within the same block:</p>

{% raw %}<div class="math display">\[
\ell_k=
\begin{cases}
j_k+1,&amp;j_k&lt;2^k-1,\\
0,&amp;j_k=2^k-1,
\end{cases}
\qquad m_k=2^k+\ell_k.
\]</div>{% endraw %}
<p>The intervals are disjoint and {% raw %}<span class="math inline">\(\ell_k\ne j_k\)</span>{% endraw %}, so {% raw %}<span class="math inline">\(X_{m_k}(u)=0\)</span>{% endraw %}. Both {% raw %}<span class="math inline">\(n_k\)</span>{% endraw %} and {% raw %}<span class="math inline">\(m_k\)</span>{% endraw %} increase from block to block and tend to infinity. Thus the two subsequences have different limits for every {% raw %}<span class="math inline">\(u\)</span>{% endraw %}, proving failure of convergence to any random variable almost surely.</p>

<h3 data-note-section="3" id="scq-consistency-exercise-19">3. Bias, variance, and consistency</h3>
<p><strong>Question (Exercise 19).</strong> If {% raw %}<span class="math inline">\(\mathbb{E} X_n\to\mu\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\operatorname{Var}(X_n)\to0\)</span>{% endraw %}, show that {% raw %}<span class="math inline">\(X_n\xrightarrow{P}\mu\)</span>{% endraw %}.</p>

<p><strong>Answer.</strong></p>

<p>Let {% raw %}<span class="math inline">\(\mu_n=\mathbb{E} X_n\)</span>{% endraw %}. Since</p>

{% raw %}<div class="math display">\[
X_n-\mu=(X_n-\mu_n)+(\mu_n-\mu),
\]</div>{% endraw %}
<p>we obtain</p>

{% raw %}<div class="math display">\[
\begin{aligned}
\mathbb{E}(X_n-\mu)^2
&amp;=\mathbb{E}\left[(X_n-\mu_n)^2
+2(X_n-\mu_n)(\mu_n-\mu)
+(\mu_n-\mu)^2\right]\\
&amp;=\mathbb{E}(X_n-\mu_n)^2
+2(\mu_n-\mu)\mathbb{E}(X_n-\mu_n)
+(\mu_n-\mu)^2\\
&amp;=\operatorname{Var}(X_n)
+2(\mu_n-\mu)(\mu_n-\mu_n)
+(\mu_n-\mu)^2\\
&amp;=\operatorname{Var}(X_n)+(\mu_n-\mu)^2
\longrightarrow0.
\end{aligned}
\]</div>{% endraw %}
<p>For every {% raw %}<span class="math inline">\(\varepsilon&gt;0\)</span>{% endraw %}, the pointwise inequality</p>

{% raw %}<div class="math display">\[
\varepsilon^2\mathbf1_{\{|X_n-\mu|&gt;\varepsilon\}}
\le(X_n-\mu)^2
\]</div>{% endraw %}
<p>gives, after taking expectations and dividing by {% raw %}<span class="math inline">\(\varepsilon^2\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
\mathbb P(|X_n-\mu|&gt;\varepsilon)
\le
\frac{
\operatorname{Var}(X_n)+(\mathbb{E} X_n-\mu)^2
}{\varepsilon^2}
\longrightarrow0.
\]</div>{% endraw %}
<p>Hence</p>

{% raw %}<div class="math display">\[
{X_n\xrightarrow{P}\mu.}
\]</div>{% endraw %}
<p>The calculation also proves the stronger conclusion {% raw %}<span class="math inline">\(X_n\to\mu\)</span>{% endraw %} in {% raw %}<span class="math inline">\(L^2\)</span>{% endraw %}.</p>

<h3 data-note-section="4" id="scq-consistency-exercise-20">4. Summable deviations and almost-sure convergence</h3>
<p><strong>Question (Exercise 20).</strong> If {% raw %}<span class="math inline">\(\sum_{n=1}^{\infty}\mathbb P(|X_n|&gt;\varepsilon)&lt;\infty\)</span>{% endraw %} for every {% raw %}<span class="math inline">\(\varepsilon&gt;0\)</span>{% endraw %}, prove that {% raw %}<span class="math inline">\(X_n\to0\)</span>{% endraw %} almost surely.</p>

<p><strong>Answer.</strong></p>

<p>Assume</p>

{% raw %}<div class="math display">\[
\sum_{n=1}^{\infty}\mathbb P(|X_n|&gt;\varepsilon)&lt;\infty
\qquad\text{for every }\varepsilon&gt;0.
\]</div>{% endraw %}
<p>For each positive integer {% raw %}<span class="math inline">\(m\)</span>{% endraw %}, define</p>

{% raw %}<div class="math display">\[
A_m=
\bigcap_{N=1}^{\infty}
\bigcup_{n\ge N}\{|X_n|&gt;1/m\}.
\]</div>{% endraw %}
<p>This is the event that {% raw %}<span class="math inline">\(|X_n|&gt;1/m\)</span>{% endraw %} occurs infinitely often. A union bound over all sufficiently late deviations makes its probability small. For every {% raw %}<span class="math inline">\(N\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
\mathbb P(A_m)
\le
\mathbb P\!\left(\bigcup_{n\ge N}\{|X_n|&gt;1/m\}\right)
\le
\sum_{n\ge N}\mathbb P(|X_n|&gt;1/m).
\]</div>{% endraw %}
<p>The last expression tends to zero as {% raw %}<span class="math inline">\(N\to\infty\)</span>{% endraw %}, so {% raw %}<span class="math inline">\(\mathbb P(A_m)=0\)</span>{% endraw %}.</p>

<p>Taking a countable union,</p>

{% raw %}<div class="math display">\[
\mathbb P\!\left(\bigcup_{m=1}^{\infty}A_m\right)=0.
\]</div>{% endraw %}
<p>Outside this null event, for every {% raw %}<span class="math inline">\(m\)</span>{% endraw %} there exists {% raw %}<span class="math inline">\(N_m\)</span>{% endraw %} such that</p>

{% raw %}<div class="math display">\[
n\ge N_m\quad\Longrightarrow\quad |X_n|\le\frac1m.
\]</div>{% endraw %}
<p>Given {% raw %}<span class="math inline">\(\varepsilon&gt;0\)</span>{% endraw %}, choose {% raw %}<span class="math inline">\(m\)</span>{% endraw %} with {% raw %}<span class="math inline">\(1/m&lt;\varepsilon\)</span>{% endraw %}. Then {% raw %}<span class="math inline">\(|X_n|&lt;\varepsilon\)</span>{% endraw %} eventually. Thus</p>

{% raw %}<div class="math display">\[
{X_n\xrightarrow{\mathrm{a.s.}}0.}
\]</div>{% endraw %}
<p>This is the first Borel–Cantelli argument; independence is unnecessary.</p>

<p>With {% raw %}<span class="math inline">\(E_{n,m}=\{|X_n|&gt;1/m\}\)</span>{% endraw %}, the exact event identity is</p>

{% raw %}<div class="math display">\[
\{X_n\not\to0\}
=\bigcup_{m=1}^\infty\limsup_{n\to\infty}E_{n,m}.
\]</div>{% endraw %}
<p>For the forward inclusion, failure of convergence means that some {% raw %}<span class="math inline">\(\varepsilon&gt;0\)</span>{% endraw %} is exceeded infinitely often; choose {% raw %}<span class="math inline">\(m\)</span>{% endraw %} with {% raw %}<span class="math inline">\(1/m&lt;\varepsilon\)</span>{% endraw %}. For the reverse inclusion, infinitely many deviations larger than {% raw %}<span class="math inline">\(1/m\)</span>{% endraw %} prevent convergence to zero. Thus</p>

{% raw %}<div class="math display">\[
\mathbb P(X_n\not\to0)
\le\sum_{m=1}^\infty
\mathbb P\left(\limsup_nE_{n,m}\right)=0.
\]</div>{% endraw %}
<p>Only the countable family of hypotheses with {% raw %}<span class="math inline">\(\varepsilon=1/m\)</span>{% endraw %} is needed. This avoids taking an uncountable intersection of probability-one events.</p>

<h3 data-note-section="5" id="scq-consistency-exercise-15">5. A shifted exponential likelihood</h3>
<p><strong>Question (Exercise 15).</strong> Let {% raw %}<span class="math inline">\(X_1,\ldots,X_n\)</span>{% endraw %} be i.i.d. with density</p>

{% raw %}<div class="math display">\[
f_{\lambda,a}(x)=\lambda e^{-\lambda(x-a)}\mathbf1_{\{x\ge a\}},
\qquad \lambda&gt;0,\quad a\in\mathbb R.
\]</div>{% endraw %}
<p>Find the maximum likelihood estimator of {% raw %}<span class="math inline">\((\lambda,a)\)</span>{% endraw %} and prove its consistency.</p>

<p><strong>Answer.</strong></p>

<p>Assume {% raw %}<span class="math inline">\(\lambda&gt;0\)</span>{% endraw %} and {% raw %}<span class="math inline">\(a\in\mathbb R\)</span>{% endraw %}. Write</p>

{% raw %}<div class="math display">\[
X_{(1)}=\min_{1\le i\le n}X_i,
\qquad
\overline X_n=\frac1n\sum_{i=1}^{n}X_i.
\]</div>{% endraw %}
<p>The endpoint parameter enters through the support as well as through the exponential factor. Keep the support restriction when writing the likelihood. For candidate parameters {% raw %}<span class="math inline">\(r&gt;0\)</span>{% endraw %} and {% raw %}<span class="math inline">\(b\in\mathbb R\)</span>{% endraw %}, the likelihood is</p>

{% raw %}<div class="math display">\[
\begin{aligned}
L_n(r,b)
&amp;=
\prod_{i=1}^{n}
r e^{-r(X_i-b)}\mathbf1_{\{X_i\ge b\}}\\
&amp;=
r^n
\exp\!\left[-r\left(\sum_{i=1}^{n}X_i-nb\right)\right]
\mathbf1_{\{b\le X_{(1)}\}}.
\end{aligned}
\]</div>{% endraw %}
<p>For each fixed {% raw %}<span class="math inline">\(r&gt;0\)</span>{% endraw %}, this is strictly increasing in {% raw %}<span class="math inline">\(b\)</span>{% endraw %} on the admissible region {% raw %}<span class="math inline">\(b\le X_{(1)}\)</span>{% endraw %}. Therefore</p>

{% raw %}<div class="math display">\[
\widehat a_n=X_{(1)}.
\]</div>{% endraw %}
<p>Set</p>

{% raw %}<div class="math display">\[
D_n=\sum_{i=1}^{n}(X_i-X_{(1)})
=n(\overline X_n-X_{(1)}).
\]</div>{% endraw %}
<p>If {% raw %}<span class="math inline">\(D_n&gt;0\)</span>{% endraw %}, the profile log-likelihood is</p>

{% raw %}<div class="math display">\[
\ell_n(r)=n\log r-rD_n.
\]</div>{% endraw %}
<p>Its derivatives are</p>

{% raw %}<div class="math display">\[
\ell_n&#x27;(r)=\frac nr-D_n,
\qquad
\ell_n&#x27;&#x27;(r)=-\frac n{r^2}&lt;0.
\]</div>{% endraw %}
<p>Hence its unique maximizer is {% raw %}<span class="math inline">\(r=n/D_n\)</span>{% endraw %}, giving</p>

{% raw %}<div class="math display">\[
{
\widehat a_n=X_{(1)},\qquad
\widehat\lambda_n
=\frac1{\overline X_n-X_{(1)}}.
}
\]</div>{% endraw %}
<p>The derivative calculation identifies a candidate; the following comparison checks that it maximizes the likelihood over the whole positive half-line. For any {% raw %}<span class="math inline">\(r&gt;0\)</span>{% endraw %}, set {% raw %}<span class="math inline">\(u=r/\widehat\lambda_n\)</span>{% endraw %}. Then</p>

{% raw %}<div class="math display">\[
\begin{aligned}
\ell_n(r)-\ell_n(\widehat\lambda_n)
&amp;=n\log(r/\widehat\lambda_n)-(r-\widehat\lambda_n)D_n\\
&amp;=n\log u-n(u-1)\\
&amp;=n(\log u-u+1)\le0.
\end{aligned}
\]</div>{% endraw %}
<p>The last inequality follows from {% raw %}<span class="math inline">\(q(u)=u-1-\log u\)</span>{% endraw %}, for which</p>

{% raw %}<div class="math display">\[
q&#x27;(u)=1-1/u,
\qquad q(1)=0,
\]</div>{% endraw %}
<p>so {% raw %}<span class="math inline">\(u=1\)</span>{% endraw %} is its unique global minimum.</p>

<p>The included boundary {% raw %}<span class="math inline">\(x\ge a\)</span>{% endraw %} in the stated density is what permits {% raw %}<span class="math inline">\(\widehat a_n=X_{(1)}\)</span>{% endraw %}.</p>

<p>For {% raw %}<span class="math inline">\(n\ge2\)</span>{% endraw %}, {% raw %}<span class="math inline">\(D_n&gt;0\)</span>{% endraw %} almost surely because the sampling distribution is continuous. If all observations coincide, including when {% raw %}<span class="math inline">\(n=1\)</span>{% endraw %}, the profile likelihood is {% raw %}<span class="math inline">\(r^n\)</span>{% endraw %}, which is unbounded; no finite MLE exists in that case. For {% raw %}<span class="math inline">\(n\ge2\)</span>{% endraw %}, the event {% raw %}<span class="math inline">\(\{D_n=0\}\)</span>{% endraw %} is contained in {% raw %}<span class="math inline">\(\{X_1=X_2\}\)</span>{% endraw %}, which has probability zero by independence and continuity. We may assign any fixed admissible values to the estimators on this null event.</p>

<p>Consistency requires two different estimates: a tail bound for the sample minimum and a moment bound for the sample mean. For the minimum, observe that {% raw %}<span class="math inline">\(X_i-a\sim\operatorname{Exp}(\lambda)\)</span>{% endraw %}. Its survival function is</p>

{% raw %}<div class="math display">\[
\mathbb P(X_i&gt;a+u)
=\int_u^\infty\lambda e^{-\lambda y}\,dy
=e^{-\lambda u},\qquad u\ge0.
\]</div>{% endraw %}
<p>At {% raw %}<span class="math inline">\(u=0\)</span>{% endraw %} this also checks that the density integrates to one. Since {% raw %}<span class="math inline">\(\widehat a_n\ge a\)</span>{% endraw %} almost surely, for every {% raw %}<span class="math inline">\(\varepsilon&gt;0\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
\begin{aligned}
\mathbb P(\widehat a_n-a&gt;\varepsilon)
&amp;=
\mathbb P(X_1&gt;a+\varepsilon,\ldots,X_n&gt;a+\varepsilon)\\
&amp;=
\bigl(e^{-\lambda\varepsilon}\bigr)^n
=e^{-n\lambda\varepsilon}\longrightarrow0.
\end{aligned}
\]</div>{% endraw %}
<p>This calculation identifies the exact law {% raw %}<span class="math inline">\(X_{(1)}-a\sim\operatorname{Exp}(n\lambda)\)</span>{% endraw %} and proves {% raw %}<span class="math inline">\(\widehat a_n\xrightarrow{P}a\)</span>{% endraw %}.</p>

<p>For {% raw %}<span class="math inline">\(E=X_i-a\)</span>{% endraw %} and integers {% raw %}<span class="math inline">\(r=1,2\)</span>{% endraw %}, the substitution {% raw %}<span class="math inline">\(u=\lambda y\)</span>{% endraw %} yields</p>

{% raw %}<div class="math display">\[
\begin{aligned}
\mathbb{E} E^r
&amp;=\int_0^\infty y^r\lambda e^{-\lambda y}\,dy\\
&amp;=\lambda^{-r}\int_0^\infty u^re^{-u}\,du
=\lambda^{-r}\Gamma(r+1).
\end{aligned}
\]</div>{% endraw %}
<p>Thus</p>

{% raw %}<div class="math display">\[
\mathbb{E} E=\lambda^{-1},
\quad \mathbb{E} E^2=2\lambda^{-2},
\quad \operatorname{Var}(E)=2\lambda^{-2}-\lambda^{-2}=\lambda^{-2}.
\]</div>{% endraw %}
<p>Adding the shift {% raw %}<span class="math inline">\(a\)</span>{% endraw %} gives</p>

{% raw %}<div class="math display">\[
\mathbb{E} X_i=a+\frac1\lambda,
\qquad
\operatorname{Var}(X_i)=\frac1{\lambda^2}.
\]</div>{% endraw %}
<p>Chebyshev’s inequality gives</p>

{% raw %}<div class="math display">\[
\mathbb P\!\left(
\left|\overline X_n-a-\frac1\lambda\right|&gt;\varepsilon
\right)
\le\frac1{n\lambda^2\varepsilon^2}
\longrightarrow0.
\]</div>{% endraw %}
<p>Consequently,</p>

{% raw %}<div class="math display">\[
\overline X_n-X_{(1)}
\xrightarrow{P}\frac1\lambda.
\]</div>{% endraw %}
<p>The positive limit keeps the estimated denominator away from zero with probability tending to one. Continuity of the reciprocal therefore yields</p>

{% raw %}<div class="math display">\[
\widehat\lambda_n\xrightarrow{P}\lambda.
\]</div>{% endraw %}
<p>Componentwise convergence in probability implies joint convergence, so</p>

{% raw %}<div class="math display">\[
{
(\widehat\lambda_n,\widehat a_n)
\xrightarrow{P}(\lambda,a).
}
\]</div>{% endraw %}
<p>Let {% raw %}<span class="math inline">\(H_n=\overline X_n-X_{(1)}\)</span>{% endraw %}. Its error decomposes as</p>

{% raw %}<div class="math display">\[
H_n-\lambda^{-1}
=\left(\overline X_n-a-\lambda^{-1}\right)
-(X_{(1)}-a).
\]</div>{% endraw %}
<p>Therefore, for {% raw %}<span class="math inline">\(\delta&gt;0\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
\begin{aligned}
\mathbb P(|H_n-\lambda^{-1}|&gt;\delta)
&amp;\le
\mathbb P\left(\left|\overline X_n-a-\lambda^{-1}\right|&gt;\delta/2\right)
+\mathbb P(X_{(1)}-a&gt;\delta/2)\\
&amp;\le\frac4{n\lambda^2\delta^2}+e^{-n\lambda\delta/2}
\longrightarrow0.
\end{aligned}
\]</div>{% endraw %}
<p>On {% raw %}<span class="math inline">\(\{|H_n-\lambda^{-1}|\le(2\lambda)^{-1}\}\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
H_n\ge\frac1{2\lambda},
\qquad
\left|\frac1{H_n}-\lambda\right|
=\frac{\lambda|H_n-\lambda^{-1}|}{H_n}
\le2\lambda^2|H_n-\lambda^{-1}|.
\]</div>{% endraw %}
<p>Given {% raw %}<span class="math inline">\(\varepsilon&gt;0\)</span>{% endraw %}, set</p>

{% raw %}<div class="math display">\[
\delta_\varepsilon
=\min((2\lambda)^{-1},\varepsilon/(2\lambda^2)).
\]</div>{% endraw %}
<p>Ignoring the already specified null event,</p>

{% raw %}<div class="math display">\[
\mathbb P(|\widehat\lambda_n-\lambda|&gt;\varepsilon)
\le\mathbb P(|H_n-\lambda^{-1}|&gt;\delta_\varepsilon)
\longrightarrow0.
\]</div>{% endraw %}
<p>For Euclidean joint convergence,</p>

{% raw %}<div class="math display">\[
\begin{aligned}
&amp;\mathbb P\left(
\left\|(\widehat\lambda_n-\lambda,\widehat a_n-a)\right\|_2&gt;\varepsilon
\right)\\
&amp;\quad\le
\mathbb P(|\widehat\lambda_n-\lambda|&gt;\varepsilon/\sqrt2)
+\mathbb P(|\widehat a_n-a|&gt;\varepsilon/\sqrt2)
\longrightarrow0.
\end{aligned}
\]</div>{% endraw %}
<p>Source: A. W. van der Vaart, <a href="https://doi.org/10.1017/CBO9780511802256.003"><em>Asymptotic Statistics</em>, Chapter 2, “Stochastic Convergence”</a>, pp. 5–24. The questions above are stated in the notation used in these solutions.</p>


<nav class="note-series" aria-label="Notes in this series"><p>Previous: <a href="{% post_url 2022-01-08-stochastic-convergence-exercises-joint-laws-and-continuity-sets %}">Stochastic Convergence Exercises: Joint Laws and Continuity Sets</a> · Next: <a href="{% post_url 2022-01-29-stochastic-convergence-exercises-student-laws-and-gaussian-directions %}">Stochastic Convergence Exercises: Student Laws and Gaussian Directions</a></p></nav>

</div>
