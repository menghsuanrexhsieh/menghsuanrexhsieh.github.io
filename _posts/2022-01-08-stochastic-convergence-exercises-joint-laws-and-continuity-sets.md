---
layout: "post"
title: "Stochastic Convergence Exercises: Joint Laws and Continuity Sets"
date: "2022-01-08"
tags: ["probability theory", "statistics"]
excerpt: "Weak convergence controls the limiting law, but it does not determine a coupling or probabilities of arbitrary Borel sets."
note_series: "Stochastic convergence exercises"
note_source: "assets/notes/stochastic-convergence-questions-1-23.md"
note_exercises: [5, 6, 7, 8]
note_question_source: "assets/notes/VdW/07.0_pp_5_24_Stochastic_Convergence.pdf"
---

<div class="note-content" markdown="0">

<p>Knowing the limiting law of each coordinate leaves their dependence undetermined. The first two exercises compare an alternating dependence pattern with independence, which does determine the joint limit. The remaining exercises ask how much weak convergence says about individual sets: a common integer support gives convergence in total variation, whereas a rational grid approaching the uniform law still assigns the wrong probability to the set of rational points.</p>

<p>These are Exercises 5, 6, 7, 8 from A. W. van der Vaart, <em>Asymptotic Statistics</em> (1998), Chapter 2, p. 24. The question numbers identify the original exercises. Write {% raw %}<span class="math inline">\(X_n\Rightarrow X\)</span>{% endraw %} for convergence in distribution and {% raw %}<span class="math inline">\(X_n\xrightarrow{P}X\)</span>{% endraw %} for convergence in probability.</p>

<p>For the underlying definitions, see <a href="{% post_url 2021-11-06-modes-of-stochastic-convergence %}">weak convergence and tightness</a>.</p>

<h3 data-note-section="1" id="scq-laws-exercise-5">1. Marginals do not determine joint convergence</h3>
<p><strong>Question (Exercise 5).</strong> Find sequences with {% raw %}<span class="math inline">\(X_n\Rightarrow X\)</span>{% endraw %} and {% raw %}<span class="math inline">\(Y_n\Rightarrow Y\)</span>{% endraw %} for which {% raw %}<span class="math inline">\((X_n,Y_n)\)</span>{% endraw %} does not converge in distribution.</p>

<p><strong>Answer.</strong></p>

<p>Let {% raw %}<span class="math inline">\(R\)</span>{% endraw %} be a Rademacher random variable:</p>

{% raw %}<div class="math display">\[
\mathbb P(R=1)=\mathbb P(R=-1)=\frac12.
\]</div>{% endraw %}
<p>Define</p>

{% raw %}<div class="math display">\[
X_n=R,\qquad Y_n=(-1)^nR.
\]</div>{% endraw %}
<p>For every {% raw %}<span class="math inline">\(n\)</span>{% endraw %}, both {% raw %}<span class="math inline">\(X_n\)</span>{% endraw %} and {% raw %}<span class="math inline">\(Y_n\)</span>{% endraw %} have the same distribution as {% raw %}<span class="math inline">\(R\)</span>{% endraw %}. Hence</p>

{% raw %}<div class="math display">\[
X_n\Rightarrow R,\qquad Y_n\Rightarrow R.
\]</div>{% endraw %}
<p>The coordinates agree at even indices and have opposite signs at odd indices. This change leaves both marginals unchanged but produces two different joint laws:</p>

{% raw %}<div class="math display">\[
(X_{2m},Y_{2m})=(R,R),
\qquad
(X_{2m+1},Y_{2m+1})=(R,-R).
\]</div>{% endraw %}
<p>In terms of point masses, these two laws are</p>

{% raw %}<div class="math display">\[
\begin{aligned}
\mu_{\mathrm{even}}
&amp;=\frac{1}{2}\delta_{(1,1)}+\frac{1}{2}\delta_{(-1,-1)},\\
\mu_{\mathrm{odd}}
&amp;=\frac{1}{2}\delta_{(1,-1)}+\frac{1}{2}\delta_{(-1,1)}.
\end{aligned}
\]</div>{% endraw %}
<p>Each coordinate marginal still assigns mass {% raw %}<span class="math inline">\(1/2\)</span>{% endraw %} to {% raw %}<span class="math inline">\(1\)</span>{% endraw %} and {% raw %}<span class="math inline">\(-1\)</span>{% endraw %}.</p>

