---
layout: "post"
title: "Stochastic Convergence Exercises: Poisson Limits, Cauchy Averages, and Joint CLTs"
date: "2022-02-19"
tags: ["probability theory", "statistics"]
excerpt: "An average need not concentrate, and a sum of many terms need not have a normal limit."
note_series: "Stochastic convergence exercises"
note_source: "assets/notes/stochastic-convergence-questions-1-23.md"
note_exercises: [21, 22, 23]
note_question_source: "assets/notes/VdW/07.0_pp_5_24_Stochastic_Convergence.pdf"
---

<div class="note-content" markdown="0">

<p>The number of summands alone does not determine the limit of a sum. Rare Bernoulli successes retain jumps of fixed size and give a Poisson law; Cauchy averages retain the original Cauchy law at every sample size. With a finite fourth moment, however, the sample mean and second moment have a joint Gaussian limit. Characteristic functions make these three mechanisms explicit and show where the usual central limit argument applies.</p>

<p>These are Exercises 21, 22, 23 from A. W. van der Vaart, <em>Asymptotic Statistics</em> (1998), Chapter 2, p. 24. The question numbers identify the original exercises. Write {% raw %}<span class="math inline">\(X_n\Rightarrow X\)</span>{% endraw %} for convergence in distribution and {% raw %}<span class="math inline">\(X_n\xrightarrow{P}X\)</span>{% endraw %} for convergence in probability.</p>

<p>For the underlying definitions, see <a href="{% post_url 2022-01-08-stochastic-convergence-exercises-joint-laws-and-continuity-sets %}">joint convergence</a>.</p>

<h3 data-note-section="1" id="scq-averages-exercise-21">1. Rare successes give a Poisson limit</h3>
<p><strong>Question (Exercise 21).</strong> Use characteristic functions to prove {% raw %}<span class="math inline">\(\operatorname{Binomial}(n,\lambda/n)\Rightarrow\operatorname{Poisson}(\lambda)\)</span>{% endraw %}. Why does a central limit theorem not give a normal limit here?</p>

<p><strong>Answer.</strong></p>

<p>Fix {% raw %}<span class="math inline">\(\lambda&gt;0\)</span>{% endraw %}, and let</p>

{% raw %}<div class="math display">\[
B_n\sim\operatorname{Binomial}(n,\lambda/n),
\]</div>{% endraw %}
<p>for sufficiently large {% raw %}<span class="math inline">\(n\)</span>{% endraw %}. Its characteristic function is</p>

{% raw %}<div class="math display">\[
\begin{aligned}
\varphi_{B_n}(t)
&amp;=
\left(1-\frac{\lambda}{n}
+\frac{\lambda}{n}e^{it}\right)^n\\
&amp;=
\left(1+\frac{\lambda(e^{it}-1)}n\right)^n
\longrightarrow
\exp\!\bigl(\lambda(e^{it}-1)\bigr).
\end{aligned}
\]</div>{% endraw %}
<p>If {% raw %}<span class="math inline">\(P_\lambda\sim\operatorname{Poisson}(\lambda)\)</span>{% endraw %}, then</p>

{% raw %}<div class="math display">\[
\begin{aligned}
\varphi_{P_\lambda}(t)
&amp;=
\sum_{k=0}^{\infty}
e^{itk}e^{-\lambda}\frac{\lambda^k}{k!}\\
&amp;=
e^{-\lambda}\exp(\lambda e^{it})
=
\exp\!\bigl(\lambda(e^{it}-1)\bigr).
\end{aligned}
\]</div>{% endraw %}
<p>Lévy’s continuity theorem therefore gives</p>

{% raw %}<div class="math display">\[
{B_n\Rightarrow P_\lambda.}
\]</div>{% endraw %}
<p>For fixed {% raw %}<span class="math inline">\(t\in\mathbb R\)</span>{% endraw %}, put {% raw %}<span class="math inline">\(z=\lambda(e^{it}-1)\)</span>{% endraw %}. For all sufficiently large {% raw %}<span class="math inline">\(n\)</span>{% endraw %}, {% raw %}<span class="math inline">\(1+z/n\)</span>{% endraw %} lies in a neighborhood of {% raw %}<span class="math inline">\(1\)</span>{% endraw %} where the logarithm is analytic. Taylor’s expansion gives</p>

