---
layout: "post"
title: "Sobolev Spaces, Embeddings, and Bounded Variation"
date: "2024-06-24"
tags: ["math", "differential geometry"]
excerpt: "Because functions need not be differentiable in general, one construction we can follow for defining derivatives is through the integration-by-parts formula; this is, heuristically, the foundation for defining a weak derivative."
note_series: "Differential geometry"
note_source: "assets/notes/Differential Geometry - Notes/diff-geo.tex"
redirect_from: ["/2024/06/24/sobolev-space/", "/2024/07/07/sobolev-inequalities/", "/2024/07/21/functions-of-bounded-variation/"]
---

<div class="note-content" markdown="0">

<div id="sobolev-space" data-note-section="title">

</div>
<p>Integration by parts characterizes derivatives through their action on smooth test functions. This characterization continues to make sense for functions that are not classically differentiable. Sobolev spaces require the resulting weak derivatives to be integrable, while bounded variation allows them to be measures.</p>

<p>We first study approximation by smooth functions and the role of the boundary. Trace and extension operators then let us pass between a domain and its surroundings. The embedding and compactness estimates explain what control of weak derivatives tells us about the functions themselves.</p>

<div id="result-1" class="definition" data-note-number="1" data-note-kind="Definition">
<p><strong>Definition 1</strong>.  Let {% raw %}<span class="math inline">\(U \subset \mathbb R^n\)</span>{% endraw %} be an open subset. Let {% raw %}<span class="math inline">\(f \in L^1_{\rm loc} (U)\)</span>{% endraw %}. {% raw %}<span class="math inline">\(g_i \in L^1_{\rm loc} (U)\)</span>{% endraw %} is the <strong>weak partial derivative of {% raw %}<span class="math inline">\(f\)</span>{% endraw %} with respect to {% raw %}<span class="math inline">\(x_i\)</span>{% endraw %} in {% raw %}<span class="math inline">\(U\)</span>{% endraw %}</strong> if </p>

{% raw %}<div class="math display">\[\begin{aligned}
        \int_U f \dpd{\varphi}{{x_i}} \dif x = - \int_U g_i \varphi \dif x ~~,~\text{for all } \varphi \in \mathscr C^1_c (U) ~.
    
\end{aligned}\]</div>{% endraw %}
</div>
<p>If two weak partial derivatives exist, their difference integrates to zero against every smooth compactly supported test function. Convolution of this difference with a mollifier is therefore zero on every smaller open set. Letting the mollification scale tend to zero gives equality almost everywhere. Thus the weak partial derivative is unique {% raw %}<span class="math inline">\(\lambda_n\)</span>{% endraw %}-a.e. {% raw %}<span class="math inline">\(x\)</span>{% endraw %}. We can now define the following objects.</p>

<div id="result-2" class="definition" data-note-number="2" data-note-kind="Definition">
<p><strong>Definition 2</strong>.  For {% raw %}<span class="math inline">\(p \in [1,\infty]\)</span>{% endraw %}, {% raw %}<span class="math inline">\(W^{1,p} (U)\)</span>{% endraw %} is the <strong>Sobolev space</strong> if it contains all functions {% raw %}<span class="math inline">\(f \in L^p (U)\)</span>{% endraw %} and all weak partial derivatives {% raw %}<span class="math inline">\(\pd{f}{{x_i}}\)</span>{% endraw %} exist and each belong to {% raw %}<span class="math inline">\(L^p (U)\)</span>{% endraw %} for all {% raw %}<span class="math inline">\(i\)</span>{% endraw %}. We say {% raw %}<span class="math inline">\(f \in W^{1,p}_{\rm loc} (U)\)</span>{% endraw %} if {% raw %}<span class="math inline">\(f \in W^{1,p} (V)\)</span>{% endraw %} for open sets {% raw %}<span class="math inline">\(V \subset_c U\)</span>{% endraw %} (i.e. {% raw %}<span class="math inline">\(\overline V\)</span>{% endraw %} is compact and {% raw %}<span class="math inline">\(\overline V \subset U\)</span>{% endraw %}). Lastly, {% raw %}<span class="math inline">\(f\)</span>{% endraw %} is called a <strong>Sobolev function</strong> if {% raw %}<span class="math inline">\(f \in W^{1,p}_{\rm loc} (U)\)</span>{% endraw %} for some {% raw %}<span class="math inline">\(p \in [1,\infty]\)</span>{% endraw %}.</p>

</div>
<div id="result-3" class="definition" data-note-number="3" data-note-kind="Definition">
<p><strong>Definition 3</strong>.  For {% raw %}<span class="math inline">\(f \in W^{1,p} (U)\)</span>{% endraw %}, the norm is defined as </p>

{% raw %}<div class="math display">\[\begin{aligned}
        \|f\|_{W^{1,p} (U)} \triangleq \left( \int_U |f|^p + |\Dif f|^p \dif x \right)^{\frac1p} ~.
    
\end{aligned}\]</div>{% endraw %}
<p> This holds for any {% raw %}<span class="math inline">\(p \in [1,\infty)\)</span>{% endraw %}. For {% raw %}<span class="math inline">\(p = \infty\)</span>{% endraw %}, </p>

{% raw %}<div class="math display">\[\begin{aligned}
        \|f\|_{W^{1,\infty} (U)} \triangleq \operatorname{ess} \sup_U \left( |f| + |\Dif f| \right) ~.
    
\end{aligned}\]</div>{% endraw %}
</div>
<div id="result-4" class="definition" data-note-number="4" data-note-kind="Definition">
<p><strong>Definition 4</strong>.  We say {% raw %}<span class="math inline">\(f_k \to f\)</span>{% endraw %} in {% raw %}<span class="math inline">\(W^{1,p}(U)\)</span>{% endraw %} if {% raw %}<span class="math inline">\(\|f_k - f\|_{W^{1,p} (U)} \to 0\)</span>{% endraw %}. Similarly, we say {% raw %}<span class="math inline">\(f_k \to f\)</span>{% endraw %} in {% raw %}<span class="math inline">\(W^{1,p}_{\rm loc}(U)\)</span>{% endraw %} if {% raw %}<span class="math inline">\(\|f_k - f\|_{W^{1,p} (V)} \to 0\)</span>{% endraw %} for all {% raw %}<span class="math inline">\(V \subset_c U\)</span>{% endraw %}.</p>

</div>
<p>Convolution with a smooth kernel averages a function over a small neighbourhood. This produces smooth approximations and, away from the boundary, commutes with weak differentiation. To do so, define, for {% raw %}<span class="math inline">\(\varepsilon &gt; 0\)</span>{% endraw %}, {% raw %}<span class="math inline">\(U_\varepsilon = \{x \in U : \mathop{\mathrm{\mathrm{dist}}}(x, \partial U) &gt; \varepsilon\}\)</span>{% endraw %}. Define </p>

{% raw %}<div class="math display">\[\begin{aligned}
    \eta(x) \triangleq \begin{cases}
        c \exp((|x|^2-1)^{-1}) &amp; \text{ if } |x| &lt; 1 ~, \\
        0 &amp; \text{ otherwise} ~.
    \end{cases}
\end{aligned}\]</div>{% endraw %}
<p> Define the constant {% raw %}<span class="math inline">\(c\)</span>{% endraw %} such that {% raw %}<span class="math inline">\(\int_{\mathbb R^n} \eta(x) \dif x = 1\)</span>{% endraw %}. Then, define </p>

{% raw %}<div class="math display">\[\begin{aligned}
    \eta_\varepsilon (x) \triangleq \varepsilon^{-n} \eta \left( \frac{x}{\varepsilon} \right) ~~, \varepsilon &gt; 0 ~\text{and}~ x \in \mathbb R^n ~.
\end{aligned}\]</div>{% endraw %}
<p> This is called the <em>mollifier</em>. Finally, for any {% raw %}<span class="math inline">\(f \in L^1_{\rm loc} (U)\)</span>{% endraw %}, define </p>

{% raw %}<div class="math display">\[\begin{aligned}
    f^\varepsilon \triangleq \eta_\varepsilon \ast f \iff f^\varepsilon (x) = \int_U \eta_\varepsilon (x-y) f(y) \dif y \quad \text{for } x \in U_\varepsilon ~.
\end{aligned}\]</div>{% endraw %}
<p> The following properties record smoothness, convergence, and compatibility with weak derivatives.</p>

<div id="result-5" class="theorem" data-note-number="5" data-note-kind="Theorem">
<p><strong>Theorem 5</strong>. </p>

<ol>
<li><p>For each {% raw %}<span class="math inline">\(\varepsilon &gt; 0\)</span>{% endraw %}, {% raw %}<span class="math inline">\(f^\varepsilon \in \mathscr C^\infty (U_\varepsilon)\)</span>{% endraw %}.</p></li>
<li><p>For {% raw %}<span class="math inline">\(f \in \mathscr C(U)\)</span>{% endraw %}, {% raw %}<span class="math inline">\(f^\varepsilon \to f\)</span>{% endraw %} uniformly on compact subsets of {% raw %}<span class="math inline">\(U\)</span>{% endraw %}.</p></li>
<li><p>{% raw %}<span class="math inline">\(f^\varepsilon \to f\)</span>{% endraw %} in {% raw %}<span class="math inline">\(L^p_{\rm loc} (U)\)</span>{% endraw %} if {% raw %}<span class="math inline">\(f \in L^p_{\rm loc} (U)\)</span>{% endraw %} for some {% raw %}<span class="math inline">\(p \in [1,\infty)\)</span>{% endraw %}.</p></li>
<li><p>{% raw %}<span class="math inline">\(f^\varepsilon \to f\)</span>{% endraw %} {% raw %}<span class="math inline">\(\lambda_n\)</span>{% endraw %}-a.e. {% raw %}<span class="math inline">\(x\)</span>{% endraw %} (this convergence is understood in the pointwise sense).</p></li>
<li><p>If {% raw %}<span class="math inline">\(f \in W^{1,p}_{\rm loc} (U)\)</span>{% endraw %} for some {% raw %}<span class="math inline">\(p \in [1,\infty]\)</span>{% endraw %}, then </p>