<p>A product detects the sign of this dependence. To make it a valid test for weak convergence, replace the product by the following bounded continuous function</p>

{% raw %}<div class="math display">\[
f(x,y)=\frac{xy}{1+|xy|}.
\]</div>{% endraw %}
<p>The expectations along the two subsequences are</p>

{% raw %}<div class="math display">\[
\begin{aligned}
\int f\,d\mu_{\mathrm{even}}
&amp;=\frac{1}{2}\frac{1}{2}+\frac{1}{2}\frac{1}{2}=\frac{1}{2},\\
\int f\,d\mu_{\mathrm{odd}}
&amp;=\frac{1}{2}\frac{-1}{2}+\frac{1}{2}\frac{-1}{2}=-\frac{1}{2}.
\end{aligned}
\]</div>{% endraw %}
<p>Thus {% raw %}<span class="math inline">\(\mathbb{E} f(X_n,Y_n)=(-1)^n/2\)</span>{% endraw %}, which does not converge. Weak convergence would force convergence of the expectation of every bounded continuous function. Therefore</p>

{% raw %}<div class="math display">\[
{(X_n,Y_n)\text{ does not converge in distribution}.}
\]</div>{% endraw %}
<p>The boundedness condition matters: an oscillating expectation of an unbounded function would not, on its own, rule out weak convergence. Here {% raw %}<span class="math inline">\(|f|&lt;1\)</span>{% endraw %} everywhere, so the bounded-continuous characterization of weak convergence applies directly.</p>