{% raw %}<div class="math display">\[
\begin{aligned}
n\log(1+z/n)
&amp;=n\left[\frac zn-\frac{z^2}{2n^2}+O_t(n^{-3})\right]\\
&amp;=z-\frac{z^2}{2n}+O_t(n^{-2})
\longrightarrow z.
\end{aligned}
\]</div>{% endraw %}
<p>Here the bound implicit in {% raw %}<span class="math inline">\(O_t\)</span>{% endraw %} may depend on the fixed {% raw %}<span class="math inline">\(t\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\lambda\)</span>{% endraw %}. Exponentiation yields</p>

{% raw %}<div class="math display">\[
\varphi_{B_n}(t)=(1+z/n)^n\longrightarrow e^z
=e^{\lambda(e^{it}-1)}.
\]</div>{% endraw %}
<p>The proposed limiting masses are normalized because</p>

{% raw %}<div class="math display">\[
\sum_{k=0}^\infty e^{-\lambda}\frac{\lambda^k}{k!}
=e^{-\lambda}e^\lambda=1.
\]</div>{% endraw %}
<p>Their characteristic function is continuous at zero, as required for the continuity theorem.</p>

<p>The Poisson limit already suggests why a normal approximation cannot become exact here: individual successes remain visible on the scale of the total standard deviation. To check the standardized limit, note that</p>

{% raw %}<div class="math display">\[
\mathbb{E} B_n=\lambda,\qquad
\operatorname{Var}(B_n)
=\lambda\left(1-\frac{\lambda}{n}\right)
\longrightarrow\lambda.
\]</div>{% endraw %}
<p>Slutsky’s lemma gives the actual standardized limit:</p>

{% raw %}<div class="math display">\[
{
\frac{B_n-\lambda}
{\sqrt{\lambda(1-\lambda/n)}}
\Rightarrow
\frac{P_\lambda-\lambda}{\sqrt\lambda}.
}
\]</div>{% endraw %}
<p>For {% raw %}<span class="math inline">\(\lambda&gt;0\)</span>{% endraw %}, let {% raw %}<span class="math inline">\(s_n=\sqrt{\lambda(1-\lambda/n)}\)</span>{% endraw %}, taking {% raw %}<span class="math inline">\(n&gt;\lambda\)</span>{% endraw %}. The characteristic function of the standardized variable is</p>

{% raw %}<div class="math display">\[
\begin{aligned}
\mathbb{E}\exp\left(it\frac{B_n-\lambda}{s_n}\right)
&amp;=e^{-it\lambda/s_n}
\left[1+\frac\lambda n(e^{it/s_n}-1)\right]^n\\
&amp;\longrightarrow
e^{-it\sqrt\lambda}
\exp\left[\lambda(e^{it/\sqrt\lambda}-1)\right]\\
&amp;=\exp\left[\lambda\left(e^{it/\sqrt\lambda}-1-\frac{it}{\sqrt\lambda}\right)\right].
\end{aligned}
\]</div>{% endraw %}
<p>For the second line, the same logarithmic expansion applies with the bounded sequence {% raw %}<span class="math inline">\(z_n=\lambda(e^{it/s_n}-1)\to\lambda(e^{it/\sqrt\lambda}-1)\)</span>{% endraw %}. This is the characteristic function of {% raw %}<span class="math inline">\((P_\lambda-\lambda)/\sqrt\lambda\)</span>{% endraw %}. In particular,</p>

{% raw %}<div class="math display">\[
\mathbb P\left(\frac{P_\lambda-\lambda}{\sqrt\lambda}=-\sqrt\lambda\right)
=\mathbb P(P_\lambda=0)=e^{-\lambda}&gt;0.
\]</div>{% endraw %}
<p>Every nondegenerate normal law assigns zero mass to a singleton, so the standardized limit cannot be standard normal.</p>

<p>The ordinary i.i.d. CLT assumes a fixed summand law; here the Bernoulli law changes with the row. The failure of the more general Lindeberg condition is explicit. Write {% raw %}<span class="math inline">\(B_n=\sum_{i=1}^nY_{n,i}\)</span>{% endraw %}, with independent {% raw %}<span class="math inline">\(Y_{n,i}\sim\operatorname{Bernoulli}(p_n)\)</span>{% endraw %} within each row. For {% raw %}<span class="math inline">\(p_n=\lambda/n\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
Y_{n,i}-p_n=
\begin{cases}
1-p_n,&amp;\text{with probability }p_n,\\
-p_n,&amp;\text{with probability }1-p_n.
\end{cases}
\]</div>{% endraw %}
<p>With {% raw %}<span class="math inline">\(s_n^2=np_n(1-p_n)\)</span>{% endraw %}, the normalized truncated second-moment sum equals</p>

