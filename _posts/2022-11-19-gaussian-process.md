---
layout: "post"
title: "Gaussian Process"
date: "2022-11-19"
tags: ["statistics", "empirical processes"]
excerpt: "Gaussian Process. Notes on empirical processes."
note_series: "Empirical processes"
note_source: "assets/notes/Overleaf Projects (32 items)/Empirical Process/stats.tex"
redirect_from: ["/2026/06/16/gaussian-process/"]
---

<div class="note-content" markdown="0">

<p>A Gaussian process is determined by its mean and covariance, and the variance of an increment defines a natural distance between indices. This distance connects probability with geometry: separated indices can force a large supremum, while covers can bound it from above. We begin with independent Gaussian variables, then control the supremum of a separable process by finite approximations.</p>

<div id="gaussian-process" data-note-section="title">

</div>
<p>A stochastic process {% raw %}<span class="math inline">\(\{X_t\}_{t \in T}\)</span>{% endraw %} (with an infinite index set {% raw %}<span class="math inline">\(T\)</span>{% endraw %}) is said to be a <em>centred Gaussian process</em> if {% raw %}<span class="math inline">\((X_{t_1}, \dots, X_{t_n})\)</span>{% endraw %} is centred and jointly Gaussian for all {% raw %}<span class="math inline">\(n \geq 1\)</span>{% endraw %} and {% raw %}<span class="math inline">\(t_1, \dots, t_n \in T\)</span>{% endraw %}. Note that a Gaussian process satisfies the equality {% raw %}<span class="math inline">\(\mathbb{E} e^{\lambda(X_t - X_s)} = e^{\frac{\lambda^2}{2} \mathbb{E}[(X_t-X_s)^2]}\)</span>{% endraw %}, which gives the <em>canonical metric</em> {% raw %}<span class="math inline">\(d(s,t) = (\mathbb{E}[(X_t-X_s)^2])^{\frac12}\)</span>{% endraw %}. Gaussian processes will serve two purposes here: one, it helps us develop lower bounds for chaining; two, comparison arguments transfer some of the resulting bounds to other processes.</p>

<p>To start, we look at the instance when the index set {% raw %}<span class="math inline">\(T\)</span>{% endraw %} is finite. This reduces to studying the case of having finitely many Gaussian random variables. We begin with the following bounds on the supremum of Gaussian random variables.</p>

<div id="lem:iid-gaussian-rvs-upper-lower-bounds" class="lemma" data-note-number="1" data-note-kind="Lemma">
<p><strong>Lemma 1</strong>.  Let {% raw %}<span class="math inline">\(X_1, \dots, X_n\)</span>{% endraw %} be i.i.d. Gaussian random variables with mean zero and variance {% raw %}<span class="math inline">\(\sigma^2\)</span>{% endraw %}. Then, </p>

{% raw %}<div class="math display">\[\begin{aligned}
        c \sigma \sqrt{\log n} \leq \mathbb{E} \sup_{1 \leq i \leq n} X_i \leq \sigma \sqrt{2\log n} ~.
    
\end{aligned}\]</div>{% endraw %}
</div>
<div class="proof">
<p><em>Proof.</em> The upper bound follows from Proposition <a href="{% post_url 2022-10-04-maximal-inequalities-via-concentration %}#prop:maximal-inequality-chernoff" data-reference-type="ref" data-reference="prop:maximal-inequality-chernoff">3</a>. For the lower bound, scale to {% raw %}<span class="math inline">\(\sigma=1\)</span>{% endraw %} and put {% raw %}<span class="math inline">\(M_n=\max_{i\leq n}X_i\)</span>{% endraw %}. For {% raw %}<span class="math inline">\(\eta\geq0\)</span>{% endraw %}, </p>

{% raw %}<div class="math display">\[\mathbb{E} M_n\geq\eta\Pr(M_n&gt;\eta)+\mathbb{E}(X_1\wedge0).\]</div>{% endraw %}
<p> Writing {% raw %}<span class="math inline">\(x=\eta+u\)</span>{% endraw %} and using {% raw %}<span class="math inline">\((\eta+u)^2\leq2\eta^2+2u^2\)</span>{% endraw %} gives </p>

