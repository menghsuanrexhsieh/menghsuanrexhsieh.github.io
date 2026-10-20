---
layout: "post"
title: "Stochastic Convergence Exercises: Student Laws and Gaussian Directions"
date: "2022-01-29"
tags: ["probability theory", "statistics"]
excerpt: "Student and chi-square limits both start from sums of squared normal variables."
note_series: "Stochastic convergence exercises"
note_source: "assets/notes/stochastic-convergence-questions-1-23.md"
note_exercises: [1, 2, 4, 16, 17]
note_question_source: "assets/notes/VdW/07.0_pp_5_24_Stochastic_Convergence.pdf"
---

<div class="note-content" markdown="0">

<p>A sum of independent squared standard normals has mean equal to the number of terms and relative fluctuations that tend to zero. Dividing by this sum therefore has a simple limiting effect: Student t variables converge in distribution to a standard normal law, and fixed coordinates of a uniform spherical direction become Gaussian after rescaling. The exercises below prove these assertions and distinguish convergence in law from the stronger tail control needed for convergence of moments.</p>

<p>These are Exercises 1, 2, 4, 16, 17 from A. W. van der Vaart, <em>Asymptotic Statistics</em> (1998), Chapter 2, p. 24. The question numbers identify the original exercises. Write {% raw %}<span class="math inline">\(X_n\Rightarrow X\)</span>{% endraw %} for convergence in distribution and {% raw %}<span class="math inline">\(X_n\xrightarrow{P}X\)</span>{% endraw %} for convergence in probability.</p>

<p>For the underlying definitions, see <a href="{% post_url 2021-11-20-stochastic-convergence-exercises-slutsky-tightness-and-order-symbols %}">Slutsky and tightness</a>.</p>

<h3 data-note-section="1" id="scq-gaussian-exercise-1">1. Student distributions approach the normal law</h3>
<p><strong>Question (Exercise 1).</strong> If {% raw %}<span class="math inline">\(X_n\)</span>{% endraw %} has a Student {% raw %}<span class="math inline">\(t\)</span>{% endraw %}-distribution with {% raw %}<span class="math inline">\(n\)</span>{% endraw %} degrees of freedom, show that {% raw %}<span class="math inline">\(X_n\Rightarrow \mathcal{N}(0,1)\)</span>{% endraw %}.</p>

<p><strong>Answer.</strong></p>

<p>Let {% raw %}<span class="math inline">\(Z,Z_1,Z_2,\ldots\)</span>{% endraw %} be independent standard normal random variables, and put</p>

{% raw %}<div class="math display">\[
V_n=\sum_{j=1}^{n}Z_j^2.
\]</div>{% endraw %}
<p>The normal–chi-square representation of the {% raw %}<span class="math inline">\(t\)</span>{% endraw %}-distribution gives</p>