{% raw %}<div class="math display">\[
\begin{aligned}
L_n(\varepsilon)
&amp;=\frac n{s_n^2}\left[
p_n(1-p_n)^2\mathbf1_{\{1-p_n&gt;\varepsilon s_n\}}
+(1-p_n)p_n^2\mathbf1_{\{p_n&gt;\varepsilon s_n\}}
\right].
\end{aligned}
\]</div>{% endraw %}
<p>For {% raw %}<span class="math inline">\(0&lt;\varepsilon&lt;1/\sqrt\lambda\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
\frac{1-p_n}{s_n}\to\frac1{\sqrt\lambda}&gt;\varepsilon,
\qquad \frac{p_n}{s_n}\to0&lt;\varepsilon.
\]</div>{% endraw %}
<p>Thus, eventually, the first indicator is one and the second is zero, giving</p>

{% raw %}<div class="math display">\[
L_n(\varepsilon)
=\frac{np_n(1-p_n)^2}{np_n(1-p_n)}
=1-p_n\to1.
\]</div>{% endraw %}
<p>A success has nonvanishing size after standardization, and these jumps retain a nonzero share of the total variance. The displayed limit is precisely the obstruction to the Lindeberg condition.</p>

<p>For {% raw %}<span class="math inline">\(\lambda=0\)</span>{% endraw %}, both laws are the point mass at zero. Standardization is relevant only for {% raw %}<span class="math inline">\(\lambda&gt;0\)</span>{% endraw %}.</p>

<h3 data-note-section="2" id="scq-averages-exercise-22">2. Cauchy averages do not concentrate</h3>
<p><strong>Question (Exercise 22).</strong> Let {% raw %}<span class="math inline">\(X_1,\ldots,X_n\)</span>{% endraw %} be i.i.d. standard Cauchy. (i) Use characteristic functions to show that their average is standard Cauchy. (ii) Explain why the weak law of large numbers does not hold.</p>

<p><strong>Answer.</strong></p>

<p><strong>(i) Characteristic functions.</strong> A standard Cauchy variable has density</p>

{% raw %}<div class="math display">\[
f(x)=\frac1{\pi(1+x^2)}
\]</div>{% endraw %}
<p>and characteristic function</p>

{% raw %}<div class="math display">\[
\varphi_X(t)
=
\frac1\pi\int_{-\infty}^{\infty}
\frac{e^{itx}}{1+x^2}\,dx
=
e^{-|t|}.
\]</div>{% endraw %}
<p>To compute the Cauchy transform using real integrals, express its density as an integral of Gaussian kernels. We first need the transform of each kernel. Write {% raw %}<span class="math inline">\(\phi(x)=(2\pi)^{-1/2}e^{-x^2/2}\)</span>{% endraw %} and first compute the Gaussian transform. Let</p>

{% raw %}<div class="math display">\[
\gamma(s)=\int_{\mathbb R}e^{isx}\phi(x)\,dx.
\]</div>{% endraw %}
<p>Differentiation under the integral is justified by integrability of {% raw %}<span class="math inline">\(|x|\phi(x)\)</span>{% endraw %}. Integration by parts then yields</p>

{% raw %}<div class="math display">\[
\begin{aligned}
\gamma&#x27;(s)
&amp;=i\int_{\mathbb R}x e^{isx}\phi(x)\,dx\\
&amp;=-i\int_{\mathbb R}e^{isx}\phi&#x27;(x)\,dx\\
&amp;=-i[e^{isx}\phi(x)]_{-\infty}^{\infty}
+i(is)\int_{\mathbb R}e^{isx}\phi(x)\,dx\\
&amp;=-s\gamma(s).
\end{aligned}
\]</div>{% endraw %}
<p>Since {% raw %}<span class="math inline">\(\gamma(0)=1\)</span>{% endraw %}, solving the differential equation gives {% raw %}<span class="math inline">\(\gamma(s)=e^{-s^2/2}\)</span>{% endraw %}. For {% raw %}<span class="math inline">\(u&gt;0\)</span>{% endraw %}, the substitution {% raw %}<span class="math inline">\(y=\sqrt{2u}\,x\)</span>{% endraw %} therefore gives</p>

