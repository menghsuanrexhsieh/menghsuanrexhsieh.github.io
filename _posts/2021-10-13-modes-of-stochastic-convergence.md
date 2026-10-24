---
layout: "post"
title: "Modes of Stochastic Convergence"
date: "2021-10-13"
tags: ["probability theory", "asymptotic theory"]
excerpt: "Modes of Stochastic Convergence. Notes on stochastic convergence."
note_series: "Stochastic convergence"
note_source: "assets/notes/Overleaf Projects (32 items)/Stochastic Convergence Notes (Chapters 2 and 18)/main.tex"
redirect_from: ["/2021/11/06/modes-of-stochastic-convergence/"]
---

<div class="note-content" markdown="0">

<p>A statement that random variables converge is incomplete until the mode of convergence is specified. The definitions below distinguish convergence of paths, probabilities, and laws. We then develop three tools used in asymptotic calculations: continuous mappings, boundedness in probability, and control of moments through uniform integrability.</p>

<div id="basics" data-note-section="title">

</div>
<div id="Def:CvgProb" class="definition" data-note-number="1" data-note-kind="Definition">
<p><strong>Definition 1</strong>.  A sequence of random vectors, denoted {% raw %}<span class="math inline">\((X_n)\)</span>{% endraw %} is said to <strong>converge in probability</strong> to {% raw %}<span class="math inline">\(X\)</span>{% endraw %} if, for every {% raw %}<span class="math inline">\(\varepsilon>0\)</span>{% endraw %}, </p>

{% raw %}<div class="math display">\[\mathop{\mathrm{\mathds{P}}}\left( \abs{X_n - X} \geqslant\varepsilon\right) \xrightarrow{n \to \infty} 0\]</div>{% endraw %}
<p> This is denoted {% raw %}<span class="math inline">\({X_n}\xrightarrow{P}X\)</span>{% endraw %}.</p>

</div>
<div id="Def:CvgDist" class="definition" data-note-number="2" data-note-kind="Definition">
<p><strong>Definition 2</strong>.  A sequence of random vectors, denoted {% raw %}<span class="math inline">\((X_n)\)</span>{% endraw %} is said to <strong>converge in distribution</strong> to {% raw %}<span class="math inline">\(X\)</span>{% endraw %} if </p>

{% raw %}<div class="math display">\[\mathop{\mathrm{\mathds{P}}}(X_n \leqslant x) \xrightarrow{n \to \infty} \mathop{\mathrm{\mathds{P}}}(X \leqslant x)\]</div>{% endraw %}
<p> at all continuity points {% raw %}<span class="math inline">\(x\)</span>{% endraw %} of the map {% raw %}<span class="math inline">\(x \mapsto \mathop{\mathrm{\mathds{P}}}(X \leqslant x)\)</span>{% endraw %}. This is denoted {% raw %}<span class="math inline">\({X_n}\xrightarrow{\mathrm{d}}X\)</span>{% endraw %}.</p>

</div>
<div id="Def:CvgAS" class="definition" data-note-number="3" data-note-kind="Definition">
<p><strong>Definition 3</strong>.  A sequence of random vectors, denoted {% raw %}<span class="math inline">\((X_n)\)</span>{% endraw %} is said to <strong>converge almost surely</strong> to {% raw %}<span class="math inline">\(X\)</span>{% endraw %} if </p>

{% raw %}<div class="math display">\[\mathop{\mathrm{\mathds{P}}}\left( \lim\limits_{n \to \infty} \abs{X_n - X} = 0 \right) = 1\]</div>{% endraw %}
<p> This is denoted {% raw %}<span class="math inline">\({X_n}\xrightarrow{\mathrm{a.s.}}X\)</span>{% endraw %}.</p>

</div>
<div id="Thm:Portmanteau" class="theorem" data-note-number="4" data-note-kind="Theorem">
<p><strong>Theorem 4</strong> (Portmanteau).  The following are equivalent for random vectors {% raw %}<span class="math inline">\(X_n\)</span>{% endraw %} and random vector {% raw %}<span class="math inline">\(X\)</span>{% endraw %}:</p>

