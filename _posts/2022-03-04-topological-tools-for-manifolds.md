---
layout: "post"
title: "Topological Tools for Manifolds"
date: "2022-03-04"
tags: ["math", "differential geometry"]
excerpt: "Here are some useful facts that we will use throughout the study of Riemannian geometry."
note_series: "Differential geometry"
note_source: "assets/notes/Differential Geometry - Notes/diff-geo.tex"
---

<div class="note-content" markdown="0">

<div id="useful-facts-from-studying-topological-manifolds." data-note-section="title">

</div>
<p>A construction made in one coordinate chart need not agree with a construction made in another. Partitions of unity let us combine local smooth functions while controlling their supports. The proof requires a cover that is locally finite and smooth functions that vanish outside prescribed neighbourhoods.</p>

<p>We develop these ingredients in that order. Local finiteness makes the eventual sums smooth: near any fixed point, only finitely many terms remain.</p>

<div id="lem:top-M-existence-basis" class="lemma" data-note-number="1" data-note-kind="Lemma">
<p><strong>Lemma 1</strong>.  Let {% raw %}<span class="math inline">\(M\)</span>{% endraw %} be a toplogical manifold. Then, there exists a countable collection of open sets {% raw %}<span class="math inline">\(\{X_i\}_{i \in \mathbb N}\)</span>{% endraw %} such that {% raw %}<span class="math inline">\(\overline X_j\)</span>{% endraw %} is compact and {% raw %}<span class="math inline">\(\overline X_j \subset X_{j+1}\)</span>{% endraw %} for all {% raw %}<span class="math inline">\(j\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(M = \bigcup_j X_j\)</span>{% endraw %}.</p>

</div>
<div class="proof">
<p><em>Proof.</em> Every point has arbitrarily small coordinate neighbourhoods with compact closure: choose a Euclidean ball whose closed ball lies inside a chart. From a countable basis, retain the elements whose closures are compact; these still cover {% raw %}<span class="math inline">\(M\)</span>{% endraw %}, because a basis element contained in such a relatively compact neighbourhood has compact closure. Enumerate them as {% raw %}<span class="math inline">\(Y_1,Y_2,\ldots\)</span>{% endraw %}.</p>
<p>Set {% raw %}<span class="math inline">\(X_1=Y_1\)</span>{% endraw %}. Suppose {% raw %}<span class="math inline">\(X_j\)</span>{% endraw %} has compact closure. Choose finitely many basis elements {% raw %}<span class="math inline">\(Y_{i_1},\ldots,Y_{i_r}\)</span>{% endraw %} covering {% raw %}<span class="math inline">\(\overline X_j\)</span>{% endraw %}, and put</p>
<p> {% raw %}<div class="math display">\[X_{j+1}=Y_{j+1}\cup Y_{i_1}\cup\cdots\cup Y_{i_r}.\]</div>{% endraw %}</p>
<p> It is open, contains {% raw %}<span class="math inline">\(\overline X_j\)</span>{% endraw %}, and its closure is a closed subset of the compact union {% raw %}<span class="math inline">\(\overline Y_{j+1}\cup\bigcup_{k=1}^r\overline Y_{i_k}\)</span>{% endraw %}, hence compact. Inductively {% raw %}<span class="math inline">\(Y_1\cup\cdots\cup Y_j\subset X_j\)</span>{% endraw %}, proving exhaustion. The open set {% raw %}<span class="math inline">\(X_j\)</span>{% endraw %} itself need not be compact; it is its closure that is compact. ◻</p>
</div>
<div id="result-2" class="remark" data-note-number="2" data-note-kind="Remark">
<p><strong>Remark 2</strong>.  The countable collection in Lemma <a href="#lem:top-M-existence-basis" data-reference-type="ref" data-reference="lem:top-M-existence-basis">1</a> is called an <em>exhaustion</em> of {% raw %}<span class="math inline">\(M\)</span>{% endraw %}.</p>

</div>
<div id="lem:existence-refinments-top-M" class="lemma" data-note-number="3" data-note-kind="Lemma">
<p><strong>Lemma 3</strong> (Existence of Refinements).  Let {% raw %}<span class="math inline">\(M\)</span>{% endraw %} be a topological manifold. For any open cover {% raw %}<span class="math inline">\(\mathscr U = \{U_\alpha\}_{\alpha \in A}\)</span>{% endraw %} of {% raw %}<span class="math inline">\(M\)</span>{% endraw %}, there exists <em>two</em> countable family of open covers, {% raw %}<span class="math inline">\(\mathscr V = \{V_j\}_{j\in \mathbb N}\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\mathscr W = \{W_j\}_{j\in \mathbb N}\)</span>{% endraw %} such that</p>

<ol>
<li><p>{% raw %}<span class="math inline">\(\overline V_j\)</span>{% endraw %} is compact for all {% raw %}<span class="math inline">\(j\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\overline V_j \subset W_j\)</span>{% endraw %},</p></li>
<li><p>{% raw %}<span class="math inline">\(\mathscr W\)</span>{% endraw %} is a refinement of {% raw %}<span class="math inline">\(\mathscr U\)</span>{% endraw %}, i.e. for all {% raw %}<span class="math inline">\(j\)</span>{% endraw %}, there exists some {% raw %}<span class="math inline">\(\alpha = \alpha(j)\)</span>{% endraw %} such that {% raw %}<span class="math inline">\(W_j \subset U_\alpha\)</span>{% endraw %},</p></li>
<li><p>{% raw %}<span class="math inline">\(\mathscr W\)</span>{% endraw %} is a locally finite cover, i.e. for any {% raw %}<span class="math inline">\(p \in M\)</span>{% endraw %}, there exists a neighbourhood {% raw %}<span class="math inline">\(W_p\)</span>{% endraw %} such that {% raw %}<span class="math inline">\(W_p \cap W_j \neq \emptyset\)</span>{% endraw %} for <em>only</em> finitely many {% raw %}<span class="math inline">\(j\)</span>{% endraw %}.</p></li>
</ol>
</div>
<div class="proof">
<p><em>Proof.</em> Take the exhaustion from Lemma 1 and set {% raw %}<span class="math inline">\(X_0=X_{-1}=\varnothing\)</span>{% endraw %}. For each {% raw %}<span class="math inline">\(j\geq1\)</span>{% endraw %}, the shell {% raw %}<span class="math inline">\(K_j=\overline X_j\setminus X_{j-1}\)</span>{% endraw %} is compact and lies in the open strip {% raw %}<span class="math inline">\(X_{j+1}\setminus\overline X_{j-2}\)</span>{% endraw %}. The shells cover {% raw %}<span class="math inline">\(M\)</span>{% endraw %}: for a point, take the first {% raw %}<span class="math inline">\(j\)</span>{% endraw %} for which it lies in {% raw %}<span class="math inline">\(X_j\)</span>{% endraw %}.</p>
<p>For every {% raw %}<span class="math inline">\(p\in K_j\)</span>{% endraw %}, choose {% raw %}<span class="math inline">\(U_{\alpha(p)}\ni p\)</span>{% endraw %}. By small coordinate balls, choose open sets {% raw %}<span class="math inline">\(V_p,W_p\)</span>{% endraw %} with</p>
<p> {% raw %}<div class="math display">\[p\in V_p,\qquad \overline V_p\text{ compact},\qquad \overline V_p\subset W_p\subset U_{\alpha(p)}\cap(X_{j+1}\setminus\overline X_{j-2}).\]</div>{% endraw %}</p>
<p> Compactness gives finitely many {% raw %}<span class="math inline">\(V_p\)</span>{% endraw %}'s covering {% raw %}<span class="math inline">\(K_j\)</span>{% endraw %}. Keep these pairs for every shell, and enumerate their countable union. Both resulting families cover {% raw %}<span class="math inline">\(M\)</span>{% endraw %}, and the closure and refinement properties hold by construction.</p>
<p>To prove local finiteness, choose {% raw %}<span class="math inline">\(N\)</span>{% endraw %} with {% raw %}<span class="math inline">\(p\in X_N\)</span>{% endraw %}. If {% raw %}<span class="math inline">\(j\geq N+2\)</span>{% endraw %}, a set selected for shell {% raw %}<span class="math inline">\(j\)</span>{% endraw %} is disjoint from {% raw %}<span class="math inline">\(\overline X_{j-2}\supset X_N\)</span>{% endraw %}. Thus the neighbourhood {% raw %}<span class="math inline">\(X_N\)</span>{% endraw %} meets only sets from shells {% raw %}<span class="math inline">\(1,\ldots,N+1\)</span>{% endraw %}, of which finitely many were selected. This also covers the innermost shell, which must not be omitted. ◻</p>
</div>
<p>The refinement gives us small neighbourhoods whose closures remain inside larger ones. We now use smooth coordinates to place a function between each such pair: it will equal one on the smaller set and vanish outside the larger set.</p>

<div id="thm:existence-bump-manifold-compact" class="theorem" data-note-number="4" data-note-kind="Theorem">
<p><strong>Theorem 4</strong> (Existence of Smooth Bump Functions on Compact Sets on Manifolds).  Let {% raw %}<span class="math inline">\(M\)</span>{% endraw %} be a differentiable manifold, {% raw %}<span class="math inline">\(A \subset M\)</span>{% endraw %} be a compact subset, and {% raw %}<span class="math inline">\(U \subset M\)</span>{% endraw %} be an open set that contains {% raw %}<span class="math inline">\(A\)</span>{% endraw %}. Then, there exists a bump function {% raw %}<span class="math inline">\(\varphi \in \mathscr C^{\infty}_c (M)\)</span>{% endraw %} such that {% raw %}<span class="math inline">\(0 \leq \varphi \leq 1\)</span>{% endraw %}, {% raw %}<span class="math inline">\(\varphi \equiv 1\)</span>{% endraw %} on {% raw %}<span class="math inline">\(A\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(\operatorname{spt} \varphi \subset U\)</span>{% endraw %}.</p>

</div>
<p>The construction starts on the real line with a function that is flat at the origin. Rescaling it gives a cutoff on an interval, and a radial version gives the Euclidean bump functions needed in charts.</p>

<div id="lem:smooth-exp-1-x" class="lemma" data-note-number="5" data-note-kind="Lemma">
<p><strong>Lemma 5</strong>.  The function {% raw %}<span class="math inline">\(f : \mathbb R \to \mathbb R\)</span>{% endraw %} defined by </p>

{% raw %}<div class="math display">\[f(x) = \begin{cases}
            e^{-\frac1x} ~,~ &amp; x &gt; 0 ~, \\
            0 ~,~ &amp; x \leq 0 ~,
        \end{cases}\]</div>{% endraw %}
<p> is smooth.</p>

</div>
<span id="eq:smooth-exp-1-x-derivative"></span>
<div class="proof">
<p><em>Proof.</em> For every integer {% raw %}<span class="math inline">\(r\geq0\)</span>{% endraw %}, the one-sided limit</p>
<p> {% raw %}<div class="math display">\[\lim_{x\downarrow0}x^{-r}e^{-1/x}=0\]</div>{% endraw %}</p>
<p> follows by substituting {% raw %}<span class="math inline">\(t=1/x\)</span>{% endraw %}: the power-series bound {% raw %}<span class="math inline">\(e^t\geq t^{r+1}/(r+1)!\)</span>{% endraw %} gives {% raw %}<span class="math inline">\(t^re^{-t}\leq(r+1)!/t\to0\)</span>{% endraw %}. This is a right-hand limit; the formula {% raw %}<span class="math inline">\(e^{-1/x}\)</span>{% endraw %} is not used for negative {% raw %}<span class="math inline">\(x\)</span>{% endraw %}.</p>
<p>For {% raw %}<span class="math inline">\(x&gt;0\)</span>{% endraw %}, induction gives</p>
<p> {% raw %}<div class="math display">\[f^{(k)}(x)=x^{-2k}e^{-1/x}p_k(x),\qquad p_0=1,\tag{1}\]</div>{% endraw %}</p>
<p> where differentiation yields the exact recurrence</p>
<p> {% raw %}<div class="math display">\[p_{k+1}(x)=x^2p_k'(x)+(1-2kx)p_k(x).\]</div>{% endraw %}</p>
<p> Thus {% raw %}<span class="math inline">\(p_k\)</span>{% endraw %} is a polynomial of degree at most {% raw %}<span class="math inline">\(k\)</span>{% endraw %}. To extend the derivatives through zero, suppose the {% raw %}<span class="math inline">\(k\)</span>{% endraw %}-th derivative is zero at zero and on the negative half-line. Its right difference quotient at zero is {% raw %}<span class="math inline">\(x^{-2k-1}e^{-1/x}p_k(x)\)</span>{% endraw %}, which tends to zero by the preceding estimate. The left quotient is zero. Hence {% raw %}<span class="math inline">\(f^{(k+1)}(0)=0\)</span>{% endraw %}, and the formula for {% raw %}<span class="math inline">\(f^{(k+1)}\)</span>{% endraw %} tends to zero from the right as well, proving continuity. Starting at {% raw %}<span class="math inline">\(k=0\)</span>{% endraw %} completes induction and proves smoothness. ◻</p>
</div>
<div id="lem:existence-cutoff-R" class="lemma" data-note-number="6" data-note-kind="Lemma">
<p><strong>Lemma 6</strong> (Existence of Bump Function on {% raw %}<span class="math inline">\(\mathbb R\)</span>{% endraw %}).  Given any {% raw %}<span class="math inline">\(a, b \in \mathbb R\)</span>{% endraw %} such that {% raw %}<span class="math inline">\(a &lt; b\)</span>{% endraw %}, there exists a smooth function {% raw %}<span class="math inline">\(g : \mathbb R \to \mathbb R\)</span>{% endraw %} such that {% raw %}<span class="math inline">\(g \equiv 1\)</span>{% endraw %} on {% raw %}<span class="math inline">\(x \leq a\)</span>{% endraw %}, {% raw %}<span class="math inline">\(g(x) \in (0,1)\)</span>{% endraw %} for {% raw %}<span class="math inline">\(x \in (a,b)\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(g \equiv 0\)</span>{% endraw %} on {% raw %}<span class="math inline">\(x \geq b\)</span>{% endraw %}.</p>

</div>
<div class="proof">
<p><em>Proof.</em> With {% raw %}<span class="math inline">\(f\)</span>{% endraw %} from Lemma 5, set</p>
<p> {% raw %}<div class="math display">\[g(x)=\frac{f(b-x)}{f(b-x)+f(x-a)}.\]</div>{% endraw %}</p>
<p> The denominator is positive: the inequalities {% raw %}<span class="math inline">\(b-x\leq0\)</span>{% endraw %} and {% raw %}<span class="math inline">\(x-a\leq0\)</span>{% endraw %} cannot both hold when {% raw %}<span class="math inline">\(a&lt;b\)</span>{% endraw %}. Thus {% raw %}<span class="math inline">\(g\)</span>{% endraw %} is a smooth quotient. For {% raw %}<span class="math inline">\(x\leq a\)</span>{% endraw %}, the second term vanishes and the first is positive, so {% raw %}<span class="math inline">\(g=1\)</span>{% endraw %}; for {% raw %}<span class="math inline">\(x\geq b\)</span>{% endraw %}, the first vanishes and the second is positive, so {% raw %}<span class="math inline">\(g=0\)</span>{% endraw %}. In between, both terms are positive, giving {% raw %}<span class="math inline">\(0&lt;g&lt;1\)</span>{% endraw %}. ◻</p>
</div>
<div id="lem:existence-bump-Rn" class="lemma" data-note-number="7" data-note-kind="Lemma">
<p><strong>Lemma 7 (Euclidean bump function).</strong> For {% raw %}<span class="math inline">\(0\leq a&lt;b\)</span>{% endraw %}, there is a smooth {% raw %}<span class="math inline">\(h:\mathbb R^n\to[0,1]\)</span>{% endraw %} equal to one on {% raw %}<span class="math inline">\(\overline B_a(0)\)</span>{% endraw %}, strictly between zero and one when {% raw %}<span class="math inline">\(a&lt;|x|&lt;b\)</span>{% endraw %}, and zero for {% raw %}<span class="math inline">\(|x|\geq b\)</span>{% endraw %}.</p>
</div>
<div class="proof">
<p><em>Proof.</em> Apply Lemma 6 with thresholds {% raw %}<span class="math inline">\(a^2&lt;b^2\)</span>{% endraw %}, and set {% raw %}<span class="math inline">\(h(x)=g(|x|^2)\)</span>{% endraw %}. The squared norm is smooth everywhere, so this composition is smooth even at the origin, including when {% raw %}<span class="math inline">\(a=0\)</span>{% endraw %}. The three value ranges follow from the corresponding ranges of {% raw %}<span class="math inline">\(|x|^2\)</span>{% endraw %}. Its support is the closed ball of radius {% raw %}<span class="math inline">\(b\)</span>{% endraw %}, hence compact. ◻</p>
</div>
<p>We can now transfer the Euclidean construction to charts. Compactness lets us use finitely many chart neighbourhoods to cover the set on which the cutoff must equal one.</p>

<div class="proof">
<p><em>Proof of Theorem 4.</em> For every {% raw %}<span class="math inline">\(q\in A\)</span>{% endraw %}, choose a chart {% raw %}<span class="math inline">\(\varphi_q:U_q\to\mathbb R^n\)</span>{% endraw %} with {% raw %}<span class="math inline">\(q\in U_q\subset U\)</span>{% endraw %}, translate its coordinates so that {% raw %}<span class="math inline">\(\varphi_q(q)=0\)</span>{% endraw %}, and choose {% raw %}<span class="math inline">\(0&lt;a_q&lt;b_q\)</span>{% endraw %} with {% raw %}<span class="math inline">\(\overline B_{b_q}(0)\subset\varphi_q(U_q)\)</span>{% endraw %}. Pull the bump function of Lemma 7 back to {% raw %}<span class="math inline">\(U_q\)</span>{% endraw %} and extend it by zero outside {% raw %}<span class="math inline">\(U_q\)</span>{% endraw %}. Call the result {% raw %}<span class="math inline">\(h_q\)</span>{% endraw %}. Its support is contained in the compact set {% raw %}<span class="math inline">\(\varphi_q^{-1}(\overline B_{b_q})\subset U_q\)</span>{% endraw %}; near every point outside this compact set it is identically zero, which proves smoothness of the extension across the chart boundary. Moreover {% raw %}<span class="math inline">\(h_q=1\)</span>{% endraw %} on {% raw %}<span class="math inline">\(\varphi_q^{-1}(B_{a_q})\)</span>{% endraw %}.</p>
<p>Choose finitely many of these inner neighbourhoods covering {% raw %}<span class="math inline">\(A\)</span>{% endraw %}, say those indexed by {% raw %}<span class="math inline">\(q_1,\ldots,q_N\)</span>{% endraw %}. Define</p>
<p> {% raw %}<div class="math display">\[\varphi=1-\prod_{i=1}^N(1-h_{q_i}).\]</div>{% endraw %}</p>
<p> Every factor lies in {% raw %}<span class="math inline">\([0,1]\)</span>{% endraw %}, so {% raw %}<span class="math inline">\(0\leq\varphi\leq1\)</span>{% endraw %}. At each point of {% raw %}<span class="math inline">\(A\)</span>{% endraw %}, one factor is zero, giving {% raw %}<span class="math inline">\(\varphi=1\)</span>{% endraw %}. Outside the finite union of the compact supports, every {% raw %}<span class="math inline">\(h_{q_i}\)</span>{% endraw %} is zero, so {% raw %}<span class="math inline">\(\varphi=0\)</span>{% endraw %}. Thus {% raw %}<span class="math inline">\(\varphi\)</span>{% endraw %} is smooth, compactly supported, and its support lies in {% raw %}<span class="math inline">\(U\)</span>{% endraw %}. If {% raw %}<span class="math inline">\(A=\varnothing\)</span>{% endraw %}, take {% raw %}<span class="math inline">\(\varphi=0\)</span>{% endraw %}. The finite product also avoids reversing the cutoff values in the final composition. ◻</p>
</div>
<p>A partition of unity requires one further step. Starting from nonnegative bump functions whose positive sets cover the manifold, divide each function by their sum. The denominator is positive everywhere, and local finiteness allows us to differentiate the sum.</p>

<div id="prop:partition-unity" class="proposition" data-note-number="8" data-note-kind="Proposition">
<p><strong>Proposition 8 (Partition of unity).</strong> For any open cover {% raw %}<span class="math inline">\(\{U_\alpha\}_{\alpha\in A}\)</span>{% endraw %} of a smooth manifold {% raw %}<span class="math inline">\(M\)</span>{% endraw %}, there are smooth functions {% raw %}<span class="math inline">\(f_\alpha:M\to[0,1]\)</span>{% endraw %} such that the family of their supports is locally finite, {% raw %}<span class="math inline">\(\operatorname{spt}f_\alpha\subset U_\alpha\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(\sum_\alpha f_\alpha=1\)</span>{% endraw %}. Some {% raw %}<span class="math inline">\(f_\alpha\)</span>{% endraw %} may be identically zero.</p>
</div>
<div class="proof">
<p><em>Proof.</em> Use Lemma 3 to obtain countable covers {% raw %}<span class="math inline">\(V_j,W_j\)</span>{% endraw %} with {% raw %}<span class="math inline">\(\overline V_j\)</span>{% endraw %} compact, {% raw %}<span class="math inline">\(\overline V_j\subset W_j\subset U_{\alpha(j)}\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(\{W_j\}\)</span>{% endraw %} locally finite. By Theorem 4 choose {% raw %}<span class="math inline">\(0\leq\varphi_j\leq1\)</span>{% endraw %}, equal to one on {% raw %}<span class="math inline">\(\overline V_j\)</span>{% endraw %}, with compact support in {% raw %}<span class="math inline">\(W_j\)</span>{% endraw %}. The sum</p>
<p> {% raw %}<div class="math display">\[\Phi=\sum_j\varphi_j\]</div>{% endraw %}</p>
<p> is smooth because every point has a neighbourhood on which only finitely many summands are nonzero. It satisfies {% raw %}<span class="math inline">\(\Phi\geq1\)</span>{% endraw %}, since the sets {% raw %}<span class="math inline">\(V_j\)</span>{% endraw %} cover {% raw %}<span class="math inline">\(M\)</span>{% endraw %}. Therefore {% raw %}<span class="math inline">\(\psi_j=\varphi_j/\Phi\)</span>{% endraw %} is smooth, {% raw %}<span class="math inline">\(0\leq\psi_j\leq1\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(\sum_j\psi_j=1\)</span>{% endraw %}.</p>
<p>Group terms by the original cover index:</p>
<p> {% raw %}<div class="math display">\[f_\alpha=\sum_{j:\alpha(j)=\alpha}\psi_j.\]</div>{% endraw %}</p>
<p> These sums may have infinitely many terms globally, but they are locally finite and hence smooth. Nonnegativity and the total-sum identity give {% raw %}<span class="math inline">\(0\leq f_\alpha\leq1\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\sum_\alpha f_\alpha=1\)</span>{% endraw %}. The supports of the {% raw %}<span class="math inline">\(\psi_j\)</span>{% endraw %}'s form a locally finite family. Lemma 9 shows that each union {% raw %}<span class="math inline">\(\bigcup_{\alpha(j)=\alpha}\operatorname{spt}\psi_j\)</span>{% endraw %} is closed, so it contains {% raw %}<span class="math inline">\(\operatorname{spt}f_\alpha\)</span>{% endraw %} and lies in {% raw %}<span class="math inline">\(U_\alpha\)</span>{% endraw %}. Near any point only finitely many original {% raw %}<span class="math inline">\(\psi_j\)</span>{% endraw %}'s can be nonzero; their finitely many labels {% raw %}<span class="math inline">\(\alpha(j)\)</span>{% endraw %} are the only possible supports of {% raw %}<span class="math inline">\(f_\alpha\)</span>{% endraw %} meeting a sufficiently small neighbourhood. This verifies local finiteness after regrouping. ◻</p>
</div>
<div id="lem:locally-finite-supports" class="lemma" data-note-number="9" data-note-kind="Lemma">
<p><strong>Lemma 9</strong> (Properties of Locally Finiteness).  Let {% raw %}<span class="math inline">\(M\)</span>{% endraw %} be a topological manifold, and {% raw %}<span class="math inline">\(\mathscr X\)</span>{% endraw %} be a locally finite collection of subsets of {% raw %}<span class="math inline">\(M\)</span>{% endraw %}. Then,</p>

<ol>
<li><p>{% raw %}<span class="math inline">\(\{\overline X : X \in \mathscr X\}\)</span>{% endraw %} is locally finite, and</p></li>
<li><p>{% raw %}<span class="math inline">\(\overline{\bigcup_{X \in \mathscr X} X} = \bigcup_{X \in \mathscr X} \overline X\)</span>{% endraw %}.</p></li>
</ol>
</div>
<div class="proof">
<p><em>Proof.</em> Choose an open neighbourhood {% raw %}<span class="math inline">\(U\)</span>{% endraw %} of {% raw %}<span class="math inline">\(p\)</span>{% endraw %} meeting only {% raw %}<span class="math inline">\(X_1,\ldots,X_N\)</span>{% endraw %}. If {% raw %}<span class="math inline">\(U\cap\overline X\ne\varnothing\)</span>{% endraw %}, the openness of {% raw %}<span class="math inline">\(U\)</span>{% endraw %} and the definition of closure imply {% raw %}<span class="math inline">\(U\cap X\ne\varnothing\)</span>{% endraw %}. Thus the same neighbourhood meets only those finitely many closures, proving part (a).</p>
<p>The inclusion {% raw %}<span class="math inline">\(\bigcup_X\overline X\subset\overline{\bigcup_X X}\)</span>{% endraw %} always holds. For the reverse, take {% raw %}<span class="math inline">\(p\notin\bigcup_X\overline X\)</span>{% endraw %}, and choose {% raw %}<span class="math inline">\(U\)</span>{% endraw %} as above. Then</p>
<p> {% raw %}<div class="math display">\[U\setminus(\overline X_1\cup\cdots\cup\overline X_N)\]</div>{% endraw %}</p>
<p> is an open neighbourhood of {% raw %}<span class="math inline">\(p\)</span>{% endraw %} disjoint from every {% raw %}<span class="math inline">\(X\)</span>{% endraw %}. Hence {% raw %}<span class="math inline">\(p\notin\overline{\bigcup_X X}\)</span>{% endraw %}. Equivalently, the locally finite union of the closed sets {% raw %}<span class="math inline">\(\overline X\)</span>{% endraw %} is closed. Keeping the intersection with {% raw %}<span class="math inline">\(U\)</span>{% endraw %} is necessary to exclude the other members of the family. ◻</p>
</div>

<p class="note-reading">Reading: Carmo (1992), Riemannian geometry.</p>


<nav class="note-series" aria-label="Notes in this series"><p>Previous: <a href="{% post_url 2022-02-05-differentiable-manifolds-charts-constructions-and-examples %}">Differentiable Manifolds: Charts, Constructions, and Examples</a> · Next: <a href="{% post_url 2022-03-17-tangent-spaces-and-riemannian-metrics %}">Tangent Spaces and Riemannian Metrics</a></p></nav>

</div>