{% raw %}<div class="math display">\[
\begin{aligned}
\int_{\mathbb R}e^{-ux^2+itx}\,dx
&amp;=\frac1{\sqrt{2u}}
\int_{\mathbb R}e^{-y^2/2}e^{i(t/\sqrt{2u})y}\,dy\\
&amp;=\sqrt{\frac\pi u}\,
\gamma\left(\frac{t}{\sqrt{2u}}\right)\\
&amp;=\sqrt{\frac\pi u}\,e^{-t^2/(4u)}.
\end{aligned}
\]</div>{% endraw %}
<p>The following identity supplies the required Gaussian kernels</p>

{% raw %}<div class="math display">\[
\frac1{1+x^2}
=\int_0^\infty e^{-u(1+x^2)}\,du.
\]</div>{% endraw %}
<p>The absolute integral needed for Fubini’s theorem is finite:</p>

{% raw %}<div class="math display">\[
\begin{aligned}
\int_0^\infty\int_{\mathbb R}
|e^{itx}e^{-u(1+x^2)}|\,dx\,du
&amp;=\int_0^\infty e^{-u}\sqrt{\frac\pi u}\,du\\
&amp;=\sqrt\pi\,\Gamma(1/2)=\pi.
\end{aligned}
\]</div>{% endraw %}
<p>Consequently,</p>

{% raw %}<div class="math display">\[
\begin{aligned}
\varphi_X(t)
&amp;=\frac1\pi\int_{\mathbb R}\frac{e^{itx}}{1+x^2}\,dx\\
&amp;=\frac1\pi\int_0^\infty e^{-u}
\left(\int_{\mathbb R}e^{-ux^2+itx}\,dx\right)du\\
&amp;=\frac1{\sqrt\pi}\int_0^\infty
u^{-1/2}\exp\left(-u-\frac{t^2}{4u}\right)du\\
&amp;=\frac2{\sqrt\pi}\int_0^\infty
\exp\left(-y^2-\frac{t^2}{4y^2}\right)dy,
\end{aligned}
\]</div>{% endraw %}
<p>where the last substitution is {% raw %}<span class="math inline">\(u=y^2\)</span>{% endraw %}.</p>

<p>Define, for {% raw %}<span class="math inline">\(a\ge0\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
J(a)=\int_0^\infty e^{-y^2-a^2/y^2}\,dy.
\]</div>{% endraw %}
<p>For {% raw %}<span class="math inline">\(a&gt;0\)</span>{% endraw %}, differentiation under the integral gives</p>

{% raw %}<div class="math display">\[
J&#x27;(a)=-2a\int_0^\infty y^{-2}e^{-y^2-a^2/y^2}\,dy.
\]</div>{% endraw %}
<p>This differentiation is justified locally in {% raw %}<span class="math inline">\(a&gt;0\)</span>{% endraw %}: the factor {% raw %}<span class="math inline">\(e^{-c/y^2}\)</span>{% endraw %}, for a fixed {% raw %}<span class="math inline">\(c&gt;0\)</span>{% endraw %}, controls the derivative near zero, and {% raw %}<span class="math inline">\(e^{-y^2}\)</span>{% endraw %} controls it at infinity. In the last integral, substitute {% raw %}<span class="math inline">\(z=a/y\)</span>{% endraw %}, so that {% raw %}<span class="math inline">\(y=a/z\)</span>{% endraw %} and {% raw %}<span class="math inline">\(dy=-az^{-2}dz\)</span>{% endraw %}. Then</p>

{% raw %}<div class="math display">\[
\begin{aligned}
\int_0^\infty y^{-2}e^{-y^2-a^2/y^2}\,dy
&amp;=\frac1a\int_0^\infty e^{-a^2/z^2-z^2}\,dz\\
&amp;=\frac{J(a)}a.
\end{aligned}
\]</div>{% endraw %}
<p>Therefore</p>

{% raw %}<div class="math display">\[
J&#x27;(a)=-2J(a),
\qquad J(a)=Ce^{-2a}\quad(a&gt;0).
\]</div>{% endraw %}
<p>Dominated convergence, with dominating function {% raw %}<span class="math inline">\(e^{-y^2}\)</span>{% endraw %}, gives</p>