<h3 data-note-section="2" id="scq-laws-exercise-6">2. Independent marginals and their joint limit</h3>
<p><strong>Question (Exercise 6).</strong> Suppose {% raw %}<span class="math inline">\(X_n\)</span>{% endraw %} and {% raw %}<span class="math inline">\(Y_n\)</span>{% endraw %} are independent random vectors for every {% raw %}<span class="math inline">\(n\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(X_n\Rightarrow X\)</span>{% endraw %}, {% raw %}<span class="math inline">\(Y_n\Rightarrow Y\)</span>{% endraw %}. Show that the joint laws converge to the product of the limiting marginal laws.</p>

<p><strong>Answer.</strong></p>

<p>Suppose</p>

{% raw %}<div class="math display">\[
X_n\in\mathbb R^d,\qquad Y_n\in\mathbb R^m,
\]</div>{% endraw %}
<p>with {% raw %}<span class="math inline">\(X_n\)</span>{% endraw %} independent of {% raw %}<span class="math inline">\(Y_n\)</span>{% endraw %} for every {% raw %}<span class="math inline">\(n\)</span>{% endraw %}, and</p>

{% raw %}<div class="math display">\[
X_n\Rightarrow X,\qquad Y_n\Rightarrow Y.
\]</div>{% endraw %}
<p>Let {% raw %}<span class="math inline">\(\mu=\mathcal L(X)\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\nu=\mathcal L(Y)\)</span>{% endraw %}. The precise conclusion is</p>

{% raw %}<div class="math display">\[
{\mathcal L(X_n,Y_n)\Rightarrow\mu\otimes\nu.}
\]</div>{% endraw %}
<p>For {% raw %}<span class="math inline">\(s\in\mathbb R^d\)</span>{% endraw %} and {% raw %}<span class="math inline">\(t\in\mathbb R^m\)</span>{% endraw %}, independence gives</p>

{% raw %}<div class="math display">\[
\begin{aligned}
\varphi_{(X_n,Y_n)}(s,t)
&amp;=
\mathbb{E}\exp\!\bigl(i(s^\top X_n+t^\top Y_n)\bigr)\\
&amp;=
\mathbb{E} e^{is^\top X_n}\,
\mathbb{E} e^{it^\top Y_n}\\
&amp;=
\varphi_{X_n}(s)\varphi_{Y_n}(t).
\end{aligned}
\]</div>{% endraw %}
<p>Marginal weak convergence implies convergence of the characteristic functions, so</p>

{% raw %}<div class="math display">\[
\varphi_{(X_n,Y_n)}(s,t)
\longrightarrow
\varphi_X(s)\varphi_Y(t).
\]</div>{% endraw %}
<p>Independence has reduced the joint characteristic function to two marginal factors, and both factors converge. Their product is the characteristic function of {% raw %}<span class="math inline">\(\mu\otimes\nu\)</span>{% endraw %}. Lévy’s continuity theorem therefore proves the asserted joint convergence.</p>

<p>Equivalently, choose independent random vectors {% raw %}<span class="math inline">\(X^\ast,Y^\ast\)</span>{% endraw %} with</p>

{% raw %}<div class="math display">\[
\mathcal L(X^\ast)=\mu,\qquad
\mathcal L(Y^\ast)=\nu.
\]</div>{% endraw %}
<p>Then</p>

{% raw %}<div class="math display">\[
(X_n,Y_n)\Rightarrow(X^\ast,Y^\ast).
\]</div>{% endraw %}
<p>The exercise denotes this independent pair by {% raw %}<span class="math inline">\((X,Y)\)</span>{% endraw %}. Marginal convergence does not determine a preassigned coupling of the limiting variables.</p>

<p>To construct this independent pair, use the product probability space</p>

{% raw %}<div class="math display">\[
(\mathbb R^d\times\mathbb R^m,
\mathcal B(\mathbb R^d)\otimes\mathcal B(\mathbb R^m),
\mu\otimes\nu),
\]</div>{% endraw %}
<p>and define {% raw %}<span class="math inline">\(X^\ast(x,y)=x\)</span>{% endraw %} and {% raw %}<span class="math inline">\(Y^\ast(x,y)=y\)</span>{% endraw %}. For Borel sets {% raw %}<span class="math inline">\(A,B\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
\begin{aligned}
\mathbb P(X^\ast\in A,Y^\ast\in B)
&amp;=(\mu\otimes\nu)(A\times B)\\
&amp;=\mu(A)\nu(B)\\
&amp;=\mathbb P(X^\ast\in A)\mathbb P(Y^\ast\in B).
\end{aligned}
\]</div>{% endraw %}
<p>Thus these coordinate maps are independent and have the desired marginal laws. Fubini’s theorem applies because the complex exponential has modulus one, and gives</p>

{% raw %}<div class="math display">\[
\begin{aligned}
\varphi_{(X^\ast,Y^\ast)}(s,t)
&amp;=\int\!\int e^{i(s^\top x+t^\top y)}\,\mu(dx)\nu(dy)\\
&amp;=\left(\int e^{is^\top x}\,\mu(dx)\right)
\left(\int e^{it^\top y}\,\nu(dy)\right)\\
&amp;=\varphi_X(s)\varphi_Y(t).
\end{aligned}
\]</div>{% endraw %}
<p>Weak convergence of the marginals implies convergence of these characteristic functions by applying the bounded-continuous criterion to their real and imaginary parts. The limiting product is continuous at zero, since dominated convergence gives continuity at zero of each factor. This verifies the hypotheses of Lévy’s continuity theorem for the joint vectors. No independence assumptions between different sample sizes are used.</p>

<h3 data-note-section="3" id="scq-laws-exercise-7">3. Integer-valued laws and total variation</h3>
<p><strong>Question (Exercise 7).</strong> If {% raw %}<span class="math inline">\(X_n\)</span>{% endraw %} and {% raw %}<span class="math inline">\(X\)</span>{% endraw %} are integer-valued, show that {% raw %}<span class="math inline">\(X_n\Rightarrow X\)</span>{% endraw %} if and only if {% raw %}<span class="math inline">\(\mathbb P(X_n=k)\to\mathbb P(X=k)\)</span>{% endraw %} for every integer {% raw %}<span class="math inline">\(k\)</span>{% endraw %}.</p>

<p><strong>Answer.</strong></p>

<p>Put</p>

{% raw %}<div class="math display">\[
p_n(k)=\mathbb P(X_n=k),\qquad
p(k)=\mathbb P(X=k),\qquad k\in\mathbb Z.
\]</div>{% endraw %}
<p>Suppose first that {% raw %}<span class="math inline">\(X_n\Rightarrow X\)</span>{% endraw %}. Let {% raw %}<span class="math inline">\(F_n,F\)</span>{% endraw %} be their distribution functions. Since {% raw %}<span class="math inline">\(X\)</span>{% endraw %} is integer-valued, {% raw %}<span class="math inline">\(F\)</span>{% endraw %} is continuous at every noninteger. Thus</p>

{% raw %}<div class="math display">\[
\begin{aligned}
p_n(k)
&amp;=
F_n\!\left(k+\frac12\right)
-F_n\!\left(k-\frac12\right)\\
&amp;\longrightarrow
F\!\left(k+\frac12\right)
-F\!\left(k-\frac12\right)
=p(k).
\end{aligned}
\]</div>{% endraw %}
<p>Conversely, suppose {% raw %}<span class="math inline">\(p_n(k)\to p(k)\)</span>{% endraw %} for every {% raw %}<span class="math inline">\(k\in\mathbb Z\)</span>{% endraw %}. Since both mass functions sum to {% raw %}<span class="math inline">\(1\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
\sum_{k\in\mathbb Z}|p_n(k)-p(k)|
=
2-2\sum_{k\in\mathbb Z}\min(p_n(k),p(k)).
\]</div>{% endraw %}
<p>For each {% raw %}<span class="math inline">\(k\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
\min(p_n(k),p(k))\longrightarrow p(k),
\qquad
0\le\min(p_n(k),p(k))\le p(k).
\]</div>{% endraw %}
<p>Because {% raw %}<span class="math inline">\(\sum_k p(k)=1\)</span>{% endraw %}, dominated convergence for the series yields</p>

{% raw %}<div class="math display">\[
\sum_{k\in\mathbb Z}\min(p_n(k),p(k))\longrightarrow1.
\]</div>{% endraw %}
<p>Consequently,</p>

{% raw %}<div class="math display">\[
\sum_{k\in\mathbb Z}|p_n(k)-p(k)|\longrightarrow0.
\]</div>{% endraw %}
<p>For every {% raw %}<span class="math inline">\(t\in\mathbb R\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
|F_n(t)-F(t)|
=
\left|\sum_{\substack{k\in\mathbb Z\\k\le t}}
\bigl(p_n(k)-p(k)\bigr)\right|
\le
\sum_{k\in\mathbb Z}|p_n(k)-p(k)|.
\]</div>{% endraw %}
<p>Thus {% raw %}<span class="math inline">\(F_n\to F\)</span>{% endraw %} uniformly, which implies {% raw %}<span class="math inline">\(X_n\Rightarrow X\)</span>{% endraw %}. Hence</p>

{% raw %}<div class="math display">\[
{
X_n\Rightarrow X
\quad\Longleftrightarrow\quad
\forall k\in\mathbb Z,\ 
\mathbb P(X_n=k)\to\mathbb P(X=k).
}
\]</div>{% endraw %}
<p>The summability step can also be proved by first keeping a finite set that carries almost all of the limiting mass. Convergence on that finite set then prevents mass from escaping into its complement. Fix {% raw %}<span class="math inline">\(\varepsilon&gt;0\)</span>{% endraw %} and choose {% raw %}<span class="math inline">\(m\)</span>{% endraw %} such that</p>

{% raw %}<div class="math display">\[
r_m\triangleq\sum_{|k|&gt;m}p(k)&lt;\varepsilon.
\]</div>{% endraw %}
<p>Set</p>

{% raw %}<div class="math display">\[
D_{n,m}=\sum_{|k|\le m}|p_n(k)-p(k)|\longrightarrow0.
\]</div>{% endraw %}
<p>Since both mass functions sum to one,</p>

{% raw %}<div class="math display">\[
\begin{aligned}
\sum_{|k|&gt;m}p_n(k)
&amp;=1-\sum_{|k|\le m}p_n(k)\\
&amp;\le1-\sum_{|k|\le m}p(k)+D_{n,m}\\
&amp;=r_m+D_{n,m}.
\end{aligned}
\]</div>{% endraw %}
<p>Therefore</p>

{% raw %}<div class="math display">\[
\begin{aligned}
\sum_{k\in\mathbb Z}|p_n(k)-p(k)|
&amp;\le D_{n,m}+\sum_{|k|&gt;m}p_n(k)+\sum_{|k|&gt;m}p(k)\\
&amp;\le2D_{n,m}+2r_m,\\
\limsup_{n\to\infty}\sum_k|p_n(k)-p(k)|
&amp;\le2\varepsilon.
\end{aligned}
\]</div>{% endraw %}
<p>Letting {% raw %}<span class="math inline">\(\varepsilon\downarrow0\)</span>{% endraw %} gives the asserted {% raw %}<span class="math inline">\(\ell^1\)</span>{% endraw %} convergence.</p>

<p>In fact the conclusion is convergence in total variation. If {% raw %}<span class="math inline">\(d_n(k)=p_n(k)-p(k)\)</span>{% endraw %}, then {% raw %}<span class="math inline">\(\sum_kd_n(k)=0\)</span>{% endraw %}, so</p>

{% raw %}<div class="math display">\[
\sum_{d_n(k)&gt;0}d_n(k)
=-\sum_{d_n(k)&lt;0}d_n(k)
=\frac12\sum_k|d_n(k)|.
\]</div>{% endraw %}
<p>The set {% raw %}<span class="math inline">\(\{k:d_n(k)&gt;0\}\)</span>{% endraw %} attains the largest possible positive difference of probabilities. Hence</p>

{% raw %}<div class="math display">\[
\sup_{B\in\mathcal B(\mathbb R)}
|\mathbb P(X_n\in B)-\mathbb P(X\in B)|
=\frac12\sum_{k\in\mathbb Z}|p_n(k)-p(k)|\longrightarrow0.
\]</div>{% endraw %}
<h3 data-note-section="4" id="scq-laws-exercise-8">4. A fine grid and a limiting null set</h3>
<p><strong>Question (Exercise 8).</strong> Let {% raw %}<span class="math inline">\(\mathbb P(X_n=i/n)=1/n\)</span>{% endraw %} for {% raw %}<span class="math inline">\(i=1,\ldots,n\)</span>{% endraw %}. Find the weak limit {% raw %}<span class="math inline">\(X\)</span>{% endraw %}, and a Borel set {% raw %}<span class="math inline">\(B\)</span>{% endraw %} such that {% raw %}<span class="math inline">\(\mathbb P(X_n\in B)=1\)</span>{% endraw %} for every {% raw %}<span class="math inline">\(n\)</span>{% endraw %} but {% raw %}<span class="math inline">\(\mathbb P(X\in B)=0\)</span>{% endraw %}.</p>

<p><strong>Answer.</strong></p>

<p>Assume</p>

{% raw %}<div class="math display">\[
\mathbb P(X_n=i/n)=\frac1n,\qquad i=1,\ldots,n.
\]</div>{% endraw %}
<p>For {% raw %}<span class="math inline">\(0\le t&lt;1\)</span>{% endraw %}, the integers with {% raw %}<span class="math inline">\(i/n\le t\)</span>{% endraw %} are exactly {% raw %}<span class="math inline">\(1,\ldots,\lfloor nt\rfloor\)</span>{% endraw %} (none when {% raw %}<span class="math inline">\(\lfloor nt\rfloor=0\)</span>{% endraw %}). Thus</p>

{% raw %}<div class="math display">\[
\mathbb P(X_n\le t)
=\frac{\#\{i\in\{1,\ldots,n\}:i\le nt\}}n
=\frac{\lfloor nt\rfloor}{n}.
\]</div>{% endraw %}
<p>The full distribution function is</p>

{% raw %}<div class="math display">\[
F_n(t)=
\begin{cases}
0,&amp;t&lt;0,\\[2mm]
\dfrac{\lfloor nt\rfloor}{n},&amp;0\le t&lt;1,\\[2mm]
1,&amp;t\ge1.
\end{cases}
\]</div>{% endraw %}
<p>For {% raw %}<span class="math inline">\(0\le t&lt;1\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
0\le t-\frac{\lfloor nt\rfloor}{n}&lt;\frac1n.
\]</div>{% endraw %}
<p>Therefore {% raw %}<span class="math inline">\(F_n\)</span>{% endraw %} converges uniformly to</p>

{% raw %}<div class="math display">\[
F(t)=
\begin{cases}
0,&amp;t&lt;0,\\
t,&amp;0\le t&lt;1,\\
1,&amp;t\ge1,
\end{cases}
\]</div>{% endraw %}
<p>the distribution function of {% raw %}<span class="math inline">\(X\sim\operatorname{Uniform}[0,1]\)</span>{% endraw %}. Hence</p>

{% raw %}<div class="math display">\[
{X_n\Rightarrow X\sim\operatorname{Uniform}[0,1].}
\]</div>{% endraw %}
<p>Uniform convergence of distribution functions still does not control every Borel set. To see the obstruction, take the countable Borel set</p>

{% raw %}<div class="math display">\[
B=\mathbb Q\cap[0,1].
\]</div>{% endraw %}
<p>Every possible value {% raw %}<span class="math inline">\(i/n\)</span>{% endraw %} belongs to {% raw %}<span class="math inline">\(B\)</span>{% endraw %}, so</p>

{% raw %}<div class="math display">\[
\mathbb P(X_n\in B)=1\qquad\text{for every }n.
\]</div>{% endraw %}
<p>But the uniform distribution assigns probability zero to every countable set:</p>

{% raw %}<div class="math display">\[
\mathbb P(X\in B)
=\sum_{q\in\mathbb Q\cap[0,1]}\mathbb P(X=q)=0.
\]</div>{% endraw %}
<p>Every open interval meeting {% raw %}<span class="math inline">\((0,1)\)</span>{% endraw %} contains both rational and irrational points. Thus {% raw %}<span class="math inline">\(B\)</span>{% endraw %} has empty interior and closure {% raw %}<span class="math inline">\([0,1]\)</span>{% endraw %}, giving</p>

{% raw %}<div class="math display">\[
\partial B=[0,1],
\qquad
\mathbb P(X\in\partial B)=1,
\]</div>{% endraw %}
<p>so {% raw %}<span class="math inline">\(B\)</span>{% endraw %} is not a continuity set of the limiting law.</p>

<p>There is also a direct coupling: round a single uniform variable up to the nearest grid point. Take {% raw %}<span class="math inline">\(U\sim\operatorname{Uniform}(0,1)\)</span>{% endraw %} and</p>

{% raw %}<div class="math display">\[
\widetilde X_n=\frac{\lceil nU\rceil}{n}.
\]</div>{% endraw %}
<p>Indeed,</p>

{% raw %}<div class="math display">\[
\mathbb P(\widetilde X_n=i/n)
=\mathbb P((i-1)/n&lt;U\le i/n)=\frac1n,
\]</div>{% endraw %}
<p>and</p>

{% raw %}<div class="math display">\[
0\le\widetilde X_n-U&lt;\frac1n.
\]</div>{% endraw %}
<p>This constructed sequence converges almost surely to {% raw %}<span class="math inline">\(U\)</span>{% endraw %}, which also proves convergence of the prescribed laws. It does not impose a coupling on an arbitrary original sequence {% raw %}<span class="math inline">\((X_n)\)</span>{% endraw %}.</p>

<p>Source: A. W. van der Vaart, <a href="https://doi.org/10.1017/CBO9780511802256.003"><em>Asymptotic Statistics</em>, Chapter 2, “Stochastic Convergence”</a>, pp. 5–24. The questions above are stated in the notation used in these solutions.</p>


<nav class="note-series" aria-label="Notes in this series"><p>Previous: <a href="{% post_url 2021-11-20-stochastic-convergence-exercises-slutsky-tightness-and-order-symbols %}">Stochastic Convergence Exercises: Slutsky, Tightness, and Order Symbols</a> · Next: <a href="{% post_url 2022-01-15-stochastic-convergence-exercises-rare-events-and-consistent-estimation %}">Stochastic Convergence Exercises: Rare Events and Consistent Estimation</a></p></nav>

</div>
