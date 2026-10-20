---
layout: "post"
title: "Stochastic Convergence Exercises: Slutsky, Tightness, and Order Symbols"
date: "2021-11-20"
tags: ["probability theory", "statistics"]
excerpt: "The notation for stochastic order abbreviates probability statements."
note_series: "Stochastic convergence exercises"
note_source: "assets/notes/stochastic-convergence-questions-1-23.md"
note_exercises: [9, 10, 11, 12, 3, 18]
note_question_source: "assets/notes/VdW/07.0_pp_5_24_Stochastic_Convergence.pdf"
---

<div class="note-content" markdown="0">

<p>A deterministic error that tends to zero remains small after multiplication by a bounded sequence. What replaces boundedness when both factors are random? Tightness gives the required control: restrict one factor to a large bounded set, and estimate the probability of its complement. The exercises below develop this argument, interpret stochastic order notation, and explain why a local expansion may fail when its random argument does not approach the expansion point.</p>

<p>These are Exercises 9, 10, 11, 12, 3, 18 from A. W. van der Vaart, <em>Asymptotic Statistics</em> (1998), Chapter 2, p. 24. The question numbers identify the original exercises. Write {% raw %}<span class="math inline">\(X_n\Rightarrow X\)</span>{% endraw %} for convergence in distribution and {% raw %}<span class="math inline">\(X_n\xrightarrow{P}X\)</span>{% endraw %} for convergence in probability.</p>

<p>For the underlying definitions, see <a href="{% post_url 2021-10-13-modes-of-stochastic-convergence %}">modes of stochastic convergence</a>.</p>

<h3 data-note-section="1" id="scq-orders-exercise-9">1. Deterministic limits</h3>
<p><strong>Question (Exercise 9).</strong> If {% raw %}<span class="math inline">\(\mathbb P(X_n=x_n)=1\)</span>{% endraw %} and {% raw %}<span class="math inline">\(x_n\to x\)</span>{% endraw %}, prove {% raw %}<span class="math inline">\(X_n\Rightarrow x\)</span>{% endraw %}: (i) using distribution functions; (ii) using Theorem 2.7 of the chapter.</p>

<p><strong>Answer.</strong></p>

<p><strong>(i) Using distribution functions.</strong> A point mass has a single jump in its distribution function. To prove weak convergence, we compare the functions away from the limiting jump:</p>

{% raw %}<div class="math display">\[
F_n(t)=\mathbf1_{\{x_n\le t\}},
\qquad
F(t)=\mathbf1_{\{x\le t\}},
\]</div>{% endraw %}
<p>where {% raw %}<span class="math inline">\(F\)</span>{% endraw %} is the distribution function of the point mass at {% raw %}<span class="math inline">\(x\)</span>{% endraw %}.</p>

<p>If {% raw %}<span class="math inline">\(t&lt;x\)</span>{% endraw %}, choose {% raw %}<span class="math inline">\(\delta=(x-t)/2\)</span>{% endraw %}. Eventually {% raw %}<span class="math inline">\(|x_n-x|&lt;\delta\)</span>{% endraw %}, so</p>

{% raw %}<div class="math display">\[
x_n&gt;x-\delta=\frac{x+t}{2}&gt;t,
\qquad F_n(t)=0=F(t).
\]</div>{% endraw %}
<p>If {% raw %}<span class="math inline">\(t&gt;x\)</span>{% endraw %}, choose {% raw %}<span class="math inline">\(\delta=(t-x)/2\)</span>{% endraw %}. Eventually,</p>

{% raw %}<div class="math display">\[
x_n&lt;x+\delta=\frac{x+t}{2}&lt;t,
\qquad F_n(t)=1=F(t).
\]</div>{% endraw %}
<p>These cover all continuity points of {% raw %}<span class="math inline">\(F\)</span>{% endraw %}; convergence at {% raw %}<span class="math inline">\(t=x\)</span>{% endraw %} is not required. Hence {% raw %}<span class="math inline">\(X_n\Rightarrow x\)</span>{% endraw %}.</p>