{% raw %}<div class="math display">\[
\lim_{a\downarrow0}J(a)
=\int_0^\infty e^{-y^2}\,dy=\frac{\sqrt\pi}{2}.
\]</div>{% endraw %}
<p>Hence {% raw %}<span class="math inline">\(C=\sqrt\pi/2\)</span>{% endraw %}, and substitution of {% raw %}<span class="math inline">\(a=|t|/2\)</span>{% endraw %} yields</p>

{% raw %}<div class="math display">\[
\varphi_X(t)
=\frac2{\sqrt\pi}J(|t|/2)
=\frac2{\sqrt\pi}\frac{\sqrt\pi}{2}e^{-|t|}
=e^{-|t|}.
\]</div>{% endraw %}
<p>For</p>

{% raw %}<div class="math display">\[
\overline X_n=\frac1n\sum_{j=1}^{n}X_j,
\]</div>{% endraw %}
<p>independence gives</p>

{% raw %}<div class="math display">\[
\begin{aligned}
\varphi_{\overline X_n}(t)
&amp;=
\prod_{j=1}^{n}
\mathbb{E} e^{i(t/n)X_j}\\
&amp;=
\left(e^{-|t|/n}\right)^n
=e^{-|t|}.
\end{aligned}
\]</div>{% endraw %}
<p>By uniqueness of characteristic functions,</p>

{% raw %}<div class="math display">\[
{\overline X_n\sim\operatorname{Cauchy}(0,1)
\quad\text{for every }n.}
\]</div>{% endraw %}
<p><strong>(ii) Why the weak law does not hold.</strong> Part (i) shows directly that the averages do not concentrate. To locate the failed hypothesis of the usual weak law, check the first absolute moment:</p>

{% raw %}<div class="math display">\[
\begin{aligned}
\mathbb{E} X_1^+
&amp;=\lim_{R\to\infty}\int_0^R\frac{x}{\pi(1+x^2)}\,dx\\
&amp;=\lim_{R\to\infty}\frac1{2\pi}[\log(1+x^2)]_0^R\\
&amp;=\lim_{R\to\infty}\frac1{2\pi}\log(1+R^2)=\infty.
\end{aligned}
\]</div>{% endraw %}
<p>Symmetry gives {% raw %}<span class="math inline">\(\mathbb{E} X_1^-=\infty\)</span>{% endraw %}. Thus {% raw %}<span class="math inline">\(\mathbb{E} X_1\)</span>{% endraw %} is undefined; symmetry does not give a mean of zero.</p>

<p>The Cauchy distribution function follows by integration:</p>

{% raw %}<div class="math display">\[
F(x)=\int_{-\infty}^x\frac{du}{\pi(1+u^2)}
=\frac1\pi[\arctan u]_{-\infty}^x
=\frac12+\frac1\pi\arctan x.
\]</div>{% endraw %}
<p>The failure of concentration follows directly from part (i). For every {% raw %}<span class="math inline">\(\varepsilon&gt;0\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
\begin{aligned}
\mathbb P(|\overline X_n|&gt;\varepsilon)
&amp;=
\mathbb P(|X_1|&gt;\varepsilon)\\
&amp;=
1-\frac2\pi\arctan(\varepsilon)&gt;0,
\end{aligned}
\]</div>{% endraw %}
<p>independently of {% raw %}<span class="math inline">\(n\)</span>{% endraw %}. Therefore</p>

{% raw %}<div class="math display">\[
{\overline X_n\not\xrightarrow{P}0.}
\]</div>{% endraw %}
<p>More generally, for every finite {% raw %}<span class="math inline">\(c\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\varepsilon&gt;0\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
\mathbb P(|\overline X_n-c|&gt;\varepsilon)
=1-\frac{\arctan(c+\varepsilon)-\arctan(c-\varepsilon)}\pi&gt;0.
\]</div>{% endraw %}
<p>The strict inequality follows because a finite interval has strictly less than full probability under the everywhere-positive Cauchy density. The probability is independent of {% raw %}<span class="math inline">\(n\)</span>{% endraw %}, excluding convergence in probability to any constant.</p>

<h3 data-note-section="3" id="scq-averages-exercise-23">3. The mean and second moment converge jointly</h3>
<p><strong>Question (Exercise 23).</strong> For i.i.d. {% raw %}<span class="math inline">\(X_i\)</span>{% endraw %} with finite fourth moment, find constants {% raw %}<span class="math inline">\(a,b\)</span>{% endraw %} and a deterministic normalization {% raw %}<span class="math inline">\(c_n\)</span>{% endraw %} such that {% raw %}<span class="math inline">\(c_n(\overline X_n-a,M_{2,n}-b)\)</span>{% endraw %} has a limiting distribution, and identify that law. Here {% raw %}<span class="math inline">\(M_{2,n}=n^{-1}\sum_iX_i^2\)</span>{% endraw %}.</p>