{% raw %}<div class="math display">\[\begin{aligned}
            \dpd{{f^{\varepsilon}}}{{x_i}} = \eta_\varepsilon \ast \dpd{f}{{x_i}} 
        
\end{aligned}\]</div>{% endraw %}
<p> on {% raw %}<span class="math inline">\(U_\varepsilon\)</span>{% endraw %} for any {% raw %}<span class="math inline">\(i\)</span>{% endraw %}.</p></li>
<li><p>If {% raw %}<span class="math inline">\(f \in W^{1,p}_{\rm loc} (U)\)</span>{% endraw %} for some {% raw %}<span class="math inline">\(p \in [1,\infty)\)</span>{% endraw %}, then {% raw %}<span class="math inline">\(f^\varepsilon \to f\)</span>{% endraw %} in {% raw %}<span class="math inline">\(W^{1,p}_{\rm loc} (U)\)</span>{% endraw %}.</p></li>
</ol>
</div>
<p><strong>Proof of Theorem 5.</strong> On a compact subset of {% raw %}<span class="math inline">\(U_\varepsilon\)</span>{% endraw %}, differentiating the smooth kernel under the integral is justified by a common compact support and local integrability of {% raw %}<span class="math inline">\(f\)</span>{% endraw %}. This proves smoothness. If {% raw %}<span class="math inline">\(f\)</span>{% endraw %} is continuous, then </p>
{% raw %}<div class="math display">\[|f^\varepsilon(x)-f(x)|\leq\sup_{|z|\leq\varepsilon}|f(x-z)-f(x)|,\]</div>{% endraw %}
<p> which tends uniformly to zero on compact subsets. For {% raw %}<span class="math inline">\(f\in L^p_{\rm loc}\)</span>{% endraw %}, first multiply by a cutoff that equals one on a neighbourhood of the compact set in question. Translation continuity in {% raw %}<span class="math inline">\(L^p(\mathbb R^n)\)</span>{% endraw %}, for {% raw %}<span class="math inline">\(p&lt;\infty\)</span>{% endraw %}, and Minkowski’s inequality give </p>
{% raw %}<div class="math display">\[\|\eta_\varepsilon*f-f\|_p\leq\int\eta(z)\|f(\cdot-\varepsilon z)-f\|_p\,dz\longrightarrow0.\]</div>{% endraw %}
<p> Translation continuity follows first for continuous functions of compact support by uniform continuity, and then for {% raw %}<span class="math inline">\(L^p\)</span>{% endraw %} functions by density. At a Lebesgue point {% raw %}<span class="math inline">\(x\)</span>{% endraw %}, boundedness of the kernel gives </p>
{% raw %}<div class="math display">\[|f^\varepsilon(x)-f(x)|\leq C\fint_{B_\varepsilon(x)}|f(y)-f(x)|\,dy\longrightarrow0.\]</div>{% endraw %}
<p> The Lebesgue differentiation theorem supplies almost every point. Finally, for {% raw %}<span class="math inline">\(x\in U_\varepsilon\)</span>{% endraw %}, the function {% raw %}<span class="math inline">\(y\mapsto\eta_\varepsilon(x-y)\)</span>{% endraw %} is an admissible test function. The weak derivative identity gives </p>
{% raw %}<div class="math display">\[\partial_i f^\varepsilon(x)=-\int f(y)\partial_{y_i}\eta_\varepsilon(x-y)\,dy
=\int\partial_i f(y)\eta_\varepsilon(x-y)\,dy.\]</div>{% endraw %}
<p> Apply the {% raw %}<span class="math inline">\(L^p\)</span>{% endraw %} approximation already proved to {% raw %}<span class="math inline">\(f\)</span>{% endraw %} and each weak derivative to obtain the last assertion. The derivative identity also holds for {% raw %}<span class="math inline">\(p=\infty\)</span>{% endraw %}, but norm convergence in {% raw %}<span class="math inline">\(W^{1,\infty}\)</span>{% endraw %} is not asserted.</p>
<div id="thm:local-approx-smooth-functions-sobolev" class="theorem" data-note-number="6" data-note-kind="Theorem">
<p><strong>Theorem 6.</strong> For any open {% raw %}<span class="math inline">\(U\)</span>{% endraw %} and {% raw %}<span class="math inline">\(1\leq p&lt;\infty\)</span>{% endraw %}, every {% raw %}<span class="math inline">\(f\in W^{1,p}(U)\)</span>{% endraw %} is a limit in the global {% raw %}<span class="math inline">\(W^{1,p}(U)\)</span>{% endraw %} norm of functions in {% raw %}<span class="math inline">\(C^\infty(U)\cap W^{1,p}(U)\)</span>{% endraw %}.</p>
</div>
<p><strong>Proof.</strong> Take a locally finite smooth partition of unity {% raw %}<span class="math inline">\((\psi_j)\)</span>{% endraw %} on {% raw %}<span class="math inline">\(U\)</span>{% endraw %}, with compact supports contained in a locally finite family of relatively compact open sets {% raw %}<span class="math inline">\(V_j\)</span>{% endraw %}. The weak product rule, obtained directly by testing with {% raw %}<span class="math inline">\(\psi_j\varphi\)</span>{% endraw %}, is </p>
{% raw %}<div class="math display">\[D(\psi_jf)=\psi_jDf+fD\psi_j.\]</div>{% endraw %}
<p> Since {% raw %}<span class="math inline">\(\psi_jf\)</span>{% endraw %} vanishes near the boundary of {% raw %}<span class="math inline">\(U\)</span>{% endraw %}, its zero extension belongs to {% raw %}<span class="math inline">\(W^{1,p}(\mathbb R^n)\)</span>{% endraw %}. For a prescribed {% raw %}<span class="math inline">\(\delta&gt;0\)</span>{% endraw %}, choose {% raw %}<span class="math inline">\(\varepsilon_j&gt;0\)</span>{% endraw %} so small that {% raw %}<span class="math inline">\(g_j=\eta_{\varepsilon_j}*(\psi_jf)\)</span>{% endraw %} has support in {% raw %}<span class="math inline">\(V_j\)</span>{% endraw %} and </p>
{% raw %}<div class="math display">\[\|g_j-\psi_jf\|_{W^{1,p}(\mathbb R^n)}&lt;\delta2^{-j}.\]</div>{% endraw %}
<p> The locally finite sum {% raw %}<span class="math inline">\(g=\sum_jg_j\)</span>{% endraw %} is smooth on {% raw %}<span class="math inline">\(U\)</span>{% endraw %}. Its difference from {% raw %}<span class="math inline">\(f=\sum_j\psi_jf\)</span>{% endraw %} is an absolutely convergent sum in {% raw %}<span class="math inline">\(W^{1,p}\)</span>{% endraw %}, so the triangle inequality gives {% raw %}<span class="math inline">\(\|g-f\|_{W^{1,p}(U)}&lt;\delta\)</span>{% endraw %}. Taking {% raw %}<span class="math inline">\(\delta\downarrow0\)</span>{% endraw %} proves the claim. The choice of separate scales is needed because a single convolution scale cannot generally stay inside an arbitrary open set.</p>

<p>We can upgrade the statement of Theorem <a href="#thm:local-approx-smooth-functions-sobolev" data-reference-type="ref" data-reference="thm:local-approx-smooth-functions-sobolev">6</a> via a kind of “topological regularity” condition, which some texts call the Lipschitz property of the topological boundary.</p>

<div id="result-7" class="definition" data-note-number="7" data-note-kind="Definition">
<p><strong>Definition 7</strong>.  Let {% raw %}<span class="math inline">\(U \subset \mathbb R^n\)</span>{% endraw %} be an open set. The topological boundary {% raw %}<span class="math inline">\(\partial U\)</span>{% endraw %} is <strong>Lipschitz</strong> if, for all {% raw %}<span class="math inline">\(x \in \partial U\)</span>{% endraw %}, there exists some {% raw %}<span class="math inline">\(r &gt; 0\)</span>{% endraw %} and a Lipschitz map {% raw %}<span class="math inline">\(\gamma : \mathbb R^{n-1} \to \mathbb R\)</span>{% endraw %} such that </p>

{% raw %}<div class="math display">\[\begin{aligned}
        U \cap Q(x,r) = \{y : \gamma(y_1, \cdots, y_{n-1}) &lt; y_n\} \cap Q(x,r) ~,
    
\end{aligned}\]</div>{% endraw %}
<p> for {% raw %}<span class="math inline">\(Q(x,r) \triangleq \{y : |y_i - x_i| &lt; r ~\text{for all } i\}\)</span>{% endraw %}. (This definition permits relabelling and rotating coordinate axes.)</p>

</div>
<figure id="fig:lipschitz-boundary">
<div class="note-diagram" style="--diagram-width: 696px; --diagram-min-width: 522px">
<div class="note-diagram__canvas" tabindex="0" role="region" aria-label="A Lipschitz boundary chart of a domain U: the cube Q(x,r) about a boundary point x with its inward normal n(x), the smaller cube Q-tilde(x,r-tilde), and a ball of radius epsilon about the inward-shifted point y^epsilon that stays inside U."><a href="{{ '/assets/images/notes/02/lipschitz.svg' | relative_url }}?v=46c0a0e42ce1" title="Open diagram at full size"><img src="{{ '/assets/images/notes/02/lipschitz.svg' | relative_url }}?v=46c0a0e42ce1" alt="A Lipschitz boundary chart of a domain U: the cube Q(x,r) about a boundary point x with its inward normal n(x), the smaller cube Q-tilde(x,r-tilde), and a ball of radius epsilon about the inward-shifted point y^epsilon that stays inside U." loading="lazy" decoding="async"></a></div>
</div>
<figcaption>Lipschitz boundary.</figcaption>
</figure>
<p>Rademacher’s theorem and the area formula imply that the graph has a tangent plane and an outward unit normal at {% raw %}<span class="math inline">\(\mathcal H^{n-1}\)</span>{% endraw %}-almost every boundary point. In coordinates where {% raw %}<span class="math inline">\(U\)</span>{% endraw %} lies above {% raw %}<span class="math inline">\(\gamma\)</span>{% endraw %}, this normal is </p>
{% raw %}<div class="math display">\[\nu=\frac{(D\gamma,-1)}{\sqrt{1+|D\gamma|^2}}.\]</div>{% endraw %}
<p> The Lipschitz bound also gives a uniform inward shift on each boundary chart, which is the geometric ingredient in the next proof.</p>

