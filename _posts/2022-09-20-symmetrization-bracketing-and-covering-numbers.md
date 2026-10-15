---
layout: "post"
title: "Symmetrization, Bracketing, and Covering Numbers"
date: "2022-09-20"
tags: ["statistics", "empirical processes"]
excerpt: "Symmetrization arguments also work for bounding tail probabilities."
note_series: "Empirical processes"
note_source: "assets/notes/Overleaf Projects (32 items)/Empirical Process/stats.tex"
redirect_from: ["/2022/09/20/symmetrization/", "/2022/09/24/tools-to-study-the-complexity-of-function-classes/", "/2022/09/27/bracketing/", "/2022/10/01/covering/", "/2026/06/15/tools-to-study-the-complexity-of-function-classes/"]
---

<div class="note-content" markdown="0">

<p>A pointwise law of large numbers does not control a function selected from the data. For that we need a bound on the largest empirical error over the class. Symmetrization replaces the unknown centering by independent random signs; brackets and covers then reduce the class to finitely many approximations. The approximation error and the size of this finite collection determine whether the bound tends to zero.</p>

<p>Let {% raw %}<span class="math inline">\(X_1,\ldots,X_n\)</span>{% endraw %} be i.i.d. with law {% raw %}<span class="math inline">\(P\)</span>{% endraw %}. For a function {% raw %}<span class="math inline">\(f\)</span>{% endraw %}, write {% raw %}<span class="math inline">\(Pf=\mathbb{E} f(X_1)\)</span>{% endraw %}, {% raw %}<span class="math inline">\(P_nf=n^{-1}\sum_{i=1}^n f(X_i)\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(\mathbb G_nf=\sqrt n(P_n-P)f\)</span>{% endraw %}. Rademacher variables are independent random signs, independent of the observations. See the <a href="{% post_url 2022-09-03-empirical-processes-tensorization-and-the-entropy-method %}">empirical-process setup</a> for measurability conventions.</p>

<div id="symmetrization" data-note-section="title">

</div>
<p>Informally, we know the central limit theorem tells us that for a collection of i.i.d. random variables {% raw %}<span class="math inline">\(\{X_k\}_{1 \leq k \leq n}\)</span>{% endraw %}, the sum {% raw %}<span class="math inline">\(\sum_{1 \leq k \leq n} (f(X_k) - \mathbf P\,\,\!\!f)\)</span>{% endraw %} for some bounded function {% raw %}<span class="math inline">\(f\)</span>{% endraw %}, once rescaled by {% raw %}<span class="math inline">\(\frac{1}{\sqrt{n}}\)</span>{% endraw %}, yields a Gaussian limit (nondegenerate when the variance is positive). So, sums of this sort is of order {% raw %}<span class="math inline">\(\sqrt{n}\)</span>{% endraw %} in probability, even though we might suspect that this is of order {% raw %}<span class="math inline">\(n\)</span>{% endraw %} (since we are adding {% raw %}<span class="math inline">\(n\)</span>{% endraw %} terms of order {% raw %}<span class="math inline">\(1\)</span>{% endraw %}). Though, we can somewhat imagine why this is the case: the summand contains independent observations, so their signs are probably not all identical. Heuristically, we can think that these random signs are the factor that leads to the nontrivial limiting behaviour. If we introduce random sign fluctuations, there might be a chance we can obtain a nontrivial limiting behaviour; this is the broad heuristic behind symmetrization.</p>

<p>Formally, let {% raw %}<span class="math inline">\(X_1, \dots, X_n\)</span>{% endraw %} denote i.i.d. random variables defined on {% raw %}<span class="math inline">\(\mathscr X\)</span>{% endraw %}. Suppose {% raw %}<span class="math inline">\(X_i\)</span>{% endraw %} has distribution {% raw %}<span class="math inline">\(\mathbf P\,\,\!\!\)</span>{% endraw %}. Let {% raw %}<span class="math inline">\(\mathcal F\)</span>{% endraw %} denote a function class on {% raw %}<span class="math inline">\(\mathscr X\)</span>{% endraw %}.</p>

<div id="prop:symmetrization-bound" class="proposition" data-note-number="1" data-note-kind="Proposition">
<p><strong>Proposition 1.</strong> Let {% raw %}<span class="math inline">\(X_1,\ldots,X_n\)</span>{% endraw %} be iid with law {% raw %}<span class="math inline">\(P\)</span>{% endraw %}, let {% raw %}<span class="math inline">\(Y_1,\ldots,Y_n\)</span>{% endraw %} be an independent copy, and let {% raw %}<span class="math inline">\(\varepsilon_i\)</span>{% endraw %} be independent Rademacher signs independent of both samples. For a countable class of integrable functions, or a pointwise measurable class with an integrable envelope,</p>
{% raw %}<div class="math display">\[\mathbb{E}\sup_{f\in\mathcal F}\left|\sum_{i=1}^n(f(X_i)-Pf)\right|
\le2\mathbb{E}\sup_{f\in\mathcal F}\left|\sum_{i=1}^n\varepsilon_i f(X_i)\right|.\]</div>{% endraw %}
<p>The same inequality holds with {% raw %}<span class="math inline">\(f(X_i)\)</span>{% endraw %} replaced by {% raw %}<span class="math inline">\(f(X_i)-Pf\)</span>{% endraw %} on the right. If suprema are not measurable, the statement uses outer expectations.</p>
</div>
<div class="proof">
<p><em>Proof.</em> Conditional Jensen first replaces {% raw %}<span class="math inline">\(Pf\)</span>{% endraw %} by the ghost-sample value {% raw %}<span class="math inline">\(f(Y_i)\)</span>{% endraw %}. Swapping the two entries of any independent pair {% raw %}<span class="math inline">\((X_i,Y_i)\)</span>{% endraw %} leaves their joint law unchanged. Therefore the entire difference process, simultaneously for every {% raw %}<span class="math inline">\(f\)</span>{% endraw %}, has the same law after multiplication by independent signs:</p>
{% raw %}<div class="math display">\[\mathbb{E}\sup_f\left|\sum_i(f(X_i)-Pf)\right|
\le\mathbb{E}\sup_f\left|\sum_i(f(X_i)-f(Y_i))\right|
=\mathbb{E}\sup_f\left|\sum_i\varepsilon_i(f(X_i)-f(Y_i))\right|.\]</div>{% endraw %}
<p>The triangle inequality separates the two samples and gives the factor two. The centered version follows from {% raw %}<span class="math inline">\(f(X_i)-f(Y_i)=(f(X_i)-Pf)-(f(Y_i)-Pf)\)</span>{% endraw %}. □</p>
</div>

<p>Symmetrization arguments also work for bounding tail probabilities.</p>

<div id="prop:panchenk" class="proposition" data-note-number="2" data-note-kind="Proposition">
<p><strong>Proposition 2</strong>.  Let {% raw %}<span class="math inline">\(X\)</span>{% endraw %} and {% raw %}<span class="math inline">\(Y\)</span>{% endraw %} be random variables such that {% raw %}<span class="math inline">\(\mathbb{E} f(X) \leq \mathbb{E} f(Y)\)</span>{% endraw %} holds for every convex, increasing function {% raw %}<span class="math inline">\(f\)</span>{% endraw %}. Suppose </p>

{% raw %}<div class="math display">\[\begin{aligned}
        \mathbf P\,\,\!\!(Y \geq t) \leq c_1 e^{- c_2 t^n} ~~\text{for all } t \geq 0
    
\end{aligned}\]</div>{% endraw %}
<p> and for some {% raw %}<span class="math inline">\(c_2 &gt; 0\)</span>{% endraw %} and {% raw %}<span class="math inline">\(c_1, n \geq 1\)</span>{% endraw %}, then </p>

{% raw %}<div class="math display">\[\begin{aligned}
        \mathbf P\,\,\!\!(X \geq t) \leq c_1 e^{1 - c_2 t^n} ~~\text{for all } t \geq 0 ~.
    
\end{aligned}\]</div>{% endraw %}
</div>
<div class="proof">
<p><em>Proof.</em> First prove the assertion for exponent one. For {% raw %}<span class="math inline">\(a\geq0\)</span>{% endraw %}, the increasing convex function {% raw %}<span class="math inline">\(z\mapsto(z-a)_+\)</span>{% endraw %} and tail integration imply</p>
{% raw %}<div class="math display">\[\mathbb E(X-a)_+\leq\mathbb E(Y-a)_+=\int_a^\infty\mathbb P(Y&gt;s)\,ds\leq\frac{c_1}{c_2}e^{-c_2a}.\]</div>{% endraw %}
<p>If {% raw %}<span class="math inline">\(t&gt;1/c_2\)</span>{% endraw %}, choose {% raw %}<span class="math inline">\(a=t-1/c_2\)</span>{% endraw %}. On {% raw %}<span class="math inline">\(X\geq t\)</span>{% endraw %}, we have {% raw %}<span class="math inline">\((X-a)_+\geq1/c_2\)</span>{% endraw %}. Markov therefore gives {% raw %}<span class="math inline">\(\mathbb P(X\geq t)\leq c_1e^{1-c_2t}\)</span>{% endraw %}. For {% raw %}<span class="math inline">\(0\leq t\leq1/c_2\)</span>{% endraw %}, the claimed upper bound is at least one.</p>
<p>For the stated exponent {% raw %}<span class="math inline">\(n\geq1\)</span>{% endraw %}, put {% raw %}<span class="math inline">\(U=(X_+)^n\)</span>{% endraw %} and {% raw %}<span class="math inline">\(V=(Y_+)^n\)</span>{% endraw %}. The map {% raw %}<span class="math inline">\(z\mapsto(z_+)^n\)</span>{% endraw %} is convex and increasing on all of {% raw %}<span class="math inline">\(\mathbb R\)</span>{% endraw %}, so composition with any increasing convex test function preserves the assumed comparison. Moreover {% raw %}<span class="math inline">\(\mathbb P(V\geq s)\leq c_1e^{-c_2s}\)</span>{% endraw %} for {% raw %}<span class="math inline">\(s&gt;0\)</span>{% endraw %}, and the bound at zero is valid because {% raw %}<span class="math inline">\(c_1\geq1\)</span>{% endraw %}. Apply the exponent-one result to {% raw %}<span class="math inline">\(U,V\)</span>{% endraw %} at {% raw %}<span class="math inline">\(s=t^n\)</span>{% endraw %}. For {% raw %}<span class="math inline">\(t&gt;0\)</span>{% endraw %}, {% raw %}<span class="math inline">\(U\geq t^n\)</span>{% endraw %} is equivalent to {% raw %}<span class="math inline">\(X\geq t\)</span>{% endraw %}; at {% raw %}<span class="math inline">\(t=0\)</span>{% endraw %} the desired inequality is trivial. Using the positive part avoids the source's invalid composition with {% raw %}<span class="math inline">\(z^n\)</span>{% endraw %} at negative {% raw %}<span class="math inline">\(z\)</span>{% endraw %}. ◻</p>
</div>
<h2 data-note-section="1" id="tools-to-study-the-complexity-of-function-classes">1. Tools to Study the Complexity of Function Classes</h2>
<p>Suppose that {% raw %}<span class="math inline">\(X_1, \dots, X_n\)</span>{% endraw %} are independent random variables defined on the space {% raw %}<span class="math inline">\(\mathscr X\)</span>{% endraw %} with probability measure {% raw %}<span class="math inline">\(\mathbf P\,\,\!\!\)</span>{% endraw %}. Suppose furthermore that {% raw %}<span class="math inline">\(X_1, \dots, X_n\)</span>{% endraw %} are identically distributed, and let {% raw %}<span class="math inline">\(F\)</span>{% endraw %} denote the distribution function of {% raw %}<span class="math inline">\(\mathbf P\,\,\!\!\)</span>{% endraw %}. The strong law of large numbers says that for any Borel measurable function (i.e. measurable when both the domain and the range are equipped with the Borel {% raw %}<span class="math inline">\(\sigma\)</span>{% endraw %}-algebra) {% raw %}<span class="math inline">\(h: \mathbb R \to \mathbb R\)</span>{% endraw %} such that {% raw %}<span class="math inline">\(\mathbb{E} |h(X_i)| &lt; \infty\)</span>{% endraw %}, we have </p>

{% raw %}<span id="eq:slln"></span><div class="math display">\[\begin{aligned}
 
    \frac1n \sum_{1 \leq i \leq n} h(X_i) \to \mathbb{E} h(X_i) ~~ \rm a.s.
\end{aligned}\tag{1}\]</div>{% endraw %}
<p> as {% raw %}<span class="math inline">\(n \to \infty\)</span>{% endraw %}. But it turns out that an even stronger statement is true: take the function {% raw %}<span class="math inline">\(h(X_i) = \mathbb 1 \{X_i \leq x\}\)</span>{% endraw %} for {% raw %}<span class="math inline">\(x \in \mathbb R\)</span>{% endraw %}, so that the left-hand side of <a href="#eq:slln" data-reference-type="eqref" data-reference="eq:slln">(1)</a> reduces to the empirical distribution function </p>

{% raw %}<div class="math display">\[\begin{aligned}
    \widehat F_n (x) = \frac1n \sum_{1 \leq i \leq n} \mathbb 1 \{ X_i \leq x \} ~,
\end{aligned}\]</div>{% endraw %}
<p> and the stronger statement is upgrading <a href="#eq:slln" data-reference-type="eqref" data-reference="eq:slln">(1)</a> to hold true over the entire domain {% raw %}<span class="math inline">\(\mathbb R\)</span>{% endraw %}, i.e. </p>

{% raw %}<span id="eq:glivenko-cantelli"></span><div class="math display">\[\begin{aligned}
 
    \sup_{x \in \mathbb R} |\widehat F_n (x) - F(x)| \to 0 ~~ \rm a.s.
\end{aligned}\tag{2}\]</div>{% endraw %}
<p> as {% raw %}<span class="math inline">\(n \to \infty\)</span>{% endraw %}. This is the original formulation of the <em>Glivenko-Cantelli theorem</em>. Note that there is a certain “hardness” to showing this statement is true: {% raw %}<span class="math inline">\(\widehat F_n\)</span>{% endraw %} is random, as it depends on the realizations of {% raw %}<span class="math inline">\(X_1, \dots, X_n\)</span>{% endraw %}. However, the problem is much easier to tackle when we examine this from the perspective of the <em>function class</em> we are working with. The rest of this section develops tools to characterize and study function classes.</p>

<h3 data-note-section="1.1" id="bracketing">1.1. Bracketing</h3>
<p>As above, heuristically, whether the uniform convergence holds depends on the complexity of the class of functions we consider. Here, we follow historical development and described the case when the function class considered is the set of indicator functions, {% raw %}<span class="math inline">\(g_x (t) = \mathbb 1 \{t \leq x\}\)</span>{% endraw %}. A priori, if we could somehow “approximate” this class of functions by a small class of functions, then we could apply the strong law of large numbers to each function in the small class, and hope the “approximation error” is small. We develop the definitions in a general setting, with an eye to apply this to Glivenko-Cantelli theorem in the extended remark below.</p>

<p>For {% raw %}<span class="math inline">\(1\leq q&lt;\infty\)</span>{% endraw %}, let {% raw %}<span class="math inline">\(L^q (\mathbf P\,\,\!\!)\)</span>{% endraw %} denote the space of functions {% raw %}<span class="math inline">\(g\)</span>{% endraw %} (defined on some ambient space {% raw %}<span class="math inline">\(\mathscr X\)</span>{% endraw %}) such that {% raw %}<span class="math inline">\(P |g|^q &lt; \infty\)</span>{% endraw %}. The choice of norm affects the size of a bracket, so we distinguish {% raw %}<span class="math inline">\(L^q (\mathbf P\,\,\!\!)\)</span>{% endraw %} for different {% raw %}<span class="math inline">\(q\)</span>{% endraw %}; so, we write {% raw %}<span class="math inline">\(\lVert \cdot \rVert_{\mathbf P\,\,\!\!,q}\)</span>{% endraw %} for the norm on {% raw %}<span class="math inline">\(L^q(P)\)</span>{% endraw %}. In the sequel, it is useful to think about {% raw %}<span class="math inline">\(\mathcal F = (\mathcal F, \lVert \cdot \rVert_{\mathbf P\,\,\!\!,q})\)</span>{% endraw %} as a subset of the normed space {% raw %}<span class="math inline">\(L^q (\mathbf P\,\,\!\!)\)</span>{% endraw %}. For now, take any functions {% raw %}<span class="math inline">\(l, u \in L^q (\mathbf P\,\,\!\!)\)</span>{% endraw %}, and suppose {% raw %}<span class="math inline">\(l \leq u\)</span>{% endraw %} pointwise (i.e. holds at every point {% raw %}<span class="math inline">\(x \in \mathscr X\)</span>{% endraw %}). Then, we define the <em>bracket</em> of the class of functions {% raw %}<span class="math inline">\(L^q (\mathbf P\,\,\!\!)\)</span>{% endraw %}, denoted {% raw %}<span class="math inline">\([l,u]\)</span>{% endraw %}, as </p>

{% raw %}<span id="eq:bracket"></span><div class="math display">\[\begin{aligned}
 
    [l,u] \triangleq \{ g \in L^q (\mathbf P\,\,\!\!) : l(x) \leq g(x) \leq u(x) ~ \text{for all } x \in \mathscr X \} ~.
\end{aligned}\tag{3}\]</div>{% endraw %}
<p> An <em>{% raw %}<span class="math inline">\(\varepsilon\)</span>{% endraw %}-bracket</em> is a bracket {% raw %}<span class="math inline">\([l,u]\)</span>{% endraw %} with {% raw %}<span class="math inline">\(\lVert l-u \rVert_{\mathbf P\,\,\!\!,q} = (\mathbf P\,\,\!\!|l-u|^q)^{\frac1q} &lt; \varepsilon\)</span>{% endraw %}. For {% raw %}<span class="math inline">\(\mathcal F\)</span>{% endraw %}, the <em>bracketing number</em> {% raw %}<span class="math inline">\(N_{[\:]} (\varepsilon, \mathcal F, \lVert \cdot \rVert_{\mathbf P\,\,\!\!,q})\)</span>{% endraw %} is the minimum number of {% raw %}<span class="math inline">\(\varepsilon\)</span>{% endraw %}-brackets needed to cover {% raw %}<span class="math inline">\(\mathcal F\)</span>{% endraw %}; here, {% raw %}<span class="math inline">\(l\)</span>{% endraw %} and {% raw %}<span class="math inline">\(u\)</span>{% endraw %} do not need to belong to {% raw %}<span class="math inline">\(\mathcal F\)</span>{% endraw %}. Finally, we say a function {% raw %}<span class="math inline">\(x \mapsto F(x)\)</span>{% endraw %} is an <em>envelope function of a class {% raw %}<span class="math inline">\(\mathcal F\)</span>{% endraw %}</em> if {% raw %}<span class="math inline">\(|f(x)| \leq F(x)\)</span>{% endraw %} for every {% raw %}<span class="math inline">\(x \in \mathscr X\)</span>{% endraw %} and {% raw %}<span class="math inline">\(f \in \mathcal F\)</span>{% endraw %}. The <em>minimum envelope function</em> is {% raw %}<span class="math inline">\(x \mapsto \sup_{f \in \mathcal F} |f(x)|\)</span>{% endraw %}.</p>

<div id="eg:glivenko-cantelli-l1" class="remark" data-note-number="3" data-note-kind="Remark">
<p><strong>Remark 3</strong> (Glivenko-Cantelli).  On {% raw %}<span class="math inline">\(\mathbb R\)</span>{% endraw %}, consider the class of indicator functions </p>

{% raw %}<div class="math display">\[\begin{aligned}
    g_x (t) = \mathbb 1 \{t \leq x\} = \mathbb 1_{(-\infty, x]} (t) ~.
\end{aligned}\]</div>{% endraw %}
<p> For clarity, let us write {% raw %}<span class="math inline">\(\mathcal F_1 = \{ g_x : x \in \mathbb R \}\)</span>{% endraw %}. Since these functions are defined on the real line, we look at {% raw %}<span class="math inline">\(L^1 (\mathbf P\,\,\!\!)\)</span>{% endraw %} functions. We can show a number of things is true about this function class.</p>

<div id="lem:bracketing-number-g-c" class="lemma" data-note-number="4" data-note-kind="Lemma">
<p><strong>Lemma 4</strong>.  {% raw %}<span class="math inline">\(N_{[\:]} (\varepsilon, \mathcal F_1, \lVert \cdot \rVert_{\mathbf P\,\,\!\!,1}) &lt; \infty\)</span>{% endraw %} for any {% raw %}<span class="math inline">\(\varepsilon &gt; 0\)</span>{% endraw %}.</p>

</div>
<div class="proof">
<p><em>Proof.</em> Choose an integer {% raw %}<span class="math inline">\(m\geq2\)</span>{% endraw %} with {% raw %}<span class="math inline">\(1/m&lt;\varepsilon\)</span>{% endraw %}, and let {% raw %}<span class="math inline">\(q_j=\inf\{x:F(x)\geq j/m\}\)</span>{% endraw %}, {% raw %}<span class="math inline">\(1\leq j&lt;m\)</span>{% endraw %}. Each quantile is finite. List their distinct values as {% raw %}<span class="math inline">\(t_1&lt;\cdots&lt;t_k\)</span>{% endraw %}, and adjoin {% raw %}<span class="math inline">\(t_0=-\infty\)</span>{% endraw %}, {% raw %}<span class="math inline">\(t_{k+1}=+\infty\)</span>{% endraw %}.</p>
<p>For consecutive cuts, {% raw %}<span class="math inline">\(P(t_j&lt;X&lt;t_{j+1})\leq1/m\)</span>{% endraw %}. Indeed, if {% raw %}<span class="math inline">\(F(t_{j+1}-)-F(t_j)&gt;1/m\)</span>{% endraw %}, some grid level {% raw %}<span class="math inline">\(r/m\)</span>{% endraw %} lies strictly between these values. Right continuity at {% raw %}<span class="math inline">\(t_j\)</span>{% endraw %} and the definition of the left limit at {% raw %}<span class="math inline">\(t_{j+1}\)</span>{% endraw %} would then put {% raw %}<span class="math inline">\(q_r\)</span>{% endraw %} strictly inside this gap, a contradiction. The identical grid argument handles both infinite end intervals.</p>
<p>For each {% raw %}<span class="math inline">\(j\)</span>{% endraw %}, use the bracket</p>
{% raw %}<div class="math display">\[\left[\mathbf1_{(-\infty,t_j]},\ \mathbf1_{(-\infty,t_{j+1})}\right],\]</div>{% endraw %}
<p>where the lower endpoint is zero at {% raw %}<span class="math inline">\(t_0=-\infty\)</span>{% endraw %} and the upper endpoint is one at {% raw %}<span class="math inline">\(t_{k+1}=+\infty\)</span>{% endraw %}. Its {% raw %}<span class="math inline">\(L^1(P)\)</span>{% endraw %} width is {% raw %}<span class="math inline">\(P(t_j&lt;X&lt;t_{j+1})\leq1/m&lt;\varepsilon\)</span>{% endraw %}. Every {% raw %}<span class="math inline">\(g_x\)</span>{% endraw %} belongs to the bracket whose cuts satisfy {% raw %}<span class="math inline">\(t_j\leq x&lt;t_{j+1}\)</span>{% endraw %}. The closed lower half-line and open upper half-line are essential: they keep any atom at a cut out of the bracket width while covering the indicator at that cut in the next bracket. There are only finitely many brackets. ◻</p>
</div>
<p>The same finite-approximation argument proves a uniform law for any class with finite bracketing numbers at every positive scale, under the integrability assumptions below. In what follows, let </p>

{% raw %}<div class="math display">\[\begin{aligned}
    \widehat P_n = \frac1n \sum_{1 \leq k \leq n} \delta_{X_k}
\end{aligned}\]</div>{% endraw %}
<p> denote the empirical measure of i.i.d. {% raw %}<span class="math inline">\(X_1, \dots, X_n\)</span>{% endraw %} observations on {% raw %}<span class="math inline">\(\mathscr X\)</span>{% endraw %}.</p>

<div id="thm:finite-bracketing-implies-g-c" class="theorem" data-note-number="5" data-note-kind="Theorem">
<p><strong>Theorem 5</strong>.  Let {% raw %}<span class="math inline">\(\mathcal F\)</span>{% endraw %} be a function class such that {% raw %}<span class="math inline">\(N_{[\:]} (\varepsilon, \mathcal F, \lVert \cdot \rVert_{\mathbf P\,\,\!\!,1}) &lt; \infty\)</span>{% endraw %} for any {% raw %}<span class="math inline">\(\varepsilon &gt; 0\)</span>{% endraw %}. Then, {% raw %}<span class="math inline">\(\sup_{g \in \mathcal F} | \widehat P_n g - Pg | \to 0\)</span>{% endraw %} almost surely.</p>

</div>
<p>Note that a lot of texts write {% raw %}<span class="math inline">\(\lVert \widehat P_n - \mathbf P\,\,\!\!\rVert_{\mathcal F} \triangleq \sup_{g \in \mathcal F} |\widehat P_n g - \mathbf P\,\,\!\!g|\)</span>{% endraw %}.</p>

<div class="proof">
<p><em>Proof.</em> Fix {% raw %}<span class="math inline">\(\varepsilon&gt;0\)</span>{% endraw %}, and choose finitely many pointwise brackets {% raw %}<span class="math inline">\([l_j,u_j]\)</span>{% endraw %} covering {% raw %}<span class="math inline">\(\mathcal F\)</span>{% endraw %}, with integrable endpoints and {% raw %}<span class="math inline">\(P(u_j-l_j)&lt;\varepsilon\)</span>{% endraw %}. For any {% raw %}<span class="math inline">\(g\)</span>{% endraw %} in bracket {% raw %}<span class="math inline">\(j\)</span>{% endraw %},</p>
{% raw %}<div class="math display">\[(P_n-P)l_j-\varepsilon\leq(P_n-P)g\leq(P_n-P)u_j+\varepsilon.\]</div>{% endraw %}
<p>The lower bound uses {% raw %}<span class="math inline">\(P_n g\geq P_nl_j\)</span>{% endraw %} and {% raw %}<span class="math inline">\(P(g-l_j)\leq P(u_j-l_j)\)</span>{% endraw %}; the upper bound is analogous. Hence</p>
{% raw %}<div class="math display">\[\sup_{g\in\mathcal F}|(P_n-P)g|\leq\max_j\max\{|(P_n-P)l_j|,|(P_n-P)u_j|\}+\varepsilon.\]</div>{% endraw %}
<p>The strong law makes the finite maximum tend to zero on an event of probability one. Perform this construction for {% raw %}<span class="math inline">\(\varepsilon=1/r\)</span>{% endraw %}, {% raw %}<span class="math inline">\(r=1,2,\ldots\)</span>{% endraw %}, and intersect the countably many probability-one events. On that single event the limsup of the supremum is at most every {% raw %}<span class="math inline">\(1/r\)</span>{% endraw %}, and hence is zero. This argument also gives a pointwise assertion outside a measurable null set if the supremum itself is not measurable. ◻</p>
</div>
<p>The Glivenko-Cantelli theorem then follows directly from Theorem <a href="#thm:finite-bracketing-implies-g-c" data-reference-type="ref" data-reference="thm:finite-bracketing-implies-g-c">5</a>.</p>

</div>
<div id="rem:g-c-concentration" class="remark" data-note-number="6" data-note-kind="Remark">
<p><strong>Remark 6</strong> (Glivenko-Cantelli via concentration inequality).  Let {% raw %}<span class="math inline">\(X_1, \dots, X_n\)</span>{% endraw %} denote i.i.d. random variables on {% raw %}<span class="math inline">\(\mathscr X\)</span>{% endraw %}. Let {% raw %}<span class="math inline">\(\mathcal F\)</span>{% endraw %} denote a collection of real-valued functions on {% raw %}<span class="math inline">\(\mathscr X\)</span>{% endraw %} uniformly bounded by a positive constant {% raw %}<span class="math inline">\(M\)</span>{% endraw %}, i.e. </p>

{% raw %}<span id="property:uniformly-bounded-function"></span><div class="math display">\[\begin{aligned}
 
        \sup_{x \in \mathscr X} |f(x)| \leq M ~~\text{for all } f \in \mathcal F ~.
    
\end{aligned}\tag{4}\]</div>{% endraw %}
<p>Assume the class is countable, or has a countable pointwise dense subclass, so that the supremum below is measurable. Define</p>
{% raw %}<div class="math display">\[G(x_1,\ldots,x_n)=\sup_{f\in\mathcal F}\left|\frac1n\sum_{k=1}^nf(x_k)-Pf\right|.\]</div>{% endraw %}
<p>Replacing only coordinate {% raw %}<span class="math inline">\(i\)</span>{% endraw %} changes each expression inside the supremum by at most {% raw %}<span class="math inline">\(|f(x_i)-f(x_i')|/n\leq2M/n\)</span>{% endraw %}. The inequalities {% raw %}<span class="math inline">\(||a|-|b||\leq|a-b|\)</span>{% endraw %} and {% raw %}<span class="math inline">\(|\sup a_f-\sup b_f|\leq\sup|a_f-b_f|\)</span>{% endraw %} therefore give {% raw %}<span class="math inline">\(|G(x)-G(x^{(i)})|\leq2M/n\)</span>{% endraw %}. McDiarmid yields</p>
{% raw %}<div class="math display">\[\mathbb P\{|G(X)-\mathbb EG(X)|&gt;t\}\leq2e^{-nt^2/(2M^2)},\qquad t&gt;0.\]</div>{% endraw %}
<p>Equivalently, for {% raw %}<span class="math inline">\(0&lt;\delta&lt;1\)</span>{% endraw %}, the deviation is at most {% raw %}<span class="math inline">\(\sqrt{(2M^2/n)\log(1/\delta)}\)</span>{% endraw %} with probability at least {% raw %}<span class="math inline">\(1-2\delta\)</span>{% endraw %}. Thus bounding {% raw %}<span class="math inline">\(\mathbb EG\)</span>{% endraw %} controls the uniform empirical error. For the half-line class this expectation can be bounded by counting its distinct values on the sample.</p>
<div id="thm:g-c-concentration" class="theorem" data-note-number="7" data-note-kind="Theorem">
<p><strong>Theorem 7</strong>.  Let {% raw %}<span class="math inline">\(X_1, \dots, X_n\)</span>{% endraw %} are i.i.d. real-valued random variables with distribution {% raw %}<span class="math inline">\(\mathbf P\,\,\!\!\)</span>{% endraw %} and cumulative distribution function {% raw %}<span class="math inline">\(F\)</span>{% endraw %}. Let {% raw %}<span class="math inline">\(\widehat F_n\)</span>{% endraw %} denote the empirical distribution function associated with the data {% raw %}<span class="math inline">\(X_1, \dots, X_n\)</span>{% endraw %}. Then, </p>

{% raw %}<span id="eq:g-c-concentration-quantity"></span><div class="math display">\[\begin{aligned}
 
            \mathbf P\,\,\!\!\left( \sup_{x \in \mathbb R} |\widehat F_n(x) - F(x)| \geq 8 \sqrt{\frac{\log(n+1)}{n}} + t \right) \leq e^{-\frac{nt^2}{2}} ~~\text{for all }t &gt; 0 ~.
        
\end{aligned}\tag{5}\]</div>{% endraw %}
</div>
<div class="proof">
<p><em>Proof.</em> Put {% raw %}<span class="math inline">\(G_n=\sup_x|\widehat F_n(x)-F(x)|\)</span>{% endraw %}. Right continuity makes this equal to the supremum over rational {% raw %}<span class="math inline">\(x\)</span>{% endraw %}, so it is measurable. Symmetrization gives <a href="#fn1" class="footnote-ref" id="fnref1" role="doc-noteref"><sup>1</sup></a></p>
<p><span id="eq:conditional-indep-bound"></span>{% raw %}<div class="math display">\[\mathbb EG_n\leq2\mathbb E_X\mathbb E_\varepsilon\sup_{f\in\mathcal F_1}\left|\frac1n\sum_{k=1}^n\varepsilon_k f(X_k)\right|.\tag{6}\]</div>{% endraw %}</p>
<p>For fixed observations, the vectors {% raw %}<span class="math inline">\((f(X_1),\ldots,f(X_n))\)</span>{% endraw %} as {% raw %}<span class="math inline">\(f\)</span>{% endraw %} varies over half-line indicators take at most {% raw %}<span class="math inline">\(n+1\)</span>{% endraw %} values: ordering the observations shows that the ones are added in successive tied groups. Each normalized coefficient vector has Euclidean norm at most {% raw %}<span class="math inline">\(1/\sqrt n\)</span>{% endraw %}. The Rademacher maximum bound from Example 6 of the concentration note therefore gives</p>
{% raw %}<div class="math display">\[\mathbb E_\varepsilon\sup_{f\in\mathcal F_1}\left|\frac1n\sum_k\varepsilon_k f(X_k)\right|\leq\sqrt{\frac{2\log(2(n+1))}{n}}.\]</div>{% endraw %}
<p>Consequently {% raw %}<span class="math inline">\(\mathbb EG_n\leq2\sqrt{2\log(2(n+1))/n}\leq4\sqrt{\log(n+1)/n}\)</span>{% endraw %}. Replacing one observation changes {% raw %}<span class="math inline">\(G_n\)</span>{% endraw %} by at most {% raw %}<span class="math inline">\(1/n\)</span>{% endraw %}. The one-sided McDiarmid inequality yields {% raw %}<span class="math inline">\(\mathbb P(G_n\geq\mathbb EG_n+t)\leq e^{-2nt^2}\)</span>{% endraw %}. This is stronger than the displayed bound (5), since its baseline {% raw %}<span class="math inline">\(8\sqrt{\log(n+1)/n}\)</span>{% endraw %} is larger and {% raw %}<span class="math inline">\(e^{-2nt^2}\leq e^{-nt^2/2}\)</span>{% endraw %}. Finally, for any fixed {% raw %}<span class="math inline">\(\eta&gt;0\)</span>{% endraw %}, the baseline is eventually below {% raw %}<span class="math inline">\(\eta/2\)</span>{% endraw %}, so (5) bounds {% raw %}<span class="math inline">\(\mathbb P(G_n&gt;\eta)\)</span>{% endraw %} by a summable exponential sequence. Borel–Cantelli for {% raw %}<span class="math inline">\(\eta=1/r\)</span>{% endraw %}, followed by a countable intersection, proves almost-sure uniform convergence. ◻</p>
</div>
<p>This clearly then implies the Glivenko-Cantelli theorem by Borel-Cantelli.</p>

</div>
<p>We return to the study of the uniform law of large numbers in Section <a href="{% post_url 2022-10-29-uniform-laws-via-entropy-and-symmetrization %}#sec:ulln" data-reference-type="ref" data-reference="sec:ulln">Uniform Laws via Entropy and Symmetrization</a>.</p>

<h3 data-note-section="1.2" id="covering">1.2. Covering</h3>
<p>Another way of looking at complexity of a function class is via <em>covering numbers</em>. For a set {% raw %}<span class="math inline">\(\Theta\)</span>{% endraw %} equipped with a metric {% raw %}<span class="math inline">\(d\)</span>{% endraw %}, let {% raw %}<span class="math inline">\(\Theta \subset \overline \Theta\)</span>{% endraw %} such that {% raw %}<span class="math inline">\(d(\cdot,\cdot)\)</span>{% endraw %} is defined on {% raw %}<span class="math inline">\(\overline \Theta\)</span>{% endraw %}. We say a set {% raw %}<span class="math inline">\(\{\theta_1, \dots, \theta_N\} \subset \overline \Theta\)</span>{% endraw %} is an <em>{% raw %}<span class="math inline">\(\varepsilon\)</span>{% endraw %}-cover</em> for {% raw %}<span class="math inline">\(\Theta\)</span>{% endraw %} is, for all {% raw %}<span class="math inline">\(\theta \in \Theta\)</span>{% endraw %}, there exists some {% raw %}<span class="math inline">\(j \in \{1, \dots, N\}\)</span>{% endraw %} such that {% raw %}<span class="math inline">\(d(\theta,\theta_j) \leq \varepsilon\)</span>{% endraw %}. Correspondingly, the <em>{% raw %}<span class="math inline">\(\varepsilon\)</span>{% endraw %}-covering number</em> for {% raw %}<span class="math inline">\(\Theta\)</span>{% endraw %} is the smallest {% raw %}<span class="math inline">\(N\)</span>{% endraw %} such that {% raw %}<span class="math inline">\(\{\theta_1, \dots, \theta_N\}\)</span>{% endraw %} is an {% raw %}<span class="math inline">\(\varepsilon\)</span>{% endraw %}-cover for {% raw %}<span class="math inline">\(\Theta\)</span>{% endraw %}, formally written as </p>

{% raw %}<div class="math display">\[\begin{aligned}
    N(\varepsilon, \Theta, d) \triangleq \inf \{ N \in \mathbb N : \text{$\{\theta_1, \dots, \theta_N\}$ is an $\varepsilon$-cover for $\Theta$} \} ~.
\end{aligned}\]</div>{% endraw %}
<p> We say {% raw %}<span class="math inline">\(\Theta\)</span>{% endraw %} is <em>totally bounded</em> if {% raw %}<span class="math inline">\(N(\varepsilon, \Theta, d)\)</span>{% endraw %} is finite for all {% raw %}<span class="math inline">\(\varepsilon &gt; 0\)</span>{% endraw %}.</p>

<p>In addition to looking at covering, we could also look at packing. An <em>{% raw %}<span class="math inline">\(\varepsilon\)</span>{% endraw %}-packing</em> of a set {% raw %}<span class="math inline">\(\Theta\)</span>{% endraw %} (with respect to metric {% raw %}<span class="math inline">\(d\)</span>{% endraw %}) is a set {% raw %}<span class="math inline">\(\{\theta_1, \dots, \theta_D\} \subset \Theta\)</span>{% endraw %} such that for all {% raw %}<span class="math inline">\(i \neq j\)</span>{% endraw %}, {% raw %}<span class="math inline">\(i,j \in \{1,\dots,D\}\)</span>{% endraw %}, {% raw %}<span class="math inline">\(d(\theta_i, \theta_j) &gt; \varepsilon\)</span>{% endraw %}. Corresponding, the <em>{% raw %}<span class="math inline">\(\varepsilon\)</span>{% endraw %}-packing number</em> of {% raw %}<span class="math inline">\(\Theta\)</span>{% endraw %} is the maximum number {% raw %}<span class="math inline">\(D\)</span>{% endraw %} such that {% raw %}<span class="math inline">\(\{\theta_1, \dots, \theta_D\}\)</span>{% endraw %} is an {% raw %}<span class="math inline">\(\varepsilon\)</span>{% endraw %}-packing of {% raw %}<span class="math inline">\(\Theta\)</span>{% endraw %}, formally written as </p>

{% raw %}<div class="math display">\[\begin{aligned}
    D(\varepsilon, \Theta, d) \triangleq \sup \{ D \in \mathbb N : \{\theta_1, \dots, \theta_D\} \text{ is an $\varepsilon$-packing of $\Theta$} \} ~.
\end{aligned}\]</div>{% endraw %}
<p> By definitions, we can understand the covering number as the minimum number of {% raw %}<span class="math inline">\(\varepsilon\)</span>{% endraw %}-balls required to cover {% raw %}<span class="math inline">\(\Theta\)</span>{% endraw %}. And, we can understand the packing number as the maximum number of {% raw %}<span class="math inline">\(\varepsilon\)</span>{% endraw %}-separated points in {% raw %}<span class="math inline">\(\Theta\)</span>{% endraw %}. Neither of these quantities need to be finite. The next inequalities show that covering and packing numbers measure the same size, up to a change of scale.</p>

<div id="lem:covering-packing-comparisons" class="lemma" data-note-number="8" data-note-kind="Lemma">
<p><strong>Lemma 8</strong>.  For any {% raw %}<span class="math inline">\(\varepsilon &gt; 0\)</span>{% endraw %}, </p>

{% raw %}<div class="math display">\[\begin{aligned}
        D(2\varepsilon, \Theta, d) \leq N(\varepsilon, \Theta, d) \leq D(\varepsilon, \Theta, d) ~.
    
\end{aligned}\]</div>{% endraw %}
</div>
<p>We can view this as a form of duality: the packing number is defined in terms of a supremum, but the covering number is defined in terms of an infimum.</p>

<div class="proof">
<p><em>Proof.</em> If {% raw %}<span class="math inline">\(D(\varepsilon,\Theta,d)&lt;\infty\)</span>{% endraw %}, a packing of largest cardinality exists because its possible finite sizes are integers with a finite supremum. Such a packing covers {% raw %}<span class="math inline">\(\Theta\)</span>{% endraw %} by closed {% raw %}<span class="math inline">\(\varepsilon\)</span>{% endraw %}-balls: otherwise an uncovered point could be added. Therefore {% raw %}<span class="math inline">\(N(\varepsilon)\leq D(\varepsilon)\)</span>{% endraw %}. If {% raw %}<span class="math inline">\(D(\varepsilon)=\infty\)</span>{% endraw %}, that inequality is automatic in the extended sense.</p>
<p>For the other inequality, take any finite {% raw %}<span class="math inline">\(\varepsilon\)</span>{% endraw %}-cover and any {% raw %}<span class="math inline">\(2\varepsilon\)</span>{% endraw %}-packing. Each covering ball contains at most one packing point, because two points in the same ball have distance at most {% raw %}<span class="math inline">\(2\varepsilon\)</span>{% endraw %}, contrary to strict separation. Thus every such packing has size at most the cover's size. Taking the supremum of packing sizes and then the minimum cover size proves {% raw %}<span class="math inline">\(D(2\varepsilon)\leq N(\varepsilon)\)</span>{% endraw %}. If there is no finite cover, the inequality is automatic. These arguments also apply to pseudometrics and to covers whose centers lie in an ambient space. ◻</p>
</div>
<div id="eg:covering-number-bound-euclidean" class="example" data-note-number="9" data-note-kind="Example">
<p><strong>Example 9</strong>.  We can explicitly bound the covering number in some examples. In {% raw %}<span class="math inline">\(\mathbb R^d\)</span>{% endraw %}, let {% raw %}<span class="math inline">\(B^d_2\)</span>{% endraw %} denote the Euclidean ball with respect to the Euclidean distance. Clearly, for {% raw %}<span class="math inline">\(\varepsilon \geq 1\)</span>{% endraw %}, {% raw %}<span class="math inline">\(N(\varepsilon, B^d_2, \lVert \cdot \rVert) = 1\)</span>{% endraw %}: the singleton {% raw %}<span class="math inline">\(\{0\}\)</span>{% endraw %} constitutes the desired {% raw %}<span class="math inline">\(\varepsilon\)</span>{% endraw %}-cover.</p>

<p>For the case {% raw %}<span class="math inline">\(\varepsilon \in (0,1)\)</span>{% endraw %}, we appeal to the <em>volume argument</em> to construct some desired bounds on the covering number. A packing gives disjoint small balls inside a slightly enlarged ball, so volume bounds its size. A cover gives a union containing the original ball, so volume bounds the number of balls from below. When we “overcover”, the sum of the volumes of these balls serve as an upper bound for the volume of the Euclidean ball, thereby giving us a lower bound on {% raw %}<span class="math inline">\(N(\varepsilon, B^d_2, \lVert \cdot \rVert)\)</span>{% endraw %}.</p>

<p>The formal descriptions are as follows. In the following, let {% raw %}<span class="math inline">\(\lambda\)</span>{% endraw %} denote the Lebesgue measure on {% raw %}<span class="math inline">\(\mathbb R^d\)</span>{% endraw %}. By an abuse of notation again, writing {% raw %}<span class="math inline">\(D = D(2\varepsilon, B^d_2, \lVert \cdot \rVert)\)</span>{% endraw %}, suppose {% raw %}<span class="math inline">\(\{\theta_1, \dots, \theta_D\}\)</span>{% endraw %} is the maximal {% raw %}<span class="math inline">\(2\varepsilon\)</span>{% endraw %}-packing of {% raw %}<span class="math inline">\(B^d_2\)</span>{% endraw %}. Since {% raw %}<span class="math inline">\(\lVert \theta - \widetilde\theta \rVert &gt; 2\varepsilon\)</span>{% endraw %} for all {% raw %}<span class="math inline">\(\theta, \widetilde\theta \in D\)</span>{% endraw %} such that {% raw %}<span class="math inline">\(\theta \neq \widetilde\theta\)</span>{% endraw %}, the balls {% raw %}<span class="math inline">\(\{B_\varepsilon (\theta) : \theta \in D\}\)</span>{% endraw %} must be disjoint. Meanwhile, it must be that {% raw %}<span class="math inline">\(B_\varepsilon (\theta)\)</span>{% endraw %} must be contained in {% raw %}<span class="math inline">\(B_{1+\varepsilon}(0)\)</span>{% endraw %} if {% raw %}<span class="math inline">\(\theta \in B^d_2\)</span>{% endraw %}. Therefore, we have the inequality </p>

{% raw %}<div class="math display">\[\begin{aligned}
        \sum_{t \in D} \lambda(B_\varepsilon(t)) \leq \lambda (B_{1+\varepsilon}(0)) ~.
    
\end{aligned}\]</div>{% endraw %}
<p> By the scaling properties of the Lebesgue measure, we have {% raw %}<span class="math inline">\(\lambda(B_\varepsilon (t)) = \varepsilon^d \lambda(B_1(0))\)</span>{% endraw %}. As such, we must have </p>

{% raw %}<div class="math display">\[\begin{aligned}
        |D| \leq \frac{\lambda(B_{1+\varepsilon}(0))}{\lambda(B_\varepsilon (0))} = \left( \frac{1+\varepsilon}{\varepsilon} \right)^d ~.
    
\end{aligned}\]</div>{% endraw %}
<p> Because this holds for every {% raw %}<span class="math inline">\(2\varepsilon\)</span>{% endraw %}-packing, we’ve shown an upper bound of {% raw %}<span class="math inline">\(\left( \frac{3}{2\varepsilon} \right)^d\)</span>{% endraw %} for {% raw %}<span class="math inline">\(\varepsilon &lt; \frac12\)</span>{% endraw %}. The lower bound follows from an analogous argument: if {% raw %}<span class="math inline">\(N\)</span>{% endraw %} is an {% raw %}<span class="math inline">\(\varepsilon\)</span>{% endraw %}-cover for {% raw %}<span class="math inline">\(B^d_2\)</span>{% endraw %}, then an identical argument via properties of the Lebesgue measure means that we have </p>

{% raw %}<div class="math display">\[\begin{aligned}
        |N| \geq \frac{\lambda(B^d_2)}{\lambda(B_\varepsilon(0))} = \frac{1}{\varepsilon^d} ~.
    
\end{aligned}\]</div>{% endraw %}
<p> Applying Lemma <a href="#lem:covering-packing-comparisons" data-reference-type="ref" data-reference="lem:covering-packing-comparisons">8</a>, this means we have </p>

{% raw %}<div class="math display">\[\begin{aligned}
        \frac{1}{\varepsilon^d} \leq N(\varepsilon, B^d_2, \lVert \cdot \rVert) \leq \left( \frac{3}{\varepsilon} \right)^d
    
\end{aligned}\]</div>{% endraw %}
<p> for {% raw %}<span class="math inline">\(\varepsilon \in (0,1)\)</span>{% endraw %}.</p>

</div>
<p>For the upper covering bound in Example 9, apply the displayed packing estimate at radius {% raw %}<span class="math inline">\(\varepsilon/2\)</span>{% endraw %}: {% raw %}<span class="math inline">\(N(\varepsilon)\leq D(\varepsilon)\leq(1+2/\varepsilon)^d\leq(3/\varepsilon)^d\)</span>{% endraw %} for {% raw %}<span class="math inline">\(0&lt;\varepsilon&lt;1\)</span>{% endraw %}. This specifies the scale change in Lemma 8.</p>
<div id="result-10" class="remark" data-note-number="10" data-note-kind="Remark">
<p><strong>Remark 10</strong> (Bounded need not mean totally bounded). For {% raw %}<span class="math inline">\(b&gt;0\)</span>{% endraw %}, let {% raw %}<span class="math inline">\(\mathscr C([0,1],b)\)</span>{% endraw %} be the convex functions on {% raw %}<span class="math inline">\([0,1]\)</span>{% endraw %} with sup-norm at most {% raw %}<span class="math inline">\(b\)</span>{% endraw %}. Define</p>
{% raw %}<div class="math display">\[f_j(x)=b\max\{1-2^jx,0\},\qquad j=1,2,\ldots.\]</div>{% endraw %}
<p>Each function is continuous and convex, has values in {% raw %}<span class="math inline">\([0,b]\)</span>{% endraw %}, and is linear from {% raw %}<span class="math inline">\((0,b)\)</span>{% endraw %} to {% raw %}<span class="math inline">\((2^{-j},0)\)</span>{% endraw %} before remaining zero. If {% raw %}<span class="math inline">\(j&lt;k\)</span>{% endraw %}, evaluation at {% raw %}<span class="math inline">\(x=2^{-(j+1)}\)</span>{% endraw %} gives {% raw %}<span class="math inline">\(f_j(x)=b/2\)</span>{% endraw %} and {% raw %}<span class="math inline">\(f_k(x)=0\)</span>{% endraw %}. Thus every pair of distinct functions is at least {% raw %}<span class="math inline">\(b/2\)</span>{% endraw %} apart in sup-norm. A ball of radius less than {% raw %}<span class="math inline">\(b/4\)</span>{% endraw %} contains at most one of them, so no finite collection of such balls covers the class. For {% raw %}<span class="math inline">\(b=0\)</span>{% endraw %}, the class consists only of the zero function and is totally bounded.</p>
</div>

<div id="result-11" class="example" data-note-number="11" data-note-kind="Example">
<p><strong>Example 11</strong> (Boolean hypercube).  Let {% raw %}<span class="math inline">\(\mathbb H^d = \{-1,1\}^d\)</span>{% endraw %} denote the {% raw %}<span class="math inline">\(d\)</span>{% endraw %}-dimensional hypercube. Define the <em>rescaled Hamming metric</em> </p>

{% raw %}<div class="math display">\[\begin{aligned}
        d_H (\theta, \widetilde \theta) \triangleq \frac1d \sum_{1 \leq i \leq d} \mathbb 1 \{ \theta_i \neq \widetilde \theta_i \} ~.
    
\end{aligned}\]</div>{% endraw %}
<p> For {% raw %}<span class="math inline">\(0\leq\varepsilon\leq1\)</span>{% endraw %}, to derive an upper bound on the {% raw %}<span class="math inline">\(\varepsilon\)</span>{% endraw %}-covering number, construct the set {% raw %}<span class="math inline">\(S = \{1, 2, \dots, \lceil (1-\varepsilon)d \rceil\}\)</span>{% endraw %}. Then, denote {% raw %}<span class="math inline">\(U(\varepsilon) \triangleq \{\theta \in \mathbb H^d : \theta_i = 1 \:\: \text{for all } i \notin S\}\)</span>{% endraw %}. Therefore, for any {% raw %}<span class="math inline">\(\theta \in \mathbb H^d\)</span>{% endraw %}, there exists a {% raw %}<span class="math inline">\(\widetilde \theta \in U(\varepsilon)\)</span>{% endraw %} such that {% raw %}<span class="math inline">\(d_H (\theta, \widetilde \theta) \leq \varepsilon\)</span>{% endraw %}. It then follows that </p>

{% raw %}<div class="math display">\[\begin{aligned}
        \frac{\log N(\varepsilon, \mathbb H^d, d_H)}{\log 2} \leq \lceil d(1-\varepsilon) \rceil ~.
    
\end{aligned}\]</div>{% endraw %}
<p> A more precise argument is as follows: suppose there is already an {% raw %}<span class="math inline">\(\varepsilon\)</span>{% endraw %}-packing. Then, {% raw %}<span class="math inline">\(\frac{\varepsilon}{2}\)</span>{% endraw %}-balls do not intersect. Hence, the total number of elements in the union of those balls is at most {% raw %}<span class="math inline">\(2^d\)</span>{% endraw %}. By setting {% raw %}<span class="math inline">\(\widetilde\varepsilon \triangleq \frac2d \lfloor \frac{\varepsilon d}{2} \rfloor \leq \varepsilon\)</span>{% endraw %}, we have </p>

{% raw %}<div class="math display">\[\begin{aligned}
        D(\varepsilon, \mathbb H^d, d_H) \sum_{0 \leq i \leq \widetilde\varepsilon d/2} \binom{d}{i} \le 2^d
    
\end{aligned}\]</div>{% endraw %}
<p> which is true if and only if </p>

{% raw %}<div class="math display">\[\begin{aligned}
        \log D(\varepsilon, \mathbb H^d, d_H)
        \leq - \log \sum_{0 \leq i \leq \widetilde\varepsilon d/2}  \binom{d}{i} 2^{-d}
        = - \log \mathbf P\,\,\!\!(Z_d \le \frac{1}{2} \widetilde\varepsilon d) ~,
    
\end{aligned}\]</div>{% endraw %}
<p> where {% raw %}<span class="math inline">\(Z_d\)</span>{% endraw %} is the sum of {% raw %}<span class="math inline">\(d\)</span>{% endraw %} many {% raw %}<span class="math inline">\(\operatorname{Ber}(\frac12)\)</span>{% endraw %} random variables. It then follows from the lower bound on binomial tails that </p>

{% raw %}<div class="math display">\[\begin{aligned}
        \frac1d \log D(\varepsilon, \mathbb H^d, d_H) \le \operatorname{KL} \left( \frac{\widetilde\varepsilon}{2}, \frac12 \right) + \frac1d \log(d + 1) ~,
    
\end{aligned}\]</div>{% endraw %}
<p> where </p>

{% raw %}<div class="math display">\[\begin{aligned}
       \operatorname{KL} \left( \frac{\varepsilon}{2}, \frac12 \right)  \triangleq  \frac{\varepsilon}{2} \log \frac{{\varepsilon}/{2}}{1/2} + \left( 1 - \frac{\varepsilon}{2} \right) \log \frac{1 - {\varepsilon}/{2}}{{1}/{2}}
    
\end{aligned}\]</div>{% endraw %}
<p> is the Kullback-Leibler divergence between Bernoulli distributions with parameter {% raw %}<span class="math inline">\(\frac{\varepsilon}{2}\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\frac12\)</span>{% endraw %}.</p>

</div>
<p>Here is the binomial lower bound used above. Put {% raw %}<span class="math inline">\(r=\lfloor\varepsilon d/2\rfloor\)</span>{% endraw %} and {% raw %}<span class="math inline">\(p=r/d=\widetilde\varepsilon/2\)</span>{% endraw %}. For {% raw %}<span class="math inline">\(0&lt;r&lt;d\)</span>{% endraw %}, the term at {% raw %}<span class="math inline">\(r\)</span>{% endraw %} is a mode of the {% raw %}<span class="math inline">\(\operatorname{Bin}(d,p)\)</span>{% endraw %} mass function (compare consecutive mass ratios), and hence is at least {% raw %}<span class="math inline">\(1/(d+1)\)</span>{% endraw %}. It follows that</p>
{% raw %}<div class="math display">\[\binom dr\geq\frac{e^{d[-p\log p-(1-p)\log(1-p)]}}{d+1},\qquad\mathbb P\{\operatorname{Bin}(d,1/2)\leq r\}\geq\frac{e^{-d\operatorname{KL}(p,1/2)}}{d+1}.\]</div>{% endraw %}
<p>The endpoint {% raw %}<span class="math inline">\(r=0\)</span>{% endraw %} follows directly from probability {% raw %}<span class="math inline">\(2^{-d}\)</span>{% endraw %}, with {% raw %}<span class="math inline">\(0\log0=0\)</span>{% endraw %}. Insert this lower bound into the reciprocal packing bound to obtain the displayed KL estimate. The closed Hamming balls used there are disjoint because their integer radii sum to {% raw %}<span class="math inline">\(2r\leq\varepsilon d\)</span>{% endraw %}, while packing distances are strictly greater than {% raw %}<span class="math inline">\(\varepsilon d\)</span>{% endraw %}.</p>
<p>The following result is derived using the arguments of the <em>Varshamov-Gilbert lemma</em>.</p>

<div id="lem:gv-bound-extension" class="lemma" data-note-number="12" data-note-kind="Lemma">
<p><strong>Lemma 12.</strong> Let {% raw %}<span class="math inline">\(N\ge2\)</span>{% endraw %}, let {% raw %}<span class="math inline">\(2\le s\le d\)</span>{% endraw %} be even, and put {% raw %}<span class="math inline">\(U=\{u\in\{0,1,\ldots,N-1\}^d:\|u\|_0=s\}\)</span>{% endraw %}. For the normalized Hamming metric {% raw %}<span class="math inline">\(d_H(u,v)=d^{-1}\sum_i\mathbf1\{u_i\ne v_i\}\)</span>{% endraw %}, set {% raw %}<span class="math inline">\(D=D(s/(2d),U,d_H)\)</span>{% endraw %}. If {% raw %}<span class="math inline">\(s\le Nd/25\)</span>{% endraw %}, then</p>
{% raw %}<div class="math display">\[\log D\ge\frac{s}{64}\log\frac{Nd}{s}.\]</div>{% endraw %}
<p>When {% raw %}<span class="math inline">\(N=3\)</span>{% endraw %} and {% raw %}<span class="math inline">\(s\le d/8\)</span>{% endraw %}, the following bound also holds:</p>
{% raw %}<div class="math display">\[\log D\ge\frac{s}{64}\log\frac{ed}{s}.\]</div>{% endraw %}
</div>
<div class="proof">
<p><em>Proof.</em> Write {% raw %}<span class="math inline">\(H=dd_H\)</span>{% endraw %} for the unnormalized number of differing coordinates. A closed {% raw %}<span class="math inline">\(H\)</span>{% endraw %}-ball of radius {% raw %}<span class="math inline">\(s/2\)</span>{% endraw %} has at most {% raw %}<span class="math inline">\(\binom d{s/2}N^{s/2}\)</span>{% endraw %} points, even before restricting to {% raw %}<span class="math inline">\(U\)</span>{% endraw %}: choose a set of {% raw %}<span class="math inline">\(s/2\)</span>{% endraw %} coordinates containing all changes and assign their values. A maximal packing with pairwise {% raw %}<span class="math inline">\(H\)</span>{% endraw %}-distance greater than {% raw %}<span class="math inline">\(s/2\)</span>{% endraw %} covers {% raw %}<span class="math inline">\(U\)</span>{% endraw %} by these balls. Equivalently, whenever their union does not cover {% raw %}<span class="math inline">\(U\)</span>{% endraw %}, an uncovered point has distance greater than {% raw %}<span class="math inline">\(s/2\)</span>{% endraw %} from every selected point and can be added. Hence</p>
{% raw %}<div class="math display">\[D\ge\frac{|U|}{\binom d{s/2}N^{s/2}}
=\frac{\binom ds(N-1)^s}{\binom d{s/2}N^{s/2}}
\ge\left[\frac{Nd}{2es}\left(1-\frac1N\right)^2\right]^{s/2}.\]</div>{% endraw %}
<p>Here we used {% raw %}<span class="math inline">\(\binom ds\ge(d/s)^s\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\binom d{s/2}\le(2ed/s)^{s/2}\)</span>{% endraw %}. Since {% raw %}<span class="math inline">\((1-1/N)^2\ge1/4\)</span>{% endraw %}, writing {% raw %}<span class="math inline">\(R=Nd/s\ge25\)</span>{% endraw %} gives {% raw %}<span class="math inline">\(\log D\ge(s/2)\log(R/(8e))\ge(s/64)\log R\)</span>{% endraw %}; the last inequality follows from {% raw %}<span class="math inline">\(25&gt;(8e)^{32/31}\)</span>{% endraw %}.</p>
<p>For the final assertion use the sharper factor {% raw %}<span class="math inline">\((1-1/3)^2=4/9\)</span>{% endraw %}. With {% raw %}<span class="math inline">\(q=d/s\ge8\)</span>{% endraw %}, the same bound gives {% raw %}<span class="math inline">\(\log D\ge(s/2)\log(2q/(3e))\)</span>{% endraw %}. The inequality {% raw %}<span class="math inline">\(32\log(2q/(3e))\ge\log(eq)\)</span>{% endraw %} holds at {% raw %}<span class="math inline">\(q=8\)</span>{% endraw %} and its left side minus its right side increases with {% raw %}<span class="math inline">\(q\)</span>{% endraw %}. This proves the stated consequence without invoking the incompatible condition {% raw %}<span class="math inline">\(3d/s\ge25\)</span>{% endraw %} at its endpoint. □</p>
</div>

<section id="footnotes" class="footnotes footnotes-end-of-document" role="doc-endnotes">
<hr />
<ol>
<li id="fn1"><p>In (6), {% raw %}<span class="math inline">\(\mathbb E_\varepsilon\)</span>{% endraw %} integrates the signs with the observations fixed; {% raw %}<span class="math inline">\(\mathbb E_X\)</span>{% endraw %} then integrates the observations. Their composition is the joint expectation, by independence and Tonelli. The absolute value remains inside the supremum. <a href="#fnref1" class="footnote-back" role="doc-backlink">↩︎</a></p>
</li>
</ol>
</section>

<nav class="note-related" aria-label="Related notes"><p>Related notes: <a href="{% post_url 2022-09-13-concentration-inequalities %}">Concentration Inequalities</a>; <a href="{% post_url 2022-10-29-uniform-laws-via-entropy-and-symmetrization %}">Uniform Laws via Entropy and Symmetrization</a>.</p></nav>

<nav class="note-series" aria-label="Notes in this series"><p>Previous: <a href="{% post_url 2022-09-17-log-sobolev-inequality %}">Log-Sobolev Inequality</a> · Next: <a href="{% post_url 2022-10-04-maximal-inequalities-via-concentration %}">Maximal Inequalities via Concentration</a></p></nav>

</div>