{% raw %}<div class="math display">\[\Pr(X_1&gt;\eta)=\frac1{\sqrt{2\pi}}\int_0^\infty e^{-(\eta+u)^2/2}\,du\geq c_0e^{-\eta^2},\qquad c_0=\frac1{2\sqrt2}.\]</div>{% endraw %}
<p> For all sufficiently large {% raw %}<span class="math inline">\(n\)</span>{% endraw %}, take {% raw %}<span class="math inline">\(\eta_n=\sqrt{\log(c_0n)}\)</span>{% endraw %}. Then {% raw %}<span class="math inline">\(n\Pr(X_1&gt;\eta_n)\geq1\)</span>{% endraw %}, so independence gives {% raw %}<span class="math inline">\(\Pr(M_n&gt;\eta_n)\geq1-e^{-1}\)</span>{% endraw %}. Therefore, </p>

{% raw %}<div class="math display">\[\mathbb{E} M_n\geq(1-e^{-1})\sqrt{\log(c_0n)}-\frac1{\sqrt{2\pi}}\geq c_1\sqrt{\log n}\]</div>{% endraw %}
<p> for sufficiently large {% raw %}<span class="math inline">\(n\)</span>{% endraw %}. For each of the finitely many remaining {% raw %}<span class="math inline">\(n\geq2\)</span>{% endraw %}, {% raw %}<span class="math inline">\(\mathbb{E} M_n\geq\mathbb{E}\max(X_1,X_2)=1/\sqrt\pi&gt;0\)</span>{% endraw %}, so reduce the universal constant if necessary. The case {% raw %}<span class="math inline">\(n=1\)</span>{% endraw %} is immediate. Multiplying by {% raw %}<span class="math inline">\(\sigma\)</span>{% endraw %} proves the result. ◻</p>

</div>
<p>We next pass from finite collections to infinite index sets {% raw %}<span class="math inline">\(T\)</span>{% endraw %}. Separability lets us approximate the supremum by maxima over increasing finite sets. A bound uniform over those sets can then pass to the limit.</p>

<div id="thm:gaussian-process-has-subgaussian-increments" class="theorem" data-note-number="2" data-note-kind="Theorem">
<p><strong>Theorem 2</strong>.  Let {% raw %}<span class="math inline">\(\{X_t\}_{t \in T}\)</span>{% endraw %} be a separable, centred Gaussian process such that {% raw %}<span class="math inline">\(P (\sup_{t \in T} |X_t| &lt; \infty) &gt; 0\)</span>{% endraw %}. Let {% raw %}<span class="math inline">\(f:\mathbb R\to\mathbb R\)</span>{% endraw %} be even and convex (hence nondecreasing on {% raw %}<span class="math inline">\([0,\infty)\)</span>{% endraw %}), and let {% raw %}<span class="math inline">\(g\sim\mathcal{N}(0,1)\)</span>{% endraw %}. Then,</p>

<ol>
<li><p>{% raw %}<span class="math inline">\(\sigma = \sigma(X) \triangleq \sup_{t \in T} \sqrt{\mathbb{E} X_t^2} &lt; \infty\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\mathbb{E} \sup_{t \in T} |X_t| &lt; \infty\)</span>{% endraw %}.</p></li>
<li><p>The following inequalities hold true: </p>

{% raw %}<span id="eq:gaussian-process-has-subgaussian-increments-1"></span><span id="eq:gaussian-process-has-subgaussian-increments-2"></span><div class="math display">\[\begin{aligned}
             \mathbb{E} f \left( \sup_{t \in T} |X_t| - \mathbb{E} \sup_{t \in T} |X_t| \right) &amp;\leq \mathbb{E} f \left( \frac{\pi\sigma}{2} g \right) ~, \\
             \mathbf P\,\,\!\!\left( \left| \sup_{t \in T} |X_t| - \mathbb{E} \sup_{t \in T} |X_t| \right| &gt; t \right) &amp;\leq 2 e^{-\frac{t^2}{2\pi^2 \sigma^2}} ~.
        
\end{aligned}\tag{1}\]</div>{% endraw %}</li>
</ol>
</div>
<div class="proof">
<p><em>Proof.</em> By separability, choose {% raw %}<span class="math inline">\(t_1,t_2,\ldots\)</span>{% endraw %} so that {% raw %}<span class="math inline">\(S=\sup_{t\in T}|X_t|=\sup_j|X_{t_j}|\)</span>{% endraw %} almost surely. The assumption gives finite {% raw %}<span class="math inline">\(M\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\delta&gt;0\)</span>{% endraw %} with {% raw %}<span class="math inline">\(\Pr(S\leq M)\geq\delta\)</span>{% endraw %}. Since {% raw %}<span class="math inline">\(\Pr(|X_t|\leq M)\geq\delta\)</span>{% endraw %} for every {% raw %}<span class="math inline">\(t\)</span>{% endraw %}, the normal distribution immediately implies {% raw %}<span class="math inline">\(\sigma=\sup_t(\mathbb{E} X_t^2)^{1/2}&lt;\infty\)</span>{% endraw %}. If {% raw %}<span class="math inline">\(\sigma=0\)</span>{% endraw %}, all claims are immediate.</p>

