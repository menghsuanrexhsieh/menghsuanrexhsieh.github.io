---
layout: "post"
title: "Convergence and Large-Sample Probability"
date: "2021-11-09"
tags: ["probability theory", "statistics"]
excerpt: "A fundamental result that belies all results in the section is the following, due to Skorokhod."
note_series: "Probability and statistics"
note_source: "assets/notes/Overleaf Projects (32 items)/Statistics and Prob Theory - Notes/stats.tex"
redirect_from: ["/2021/11/09/stochastic-convergence/", "/2022/02/14/large-sample-theory/", "/2022/03/05/convergence-in-distribution/"]
---

<div class="note-content" markdown="0">

<p>Different limit theorems answer different questions. Almost-sure convergence follows individual sample paths; convergence in probability controls the chance of a large error; convergence in distribution compares laws. We first develop the tools for moving between these descriptions, then apply moment bounds and Borel–Cantelli to averages of independent observations.</p>

<div id="stochastic-convergence" data-note-section="title">

</div>
<div id="Def:CvgProb" class="definition" data-note-number="1" data-note-kind="Definition">
<p><strong>Definition 1</strong>.  A sequence of random vectors, denoted {% raw %}<span class="math inline">\(\{X_n\}\)</span>{% endraw %} is said to <strong>converge in probability</strong> to {% raw %}<span class="math inline">\(X\)</span>{% endraw %} if </p>

{% raw %}<div class="math display">\[\mathop{\mathrm{\mathbf{P}}}\left( \abs{X_n - X} \geq \varepsilon \right) \xrightarrow{n \to \infty} 0\]</div>{% endraw %}
<p> This is denoted {% raw %}<span class="math inline">\({X_n} \xrightarrow{P} {X}\)</span>{% endraw %}.</p>

</div>
<div id="Def:CvgDist" class="definition" data-note-number="2" data-note-kind="Definition">
<p><strong>Definition 2</strong>.  A sequence of random vectors, denoted {% raw %}<span class="math inline">\(\{X_n\}\)</span>{% endraw %} is said to <strong>converge in distribution</strong> to {% raw %}<span class="math inline">\(X\)</span>{% endraw %} if </p>

{% raw %}<div class="math display">\[\mathop{\mathrm{\mathbf{P}}}(X_n \leq x) \xrightarrow{n \to \infty} \mathop{\mathrm{\mathbf{P}}}(X \leq x)\]</div>{% endraw %}
<p> at all continuity points {% raw %}<span class="math inline">\(x\)</span>{% endraw %} of the map {% raw %}<span class="math inline">\(x \mapsto \mathop{\mathrm{\mathbf{P}}}(X \leq x)\)</span>{% endraw %}. This is denoted {% raw %}<span class="math inline">\({X_n} \xrightarrow{d} {X}\)</span>{% endraw %}.</p>

</div>
<div id="Def:CvgAS" class="definition" data-note-number="3" data-note-kind="Definition">
<p><strong>Definition 3</strong>.  A sequence of random vectors, denoted {% raw %}<span class="math inline">\(\{X_n\}\)</span>{% endraw %} is said to <strong>converge almost surely</strong> to {% raw %}<span class="math inline">\(X\)</span>{% endraw %} if </p>

{% raw %}<div class="math display">\[\mathop{\mathrm{\mathbf{P}}}\left( \lim\limits_{n \to \infty} \abs{X_n - X} = 0 \right) = 1\]</div>{% endraw %}
<p> This is denoted {% raw %}<span class="math inline">\({X_n} \xrightarrow{\rm a.s.} {X}\)</span>{% endraw %}.</p>

</div>
<div id="Thm:Portmanteau" class="theorem" data-note-number="4" data-note-kind="Theorem">
<p><strong>Theorem 4</strong> (Portmanteau).  The following are equivalent for random vectors {% raw %}<span class="math inline">\(X_n\)</span>{% endraw %} and random vector {% raw %}<span class="math inline">\(X\)</span>{% endraw %}:</p>

<ol>
<li><p><span id="Portmanteau-i" data-label="Portmanteau(i)"></span> {% raw %}<span class="math inline">\(\mathop{\mathrm{\mathbf{P}}}(X_n \leq x) \to \mathop{\mathrm{\mathbf{P}}}(X \leq x)\)</span>{% endraw %} at all continuity points of {% raw %}<span class="math inline">\(x \mapsto \mathop{\mathrm{\mathbf{P}}}(X \leq x)\)</span>{% endraw %}</p></li>
<li><p><span id="Portmanteau-ii" data-label="Portmanteau(ii)"></span> {% raw %}<span class="math inline">\(\mathbb{E} f(X_n) \to \mathbb{E} f(X)\)</span>{% endraw %} for all bounded, continuous functions {% raw %}<span class="math inline">\(f\)</span>{% endraw %}</p></li>
<li><p><span id="Portmanteau-iii" data-label="Portmanteau(iii)"></span> {% raw %}<span class="math inline">\(\mathbb{E} f(X_n) \to \mathbb{E} f(X)\)</span>{% endraw %} for all bounded, Lipschitz functions {% raw %}<span class="math inline">\(f\)</span>{% endraw %}</p></li>
<li><p><span id="Portmanteau-iv" data-label="Portmanteau(iv)"></span> {% raw %}<span class="math inline">\(\liminf \mathbb{E} f(X_n) \geq \mathbb{E} f(X)\)</span>{% endraw %} for all nonnegative, continuous functions {% raw %}<span class="math inline">\(f\)</span>{% endraw %}</p></li>
<li><p><span id="Portmanteau-v" data-label="Portmanteau(v)"></span> {% raw %}<span class="math inline">\(\liminf \mathop{\mathrm{\mathbf{P}}}(X_n \in G) \geq \mathop{\mathrm{\mathbf{P}}}(X \in G)\)</span>{% endraw %} for all open sets {% raw %}<span class="math inline">\(G\)</span>{% endraw %}</p></li>
<li><p><span id="Portmanteau-vi" data-label="Portmanteau(vi)"></span> {% raw %}<span class="math inline">\(\limsup \mathop{\mathrm{\mathbf{P}}}(X_n \in H) \leq \mathop{\mathrm{\mathbf{P}}}(X \in H)\)</span>{% endraw %} for all closed sets {% raw %}<span class="math inline">\(H\)</span>{% endraw %}</p></li>
<li><p><span id="Portmanteau-vii" data-label="Portmanteau(vii)"></span> {% raw %}<span class="math inline">\(\mathop{\mathrm{\mathbf{P}}}(X_n \in B) \to \mathop{\mathrm{\mathbf{P}}}(X \in B)\)</span>{% endraw %} for all Borel sets {% raw %}<span class="math inline">\(B\)</span>{% endraw %} with {% raw %}<span class="math inline">\(\mathop{\mathrm{\mathbf{P}}}(X \in \partial B) = 0\)</span>{% endraw %}.</p></li>
</ol>
</div>
<div class="proof" id="portmanteau-proof">
<p><em>Proof.</em> Number the assertions (i)–(vii) in their displayed order. Write {% raw %}<span class="math inline">\(F_n(x)=\mathbb P(X_n\leq x)\)</span>{% endraw %} and {% raw %}<span class="math inline">\(F(x)=\mathbb P(X\leq x)\)</span>{% endraw %}, with inequalities between vectors understood coordinatewise.</p>

<p><strong>(i) ⇒ (ii).</strong> Let {% raw %}<span class="math inline">\(f\)</span>{% endraw %} be bounded and continuous. By rescaling, it suffices to consider {% raw %}<span class="math inline">\(|f|\leq1\)</span>{% endraw %}. Fix {% raw %}<span class="math inline">\(\varepsilon&gt;0\)</span>{% endraw %} and choose a large half-open rectangle {% raw %}<span class="math inline">\(I=\prod_{r=1}^d(a_r,b_r]\)</span>{% endraw %} with {% raw %}<span class="math inline">\(\mathbb P(X\notin I)&lt;\varepsilon\)</span>{% endraw %}. Choose every endpoint outside the atoms of the corresponding marginal of {% raw %}<span class="math inline">\(X\)</span>{% endraw %}. This is possible because each marginal has at most countably many atoms.</p>