<p><strong>(ii) Using Theorem 2.7.</strong> For every {% raw %}<span class="math inline">\(\varepsilon&gt;0\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
\mathbb P(|X_n-x|&gt;\varepsilon)
=
\mathbf1_{\{|x_n-x|&gt;\varepsilon\}}
\longrightarrow0.
\]</div>{% endraw %}
<p>Thus {% raw %}<span class="math inline">\(X_n\xrightarrow{P}x\)</span>{% endraw %}. Theorem 2.7(ii), which states that convergence in probability implies convergence in distribution, gives</p>

{% raw %}<div class="math display">\[
{X_n\Rightarrow x.}
\]</div>{% endraw %}
<p>The same argument extends to random limits by allowing a small error in the threshold. Outside the event where the approximation error is large, the following inclusions compare the two distribution functions. If {% raw %}<span class="math inline">\(Y_n\xrightarrow{P}Y\)</span>{% endraw %}, then, for every {% raw %}<span class="math inline">\(t\in\mathbb R\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\varepsilon&gt;0\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
\begin{aligned}
\{Y\le t-\varepsilon\}\cap\{|Y_n-Y|\le\varepsilon\}
&amp;\subseteq\{Y_n\le t\},\\
\{Y_n\le t\}\cap\{|Y_n-Y|\le\varepsilon\}
&amp;\subseteq\{Y\le t+\varepsilon\}.
\end{aligned}
\]</div>{% endraw %}
<p>Taking probabilities gives</p>

{% raw %}<div class="math display">\[
F_Y(t-\varepsilon)-\mathbb P(|Y_n-Y|&gt;\varepsilon)
\le F_{Y_n}(t)
\le F_Y(t+\varepsilon)+\mathbb P(|Y_n-Y|&gt;\varepsilon).
\]</div>{% endraw %}
<p>For a continuity point {% raw %}<span class="math inline">\(t\)</span>{% endraw %} of {% raw %}<span class="math inline">\(F_Y\)</span>{% endraw %}, first let {% raw %}<span class="math inline">\(n\to\infty\)</span>{% endraw %}, and then let {% raw %}<span class="math inline">\(\varepsilon\downarrow0\)</span>{% endraw %}. The resulting bounds are</p>

{% raw %}<div class="math display">\[
F_Y(t)
\le\liminf_nF_{Y_n}(t)
\le\limsup_nF_{Y_n}(t)
\le F_Y(t).
\]</div>{% endraw %}
<p>Thus {% raw %}<span class="math inline">\(F_{Y_n}(t)\to F_Y(t)\)</span>{% endraw %}.</p>

<p>For the converse when the limit is a constant {% raw %}<span class="math inline">\(c\)</span>{% endraw %}, define</p>

{% raw %}<div class="math display">\[
g_\varepsilon(y)=\min(1,|y-c|/\varepsilon).
\]</div>{% endraw %}
<p>This function is bounded and continuous, {% raw %}<span class="math inline">\(g_\varepsilon(c)=0\)</span>{% endraw %}, and</p>

{% raw %}<div class="math display">\[
\mathbf1_{\{|y-c|&gt;\varepsilon\}}\le g_\varepsilon(y).
\]</div>{% endraw %}
<p>If {% raw %}<span class="math inline">\(Y_n\Rightarrow c\)</span>{% endraw %}, the bounded-continuous criterion therefore implies</p>

{% raw %}<div class="math display">\[
\mathbb P(|Y_n-c|&gt;\varepsilon)
\le\mathbb{E} g_\varepsilon(Y_n)
\longrightarrow g_\varepsilon(c)=0.
\]</div>{% endraw %}
<p>This proves the convergence-to-a-constant equivalence also used in Exercise 18.</p>

<h3 data-note-section="2" id="scq-orders-exercise-10">2. Adding a negligible term to a tight sequence</h3>
<p><strong>Question (Exercise 10).</strong> State the rule {% raw %}<span class="math inline">\(o_P(1)+O_P(1)=O_P(1)\)</span>{% endraw %} in terms of random vectors and prove it.</p>

<p><strong>Answer.</strong></p>