<div id="thm:global-approx-smooth-functions-sobolev" class="theorem" data-note-number="8" data-note-kind="Theorem">
<p><strong>Theorem 8.</strong> If {% raw %}<span class="math inline">\(U\)</span>{% endraw %} is bounded and open with Lipschitz boundary and {% raw %}<span class="math inline">\(1\leq p&lt;\infty\)</span>{% endraw %}, then every {% raw %}<span class="math inline">\(f\in W^{1,p}(U)\)</span>{% endraw %} has approximations {% raw %}<span class="math inline">\(f_k\in C^\infty(\overline U)\)</span>{% endraw %} converging in {% raw %}<span class="math inline">\(W^{1,p}(U)\)</span>{% endraw %}. Here {% raw %}<span class="math inline">\(C^\infty(\overline U)\)</span>{% endraw %} means restriction of a smooth function on a neighbourhood of {% raw %}<span class="math inline">\(\overline U\)</span>{% endraw %}.</p>
</div>
<p><strong>Proof.</strong> Localize first to a boundary chart by a smooth cutoff whose support stays away from the edges of the chart. Write {% raw %}<span class="math inline">\(U=\{y_n&gt;\gamma(y&#39;)\}\)</span>{% endraw %} there, let {% raw %}<span class="math inline">\(L\)</span>{% endraw %} be a Lipschitz constant for {% raw %}<span class="math inline">\(\gamma\)</span>{% endraw %}, and fix {% raw %}<span class="math inline">\(\alpha&gt;L+1\)</span>{% endraw %}. For {% raw %}<span class="math inline">\(y\in\overline U\)</span>{% endraw %} in a smaller chart and {% raw %}<span class="math inline">\(|z|&lt;\varepsilon\)</span>{% endraw %}, </p>
{% raw %}<div class="math display">\[y_n+\alpha\varepsilon-z_n-\gamma(y&#39;-z&#39;)
\geq(\alpha-1-L)\varepsilon&gt;0.\]</div>{% endraw %}
<p> For small enough {% raw %}<span class="math inline">\(\varepsilon\)</span>{% endraw %}, these points also stay in the larger chart. Thus the entire ball {% raw %}<span class="math inline">\(B_\varepsilon(y+\alpha\varepsilon e_n)\)</span>{% endraw %} lies inside {% raw %}<span class="math inline">\(U\)</span>{% endraw %}. Define the shifted mollification of the localized function by </p>
{% raw %}<div class="math display">\[f_\varepsilon(y)=\int_{B_\varepsilon(0)}\eta_\varepsilon(z)f(y+\alpha\varepsilon e_n-z)\,dz.\]</div>{% endraw %}
<p> The strict margin makes this function smooth on a neighbourhood of the smaller closed chart intersected with {% raw %}<span class="math inline">\(\overline U\)</span>{% endraw %}. Differentiation and the weak derivative identity give the same formula with {% raw %}<span class="math inline">\(D_if\)</span>{% endraw %} in place of {% raw %}<span class="math inline">\(f\)</span>{% endraw %}.</p>
<p>For the convergence estimate, extend the localized {% raw %}<span class="math inline">\(f\)</span>{% endraw %} and its interior weak derivatives separately by zero as {% raw %}<span class="math inline">\(L^p\)</span>{% endraw %} functions. Translation continuity and the mollifier estimate show that the displayed averages converge to {% raw %}<span class="math inline">\(f\)</span>{% endraw %} and {% raw %}<span class="math inline">\(D_if\)</span>{% endraw %} in {% raw %}<span class="math inline">\(L^p(U)\)</span>{% endraw %}, respectively. This argument does not assume that the zero extension of {% raw %}<span class="math inline">\(f\)</span>{% endraw %} has the zero-extended weak derivative across {% raw %}<span class="math inline">\(\partial U\)</span>{% endraw %}. The support remains away from the chart edges for small {% raw %}<span class="math inline">\(\varepsilon\)</span>{% endraw %}, so the smoothed function can be set to zero outside the chart.</p>
<p>Compactness of {% raw %}<span class="math inline">\(\partial U\)</span>{% endraw %} gives finitely many such charts. Use a smooth partition {% raw %}<span class="math inline">\(\psi_0+\cdots+\psi_N=1\)</span>{% endraw %} on a neighbourhood of {% raw %}<span class="math inline">\(\overline U\)</span>{% endraw %}, where {% raw %}<span class="math inline">\(\psi_0\)</span>{% endraw %} has compact support inside {% raw %}<span class="math inline">\(U\)</span>{% endraw %} and the other terms are supported strictly inside the boundary charts. Smooth {% raw %}<span class="math inline">\(\psi_0f\)</span>{% endraw %} by ordinary convolution and each {% raw %}<span class="math inline">\(\psi_if\)</span>{% endraw %} by the shifted construction, choosing each error less than {% raw %}<span class="math inline">\(\delta/(N+1)\)</span>{% endraw %}. The finite sum is smooth near {% raw %}<span class="math inline">\(\overline U\)</span>{% endraw %} and has {% raw %}<span class="math inline">\(W^{1,p}\)</span>{% endraw %} error at most {% raw %}<span class="math inline">\(\delta\)</span>{% endraw %}. If {% raw %}<span class="math inline">\(f\)</span>{% endraw %} is also continuous on {% raw %}<span class="math inline">\(\overline U\)</span>{% endraw %}, these same approximations converge uniformly there: every averaging point stays in {% raw %}<span class="math inline">\(\overline U\)</span>{% endraw %} and approaches its centre, so uniform continuity applies.</p>
<div id="result-9" class="theorem" data-note-number="9" data-note-kind="Theorem">
<p><strong>Theorem 9.</strong> A measurable function belongs to {% raw %}<span class="math inline">\(W^{1,\infty}_{\rm loc}(U)\)</span>{% endraw %} if and only if its almost-everywhere equivalence class has a locally Lipschitz representative. Arbitrary changes on null sets need not preserve pointwise Lipschitz continuity.</p>
</div>
<p><strong>Proof.</strong> Suppose first that {% raw %}<span class="math inline">\(f\in W^{1,\infty}_{\rm loc}(U)\)</span>{% endraw %}. On a ball {% raw %}<span class="math inline">\(B\)</span>{% endraw %} whose closure is contained in a slightly larger ball {% raw %}<span class="math inline">\(B&#39;\Subset U\)</span>{% endraw %}, the mollifications satisfy </p>
{% raw %}<div class="math display">\[\|f^\varepsilon\|_{L^\infty(B)}\leq\|f\|_{L^\infty(B&#39;)},\qquad
\|Df^\varepsilon\|_{L^\infty(B)}\leq\|Df\|_{L^\infty(B&#39;)}.\]</div>{% endraw %}
<p> The fundamental theorem of calculus on line segments makes them uniformly Lipschitz on {% raw %}<span class="math inline">\(B\)</span>{% endraw %}. A subsequence converges uniformly on every smaller closed ball by Arzelà–Ascoli, and its limit equals {% raw %}<span class="math inline">\(f\)</span>{% endraw %} almost everywhere by Theorem 5. These local continuous representatives agree on overlaps, since continuous functions that agree almost everywhere on an open set agree everywhere. They therefore define a locally Lipschitz representative on {% raw %}<span class="math inline">\(U\)</span>{% endraw %}.</p>
<p>Conversely, on each sufficiently small ball let {% raw %}<span class="math inline">\(f\)</span>{% endraw %} be {% raw %}<span class="math inline">\(L\)</span>{% endraw %}-Lipschitz. Its restrictions to coordinate lines are Lipschitz, hence absolutely continuous, with derivatives bounded by {% raw %}<span class="math inline">\(L\)</span>{% endraw %} almost everywhere. Fubini and one-dimensional integration by parts give, for compactly supported smooth {% raw %}<span class="math inline">\(\varphi\)</span>{% endraw %}, </p>
{% raw %}<div class="math display">\[\int f\partial_i\varphi=-\int(\partial_i f)\varphi,\qquad |\partial_i f|\leq L\quad\text{a.e.}\]</div>{% endraw %}
<p> Here the partial derivatives agree almost everywhere with the classical derivative supplied by Rademacher’s theorem. Local boundedness of {% raw %}<span class="math inline">\(f\)</span>{% endraw %} and a finite covering of each compact subset prove {% raw %}<span class="math inline">\(f\in W^{1,\infty}_{\rm loc}(U)\)</span>{% endraw %}.</p>

<div id="thm:trace-sobolev" class="theorem" data-note-number="10" data-note-kind="Theorem">
<p><strong>Theorem 10.</strong> Let {% raw %}<span class="math inline">\(U\subset\mathbb R^n\)</span>{% endraw %} be bounded and open with Lipschitz boundary, and let {% raw %}<span class="math inline">\(1\leq p&lt;\infty\)</span>{% endraw %}. There is a unique bounded linear operator </p>
{% raw %}<div class="math display">\[T:W^{1,p}(U)\longrightarrow L^p(\partial U;\mathcal H^{n-1})\]</div>{% endraw %}
<p> that agrees with restriction for {% raw %}<span class="math inline">\(f\in W^{1,p}(U)\cap C(\overline U)\)</span>{% endraw %}. For every {% raw %}<span class="math inline">\(\varphi\in C^1(\mathbb R^n;\mathbb R^n)\)</span>{% endraw %}, </p>
{% raw %}<div class="math display">\[\int_U f\operatorname{div}\varphi\,dx=-\int_U Df\cdot\varphi\,dx
+\int_{\partial U}Tf\,\varphi\cdot\nu\,d\mathcal H^{n-1},\]</div>{% endraw %}
<p> where {% raw %}<span class="math inline">\(\nu\)</span>{% endraw %} is the outward unit normal.</p>
</div>
<div id="result-11" class="definition" data-note-number="11" data-note-kind="Definition">
<p><strong>Definition 11.</strong> {% raw %}<span class="math inline">\(Tf\)</span>{% endraw %} is the <strong>trace</strong> of {% raw %}<span class="math inline">\(f\)</span>{% endraw %} on {% raw %}<span class="math inline">\(\partial U\)</span>{% endraw %}, defined up to {% raw %}<span class="math inline">\(\mathcal H^{n-1}\)</span>{% endraw %}-null sets.</p>
</div>
<p><strong>Proof of Theorem 10.</strong> First let {% raw %}<span class="math inline">\(f\in C^1(\overline U)\)</span>{% endraw %} be supported inside a boundary chart. On each vertical line, {% raw %}<span class="math inline">\(f\)</span>{% endraw %} vanishes near the top of the chart, so the fundamental theorem of calculus yields </p>
{% raw %}<div class="math display">\[|f(y&#39;,\gamma(y&#39;))|\leq\int_{\gamma(y&#39;)}^{\text{top}}|\partial_nf(y&#39;,t)|\,dt.\]</div>{% endraw %}
<p> The graph area element is {% raw %}<span class="math inline">\(\sqrt{1+|D\gamma|^2}\,dy&#39;\leq\sqrt{1+L^2}\,dy&#39;\)</span>{% endraw %}. Integration proves the local {% raw %}<span class="math inline">\(L^1\)</span>{% endraw %} trace bound. Applying this to the finitely many localized pieces {% raw %}<span class="math inline">\(\psi_if\)</span>{% endraw %}, and using {% raw %}<span class="math inline">\(D(\psi_if)=\psi_iDf+fD\psi_i\)</span>{% endraw %}, gives </p>
{% raw %}<div class="math display">\[\int_{\partial U}|f|\,d\mathcal H^{n-1}\leq C_U\int_U(|Df|+|f|)\,dx.\]</div>{% endraw %}
<p> Equivalently, absolute values can be smoothed by {% raw %}<span class="math inline">\(\beta_\varepsilon(t)=\sqrt{t^2+\varepsilon^2}-\varepsilon\)</span>{% endraw %}, for which {% raw %}<span class="math inline">\(\beta_\varepsilon(0)=0\)</span>{% endraw %} and {% raw %}<span class="math inline">\(|\beta_\varepsilon&#39;|\leq1\)</span>{% endraw %}. This is the bound needed to pass to {% raw %}<span class="math inline">\(|f|\)</span>{% endraw %}.</p>
<p>For {% raw %}<span class="math inline">\(p&gt;1\)</span>{% endraw %}, apply the {% raw %}<span class="math inline">\(L^1\)</span>{% endraw %} inequality to {% raw %}<span class="math inline">\(|f|^p\)</span>{% endraw %} and use the chain rule and Young’s inequality: </p>
{% raw %}<div class="math display">\[\int_{\partial U}|f|^p\,d\mathcal H^{n-1}
\leq C_U\int_U\bigl(p|f|^{p-1}|Df|+|f|^p\bigr)\,dx
\leq C_{U,p}\|f\|_{W^{1,p}(U)}^p.\]</div>{% endraw %}
<p> Theorem 8 makes restriction extend uniquely to a bounded linear map {% raw %}<span class="math inline">\(T\)</span>{% endraw %}. When {% raw %}<span class="math inline">\(f\)</span>{% endraw %} is continuous on {% raw %}<span class="math inline">\(\overline U\)</span>{% endraw %}, the uniform approximation at the end of its proof shows that this extension equals its actual boundary values.</p>
<p>For smooth {% raw %}<span class="math inline">\(f\)</span>{% endraw %}, integration by parts on a Lipschitz domain follows directly from graph coordinates. For a compactly supported smooth vector field {% raw %}<span class="math inline">\(F\)</span>{% endraw %} in a graph chart, vertical integration gives {% raw %}<span class="math inline">\(\int_U\partial_nF_n=-\int F_n(y&#39;,\gamma)\,dy&#39;\)</span>{% endraw %}. For {% raw %}<span class="math inline">\(i&lt;n\)</span>{% endraw %}, differentiating {% raw %}<span class="math inline">\(\int_{\gamma(y&#39;)}^{\text{top}}F_i(y&#39;,t)\,dt\)</span>{% endraw %} and integrating in {% raw %}<span class="math inline">\(y&#39;\)</span>{% endraw %} gives {% raw %}<span class="math inline">\(\int_U\partial_iF_i=\int F_i(y&#39;,\gamma)\partial_i\gamma\,dy&#39;\)</span>{% endraw %}. Their sum is {% raw %}<span class="math inline">\(\int_{\partial U}F\cdot\nu\,d\mathcal H^{n-1}\)</span>{% endraw %}; a partition of unity cancels the cutoff derivatives. Apply this identity to {% raw %}<span class="math inline">\(F=f\varphi\)</span>{% endraw %}. Approximate a general {% raw %}<span class="math inline">\(f\)</span>{% endraw %} by Theorem 8. The two interior terms converge by {% raw %}<span class="math inline">\(L^p\)</span>{% endraw %} convergence on a bounded domain, and the boundary term converges by boundedness of {% raw %}<span class="math inline">\(T\)</span>{% endraw %} and finite surface measure. This proves the formula.</p>
<div id="thm:extension-operator" class="theorem" data-note-number="12" data-note-kind="Theorem">
<p><strong>Theorem 12.</strong> Let {% raw %}<span class="math inline">\(U\)</span>{% endraw %} be bounded and open with Lipschitz boundary, {% raw %}<span class="math inline">\(1\leq p&lt;\infty\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(\overline U\subset V\)</span>{% endraw %} for an open set {% raw %}<span class="math inline">\(V\)</span>{% endraw %}. There is a bounded linear map </p>
{% raw %}<div class="math display">\[E:W^{1,p}(U)\longrightarrow W^{1,p}(\mathbb R^n)\]</div>{% endraw %}
<p> such that {% raw %}<span class="math inline">\(Ef=f\)</span>{% endraw %} almost everywhere on {% raw %}<span class="math inline">\(U\)</span>{% endraw %}. It can be chosen so that all {% raw %}<span class="math inline">\(Ef\)</span>{% endraw %} are supported in one fixed compact subset of {% raw %}<span class="math inline">\(V\)</span>{% endraw %}.</p>
</div>
<p><strong>Proof.</strong> In a graph chart flatten the boundary using </p>
{% raw %}<div class="math display">\[\Phi(y&#39;,t)=(y&#39;,\gamma(y&#39;)+t).\]</div>{% endraw %}
<p> Both {% raw %}<span class="math inline">\(\Phi\)</span>{% endraw %} and its inverse are Lipschitz, and their Jacobians have absolute determinant one almost everywhere. Pullback by either map is bounded on {% raw %}<span class="math inline">\(W^{1,p}\)</span>{% endraw %} on the corresponding patches: for smooth functions the almost-everywhere chain rule, the area formula, and the bound on {% raw %}<span class="math inline">\(D\Phi\)</span>{% endraw %} prove this estimate; approximation from Theorem 6 and completeness pass the formula and estimate to Sobolev functions. The {% raw %}<span class="math inline">\(L^p\)</span>{% endraw %} limit is the intended composition because these bi-Lipschitz maps preserve null sets.</p>
<p>In flattened coordinates extend from {% raw %}<span class="math inline">\(t&gt;0\)</span>{% endraw %} to {% raw %}<span class="math inline">\(t&lt;0\)</span>{% endraw %} by even reflection, {% raw %}<span class="math inline">\(u(y&#39;,t)=u(y&#39;,-t)\)</span>{% endraw %}. This gives a bounded extension across {% raw %}<span class="math inline">\(t=0\)</span>{% endraw %}. To see that there is no additional measure on that plane, first use smooth approximations on the upper half-patch, as in Theorem 8. Their reflected functions are continuous and piecewise smooth; integration by parts on the two half-patches has cancelling boundary terms. Their weak derivatives are the reflected tangential derivatives and the sign-reversed normal derivative. The {% raw %}<span class="math inline">\(L^p\)</span>{% endraw %} norm of both function and gradient increases by at most a fixed factor. Passing to the {% raw %}<span class="math inline">\(W^{1,p}\)</span>{% endraw %} limit proves the same assertion for {% raw %}<span class="math inline">\(u\)</span>{% endraw %}. Transport back by {% raw %}<span class="math inline">\(\Phi\)</span>{% endraw %}; in original coordinates the reflection is {% raw %}<span class="math inline">\((x&#39;,x_n)\mapsto(x&#39;,2\gamma(x&#39;)-x_n)\)</span>{% endraw %}.</p>
<p>Apply this construction to finitely many pieces of a fixed partition of unity near {% raw %}<span class="math inline">\(\partial U\)</span>{% endraw %}, with supports away from chart edges; extend the interior piece by zero. Cutoffs inside the larger reflected patches allow each piece to be set to zero away from its chart. Their sum defines a bounded linear extension {% raw %}<span class="math inline">\(E_0\)</span>{% endraw %}. Finally choose {% raw %}<span class="math inline">\(\chi\in C_c^\infty(V)\)</span>{% endraw %} with {% raw %}<span class="math inline">\(\chi=1\)</span>{% endraw %} near {% raw %}<span class="math inline">\(\overline U\)</span>{% endraw %} and set {% raw %}<span class="math inline">\(Ef=\chi E_0f\)</span>{% endraw %}. The product rule gives the asserted norm bound and fixed compact support. All charts, cutoffs, and reflections are fixed independently of {% raw %}<span class="math inline">\(f\)</span>{% endraw %}.</p>

<h3 data-note-section="1" id="sobolev-inequalities">1. Sobolev Inequalities</h3>
<p>Sobolev inequalities convert control of weak derivatives into stronger integrability, and in the supercritical range into continuity. For any {% raw %}<span class="math inline">\(1 \leq p &lt; n\)</span>{% endraw %}, the <strong>Sobolev conjugate</strong> is defined as </p>

{% raw %}<div class="math display">\[\begin{aligned}
    p^\star \triangleq \frac{np}{n-p} ~.
\end{aligned}\]</div>{% endraw %}
<div id="thm:GNS-sobolev" class="theorem" data-note-number="13" data-note-kind="Theorem">
<p><strong>Theorem 13.</strong> (Gagliardo–Nirenberg–Sobolev.) Let {% raw %}<span class="math inline">\(1\leq p&lt;n\)</span>{% endraw %} and {% raw %}<span class="math inline">\(p^\star=np/(n-p)\)</span>{% endraw %}. For every {% raw %}<span class="math inline">\(f\in W^{1,p}(\mathbb R^n)\)</span>{% endraw %}, </p>
{% raw %}<div class="math display">\[\|f\|_{L^{p^\star}(\mathbb R^n)}\leq C(n,p)\|Df\|_{L^p(\mathbb R^n)}.\]</div>{% endraw %}
<p> In particular, the inequality holds for {% raw %}<span class="math inline">\(f\in C_c^\infty(\mathbb R^n)\)</span>{% endraw %}. The function-space hypothesis excludes nonzero constants on all of {% raw %}<span class="math inline">\(\mathbb R^n\)</span>{% endraw %}.</p>
</div>
<p><strong>Proof.</strong> Start with {% raw %}<span class="math inline">\(p=1\)</span>{% endraw %} and {% raw %}<span class="math inline">\(u\in C_c^1(\mathbb R^n)\)</span>{% endraw %}. Integration along the {% raw %}<span class="math inline">\(i\)</span>{% endraw %}th coordinate gives </p>
{% raw %}<div class="math display">\[|u(x)|\leq F_i(\widehat x_i),\qquad F_i(\widehat x_i)=\int_{\mathbb R}|\partial_i u(x)|\,dx_i,\]</div>{% endraw %}
<p> where {% raw %}<span class="math inline">\(\widehat x_i\)</span>{% endraw %} omits coordinate {% raw %}<span class="math inline">\(i\)</span>{% endraw %}. Repeated Hölder inequalities give the integral estimate </p>
{% raw %}<div class="math display">\[\int_{\mathbb R^n}\prod_{i=1}^n F_i(\widehat x_i)^{1/(n-1)}\,dx
\leq\prod_{i=1}^n\left(\int_{\mathbb R^{n-1}}F_i\right)^{1/(n-1)}.\]</div>{% endraw %}
<p> For completeness, the {% raw %}<span class="math inline">\(n=2\)</span>{% endraw %} case is Fubini. For the induction step, integrate first in {% raw %}<span class="math inline">\(x_n\)</span>{% endraw %} and apply Hölder to the {% raw %}<span class="math inline">\(n-1\)</span>{% endraw %} factors with {% raw %}<span class="math inline">\(i&lt;n\)</span>{% endraw %}. Write {% raw %}<span class="math inline">\(G_i=\int F_i\,dx_n\)</span>{% endraw %}. The remaining integral is bounded by </p>
{% raw %}<div class="math display">\[\left(\int F_n\right)^{1/(n-1)}
\left(\int_{\mathbb R^{n-1}}\prod_{i&lt;n}G_i^{1/(n-2)}\right)^{(n-2)/(n-1)},\]</div>{% endraw %}
<p> by Hölder with exponents {% raw %}<span class="math inline">\(n-1\)</span>{% endraw %} and {% raw %}<span class="math inline">\((n-1)/(n-2)\)</span>{% endraw %}. The induction hypothesis gives the desired product. Truncation and monotone convergence handle general nonnegative integrable factors.</p>
<p>Since {% raw %}<span class="math inline">\(|u|^{n/(n-1)}\leq\prod_iF_i^{1/(n-1)}\)</span>{% endraw %}, it follows that </p>
{% raw %}<div class="math display">\[\|u\|_{n/(n-1)}\leq\prod_i\|\partial_i u\|_1^{1/n}\leq C_n\|Du\|_1.\]</div>{% endraw %}
<p> For {% raw %}<span class="math inline">\(1&lt;p&lt;n\)</span>{% endraw %}, apply this result to {% raw %}<span class="math inline">\(|u|^\alpha\)</span>{% endraw %}, where {% raw %}<span class="math inline">\(\alpha=p(n-1)/(n-p)&gt;1\)</span>{% endraw %}. Hölder gives </p>
{% raw %}<div class="math display">\[\|u\|_{p^\star}^\alpha
\leq C_n\alpha\int |u|^{\alpha-1}|Du|
\leq C_n\alpha\|Du\|_p\|u\|_{p^\star}^{\alpha-1},\]</div>{% endraw %}
<p> because {% raw %}<span class="math inline">\(\alpha n/(n-1)=p^\star\)</span>{% endraw %} and {% raw %}<span class="math inline">\((\alpha-1)p&#39;=p^\star\)</span>{% endraw %}. Divide unless {% raw %}<span class="math inline">\(u=0\)</span>{% endraw %}, in which case the result is immediate.</p>
<p>Finally, cutoffs {% raw %}<span class="math inline">\(\chi_R\)</span>{% endraw %} with {% raw %}<span class="math inline">\(\chi_R=1\)</span>{% endraw %} on {% raw %}<span class="math inline">\(B_R\)</span>{% endraw %}, {% raw %}<span class="math inline">\(|D\chi_R|\leq C/R\)</span>{% endraw %}, followed by mollification approximate every {% raw %}<span class="math inline">\(f\in W^{1,p}(\mathbb R^n)\)</span>{% endraw %} by {% raw %}<span class="math inline">\(C_c^\infty\)</span>{% endraw %} functions in {% raw %}<span class="math inline">\(W^{1,p}\)</span>{% endraw %}. The term {% raw %}<span class="math inline">\(fD\chi_R\)</span>{% endraw %} tends to zero in {% raw %}<span class="math inline">\(L^p\)</span>{% endraw %}, while the remaining tails tend to zero by integrability. Applying the inequality to differences makes the approximants Cauchy in {% raw %}<span class="math inline">\(L^{p^\star}\)</span>{% endraw %}. Their {% raw %}<span class="math inline">\(L^p\)</span>{% endraw %} limit identifies the {% raw %}<span class="math inline">\(L^{p^\star}\)</span>{% endraw %} limit with {% raw %}<span class="math inline">\(f\)</span>{% endraw %} almost everywhere.</p>
<div id="thm:GNS-sobolev-local" class="theorem" data-note-number="14" data-note-kind="Theorem">
<p><strong>Theorem 14.</strong> Let {% raw %}<span class="math inline">\(B=B_r(x_0)\)</span>{% endraw %}, {% raw %}<span class="math inline">\(1\leq p&lt;\infty\)</span>{% endraw %}, {% raw %}<span class="math inline">\(f\in C^1(\overline B)\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(z\in\overline B\)</span>{% endraw %}. Then </p>
{% raw %}<div class="math display">\[\int_B|f(y)-f(z)|^p\,dy
\leq C(n,p)r^{n+p-1}\int_B|Df(y)|^p|y-z|^{1-n}\,dy.\]</div>{% endraw %}
<p> This radial estimate itself does not require {% raw %}<span class="math inline">\(p&lt;n\)</span>{% endraw %}.</p>
</div>
<p><strong>Proof.</strong> Along a ray {% raw %}<span class="math inline">\(y=z+\rho\omega\)</span>{% endraw %} inside the convex ball, the fundamental theorem of calculus and Hölder give </p>
{% raw %}<div class="math display">\[|f(z+\rho\omega)-f(z)|^p\leq\rho^{p-1}\int_0^\rho|Df(z+t\omega)|^p\,dt.\]</div>{% endraw %}
<p> Let {% raw %}<span class="math inline">\(\ell(\omega)\leq2r\)</span>{% endraw %} be the length of that ray inside the ball (zero for outward rays at a boundary point). Multiply by {% raw %}<span class="math inline">\(\rho^{n-1}\)</span>{% endraw %}, integrate {% raw %}<span class="math inline">\(0&lt;\rho&lt;\ell(\omega)\)</span>{% endraw %}, and change the order of integration: </p>
{% raw %}<div class="math display">\[\int_0^{\ell(\omega)}\rho^{n+p-2}\int_0^\rho|Df(z+t\omega)|^p\,dt\,d\rho
\leq\frac{(2r)^{n+p-1}}{n+p-1}\int_0^{\ell(\omega)}|Df(z+t\omega)|^p\,dt.\]</div>{% endraw %}
<p> Integrating over {% raw %}<span class="math inline">\(\omega\)</span>{% endraw %} converts the last expression to the weighted integral in the statement. In dimension one, use the two ray directions; the weight is one.</p>
<div id="thm:poincare" class="theorem" data-note-number="15" data-note-kind="Theorem">
<p><strong>Theorem 15.</strong> (Sobolev–Poincaré.) If {% raw %}<span class="math inline">\(1\leq p&lt;n\)</span>{% endraw %}, {% raw %}<span class="math inline">\(B=B_r(x_0)\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(f\in W^{1,p}(B)\)</span>{% endraw %}, then, writing {% raw %}<span class="math inline">\([f]_{x_0,r}=f_B=\fint_Bf\)</span>{% endraw %}, </p>
{% raw %}<div class="math display">\[\left(\fint_B|f-f_B|^{p^\star}\,dy\right)^{1/p^\star}
\leq C(n,p)r\left(\fint_B|Df|^p\,dy\right)^{1/p}.\]</div>{% endraw %}

</div>
<p><strong>Proof.</strong> First integrate Theorem 14 in {% raw %}<span class="math inline">\(z\in B\)</span>{% endraw %}. Since {% raw %}<span class="math inline">\(\int_B|y-z|^{1-n}\,dz\leq C_nr\)</span>{% endraw %} and Jensen’s inequality gives {% raw %}<span class="math inline">\(|f(y)-f_B|^p\leq\fint_B|f(y)-f(z)|^p\,dz\)</span>{% endraw %}, we obtain the ordinary Poincaré inequality </p>
{% raw %}<div class="math display">\[\|f-f_B\|_{L^p(B)}\leq C(n,p)r\|Df\|_{L^p(B)}.\]</div>{% endraw %}
<p> This argument starts with smooth {% raw %}<span class="math inline">\(f\)</span>{% endraw %}; Theorem 8 on the ball passes it to {% raw %}<span class="math inline">\(W^{1,p}(B)\)</span>{% endraw %}.</p>
<p>On the unit ball let {% raw %}<span class="math inline">\(h=f-f_B\)</span>{% endraw %} and extend {% raw %}<span class="math inline">\(h\)</span>{% endraw %} by Theorem 12. The extension bound, ordinary Poincaré inequality, and Theorem 13 give </p>
{% raw %}<div class="math display">\[\|h\|_{L^{p^\star}(B_1)}\leq\|Eh\|_{L^{p^\star}(\mathbb R^n)}
\leq C\|D(Eh)\|_p\leq C\|h\|_{W^{1,p}(B_1)}\leq C\|Df\|_{L^p(B_1)}.\]</div>{% endraw %}
<p> The change of variables {% raw %}<span class="math inline">\(y=x_0+rw\)</span>{% endraw %} gives the stated averaged inequality. Thus the subtraction of the mean is exactly what removes the extra {% raw %}<span class="math inline">\(L^p\)</span>{% endraw %} term in the extension estimate.</p>
<div id="thm:morrey" class="theorem" data-note-number="16" data-note-kind="Theorem">
<p><strong>Theorem 16.</strong> (Morrey.) Let {% raw %}<span class="math inline">\(n&lt;p&lt;\infty\)</span>{% endraw %}. Each {% raw %}<span class="math inline">\(f\in W^{1,p}(B_r(x_0))\)</span>{% endraw %} has a continuous representative on {% raw %}<span class="math inline">\(\overline{B_r(x_0)}\)</span>{% endraw %} satisfying, for all {% raw %}<span class="math inline">\(y,z\)</span>{% endraw %} there, </p>
{% raw %}<div class="math display">\[|f(y)-f(z)|\leq C(n,p)r\left(\fint_{B_r(x_0)}|Df|^p\,dw\right)^{1/p}.\]</div>{% endraw %}
<p> If {% raw %}<span class="math inline">\(f\in W^{1,p}(\mathbb R^n)\)</span>{% endraw %}, its representative is globally Hölder continuous with exponent {% raw %}<span class="math inline">\(1-n/p\)</span>{% endraw %}, and </p>
{% raw %}<div class="math display">\[|f(y)-f(z)|\leq C(n,p)\|Df\|_{L^p(\mathbb R^n)}|y-z|^{1-n/p}.\]</div>{% endraw %}
<p> Moreover {% raw %}<span class="math inline">\(f^\star(x)=\lim_{r\downarrow0}[f]_{x,r}\)</span>{% endraw %} exists at every {% raw %}<span class="math inline">\(x\)</span>{% endraw %} and equals this representative.</p>
</div>
<p><strong>Proof.</strong> For smooth {% raw %}<span class="math inline">\(f\)</span>{% endraw %}, average {% raw %}<span class="math inline">\(|f(y)-f(z)|\leq|f(y)-f(w)|+|f(w)-f(z)|\)</span>{% endraw %} over the ball and apply Theorem 14 with exponent one. The factor {% raw %}<span class="math inline">\(r^n\)</span>{% endraw %} cancels its volume, giving </p>
{% raw %}<div class="math display">\[|f(y)-f(z)|\leq C_n\int_B|Df(w)|\bigl(|w-y|^{1-n}+|w-z|^{1-n}\bigr)\,dw.\]</div>{% endraw %}
<p> For {% raw %}<span class="math inline">\(p&#39;=p/(p-1)\)</span>{% endraw %}, the condition {% raw %}<span class="math inline">\(p&gt;n\)</span>{% endraw %} is exactly {% raw %}<span class="math inline">\((n-1)p&#39;&lt;n\)</span>{% endraw %}. Consequently </p>
{% raw %}<div class="math display">\[\left(\int_B|w-y|^{(1-n)p&#39;}\,dw\right)^{1/p&#39;}
\leq C(n,p)r^{1-n/p},\]</div>{% endraw %}
<p> uniformly for {% raw %}<span class="math inline">\(y\in\overline B\)</span>{% endraw %}. Hölder proves the first estimate for smooth functions.</p>
<p>Choose smooth approximations {% raw %}<span class="math inline">\(f_j\to f\)</span>{% endraw %} in {% raw %}<span class="math inline">\(W^{1,p}(B)\)</span>{% endraw %} by Theorem 8. Apply the estimate to {% raw %}<span class="math inline">\(f_j-f_k\)</span>{% endraw %} and bound its mean by {% raw %}<span class="math inline">\(|B|^{-1/p}\|f_j-f_k\|_p\)</span>{% endraw %}. This gives </p>
{% raw %}<div class="math display">\[\|f_j-f_k\|_{L^\infty(B)}\leq |B|^{-1/p}\|f_j-f_k\|_p
+C(n,p)r^{1-n/p}\|D(f_j-f_k)\|_p\longrightarrow0.\]</div>{% endraw %}
<p> The uniform limit on {% raw %}<span class="math inline">\(\overline B\)</span>{% endraw %} is continuous, equals {% raw %}<span class="math inline">\(f\)</span>{% endraw %} almost everywhere, and satisfies the same oscillation bound. Representatives on overlapping balls agree by continuity. For {% raw %}<span class="math inline">\(f\)</span>{% endraw %} on {% raw %}<span class="math inline">\(\mathbb R^n\)</span>{% endraw %} and {% raw %}<span class="math inline">\(y\ne z\)</span>{% endraw %}, choose a ball centred at their midpoint with radius {% raw %}<span class="math inline">\(|y-z|\)</span>{% endraw %}. The first estimate then gives the global Hölder bound. The averages of a continuous function tend to its value at every point, proving the assertion about {% raw %}<span class="math inline">\(f^\star\)</span>{% endraw %}.</p>
<div id="thm:compactness-sobolev" class="theorem" data-note-number="17" data-note-kind="Theorem">
<p><strong>Theorem 17.</strong> (Rellich compactness.) Suppose {% raw %}<span class="math inline">\(U\subset\mathbb R^n\)</span>{% endraw %} is bounded and open with Lipschitz boundary and {% raw %}<span class="math inline">\(1&lt;p&lt;n\)</span>{% endraw %}. Every bounded sequence {% raw %}<span class="math inline">\((f_k)\)</span>{% endraw %} in {% raw %}<span class="math inline">\(W^{1,p}(U)\)</span>{% endraw %} has a subsequence converging to some {% raw %}<span class="math inline">\(f\in W^{1,p}(U)\)</span>{% endraw %} in {% raw %}<span class="math inline">\(L^q(U)\)</span>{% endraw %} for every {% raw %}<span class="math inline">\(1\leq q&lt;p^\star\)</span>{% endraw %}.</p>
</div>
<p><strong>Proof.</strong> Use the fixed extension from Theorem 12 and put {% raw %}<span class="math inline">\(F_k=Ef_k\)</span>{% endraw %}. Their {% raw %}<span class="math inline">\(W^{1,p}(\mathbb R^n)\)</span>{% endraw %} norms are bounded by a constant {% raw %}<span class="math inline">\(M\)</span>{% endraw %}, and their supports lie in a single compact set {% raw %}<span class="math inline">\(K\)</span>{% endraw %}.</p>
<p>First, for {% raw %}<span class="math inline">\(F\in W^{1,p}(\mathbb R^n)\)</span>{% endraw %}, </p>
{% raw %}<div class="math display">\[\|F(\cdot-h)-F\|_p\leq |h|\|DF\|_p.\]</div>{% endraw %}
<p> For smooth {% raw %}<span class="math inline">\(F\)</span>{% endraw %} this follows from {% raw %}<span class="math inline">\(F(x-h)-F(x)=-\int_0^1DF(x-th)\cdot h\,dt\)</span>{% endraw %} and Minkowski; smooth approximation proves the general case. Averaging with the mollifier gives the uniform estimate </p>
{% raw %}<div class="math display">\[\sup_k\|F_k^\varepsilon-F_k\|_p\leq C M\varepsilon.\]</div>{% endraw %}
<p> Second, Hölder applied to convolution gives, for each fixed {% raw %}<span class="math inline">\(\varepsilon&gt;0\)</span>{% endraw %}, </p>
{% raw %}<div class="math display">\[\|F_k^\varepsilon\|_\infty\leq\|\eta_\varepsilon\|_{p&#39;}M
=C\varepsilon^{-n/p}M,\qquad
\|DF_k^\varepsilon\|_\infty\leq\|D\eta_\varepsilon\|_{p&#39;}M
=C\varepsilon^{-1-n/p}M.\]</div>{% endraw %}
<p> Their supports lie in {% raw %}<span class="math inline">\(K+\overline{B_\varepsilon}\)</span>{% endraw %}. Thus Arzelà–Ascoli gives a subsequence converging uniformly, hence in {% raw %}<span class="math inline">\(L^p\)</span>{% endraw %}, for each fixed {% raw %}<span class="math inline">\(\varepsilon\)</span>{% endraw %}.</p>
<p>Take nested subsequences for {% raw %}<span class="math inline">\(\varepsilon_\ell\downarrow0\)</span>{% endraw %} and then their diagonal. To see this diagonal is Cauchy in {% raw %}<span class="math inline">\(L^p\)</span>{% endraw %}, fix {% raw %}<span class="math inline">\(\ell\)</span>{% endraw %} and use </p>
{% raw %}<div class="math display">\[\|F_{k_i}-F_{k_j}\|_p\leq
\|F_{k_i}-F_{k_i}^{\varepsilon_\ell}\|_p+
\|F_{k_i}^{\varepsilon_\ell}-F_{k_j}^{\varepsilon_\ell}\|_p+
\|F_{k_j}^{\varepsilon_\ell}-F_{k_j}\|_p.\]</div>{% endraw %}
<p> Choose {% raw %}<span class="math inline">\(\ell\)</span>{% endraw %} to make the first and third terms small uniformly, then {% raw %}<span class="math inline">\(i,j\)</span>{% endraw %} to control the middle term. In particular, {% raw %}<span class="math inline">\(f_{k_j}\to f\)</span>{% endraw %} in {% raw %}<span class="math inline">\(L^p(U)\)</span>{% endraw %}.</p>
<p>Because {% raw %}<span class="math inline">\(p&gt;1\)</span>{% endraw %}, boundedness of the gradients in the reflexive space {% raw %}<span class="math inline">\(L^p(U;\mathbb R^n)\)</span>{% endraw %} gives a further subsequence with {% raw %}<span class="math inline">\(Df_{k_j}\rightharpoonup G\)</span>{% endraw %}. For every test function, </p>
{% raw %}<div class="math display">\[\int_U f\partial_i\varphi=\lim_j\int_U f_{k_j}\partial_i\varphi
=-\lim_j\int_U\partial_if_{k_j}\varphi=-\int_U G_i\varphi.\]</div>{% endraw %}
<p> Hence {% raw %}<span class="math inline">\(Df=G\)</span>{% endraw %} and {% raw %}<span class="math inline">\(f\in W^{1,p}(U)\)</span>{% endraw %}; this is the step that uses reflexivity.</p>
<p>Theorem 13 and the extension bound give a uniform {% raw %}<span class="math inline">\(L^{p^\star}\)</span>{% endraw %} bound, and Fatou gives the same bound for {% raw %}<span class="math inline">\(f\)</span>{% endraw %}. For {% raw %}<span class="math inline">\(p&lt;q&lt;p^\star\)</span>{% endraw %}, choose {% raw %}<span class="math inline">\(0&lt;\theta&lt;1\)</span>{% endraw %} with {% raw %}<span class="math inline">\(1/q=\theta/p+(1-\theta)/p^\star\)</span>{% endraw %}. Then </p>
{% raw %}<div class="math display">\[\|f_{k_j}-f\|_q\leq\|f_{k_j}-f\|_p^\theta
\|f_{k_j}-f\|_{p^\star}^{1-\theta}\longrightarrow0.\]</div>{% endraw %}
<p> For {% raw %}<span class="math inline">\(1\leq q\leq p\)</span>{% endraw %}, use {% raw %}<span class="math inline">\(\|g\|_q\leq |U|^{1/q-1/p}\|g\|_p\)</span>{% endraw %}. The same subsequence works for all these exponents.</p>
<p>The exclusion of the endpoint is substantive. Choose {% raw %}<span class="math inline">\(x_0\in U\)</span>{% endraw %} and nonzero {% raw %}<span class="math inline">\(\phi\in C_c^\infty(B_1)\)</span>{% endraw %}, and for sufficiently small {% raw %}<span class="math inline">\(\varepsilon\)</span>{% endraw %} set </p>
{% raw %}<div class="math display">\[f_\varepsilon(x)=\varepsilon^{1-n/p}\phi((x-x_0)/\varepsilon).\]</div>{% endraw %}
<p> Its gradient norm and {% raw %}<span class="math inline">\(L^{p^\star}\)</span>{% endraw %} norm are fixed, while {% raw %}<span class="math inline">\(\|f_\varepsilon\|_p=\varepsilon\|\phi\|_p\)</span>{% endraw %} and {% raw %}<span class="math inline">\(f_\varepsilon\to0\)</span>{% endraw %} almost everywhere. It cannot have a strongly convergent subsequence in {% raw %}<span class="math inline">\(L^{p^\star}\)</span>{% endraw %}. For {% raw %}<span class="math inline">\(p=1&lt;n\)</span>{% endraw %}, the same mollification proof gives compactness in {% raw %}<span class="math inline">\(L^q\)</span>{% endraw %}, {% raw %}<span class="math inline">\(q&lt;n/(n-1)\)</span>{% endraw %}, but the limit is only guaranteed to be in {% raw %}<span class="math inline">\(BV(U)\)</span>{% endraw %}: testing the variation definition below and passing to the {% raw %}<span class="math inline">\(L^1\)</span>{% endraw %} limit gives a bounded distributional derivative. Smooth approximations to the indicator of a ball compactly contained in {% raw %}<span class="math inline">\(U\)</span>{% endraw %} show that this limit need not lie in {% raw %}<span class="math inline">\(W^{1,1}(U)\)</span>{% endraw %}.</p>

<h3 data-note-section="2" id="functions-of-bounded-variation">2. Functions of Bounded Variation</h3>
<p>Functions whose weak first partial derivatives are Radon measures are called <strong>functions of bounded variation on {% raw %}<span class="math inline">\(\mathbb R^n\)</span>{% endraw %}</strong>. This permits singular derivatives, including the boundary measure arising from the characteristic function of a smooth domain. It is not obvious that any of the usual rules of calculus apply to functions whose first derivatives are merely measures, so it is of interest to define and study functions of bounded variations. Henceforth, let {% raw %}<span class="math inline">\(U \subset \mathbb R^n\)</span>{% endraw %} be an open set, unless otherwise stated.</p>

<div id="def:bounded-variation-function" class="definition" data-note-number="18" data-note-kind="Definition">
<p><strong>Definition 18.</strong> An {% raw %}<span class="math inline">\(f\in L^1(U)\)</span>{% endraw %} belongs to {% raw %}<span class="math inline">\(BV(U)\)</span>{% endraw %} if </p>
{% raw %}<div class="math display">\[|Df|(U):=\sup_{\varphi\in C_c^1(U;\mathbb R^n),\ |\varphi|\leq1}
\int_U f\operatorname{div}\varphi\,dx&lt;\infty.\]</div>{% endraw %}
<p> The local space {% raw %}<span class="math inline">\(BV_{\rm loc}(U)\)</span>{% endraw %} consists of {% raw %}<span class="math inline">\(f\in L^1_{\rm loc}(U)\)</span>{% endraw %} for which the analogous supremum is finite on every {% raw %}<span class="math inline">\(V\Subset U\)</span>{% endraw %}.</p>
</div>
<div id="def:finite-perimeter" class="definition" data-note-number="19" data-note-kind="Definition">
<p><strong>Definition 19.</strong> A Lebesgue measurable set {% raw %}<span class="math inline">\(E\subset\mathbb R^n\)</span>{% endraw %} has <strong>finite perimeter in {% raw %}<span class="math inline">\(U\)</span>{% endraw %}</strong> if </p>
{% raw %}<div class="math display">\[P(E;U):=\sup_{\varphi\in C_c^1(U;\mathbb R^n),\ |\varphi|\leq1}
\int_{E\cap U}\operatorname{div}\varphi\,dx&lt;\infty.\]</div>{% endraw %}
<p> This requires a finite distributional derivative, not a finite volume. If also {% raw %}<span class="math inline">\(|E\cap U|&lt;\infty\)</span>{% endraw %} (in particular if {% raw %}<span class="math inline">\(U\)</span>{% endraw %} is bounded), this is equivalent to {% raw %}<span class="math inline">\(\mathbb1_E\in BV(U)\)</span>{% endraw %}. Locally finite perimeter means {% raw %}<span class="math inline">\(\mathbb1_E\in BV_{\rm loc}(U)\)</span>{% endraw %}.</p>
</div>
<p>The following theorem explains the notation {% raw %}<span class="math inline">\(|Df|\)</span>{% endraw %}: the distributional derivative is a vector-valued Radon measure, and {% raw %}<span class="math inline">\(|Df|\)</span>{% endraw %} is its total variation measure.</p>

<div id="thm:bounded-variation-structure" class="theorem" data-note-number="20" data-note-kind="Theorem">
<p><strong>Theorem 20</strong> ({% raw %}<span class="math inline">\(BV_{\rm loc}(U)\)</span>{% endraw %} Structure Theorem).  Suppose {% raw %}<span class="math inline">\(f \in BV_{\rm loc}(U)\)</span>{% endraw %}. Then, there exists a Radon measure {% raw %}<span class="math inline">\(\mu\)</span>{% endraw %} on {% raw %}<span class="math inline">\(U\)</span>{% endraw %}, and a {% raw %}<span class="math inline">\(\mu\)</span>{% endraw %}-measurable function {% raw %}<span class="math inline">\(\sigma : U \to \mathbb R^n\)</span>{% endraw %} such that the following conditions hold:</p>

<ol>
<li><p>{% raw %}<span class="math inline">\(|\sigma(x)|=1\)</span>{% endraw %} for {% raw %}<span class="math inline">\(\mu\)</span>{% endraw %}-a.e.;</p></li>
<li><p>for all {% raw %}<span class="math inline">\(\varphi \in \mathscr C^1_c (U; \mathbb R^n)\)</span>{% endraw %}, </p>

{% raw %}<div class="math display">\[\begin{aligned}
            \int_U f \operatorname{div}\varphi \dif x = - \int_U \varphi \cdot \sigma \dif \mu ~.
        
\end{aligned}\]</div>{% endraw %}</li>
</ol>
</div>
<div class="proof">
<p><em>Proof.</em> The trick is to define a linear functional </p>

{% raw %}<div class="math display">\[\begin{aligned}
        L : \mathscr C^1_c (U; \mathbb R^n) \to \mathbb R : \varphi \mapsto -\int_U f \operatorname{div}\varphi \dif x ~.
    
\end{aligned}\]</div>{% endraw %}
<p> This is linear by the definition of an integral. Since {% raw %}<span class="math inline">\(f \in BV_{\rm loc}(U)\)</span>{% endraw %}, </p>

{% raw %}<div class="math display">\[\begin{aligned}
        \alpha(V) \triangleq \sup_{\varphi \in \mathscr C^1_c (V;\mathbb R^n) : |\varphi|\leq 1} \int_V f \operatorname{div} \varphi \dif x &lt; \infty ~.
    
\end{aligned}\]</div>{% endraw %}
<p> Therefore, {% raw %}<span class="math inline">\(|L(\varphi)|\leq \alpha(V) \|\varphi\|_{L^\infty}\)</span>{% endraw %}, hence giving us a Lipschitz constant-like bound. It remains to verify that we can apply the Riesz representation theorem.</p>

<p>Pick any compact set {% raw %}<span class="math inline">\(K \subset U\)</span>{% endraw %}, and choose an open set {% raw %}<span class="math inline">\(V\)</span>{% endraw %} such that {% raw %}<span class="math inline">\(K \subset V \subset_c U\)</span>{% endraw %}. For every {% raw %}<span class="math inline">\(\varphi \in \mathscr C_c(U; \mathbb R^n)\)</span>{% endraw %} such that {% raw %}<span class="math inline">\(\operatorname{spt}(\varphi) \subset K\)</span>{% endraw %}, we can pick some sequence of approximating functions {% raw %}<span class="math inline">\(\varphi_k \in \mathscr C^1_c (V; \mathbb R^n)\)</span>{% endraw %} such that {% raw %}<span class="math inline">\(\varphi_k \to \varphi\)</span>{% endraw %} uniformly on {% raw %}<span class="math inline">\(V\)</span>{% endraw %}. The limit </p>

{% raw %}<div class="math display">\[\begin{aligned}
        L^*(\varphi) \triangleq \lim\limits_{k\to\infty} L(\varphi_k)
    
\end{aligned}\]</div>{% endraw %}
<p> exists by the estimate on {% raw %}<span class="math inline">\(|L(\varphi)|\)</span>{% endraw %}, and this is independent of the choice of the sequence of {% raw %}<span class="math inline">\(\varphi_k\)</span>{% endraw %}. Therefore, there exists a unique extension of {% raw %}<span class="math inline">\(L\)</span>{% endraw %} to a linear functional {% raw %}<span class="math inline">\(L^* : \mathscr C_c (U; \mathbb R^n) \to \mathbb R\)</span>{% endraw %} such that {% raw %}<span class="math inline">\(\sup \{L(\varphi) : \varphi \in \mathscr C_c(U; \mathbb R^n) ~,~ \operatorname{spt}(\varphi) \subset K ~,~ |\varphi| \leq 1\} &lt; \infty\)</span>{% endraw %} for each compact set {% raw %}<span class="math inline">\(K \subset U\)</span>{% endraw %}. Applying the Riesz representation theorem to the components gives a unique vector-valued Radon measure representing this functional. The remaining step is its polar decomposition, detailed below.</p>

</div>
<p>To finish Theorem 20, denote the representing vector measure by {% raw %}<span class="math inline">\(Df=(D_1f,\ldots,D_nf)\)</span>{% endraw %} and its total variation by {% raw %}<span class="math inline">\(\mu=|Df|\)</span>{% endraw %}. Each component is absolutely continuous with respect to {% raw %}<span class="math inline">\(\mu\)</span>{% endraw %}. The Radon–Nikodym theorem therefore gives {% raw %}<span class="math inline">\(Df=\sigma\mu\)</span>{% endraw %}. The variation of a vector measure with density {% raw %}<span class="math inline">\(\sigma\)</span>{% endraw %} is {% raw %}<span class="math inline">\(|\sigma|\mu\)</span>{% endraw %} (first check simple densities on disjoint measurable sets, then approximate in {% raw %}<span class="math inline">\(L^1(\mu)\)</span>{% endraw %} on compact sets). Since {% raw %}<span class="math inline">\(\mu\)</span>{% endraw %} is already the variation of {% raw %}<span class="math inline">\(Df\)</span>{% endraw %}, {% raw %}<span class="math inline">\(|\sigma|=1\)</span>{% endraw %} {% raw %}<span class="math inline">\(\mu\)</span>{% endraw %}-almost everywhere. Thus </p>
{% raw %}<div class="math display">\[\int_U f\operatorname{div}\varphi\,dx=-\int_U\varphi\cdot\sigma\,d\mu.\]</div>{% endraw %}
<p> The vector measure is unique by uniqueness in Riesz representation; hence {% raw %}<span class="math inline">\(\mu\)</span>{% endraw %} is unique and {% raw %}<span class="math inline">\(\sigma\)</span>{% endraw %} is unique {% raw %}<span class="math inline">\(\mu\)</span>{% endraw %}-almost everywhere. The dual characterization of total variation by continuous compactly supported fields of norm at most one, followed by uniform smooth approximation with arbitrarily small rescaling, identifies {% raw %}<span class="math inline">\(\mu(V)\)</span>{% endraw %} with the supremum in Definition 18 for each open {% raw %}<span class="math inline">\(V\subset U\)</span>{% endraw %}. In the global case its total mass is finite.</p>
<div id="result-21" class="example" data-note-number="21" data-note-kind="Example">
<p><strong>Example 21.</strong> (Sobolev functions.) If {% raw %}<span class="math inline">\(f\in W^{1,1}_{\rm loc}(U)\)</span>{% endraw %}, then for {% raw %}<span class="math inline">\(V\Subset U\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\varphi\in C_c^1(V;\mathbb R^n)\)</span>{% endraw %} with {% raw %}<span class="math inline">\(|\varphi|\leq1\)</span>{% endraw %}, </p>
{% raw %}<div class="math display">\[\int_Uf\operatorname{div}\varphi\,dx=-\int_UDf\cdot\varphi\,dx\leq\int_V|Df|\,dx&lt;\infty.\]</div>{% endraw %}
<p> Here the Sobolev gradient is a function; its associated derivative measure is {% raw %}<span class="math inline">\(Df\,dx\)</span>{% endraw %}, with total variation {% raw %}<span class="math inline">\(|Df|\,dx\)</span>{% endraw %}. Its polar density is {% raw %}<span class="math inline">\(\sigma=Df/|Df|\)</span>{% endraw %} where {% raw %}<span class="math inline">\(Df\ne0\)</span>{% endraw %}, and can be set to zero on the set where {% raw %}<span class="math inline">\(Df=0\)</span>{% endraw %} (which has zero variation measure). Consequently </p>
{% raw %}<div class="math display">\[W^{1,1}_{\rm loc}(U)\subset BV_{\rm loc}(U),\qquad W^{1,1}(U)\subset BV(U).\]</div>{% endraw %}
<p> Hölder on relatively compact subsets also gives {% raw %}<span class="math inline">\(W^{1,p}_{\rm loc}(U)\subset BV_{\rm loc}(U)\)</span>{% endraw %} for every {% raw %}<span class="math inline">\(1\leq p\leq\infty\)</span>{% endraw %}.</p>
</div>
<div id="result-22" class="example" data-note-number="22" data-note-kind="Example">
<p><strong>Example 22.</strong> (Smooth sets and singular derivatives.) Let {% raw %}<span class="math inline">\(E\)</span>{% endraw %} be a smooth open set with {% raw %}<span class="math inline">\(\mathcal H^{n-1}(\partial E\cap K)&lt;\infty\)</span>{% endraw %} for every compact {% raw %}<span class="math inline">\(K\subset U\)</span>{% endraw %}. Gauss–Green gives, for {% raw %}<span class="math inline">\(\varphi\in C_c^1(U;\mathbb R^n)\)</span>{% endraw %}, </p>
{% raw %}<div class="math display">\[\int_U\mathbb1_E\operatorname{div}\varphi\,dx
=\int_{\partial E\cap U}\varphi\cdot\nu\,d\mathcal H^{n-1},\]</div>{% endraw %}
<p> where {% raw %}<span class="math inline">\(\nu\)</span>{% endraw %} is the outward normal. In particular, when {% raw %}<span class="math inline">\(|\varphi|\leq1\)</span>{% endraw %} and its support lies in {% raw %}<span class="math inline">\(V\Subset U\)</span>{% endraw %}, this integral is at most {% raw %}<span class="math inline">\(\mathcal H^{n-1}(\partial E\cap\overline V)&lt;\infty\)</span>{% endraw %}. Hence {% raw %}<span class="math inline">\(\mathbb1_E\in BV_{\rm loc}(U)\)</span>{% endraw %} and uniqueness in Theorem 20 identifies </p>
{% raw %}<div class="math display">\[D\mathbb1_E=-\nu\,\mathcal H^{n-1}\mathbin{\restriction}(\partial E\cap U),\qquad
|D\mathbb1_E|=\mathcal H^{n-1}\mathbin{\restriction}(\partial E\cap U).\]</div>{% endraw %}
<p> The polar vector in Theorem 20 is {% raw %}<span class="math inline">\(\sigma=-\nu\)</span>{% endraw %}. If the measure-theoretic outward normal is written {% raw %}<span class="math inline">\(\nu_E\)</span>{% endraw %}, its convention is {% raw %}<span class="math inline">\(\nu_E=-\sigma=\nu\)</span>{% endraw %}. The perimeter measure, sometimes denoted {% raw %}<span class="math inline">\(\|\partial E\|\)</span>{% endraw %}, is {% raw %}<span class="math inline">\(|D\mathbb1_E|\)</span>{% endraw %}.</p>
<p>If {% raw %}<span class="math inline">\(\partial E\cap U\)</span>{% endraw %} is nonempty, its smooth hypersurface measure is locally positive but singular with respect to {% raw %}<span class="math inline">\(n\)</span>{% endraw %}-dimensional Lebesgue measure. Therefore {% raw %}<span class="math inline">\(D\mathbb1_E\)</span>{% endraw %} cannot be represented by a locally integrable function, so {% raw %}<span class="math inline">\(\mathbb1_E\notin W^{1,1}_{\rm loc}(U)\)</span>{% endraw %}. This conclusion needs a boundary inside {% raw %}<span class="math inline">\(U\)</span>{% endraw %}; it is false, for example, if {% raw %}<span class="math inline">\(E=\mathbb R^n\)</span>{% endraw %}. For any nonempty open {% raw %}<span class="math inline">\(U\)</span>{% endraw %}, choosing a ball with closure contained in {% raw %}<span class="math inline">\(U\)</span>{% endraw %} supplies an indicator with finite volume and perimeter, proving </p>
{% raw %}<div class="math display">\[W^{1,1}_{\rm loc}(U)\subsetneqq BV_{\rm loc}(U),\qquad W^{1,1}(U)\subsetneqq BV(U).\]</div>{% endraw %}

</div>

<p class="note-reading">Reading: Carmo (1992), Riemannian geometry.</p>


<nav class="note-related" aria-label="Related notes"><p>Related notes: <a href="{% post_url 2022-03-04-topological-tools-for-manifolds %}">Topological Tools for Manifolds</a>.</p></nav>

<nav class="note-series" aria-label="Notes in this series"><p>Previous: <a href="{% post_url 2023-01-27-why-complex-projective-space-is-hausdorff %}">Why Complex Projective Space Is Hausdorff</a> · Next: <a href="{% post_url 2024-08-03-graph-laplacians-isoperimetry-and-diameter-bounds %}">Graph Laplacians, Isoperimetry, and Diameter Bounds</a></p></nav>

</div>