<p>Put {% raw %}<span class="math inline">\(S_n=\max_{j\leq n}|X_{t_j}|\)</span>{% endraw %}. A finite Gaussian vector has a representation {% raw %}<span class="math inline">\((X_{t_1},\ldots,X_{t_n})=AG\)</span>{% endraw %} with {% raw %}<span class="math inline">\(G\)</span>{% endraw %} standard normal. The function {% raw %}<span class="math inline">\(F(G)=\max_j|(AG)_j|\)</span>{% endraw %} is {% raw %}<span class="math inline">\(\sigma\)</span>{% endraw %}-Lipschitz, because every row of {% raw %}<span class="math inline">\(A\)</span>{% endraw %} has Euclidean norm at most {% raw %}<span class="math inline">\(\sigma\)</span>{% endraw %}. Gaussian concentration, obtained from the log-Sobolev inequality in Theorem <a href="{% post_url 2022-09-17-log-sobolev-inequality %}#thm:log-sobolev-gaussian-Rn" data-reference-type="ref" data-reference="thm:log-sobolev-gaussian-Rn">10</a>, gives </p>

{% raw %}<div class="math display">\[\Pr(|S_n-\mathbb{E} S_n|&gt;r)\leq2e^{-r^2/(2\sigma^2)}.\]</div>{% endraw %}
<p> Choose {% raw %}<span class="math inline">\(r\)</span>{% endraw %} so that the right-hand side is less than {% raw %}<span class="math inline">\(\delta\)</span>{% endraw %}. Since {% raw %}<span class="math inline">\(\Pr(S_n\leq M)\geq\delta\)</span>{% endraw %}, this forces {% raw %}<span class="math inline">\(\mathbb{E} S_n\leq M+r\)</span>{% endraw %}. Monotone convergence now gives {% raw %}<span class="math inline">\(\mathbb{E} S&lt;\infty\)</span>{% endraw %}, and hence {% raw %}<span class="math inline">\(S&lt;\infty\)</span>{% endraw %} almost surely. In particular, {% raw %}<span class="math inline">\(S_n\to S\)</span>{% endraw %} in {% raw %}<span class="math inline">\(L^1\)</span>{% endraw %}. Passing to the limit in the finite-dimensional concentration bound proves the stated tail bound (in fact, it gives the stronger denominator {% raw %}<span class="math inline">\(2\sigma^2\)</span>{% endraw %}).</p>