<p>For random vectors in {% raw %}<span class="math inline">\(\mathbb R^d\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
A_n=o_P(1)
\quad\Longleftrightarrow\quad
\forall\varepsilon&gt;0,\ 
\mathbb P(\|A_n\|&gt;\varepsilon)\longrightarrow0.
\]</div>{% endraw %}
<p>Also, {% raw %}<span class="math inline">\(B_n=O_P(1)\)</span>{% endraw %} means</p>

{% raw %}<div class="math display">\[
\forall\eta&gt;0\ \exists M&lt;\infty,\ N\in\mathbb N:
\quad
\sup_{n\ge N}\mathbb P(\|B_n\|&gt;M)&lt;\eta.
\]</div>{% endraw %}
<p>This is equivalent to uniform tightness: increasing {% raw %}<span class="math inline">\(M\)</span>{% endraw %} handles the finitely many initial terms.</p>

<p>The rule asserts</p>

{% raw %}<div class="math display">\[
A_n\xrightarrow{P}0,\quad B_n=O_P(1)
\quad\Longrightarrow\quad
A_n+B_n=O_P(1).
\]</div>{% endraw %}
<p>Fix {% raw %}<span class="math inline">\(\eta&gt;0\)</span>{% endraw %}. Choose {% raw %}<span class="math inline">\(M&lt;\infty\)</span>{% endraw %} and {% raw %}<span class="math inline">\(N_1\)</span>{% endraw %} such that</p>

{% raw %}<div class="math display">\[
\mathbb P(\|B_n\|&gt;M)&lt;\frac{\eta}{2}
\qquad(n\ge N_1).
\]</div>{% endraw %}
<p>Since {% raw %}<span class="math inline">\(A_n\xrightarrow{P}0\)</span>{% endraw %}, choose {% raw %}<span class="math inline">\(N_2\)</span>{% endraw %} such that</p>

{% raw %}<div class="math display">\[
\mathbb P(\|A_n\|&gt;1)&lt;\frac{\eta}{2}
\qquad(n\ge N_2).
\]</div>{% endraw %}
<p>The triangle inequality implies</p>

{% raw %}<div class="math display">\[
\{\|A_n+B_n\|&gt;M+1\}
\subseteq
\{\|A_n\|&gt;1\}\cup\{\|B_n\|&gt;M\}.
\]</div>{% endraw %}
<p>Therefore, for {% raw %}<span class="math inline">\(n\ge\max(N_1,N_2)\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
\begin{aligned}
\mathbb P(\|A_n+B_n\|&gt;M+1)
&amp;\le
\mathbb P(\|A_n\|&gt;1)
+\mathbb P(\|B_n\|&gt;M)\\
&amp;&lt;\eta.
\end{aligned}
\]</div>{% endraw %}
<p>This proves</p>

{% raw %}<div class="math display">\[
{A_n+B_n=O_P(1).}
\]</div>{% endraw %}
<p>The argument uses only the triangle inequality and the union bound, so it applies to any joint distribution of the two sequences. No independence assumption is needed.</p>

<p>Suppose that, for each {% raw %}<span class="math inline">\(\eta&gt;0\)</span>{% endraw %}, there exist {% raw %}<span class="math inline">\(M_0&lt;\infty\)</span>{% endraw %} and {% raw %}<span class="math inline">\(N\)</span>{% endraw %} such that</p>

{% raw %}<div class="math display">\[
\sup_{n\ge N}\mathbb P(\|B_n\|&gt;M_0)&lt;\eta.
\]</div>{% endraw %}
<p>For each of the finitely many indices {% raw %}<span class="math inline">\(1\le j&lt;N\)</span>{% endraw %}, finiteness of {% raw %}<span class="math inline">\(B_j\)</span>{% endraw %} almost surely implies</p>

{% raw %}<div class="math display">\[
\mathbb P(\|B_j\|&gt;M)\longrightarrow0\qquad(M\to\infty).
\]</div>{% endraw %}
<p>Choose {% raw %}<span class="math inline">\(M_j\)</span>{% endraw %} with {% raw %}<span class="math inline">\(\mathbb P(\|B_j\|&gt;M_j)&lt;\eta\)</span>{% endraw %}, and put</p>