<p>At every vertex of such a rectangle, {% raw %}<span class="math inline">\(F\)</span>{% endraw %} is continuous: a small change in the coordinates can change the lower-orthant event only when a coordinate of {% raw %}<span class="math inline">\(X\)</span>{% endraw %} lies in a small interval around the corresponding vertex coordinate. Those probabilities tend to zero because the coordinates are not atoms. For any rectangle {% raw %}<span class="math inline">\(J=\prod_{r=1}^d(u_r,v_r]\)</span>{% endraw %} with the same endpoint property, inclusion–exclusion gives</p>

{% raw %}<div class="math display">\[\mathbb P(X_n\in J)
=\sum_{e\in\{0,1\}^d}(-1)^{d-\sum_r e_r}F_n(c_e)
\longrightarrow
\sum_{e\in\{0,1\}^d}(-1)^{d-\sum_r e_r}F(c_e)
=\mathbb P(X\in J),\]</div>{% endraw %}

<p>where {% raw %}<span class="math inline">\((c_e)_r=u_r\)</span>{% endraw %} if {% raw %}<span class="math inline">\(e_r=0\)</span>{% endraw %} and {% raw %}<span class="math inline">\((c_e)_r=v_r\)</span>{% endraw %} if {% raw %}<span class="math inline">\(e_r=1\)</span>{% endraw %}. In particular, {% raw %}<span class="math inline">\(\mathbb P(X_n\notin I)&lt;\varepsilon\)</span>{% endraw %} for all sufficiently large {% raw %}<span class="math inline">\(n\)</span>{% endraw %}.</p>

<p>The function {% raw %}<span class="math inline">\(f\)</span>{% endraw %} is uniformly continuous on the compact rectangle {% raw %}<span class="math inline">\(\overline I\)</span>{% endraw %}. Partition {% raw %}<span class="math inline">\(I\)</span>{% endraw %} into finitely many disjoint half-open rectangles {% raw %}<span class="math inline">\(I_1,\ldots,I_m\)</span>{% endraw %}, using cut points that also avoid marginal atoms, so that the oscillation of {% raw %}<span class="math inline">\(f\)</span>{% endraw %} on each cell is at most {% raw %}<span class="math inline">\(\varepsilon\)</span>{% endraw %}. Pick {% raw %}<span class="math inline">\(x_j\in I_j\)</span>{% endraw %} and set</p>

{% raw %}<div class="math display">\[f_\varepsilon(x)=\sum_{j=1}^m f(x_j)\mathbf1_{I_j}(x).\]</div>{% endraw %}