{% raw %}<div class="math display">\[
X_n\stackrel{d}{=}\frac{Z}{\sqrt{V_n/n}}.
\]</div>{% endraw %}
<p>Let {% raw %}<span class="math inline">\(\phi(x)=(2\pi)^{-1/2}e^{-x^2/2}\)</span>{% endraw %}. Then {% raw %}<span class="math inline">\(\phi&#x27;(x)=-x\phi(x)\)</span>{% endraw %}, and every polynomial times {% raw %}<span class="math inline">\(\phi(x)\)</span>{% endraw %} tends to zero as {% raw %}<span class="math inline">\(|x|\to\infty\)</span>{% endraw %}. Integration by parts gives</p>

{% raw %}<div class="math display">\[
\begin{aligned}
\mathbb{E} Z^2
&amp;=\int_{\mathbb R}x^2\phi(x)\,dx
=-\int_{\mathbb R}x\phi&#x27;(x)\,dx\\
&amp;=-[x\phi(x)]_{-\infty}^{\infty}
+\int_{\mathbb R}\phi(x)\,dx=1,\\
\mathbb{E} Z^4
&amp;=-\int_{\mathbb R}x^3\phi&#x27;(x)\,dx\\
&amp;=-[x^3\phi(x)]_{-\infty}^{\infty}
+3\int_{\mathbb R}x^2\phi(x)\,dx=3.
\end{aligned}
\]</div>{% endraw %}
<p>Consequently,</p>

{% raw %}<div class="math display">\[
\operatorname{Var}(Z^2)
=\mathbb{E} Z^4-(\mathbb{E} Z^2)^2=3-1=2.
\]</div>{% endraw %}
<p>For independent {% raw %}<span class="math inline">\(Z_1,\ldots,Z_n\)</span>{% endraw %}, therefore,</p>

{% raw %}<div class="math display">\[
\begin{aligned}
\mathbb{E} V_n&amp;=\sum_{j=1}^n\mathbb{E} Z_j^2=n,\\
\operatorname{Var}(V_n)
&amp;=\sum_{j=1}^n\operatorname{Var}(Z_j^2)
+2\sum_{j&lt;k}\operatorname{Cov}(Z_j^2,Z_k^2)\\
&amp;=2n+0=2n,\\
\operatorname{Var}(V_n/n)&amp;=n^{-2}(2n)=2/n.
\end{aligned}
\]</div>{% endraw %}
<p>Hence, by Chebyshev’s inequality, for every {% raw %}<span class="math inline">\(\varepsilon&gt;0\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
\mathbb P\!\left(\left|\frac{V_n}{n}-1\right|&gt;\varepsilon\right)
\le \frac{2}{n\varepsilon^2}\longrightarrow0.
\]</div>{% endraw %}
<p>Thus {% raw %}<span class="math inline">\(V_n/n\xrightarrow{P}1\)</span>{% endraw %}, and continuity of the square root gives</p>

{% raw %}<div class="math display">\[
\sqrt{V_n/n}\xrightarrow{P}1.
\]</div>{% endraw %}
<p>Slutsky’s lemma now yields</p>

{% raw %}<div class="math display">\[
{X_n\Rightarrow Z\sim \mathcal{N}(0,1).}
\]</div>{% endraw %}
<p>The preceding proof uses the ratio representation to reduce the limit to a law of large numbers. To verify the representation itself, compute the density of the ratio using the standard normal density {% raw %}<span class="math inline">\(\phi\)</span>{% endraw %} above. Suppose {% raw %}<span class="math inline">\(V_n\sim\chi_n^2\)</span>{% endraw %} is independent of {% raw %}<span class="math inline">\(Z\)</span>{% endraw %}, and put {% raw %}<span class="math inline">\(T_n=Z/\sqrt{V_n/n}\)</span>{% endraw %}. Conditional on {% raw %}<span class="math inline">\(V_n=v&gt;0\)</span>{% endraw %}, a change of variables gives</p>

{% raw %}<div class="math display">\[
f_{T_n\mid V_n=v}(t)
=\sqrt{\frac vn}\,\phi\!\left(t\sqrt{\frac vn}\right).
\]</div>{% endraw %}
<p>Combining this with the chi-square density and integrating over {% raw %}<span class="math inline">\(v\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
\begin{aligned}
f_{T_n}(t)
&amp;=\int_0^\infty
\sqrt{\frac vn}\frac{e^{-t^2v/(2n)}}{\sqrt{2\pi}}
\frac{v^{n/2-1}e^{-v/2}}{2^{n/2}\Gamma(n/2)}\,dv\\
&amp;=\frac{1}{\sqrt{2\pi n}\,2^{n/2}\Gamma(n/2)}
\int_0^\infty
v^{(n+1)/2-1}
\exp\!\left[-\frac{1+t^2/n}{2}v\right]dv\\
&amp;=\frac{\Gamma((n+1)/2)}{\sqrt{2\pi n}\,2^{n/2}\Gamma(n/2)}
\left(\frac{2}{1+t^2/n}\right)^{(n+1)/2}\\
&amp;=\frac{\Gamma((n+1)/2)}{\sqrt{n\pi}\,\Gamma(n/2)}
\left(1+\frac{t^2}{n}\right)^{-(n+1)/2}.
\end{aligned}
\]</div>{% endraw %}
<p>In the third line, the substitution</p>

{% raw %}<div class="math display">\[
u=\frac{1+t^2/n}{2}v
\]</div>{% endraw %}
<p>reduces the integral to the defining gamma integral. The resulting density is exactly the Student {% raw %}<span class="math inline">\(t_n\)</span>{% endraw %} density.</p>

<p>The ratio limit can also be proved without invoking Slutsky’s lemma. Restrict the numerator to a bounded interval and keep the denominator close to one; on their intersection, the quotient error has a deterministic bound. Let {% raw %}<span class="math inline">\(A_n=\sqrt{V_n/n}\)</span>{% endraw %}. For {% raw %}<span class="math inline">\(v\ge0\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
|\sqrt v-1|=\frac{|v-1|}{\sqrt v+1}\le |v-1|,
\]</div>{% endraw %}
<p>so {% raw %}<span class="math inline">\(A_n\xrightarrow{P}1\)</span>{% endraw %}. Fix {% raw %}<span class="math inline">\(M&gt;0\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\varepsilon&gt;0\)</span>{% endraw %}, and set</p>

{% raw %}<div class="math display">\[
\delta=\min\left(\frac12,\frac{\varepsilon}{2M}\right).
\]</div>{% endraw %}
<p>On {% raw %}<span class="math inline">\(\{|Z|\le M,\ |A_n-1|\le\delta\}\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
A_n\ge\frac12,
\qquad
\left|\frac Z{A_n}-Z\right|
=|Z|\frac{|1-A_n|}{A_n}
\le2M\delta\le\varepsilon.
\]</div>{% endraw %}
<p>Hence</p>

{% raw %}<div class="math display">\[
\mathbb P(|T_n-Z|&gt;\varepsilon)
\le\mathbb P(|Z|&gt;M)+\mathbb P(|A_n-1|&gt;\delta).
\]</div>{% endraw %}
<p>For fixed {% raw %}<span class="math inline">\(M\)</span>{% endraw %}, the second probability tends to zero. Letting {% raw %}<span class="math inline">\(M\to\infty\)</span>{% endraw %} afterward proves {% raw %}<span class="math inline">\(T_n\xrightarrow{P}Z\)</span>{% endraw %} on this constructed probability space, and thus {% raw %}<span class="math inline">\(X_n\Rightarrow Z\)</span>{% endraw %}, since {% raw %}<span class="math inline">\(X_n\)</span>{% endraw %} and {% raw %}<span class="math inline">\(T_n\)</span>{% endraw %} have identical laws for each {% raw %}<span class="math inline">\(n\)</span>{% endraw %}.</p>

<h3 data-note-section="2" id="scq-gaussian-exercise-2">2. Weak convergence and Student moments</h3>
<p><strong>Question (Exercise 2).</strong> Does Exercise 1 immediately imply {% raw %}<span class="math inline">\(\mathbb{E} X_n^p\to\mathbb{E} Z^p\)</span>{% endraw %} for every fixed {% raw %}<span class="math inline">\(p\in\mathbb N\)</span>{% endraw %}, where {% raw %}<span class="math inline">\(Z\sim \mathcal{N}(0,1)\)</span>{% endraw %}? Is this moment convergence true?</p>

<p><strong>Answer.</strong></p>

<p>It does <strong>not</strong> follow from convergence in distribution alone. Nevertheless, for this {% raw %}<span class="math inline">\(t_n\)</span>{% endraw %} sequence,</p>

{% raw %}<div class="math display">\[
{\mathbb{E} X_n^p\longrightarrow\mathbb{E} Z^p
\quad\text{for every fixed }p\in\mathbb N,}
\]</div>{% endraw %}
<p>with the moments understood for sufficiently large {% raw %}<span class="math inline">\(n\)</span>{% endraw %}.</p>

<p>To separate weak convergence from moment convergence, add a displacement whose probability tends to zero but whose contribution to a moment does not. Let</p>

{% raw %}<div class="math display">\[
B_n\sim\operatorname{Bernoulli}(1/n),
\qquad W_n=Z+nB_n.
\]</div>{% endraw %}
<p>For every {% raw %}<span class="math inline">\(\varepsilon&gt;0\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
\mathbb P(|W_n-Z|&gt;\varepsilon)
\le \mathbb P(B_n=1)=\frac1n\longrightarrow0.
\]</div>{% endraw %}
<p>Consequently {% raw %}<span class="math inline">\(W_n\Rightarrow Z\)</span>{% endraw %}, but</p>

{% raw %}<div class="math display">\[
\mathbb{E} W_n=\mathbb{E} Z+n\mathbb{E} B_n=1
\not\longrightarrow 0=\mathbb{E} Z.
\]</div>{% endraw %}
<p>Weak convergence controls expectations of bounded continuous functions; {% raw %}<span class="math inline">\(x\mapsto x^p\)</span>{% endraw %} is unbounded.</p>

<p>Use {% raw %}<span class="math inline">\(X_n\stackrel d=Z/\sqrt{V_n/n}\)</span>{% endraw %}, with {% raw %}<span class="math inline">\(V_n\sim\chi_n^2\)</span>{% endraw %} independent of {% raw %}<span class="math inline">\(Z\)</span>{% endraw %}. Put {% raw %}<span class="math inline">\(\phi(x)=(2\pi)^{-1/2}e^{-x^2/2}\)</span>{% endraw %}, so {% raw %}<span class="math inline">\(\phi^\prime(x)=-x\phi(x)\)</span>{% endraw %}.</p>

<p>For every real {% raw %}<span class="math inline">\(p&gt;0\)</span>{% endraw %}, the substitution {% raw %}<span class="math inline">\(u=x^2/2\)</span>{% endraw %} gives</p>

{% raw %}<div class="math display">\[
\begin{aligned}
\mathbb{E}|Z|^p
&amp;=\frac2{\sqrt{2\pi}}\int_0^\infty x^p e^{-x^2/2}\,dx\\
&amp;=\frac2{\sqrt{2\pi}}\int_0^\infty
(2u)^{p/2}e^{-u}(2u)^{-1/2}\,du\\
&amp;=\frac{2^{p/2}}{\sqrt\pi}
\int_0^\infty u^{(p+1)/2-1}e^{-u}\,du\\
&amp;=\frac{2^{p/2}\Gamma((p+1)/2)}{\sqrt\pi}.
\end{aligned}
\]</div>{% endraw %}
<p>For {% raw %}<span class="math inline">\(a&gt;0\)</span>{% endraw %}, substitute {% raw %}<span class="math inline">\(v=2u\)</span>{% endraw %} into the negative chi-square moment:</p>

{% raw %}<div class="math display">\[
\begin{aligned}
\mathbb{E} V_n^{-a}
&amp;=\frac1{2^{n/2}\Gamma(n/2)}
\int_0^\infty v^{n/2-a-1}e^{-v/2}\,dv\\
&amp;=\frac{2^{n/2-a}}{2^{n/2}\Gamma(n/2)}
\int_0^\infty u^{n/2-a-1}e^{-u}\,du\\
&amp;=2^{-a}\frac{\Gamma(n/2-a)}{\Gamma(n/2)},
\qquad n&gt;2a.
\end{aligned}
\]</div>{% endraw %}
<p>The integrand is integrable at infinity because of the exponential factor. Near zero, its relevant power is {% raw %}<span class="math inline">\(v^{n/2-a-1}\)</span>{% endraw %}, and</p>

{% raw %}<div class="math display">\[
\int_0^1v^{n/2-a-1}\,dv&lt;\infty
\quad\Longleftrightarrow\quad
\frac n2-a&gt;0.
\]</div>{% endraw %}
<p>For {% raw %}<span class="math inline">\(n\le2a\)</span>{% endraw %}, the same integral is infinite; on {% raw %}<span class="math inline">\((0,1)\)</span>{% endraw %}, the exponential factor is bounded below by {% raw %}<span class="math inline">\(e^{-1/2}\)</span>{% endraw %}, so it cannot remove this divergence.</p>

<p>Independence and Tonelli’s theorem apply to the nonnegative product even when its expectation is infinite. Thus, for {% raw %}<span class="math inline">\(p&gt;0\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
\mathbb{E}|X_n|^p
=n^{p/2}\mathbb{E}|Z|^p\,\mathbb{E} V_n^{-p/2}.
\]</div>{% endraw %}
<p>For {% raw %}<span class="math inline">\(n&gt;p\)</span>{% endraw %}, the complete formula is</p>

{% raw %}<div class="math display">\[
\begin{aligned}
\mathbb{E}|X_n|^p
&amp;=n^{p/2}
\frac{2^{p/2}\Gamma((p+1)/2)}{\sqrt\pi}
2^{-p/2}\frac{\Gamma((n-p)/2)}{\Gamma(n/2)}\\
&amp;=\frac{n^{p/2}\Gamma((p+1)/2)\Gamma((n-p)/2)}
{\sqrt\pi\,\Gamma(n/2)}.
\end{aligned}
\]</div>{% endraw %}
<p>For {% raw %}<span class="math inline">\(n\le p\)</span>{% endraw %}, the absolute moment is infinite. In particular, an odd moment in this range must not be assigned the value zero by symmetry: both its positive and negative parts have infinite expectation.</p>

<p>For an integer {% raw %}<span class="math inline">\(k\ge1\)</span>{% endraw %}, integration by parts yields</p>

{% raw %}<div class="math display">\[
\begin{aligned}
\mathbb{E} Z^{2k}
&amp;=-\int_{\mathbb R}x^{2k-1}\phi&#x27;(x)\,dx\\
&amp;=-[x^{2k-1}\phi(x)]_{-\infty}^{\infty}
+(2k-1)\int_{\mathbb R}x^{2k-2}\phi(x)\,dx\\
&amp;=(2k-1)\mathbb{E} Z^{2k-2}\\
&amp;=(2k-1)(2k-3)\cdots3\cdot1\cdot\mathbb{E} Z^0\\
&amp;=(2k-1)!!.
\end{aligned}
\]</div>{% endraw %}
<p>Repeated use of {% raw %}<span class="math inline">\(\Gamma(z)=(z-1)\Gamma(z-1)\)</span>{% endraw %} gives</p>

{% raw %}<div class="math display">\[
\begin{aligned}
\Gamma(n/2)
&amp;=\left(\frac n2-1\right)\left(\frac n2-2\right)
\cdots\left(\frac n2-k\right)\Gamma(n/2-k)\\
&amp;=2^{-k}\prod_{j=1}^k(n-2j)\,\Gamma(n/2-k).
\end{aligned}
\]</div>{% endraw %}
<p>Consequently,</p>

{% raw %}<div class="math display">\[
\begin{aligned}
2^{-k}\frac{\Gamma(n/2-k)}{\Gamma(n/2)}
&amp;=\frac1{\prod_{j=1}^k(n-2j)},\\
\mathbb{E} X_n^{2k}
&amp;=(2k-1)!!\prod_{j=1}^k\frac n{n-2j}
\longrightarrow(2k-1)!!.
\end{aligned}
\]</div>{% endraw %}
<p>The number of factors {% raw %}<span class="math inline">\(k\)</span>{% endraw %} is fixed while {% raw %}<span class="math inline">\(n\to\infty\)</span>{% endraw %}. This is a fixed-order moment statement. For odd {% raw %}<span class="math inline">\(p&lt;n\)</span>{% endraw %}, absolute integrability and the equality in law {% raw %}<span class="math inline">\(X_n\stackrel d=-X_n\)</span>{% endraw %} imply</p>

{% raw %}<div class="math display">\[
\mathbb{E} X_n^p=\mathbb{E}(-X_n)^p=-\mathbb{E} X_n^p,
\qquad \mathbb{E} X_n^p=0.
\]</div>{% endraw %}
<h3 data-note-section="3" id="scq-gaussian-exercise-4">3. What the chi-square approximation says</h3>
<p><strong>Question (Exercise 4).</strong> In what sense is a chi-square distribution with {% raw %}<span class="math inline">\(n\)</span>{% endraw %} degrees of freedom approximately normal?</p>

<p><strong>Answer.</strong></p>

<p>If {% raw %}<span class="math inline">\(Q_n\sim\chi_n^2\)</span>{% endraw %}, then</p>

{% raw %}<div class="math display">\[
{\frac{Q_n-n}{\sqrt{2n}}\Rightarrow \mathcal{N}(0,1).}
\]</div>{% endraw %}
<p>Indeed, write</p>

{% raw %}<div class="math display">\[
Q_n\stackrel{d}{=}\sum_{j=1}^{n}Z_j^2,
\]</div>{% endraw %}
<p>where the {% raw %}<span class="math inline">\(Z_j\)</span>{% endraw %} are independent standard normals. The variables</p>

{% raw %}<div class="math display">\[
U_j=\frac{Z_j^2-1}{\sqrt2}
\]</div>{% endraw %}
<p>are independent and identically distributed, with</p>

{% raw %}<div class="math display">\[
\mathbb{E} U_j=0,\qquad \operatorname{Var}(U_j)=1.
\]</div>{% endraw %}
<p>The central limit theorem therefore gives</p>

{% raw %}<div class="math display">\[
\frac{Q_n-n}{\sqrt{2n}}
\stackrel{d}{=}
\frac1{\sqrt n}\sum_{j=1}^{n}U_j
\Rightarrow \mathcal{N}(0,1).
\]</div>{% endraw %}
<p>Thus, for every {% raw %}<span class="math inline">\(t\in\mathbb R\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
\mathbb P(Q_n\le n+\sqrt{2n}\,t)\longrightarrow\Phi(t).
\]</div>{% endraw %}
<p>Pointwise convergence of distribution functions becomes uniform because the limit is continuous. A finite grid of normal quantiles controls the whole real line by monotonicity. Let</p>

{% raw %}<div class="math display">\[
H_n(t)=\mathbb P\left(\frac{Q_n-n}{\sqrt{2n}}\le t\right).
\]</div>{% endraw %}
<p>Fix an integer {% raw %}<span class="math inline">\(k\ge2\)</span>{% endraw %}, let {% raw %}<span class="math inline">\(t_j=\Phi^{-1}(j/k)\)</span>{% endraw %} for {% raw %}<span class="math inline">\(1\le j\le k-1\)</span>{% endraw %}, and set {% raw %}<span class="math inline">\(t_0=-\infty\)</span>{% endraw %}, {% raw %}<span class="math inline">\(t_k=\infty\)</span>{% endraw %}. Define distribution functions at these endpoints by their limits, and put</p>

{% raw %}<div class="math display">\[
\Delta_{n,k}=\max_{0\le j\le k}|H_n(t_j)-\Phi(t_j)|.
\]</div>{% endraw %}
<p>For fixed {% raw %}<span class="math inline">\(k\)</span>{% endraw %}, all interior grid points are continuity points and the endpoint differences are zero, so {% raw %}<span class="math inline">\(\Delta_{n,k}\to0\)</span>{% endraw %}. If {% raw %}<span class="math inline">\(t_j\le t\le t_{j+1}\)</span>{% endraw %}, monotonicity gives</p>

{% raw %}<div class="math display">\[
\begin{aligned}
H_n(t)-\Phi(t)
&amp;\le H_n(t_{j+1})-\Phi(t_j)\\
&amp;=[H_n(t_{j+1})-\Phi(t_{j+1})]
+[\Phi(t_{j+1})-\Phi(t_j)]\\
&amp;\le\Delta_{n,k}+1/k,\\
H_n(t)-\Phi(t)
&amp;\ge H_n(t_j)-\Phi(t_{j+1})\\
&amp;=[H_n(t_j)-\Phi(t_j)]
-[\Phi(t_{j+1})-\Phi(t_j)]\\
&amp;\ge-\Delta_{n,k}-1/k.
\end{aligned}
\]</div>{% endraw %}
<p>It follows that</p>

{% raw %}<div class="math display">\[
\limsup_{n\to\infty}\sup_{t\in\mathbb R}|H_n(t)-\Phi(t)|\le1/k.
\]</div>{% endraw %}
<p>Let {% raw %}<span class="math inline">\(k\to\infty\)</span>{% endraw %}. Finally, {% raw %}<span class="math inline">\(x\mapsto(x-n)/\sqrt{2n}\)</span>{% endraw %} is a bijection of {% raw %}<span class="math inline">\(\mathbb R\)</span>{% endraw %}, so</p>

{% raw %}<div class="math display">\[
\sup_x\left|\mathbb P(Q_n\le x)-\Phi\left(\frac{x-n}{\sqrt{2n}}\right)\right|
=\sup_t|H_n(t)-\Phi(t)|\longrightarrow0.
\]</div>{% endraw %}
<p>This is a precise meaning of the approximation {% raw %}<span class="math inline">\(\chi_n^2\approx \mathcal{N}(n,2n)\)</span>{% endraw %}. The finite-grid proof is the argument behind Lemma 2.11 (p. 12). The <a href="{% post_url 2022-02-19-stochastic-convergence-exercises-poisson-limits-cauchy-averages-and-joint-clts %}#scq-averages-exercise-23">characteristic-function calculation for the CLT</a> explains where the normal limit comes from.</p>

<h3 data-note-section="4" id="scq-gaussian-exercise-16">4. A Gaussian vector has a uniform direction</h3>
<p><strong>Question (Exercise 16).</strong> Let {% raw %}<span class="math inline">\(X_1,\ldots,X_n\)</span>{% endraw %} be i.i.d. standard normal, and set {% raw %}<span class="math inline">\(N^2=\sum_{i=1}^nX_i^2\)</span>{% endraw %}. Show that {% raw %}<span class="math inline">\(U=(X_1,\ldots,X_n)/N\)</span>{% endraw %} is uniform on {% raw %}<span class="math inline">\(S^{n-1}\)</span>{% endraw %}: for every orthogonal transformation {% raw %}<span class="math inline">\(O\)</span>{% endraw %}, {% raw %}<span class="math inline">\(OU\)</span>{% endraw %} and {% raw %}<span class="math inline">\(U\)</span>{% endraw %} have the same law.</p>

<p><strong>Answer.</strong></p>

<p>Let</p>

{% raw %}<div class="math display">\[
G=(X_1,\ldots,X_n)^\top,\qquad
N=\|G\|=\left(\sum_{i=1}^{n}X_i^2\right)^{1/2},
\qquad U=\frac GN.
\]</div>{% endraw %}
<p>Since {% raw %}<span class="math inline">\(\mathbb P(N=0)=0\)</span>{% endraw %}, this defines {% raw %}<span class="math inline">\(U\)</span>{% endraw %} almost surely, and {% raw %}<span class="math inline">\(\|U\|=1\)</span>{% endraw %}.</p>

<p>Normalizing removes the radius. To identify the remaining direction, first check that rotating the Gaussian vector leaves its law unchanged. The density of {% raw %}<span class="math inline">\(G\)</span>{% endraw %} is</p>

{% raw %}<div class="math display">\[
f_G(x)=(2\pi)^{-n/2}\exp\!\left(-\frac{\|x\|^2}{2}\right).
\]</div>{% endraw %}
<p>Let {% raw %}<span class="math inline">\(O\)</span>{% endraw %} be orthogonal. Then</p>

{% raw %}<div class="math display">\[
O^\top O=I_n,\qquad |\det O|=1,\qquad
\|O^\top x\|=\|x\|.
\]</div>{% endraw %}
<p>By change of variables, the density of {% raw %}<span class="math inline">\(OG\)</span>{% endraw %} is</p>

{% raw %}<div class="math display">\[
f_{OG}(x)
=
f_G(O^\top x)|\det O^\top|
=
(2\pi)^{-n/2}e^{-\|x\|^2/2}
=f_G(x).
\]</div>{% endraw %}
<p>Hence {% raw %}<span class="math inline">\(OG\stackrel d=G\)</span>{% endraw %}. Also {% raw %}<span class="math inline">\(\|OG\|=\|G\|\)</span>{% endraw %}, so</p>

{% raw %}<div class="math display">\[
OU
=
\frac{OG}{\|G\|}
=
\frac{OG}{\|OG\|}
\stackrel d=
\frac G{\|G\|}
=U.
\]</div>{% endraw %}
<p>Thus</p>

{% raw %}<div class="math display">\[
{OU\stackrel d=U
\quad\text{for every orthogonal }O,}
\]</div>{% endraw %}
<p>which is the required meaning of uniformity.</p>

<p>For {% raw %}<span class="math inline">\(n\ge2\)</span>{% endraw %}, let {% raw %}<span class="math inline">\(S\)</span>{% endraw %} denote surface area on {% raw %}<span class="math inline">\(S^{n-1}\)</span>{% endraw %}, and let {% raw %}<span class="math inline">\(\omega_{n-1}=S(S^{n-1})\)</span>{% endraw %}. The radial integral in polar coordinates is</p>

{% raw %}<div class="math display">\[
\begin{aligned}
I_n
&amp;=\int_0^\infty r^{n-1}e^{-r^2/2}\,dr\\
&amp;=2^{n/2-1}\int_0^\infty u^{n/2-1}e^{-u}\,du
=2^{n/2-1}\Gamma(n/2),
\end{aligned}
\]</div>{% endraw %}
<p>where {% raw %}<span class="math inline">\(u=r^2/2\)</span>{% endraw %}. Since the Gaussian density integrates to one,</p>

{% raw %}<div class="math display">\[
1=(2\pi)^{-n/2}\omega_{n-1}I_n,
\qquad
\omega_{n-1}=\frac{(2\pi)^{n/2}}{2^{n/2-1}\Gamma(n/2)}
=\frac{2\pi^{n/2}}{\Gamma(n/2)}.
\]</div>{% endraw %}
<p>For Borel sets {% raw %}<span class="math inline">\(A\subseteq S^{n-1}\)</span>{% endraw %} and {% raw %}<span class="math inline">\(C\subseteq(0,\infty)\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
\begin{aligned}
\mathbb P(U\in A,N\in C)
&amp;=(2\pi)^{-n/2}\int_A\int_C
e^{-r^2/2}r^{n-1}\,dr\,dS(u)\\
&amp;=\frac{S(A)}{\omega_{n-1}}
\int_C\frac{r^{n-1}e^{-r^2/2}}{2^{n/2-1}\Gamma(n/2)}\,dr.
\end{aligned}
\]</div>{% endraw %}
<p>The second factor is a probability distribution on {% raw %}<span class="math inline">\((0,\infty)\)</span>{% endraw %}. Taking {% raw %}<span class="math inline">\(C=(0,\infty)\)</span>{% endraw %} yields normalized surface measure for {% raw %}<span class="math inline">\(U\)</span>{% endraw %}; the factorization also proves that {% raw %}<span class="math inline">\(U\)</span>{% endraw %} and {% raw %}<span class="math inline">\(N\)</span>{% endraw %} are independent.</p>

<p>For {% raw %}<span class="math inline">\(n=1\)</span>{% endraw %}, {% raw %}<span class="math inline">\(U\)</span>{% endraw %} equals {% raw %}<span class="math inline">\(1\)</span>{% endraw %} or {% raw %}<span class="math inline">\(-1\)</span>{% endraw %}, each with probability {% raw %}<span class="math inline">\(1/2\)</span>{% endraw %}.</p>

<p>Orthogonal invariance characterizes the uniform law, but this uniqueness also needs justification. Adding a small independent Gaussian gives a density to which polar coordinates apply. Let {% raw %}<span class="math inline">\(V\)</span>{% endraw %} be any sphere-valued random vector with {% raw %}<span class="math inline">\(OV\stackrel d=V\)</span>{% endraw %} for every orthogonal {% raw %}<span class="math inline">\(O\)</span>{% endraw %}. Let {% raw %}<span class="math inline">\(G\sim \mathcal{N}_n(0,I_n)\)</span>{% endraw %} be independent of {% raw %}<span class="math inline">\(V\)</span>{% endraw %}. For {% raw %}<span class="math inline">\(\epsilon&gt;0\)</span>{% endraw %}, the vector {% raw %}<span class="math inline">\(W_\epsilon=V+\epsilon G\)</span>{% endraw %} has density</p>

{% raw %}<div class="math display">\[
f_\epsilon(x)
=(2\pi\epsilon^2)^{-n/2}
\mathbb{E}\exp\left[-\frac{\|x-V\|^2}{2\epsilon^2}\right].
\]</div>{% endraw %}
<p>For every orthogonal {% raw %}<span class="math inline">\(O\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
\begin{aligned}
f_\epsilon(Ox)
&amp;=(2\pi\epsilon^2)^{-n/2}
\mathbb{E}\exp\left[-\frac{\|x-O^\top V\|^2}{2\epsilon^2}\right]\\
&amp;=f_\epsilon(x).
\end{aligned}
\]</div>{% endraw %}
<p>Any two vectors of equal norm are related by an orthogonal transformation, so this density depends only on {% raw %}<span class="math inline">\(\|x\|\)</span>{% endraw %}. Polar coordinates then show that {% raw %}<span class="math inline">\(W_\epsilon/\|W_\epsilon\|\)</span>{% endraw %} has normalized surface law. The denominator is nonzero almost surely because {% raw %}<span class="math inline">\(W_\epsilon\)</span>{% endraw %} has a density. On the fixed joint probability space,</p>

{% raw %}<div class="math display">\[
V+\epsilon G\longrightarrow V,
\qquad
\|V+\epsilon G\|\longrightarrow\|V\|=1,
\qquad
\frac{V+\epsilon G}{\|V+\epsilon G\|}\longrightarrow V
\]</div>{% endraw %}
<p>almost surely as {% raw %}<span class="math inline">\(\epsilon\downarrow0\)</span>{% endraw %}; the quotient is well-defined for all sufficiently small {% raw %}<span class="math inline">\(\epsilon\)</span>{% endraw %} on every such sample path. For every bounded continuous {% raw %}<span class="math inline">\(h\)</span>{% endraw %} on the sphere, dominated convergence gives</p>

{% raw %}<div class="math display">\[
\mathbb{E} h(V)
=\lim_{\epsilon\downarrow0}
\mathbb{E} h\left(\frac{W_\epsilon}{\|W_\epsilon\|}\right)
=\frac1{\omega_{n-1}}\int_{S^{n-1}}h(u)\,dS(u).
\]</div>{% endraw %}
<p>This identifies the law of {% raw %}<span class="math inline">\(V\)</span>{% endraw %} with normalized surface measure. For {% raw %}<span class="math inline">\(n=1\)</span>{% endraw %}, invariance under multiplication by {% raw %}<span class="math inline">\(-1\)</span>{% endraw %} directly forces equal masses on {% raw %}<span class="math inline">\(\{-1,1\}\)</span>{% endraw %}. Thus the Gaussian representation used in Exercise 17 applies to every uniform spherical vector in the stated sense.</p>

<h3 data-note-section="5" id="scq-gaussian-exercise-17">5. Two coordinates on a high-dimensional sphere</h3>
<p><strong>Question (Exercise 17).</strong> For {% raw %}<span class="math inline">\(U_n\)</span>{% endraw %} uniform on the unit sphere {% raw %}<span class="math inline">\(S^{n-1}\subset\mathbb R^n\)</span>{% endraw %}, show that {% raw %}<span class="math inline">\(\sqrt n(U_{n,1},U_{n,2})\)</span>{% endraw %} converges in distribution to two independent standard normals.</p>

<p><strong>Answer.</strong></p>

<p>Let {% raw %}<span class="math inline">\(Z_1,Z_2,\ldots\)</span>{% endraw %} be independent standard normal variables. By Exercise 16, for {% raw %}<span class="math inline">\(n\ge2\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
U_n\stackrel d=
\frac{(Z_1,\ldots,Z_n)}
{\left(\sum_{j=1}^{n}Z_j^2\right)^{1/2}}.
\]</div>{% endraw %}
<p>Therefore</p>

{% raw %}<div class="math display">\[
\sqrt n\,(U_{n,1},U_{n,2})
\stackrel d=
\frac{(Z_1,Z_2)}
{\left(n^{-1}\sum_{j=1}^{n}Z_j^2\right)^{1/2}}.
\]</div>{% endraw %}
<p>Put</p>

{% raw %}<div class="math display">\[
S_n=\frac1n\sum_{j=1}^{n}Z_j^2.
\]</div>{% endraw %}
<p>Since</p>

{% raw %}<div class="math display">\[
\mathbb{E} S_n=1,\qquad
\operatorname{Var}(S_n)=\frac2n,
\]</div>{% endraw %}
<p>Chebyshev’s inequality gives {% raw %}<span class="math inline">\(S_n\xrightarrow{P}1\)</span>{% endraw %}, and hence</p>

{% raw %}<div class="math display">\[
S_n^{-1/2}\xrightarrow{P}1.
\]</div>{% endraw %}
<p>The numerator has the {% raw %}<span class="math inline">\(\mathcal{N}_2(0,I_2)\)</span>{% endraw %} distribution for every {% raw %}<span class="math inline">\(n\)</span>{% endraw %}. Slutsky’s lemma yields</p>

{% raw %}<div class="math display">\[
{
\sqrt n\,(U_{n,1},U_{n,2})
\Rightarrow(Z_1,Z_2)\sim \mathcal{N}_2(0,I_2).
}
\]</div>{% endraw %}
<p>The limiting coordinates are independent by the construction of {% raw %}<span class="math inline">\(Z_1,Z_2\)</span>{% endraw %}. Slutsky’s lemma does not require the numerator to be independent of {% raw %}<span class="math inline">\(S_n\)</span>{% endraw %}.</p>

<p>The denominator contains the same coordinates as the numerator, so their dependence must be allowed in the error estimate. A union bound suffices. Write {% raw %}<span class="math inline">\(R_n=S_n^{-1/2}\)</span>{% endraw %} and {% raw %}<span class="math inline">\(Z^{(2)}=(Z_1,Z_2)\)</span>{% endraw %}. On {% raw %}<span class="math inline">\(\{|S_n-1|\le1/2\}\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
\begin{aligned}
|R_n-1|
&amp;=\left|\frac1{\sqrt{S_n}}-1\right|\\
&amp;=\frac{|1-\sqrt{S_n}|}{\sqrt{S_n}}\\
&amp;=\frac{|1-S_n|}{\sqrt{S_n}(1+\sqrt{S_n})}\\
&amp;\le\sqrt2\,|1-S_n|.
\end{aligned}
\]</div>{% endraw %}
<p>For any {% raw %}<span class="math inline">\(\epsilon&gt;0\)</span>{% endraw %}, set {% raw %}<span class="math inline">\(\delta=\min(1/2,\epsilon/\sqrt2)\)</span>{% endraw %}. Then</p>

{% raw %}<div class="math display">\[
\mathbb P(|R_n-1|&gt;\epsilon)
\le\mathbb P(|S_n-1|&gt;\delta)
\le\frac2{n\delta^2}\longrightarrow0.
\]</div>{% endraw %}
<p>Although {% raw %}<span class="math inline">\(R_n\)</span>{% endraw %} depends on {% raw %}<span class="math inline">\(Z_1,Z_2\)</span>{% endraw %}, for every {% raw %}<span class="math inline">\(M&gt;0\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\varepsilon&gt;0\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
\begin{aligned}
\mathbb P(\|R_nZ^{(2)}-Z^{(2)}\|_2&gt;\varepsilon)
&amp;=\mathbb P(|R_n-1|\,\|Z^{(2)}\|_2&gt;\varepsilon)\\
&amp;\le\mathbb P(\|Z^{(2)}\|_2&gt;M)
+\mathbb P(|R_n-1|&gt;\varepsilon/M)\\
&amp;\le\frac{\mathbb{E}(Z_1^2+Z_2^2)}{M^2}
+\mathbb P(|R_n-1|&gt;\varepsilon/M)\\
&amp;=\frac2{M^2}+\mathbb P(|R_n-1|&gt;\varepsilon/M).
\end{aligned}
\]</div>{% endraw %}
<p>Let {% raw %}<span class="math inline">\(n\to\infty\)</span>{% endraw %} with {% raw %}<span class="math inline">\(M\)</span>{% endraw %} fixed and then let {% raw %}<span class="math inline">\(M\to\infty\)</span>{% endraw %}. This proves convergence in probability of the constructed scaled vectors to {% raw %}<span class="math inline">\(Z^{(2)}\)</span>{% endraw %}, and hence the required convergence in law for the original {% raw %}<span class="math inline">\(U_n\)</span>{% endraw %}.</p>

<p>The joint characteristic function of the limit is</p>

{% raw %}<div class="math display">\[
\mathbb{E} e^{i(sZ_1+tZ_2)}
=\mathbb{E} e^{isZ_1}\,\mathbb{E} e^{itZ_2}
=e^{-s^2/2}e^{-t^2/2}
=e^{-(s^2+t^2)/2}.
\]</div>{% endraw %}
<p>This factorization identifies both the standard normal marginals and their independence.</p>

<p>Source: A. W. van der Vaart, <a href="https://doi.org/10.1017/CBO9780511802256.003"><em>Asymptotic Statistics</em>, Chapter 2, “Stochastic Convergence”</a>, pp. 5–24. The questions above are stated in the notation used in these solutions.</p>


<nav class="note-series" aria-label="Notes in this series"><p>Previous: <a href="{% post_url 2022-01-15-stochastic-convergence-exercises-rare-events-and-consistent-estimation %}">Stochastic Convergence Exercises: Rare Events and Consistent Estimation</a> · Next: <a href="{% post_url 2022-02-19-stochastic-convergence-exercises-poisson-limits-cauchy-averages-and-joint-clts %}">Stochastic Convergence Exercises: Poisson Limits, Cauchy Averages, and Joint CLTs</a></p></nav>

</div>