<p>To compare convex functions of the fluctuation, introduce an independent copy and apply conditional Jensen. Let {% raw %}<span class="math inline">\(G&#x27;\)</span>{% endraw %} be an independent standard normal vector. Conditional Jensen gives </p>

{% raw %}<div class="math display">\[\mathbb{E} f(F(G)-\mathbb{E}F(G))\leq\mathbb{E} f(F(G)-F(G&#x27;)).\]</div>{% endraw %}
<p> Along the Gaussian rotation {% raw %}<span class="math inline">\(G_u=G\cos u+G&#x27;\sin u\)</span>{% endraw %}, {% raw %}<span class="math inline">\(0\leq u\leq\pi/2\)</span>{% endraw %}, write {% raw %}<span class="math inline">\(H_u=-G\sin u+G&#x27;\cos u\)</span>{% endraw %}. Then {% raw %}<span class="math inline">\(G_u\)</span>{% endraw %} and {% raw %}<span class="math inline">\(H_u\)</span>{% endraw %} are independent standard normal vectors and </p>

{% raw %}<div class="math display">\[F(G&#x27;)-F(G)=\int_0^{\pi/2}\langle\nabla F(G_u),H_u\rangle\,du.\]</div>{% endraw %}
<p> The identity holds for Lipschitz {% raw %}<span class="math inline">\(F\)</span>{% endraw %} by approximation, or by absolute continuity along almost every path. Jensen over the interval, evenness of {% raw %}<span class="math inline">\(f\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(\|\nabla F\|\leq\sigma\)</span>{% endraw %} give </p>

{% raw %}<div class="math display">\[\mathbb{E} f(F(G)-F(G&#x27;))\leq\frac2\pi\int_0^{\pi/2}\mathbb{E} f\left(\frac\pi2\langle\nabla F(G_u),H_u\rangle\right)du\leq\mathbb{E} f\left(\frac{\pi\sigma}{2}g\right).\]</div>{% endraw %}
<p> Conditionally on {% raw %}<span class="math inline">\(G_u\)</span>{% endraw %}, the inner product is normal with standard deviation at most {% raw %}<span class="math inline">\(\sigma\)</span>{% endraw %}. Apply this to {% raw %}<span class="math inline">\(S_n\)</span>{% endraw %} and then use {% raw %}<span class="math inline">\(L^1\)</span>{% endraw %} convergence and Fatou’s lemma to obtain the comparison for {% raw %}<span class="math inline">\(S\)</span>{% endraw %}. ◻</p>

</div>
<p>For completeness, the finite-dimensional concentration step can be obtained without assuming differentiability of the maximum. If {% raw %}<span class="math inline">\(V:\mathbb R^m\to\mathbb R\)</span>{% endraw %} is {% raw %}<span class="math inline">\(\sigma\)</span>{% endraw %}-Lipschitz, smooth it by convolution; the smoothed functions remain {% raw %}<span class="math inline">\(\sigma\)</span>{% endraw %}-Lipschitz and converge pointwise. Their at-most-linear growth gives integrability of every exponential under the Gaussian law. For a smooth approximation put {% raw %}<span class="math inline">\(\Lambda(\lambda)=\log\mathbb Ee^{\lambda V(G)}\)</span>{% endraw %}. Applying the Gaussian log-Sobolev inequality to {% raw %}<span class="math inline">\(e^{\lambda V/2}\)</span>{% endraw %} gives</p>

{% raw %}<div class="math display">\[\lambda\Lambda'(\lambda)-\Lambda(\lambda)\le\lambda^2\sigma^2/2.\]</div>{% endraw %}

<p>Integrate {% raw %}<span class="math inline">\((\Lambda(\lambda)/\lambda)'\le\sigma^2/2\)</span>{% endraw %}, starting from {% raw %}<span class="math inline">\(\Lambda(\lambda)/\lambda\to\mathbb EV\)</span>{% endraw %} as {% raw %}<span class="math inline">\(\lambda\downarrow0\)</span>{% endraw %}. Thus {% raw %}<span class="math inline">\(\mathbb Ee^{\lambda(V-\mathbb EV)}\le e^{\lambda^2\sigma^2/2}\)</span>{% endraw %}. Apply this to {% raw %}<span class="math inline">\(V\)</span>{% endraw %} and {% raw %}<span class="math inline">\(-V\)</span>{% endraw %}, optimize the exponential Markov bound, and pass through the smoothing by domination. This proves the two-sided concentration bound used above.</p>

<p>The rotation comparison also passes through smoothing: the gradient bound is preserved, and the finite convex function {% raw %}<span class="math inline">\(f\)</span>{% endraw %} is continuous and bounded below by {% raw %}<span class="math inline">\(f(0)\)</span>{% endraw %}. Conditional normality and even convex monotonicity bound the expectation at every smoothing level by the same {% raw %}<span class="math inline">\(\mathbb Ef((\pi\sigma/2)g)\)</span>{% endraw %}, possibly infinite. Fatou applied to {% raw %}<span class="math inline">\(f-f(0)\)</span>{% endraw %} passes first to the nonsmooth maximum, and then to the increasing finite maxima {% raw %}<span class="math inline">\(S_n\)</span>{% endraw %}, whose means converge by the preceding argument. These passages do not assume in advance that the infinite supremum is integrable.</p>
<div id="prop:gaussian-process-moment-bound" class="proposition" data-note-number="3" data-note-kind="Proposition">
<p><strong>Proposition 3</strong>.  Let {% raw %}<span class="math inline">\(\{X_t\}_{t \in T}\)</span>{% endraw %} be a separable, centred Gaussian process such that {% raw %}<span class="math inline">\(P (\sup_{t \in T} |X_t| &lt; \infty) &gt; 0\)</span>{% endraw %}. Then, for all {% raw %}<span class="math inline">\(p \geq 1\)</span>{% endraw %}, </p>

{% raw %}<div class="math display">\[\begin{aligned}
        \bigg( \mathbb{E} \bigg[ \sup_{t \in T} \: |X_t| \bigg]^p \bigg)^{\frac1p} \lesssim \sqrt{p} \: \mathbb{E} \sup_{t \in T} \: |X_t| ~.
    
\end{aligned}\]</div>{% endraw %}
</div>
<div class="proof">
<p><em>Proof.</em> Put {% raw %}<span class="math inline">\(S=\sup_{t\in T}|X_t|\)</span>{% endraw %}. The preceding convex comparison with {% raw %}<span class="math inline">\(f(x)=|x|^p\)</span>{% endraw %} gives </p>

{% raw %}<div class="math display">\[\|S-\mathbb{E}S\|_p\leq\frac{\pi\sigma}{2}\|g\|_p.\]</div>{% endraw %}
<p> For a standard normal {% raw %}<span class="math inline">\(g\)</span>{% endraw %}, direct integration gives </p>

{% raw %}<div class="math display">\[\mathbb{E}|g|^p=\frac{2^{p/2}\Gamma((p+1)/2)}{\sqrt\pi},\qquad \|g\|_p\lesssim\sqrt p\quad(p\geq1),\]</div>{% endraw %}
<p> where the second bound follows from Stirling’s formula, with a fixed constant covering bounded {% raw %}<span class="math inline">\(p\)</span>{% endraw %}. Also, </p>

{% raw %}<div class="math display">\[\mathbb{E}S\geq\sup_t\mathbb{E}|X_t|=\sqrt{2/\pi}\,\sigma.\]</div>{% endraw %}
<p> Minkowski’s inequality therefore yields </p>

{% raw %}<div class="math display">\[\|S\|_p\leq\mathbb{E}S+\|S-\mathbb{E}S\|_p\lesssim\sqrt p\,\mathbb{E}S.\]</div>{% endraw %}
<p> ◻</p>

</div>
<p>For lower bounds, a separated set of indices supplies a finite collection of process values with increment variances bounded away from zero. The next step is to compare this collection with independent Gaussian variables. Heuristically, if {% raw %}<span class="math inline">\(D\)</span>{% endraw %} is a maximal {% raw %}<span class="math inline">\(\varepsilon\)</span>{% endraw %}-packing of {% raw %}<span class="math inline">\(T\)</span>{% endraw %} and suppose {% raw %}<span class="math inline">\(\{X_t\}_{t\in D}\)</span>{% endraw %} is set of independent random variables, then, we should expect to see {% raw %}<span class="math inline">\(\mathbb{E} \sup_{t \in T} X_t \geq \mathbb{E} \sup_{t \in D} X_t \gtrsim \sqrt{\log |D|}\)</span>{% endraw %}. Here, note a feature about the lower bounds: we require a subset of {% raw %}<span class="math inline">\(T\)</span>{% endraw %} that is well-separated, so as to apply the insights from the development of maximal inequalities. These packings are naturally obtained in terms of a packing of {% raw %}<span class="math inline">\(T\)</span>{% endraw %}. Note that here, we avoid measurability issues by studying stochastic processes through their finite-dimensional marginals, i.e. {% raw %}<span class="math inline">\(\mathbb{E} \sup_{t \in T} \: X_t\)</span>{% endraw %} ought to be understood formally as {% raw %}<span class="math inline">\(\sup_{T_0 \subset T} \mathbb{E} \sup_{t \in T_0} X_t\)</span>{% endraw %}, where the outer supremum is taken over all finite subsets {% raw %}<span class="math inline">\(T_0\)</span>{% endraw %} of {% raw %}<span class="math inline">\(T\)</span>{% endraw %}. We next derive the comparison inequalities needed for this bound.</p>


<nav class="note-related" aria-label="Related notes"><p>Related notes: <a href="{% post_url 2022-10-04-maximal-inequalities-via-concentration %}">Maximal Inequalities via Concentration</a>; <a href="{% post_url 2022-09-17-log-sobolev-inequality %}">Log-Sobolev Inequality</a>.</p></nav>

<nav class="note-series" aria-label="Notes in this series"><p>Previous: <a href="{% post_url 2022-11-15-donsker-class %}">Donsker Class</a> · Next: <a href="{% post_url 2022-11-22-gaussian-comparison-and-sudakovs-inequality %}">Gaussian Comparison and Sudakov’s Inequality</a></p></nav>

</div>