{% raw %}<div class="math display">\[
M=\max(M_0,M_1,\ldots,M_{N-1}).
\]</div>{% endraw %}
<p>If {% raw %}<span class="math inline">\(N=1\)</span>{% endraw %}, take {% raw %}<span class="math inline">\(M=M_0\)</span>{% endraw %}. Monotonicity of the tail probabilities gives</p>

{% raw %}<div class="math display">\[
\sup_{n\ge1}\mathbb P(\|B_n\|&gt;M)
\le\max\left(
\max_{1\le j&lt;N}\mathbb P(\|B_j\|&gt;M_j),
\sup_{n\ge N}\mathbb P(\|B_n\|&gt;M_0)
\right)&lt;\eta,
\]</div>{% endraw %}
<p>with the finite maximum omitted when {% raw %}<span class="math inline">\(N=1\)</span>{% endraw %}. Thus the eventual definition of {% raw %}<span class="math inline">\(O_P(1)\)</span>{% endraw %} is equivalent to uniform tightness.</p>

<h3 data-note-section="3" id="scq-orders-exercise-11">3. Order symbols express implications</h3>
<p><strong>Question (Exercise 11).</strong> In what sense is {% raw %}<span class="math inline">\(o_P(1)=O_P(1)\)</span>{% endraw %} true? Is {% raw %}<span class="math inline">\(O_P(1)=o_P(1)\)</span>{% endraw %} true?</p>

<p><strong>Answer.</strong></p>

<p>Here the equality sign records an implication between classes of sequences. Written without order notation, the assertion is</p>

{% raw %}<div class="math display">\[
{A_n=o_P(1)\quad\Longrightarrow\quad A_n=O_P(1).}
\]</div>{% endraw %}
<p>Indeed, {% raw %}<span class="math inline">\(A_n=o_P(1)\)</span>{% endraw %} gives</p>

{% raw %}<div class="math display">\[
\mathbb P(\|A_n\|&gt;1)\longrightarrow0.
\]</div>{% endraw %}
<p>Given {% raw %}<span class="math inline">\(\eta&gt;0\)</span>{% endraw %}, this probability is less than {% raw %}<span class="math inline">\(\eta\)</span>{% endraw %} for all sufficiently large {% raw %}<span class="math inline">\(n\)</span>{% endraw %}. Thus the definition of {% raw %}<span class="math inline">\(O_P(1)\)</span>{% endraw %} holds with {% raw %}<span class="math inline">\(M=1\)</span>{% endraw %}.</p>

<p>The converse is false. Take a fixed vector {% raw %}<span class="math inline">\(v\ne0\)</span>{% endraw %} and let</p>

{% raw %}<div class="math display">\[
A_n=v\qquad\text{almost surely for every }n.
\]</div>{% endraw %}
<p>For {% raw %}<span class="math inline">\(M\ge\|v\|\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
\mathbb P(\|A_n\|&gt;M)=0,
\]</div>{% endraw %}
<p>so {% raw %}<span class="math inline">\(A_n=O_P(1)\)</span>{% endraw %}. However,</p>

{% raw %}<div class="math display">\[
\mathbb P\!\left(\|A_n\|&gt;\frac{\|v\|}{2}\right)=1
\qquad\text{for every }n,
\]</div>{% endraw %}
<p>so {% raw %}<span class="math inline">\(A_n\ne o_P(1)\)</span>{% endraw %}.</p>

<p>Consequently, when viewed as classes of sequences,</p>

{% raw %}<div class="math display">\[
{o_P(1)\subsetneq O_P(1).}
\]</div>{% endraw %}
<p>The equality sign in {% raw %}<span class="math inline">\(o_P(1)=O_P(1)\)</span>{% endraw %} is conventional shorthand for inclusion, not a symmetric equality of these classes.</p>

<p>Let {% raw %}<span class="math inline">\(\mathcal o\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\mathcal O\)</span>{% endraw %} denote the classes of sequences that are {% raw %}<span class="math inline">\(o_P(1)\)</span>{% endraw %} and {% raw %}<span class="math inline">\(O_P(1)\)</span>{% endraw %}, respectively. There is a related exact set identity for the sum rule:</p>