<p><strong>Answer.</strong></p>

<p>Write</p>

{% raw %}<div class="math display">\[
m_r=\mathbb{E} X_1^r,\qquad r=1,2,3,4,
\]</div>{% endraw %}
<p>and define</p>

{% raw %}<div class="math display">\[
\overline X_n=\frac1n\sum_{i=1}^{n}X_i,
\qquad
M_{2,n}=\frac1n\sum_{i=1}^{n}X_i^2.
\]</div>{% endraw %}
<p>Thus {% raw %}<span class="math inline">\(M_{2,n}\)</span>{% endraw %} is the average of the squares, not {% raw %}<span class="math inline">\((\overline X_n)^2\)</span>{% endraw %}.</p>

<p>A suitable choice is</p>

{% raw %}<div class="math display">\[
{a=m_1,\qquad b=m_2,\qquad c_n=\sqrt n.}
\]</div>{% endraw %}
<p>The limit is</p>

{% raw %}<div class="math display">\[
{
\sqrt n
\begin{pmatrix}
\overline X_n-m_1\\
M_{2,n}-m_2
\end{pmatrix}
\Rightarrow \mathcal{N}_2(0,\Sigma),
}
\]</div>{% endraw %}
<p>where</p>

{% raw %}<div class="math display">\[
{
\Sigma=
\begin{pmatrix}
m_2-m_1^2 &amp; m_3-m_1m_2\\
m_3-m_1m_2 &amp; m_4-m_2^2
\end{pmatrix}.
}
\]</div>{% endraw %}
<p>The fourth-moment assumption guarantees, for {% raw %}<span class="math inline">\(1\le r\le4\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
\mathbb{E}|X_1|^r
\le(\mathbb{E}|X_1|^4)^{r/4}&lt;\infty,
\]</div>{% endraw %}
<p>by Hölder’s inequality (with equality of the two expressions when {% raw %}<span class="math inline">\(r=4\)</span>{% endraw %}). Thus all products in the following calculations are integrable. Put</p>

{% raw %}<div class="math display">\[
\mu_V=\begin{pmatrix}m_1\\m_2\end{pmatrix},
\qquad
V_i=\begin{pmatrix}X_i\\X_i^2\end{pmatrix},
\qquad
\Sigma=\mathbb{E}[(V_i-\mu_V)(V_i-\mu_V)^\top].
\]</div>{% endraw %}
<p>The first diagonal entry is</p>

{% raw %}<div class="math display">\[
\begin{aligned}
\Sigma_{11}
&amp;=\mathbb{E}(X_i-m_1)^2\\
&amp;=\mathbb{E} X_i^2-2m_1\mathbb{E} X_i+m_1^2\\
&amp;=m_2-2m_1^2+m_1^2=m_2-m_1^2.
\end{aligned}
\]</div>{% endraw %}
<p>The off-diagonal entries are</p>

{% raw %}<div class="math display">\[
\begin{aligned}
\Sigma_{12}=\Sigma_{21}
&amp;=\mathbb{E}[(X_i-m_1)(X_i^2-m_2)]\\
&amp;=\mathbb{E}[X_i^3-m_2X_i-m_1X_i^2+m_1m_2]\\
&amp;=m_3-m_2m_1-m_1m_2+m_1m_2\\
&amp;=m_3-m_1m_2.
\end{aligned}
\]</div>{% endraw %}
<p>The second diagonal entry is</p>

{% raw %}<div class="math display">\[
\begin{aligned}
\Sigma_{22}
&amp;=\mathbb{E}(X_i^2-m_2)^2\\
&amp;=\mathbb{E}[X_i^4-2m_2X_i^2+m_2^2]\\
&amp;=m_4-2m_2^2+m_2^2=m_4-m_2^2.
\end{aligned}
\]</div>{% endraw %}
<p>To pass from separate variances to a joint limit, examine every fixed linear combination of the two coordinates. For fixed {% raw %}<span class="math inline">\(q=(s,t)^\top\)</span>{% endraw %}, define</p>