<ol>
<li><p><span id="Portmanteau-i" data-label="Portmanteau(i)"></span> {% raw %}<span class="math inline">\(\mathop{\mathrm{\mathds{P}}}(X_n \leqslant x) \to \mathop{\mathrm{\mathds{P}}}(X \leqslant x)\)</span>{% endraw %} at all continuity points of {% raw %}<span class="math inline">\(x \mapsto \mathop{\mathrm{\mathds{P}}}(X \leqslant x)\)</span>{% endraw %}</p></li>
<li><p><span id="Portmanteau-ii" data-label="Portmanteau(ii)"></span> {% raw %}<span class="math inline">\(\mathbb{E}f(X_n) \to \mathbb{E}f(X)\)</span>{% endraw %} for all bounded, continuous functions {% raw %}<span class="math inline">\(f\)</span>{% endraw %}</p></li>
<li><p><span id="Portmanteau-iii" data-label="Portmanteau(iii)"></span> {% raw %}<span class="math inline">\(\mathbb{E}f(X_n) \to \mathbb{E}f(X)\)</span>{% endraw %} for all bounded, Lipschitz functions {% raw %}<span class="math inline">\(f\)</span>{% endraw %}</p></li>
<li><p><span id="Portmanteau-iv" data-label="Portmanteau(iv)"></span> {% raw %}<span class="math inline">\(\liminf \mathbb{E}f(X_n) \geqslant\mathbb{E}f(X)\)</span>{% endraw %} for all nonnegative, continuous functions {% raw %}<span class="math inline">\(f\)</span>{% endraw %}</p></li>
<li><p><span id="Portmanteau-v" data-label="Portmanteau(v)"></span> {% raw %}<span class="math inline">\(\liminf \mathop{\mathrm{\mathds{P}}}(X_n \in G) \geqslant\mathop{\mathrm{\mathds{P}}}(X \in G)\)</span>{% endraw %} for all open sets {% raw %}<span class="math inline">\(G\)</span>{% endraw %}</p></li>
<li><p><span id="Portmanteau-vi" data-label="Portmanteau(vi)"></span> {% raw %}<span class="math inline">\(\limsup \mathop{\mathrm{\mathds{P}}}(X_n \in H) \leqslant\mathop{\mathrm{\mathds{P}}}(X \in H)\)</span>{% endraw %} for all closed sets {% raw %}<span class="math inline">\(H\)</span>{% endraw %}</p></li>
<li><p><span id="Portmanteau-vii" data-label="Portmanteau(vii)"></span> {% raw %}<span class="math inline">\(\mathop{\mathrm{\mathds{P}}}(X_n \in B) \to \mathop{\mathrm{\mathds{P}}}(X \in B)\)</span>{% endraw %} for all Borel sets {% raw %}<span class="math inline">\(B\)</span>{% endraw %} with {% raw %}<span class="math inline">\(\mathop{\mathrm{\mathds{P}}}(X \in \partial B) = 0\)</span>{% endraw %}.</p></li>
</ol>
<p>All convergence statements in this theorem are understood as {% raw %}<span class="math inline">\(n \to \infty\)</span>{% endraw %}.</p>

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
<li><p><span id="CMT:i" data-label="CMT:i"></span> {% raw %}<span class="math inline">\({X_n}\xrightarrow{\mathrm{a.s.}}X \implies {g(X_n)}\xrightarrow{\mathrm{a.s.}}g(X)\)</span>{% endraw %}.</p></li>
<li><p><span id="CMT:ii" data-label="CMT:ii"></span> {% raw %}<span class="math inline">\({X_n}\xrightarrow{\mathrm{d}}X \implies {g(X_n)}\xrightarrow{\mathrm{d}}g(X)\)</span>{% endraw %}.</p></li>
<li><p><span id="CMT:iii" data-label="CMT:iii"></span> {% raw %}<span class="math inline">\({X_n}\xrightarrow{P}X \implies {g(X_n)}\xrightarrow{P}g(X)\)</span>{% endraw %}.</p></li>
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
<div id="Thm:Prokhorov" class="theorem" data-note-number="6" data-note-kind="Theorem">
<p><strong>Theorem 6</strong> (Prokhorov).  </p>