{% raw %}<div class="math display">\[
\mathcal o+\mathcal O=\mathcal O.
\]</div>{% endraw %}
<p>Exercise 10 proves the inclusion from left to right. For the reverse inclusion, every {% raw %}<span class="math inline">\((B_n)\in\mathcal O\)</span>{% endraw %} has the decomposition</p>

{% raw %}<div class="math display">\[
B_n=0+B_n,
\qquad (0)\in\mathcal o.
\]</div>{% endraw %}
<p>This set identity for sums does not identify {% raw %}<span class="math inline">\(\mathcal o\)</span>{% endraw %} with {% raw %}<span class="math inline">\(\mathcal O\)</span>{% endraw %}.</p>

<h3 data-note-section="4" id="scq-orders-exercise-12">4. A local remainder needs a local argument</h3>
<p><strong>Question (Exercise 12).</strong> Show why the local remainder rules in Lemma 2.12 cannot be applied by formal substitution alone.</p>

<ol type="i">
<li><p>Find {% raw %}<span class="math inline">\(R(h)=o(|h|)\)</span>{% endraw %} as {% raw %}<span class="math inline">\(h\to0\)</span>{% endraw %} and random variables {% raw %}<span class="math inline">\(X_n\)</span>{% endraw %} for which {% raw %}<span class="math inline">\(R(X_n)\ne o_P(X_n)\)</span>{% endraw %}.</p></li>
<li><p>Find {% raw %}<span class="math inline">\(R(h)=O(|h|)\)</span>{% endraw %} as {% raw %}<span class="math inline">\(h\to0\)</span>{% endraw %} and {% raw %}<span class="math inline">\(X_n=O_P(1)\)</span>{% endraw %} for which {% raw %}<span class="math inline">\(R(X_n)\ne O_P(X_n)\)</span>{% endraw %}.</p></li>
</ol>
<p><strong>Answer.</strong></p>

<p>A local bound controls the remainder only near zero. To use it at a random argument, the argument must enter that neighbourhood with probability tending to one; the lemma therefore requires {% raw %}<span class="math inline">\(X_n\xrightarrow{P}0\)</span>{% endraw %}. Both examples below show why this condition matters. See Lemma 2.12, p. 13.</p>

<p><strong>(i)</strong> Take</p>

{% raw %}<div class="math display">\[
R(h)=h^2,\qquad X_n=1\quad\text{almost surely}.
\]</div>{% endraw %}
<p>Then</p>

{% raw %}<div class="math display">\[
\frac{|R(h)|}{|h|}=|h|\longrightarrow0
\qquad(h\to0),
\]</div>{% endraw %}
<p>so {% raw %}<span class="math inline">\(R(h)=o(|h|)\)</span>{% endraw %}. However,</p>

{% raw %}<div class="math display">\[
\frac{R(X_n)}{X_n}=1
\quad\text{almost surely for every }n.
\]</div>{% endraw %}
<p>In particular, the probability that the absolute ratio exceeds {% raw %}<span class="math inline">\(1/2\)</span>{% endraw %} is one for every {% raw %}<span class="math inline">\(n\)</span>{% endraw %}, so it does not converge to zero in probability. Thus</p>

{% raw %}<div class="math display">\[
{R(X_n)\ne o_P(X_n).}
\]</div>{% endraw %}
<p><strong>(ii)</strong> Define the finite-valued Borel function</p>

{% raw %}<div class="math display">\[
R(h)=
\begin{cases}
\dfrac{h}{1-h},&amp;h\ne1,\\[2mm]
0,&amp;h=1,
\end{cases}
\qquad
X_n=\frac{n}{n+1}\quad\text{almost surely}.
\]</div>{% endraw %}
<p>If {% raw %}<span class="math inline">\(|h|\le\frac12\)</span>{% endraw %}, then</p>

{% raw %}<div class="math display">\[
|R(h)|=\frac{|h|}{|1-h|}\le2|h|.
\]</div>{% endraw %}
<p>Hence {% raw %}<span class="math inline">\(R(h)=O(|h|)\)</span>{% endraw %} as {% raw %}<span class="math inline">\(h\to0\)</span>{% endraw %}.</p>

<p>Also {% raw %}<span class="math inline">\(0&lt;X_n&lt;1\)</span>{% endraw %}, so {% raw %}<span class="math inline">\(X_n=O_P(1)\)</span>{% endraw %}. But</p>