{% raw %}<div class="math display">\[
W_i=q^\top(V_i-\mu_V)
=s(X_i-m_1)+t(X_i^2-m_2).
\]</div>{% endraw %}
<p>Then {% raw %}<span class="math inline">\(\mathbb{E} W_i=0\)</span>{% endraw %}, and expansion gives</p>

{% raw %}<div class="math display">\[
\begin{aligned}
\mathbb{E} W_i^2
&amp;=s^2\mathbb{E}(X_i-m_1)^2
+2st\mathbb{E}[(X_i-m_1)(X_i^2-m_2)]
+t^2\mathbb{E}(X_i^2-m_2)^2\\
&amp;=s^2(m_2-m_1^2)
+2st(m_3-m_1m_2)
+t^2(m_4-m_2^2)\\
&amp;=s^2m_2+2stm_3+t^2m_4-(sm_1+tm_2)^2\\
&amp;=q^\top\Sigma q\ge0.
\end{aligned}
\]</div>{% endraw %}
<p>This also proves that {% raw %}<span class="math inline">\(\Sigma\)</span>{% endraw %} is positive semidefinite. These vectors are i.i.d., and {% raw %}<span class="math inline">\(\mathbb{E}\|V_i\|^2=m_2+m_4&lt;\infty\)</span>{% endraw %}. The centered and scaled statistic is exactly</p>

{% raw %}<div class="math display">\[
\begin{aligned}
\sqrt n
\begin{pmatrix}
\overline X_n-m_1\\
M_{2,n}-m_2
\end{pmatrix}
&amp;=\sqrt n\left(\frac1n\sum_{i=1}^nV_i-\mu_V\right)\\
&amp;=\frac1{\sqrt n}\sum_{i=1}^n(V_i-\mu_V).
\end{aligned}
\]</div>{% endraw %}
<p>Each such linear combination has finite variance. The scalar CLT therefore applies; its characteristic-function proof uses a second-order characteristic-function expansion. Let {% raw %}<span class="math inline">\(W\)</span>{% endraw %} have mean zero and finite variance {% raw %}<span class="math inline">\(v\)</span>{% endraw %}. Set</p>

{% raw %}<div class="math display">\[
H(u)=\frac{e^{iu}-1-iu+u^2/2}{u^2}\quad(u\ne0),
\qquad H(0)=0.
\]</div>{% endraw %}
<p>Taylor’s formula at zero shows that {% raw %}<span class="math inline">\(H(u)\to0\)</span>{% endraw %} as {% raw %}<span class="math inline">\(u\to0\)</span>{% endraw %}. The function is bounded: it is continuous on compact intervals, and for {% raw %}<span class="math inline">\(|u|\ge1\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
|H(u)|\le\frac2{u^2}+\frac1{|u|}+\frac12\le\frac72.
\]</div>{% endraw %}
<p>Consequently, dominated convergence, with dominating variable a constant times {% raw %}<span class="math inline">\(W^2\)</span>{% endraw %}, gives</p>

{% raw %}<div class="math display">\[
\begin{aligned}
\mathbb{E} e^{ihW}
&amp;=1+ih\mathbb{E} W-\frac{h^2}{2}\mathbb{E} W^2
+h^2\mathbb{E}[W^2H(hW)]\\
&amp;=1-\frac{vh^2}{2}+o(h^2).
\end{aligned}
\]</div>{% endraw %}
<p>For independent copies {% raw %}<span class="math inline">\(W_1,\ldots,W_n\)</span>{% endraw %} and fixed {% raw %}<span class="math inline">\(t\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
\begin{aligned}
\mathbb{E}\exp\left(\frac{it}{\sqrt n}\sum_{j=1}^nW_j\right)
&amp;=\left[\mathbb{E} e^{itW/\sqrt n}\right]^n\\
&amp;=\left[1-\frac{vt^2}{2n}+o(n^{-1})\right]^n\\
&amp;\longrightarrow e^{-vt^2/2}.
\end{aligned}
\]</div>{% endraw %}
<p>To justify the final limit, write the bracket as {% raw %}<span class="math inline">\(1+z_n\)</span>{% endraw %}, where {% raw %}<span class="math inline">\(nz_n\to-vt^2/2\)</span>{% endraw %}. For large {% raw %}<span class="math inline">\(n\)</span>{% endraw %}, the logarithm defined near {% raw %}<span class="math inline">\(1\)</span>{% endraw %} satisfies</p>