<p>Then {% raw %}<span class="math inline">\(|f-f_\varepsilon|\leq\varepsilon\)</span>{% endraw %} on {% raw %}<span class="math inline">\(I\)</span>{% endraw %}, while {% raw %}<span class="math inline">\(f_\varepsilon=0\)</span>{% endraw %} outside {% raw %}<span class="math inline">\(I\)</span>{% endraw %}. Consequently, for all sufficiently large {% raw %}<span class="math inline">\(n\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[\begin{aligned}
\left|\mathbb E f(X_n)-\mathbb E f_\varepsilon(X_n)\right|
&amp;\leq\varepsilon+\mathbb P(X_n\notin I)&lt;2\varepsilon,\\
\left|\mathbb E f(X)-\mathbb E f_\varepsilon(X)\right|
&amp;\leq\varepsilon+\mathbb P(X\notin I)&lt;2\varepsilon.
\end{aligned}\]</div>{% endraw %}

<p>For the step function itself, there are only finitely many cell probabilities to compare:</p>

{% raw %}<div class="math display">\[\left|\mathbb E f_\varepsilon(X_n)-\mathbb E f_\varepsilon(X)\right|
\leq\sum_{j=1}^m|f(x_j)|\left|\mathbb P(X_n\in I_j)-\mathbb P(X\in I_j)\right|
\longrightarrow0.\]</div>{% endraw %}

<p>Taking {% raw %}<span class="math inline">\(n\)</span>{% endraw %} large enough to make this last difference smaller than {% raw %}<span class="math inline">\(\varepsilon\)</span>{% endraw %}, the triangle inequality yields</p>

{% raw %}<div class="math display">\[\begin{aligned}
\left|\mathbb E f(X_n)-\mathbb E f(X)\right|
&amp;\leq\left|\mathbb E f(X_n)-\mathbb E f_\varepsilon(X_n)\right|\\
&amp;\quad+\left|\mathbb E f_\varepsilon(X_n)-\mathbb E f_\varepsilon(X)\right|\\
&amp;\quad+\left|\mathbb E f_\varepsilon(X)-\mathbb E f(X)\right|\\
&amp;&lt;2\varepsilon+\varepsilon+2\varepsilon=5\varepsilon.
\end{aligned}\]</div>{% endraw %}

<p>Since {% raw %}<span class="math inline">\(\varepsilon\)</span>{% endraw %} is arbitrary, (ii) follows. Choosing endpoints outside marginal atoms makes this argument valid even when {% raw %}<span class="math inline">\(F\)</span>{% endraw %} has discontinuities elsewhere.</p>

<p><strong>(ii) ⇒ (iii).</strong> Every bounded Lipschitz function is bounded and continuous.</p>

<p><strong>(iii) ⇒ (v).</strong> Let {% raw %}<span class="math inline">\(G\)</span>{% endraw %} be open; the cases {% raw %}<span class="math inline">\(G=\varnothing\)</span>{% endraw %} and {% raw %}<span class="math inline">\(G=\mathbb R^d\)</span>{% endraw %} are immediate. Define</p>

{% raw %}<div class="math display">\[f_m(x)=\min(1,m\,d(x,G^c)),\qquad
d(x,G^c)=\inf_{y\in G^c}\|x-y\|.\]</div>{% endraw %}

<p>Distance to a nonempty set is {% raw %}<span class="math inline">\(1\)</span>{% endraw %}-Lipschitz, so {% raw %}<span class="math inline">\(f_m\)</span>{% endraw %} is bounded and Lipschitz. Moreover, {% raw %}<span class="math inline">\(0\leq f_m\leq\mathbf1_G\)</span>{% endraw %} and {% raw %}<span class="math inline">\(f_m\uparrow\mathbf1_G\)</span>{% endraw %}: every point of the open set has positive distance from its complement. For each fixed {% raw %}<span class="math inline">\(m\)</span>{% endraw %}, (iii) gives</p>

{% raw %}<div class="math display">\[\mathbb E f_m(X)=\lim_{n\to\infty}\mathbb E f_m(X_n)
\leq\liminf_{n\to\infty}\mathbb P(X_n\in G).\]</div>{% endraw %}

<p>Letting {% raw %}<span class="math inline">\(m\to\infty\)</span>{% endraw %} and applying monotone convergence proves (v).</p>

<p><strong>(v) ⇔ (vi).</strong> If {% raw %}<span class="math inline">\(H\)</span>{% endraw %} is closed, then {% raw %}<span class="math inline">\(H^c\)</span>{% endraw %} is open. Taking complements gives</p>

{% raw %}<div class="math display">\[\begin{aligned}
\limsup_{n\to\infty}\mathbb P(X_n\in H)
&amp;=1-\liminf_{n\to\infty}\mathbb P(X_n\in H^c)\\
&amp;\leq1-\mathbb P(X\in H^c)=\mathbb P(X\in H).
\end{aligned}\]</div>{% endraw %}

<p>The same calculation starting with an open set and its closed complement proves the converse.</p>

<p><strong>(v), (vi) ⇒ (vii).</strong> For a Borel set {% raw %}<span class="math inline">\(B\)</span>{% endraw %}, use {% raw %}<span class="math inline">\(B^\circ\subseteq B\subseteq\overline B\)</span>{% endraw %} to obtain</p>

{% raw %}<div class="math display">\[\begin{aligned}
\mathbb P(X\in B^\circ)
&amp;\leq\liminf_{n\to\infty}\mathbb P(X_n\in B)\\
&amp;\leq\limsup_{n\to\infty}\mathbb P(X_n\in B)
\leq\mathbb P(X\in\overline B).
\end{aligned}\]</div>{% endraw %}

<p>If {% raw %}<span class="math inline">\(\mathbb P(X\in\partial B)=0\)</span>{% endraw %}, the two outside probabilities both equal {% raw %}<span class="math inline">\(\mathbb P(X\in B)\)</span>{% endraw %}, since {% raw %}<span class="math inline">\(\partial B=\overline B\setminus B^\circ\)</span>{% endraw %}. The desired convergence follows by squeezing.</p>

<p><strong>(vii) ⇒ (i).</strong> Fix a continuity point {% raw %}<span class="math inline">\(x\)</span>{% endraw %} of {% raw %}<span class="math inline">\(F\)</span>{% endraw %}. Choose vectors {% raw %}<span class="math inline">\(a^{(m)}\uparrow x\)</span>{% endraw %} and {% raw %}<span class="math inline">\(b^{(m)}\downarrow x\)</span>{% endraw %}, strictly below and above {% raw %}<span class="math inline">\(x\)</span>{% endraw %} in every coordinate, with all coordinates avoiding marginal atoms. The lower orthants with these corners are continuity sets: their boundaries are contained in the union of the coordinate hyperplanes through their corners, each of which has probability zero. Thus (vii) and monotonicity give, for each fixed {% raw %}<span class="math inline">\(m\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[\begin{aligned}
F(a^{(m)})
&amp;=\lim_{n\to\infty}F_n(a^{(m)})
\leq\liminf_{n\to\infty}F_n(x)\\
&amp;\leq\limsup_{n\to\infty}F_n(x)
\leq\lim_{n\to\infty}F_n(b^{(m)})=F(b^{(m)}).
\end{aligned}\]</div>{% endraw %}

<p>Let {% raw %}<span class="math inline">\(m\to\infty\)</span>{% endraw %}. Continuity of {% raw %}<span class="math inline">\(F\)</span>{% endraw %} at {% raw %}<span class="math inline">\(x\)</span>{% endraw %} makes both outside terms tend to {% raw %}<span class="math inline">\(F(x)\)</span>{% endraw %}, proving (i).</p>

<p><strong>(ii) ⇒ (iv).</strong> Let {% raw %}<span class="math inline">\(f\)</span>{% endraw %} be nonnegative and continuous, and fix {% raw %}<span class="math inline">\(M&gt;0\)</span>{% endraw %}. The truncation {% raw %}<span class="math inline">\(h_M=\min(f,M)\)</span>{% endraw %} is bounded and continuous, and {% raw %}<span class="math inline">\(h_M\leq f\)</span>{% endraw %}. Hence</p>

{% raw %}<div class="math display">\[\liminf_{n\to\infty}\mathbb E f(X_n)
\geq\lim_{n\to\infty}\mathbb E h_M(X_n)
=\mathbb E h_M(X).\]</div>{% endraw %}

<p>Now let {% raw %}<span class="math inline">\(M\to\infty\)</span>{% endraw %}. Since {% raw %}<span class="math inline">\(h_M(X)\uparrow f(X)\)</span>{% endraw %}, monotone convergence gives {% raw %}<span class="math inline">\(\mathbb E h_M(X)\uparrow\mathbb E f(X)\)</span>{% endraw %}, including when this expectation is infinite. This proves (iv); the limit in {% raw %}<span class="math inline">\(n\)</span>{% endraw %} is taken before the truncation level increases.</p>

<p><strong>(iv) ⇒ (ii).</strong> For bounded continuous {% raw %}<span class="math inline">\(f\)</span>{% endraw %}, choose {% raw %}<span class="math inline">\(M\geq\|f\|_\infty\)</span>{% endraw %}. Both {% raw %}<span class="math inline">\(M+f\)</span>{% endraw %} and {% raw %}<span class="math inline">\(M-f\)</span>{% endraw %} are nonnegative and continuous. Applying (iv) separately to them gives</p>

{% raw %}<div class="math display">\[\begin{aligned}
M+\liminf_{n\to\infty}\mathbb E f(X_n)
&amp;\geq M+\mathbb E f(X),\\
M-\limsup_{n\to\infty}\mathbb E f(X_n)
&amp;\geq M-\mathbb E f(X).
\end{aligned}\]</div>{% endraw %}

<p>After subtracting {% raw %}<span class="math inline">\(M\)</span>{% endraw %} and rearranging,</p>

{% raw %}<div class="math display">\[\mathbb E f(X)\leq\liminf_{n\to\infty}\mathbb E f(X_n)
\leq\limsup_{n\to\infty}\mathbb E f(X_n)
\leq\mathbb E f(X).\]</div>{% endraw %}

<p>Thus the expectations converge. Together, these implications prove all seven assertions equivalent. ◻</p>
</div>
<div id="Thm:CMT" class="theorem" data-note-number="5" data-note-kind="Theorem">
<p><strong>Theorem 5</strong> (Continuous mapping). Let {% raw %}<span class="math inline">\(g:\mathbb R^k\to\mathbb R^\ell\)</span>{% endraw %} be Borel measurable and continuous at every point of a Borel set {% raw %}<span class="math inline">\(C\)</span>{% endraw %} with {% raw %}<span class="math inline">\(P(X\in C)=1\)</span>{% endraw %}. Then:</p>

<ol>
<li><p><span id="CMT:i" data-label="CMT:i"></span> {% raw %}<span class="math inline">\({X_n} \xrightarrow{\rm a.s.} {X} \implies {g(X_n)} \xrightarrow{\rm a.s.} {g(X)}\)</span>{% endraw %}.</p></li>
<li><p><span id="CMT:ii" data-label="CMT:ii"></span> {% raw %}<span class="math inline">\({X_n} \xrightarrow{d} {X} \implies {g(X_n)} \xrightarrow{d} {g(X)}\)</span>{% endraw %}.</p></li>
<li><p><span id="CMT:iii" data-label="CMT:iii"></span> {% raw %}<span class="math inline">\({X_n} \xrightarrow{P} {X} \implies {g(X_n)} \xrightarrow{P} {g(X)}\)</span>{% endraw %}.</p></li>
</ol>
</div>
<div class="proof" id="continuous-mapping-proof">
<p><em>Proof.</em> Borel measurability of {% raw %}<span class="math inline">\(g\)</span>{% endraw %} ensures that {% raw %}<span class="math inline">\(g(X_n)\)</span>{% endraw %} and {% raw %}<span class="math inline">\(g(X)\)</span>{% endraw %} are random vectors. In the almost sure and in-probability assertions, the variables are defined on a common probability space.</p>

<p><strong>(i) Almost sure convergence.</strong> Let {% raw %}<span class="math inline">\(A=\{\omega:X_n(\omega)\to X(\omega)\}\cap\{\omega:X(\omega)\in C\}\)</span>{% endraw %}. Both events have probability one, so {% raw %}<span class="math inline">\(\mathbb P(A)=1\)</span>{% endraw %}. Fix {% raw %}<span class="math inline">\(\omega\in A\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\varepsilon&gt;0\)</span>{% endraw %}. Continuity of {% raw %}<span class="math inline">\(g\)</span>{% endraw %} at {% raw %}<span class="math inline">\(X(\omega)\)</span>{% endraw %} provides a {% raw %}<span class="math inline">\(\delta&gt;0\)</span>{% endraw %} such that</p>

{% raw %}<div class="math display">\[\|y-X(\omega)\|&lt;\delta
\quad\Longrightarrow\quad
\|g(y)-g(X(\omega))\|&lt;\varepsilon.\]</div>{% endraw %}

<p>Since {% raw %}<span class="math inline">\(X_n(\omega)\to X(\omega)\)</span>{% endraw %}, the left inequality holds with {% raw %}<span class="math inline">\(y=X_n(\omega)\)</span>{% endraw %} for every sufficiently large {% raw %}<span class="math inline">\(n\)</span>{% endraw %}. Thus {% raw %}<span class="math inline">\(g(X_n(\omega))\to g(X(\omega))\)</span>{% endraw %} on {% raw %}<span class="math inline">\(A\)</span>{% endraw %}, proving almost sure convergence. The choices of {% raw %}<span class="math inline">\(\delta\)</span>{% endraw %} and the starting index may depend on {% raw %}<span class="math inline">\(\omega\)</span>{% endraw %}; uniform continuity is not required.</p>

<p><strong>(ii) Convergence in distribution.</strong> Let {% raw %}<span class="math inline">\(H\subseteq\mathbb R^\ell\)</span>{% endraw %} be closed and put {% raw %}<span class="math inline">\(B=g^{-1}(H)\)</span>{% endraw %}. The set {% raw %}<span class="math inline">\(B\)</span>{% endraw %} is Borel, but it need not be closed because {% raw %}<span class="math inline">\(g\)</span>{% endraw %} need not be continuous everywhere. We claim that</p>

{% raw %}<div class="math display">\[\overline B\subseteq B\cup C^c.\]</div>{% endraw %}

<p>Indeed, take {% raw %}<span class="math inline">\(x\in\overline B\cap C\)</span>{% endraw %}. There is a sequence {% raw %}<span class="math inline">\(x_j\in B\)</span>{% endraw %} with {% raw %}<span class="math inline">\(x_j\to x\)</span>{% endraw %}. Continuity of {% raw %}<span class="math inline">\(g\)</span>{% endraw %} at {% raw %}<span class="math inline">\(x\)</span>{% endraw %} gives {% raw %}<span class="math inline">\(g(x_j)\to g(x)\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(g(x_j)\in H\)</span>{% endraw %} for every {% raw %}<span class="math inline">\(j\)</span>{% endraw %}. Since {% raw %}<span class="math inline">\(H\)</span>{% endraw %} is closed, {% raw %}<span class="math inline">\(g(x)\in H\)</span>{% endraw %}, so {% raw %}<span class="math inline">\(x\in B\)</span>{% endraw %}. This proves the inclusion. Consequently, using {% raw %}<span class="math inline">\(\mathbb P(X\in C^c)=0\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[\mathbb P(X\in\overline B)
\leq\mathbb P(X\in B)+\mathbb P(X\in C^c)
=\mathbb P(g(X)\in H).\]</div>{% endraw %}

<p>Now apply the closed-set form of Portmanteau to the closed set {% raw %}<span class="math inline">\(\overline B\subseteq\mathbb R^k\)</span>{% endraw %}:</p>

{% raw %}<div class="math display">\[\begin{aligned}
\limsup_{n\to\infty}\mathbb P(g(X_n)\in H)
&amp;=\limsup_{n\to\infty}\mathbb P(X_n\in B)\\
&amp;\leq\limsup_{n\to\infty}\mathbb P(X_n\in\overline B)\\
&amp;\leq\mathbb P(X\in\overline B)\\
&amp;\leq\mathbb P(g(X)\in H).
\end{aligned}\]</div>{% endraw %}

<p>This holds for every closed {% raw %}<span class="math inline">\(H\)</span>{% endraw %}. The converse direction of Portmanteau, now in {% raw %}<span class="math inline">\(\mathbb R^\ell\)</span>{% endraw %}, therefore gives {% raw %}<span class="math inline">\(g(X_n)\Rightarrow g(X)\)</span>{% endraw %}.</p>

<p><strong>(iii) Convergence in probability.</strong> We first extract an almost surely convergent further subsequence from any subsequence. Let {% raw %}<span class="math inline">\((X_{n_j})\)</span>{% endraw %} be arbitrary. Since {% raw %}<span class="math inline">\(X_{n_j}\xrightarrow{P} X\)</span>{% endraw %} in probability, we can choose increasing indices {% raw %}<span class="math inline">\(j_m\)</span>{% endraw %} such that</p>

{% raw %}<div class="math display">\[\mathbb P\left(\|X_{n_{j_m}}-X\|&gt;2^{-m}\right)&lt;2^{-m}
\qquad(m\geq1).\]</div>{% endraw %}

<p>The sum of these probabilities is finite. By the first Borel–Cantelli lemma, with probability one only finitely many of the events occur. Hence {% raw %}<span class="math inline">\(\|X_{n_{j_m}}-X\|\leq2^{-m}\)</span>{% endraw %} eventually, and</p>

{% raw %}<div class="math display">\[X_{n_{j_m}}\longrightarrow X\quad\text{almost surely}.
\qquad\text{By (i),}\qquad
g(X_{n_{j_m}})\longrightarrow g(X)\quad\text{almost surely}.\]</div>{% endraw %}

<p>For every fixed {% raw %}<span class="math inline">\(\varepsilon&gt;0\)</span>{% endraw %}, the indicators of {% raw %}<span class="math inline">\(\{\|g(X_{n_{j_m}})-g(X)\|&gt;\varepsilon\}\)</span>{% endraw %} then tend to zero almost surely and are bounded by one. Dominated convergence gives</p>

{% raw %}<div class="math display">\[\mathbb P\left(\|g(X_{n_{j_m}})-g(X)\|&gt;\varepsilon\right)\longrightarrow0.\]</div>{% endraw %}

<p>To conclude for the entire sequence, suppose instead that {% raw %}<span class="math inline">\(g(X_n)\)</span>{% endraw %} failed to converge to {% raw %}<span class="math inline">\(g(X)\)</span>{% endraw %} in probability. Then there would be {% raw %}<span class="math inline">\(\varepsilon,\eta&gt;0\)</span>{% endraw %} and a subsequence {% raw %}<span class="math inline">\((n_j)\)</span>{% endraw %} such that</p>

{% raw %}<div class="math display">\[\mathbb P\left(\|g(X_{n_j})-g(X)\|&gt;\varepsilon\right)\geq\eta
\qquad\text{for every }j.\]</div>{% endraw %}

<p>The construction above supplies a further subsequence along which these same probabilities tend to zero, a contradiction. Therefore {% raw %}<span class="math inline">\(g(X_n)\xrightarrow{P} g(X)\)</span>{% endraw %} in probability. ◻</p>
</div>

<div id="Lem:Helley" class="lemma" data-note-number="6" data-note-kind="Lemma">
<p><strong>Lemma 6</strong>. (Helly selection). Every sequence of probability measures {% raw %}<span class="math inline">\(\mu_n\)</span>{% endraw %} on {% raw %}<span class="math inline">\(\mathbb R^d\)</span>{% endraw %} has a subsequence and a finite measure {% raw %}<span class="math inline">\(\mu\)</span>{% endraw %} of total mass at most one such that {% raw %}<span class="math inline">\(\int f\,d\mu_{n_j}\to\int f\,d\mu\)</span>{% endraw %} for every continuous compactly supported {% raw %}<span class="math inline">\(f\)</span>{% endraw %}.</p>

</div>
<p><em>Remark.</em> The convergence in <a href="#Lem:Helley">Lemma 6</a> is vague convergence. The lemma does not assert convergence in distribution to a probability law.</p>
<div class="proof">
<p><em>Proof.</em></p>

<p>Map each coordinate by {% raw %}<span class="math inline">\(x\mapsto\frac12+\pi^{-1}\arctan x\)</span>{% endraw %} into {% raw %}<span class="math inline">\((0,1)\)</span>{% endraw %} and regard the image laws as measures on the compact cube {% raw %}<span class="math inline">\([0,1]^d\)</span>{% endraw %}. On a compact cube, take nested finite dyadic partitions. A diagonal subsequence makes the mass of every cell converge. The limiting masses are nonnegative, sum to one at each level, and add consistently from children to parents. They define a probability on nested cell choices: divide the unit interval into intervals of these masses, and subdivide each interval according to its children. A uniform point selects a nested sequence, outside a countable set of endpoints.</p>

<p>The closures of the selected cells are nested compact sets whose diameters tend to zero, so they determine a unique point {% raw %}<span class="math inline">\(Z\)</span>{% endraw %}. Choose a representative {% raw %}<span class="math inline">\(z_A\)</span>{% endraw %} in every cell {% raw %}<span class="math inline">\(A\)</span>{% endraw %} of the level-{% raw %}<span class="math inline">\(m\)</span>{% endraw %} partition {% raw %}<span class="math inline">\(\mathcal P_m\)</span>{% endraw %}. The representative selected by the uniform point is a measurable, finite-valued random vector {% raw %}<span class="math inline">\(Z_m\)</span>{% endraw %}; since {% raw %}<span class="math inline">\(Z_m\to Z\)</span>{% endraw %}, the limit {% raw %}<span class="math inline">\(Z\)</span>{% endraw %} is measurable. Write {% raw %}<span class="math inline">\(p_A\)</span>{% endraw %} for the limiting mass of cell {% raw %}<span class="math inline">\(A\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(\nu_n\)</span>{% endraw %} for the image laws on the cube. For continuous {% raw %}<span class="math inline">\(f\)</span>{% endraw %} on the cube, uniform continuity supplies a modulus {% raw %}<span class="math inline">\(\omega_f(\delta)\to0\)</span>{% endraw %}. If {% raw %}<span class="math inline">\(\delta_m\)</span>{% endraw %} is the largest cell diameter, then</p>
{% raw %}<div class="math display">\[\left|\int f\,d\nu_{n_j}-\sum_{A\in\mathcal P_m}f(z_A)\nu_{n_j}(A)\right|\leq\omega_f(\delta_m),\qquad
\left|\mathbb E f(Z)-\sum_{A\in\mathcal P_m}f(z_A)p_A\right|\leq\omega_f(\delta_m).\]</div>{% endraw %}
<p>For fixed {% raw %}<span class="math inline">\(m\)</span>{% endraw %}, the finite sums converge by construction. Hence the limit superior of {% raw %}<span class="math inline">\(|\int f\,d\nu_{n_j}-\mathbb E f(Z)|\)</span>{% endraw %} is at most {% raw %}<span class="math inline">\(2\omega_f(\delta_m)\)</span>{% endraw %}; now let {% raw %}<span class="math inline">\(m\to\infty\)</span>{% endraw %}. This proves compact-cube weak selection, even if the limiting point lies on a cell boundary.</p>
<p>Restrict the law of {% raw %}<span class="math inline">\(Z\)</span>{% endraw %} to the open cube and pull it back through the inverse coordinate map. The resulting measure {% raw %}<span class="math inline">\(\mu\)</span>{% endraw %} has mass at most one. If {% raw %}<span class="math inline">\(f\in C_c(\mathbb R^d)\)</span>{% endraw %}, its transformed function is zero near the boundary of the cube, so extension by zero is continuous on the whole compact cube. Applying the convergence just proved gives {% raw %}<span class="math inline">\(\int f\,d\mu_{n_j}\to\int f\,d\mu\)</span>{% endraw %}. Boundary mass is the mass lost at infinity.</p>
<p>◻</p>

</div>
<div id="Thm:Prokhorov" class="theorem" data-note-number="7" data-note-kind="Theorem">
<p><strong>Theorem 7</strong> (Prokhorov).  </p>

<ol>
<li><p><span id="Prokhorov:i" data-label="Prokhorov:i"></span> {% raw %}<span class="math inline">\({X_n} \xrightarrow{d} {X} \implies (X_n)\)</span>{% endraw %} is uniformly tight.</p></li>
<li><p><span id="Prokhorov:ii" data-label="Prokhorov:ii"></span> {% raw %}<span class="math inline">\(\{X_n\}\)</span>{% endraw %} is uniformly tight implies there exists {% raw %}<span class="math inline">\(X\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\{n_j\}\)</span>{% endraw %} such that {% raw %}<span class="math inline">\({(X_{n_j})} \xrightarrow{d} {X}\)</span>{% endraw %}.</p></li>
</ol>
</div>
<div class="proof">
<p><em>Proof.</em> Uniform tightness means that for every {% raw %}<span class="math inline">\(\varepsilon&gt;0\)</span>{% endraw %} some compact {% raw %}<span class="math inline">\(K\subset\mathbb R^d\)</span>{% endraw %} satisfies {% raw %}<span class="math inline">\(\sup_n\mathbb P(X_n\notin K)&lt;\varepsilon\)</span>{% endraw %}. In Euclidean space it is enough to use closed balls.</p>
<p>Suppose first that {% raw %}<span class="math inline">\(X_n\Rightarrow X\)</span>{% endraw %}. Fix {% raw %}<span class="math inline">\(\varepsilon&gt;0\)</span>{% endraw %} and choose {% raw %}<span class="math inline">\(R\)</span>{% endraw %} with {% raw %}<span class="math inline">\(\mathbb P(\|X\|\geq R)&lt;\varepsilon\)</span>{% endraw %}. This is possible because {% raw %}<span class="math inline">\(X\)</span>{% endraw %} is finite almost surely. The set {% raw %}<span class="math inline">\(\{x:\|x\|\geq R\}\)</span>{% endraw %} is closed, so</p>
{% raw %}<div class="math display">\[\limsup_n\mathbb P(\|X_n\|\geq R)\leq\mathbb P(\|X\|\geq R)&lt;\varepsilon.\]</div>{% endraw %}
<p>There is consequently {% raw %}<span class="math inline">\(N\)</span>{% endraw %} such that the left-hand tail probability is below {% raw %}<span class="math inline">\(\varepsilon\)</span>{% endraw %} for all {% raw %}<span class="math inline">\(n\geq N\)</span>{% endraw %}. Each of the finitely many variables {% raw %}<span class="math inline">\(X_1,\ldots,X_{N-1}\)</span>{% endraw %} also has tails tending to zero. Increase {% raw %}<span class="math inline">\(R\)</span>{% endraw %} to make their tail probabilities smaller than {% raw %}<span class="math inline">\(\varepsilon\)</span>{% endraw %} as well. The resulting closed ball proves uniform tightness.</p>
<p>Conversely, write {% raw %}<span class="math inline">\(\mu_n\)</span>{% endraw %} for the law of {% raw %}<span class="math inline">\(X_n\)</span>{% endraw %}. Helly selection, proved above without using this theorem, gives a subsequence converging vaguely to a measure {% raw %}<span class="math inline">\(\mu\)</span>{% endraw %} with total mass at most one. Fix {% raw %}<span class="math inline">\(\varepsilon&gt;0\)</span>{% endraw %}, choose a compact {% raw %}<span class="math inline">\(K\)</span>{% endraw %} with {% raw %}<span class="math inline">\(\mu_n(K)&gt;1-\varepsilon\)</span>{% endraw %} for every {% raw %}<span class="math inline">\(n\)</span>{% endraw %}, and take {% raw %}<span class="math inline">\(h\in C_c(\mathbb R^d)\)</span>{% endraw %} with {% raw %}<span class="math inline">\(0\leq h\leq1\)</span>{% endraw %} and {% raw %}<span class="math inline">\(h=1\)</span>{% endraw %} on {% raw %}<span class="math inline">\(K\)</span>{% endraw %}. For example, a sufficiently large ball contains {% raw %}<span class="math inline">\(K\)</span>{% endraw %}, and a continuous radial cutoff is one on that ball and zero outside a larger ball. Vague convergence gives</p>
{% raw %}<div class="math display">\[\int h\,d\mu=\lim_j\int h\,d\mu_{n_j}\geq1-\varepsilon.\]</div>{% endraw %}
<p>Thus {% raw %}<span class="math inline">\(1\geq\mu(\mathbb R^d)\geq1-\varepsilon\)</span>{% endraw %} for every {% raw %}<span class="math inline">\(\varepsilon&gt;0\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(\mu\)</span>{% endraw %} is a probability measure. For the same cutoff, both {% raw %}<span class="math inline">\(\int(1-h)\,d\mu_{n_j}\leq\varepsilon\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\int(1-h)\,d\mu\leq\varepsilon\)</span>{% endraw %}. If {% raw %}<span class="math inline">\(f\)</span>{% endraw %} is bounded and continuous, then {% raw %}<span class="math inline">\(fh\)</span>{% endraw %} is continuous with compact support and</p>
{% raw %}<div class="math display">\[\left|\int f\,d\mu_{n_j}-\int f\,d\mu\right|
\leq\left|\int fh\,d\mu_{n_j}-\int fh\,d\mu\right|+2\varepsilon\|f\|_\infty.\]</div>{% endraw %}
<p>Let {% raw %}<span class="math inline">\(j\to\infty\)</span>{% endraw %}, then {% raw %}<span class="math inline">\(\varepsilon\downarrow0\)</span>{% endraw %}. Portmanteau proves weak convergence to {% raw %}<span class="math inline">\(\mu\)</span>{% endraw %}. A random vector {% raw %}<span class="math inline">\(X\)</span>{% endraw %} with law {% raw %}<span class="math inline">\(\mu\)</span>{% endraw %} may be realized as the identity map on {% raw %}<span class="math inline">\((\mathbb R^d,\mathcal B(\mathbb R^d),\mu)\)</span>{% endraw %}. ◻</p>
</div>
<h2 data-note-section="1" id="large-sample-theory">1. Large Sample Theory</h2>
<h3 data-note-section="1.1" id="law-of-large-numbers">1.1. Law of Large Numbers</h3>
<div id="thm:slln" class="theorem" data-note-number="8" data-note-kind="Theorem">
<p><strong>Theorem 8</strong> (Strong LLN).  Let {% raw %}<span class="math inline">\(X_1,X_2,\dots\)</span>{% endraw %} be i.i.d. random variables on some probability space {% raw %}<span class="math inline">\((\Omega,\mathscr F,\mathop{\mathrm{\mathbf{P}}})\)</span>{% endraw %}. Let {% raw %}<span class="math inline">\(S_n \triangleq X_1 + \dots + X_n\)</span>{% endraw %}. If {% raw %}<span class="math inline">\(\mathbb{E} X_1 = \mu\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\mathbb{E}|X_1|^4 &lt; \infty\)</span>{% endraw %}, then </p>

{% raw %}<div class="math display">\[\frac{S_n}{n} \xrightarrow{\rm a.s.} \mu ~,\]</div>{% endraw %}
<p> or, equivalently, {% raw %}<span class="math inline">\(\mathop{\mathrm{\mathbf{P}}}(\lim\limits_{n \to \infty} \frac{S_n}{n} = \mu) = 1\)</span>{% endraw %}.</p>

</div>
<div class="proof">
<p><em>Proof.</em></p>

<p>Subtract the mean and write {% raw %}<span class="math inline">\(Y_i=X_i-\mu\)</span>{% endraw %}. Independence and centering eliminate all terms in the fourth-power expansion except those in which each index appears at least twice:</p>

{% raw %}<div class="math display">\[\mathbb{E}\left(\sum_{i=1}^nY_i\right)^4=n\mathbb{E}Y_1^4+3n(n-1)(\mathbb{E}Y_1^2)^2\leq Cn^2.\]</div>{% endraw %}<p>Thus for each {% raw %}<span class="math inline">\(\varepsilon&gt;0\)</span>{% endraw %}, {% raw %}<span class="math inline">\(\sum_nP(|S_n/n-\mu|&gt;\varepsilon)\leq C\varepsilon^{-4}\sum_nn^{-2}&lt;\infty\)</span>{% endraw %}. Borel–Cantelli, applied to {% raw %}<span class="math inline">\(\varepsilon=1,1/2,1/3,\ldots\)</span>{% endraw %}, proves almost sure convergence.</p>

<p>There are {% raw %}<span class="math inline">\(n\)</span>{% endraw %} terms with all four indices equal. The surviving terms with two distinct indices each repeated twice number {% raw %}<span class="math inline">\(6\binom n2=3n(n-1)\)</span>{% endraw %}; independence makes their expectations {% raw %}<span class="math inline">\((\mathbb EY_1^2)^2\)</span>{% endraw %}. Every other term has an index occurring exactly once and hence vanishes by centering. This accounts for every term in the fourth-power expansion. The countable intersection of the Borel–Cantelli probability-one events ensures convergence for every positive tolerance on the same set of paths.</p>
<p>◻</p>

</div>
<div id="thm:wlln" class="theorem" data-note-number="9" data-note-kind="Theorem">
<p><strong>Theorem 9</strong> (Weak LLN).  Let {% raw %}<span class="math inline">\(X_1,X_2,\dots\)</span>{% endraw %} be i.i.d. random variables on some probability space {% raw %}<span class="math inline">\((\Omega,\mathscr F,\mathop{\mathrm{\mathbf{P}}})\)</span>{% endraw %}. Let {% raw %}<span class="math inline">\(S_n \triangleq X_1 + \dots + X_n\)</span>{% endraw %}. If {% raw %}<span class="math inline">\(\mathbb{E} X_1 = \mu\)</span>{% endraw %}, then </p>

{% raw %}<div class="math display">\[\frac{S_n}{n} \xrightarrow{P} \mu ~.\]</div>{% endraw %}
</div>
<div class="proof">
<p><em>Proof.</em></p>

<p>Only {% raw %}<span class="math inline">\(\mathbb{E}|X_1|&lt;\infty\)</span>{% endraw %} is needed. Put {% raw %}<span class="math inline">\(X_i^{(K)}=X_i1_{\{|X_i|\leq K\}}\)</span>{% endraw %}. For fixed {% raw %}<span class="math inline">\(K\)</span>{% endraw %}, the truncated variables are i.i.d. and bounded, so Chebyshev gives {% raw %}<span class="math inline">\(n^{-1}\sum_iX_i^{(K)}-\mathbb{E}X_1^{(K)}\xrightarrow{P}0\)</span>{% endraw %} in probability. Moreover,</p>

{% raw %}<div class="math display">\[\mathbb{E}\left|\frac1n\sum_{i=1}^n(X_i-X_i^{(K)})\right|\leq \mathbb{E}|X_1|1_{\{|X_1|&gt;K\}},\qquad |\mathbb{E}X_1-\mathbb{E}X_1^{(K)}|\leq \mathbb{E}|X_1|1_{\{|X_1|&gt;K\}}.\]</div>{% endraw %}<p>The common tail bound tends to zero as {% raw %}<span class="math inline">\(K\to\infty\)</span>{% endraw %}. Markov’s inequality and the triangle inequality complete the proof by taking {% raw %}<span class="math inline">\(n\to\infty\)</span>{% endraw %} first and then {% raw %}<span class="math inline">\(K\to\infty\)</span>{% endraw %}.</p>

<p>More explicitly, put {% raw %}<span class="math inline">\(r_K=\mathbb E(|X_1|\mathbf1_{\{|X_1|&gt;K\}})\)</span>{% endraw %}. For {% raw %}<span class="math inline">\(r_K&lt;\varepsilon/3\)</span>{% endraw %}, the triangle inequality followed by Chebyshev and Markov yields</p>
{% raw %}<div class="math display">\[P\left(\left|\frac{S_n}{n}-\mu\right|&gt;\varepsilon\right)
\leq\frac{9\operatorname{Var}(X_1^{(K)})}{n\varepsilon^2}+\frac{3r_K}{\varepsilon}.\]</div>{% endraw %}
<p>The first term vanishes for fixed {% raw %}<span class="math inline">\(K\)</span>{% endraw %}, and dominated convergence gives {% raw %}<span class="math inline">\(r_K\downarrow0\)</span>{% endraw %}. The truncation argument proves the weak law in <a href="#thm:wlln">Theorem 9</a> under the finite first-moment assumption, without assuming the fourth moment required in the preceding strong-law proof.</p>
<p>◻</p>

</div>
<div id="result-10" class="remark" data-note-number="10" data-note-kind="Remark">
<p><strong>Remark 10</strong>.  Note that for a sequence of events {% raw %}<span class="math inline">\(A_1,A_2,\dots\)</span>{% endraw %}, we can put {% raw %}<span class="math inline">\(N_n (\omega) = \mathbb 1_{A_1} (\omega) + \dots + \mathbb 1_{A_n} (\omega)\)</span>{% endraw %} to count the occurrence of {% raw %}<span class="math inline">\(\omega\)</span>{% endraw %} in the events {% raw %}<span class="math inline">\(A_1,\dots,A_n\)</span>{% endraw %}. This leads us to reformulate {% raw %}<span class="math inline">\(\{A_n \text{ i.o.}\} = \{\omega: \sup_n N_n(\omega) = \infty\}\)</span>{% endraw %}, so we can reduce the problem of characterizing the condition for Borel-Cantelli lemma to that of studying the behaviour of {% raw %}<span class="math inline">\(N_n\)</span>{% endraw %}.</p>

<p>The event-count formulation also suggests a variance proof. If {% raw %}<span class="math inline">\(\{A_1,A_2,\dots\}\)</span>{% endraw %} are independent events, then we can derive explicit probabilistic bounds on {% raw %}<span class="math inline">\(N_n\)</span>{% endraw %} given some “threshold value” {% raw %}<span class="math inline">\(x\)</span>{% endraw %}. To start, note that {% raw %}<span class="math inline">\(p_k = \mathop{\mathrm{\mathbf{P}}}(A_k) = \mathbb{E} \mathbb 1_{A_k}\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(\mathop{\mathrm{Var}}(\mathbb 1_{A_k}) = p_k (1-p_k) \leq p_k\)</span>{% endraw %}. Therefore, {% raw %}<span class="math inline">\(\mathbb{E} N_n = p_1 + \dots p_n = m_n\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(\mathop{\mathrm{Var}}(N_n) \leq m_n\)</span>{% endraw %}. For {% raw %}<span class="math inline">\(n\)</span>{% endraw %} large enough that {% raw %}<span class="math inline">\(m_n&gt;x\)</span>{% endraw %}, Chebyshev gives</p>

{% raw %}<div class="math display">\[\begin{aligned}
        \mathop{\mathrm{\mathbf{P}}}(N_n \leq x) \leq \mathop{\mathrm{\mathbf{P}}}(|N_n - m_n| \geq m_n - x) \leq \frac{\mathop{\mathrm{Var}}(N_n)}{(m_n - x)^2} \leq \frac{m_n}{(m_n - x)^2} ~.
    
\end{aligned}\]</div>{% endraw %}
<p> Note that independence is used to obtain the estimate after the third inequality. Furthermore, if {% raw %}<span class="math inline">\(\sum_{n \in \mathbb N} p_n\)</span>{% endraw %} diverges, then the limit of the leftmost term above is zero for each {% raw %}<span class="math inline">\(x\)</span>{% endraw %}. It follows that, because {% raw %}<span class="math inline">\(\mathop{\mathrm{\mathbf{P}}}(\sup_k N_k \leq x) \leq \mathop{\mathrm{\mathbf{P}}}(N_n \leq x)\)</span>{% endraw %} for each {% raw %}<span class="math inline">\(n\)</span>{% endraw %}, {% raw %}<span class="math inline">\(\mathop{\mathrm{\mathbf{P}}}(\sup_k N_k \leq x) = 0\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\mathop{\mathrm{\mathbf{P}}}(\sup_k N_k &lt; \infty) = 0\)</span>{% endraw %} (from taking unions over all {% raw %}<span class="math inline">\(x\)</span>{% endraw %}). So, {% raw %}<span class="math inline">\(\mathop{\mathrm{\mathbf{P}}}(A_n \text{ i.o.}) = \mathop{\mathrm{\mathbf{P}}}(\sup_n N_n = \infty) = 1\)</span>{% endraw %}.</p>

</div>
<div id="result-11" class="proposition" data-note-number="11" data-note-kind="Proposition">
<p><strong>Proposition 11</strong> (Borel-Cantelli, Second Lemma: Reformulation).  Suppose {% raw %}<span class="math inline">\(\sum_{n \in \mathbb N} \mathop{\mathrm{\mathbf{P}}}(A_n)\)</span>{% endraw %} diverges, and </p>

{% raw %}<div class="math display">\[\liminf_{n \to \infty} \frac{\sum_{1 \leq j, k \leq n} \mathop{\mathrm{\mathbf{P}}}(A_j \cap A_k)}{\left( \sum_{1 \leq k \leq n} \mathop{\mathrm{\mathbf{P}}}(A_k) \right)^2} \leq 1 ~.\]</div>{% endraw %}
<p> Then, {% raw %}<span class="math inline">\(\mathop{\mathrm{\mathbf{P}}}(A_n \text{ i.o.}) = 1\)</span>{% endraw %}.</p>

</div>
<div class="proof">
<p><em>Proof.</em> Let {% raw %}<span class="math inline">\(N_n=\sum_{k=1}^n\mathbf1_{A_k}\)</span>{% endraw %} and {% raw %}<span class="math inline">\(m_n=\mathbb EN_n\to\infty\)</span>{% endraw %}. Expanding the square, without an independence assumption, gives</p>
{% raw %}<div class="math display">\[\mathbb EN_n^2=\sum_{j,k\leq n}P(A_j\cap A_k),\qquad
\mathbb E\left(\frac{N_n}{m_n}-1\right)^2=\frac{\mathbb EN_n^2}{m_n^2}-1\geq0.\]</div>{% endraw %}
<p>The hypothesis therefore supplies a subsequence {% raw %}<span class="math inline">\(n_r\)</span>{% endraw %} along which the last expectation tends to zero. For any fixed integer {% raw %}<span class="math inline">\(M\geq0\)</span>{% endraw %}, eventually {% raw %}<span class="math inline">\(m_{n_r}&gt;M\)</span>{% endraw %}, and</p>
{% raw %}<div class="math display">\[P(N_{n_r}\leq M)\leq\frac{\mathbb E(N_{n_r}/m_{n_r}-1)^2}{(1-M/m_{n_r})^2}\longrightarrow0.\]</div>{% endraw %}
<p>Since {% raw %}<span class="math inline">\(\{\sup_nN_n\leq M\}\subseteq\{N_{n_r}\leq M\}\)</span>{% endraw %}, the former event has probability zero. Take its union over the nonnegative integers {% raw %}<span class="math inline">\(M\)</span>{% endraw %}: the total number of occurrences is infinite almost surely, which is the desired conclusion. The use of a subsequence is exactly what permits the stated limit inferior assumption. ◻</p>
</div>
<h3 data-note-section="1.2" id="convergence-in-distribution">1.2. Convergence in Distribution</h3>
<p>Distribution functions, {% raw %}<span class="math inline">\(F_n\)</span>{% endraw %}, are said to <em>converge weakly to the distribution function {% raw %}<span class="math inline">\(F\)</span>{% endraw %}</em> if, for every continuity point {% raw %}<span class="math inline">\(x\)</span>{% endraw %}, {% raw %}<span class="math inline">\(\lim\limits_{n\to\infty} F_n(x) = F(x)\)</span>{% endraw %}. This is sometimes written {% raw %}<span class="math inline">\(F_n \Rightarrow F\)</span>{% endraw %}. For stochastic convergence, let {% raw %}<span class="math inline">\(X_n\)</span>{% endraw %} and {% raw %}<span class="math inline">\(X\)</span>{% endraw %} be random variables, and {% raw %}<span class="math inline">\(F_n\)</span>{% endraw %} and {% raw %}<span class="math inline">\(F\)</span>{% endraw %} be their respective distribution functions. Then, {% raw %}<span class="math inline">\(X_n\)</span>{% endraw %} is said to <em>converge in distribution</em>, or <em>converge in law</em>, to {% raw %}<span class="math inline">\(X\)</span>{% endraw %} if {% raw %}<span class="math inline">\(F_n \Rightarrow F\)</span>{% endraw %}. This is usually written as {% raw %}<span class="math inline">\(X_n \xrightarrow{d} X\)</span>{% endraw %}.</p>

<p>On the real line, weak convergence can also be represented by almost-sure convergence after choosing a new common probability space. The following theorem preserves each individual law; it does not preserve an arbitrary original coupling.</p>

<div id="thm:skorokhod-R" class="theorem" data-note-number="12" data-note-kind="Theorem">
<p><strong>Theorem 12</strong>.  Let {% raw %}<span class="math inline">\(\mu_n\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\mu\)</span>{% endraw %} be probability measures on {% raw %}<span class="math inline">\((\mathbb R, \mathscr B_{\mathbb R})\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(\mu_n \Rightarrow \mu\)</span>{% endraw %}. Then, there exist random variables {% raw %}<span class="math inline">\(Y_n\)</span>{% endraw %} and {% raw %}<span class="math inline">\(Y\)</span>{% endraw %} on a probability space {% raw %}<span class="math inline">\((\Omega, \mathscr F, \mathop{\mathrm{\mathbf{P}}})\)</span>{% endraw %} such that {% raw %}<span class="math inline">\(Y_n\)</span>{% endraw %} has law {% raw %}<span class="math inline">\(\mu_n\)</span>{% endraw %}, {% raw %}<span class="math inline">\(Y\)</span>{% endraw %} has law {% raw %}<span class="math inline">\(\mu\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(Y_n (\omega) \to Y(\omega)\)</span>{% endraw %} for all {% raw %}<span class="math inline">\(\omega \in \Omega\)</span>{% endraw %}.</p>

</div>
<div class="proof">
<p><em>Proof.</em> Let {% raw %}<span class="math inline">\(F_n,F\)</span>{% endraw %} be the distribution functions, and define their generalized inverses on {% raw %}<span class="math inline">\((0,1)\)</span>{% endraw %} by</p>
{% raw %}<div class="math display">\[q_n(u)=\inf\{x:F_n(x)\geq u\},\qquad q(u)=\inf\{x:F(x)\geq u\}.\]</div>{% endraw %}
<p>These are finite, nondecreasing, Borel functions. Right-continuity of a distribution function gives {% raw %}<span class="math inline">\(q_n(u)\leq x\)</span>{% endraw %} if and only if {% raw %}<span class="math inline">\(u\leq F_n(x)\)</span>{% endraw %}, and the same equivalence for {% raw %}<span class="math inline">\(q\)</span>{% endraw %}. Thus for a uniform {% raw %}<span class="math inline">\(U\)</span>{% endraw %} on {% raw %}<span class="math inline">\((0,1)\)</span>{% endraw %}, {% raw %}<span class="math inline">\(q_n(U)\)</span>{% endraw %} has distribution function {% raw %}<span class="math inline">\(F_n\)</span>{% endraw %} and {% raw %}<span class="math inline">\(q(U)\)</span>{% endraw %} has distribution function {% raw %}<span class="math inline">\(F\)</span>{% endraw %}.</p>
<p>We claim {% raw %}<span class="math inline">\(q_n(u)\to q(u)\)</span>{% endraw %} at every continuity point {% raw %}<span class="math inline">\(u\)</span>{% endraw %} of {% raw %}<span class="math inline">\(q\)</span>{% endraw %}. Fix such a point and small {% raw %}<span class="math inline">\(\delta&gt;0\)</span>{% endraw %} with {% raw %}<span class="math inline">\(u\pm\delta\in(0,1)\)</span>{% endraw %}. Choose continuity points {% raw %}<span class="math inline">\(x_-&lt;q(u-\delta)\)</span>{% endraw %} and {% raw %}<span class="math inline">\(x_+&gt;q(u+\delta)\)</span>{% endraw %} of {% raw %}<span class="math inline">\(F\)</span>{% endraw %}, as close to those respective quantiles as desired. Such points exist because a distribution function has at most countably many discontinuities. The inverse relation gives</p>
{% raw %}<div class="math display">\[F(x_-)&lt;u-\delta&lt;u&lt;u+\delta\leq F(x_+).\]</div>{% endraw %}
<p>Weak convergence gives {% raw %}<span class="math inline">\(F_n(x_-)&lt;u&lt;F_n(x_+)\)</span>{% endraw %} for all sufficiently large {% raw %}<span class="math inline">\(n\)</span>{% endraw %}, so {% raw %}<span class="math inline">\(x_-&lt;q_n(u)\leq x_+\)</span>{% endraw %}. Let the chosen endpoints approach the two quantiles, then let {% raw %}<span class="math inline">\(\delta\downarrow0\)</span>{% endraw %}. Continuity of {% raw %}<span class="math inline">\(q\)</span>{% endraw %} at {% raw %}<span class="math inline">\(u\)</span>{% endraw %} squeezes the lower and upper limits to {% raw %}<span class="math inline">\(q(u)\)</span>{% endraw %}.</p>
<p>The discontinuities of the monotone function {% raw %}<span class="math inline">\(q\)</span>{% endraw %} form a countable set {% raw %}<span class="math inline">\(D\)</span>{% endraw %}. Take {% raw %}<span class="math inline">\(\Omega=(0,1)\setminus D\)</span>{% endraw %} with the trace Borel sigma-field and restricted Lebesgue probability, and define {% raw %}<span class="math inline">\(Y_n(u)=q_n(u)\)</span>{% endraw %}, {% raw %}<span class="math inline">\(Y(u)=q(u)\)</span>{% endraw %}. Removing this null set changes none of the laws, and convergence now holds for every {% raw %}<span class="math inline">\(u\in\Omega\)</span>{% endraw %}, as stated. This construction provides new jointly defined variables; it imposes no claim about the joint distribution of any original versions. ◻</p>
</div>
<div id="thm:mapping-measurable-fct" class="theorem" data-note-number="13" data-note-kind="Theorem">
<p><strong>Theorem 13</strong>.  Let {% raw %}<span class="math inline">\(h : \mathbb R \to \mathbb R\)</span>{% endraw %} be a measurable function, and the set of discontinuities, {% raw %}<span class="math inline">\(D_h\)</span>{% endraw %}, is measurable. If {% raw %}<span class="math inline">\(\mu_n \Rightarrow \mu\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\mu(D_h) = 0\)</span>{% endraw %}, then {% raw %}<span class="math inline">\(\mu_n h^{-1} \Rightarrow \mu h^{-1}\)</span>{% endraw %}.</p>

</div>
<div class="proof">
<p><em>Proof.</em> Use Theorem 12 to realize the measures as the laws of {% raw %}<span class="math inline">\(Y_n,Y\)</span>{% endraw %} with {% raw %}<span class="math inline">\(Y_n\to Y\)</span>{% endraw %} almost surely. Since {% raw %}<span class="math inline">\(P(Y\in D_h)=\mu(D_h)=0\)</span>{% endraw %}, continuity at the limiting point gives {% raw %}<span class="math inline">\(h(Y_n)\to h(Y)\)</span>{% endraw %} almost surely. For a bounded continuous real {% raw %}<span class="math inline">\(f\)</span>{% endraw %}, dominated convergence gives</p>
{% raw %}<div class="math display">\[\int f\,d(\mu_n h^{-1})=\mathbb Ef(h(Y_n))\longrightarrow\mathbb Ef(h(Y))=\int f\,d(\mu h^{-1}).\]</div>{% endraw %}
<p>The bounded-continuous form of Portmanteau proves the assertion. Measurability of {% raw %}<span class="math inline">\(h\)</span>{% endraw %} ensures that the image laws in this display are defined. ◻</p>
</div>
<p>To state weak convergence directly for probability measures, use sets whose boundaries carry no limiting mass. We say the boundary of a set {% raw %}<span class="math inline">\(A\)</span>{% endraw %}, denoted {% raw %}<span class="math inline">\(\partial A\)</span>{% endraw %}, consists of limit points of sequences in {% raw %}<span class="math inline">\(A\)</span>{% endraw %} and {% raw %}<span class="math inline">\(A^c\)</span>{% endraw %}. A set {% raw %}<span class="math inline">\(A\)</span>{% endraw %} is called a {% raw %}<span class="math inline">\(\mu\)</span>{% endraw %}-continuity set if {% raw %}<span class="math inline">\(\mu(\partial A) = 0\)</span>{% endraw %} and it is a Borel set.</p>

<div id="prop:pre-portmanteau" class="proposition" data-note-number="14" data-note-kind="Proposition">
<p><strong>Proposition 14</strong>.  The following conditions are equivalent:</p>

<ol>
<li><p>{% raw %}<span class="math inline">\(\mu_n \Rightarrow \mu\)</span>{% endraw %};</p></li>
<li><p>{% raw %}<span class="math inline">\(\int f \dif \mu_n \to \int f \dif \mu\)</span>{% endraw %} for every bounded, continuous, real-valued function {% raw %}<span class="math inline">\(f\)</span>{% endraw %};</p></li>
<li><p>{% raw %}<span class="math inline">\(\mu_n(A) \to \mu(A)\)</span>{% endraw %} for every {% raw %}<span class="math inline">\(\mu\)</span>{% endraw %}-continuity set {% raw %}<span class="math inline">\(A\)</span>{% endraw %}.</p></li>
</ol>
</div>
<div class="proof">
<p><em>Proof.</em> Realize each {% raw %}<span class="math inline">\(\mu_n\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\mu\)</span>{% endraw %} as a random variable law, for example by the quantile construction above on a uniform probability space; no convergence assumption is needed for this realization. Then {% raw %}<span class="math inline">\(\int f\,d\mu_n=\mathbb Ef(X_n)\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\mu_n(A)=P(X_n\in A)\)</span>{% endraw %}. Assertions (i), (ii), and (vii) of Theorem 4 are exactly the three statements here, so their already proved equivalence applies. ◻</p>
</div>

<nav class="note-related" aria-label="Related notes"><p>Related notes: <a href="{% post_url 2021-10-02-probability-spaces-independence-and-countable-constructions %}">Probability Spaces, Independence, and Countable Constructions</a>.</p></nav>

<nav class="note-series" aria-label="Notes in this series"><p>Previous: <a href="{% post_url 2021-10-02-probability-spaces-independence-and-countable-constructions %}">Probability Spaces, Independence, and Countable Constructions</a> · Next: <a href="{% post_url 2021-11-29-the-radon-nikodym-theorem %}">The Radon-Nikodym Theorem</a></p></nav>

</div>