{% raw %}<div class="math display">\[
R(X_n)
=
\frac{n/(n+1)}{1-n/(n+1)}
=n,
\qquad
\frac{R(X_n)}{X_n}=n+1.
\]</div>{% endraw %}
<p>The latter sequence is not bounded in probability: for every {% raw %}<span class="math inline">\(M&lt;\infty\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
\mathbb P\!\left(\left|\frac{R(X_n)}{X_n}\right|&gt;M\right)=1
\quad\text{eventually}.
\]</div>{% endraw %}
<p>Therefore</p>

{% raw %}<div class="math display">\[
{X_n=O_P(1),\qquad R(X_n)\ne O_P(X_n).}
\]</div>{% endraw %}
<p>The condition on {% raw %}<span class="math inline">\(R\)</span>{% endraw %} only controls its behavior near zero, whereas this sequence approaches {% raw %}<span class="math inline">\(1\)</span>{% endraw %}.</p>

<p>The function in (ii) is Borel measurable and finite everywhere, including at {% raw %}<span class="math inline">\(h=1\)</span>{% endraw %}. Because {% raw %}<span class="math inline">\(X_n\ne0\)</span>{% endraw %}, a representation {% raw %}<span class="math inline">\(R(X_n)=Y_nX_n\)</span>{% endraw %} forces {% raw %}<span class="math inline">\(Y_n=n+1\)</span>{% endraw %}; choosing a different bounded factor does not make the conclusion valid. Lemma 2.12 requires {% raw %}<span class="math inline">\(X_n\xrightarrow{P}0\)</span>{% endraw %}, precisely the condition missing in both examples.</p>

<h3 data-note-section="5" id="scq-orders-exercise-3">5. Multiplication by a consistent factor</h3>
<p><strong>Question (Exercise 3).</strong> If {% raw %}<span class="math inline">\(X_n\Rightarrow \mathcal{N}(0,1)\)</span>{% endraw %} and {% raw %}<span class="math inline">\(Y_n\xrightarrow{P}\sigma\)</span>{% endraw %}, show that {% raw %}<span class="math inline">\(X_nY_n\Rightarrow \mathcal{N}(0,\sigma^2)\)</span>{% endraw %}.</p>

<p><strong>Answer.</strong></p>

<p>Subtract the proposed limiting multiplier and estimate the resulting error. It is enough to prove that {% raw %}<span class="math inline">\(X_n(Y_n-\sigma)\xrightarrow{P}0\)</span>{% endraw %}. This uses tightness of {% raw %}<span class="math inline">\(X_n\)</span>{% endraw %}, not independence of the two factors.</p>

<p>Let {% raw %}<span class="math inline">\(Z\sim \mathcal{N}(0,1)\)</span>{% endraw %}. Weak convergence {% raw %}<span class="math inline">\(X_n\Rightarrow Z\)</span>{% endraw %} implies boundedness in probability. In this case it also follows directly from the normal distribution function: for {% raw %}<span class="math inline">\(M&gt;0\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
\mathbb P(|X_n|&gt;M)
\le1-F_n(M)+F_n(-M)
\longrightarrow1-\Phi(M)+\Phi(-M).
\]</div>{% endraw %}
<p>The expression on the right tends to zero as {% raw %}<span class="math inline">\(M\to\infty\)</span>{% endraw %}. Given {% raw %}<span class="math inline">\(\eta&gt;0\)</span>{% endraw %}, choose {% raw %}<span class="math inline">\(M&gt;0\)</span>{% endraw %} and then {% raw %}<span class="math inline">\(N\)</span>{% endraw %} such that</p>

{% raw %}<div class="math display">\[
\mathbb P(|X_n|&gt;M)&lt;\eta\qquad(n\ge N).
\]</div>{% endraw %}
<p>Put {% raw %}<span class="math inline">\(R_n=X_n(Y_n-\sigma)\)</span>{% endraw %}. For every {% raw %}<span class="math inline">\(\varepsilon&gt;0\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
\begin{aligned}
\{|R_n|&gt;\varepsilon\}
&amp;\subseteq
\{|X_n|&gt;M\}\cup
\{|Y_n-\sigma|&gt;\varepsilon/M\},\\
\limsup_{n\to\infty}\mathbb P(|R_n|&gt;\varepsilon)
&amp;\le\eta+0.
\end{aligned}
\]</div>{% endraw %}
<p>Since {% raw %}<span class="math inline">\(\eta\)</span>{% endraw %} is arbitrary, {% raw %}<span class="math inline">\(R_n\xrightarrow{P}0\)</span>{% endraw %}. Therefore</p>