{% raw %}<div class="math display">\[
n\log(1+z_n)=nz_n+O(n|z_n|^2)
\longrightarrow-\frac{vt^2}{2}.
\]</div>{% endraw %}
<p>Exponentiation gives the claimed limit, and Lévy’s continuity theorem identifies the normal law.</p>

<p>Applying this expansion to {% raw %}<span class="math inline">\(W_i\)</span>{% endraw %}, for every fixed {% raw %}<span class="math inline">\(q\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
\begin{aligned}
\mathbb{E}\exp\left[
iq^\top\frac1{\sqrt n}\sum_{i=1}^n(V_i-\mu_V)
\right]
&amp;=\left[\mathbb{E} e^{iW_1/\sqrt n}\right]^n\\
&amp;=\left[1-\frac{q^\top\Sigma q}{2n}+o(n^{-1})\right]^n\\
&amp;\longrightarrow\exp\left(-\frac12q^\top\Sigma q\right).
\end{aligned}
\]</div>{% endraw %}
<p>Since {% raw %}<span class="math inline">\(\Sigma\)</span>{% endraw %} is positive semidefinite, it has a symmetric square root {% raw %}<span class="math inline">\(\Sigma^{1/2}\)</span>{% endraw %}. If {% raw %}<span class="math inline">\(G\sim \mathcal{N}_2(0,I_2)\)</span>{% endraw %}, then</p>

{% raw %}<div class="math display">\[
\mathbb{E} e^{iq^\top\Sigma^{1/2}G}
=\exp\left(-\frac12\|\Sigma^{1/2}q\|_2^2\right)
=\exp\left(-\frac12q^\top\Sigma q\right).
\]</div>{% endraw %}
<p>The limiting function is continuous at zero and is the characteristic function of {% raw %}<span class="math inline">\(\mathcal{N}_2(0,\Sigma)\)</span>{% endraw %}. Lévy’s continuity theorem proves the desired joint limit directly.</p>

<p>If {% raw %}<span class="math inline">\(q^\top\Sigma q=0\)</span>{% endraw %}, then {% raw %}<span class="math inline">\(\mathbb{E} W_i^2=0\)</span>{% endraw %}, so {% raw %}<span class="math inline">\(W_i=0\)</span>{% endraw %} almost surely. Thus the corresponding linear combination is exactly zero for every {% raw %}<span class="math inline">\(n\)</span>{% endraw %}, consistent with the degenerate normal limit. No positive-definiteness assumption is missing.</p>

<p>For example, if {% raw %}<span class="math inline">\(\mathbb P(X_i=1)=\mathbb P(X_i=-1)=1/2\)</span>{% endraw %}, then {% raw %}<span class="math inline">\(M_{2,n}=1\)</span>{% endraw %} almost surely and {% raw %}<span class="math inline">\(\Sigma=\operatorname{diag}(1,0)\)</span>{% endraw %}. Only the first coordinate fluctuates.</p>

<p>The two limiting coordinates need not be independent. For example, if {% raw %}<span class="math inline">\(X_i\sim\operatorname{Bernoulli}(p)\)</span>{% endraw %}, {% raw %}<span class="math inline">\(0&lt;p&lt;1\)</span>{% endraw %}, then {% raw %}<span class="math inline">\(X_i^2=X_i\)</span>{% endraw %}, all four raw moments equal {% raw %}<span class="math inline">\(p\)</span>{% endraw %}, and</p>

{% raw %}<div class="math display">\[
\Sigma=p(1-p)
\begin{pmatrix}1&amp;1\\1&amp;1\end{pmatrix}.
\]</div>{% endraw %}
<p>Both coordinates of the scaled statistic are identical in this example, so their separate limiting variances cannot describe the joint law. The off-diagonal entries record their dependence and are essential to the answer.</p>

<p>Source: A. W. van der Vaart, <a href="https://doi.org/10.1017/CBO9780511802256.003"><em>Asymptotic Statistics</em>, Chapter 2, “Stochastic Convergence”</a>, pp. 5–24. The questions above are stated in the notation used in these solutions.</p>


<nav class="note-series" aria-label="Notes in this series"><p>Previous: <a href="{% post_url 2022-01-29-stochastic-convergence-exercises-student-laws-and-gaussian-directions %}">Stochastic Convergence Exercises: Student Laws and Gaussian Directions</a></p></nav>

</div>
