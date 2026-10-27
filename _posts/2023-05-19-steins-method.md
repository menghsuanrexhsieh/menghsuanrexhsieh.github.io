---
layout: "post"
title: "Stein’s Method"
date: "2023-05-19"
tags: ["probability theory", "dependence"]
excerpt: "From the exposition above, it becomes clear that we are interested in solving a differential equation captured by the following result."
note_series: "Dependent data"
note_source: "assets/notes/Overleaf Projects (32 items)/Dependent Data Time Series/stats.tex"
redirect_from: ["/2024/02/17/steins-method/"]
---

<div class="note-content" markdown="0">

<p>A normal approximation can be tested through an integration-by-parts identity. Stein’s method estimates the error in that identity and then converts the estimate into a distance between distributions. We begin with independent sums, where removing one summand gives the necessary cancellation, and then extend the argument to local dependence. For the preceding discussion of dependence, see <a href="{% post_url 2023-04-02-mixing-conditions-and-a-nonmixing-ar-1-process %}">mixing conditions and sample means</a>.</p>

<div id="steins-method" data-note-section="title">

</div>
<p>A useful starting point is the following characterization of a random variable {% raw %}<span class="math inline">\(W\)</span>{% endraw %} having the standard normal distribution. A random variable {% raw %}<span class="math inline">\(W\)</span>{% endraw %} satisfies </p>