<ol>
<li><p><span id="Prokhorov:i" data-label="Prokhorov:i"></span> {% raw %}<span class="math inline">\({X_n}\xrightarrow{\mathrm{d}}X \implies (X_n)\)</span>{% endraw %} is uniformly tight.</p></li>
<li><p><span id="Prokhorov:ii" data-label="Prokhorov:ii"></span> {% raw %}<span class="math inline">\((X_n)\)</span>{% endraw %} is uniformly tight implies there exists {% raw %}<span class="math inline">\(X\)</span>{% endraw %} such that {% raw %}<span class="math inline">\({(X_{n_j})}\xrightarrow{\text{d}}X\)</span>{% endraw %}.</p></li>
</ol>
</div>
<div class="proof">
<p><em>Proof.</em> Uniform tightness means that for every {% raw %}<span class="math inline">\(\varepsilon&gt;0\)</span>{% endraw %} some compact {% raw %}<span class="math inline">\(K\subset\mathbb R^d\)</span>{% endraw %} satisfies {% raw %}<span class="math inline">\(\sup_n\mathbb P(X_n\notin K)&lt;\varepsilon\)</span>{% endraw %}. In Euclidean space it is enough to use closed balls.</p>
<p>Suppose first that {% raw %}<span class="math inline">\(X_n\Rightarrow X\)</span>{% endraw %}. Fix {% raw %}<span class="math inline">\(\varepsilon&gt;0\)</span>{% endraw %} and choose {% raw %}<span class="math inline">\(R\)</span>{% endraw %} with {% raw %}<span class="math inline">\(\mathbb P(\|X\|\geq R)&lt;\varepsilon\)</span>{% endraw %}. This is possible because {% raw %}<span class="math inline">\(X\)</span>{% endraw %} is finite almost surely. The set {% raw %}<span class="math inline">\(\{x:\|x\|\geq R\}\)</span>{% endraw %} is closed, so</p>
{% raw %}<div class="math display">\[\limsup_n\mathbb P(\|X_n\|\geq R)\leq\mathbb P(\|X\|\geq R)&lt;\varepsilon.\]</div>{% endraw %}
<p>There is consequently {% raw %}<span class="math inline">\(N\)</span>{% endraw %} such that the left-hand tail probability is below {% raw %}<span class="math inline">\(\varepsilon\)</span>{% endraw %} for all {% raw %}<span class="math inline">\(n\geq N\)</span>{% endraw %}. Each of the finitely many variables {% raw %}<span class="math inline">\(X_1,\ldots,X_{N-1}\)</span>{% endraw %} also has tails tending to zero. Increase {% raw %}<span class="math inline">\(R\)</span>{% endraw %} to make their tail probabilities smaller than {% raw %}<span class="math inline">\(\varepsilon\)</span>{% endraw %} as well. The resulting closed ball proves uniform tightness.</p>
<p>Conversely, write {% raw %}<span class="math inline">\(\mu_n\)</span>{% endraw %} for the law of {% raw %}<span class="math inline">\(X_n\)</span>{% endraw %}. Helly selection, proved below without using this theorem, gives a subsequence converging vaguely to a measure {% raw %}<span class="math inline">\(\mu\)</span>{% endraw %} with total mass at most one. Fix {% raw %}<span class="math inline">\(\varepsilon&gt;0\)</span>{% endraw %}, choose a compact {% raw %}<span class="math inline">\(K\)</span>{% endraw %} with {% raw %}<span class="math inline">\(\mu_n(K)&gt;1-\varepsilon\)</span>{% endraw %} for every {% raw %}<span class="math inline">\(n\)</span>{% endraw %}, and take {% raw %}<span class="math inline">\(h\in C_c(\mathbb R^d)\)</span>{% endraw %} with {% raw %}<span class="math inline">\(0\leq h\leq1\)</span>{% endraw %} and {% raw %}<span class="math inline">\(h=1\)</span>{% endraw %} on {% raw %}<span class="math inline">\(K\)</span>{% endraw %}. For example, a sufficiently large ball contains {% raw %}<span class="math inline">\(K\)</span>{% endraw %}, and a continuous radial cutoff is one on that ball and zero outside a larger ball. Vague convergence gives</p>
{% raw %}<div class="math display">\[\int h\,d\mu=\lim_j\int h\,d\mu_{n_j}\geq1-\varepsilon.\]</div>{% endraw %}
<p>Thus {% raw %}<span class="math inline">\(1\geq\mu(\mathbb R^d)\geq1-\varepsilon\)</span>{% endraw %} for every {% raw %}<span class="math inline">\(\varepsilon&gt;0\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(\mu\)</span>{% endraw %} is a probability measure. For the same cutoff, both {% raw %}<span class="math inline">\(\int(1-h)\,d\mu_{n_j}\leq\varepsilon\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\int(1-h)\,d\mu\leq\varepsilon\)</span>{% endraw %}. If {% raw %}<span class="math inline">\(f\)</span>{% endraw %} is bounded and continuous, then {% raw %}<span class="math inline">\(fh\)</span>{% endraw %} is continuous with compact support and</p>
{% raw %}<div class="math display">\[\left|\int f\,d\mu_{n_j}-\int f\,d\mu\right|
\leq\left|\int fh\,d\mu_{n_j}-\int fh\,d\mu\right|+2\varepsilon\|f\|_\infty.\]</div>{% endraw %}
<p>Let {% raw %}<span class="math inline">\(j\to\infty\)</span>{% endraw %}, then {% raw %}<span class="math inline">\(\varepsilon\downarrow0\)</span>{% endraw %}. Portmanteau proves weak convergence to {% raw %}<span class="math inline">\(\mu\)</span>{% endraw %}. A random vector {% raw %}<span class="math inline">\(X\)</span>{% endraw %} with law {% raw %}<span class="math inline">\(\mu\)</span>{% endraw %} may be realized as the identity map on {% raw %}<span class="math inline">\((\mathbb R^d,\mathcal B(\mathbb R^d),\mu)\)</span>{% endraw %}. ◻</p>
</div>

<div id="Lem:Helley" class="lemma" data-note-number="7" data-note-kind="Lemma">
<p><strong>Lemma 7</strong>. (Helly selection). Every sequence of probability measures {% raw %}<span class="math inline">\(\mu_n\)</span>{% endraw %} on {% raw %}<span class="math inline">\(\mathbb R^d\)</span>{% endraw %} has a subsequence and a finite measure {% raw %}<span class="math inline">\(\mu\)</span>{% endraw %} of total mass at most one such that {% raw %}<span class="math inline">\(\int f\,d\mu_{n_j}\to\int f\,d\mu\)</span>{% endraw %} for every continuous compactly supported {% raw %}<span class="math inline">\(f\)</span>{% endraw %}. This is vague convergence; it need not be convergence in distribution to a probability law.</p>

</div>
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
<div id="result-8" class="lemma" data-note-number="8" data-note-kind="Lemma">
<p><strong>Lemma 8</strong>.  If {% raw %}<span class="math inline">\({X_n}\xrightarrow{\mathrm{d}}X\)</span>{% endraw %} and {% raw %}<span class="math inline">\(X\)</span>{% endraw %} has a continuous distribution function, then </p>

{% raw %}<div class="math display">\[\sup_{x} \abs{\mathop{\mathrm{\mathds{P}}}(X_n \leqslant x) - \mathop{\mathrm{\mathds{P}}}(X \leqslant x)} \xrightarrow{n\to\infty} 0\]</div>{% endraw %}
</div>
<div class="proof" id="uniform-cdf-proof">
<p><em>Proof.</em> Write {% raw %}<span class="math inline">\(F_n,F\)</span>{% endraw %} for the distribution functions on {% raw %}<span class="math inline">\(\mathbb R^d\)</span>{% endraw %}. First, continuity of {% raw %}<span class="math inline">\(F\)</span>{% endraw %} implies that each coordinate law is atomless. If {% raw %}<span class="math inline">\(\mathbb P(X_r=a)&gt;0\)</span>{% endraw %}, then for some finite {% raw %}<span class="math inline">\(b\)</span>{% endraw %} the event {% raw %}<span class="math inline">\(\{X_r=a,\ X_j\leq b\ (j\ne r)\}\)</span>{% endraw %} has positive probability, by continuity from below. The jump of {% raw %}<span class="math inline">\(F\)</span>{% endraw %} in coordinate {% raw %}<span class="math inline">\(r\)</span>{% endraw %} at {% raw %}<span class="math inline">\((b,\ldots,a,\ldots,b)\)</span>{% endraw %} would then be positive, contradicting continuity.</p>
<p>Fix {% raw %}<span class="math inline">\(\varepsilon&gt;0\)</span>{% endraw %}. For each coordinate {% raw %}<span class="math inline">\(r\)</span>{% endraw %}, choose a finite grid with endpoints {% raw %}<span class="math inline">\(-\infty,+\infty\)</span>{% endraw %} such that every interval between consecutive grid points has marginal probability at most {% raw %}<span class="math inline">\(\varepsilon/d\)</span>{% endraw %}. Such a grid exists: first make the two tails small, then use uniform continuity of the marginal distribution function on the remaining compact interval. Let {% raw %}<span class="math inline">\(G\)</span>{% endraw %} be the finite product grid. Lower orthants with corners in {% raw %}<span class="math inline">\(G\)</span>{% endraw %} are continuity sets for the law of {% raw %}<span class="math inline">\(X\)</span>{% endraw %}, since their boundaries lie in finitely many coordinate hyperplanes of probability zero. Infinite coordinates simply remove a constraint, or give the empty set. Portmanteau therefore gives</p>
{% raw %}<div class="math display">\[\Delta_n\triangleq\max_{z\in G}|F_n(z)-F(z)|\longrightarrow0.\]</div>{% endraw %}
<p>For any {% raw %}<span class="math inline">\(x\in\mathbb R^d\)</span>{% endraw %}, choose adjacent grid corners {% raw %}<span class="math inline">\(a\leq x\leq b\)</span>{% endraw %}. The difference between the lower orthants with corners {% raw %}<span class="math inline">\(a,b\)</span>{% endraw %} is contained in the union of the coordinate strips {% raw %}<span class="math inline">\(\{a_r&lt;X_r\leq b_r\}\)</span>{% endraw %}. Hence</p>
{% raw %}<div class="math display">\[0\leq F(b)-F(a)\leq\sum_{r=1}^d\mathbb P(a_r&lt;X_r\leq b_r)\leq\varepsilon.\]</div>{% endraw %}
<p>Monotonicity yields {% raw %}<span class="math inline">\(F_n(a)\leq F_n(x)\leq F_n(b)\)</span>{% endraw %} and the corresponding inequalities for {% raw %}<span class="math inline">\(F\)</span>{% endraw %}, so</p>
{% raw %}<div class="math display">\[F_n(x)-F(x)\leq\Delta_n+\varepsilon,
\qquad F(x)-F_n(x)\leq\Delta_n+\varepsilon.\]</div>{% endraw %}
<p>This bound holds uniformly in {% raw %}<span class="math inline">\(x\)</span>{% endraw %}. Taking the supremum, then the limit superior in {% raw %}<span class="math inline">\(n\)</span>{% endraw %}, and finally letting {% raw %}<span class="math inline">\(\varepsilon\downarrow0\)</span>{% endraw %} proves the result. ◻</p>
</div>

<p>Stochastic order notation records the size of a remainder relative to a chosen scale. An additive remainder that vanishes in probability does not change a weak limit; a term bounded in probability can still contribute to the limit.</p>

<div id="Def:Small_and_Big_O" class="definition" data-note-number="9" data-note-kind="Definition">
<p><strong>Definition 9.</strong> A real sequence {% raw %}<span class="math inline">\(Y_n\)</span>{% endraw %} is {% raw %}<span class="math inline">\(O_{\mathbb P}(1)\)</span>{% endraw %}, or bounded in probability, when for every {% raw %}<span class="math inline">\(\varepsilon&gt;0\)</span>{% endraw %} some {% raw %}<span class="math inline">\(M&lt;\infty\)</span>{% endraw %} satisfies {% raw %}<span class="math inline">\(\limsup_n\mathbb P(|Y_n|&gt;M)&lt;\varepsilon\)</span>{% endraw %}. For finite-valued variables this is equivalent to tightness of all their laws, because the finitely many initial indices can be handled by increasing {% raw %}<span class="math inline">\(M\)</span>{% endraw %}. The following definitions use real-valued random scales {% raw %}<span class="math inline">\(R_n\)</span>{% endraw %}, which may vanish; the factorization must hold also on {% raw %}<span class="math inline">\(\{R_n=0\}\)</span>{% endraw %}.</p>

<ol>
<li><p>{% raw %}<span class="math inline">\(X_n = o_{\mathop{\mathrm{\mathds{P}}}} (R_n)\)</span>{% endraw %} means there exists {% raw %}<span class="math inline">\({Y_n}\xrightarrow{P}0\)</span>{% endraw %} such that {% raw %}<span class="math inline">\(X_n = Y_n R_n\)</span>{% endraw %}.</p></li>
<li><p>{% raw %}<span class="math inline">\(X_n = O_{\mathop{\mathrm{\mathds{P}}}} (R_n)\)</span>{% endraw %} means there exists {% raw %}<span class="math inline">\(Y_n = O_{\mathop{\mathrm{\mathds{P}}}} (1)\)</span>{% endraw %} such that {% raw %}<span class="math inline">\(X_n = Y_n R_n\)</span>{% endraw %}.</p></li>
</ol>
</div>
<div id="Fact:o_O_rules" class="fact" data-note-number="10" data-note-kind="Fact">
<p><strong>Fact 10</strong> ({% raw %}<span class="math inline">\(o\)</span>{% endraw %} and {% raw %}<span class="math inline">\(O\)</span>{% endraw %} rules).  </p>

<ol>
<li><p><span id="o_O_rules:-i" data-label="o_O_rules:(i)"></span> {% raw %}<span class="math inline">\(o_{\mathop{\mathrm{\mathds{P}}}} (1) + o_{\mathop{\mathrm{\mathds{P}}}} (1) = o_{\mathop{\mathrm{\mathds{P}}}} (1)\)</span>{% endraw %}</p></li>
<li><p><span id="o_O_rules:-ii" data-label="o_O_rules:(ii)"></span> {% raw %}<span class="math inline">\(o_{\mathop{\mathrm{\mathds{P}}}} (1) + O_{\mathop{\mathrm{\mathds{P}}}} (1) = O_{\mathop{\mathrm{\mathds{P}}}} (1)\)</span>{% endraw %}</p></li>
<li><p><span id="o_O_rules:-iii" data-label="o_O_rules:(iii)"></span> {% raw %}<span class="math inline">\(o_{\mathop{\mathrm{\mathds{P}}}} (1) O_{\mathop{\mathrm{\mathds{P}}}} (1) = o_{\mathop{\mathrm{\mathds{P}}}} (1)\)</span>{% endraw %}</p></li>
<li><p><span id="o_O_rules:-iv" data-label="o_O_rules:(iv)"></span> {% raw %}<span class="math inline">\([1 + o_{\mathop{\mathrm{\mathds{P}}}} (1)]^{-1} = O_{\mathop{\mathrm{\mathds{P}}}} (1)\)</span>{% endraw %}</p></li>
<li><p><span id="o_O_rules:-v" data-label="o_O_rules:(v)"></span> {% raw %}<span class="math inline">\(o_{\mathop{\mathrm{\mathds{P}}}} (R_n) = R_n o_{\mathop{\mathrm{\mathds{P}}}} (1)\)</span>{% endraw %}</p></li>
<li><p><span id="o_O_rules:-vi" data-label="o_O_rules:(vi)"></span> {% raw %}<span class="math inline">\(O_{\mathop{\mathrm{\mathds{P}}}} (R_n) + o_{\mathop{\mathrm{\mathds{P}}}} (R_n) = R_n O_{\mathop{\mathrm{\mathds{P}}}} (1)\)</span>{% endraw %}</p></li>
<li><p><span id="o_O_rules:-vii" data-label="o_O_rules:(vii)"></span> {% raw %}<span class="math inline">\(o_{\mathop{\mathrm{\mathds{P}}}} (O_{\mathop{\mathrm{\mathds{P}}}} (1))= o_{\mathop{\mathrm{\mathds{P}}}} (1)\)</span>{% endraw %}</p></li>
</ol>
</div>
<div class="proof" id="stochastic-order-rules-proof">
<p><em>Proof of the order rules.</em> Write {% raw %}<span class="math inline">\(A_n\xrightarrow{P}0\)</span>{% endraw %} in probability and {% raw %}<span class="math inline">\(B_n=O_{\mathbb P}(1)\)</span>{% endraw %}. The union bounds</p>
{% raw %}<div class="math display">\[\mathbb P(|A_n+A'_n|&gt;\varepsilon)
\leq\mathbb P(|A_n|&gt;\varepsilon/2)+\mathbb P(|A'_n|&gt;\varepsilon/2),\]</div>{% endraw %}
{% raw %}<div class="math display">\[\mathbb P(|A_n+B_n|&gt;M+1)
\leq\mathbb P(|A_n|&gt;1)+\mathbb P(|B_n|&gt;M)\]</div>{% endraw %}
<p>prove (i) and (ii). For the product, fix {% raw %}<span class="math inline">\(\varepsilon&gt;0\)</span>{% endraw %} and use</p>
{% raw %}<div class="math display">\[\mathbb P(|A_nB_n|&gt;\varepsilon)
\leq\mathbb P(|B_n|&gt;M)+\mathbb P(|A_n|&gt;\varepsilon/M).\]</div>{% endraw %}
<p>First choose {% raw %}<span class="math inline">\(M\)</span>{% endraw %} so that the limit superior of the first term is arbitrarily small; for this fixed {% raw %}<span class="math inline">\(M\)</span>{% endraw %}, the second term tends to zero. This proves (iii), without any independence assumption.</p>
<p>For (iv), define the reciprocal arbitrarily as a finite value when {% raw %}<span class="math inline">\(1+A_n=0\)</span>{% endraw %}; that event has probability tending to zero. On {% raw %}<span class="math inline">\(\{|A_n|&lt;1/2\}\)</span>{% endraw %},</p>
{% raw %}<div class="math display">\[\left|\frac1{1+A_n}-1\right|\leq2|A_n|.\]</div>{% endraw %}
<p>Thus the reciprocal in fact equals {% raw %}<span class="math inline">\(1+o_{\mathbb P}(1)\)</span>{% endraw %}, which implies boundedness in probability. Assertion (v) is the defining factorization. For (vi), write the two summands as {% raw %}<span class="math inline">\(R_nB_n\)</span>{% endraw %} and {% raw %}<span class="math inline">\(R_nA_n\)</span>{% endraw %} and use (ii). Finally, (vii) is (iii) applied to the factorization defining its left side. All of these bounds remain valid when the factors are dependent. ◻</p>
</div>
<p>The next lemma transfers an ordinary small-argument estimate to a random argument converging to zero. This is the step used when applying Taylor expansions to estimators.</p>

<div id="result-11" class="lemma" data-note-number="11" data-note-kind="Lemma">
<p><strong>Lemma 11</strong>.  {% raw %}<span class="math inline">\(R:\mathop{\mathrm{\mathbb{R}}}^k \to \mathop{\mathrm{\mathbb{R}}}\)</span>{% endraw %} is Borel measurable and satisfies {% raw %}<span class="math inline">\(R(0) = 0\)</span>{% endraw %}. {% raw %}<span class="math inline">\(X_n\)</span>{% endraw %} are random vectors on domain of {% raw %}<span class="math inline">\(R\)</span>{% endraw %}, and {% raw %}<span class="math inline">\({X_n}\xrightarrow{P}0\)</span>{% endraw %}. Then, for all {% raw %}<span class="math inline">\(p &gt; 0\)</span>{% endraw %},</p>

<ol>
<li><p><span id="Lem_oO:1" data-label="Lem_oO:1"></span> {% raw %}<span class="math inline">\(R(h) = o(\norm{h}^p)\)</span>{% endraw %} as {% raw %}<span class="math inline">\(h \to 0\)</span>{% endraw %} implies {% raw %}<span class="math inline">\(R(X_n) = o_{\mathop{\mathrm{\mathds{P}}}} (\norm{X_n}^p)\)</span>{% endraw %}.</p></li>
<li><p><span id="Lem_oO:2" data-label="Lem_oO:2"></span> {% raw %}<span class="math inline">\(R(h) = O(\norm{h}^p)\)</span>{% endraw %} as {% raw %}<span class="math inline">\(h \to 0\)</span>{% endraw %} implies {% raw %}<span class="math inline">\(R(X_n) = O_{\mathop{\mathrm{\mathds{P}}}} (\norm{X_n}^p)\)</span>{% endraw %}.</p></li>
</ol>
</div>
<div class="proof">
<p><em>Proof.</em> Set </p>

{% raw %}<div class="math display">\[g(h) = \begin{cases*}
            \frac{R(h)}{\norm{h}^p} &amp; if $h \neq 0$ \\
            0 &amp; if $h = 0$
        \end{cases*}\]</div>{% endraw %}
<p> it follows {% raw %}<span class="math inline">\(R(X_n) = g(X_n) \norm{X_n}^p\)</span>{% endraw %}.</p>

<p>The first assertion follows from the continuous mapping theorem, since {% raw %}<span class="math inline">\(g\)</span>{% endraw %} is continuous at {% raw %}<span class="math inline">\(h=0\)</span>{% endraw %}.</p>

<p>For the second assertion, choose {% raw %}<span class="math inline">\(M,\delta&gt;0\)</span>{% endraw %} with {% raw %}<span class="math inline">\(|g(h)|\leq M\)</span>{% endraw %} whenever {% raw %}<span class="math inline">\(\|h\|&lt;\delta\)</span>{% endraw %}. Then {% raw %}<span class="math inline">\(P(|g(X_n)|&gt;M)\leq P(\|X_n\|\geq\delta)\to0\)</span>{% endraw %}, which proves boundedness in probability. ◻</p>

</div>
<p>Weak convergence controls expectations of bounded continuous functions, as stated in Theorem <a href="#Thm:Portmanteau" data-reference-type="ref" data-reference="Thm:Portmanteau">4</a>, assertion <a href="#Portmanteau-ii">(ii)</a>. Moment functions are unbounded, so rare large values can prevent their expectations from converging. Uniform integrability supplies the required control of the tails.</p>

<div id="Def:Uniform_Integrability" class="definition" data-note-number="12" data-note-kind="Definition">
<p><strong>Definition 12</strong>.  A sequence {% raw %}<span class="math inline">\((X_n)\)</span>{% endraw %} is <strong>asymptotically uniformly integrable</strong> if </p>

{% raw %}<div class="math display">\[\lim\limits_{M \to \infty} \limsup_{n \to \infty} \mathbb{E}\abs{X_n} \mathop{\mathrm{\mathbf{1}}}\set{\abs{X_n} \geqslant M} = 0\]</div>{% endraw %}
</div>
<div id="Thm:Cvg_Dist_Iff_AUI" class="theorem" data-note-number="13" data-note-kind="Theorem">
<p><strong>Theorem 13</strong>. Let {% raw %}<span class="math inline">\(X_n\Rightarrow X\)</span>{% endraw %} and let {% raw %}<span class="math inline">\(f\)</span>{% endraw %} be Borel measurable and continuous at {% raw %}<span class="math inline">\(X\)</span>{% endraw %} almost surely. Put {% raw %}<span class="math inline">\(Y_n=f(X_n),\ Y=f(X)\)</span>{% endraw %}, and assume each {% raw %}<span class="math inline">\(Y_n\)</span>{% endraw %} is integrable. If {% raw %}<span class="math inline">\((Y_n)\)</span>{% endraw %} is asymptotically uniformly integrable, then {% raw %}<span class="math inline">\(Y\)</span>{% endraw %} is integrable and {% raw %}<span class="math inline">\(\mathbb{E}Y_n\to \mathbb{E}Y\)</span>{% endraw %}. The converse holds when {% raw %}<span class="math inline">\(Y_n\geq0\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\mathbb{E}Y&lt;\infty\)</span>{% endraw %}. For signed variables, convergence of means alone is insufficient; convergence {% raw %}<span class="math inline">\(\mathbb{E}|Y_n|\to \mathbb{E}|Y|&lt;\infty\)</span>{% endraw %} is equivalent to asymptotic uniform integrability.</p>

</div>
<div class="proof">
<p><em>Proof.</em></p>

<p>Continuous mapping gives {% raw %}<span class="math inline">\(Y_n\Rightarrow Y\)</span>{% endraw %}. For {% raw %}<span class="math inline">\(T_M(y)=(-M)\vee(y\wedge M)\)</span>{% endraw %}, weak convergence controls {% raw %}<span class="math inline">\(\mathbb{E}T_M(Y_n)\)</span>{% endraw %}. The identity {% raw %}<span class="math inline">\(|y-T_M(y)|=(|y|-M)_+\)</span>{% endraw %} and Portmanteau applied to the nonnegative continuous tail function give</p>

{% raw %}<div class="math display">\[\mathbb{E}(|Y|-M)_+\leq\liminf_n\mathbb{E}(|Y_n|-M)_+.\]</div>{% endraw %}<p>Asymptotic uniform integrability makes the right side tend to zero. It also bounds {% raw %}<span class="math inline">\(\limsup_n\mathbb{E}|Y_n|\)</span>{% endraw %}, so Portmanteau gives {% raw %}<span class="math inline">\(\mathbb{E}|Y|&lt;\infty\)</span>{% endraw %}. Splitting the means at {% raw %}<span class="math inline">\(T_M\)</span>{% endraw %} now gives</p>

{% raw %}<div class="math display">\[|\mathbb{E}Y_n-\mathbb{E}Y|\leq|\mathbb{E}T_M(Y_n)-\mathbb{E}T_M(Y)|+\mathbb{E}(|Y_n|-M)_++\mathbb{E}(|Y|-M)_+.\]</div>{% endraw %}<p>Take {% raw %}<span class="math inline">\(n\to\infty\)</span>{% endraw %} and then {% raw %}<span class="math inline">\(M\to\infty\)</span>{% endraw %}. For the converse when {% raw %}<span class="math inline">\(Y_n\geq0\)</span>{% endraw %} and the finite means converge,</p>

{% raw %}<div class="math display">\[\lim_n\mathbb{E}(Y_n-M)_+=\mathbb{E}Y-\mathbb{E}(Y\wedge M)=\mathbb{E}(Y-M)_+.\]</div>{% endraw %}<p>Since {% raw %}<span class="math inline">\(y1_{\{y&gt;2M\}}\leq2(y-M)_+\)</span>{% endraw %} for {% raw %}<span class="math inline">\(y\geq0\)</span>{% endraw %}, these excess-tail bounds imply asymptotic uniform integrability. Apply this nonnegative argument to {% raw %}<span class="math inline">\(|Y_n|\Rightarrow|Y|\)</span>{% endraw %} to obtain the absolute-moment equivalence. Finally, the variables taking values {% raw %}<span class="math inline">\(n,-n,0\)</span>{% endraw %} with probabilities {% raw %}<span class="math inline">\(1/(2n),1/(2n),1-1/n\)</span>{% endraw %} converge in probability to zero and have mean zero, but their absolute-tail expectations remain one. This disproves the signed converse.</p>

<p>◻</p>

</div>

<nav class="note-series" aria-label="Notes in this series"><p>Next: <a href="{% post_url 2021-12-18-weak-convergence-tightness-and-metric-spaces %}">Weak Convergence, Tightness, and Metric Spaces</a></p></nav>

</div>