{% raw %}<div class="math display">\[
X_nY_n=\sigma X_n+R_n\Rightarrow\sigma Z.
\]</div>{% endraw %}
<p>The characteristic function of the limiting variable is</p>

{% raw %}<div class="math display">\[
\mathbb{E} e^{it\sigma Z}
=\exp\left(-\frac{\sigma^2t^2}{2}\right),
\]</div>{% endraw %}
<p>which identifies the {% raw %}<span class="math inline">\(\mathcal{N}(0,\sigma^2)\)</span>{% endraw %} law for every real {% raw %}<span class="math inline">\(\sigma\)</span>{% endraw %}, including {% raw %}<span class="math inline">\(\sigma=0\)</span>{% endraw %}.</p>

<h3 data-note-section="6" id="scq-orders-exercise-18">6. A limiting distribution implies consistency</h3>
<p><strong>Question (Exercise 18).</strong> If {% raw %}<span class="math inline">\(\sqrt n(T_n-\theta)\)</span>{% endraw %} converges in distribution, show that {% raw %}<span class="math inline">\(T_n\xrightarrow{P}\theta\)</span>{% endraw %}.</p>

<p><strong>Answer.</strong></p>

<p>Let {% raw %}<span class="math inline">\(W_n=\sqrt n(T_n-\theta)\Rightarrow W\)</span>{% endraw %}, where {% raw %}<span class="math inline">\(W\)</span>{% endraw %} is finite almost surely. For {% raw %}<span class="math inline">\(M&gt;0\)</span>{% endraw %}, the set {% raw %}<span class="math inline">\(\{w:|w|\ge M\}\)</span>{% endraw %} is closed, and the portmanteau inequality gives</p>

{% raw %}<div class="math display">\[
\limsup_{n\to\infty}\mathbb P(|W_n|\ge M)
\le\mathbb P(|W|\ge M).
\]</div>{% endraw %}
<p>Fix {% raw %}<span class="math inline">\(\varepsilon&gt;0\)</span>{% endraw %}. Once {% raw %}<span class="math inline">\(\varepsilon\sqrt n\ge M\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
\begin{aligned}
\mathbb P(|T_n-\theta|&gt;\varepsilon)
&amp;=\mathbb P(|W_n|&gt;\varepsilon\sqrt n)\\
&amp;\le\mathbb P(|W_n|\ge M).
\end{aligned}
\]</div>{% endraw %}
<p>Therefore, for every {% raw %}<span class="math inline">\(M&gt;0\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
\limsup_{n\to\infty}\mathbb P(|T_n-\theta|&gt;\varepsilon)
\le\mathbb P(|W|\ge M).
\]</div>{% endraw %}
<p>As {% raw %}<span class="math inline">\(M\to\infty\)</span>{% endraw %}, the right-hand side decreases to zero. Tightness bounds the scaled error outside an event of arbitrarily small probability. Dividing that bound by the diverging scale then proves consistency; here the scale is {% raw %}<span class="math inline">\(\sqrt n\)</span>{% endraw %}. The same proof works for random vectors upon replacing absolute values by Euclidean norms.</p>

<p>Source: A. W. van der Vaart, <a href="https://doi.org/10.1017/CBO9780511802256.003"><em>Asymptotic Statistics</em>, Chapter 2, “Stochastic Convergence”</a>, pp. 5–24. The questions above are stated in the notation used in these solutions.</p>


<nav class="note-series" aria-label="Notes in this series"><p>Next: <a href="{% post_url 2022-01-08-stochastic-convergence-exercises-joint-laws-and-continuity-sets %}">Stochastic Convergence Exercises: Joint Laws and Continuity Sets</a></p></nav>

</div>