{% raw %}<div class="math display">\[\begin{aligned}
    \mathbb{E}[f&#x27;(W)] = \mathbb{E}[W f(W)]
\end{aligned}\]</div>{% endraw %}
<p> for all “smooth” functions {% raw %}<span class="math inline">\(f\)</span>{% endraw %} if and only if {% raw %}<span class="math inline">\(W\)</span>{% endraw %} has the standard normal distribution. This is a consequence of Gaussian integration by parts for bounded continuously differentiable {% raw %}<span class="math inline">\(f\)</span>{% endraw %} with bounded derivative. Heuristically, if {% raw %}<span class="math inline">\(\mathbb{E}[f&#x27;(W)]-\mathbb{E}[Wf(W)]\)</span>{% endraw %} is small for a suitable class of test functions, this suggests a normal approximation. To motivate this, let {% raw %}<span class="math inline">\(X_1,\dots,X_n\)</span>{% endraw %} be i.i.d. random variables with mean zero and variance one. Define </p>

{% raw %}<div class="math display">\[\begin{aligned}
    W = \frac{X_1+\dots+X_n}{\sqrt n} \quad,\quad W_i = W-\frac{X_i}{\sqrt n} ~.
\end{aligned}\]</div>{% endraw %}
<p> Seen this way, {% raw %}<span class="math inline">\(X_i \perp \!\!\! \perp W_i\)</span>{% endraw %} by construction. We therefore can expect, because {% raw %}<span class="math inline">\(\mathbb{E}[X_i f(W_i)] = \mathbb{E}[X_i]\mathbb{E}f(W_i) = 0\)</span>{% endraw %}, </p>

{% raw %}<div class="math display">\[\begin{gathered}
    \mathbb{E}[X_i f(W)] = \mathbb{E}[X_i (f(W) - f(W_i))] \\
    \approx \mathbb{E}[X_i (W-W_i) f&#x27;(W)] + \text{higher-order terms} = \frac{1}{\sqrt n} \mathbb{E}[X_i^2 f&#x27;(W)] ~.
\end{gathered}\]</div>{% endraw %}
<p> by Taylor’s theorem. Therefore, </p>

{% raw %}<div class="math display">\[\begin{gathered}
    \mathbb{E}[W f(W)] = \frac{1}{\sqrt n} \sum_{1 \leq i \leq n} \mathbb{E}[X_i f(W)] \approx \frac{1}{n} \sum_{1 \leq i \leq n} \mathbb{E}[X_i^2 f&#x27;(W)] \\
    \approx \mathbb{E}\left[ f&#x27;(W) \frac1n \sum_{1 \leq i \leq n} X_i^2 \right] \approx \mathbb{E}[f&#x27;(W)] ~,
\end{gathered}\]</div>{% endraw %}
<p> where the first approximate equality in the second line follows from Taylor’s theorem, and the second approximate equality in the second line follows from the law of large numbers: {% raw %}<span class="math inline">\(\frac1n \sum_{1 \leq i \leq n} X_i^2 \approx 1\)</span>{% endraw %}. The following characterization formalizes this heuristic by reversing the Gaussian integration-by-parts argument.</p>

<div id="result-1" class="proposition" data-note-number="1" data-note-kind="Proposition">
<p><strong>Proposition 1</strong>. If {% raw %}<span class="math inline">\(Z\sim \mathcal{N}(0,1)\)</span>{% endraw %}, then {% raw %}<span class="math inline">\(\mathbb{E}f^{\prime}(Z)=\mathbb{E}[Zf(Z)]\)</span>{% endraw %} for every bounded continuously differentiable {% raw %}<span class="math inline">\(f\)</span>{% endraw %} with bounded derivative. Conversely, if {% raw %}<span class="math inline">\(\mathbb{E}|W|&lt;\infty\)</span>{% endraw %} and this identity holds with {% raw %}<span class="math inline">\(W\)</span>{% endraw %} in place of {% raw %}<span class="math inline">\(Z\)</span>{% endraw %} for all such tests, then {% raw %}<span class="math inline">\(W\sim \mathcal{N}(0,1)\)</span>{% endraw %}.</p>

</div>
<div class="proof">
<p><em>Proof.</em></p>

<p>For the forward direction integrate against the Gaussian density, whose derivative is {% raw %}<span class="math inline">\(-x\varphi(x)\)</span>{% endraw %}; boundedness makes the boundary term zero. For the converse, apply the identity to the real and imaginary parts of {% raw %}<span class="math inline">\(f(w)=e^{itw}\)</span>{% endraw %}. The characteristic function {% raw %}<span class="math inline">\(\chi(t)=Ee^{itW}\)</span>{% endraw %} is differentiable because {% raw %}<span class="math inline">\(\mathbb{E}|W|&lt;\infty\)</span>{% endraw %}, and satisfies {% raw %}<span class="math inline">\(\chi^{\prime}(t)=-t\chi(t)\)</span>{% endraw %} with {% raw %}<span class="math inline">\(\chi(0)=1\)</span>{% endraw %}. Therefore {% raw %}<span class="math inline">\(\chi(t)=e^{-t^2/2}\)</span>{% endraw %}, which characterizes the standard normal law.</p>

<p>◻</p>

</div>
<p>To turn the heuristic into a bound on distribution functions, choose a differential equation whose right-hand side is the difference between an indicator and its Gaussian expectation.</p>

<div id="lem:steins-pre" class="lemma" data-note-number="2" data-note-kind="Lemma">
<p><strong>Lemma 2</strong>. For each {% raw %}<span class="math inline">\(x\in\mathbb R\)</span>{% endraw %}, the following equation has a unique bounded, locally absolutely continuous solution, with the equation understood almost everywhere in {% raw %}<span class="math inline">\(w\)</span>{% endraw %}:</p>

{% raw %}<div class="math display">\[\begin{aligned}
        f&#x27;_x (w) - w f_x(w) = \mathbb 1 \{w \leq x\} - \Phi(x)
    
\end{aligned}\]</div>{% endraw %}
<p> is given by the formula </p>

{% raw %}<div class="math display">\[\begin{gathered}
        f_x (w) = -e^{w^2/2} \int_{-\infty}^w e^{-t^2/2} \left( \Phi(x) - \mathbb 1 \{t \leq x\} \right) \dif t \\
        = \begin{cases}
            \sqrt{2\pi} e^{w^2/2} \Phi(w) \left( 1 - \Phi(x) \right) &amp;\quad w \leq x ~, \\
            \sqrt{2\pi} e^{w^2/2} \Phi(x) \left( 1 - \Phi(w) \right) &amp;\quad w &gt; x ~.
        \end{cases}
    
\end{gathered}\]</div>{% endraw %}
</div>
<p>To verify boundedness and uniqueness in Lemma 2, multiplying by {% raw %}<span class="math inline">\(e^{-w^2/2}\)</span>{% endraw %} gives an absolutely continuous primitive. The integral of the centered right-hand side over the whole real line is zero, so the lower-tail expression can equally be written as the negative of the upper-tail integral. For {% raw %}<span class="math inline">\(w&gt;0\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[e^{w^2/2}\int_w^\infty e^{-t^2/2}\,dt\le\frac1w,\]</div>{% endraw %}

<p>since {% raw %}<span class="math inline">\(t/w\ge1\)</span>{% endraw %} inside the integral and {% raw %}<span class="math inline">\(\int_w^\infty t e^{-t^2/2}\,dt=e^{-w^2/2}\)</span>{% endraw %}. The reflected inequality handles the negative tail; continuity handles any fixed compact interval. This proves boundedness. The difference of two solutions satisfies {% raw %}<span class="math inline">\(u'=wu\)</span>{% endraw %} almost everywhere, hence {% raw %}<span class="math inline">\(u(w)=c e^{w^2/2}\)</span>{% endraw %}. Boundedness forces {% raw %}<span class="math inline">\(c=0\)</span>{% endraw %}. Evaluating the primitive separately on {% raw %}<span class="math inline">\(w\le x\)</span>{% endraw %} and {% raw %}<span class="math inline">\(w&gt;x\)</span>{% endraw %} yields the two displayed formulas.</p>
<p>The solution need not have a classical derivative at {% raw %}<span class="math inline">\(w=x\)</span>{% endraw %}. For the next identity, define the value of {% raw %}<span class="math inline">\(f_x^{\prime}\)</span>{% endraw %} at that point by the right-hand side of the Stein equation plus {% raw %}<span class="math inline">\(xf_x(x)\)</span>{% endraw %}. This derivative version makes the identity valid even when {% raw %}<span class="math inline">\(W\)</span>{% endraw %} has an atom at {% raw %}<span class="math inline">\(x\)</span>{% endraw %}. Taking expectations gives</p>

{% raw %}<div class="math display">\[\begin{aligned}
    |\mathbb{E}[f&#x27;(W) - Wf(W)]| = |\mathop{\mathrm{\mathbb{P}}}(W \leq x) - \Phi(x)|  ~,
\end{aligned}\]</div>{% endraw %}
<p> so the problem of proving (the “finite sample validity” of) the approximation of {% raw %}<span class="math inline">\(W\)</span>{% endraw %} using the standard normal distribution becomes bounding {% raw %}<span class="math inline">\(|\mathbb{E}[f&#x27;(W) - Wf(W)]|\)</span>{% endraw %} from above. The choice of test functions determines the distance between distributions. Let {% raw %}<span class="math inline">\(\mathcal H\)</span>{% endraw %} denote some function class, and we are interested in answering under what conditions on {% raw %}<span class="math inline">\(\mathcal H\)</span>{% endraw %} is {% raw %}<span class="math inline">\(\mathbb{E}h(X) \approx \mathbb{E}h(Y)\)</span>{% endraw %} for random variables {% raw %}<span class="math inline">\(X\)</span>{% endraw %} and {% raw %}<span class="math inline">\(Y\)</span>{% endraw %}. In particular, consider the metric </p>

{% raw %}<div class="math display">\[d_{\mathcal H} (X,Y) = \sup_{h \in \mathcal H} |\mathbb{E}h(X) - \mathbb{E}h(Y)| ~.\]</div>{% endraw %}
<p> For a random variable {% raw %}<span class="math inline">\(W\)</span>{% endraw %} and {% raw %}<span class="math inline">\(Z \sim \mathcal{N}(0, 1)\)</span>{% endraw %}, in order to compare {% raw %}<span class="math inline">\(\mathbb{E}h(W)\)</span>{% endraw %} with {% raw %}<span class="math inline">\(\mathbb{E}h(Z)\)</span>{% endraw %}, fix a function {% raw %}<span class="math inline">\(h\)</span>{% endraw %} with {% raw %}<span class="math inline">\(\mathbb{E}|h(Z)| &lt; \infty\)</span>{% endraw %}. We can adapt the construction in Lemma <a href="#lem:steins-pre" data-reference-type="ref" data-reference="lem:steins-pre">2</a> to obtain a corresponding solution to the differential equation </p>

{% raw %}<span id="eq:steins-equation"></span><div class="math display">\[\begin{aligned}
 
    f&#x27;_h (w) - w f_h(w) = h(w) - \mathbb{E}h(Z) ~,
\end{aligned}\tag{1}\]</div>{% endraw %}
<p> which is known as the <em>Stein equation</em>. In particular, we have the following result.</p>

<div id="prop:solution-properties-stein-equation" class="proposition" data-note-number="3" data-note-kind="Proposition">
<p><strong>Proposition 3</strong>.  The solution to <a href="#eq:steins-equation" data-reference-type="eqref" data-reference="eq:steins-equation">(1)</a> is written as </p>

{% raw %}<div class="math display">\[\begin{aligned}
        f = f_h = e^{w^2 / 2} \int_{-\infty}^w e^{-t^2/2} (h(t) - \mathbb{E}h(Z)) \dif t ~.
    
\end{aligned}\]</div>{% endraw %}
<p> Furthermore, for all bounded functions {% raw %}<span class="math inline">\(h\)</span>{% endraw %}, </p>

{% raw %}<div class="math display">\[\begin{aligned}
        \|f_h\|_\infty \leq \sqrt{\frac{\pi}{2}} \|h - \mathbb{E}h(Z)\| \quad,\quad \|f&#x27;_h\| \leq 2\|h - \mathbb{E}h(Z)\| \quad~;
    
\end{aligned}\]</div>{% endraw %}
<p> If {% raw %}<span class="math inline">\(h\)</span>{% endraw %} is absolutely continuous with {% raw %}<span class="math inline">\(\|h^{\prime}\|_\infty&lt;\infty\)</span>{% endraw %}, we have </p>

{% raw %}<div class="math display">\[\begin{aligned}
        \|f_h\| \leq 2 \|h&#x27;\| \quad,\quad \|f&#x27;_h\| \leq \sqrt{\frac{2}{\pi}} \|h&#x27;\| \quad,\quad \|f&#x27;&#x27;_h\| \leq 2\|h&#x27;\| ~.
    
\end{aligned}\]</div>{% endraw %}
</div>
<p><em>Remark.</em> The bounds in the second part of <a href="#prop:solution-properties-stein-equation">Proposition 3</a> assume absolute continuity and a bounded derivative; they do not require boundedness of {% raw %}<span class="math inline">\(h\)</span>{% endraw %} itself.</p>
<p>Multiplying the Stein equation by {% raw %}<span class="math inline">\(e^{-w^2/2}\)</span>{% endraw %} and integrating verifies the displayed solution; its centering is {% raw %}<span class="math inline">\(\mathbb{E}h(Z)\)</span>{% endraw %}. The derivative estimates in Proposition 3, with essential supremum norms and finite {% raw %}<span class="math inline">\(\|h^{\prime}\|_\infty\)</span>{% endraw %} in the Lipschitz case, are <a href="https://arxiv.org/pdf/1109.1880">Ross (2011), Lemma 2.5</a>. We use these estimates without proof. The derivative estimates give the independent-sum bound in <a href="#thm:stein-approx-error">Theorem 4</a>.</p>

<div id="thm:stein-approx-error" class="theorem" data-note-number="4" data-note-kind="Theorem">
<p><strong>Theorem 4</strong>. Let {% raw %}<span class="math inline">\(X_1,\ldots,X_n\)</span>{% endraw %} be independent, centered, with variance one and finite absolute third moments. Put {% raw %}<span class="math inline">\(W=n^{-1/2}\sum_iX_i\)</span>{% endraw %}. If {% raw %}<span class="math inline">\(f\)</span>{% endraw %} has a Lipschitz derivative with constant {% raw %}<span class="math inline">\(C\)</span>{% endraw %}, then</p>

{% raw %}<div class="math display">\[\begin{aligned}
        |\mathbb{E}[W f(W)] - \mathbb{E}f&#x27;(W)| \leq \frac{3C}{2n^{3/2}} \sum_{1 \leq i \leq n} \mathbb{E}|X_i|^3 ~.
    
\end{aligned}\]</div>{% endraw %}
</div>
<div class="proof">
<p><em>Proof.</em></p>

<p>Set {% raw %}<span class="math inline">\(W_i=W-X_i/\sqrt n\)</span>{% endraw %}. Independence and centering give {% raw %}<span class="math inline">\(\mathbb{E}[X_if(W_i)]=0\)</span>{% endraw %}. Taylor expansion at {% raw %}<span class="math inline">\(W_i\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\mathbb{E}X_i^2=1\)</span>{% endraw %} imply</p>

{% raw %}<div class="math display">\[\left|\mathbb{E}[Wf(W)]-\frac1n\sum_i\mathbb{E}f^{\prime}(W_i)\right|\leq\frac{C}{2n^{3/2}}\sum_i\mathbb{E}|X_i|^3.\]</div>{% endraw %}<p>The remaining difference from {% raw %}<span class="math inline">\(\mathbb{E}f^{\prime}(W)\)</span>{% endraw %} is at most {% raw %}<span class="math inline">\(Cn^{-3/2}\sum_i\mathbb{E}|X_i|\)</span>{% endraw %}. Since {% raw %}<span class="math inline">\(\mathbb{E}|X_i|\leq1\leq \mathbb{E}|X_i|^3\)</span>{% endraw %}, adding these bounds proves the claim.</p>

<p>◻</p>

</div>
<p>The Taylor estimate used in Theorem 4 follows from an integral, so it remains valid when the second derivative exists only almost everywhere:</p>

{% raw %}<div class="math display">\[f(v+a)-f(v)-a f'(v)=\int_0^a\{f'(v+t)-f'(v)\}\,dt,\qquad |\text{remainder}|\le C a^2/2.\]</div>{% endraw %}

<p>Apply this with {% raw %}<span class="math inline">\(v=W_i\)</span>{% endraw %}, {% raw %}<span class="math inline">\(a=X_i/\sqrt n\)</span>{% endraw %}, multiply by {% raw %}<span class="math inline">\(X_i/\sqrt n\)</span>{% endraw %}, and sum. Independence factors {% raw %}<span class="math inline">\(E[X_i^2 f'(W_i)]=E f'(W_i)\)</span>{% endraw %}. The remaining replacement of {% raw %}<span class="math inline">\(f'(W_i)\)</span>{% endraw %} by {% raw %}<span class="math inline">\(f'(W)\)</span>{% endraw %} costs at most {% raw %}<span class="math inline">\(C|X_i|/\sqrt n\)</span>{% endraw %} for each term. Finally, Cauchy–Schwarz gives {% raw %}<span class="math inline">\(E|X_i|\le1\)</span>{% endraw %}, and monotonicity of moment norms gives {% raw %}<span class="math inline">\(E|X_i|^3\ge1\)</span>{% endraw %}. These are precisely the two contributions {% raw %}<span class="math inline">\(C/2\)</span>{% endraw %} and {% raw %}<span class="math inline">\(C\)</span>{% endraw %} to the stated constant.</p>
<p>For distribution functions, one seeks a bound uniform in the threshold. The following Berry–Esseen estimate gives such a bound under a third-moment assumption.</p>

<div id="result-5" class="theorem" data-note-number="5" data-note-kind="Theorem">
<p><strong>Theorem 5</strong>.  Assume {% raw %}<span class="math inline">\(X_1, \dots , X_n\)</span>{% endraw %} are i.i.d. with {% raw %}<span class="math inline">\(\mathbb{E}X_i = 0\)</span>{% endraw %}, {% raw %}<span class="math inline">\(\mathop{\mathrm{Var}}(X_i) = 1\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(\mathbb{E}|X_i|^3 &lt; \infty\)</span>{% endraw %}. Let {% raw %}<span class="math inline">\(W_n = \frac{1}{\sqrt n} \sum_{1 \leq i \leq n} X_i\)</span>{% endraw %}. Then, </p>

{% raw %}<div class="math display">\[\begin{aligned}
        |\mathop{\mathrm{\mathbb{P}}}(W_n \leq x) - \Phi(x)| \leq 0.4785 \frac{\mathbb{E}|X_1|^3}{\sqrt n} ~.
    
\end{aligned}\]</div>{% endraw %}
</div>
<p>The numerical constant in Theorem 5 comes from a Berry–Esseen bound and does not follow from the smooth estimate in Theorem 4. It follows, for example, from the stronger constant {% raw %}<span class="math inline">\(0.4748\)</span>{% endraw %} in <a href="https://arxiv.org/pdf/1111.6554">Shevtsova (2011), Corollary 1</a>, under the same i.i.d., centered, unit-variance and finite-third-moment assumptions. Identical distribution is unnecessary for an {% raw %}<span class="math inline">\(n^{-1/2}\)</span>{% endraw %} rate when suitable moments are bounded uniformly. We next work with {% raw %}<span class="math inline">\(W_1(W,Z)=\sup_{\operatorname{Lip}(h)\leq1}|\mathbb{E}h(W)-\mathbb{E}h(Z)|\)</span>{% endraw %}, the Wasserstein distance for integrable variables.</p>

<div id="thm:sum-indep-rv-error-bound" class="theorem" data-note-number="6" data-note-kind="Theorem">
<p><strong>Theorem 6</strong>.  Let {% raw %}<span class="math inline">\(X_1, \dots, X_n\)</span>{% endraw %} be independent random variables with {% raw %}<span class="math inline">\(\mathbb{E}X_i = 0\)</span>{% endraw %}, {% raw %}<span class="math inline">\(\mathbb{E}X_i^2 = 1\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(\mathbb{E}X_i^4 &lt; \infty\)</span>{% endraw %}. Let {% raw %}<span class="math inline">\(W = \frac{1}{\sqrt n} \sum_{1 \leq i \leq n} X_i\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(Z \sim \mathcal{N}(0,1)\)</span>{% endraw %}. Then, </p>

{% raw %}<div class="math display">\[\begin{aligned}
        W_1(W,Z) \leq \frac{1}{n^{3/2}} \sum_{1 \leq i \leq n} \mathbb{E}|X_i|^3 + \frac1n \sqrt{\frac{2}{\pi}} \sqrt{\sum_{1 \leq i \leq n} \mathbb{E}X_i^4} ~.
    
\end{aligned}\]</div>{% endraw %}
</div>
<p>The Wasserstein bound reduces to a supremum of Stein discrepancies over functions with controlled derivatives:</p>

<span id="35"></span>
<div id="thm31" class="theorem" data-note-number="7" data-note-kind="Theorem">
<p><strong>Theorem 7</strong>. Let {% raw %}<span class="math inline">\(\mathbb{E}|W|&lt;\infty\)</span>{% endraw %} and {% raw %}<span class="math inline">\(Z\sim \mathcal{N}(0,1)\)</span>{% endraw %}. Let {% raw %}<span class="math inline">\(\mathcal H\)</span>{% endraw %} consist of bounded continuously differentiable functions satisfying {% raw %}<span class="math inline">\(\|f\|_\infty\leq2\)</span>{% endraw %}, {% raw %}<span class="math inline">\(\|f^{\prime}\|_\infty\leq\sqrt{2/\pi}\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(\operatorname{Lip}(f^{\prime})\leq2\)</span>{% endraw %}. Then</p>

</div>
{% raw %}<div class="math display">\[W_1(W,Z)\leq\sup_{f\in\mathcal H}|\mathbb{E}[f^{\prime}(W)-Wf(W)]|.\tag{2}\]</div>{% endraw %}<p>For each 1-Lipschitz test {% raw %}<span class="math inline">\(h\)</span>{% endraw %}, Proposition 3 supplies a solution in {% raw %}<span class="math inline">\(\mathcal H\)</span>{% endraw %}. Substitution in the Stein equation proves the bound; these are the bounds and function class in <a href="https://arxiv.org/pdf/1109.1880">Ross, Theorem 3.1</a>.</p>

<div class="proof">
<p><em>Proof.</em></p>

<p><em>Proof of Theorem 6.</em> Independence gives the exact identity</p>

{% raw %}<div class="math display">\[\mathbb{E}[Wf(W)]=\frac1{\sqrt n}\sum_i\mathbb{E}[X_i(f(W)-f(W_i))],\qquad W_i=W-X_i/\sqrt n.\]</div>{% endraw %}<p>Taylor’s remainder bound, this time with the derivative evaluated at {% raw %}<span class="math inline">\(W\)</span>{% endraw %}, gives</p>

{% raw %}<div class="math display">\[\left|\mathbb{E}[Wf(W)]-\mathbb{E}\left[f^{\prime}(W)\frac1n\sum_iX_i^2\right]\right|\leq\frac{\operatorname{Lip}(f^{\prime})}{2n^{3/2}}\sum_i\mathbb{E}|X_i|^3.\]</div>{% endraw %}<p>The variance term is bounded by</p>

{% raw %}<div class="math display">\[\left|\mathbb{E}\left[f^{\prime}(W)\left(1-\frac1n\sum_iX_i^2\right)\right]\right|\leq\frac{\|f^{\prime}\|_\infty}{n}\sqrt{\sum_i\operatorname{Var}(X_i^2)}\leq\frac{\|f^{\prime}\|_\infty}{n}\sqrt{\sum_i\mathbb{E}X_i^4}.\]</div>{% endraw %}<p>Apply Theorem 7. If the third and fourth moments are bounded uniformly in {% raw %}<span class="math inline">\(i\)</span>{% endraw %}, both terms are {% raw %}<span class="math inline">\(O(n^{-1/2})\)</span>{% endraw %}, even without identical distributions.</p>

<p>◻</p>

</div>
<p>We can also obtain similar results if we use <em>dependency neighbourhoods</em>. For the bound below, assume that {% raw %}<span class="math inline">\((X_1,\ldots,X_n)\)</span>{% endraw %} has an undirected <em>dependency graph</em>: whenever two disjoint sets of vertices have no edge between them, the corresponding collections of random variables are independent. Let {% raw %}<span class="math inline">\(N_i\)</span>{% endraw %} be the closed neighborhood of {% raw %}<span class="math inline">\(i\)</span>{% endraw %}, including {% raw %}<span class="math inline">\(i\)</span>{% endraw %} itself. In particular, {% raw %}<span class="math inline">\(X_i\)</span>{% endraw %} is independent of {% raw %}<span class="math inline">\(\{X_j:j\notin N_i\}\)</span>{% endraw %}. The graph assumption also gives the independence between pairs used in the variance calculation below.</p>

<div id="thm41" class="theorem" data-note-number="8" data-note-kind="Theorem">
<p><strong>Theorem 8</strong>.  Let {% raw %}<span class="math inline">\(X_1, \ldots, X_n\)</span>{% endraw %} be random variables with {% raw %}<span class="math inline">\(\mathbb{E}X_i^4 &lt; \infty\)</span>{% endraw %}, {% raw %}<span class="math inline">\(\mathbb{E}X_i = 0\)</span>{% endraw %}, {% raw %}<span class="math inline">\(\sigma^2= \mathop{\mathrm{Var}}\left( \sum_{1 \leq i \leq n} X_i \right)&gt;0\)</span>{% endraw %}, and define {% raw %}<span class="math inline">\(W = \frac{1}{\sigma} \sum_{1 \leq i \leq n} X_i\)</span>{% endraw %}. Let the collection {% raw %}<span class="math inline">\((X_1, \ldots, X_n)\)</span>{% endraw %} have dependency neighbourhoods {% raw %}<span class="math inline">\(\{N_i\}_{1 \leq i \leq n}\)</span>{% endraw %}, with {% raw %}<span class="math inline">\(D \triangleq \max_{1\leq i \leq n} |N_i|\)</span>{% endraw %}. Then, for {% raw %}<span class="math inline">\(Z \sim \mathcal{N}(0,1)\)</span>{% endraw %}, </p>

{% raw %}<span id="41"></span><div class="math display">\[\begin{aligned}
        W_1(W,Z) \leq \frac{D^2}{\sigma^3}\sum_{1 \leq i \leq n}\mathbb{E}|X_i|^3 + \frac{\sqrt{28}D^{3/2}}{\sqrt{\pi}\sigma^2}\sqrt{\sum_{1 \leq i \leq n}\mathbb{E}[X_i^4]} ~. 
    
\end{aligned}\tag{3}\]</div>{% endraw %}
</div>
<span id="447"></span><span id="447a"></span><span id="448"></span><span id="49"></span><span id="48c"></span><span id="48a"></span><span id="43"></span><div class="proof">
<p><em>Proof.</em></p>

<p>For {% raw %}<span class="math inline">\(f\in\mathcal H\)</span>{% endraw %} put {% raw %}<span class="math inline">\(W_i=\sigma^{-1}\sum_{j\notin N_i}X_j\)</span>{% endraw %} and {% raw %}<span class="math inline">\(Q=\sum_i\sum_{j\in N_i}X_iX_j\)</span>{% endraw %}. The graph assumption gives {% raw %}<span class="math inline">\(\mathbb{E}[X_if(W_i)]=0\)</span>{% endraw %} and {% raw %}<span class="math inline">\(EQ=\sigma^2\)</span>{% endraw %}. The same expansion as above yields</p>

{% raw %}<div class="math display">\[|\mathbb{E}[f^{\prime}(W)-Wf(W)]|\leq\frac1{\sigma^3}\sum_i\sum_{j,k\in N_i}\mathbb{E}|X_iX_jX_k|+\frac{\sqrt{2/\pi}}{\sigma^2}\sqrt{\operatorname{Var}(Q)}.\]</div>{% endraw %}<p>The arithmetic–geometric mean inequality bounds each cubic product by one third of the sum of its three absolute cubes. Since the graph is undirected and each closed neighborhood has at most {% raw %}<span class="math inline">\(D\)</span>{% endraw %} vertices, each resulting moment occurs at most {% raw %}<span class="math inline">\(D^2\)</span>{% endraw %} times. The cubic-product count gives the first error term in <a href="#thm41">Theorem 8</a>.</p>

<p>The cubic count can be checked slot by slot. A fixed {% raw %}<span class="math inline">\(i\)</span>{% endraw %} has at most {% raw %}<span class="math inline">\(D^2\)</span>{% endraw %} choices of {% raw %}<span class="math inline">\((j,k)\)</span>{% endraw %}. For a fixed middle index {% raw %}<span class="math inline">\(j\)</span>{% endraw %}, there are at most {% raw %}<span class="math inline">\(D\)</span>{% endraw %} possible {% raw %}<span class="math inline">\(i\)</span>{% endraw %}'s because {% raw %}<span class="math inline">\(j\in N_i\)</span>{% endraw %} is equivalent to {% raw %}<span class="math inline">\(i\in N_j\)</span>{% endraw %}; each allows at most {% raw %}<span class="math inline">\(D\)</span>{% endraw %} choices of {% raw %}<span class="math inline">\(k\)</span>{% endraw %}. The last slot has the same bound. Therefore</p>

{% raw %}<div class="math display">\[\sum_i\sum_{j,k\in N_i}E|X_iX_jX_k|\le\frac13( D^2+D^2+D^2)\sum_iE|X_i|^3.\]</div>{% endraw %}

<p>Moreover, {% raw %}<span class="math inline">\(EQ=\sigma^2\)</span>{% endraw %} because in the full expansion of {% raw %}<span class="math inline">\(E(\sum_iX_i)^2\)</span>{% endraw %}, every term with {% raw %}<span class="math inline">\(j\notin N_i\)</span>{% endraw %} vanishes by centering and independence. This verifies the centering of the quadratic error before its variance is bounded.</p>
<p>For the variance, index {% raw %}<span class="math inline">\(Q\)</span>{% endraw %} by ordered pairs {% raw %}<span class="math inline">\(e=(i,j),\ j\in N_i\)</span>{% endraw %}, writing {% raw %}<span class="math inline">\(A_e=X_iX_j\)</span>{% endraw %}. The covariance of {% raw %}<span class="math inline">\(A_e\)</span>{% endraw %} and {% raw %}<span class="math inline">\(A_f\)</span>{% endraw %} vanishes unless the two pairs overlap or have an edge between them. For fixed {% raw %}<span class="math inline">\(e=(i,j)\)</span>{% endraw %}, every such {% raw %}<span class="math inline">\(f=(k,\ell)\)</span>{% endraw %} has at least one endpoint in {% raw %}<span class="math inline">\(N_i\cup N_j\)</span>{% endraw %}. There are at most {% raw %}<span class="math inline">\(4D^2\)</span>{% endraw %} ordered pairs of this kind. Using {% raw %}<span class="math inline">\(|\operatorname{Cov}(A_e,A_f)|\leq(\operatorname{Var}(A_e)+\operatorname{Var}(A_f))/2\)</span>{% endraw %} and symmetry of this relation,</p>

{% raw %}<div class="math display">\[\operatorname{Var}(Q)\leq4D^2\sum_e\operatorname{Var}(A_e)\leq4D^2\sum_i\sum_{j\in N_i}\mathbb{E}X_i^2X_j^2\leq4D^3\sum_i\mathbb{E}X_i^4\leq14D^3\sum_i\mathbb{E}X_i^4.\]</div>{% endraw %}<p>The last estimate is weaker than the one just proved, but gives exactly the stated coefficient {% raw %}<span class="math inline">\(\sqrt{28/\pi}\)</span>{% endraw %}. Taking the supremum in Theorem 7 completes the proof.</p>

<p>◻</p>

</div>
<nav class="note-series" aria-label="Notes in this series"><p>Previous: <a href="{% post_url 2023-04-02-mixing-conditions-and-a-nonmixing-ar-1-process %}">Mixing Conditions and a Nonmixing AR(1) Process</a> · Next: <a href="{% post_url 2024-04-14-the-hot-hand %}">The Hot Hand</a></p></nav>

</div>
