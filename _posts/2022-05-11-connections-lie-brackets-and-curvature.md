---
layout: "post"
title: "Connections, Lie Brackets, and Curvature"
date: "2022-05-11"
tags: ["math", "differential geometry"]
excerpt: "We now briefly review some concepts from linear algebra and differential topology."
note_series: "Differential geometry"
note_source: "assets/notes/Differential Geometry - Notes/diff-geo.tex"
redirect_from: ["/2022/05/11/affine-connection-riemann-curvature-parallel-transport/", "/2022/05/24/lie-bracket/", "/2022/07/04/affine-and-riemannian-connection/", "/2022/07/18/riemann-curvature/"]
---

<div class="note-content" markdown="0">

<p>Let {% raw %}<span class="math inline">\((M,g)\)</span>{% endraw %} be a smooth Riemannian manifold. Write {% raw %}<span class="math inline">\(\nabla\)</span>{% endraw %} for its Levi–Civita connection and {% raw %}<span class="math inline">\(T_pM\)</span>{% endraw %} for the tangent space at {% raw %}<span class="math inline">\(p\)</span>{% endraw %}. The coordinate conventions are those in <a href="{% post_url 2022-03-17-tangent-spaces-and-riemannian-metrics %}">tangent spaces and derivations</a>.</p>

<div id="sec:connection-curvature-pt" data-note-section="title">

</div>
<p>To differentiate a vector field, we must compare vectors based at different points. Coordinates permit a comparison, but their basis vectors also vary. A connection specifies how to account for this variation. We develop this derivative for vector fields on differentiable manifolds {% raw %}<span class="math inline">\(M\)</span>{% endraw %}. The Lie bracket describes the commutator of vector fields acting on functions; curvature then describes the corresponding failure of covariant derivatives to commute.</p>

<h3 data-note-section="1" id="elementary-differential-topology">1. Elementary Differential Topology</h3>
<p>We first specify the bundles and tensor fields on which these operations act. The local trivializations keep track of how a vector space varies with its base point.</p>

<div id="def:vector-bundle-diff" class="definition" data-note-number="1" data-note-kind="Definition">
<p><strong>Definition 1</strong>.  A triple {% raw %}<span class="math inline">\((\mathcal E, \Pi, M)\)</span>{% endraw %} is called a <em>differentiable vector bundle of rank {% raw %}<span class="math inline">\(n\)</span>{% endraw %}</em> if {% raw %}<span class="math inline">\(\mathcal E\)</span>{% endraw %} and {% raw %}<span class="math inline">\(M\)</span>{% endraw %} are differentiable manifolds, {% raw %}<span class="math inline">\(\Pi : \mathcal E \to M\)</span>{% endraw %} is a differentiable projection map, and each fibre {% raw %}<span class="math inline">\(\mathcal E_X \triangleq \Pi^{-1} (X)\)</span>{% endraw %} for {% raw %}<span class="math inline">\(X \in M\)</span>{% endraw %} carries the structure of a {% raw %}<span class="math inline">\(n\)</span>{% endraw %}-dimensional vector space. Furthermore, the following <em>local triviality condition</em> holds: for all {% raw %}<span class="math inline">\(X \in M\)</span>{% endraw %}, there exists a neighbourhood {% raw %}<span class="math inline">\(U\)</span>{% endraw %} and a diffeomorphism {% raw %}<span class="math inline">\(\varphi : \Pi^{-1} (U) \to U \times \mathbb R^n\)</span>{% endraw %} with the property that for all {% raw %}<span class="math inline">\(y \in U\)</span>{% endraw %}, {% raw %}<span class="math inline">\(\varphi_y \triangleq \varphi\big|_{\mathcal E_y} : \mathcal E_y \to \{y\} \times \mathbb R^n\)</span>{% endraw %} is a vector space isomorphism. By way of nomenclature, {% raw %}<span class="math inline">\((\varphi, U)\)</span>{% endraw %} is a bundle chart.</p>

</div>
<div id="result-2" class="definition" data-note-number="2" data-note-kind="Definition">
<p><strong>Definition 2</strong>.  A <em>{% raw %}<span class="math inline">\(p\)</span>{% endraw %}-times contravariant, {% raw %}<span class="math inline">\(q\)</span>{% endraw %}-times covariant tensor field</em> on differentiable manifold {% raw %}<span class="math inline">\(M\)</span>{% endraw %} is a <em>section</em> of </p>

{% raw %}<div class="math display">\[\underbrace{TM \otimes \cdots \otimes TM}_{p \text{ times}} \otimes \underbrace{T^* M \otimes \cdots \otimes T^* M}_{q \text{ times}} ~.\]</div>{% endraw %}
</div>
<div id="result-3" class="definition" data-note-number="3" data-note-kind="Definition">
<p><strong>Definition 3.</strong> For a finite-dimensional real vector space {% raw %}<span class="math inline">\(V\)</span>{% endraw %}, let {% raw %}<span class="math inline">\(V^*=\operatorname{Hom}(V,\mathbb R)\)</span>{% endraw %}. The space {% raw %}<span class="math inline">\(T^r_s(V)\)</span>{% endraw %} consists of multilinear maps</p>
<p> {% raw %}<div class="math display">\[(V^*)^r\times V^s\longrightarrow\mathbb R.\]</div>{% endraw %}</p>
<p> It is canonically isomorphic to {% raw %}<span class="math inline">\(V^{\otimes r}\otimes(V^*)^{\otimes s}\)</span>{% endraw %}, by evaluating each vector against the corresponding covector and each covector against the corresponding vector. In a basis, the coefficients on basis arguments determine a multilinear map uniquely, proving this identification. The space {% raw %}<span class="math inline">\(\Lambda^s(V^*)\)</span>{% endraw %} is the subspace of alternating {% raw %}<span class="math inline">\((0,s)\)</span>{% endraw %}-tensors; {% raw %}<span class="math inline">\(\Lambda^0(V^*)=\mathbb R\)</span>{% endraw %}.</p>
</div>
<div id="def:section-contravariant-covariant" class="definition" data-note-number="4" data-note-kind="Definition">
<p><strong>Definition 4</strong>.  Let {% raw %}<span class="math inline">\(M\)</span>{% endraw %} be a differentiable manifold of dimension {% raw %}<span class="math inline">\(n\)</span>{% endraw %}. Let {% raw %}<span class="math inline">\(\Pi : \mathcal E \to M\)</span>{% endraw %} be a projection map, and denote the {% raw %}<span class="math inline">\(\mathscr C^\infty\)</span>{% endraw %} vector bundle as {% raw %}<span class="math inline">\((\mathcal E, \Pi, M)\)</span>{% endraw %}.</p>

<ol>
<li><p><span id="def:section" data-label="def:section"></span> A <em>section</em> of {% raw %}<span class="math inline">\(\mathcal E\)</span>{% endraw %} is a differentiable map {% raw %}<span class="math inline">\(s : M \to \mathcal E\)</span>{% endraw %} such that {% raw %}<span class="math inline">\(\Pi \circ s = \mathbb 1_M\)</span>{% endraw %}.</p></li>
<li><p>{% raw %}<span class="math inline">\(\Gamma (\mathcal E)\)</span>{% endraw %} denote the set of sections of {% raw %}<span class="math inline">\(\mathcal E\)</span>{% endraw %}.</p></li>
<li><p>{% raw %}<span class="math inline">\(\Gamma (TM)\)</span>{% endraw %} denotes the set of vector fields (contravariant tensor fields of degree one) on {% raw %}<span class="math inline">\(M\)</span>{% endraw %}, with {% raw %}<span class="math inline">\(TM = \bigsqcup_{p \in M} T_p M\)</span>{% endraw %} being the tangent bundle.</p></li>
<li><p>{% raw %}<span class="math inline">\(\Gamma (\Lambda_s M)\)</span>{% endraw %} denotes the set of {% raw %}<span class="math inline">\(s\)</span>{% endraw %}-forms on {% raw %}<span class="math inline">\(M\)</span>{% endraw %}, with {% raw %}<span class="math inline">\(\Lambda_s M = \Lambda^s (T^*M)\)</span>{% endraw %} and {% raw %}<span class="math inline">\(T^*M = \bigsqcup_{p \in M} T_p^* M\)</span>{% endraw %} being the cotangent bundle.</p></li>
<li><p>{% raw %}<span class="math inline">\(\Gamma(T^r_s M)\)</span>{% endraw %} denotes the set of {% raw %}<span class="math inline">\((r,s)\)</span>{% endraw %}-tensor fields on {% raw %}<span class="math inline">\(M\)</span>{% endraw %}, with {% raw %}<span class="math inline">\(T^r_s M\)</span>{% endraw %} being the tensor bundle {% raw %}<span class="math inline">\(\underbrace{TM \otimes \cdots \otimes TM}_{r \text{ times}} \otimes \underbrace{T^* M \otimes \cdots \otimes T^* M}_{s \text{ times}}\)</span>{% endraw %}.</p></li>
</ol>
</div>
<div id="result-5" class="example" data-note-number="5" data-note-kind="Example">
<p><strong>Example 5</strong>.  {% raw %}<span class="math inline">\(g_{ij}\)</span>{% endraw %} is a {% raw %}<span class="math inline">\((0,2)\)</span>{% endraw %}-tensor field, i.e. {% raw %}<span class="math inline">\(g \in \Gamma(T^0_2 M)\)</span>{% endraw %} by definition.</p>

</div>
<div id="result-6" class="definition" data-note-number="6" data-note-kind="Definition">
<p><strong>Definition 6.</strong> A smooth symmetric {% raw %}<span class="math inline">\((0,2)\)</span>{% endraw %}-tensor field {% raw %}<span class="math inline">\(g\in\Gamma(T^0_2M)\)</span>{% endraw %} is a pseudo-Riemannian metric when each bilinear form {% raw %}<span class="math inline">\(g_p\)</span>{% endraw %} is nondegenerate: if {% raw %}<span class="math inline">\(g_p(v,w)=0\)</span>{% endraw %} for every {% raw %}<span class="math inline">\(v\in T_pM\)</span>{% endraw %}, then {% raw %}<span class="math inline">\(w=0\)</span>{% endraw %}. It is a Riemannian metric if each {% raw %}<span class="math inline">\(g_p\)</span>{% endraw %} is positive definite.</p>
</div>
<div id="result-7" class="definition" data-note-number="7" data-note-kind="Definition">
<p><strong>Definition 7.</strong> A Lorentzian metric is a smooth pseudo-Riemannian metric of index one: at each point, the maximal dimension of a subspace on which it is negative definite is one. Smoothness, rather than mere continuity, is assumed for the connection and curvature constructions below.</p>
</div>
<div id="result-8" class="remark" data-note-number="8" data-note-kind="Remark">
<p><strong>Remark 8</strong>.  An equivalent formulation of a Lorentzian metric is the following. Quadratic form {% raw %}<span class="math inline">\(g_p\)</span>{% endraw %} in {% raw %}<span class="math inline">\(T_p M\)</span>{% endraw %} is Lorentzian if there exists {% raw %}<span class="math inline">\(V \in T_p M\)</span>{% endraw %} such that {% raw %}<span class="math inline">\(g_p (V,V) &lt; 0\)</span>{% endraw %}, while {% raw %}<span class="math inline">\(g_p|_{\Sigma_V}\)</span>{% endraw %} is a Riemannian metric, where {% raw %}<span class="math inline">\(\Sigma_V \triangleq \{X \in T_p M : g_p (X,V) = 0 \}\)</span>{% endraw %}.</p>

<p>To verify the equivalence, choose a negative vector {% raw %}<span class="math inline">\(V\)</span>{% endraw %}. Nondegeneracy and {% raw %}<span class="math inline">\(g(V,V)\ne0\)</span>{% endraw %} give {% raw %}<span class="math inline">\(T_pM=\mathbb RV\oplus V^\perp\)</span>{% endraw %}. The restriction to {% raw %}<span class="math inline">\(V^\perp\)</span>{% endraw %} is nondegenerate: a vector orthogonal to both summands is orthogonal to all of {% raw %}<span class="math inline">\(T_pM\)</span>{% endraw %} and hence zero. Index one rules out a negative direction in {% raw %}<span class="math inline">\(V^\perp\)</span>{% endraw %}, so its restriction is positive definite. Conversely a negative line orthogonal to a positive-definite complement has exactly one negative direction, by this direct sum decomposition.</p>
</div>
<div id="result-9" class="definition" data-note-number="9" data-note-kind="Definition">
<p><strong>Definition 9 (Pullback bundle).</strong> If {% raw %}<span class="math inline">\(f:M\to N\)</span>{% endraw %} is smooth and {% raw %}<span class="math inline">\(\pi:E\to N\)</span>{% endraw %} is a rank-{% raw %}<span class="math inline">\(r\)</span>{% endraw %} smooth vector bundle, define</p>
<p> {% raw %}<div class="math display">\[f^*E=\{(p,e)\in M\times E:\pi(e)=f(p)\},\qquad\pi_f(p,e)=p.\]</div>{% endraw %}</p>
<p> Its fibre at {% raw %}<span class="math inline">\(p\)</span>{% endraw %} is the vector space {% raw %}<span class="math inline">\(E_{f(p)}\)</span>{% endraw %}. If a bundle chart has the form {% raw %}<span class="math inline">\(\varphi(e)=(\pi(e),\xi(e))\)</span>{% endraw %} over {% raw %}<span class="math inline">\(U\subset N\)</span>{% endraw %}, the induced chart is</p>
<p> {% raw %}<div class="math display">\[(p,e)\longmapsto(p,\xi(e))\in f^{-1}(U)\times\mathbb R^r.\]</div>{% endraw %}</p>
<p> On overlaps the fibre-coordinate change is the original transition matrix evaluated at {% raw %}<span class="math inline">\(f(p)\)</span>{% endraw %}, hence is smooth and linear. These charts define the smooth vector-bundle structure. The expression {% raw %}<span class="math inline">\(\varphi\circ f\)</span>{% endraw %} alone is ill-typed, since {% raw %}<span class="math inline">\(f\)</span>{% endraw %} takes values in the base, not in {% raw %}<span class="math inline">\(E\)</span>{% endraw %}.</p>
</div>
<div id="result-10" class="definition" data-note-number="10" data-note-kind="Definition">
<p><strong>Definition 10</strong>.  Let {% raw %}<span class="math inline">\((\mathcal E_1, \Pi_1, N)\)</span>{% endraw %} and {% raw %}<span class="math inline">\((\mathcal E_2, \Pi_2, N)\)</span>{% endraw %} denote vector bundles over {% raw %}<span class="math inline">\(N\)</span>{% endraw %}. A differentiable map {% raw %}<span class="math inline">\(f : \mathcal E_1 \to \mathcal E_2\)</span>{% endraw %} is said to be <em>fibre-preserving</em> if {% raw %}<span class="math inline">\(\Pi_2 \circ f = \Pi_1\)</span>{% endraw %}. Furthermore, let {% raw %}<span class="math inline">\(\mathcal E_{1,x}\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\mathcal E_{2,x}\)</span>{% endraw %} denote the fibres of {% raw %}<span class="math inline">\(\mathcal E_1\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\mathcal E_2\)</span>{% endraw %}, respectively, and let {% raw %}<span class="math inline">\(f_x : \mathcal E_{1,x} \to \mathcal E_{2,x}\)</span>{% endraw %} be a linear map. Then, {% raw %}<span class="math inline">\(f\)</span>{% endraw %} is said to be a <em>bundle homomorphism</em>.</p>

</div>
<div id="def:subbundle" class="definition" data-note-number="11" data-note-kind="Definition">
<p><strong>Definition 11</strong>.  Let {% raw %}<span class="math inline">\((\mathcal E, \Pi, N)\)</span>{% endraw %} be a vector bundle of rank {% raw %}<span class="math inline">\(n\)</span>{% endraw %}. Let {% raw %}<span class="math inline">\(\mathcal E&#x27; \subset \mathcal E\)</span>{% endraw %}. Assume that for all {% raw %}<span class="math inline">\(x \in N\)</span>{% endraw %}, there exists a bundle chart {% raw %}<span class="math inline">\((\varphi, U)\)</span>{% endraw %} such that {% raw %}<span class="math inline">\(x \in U\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(\varphi(\Pi^{-1}(U) \cap \mathcal E&#x27;) = U\times \mathbb R^m \subset U \times \mathbb R^n\)</span>{% endraw %}. Then, the restriction of the full vector bundle to {% raw %}<span class="math inline">\(\mathcal E&#x27;\)</span>{% endraw %}, denoted {% raw %}<span class="math inline">\((\mathcal E&#x27;, \Pi|_{\mathcal E&#x27;}, N)\)</span>{% endraw %}, is called the <em>subbundle of rank {% raw %}<span class="math inline">\(m\)</span>{% endraw %}</em>.</p>

</div>
<p>The details of these concepts can be found in Appendix <a href="{% post_url 2024-02-22-vector-fields-and-their-flows %}#app:flows" data-reference-type="ref" data-reference="app:flows">Vector Fields and Their Flows</a>.</p>

<h3 data-note-section="2" id="lie-bracket">2. Lie Bracket</h3>
<p>Composing two directional derivatives usually produces a second-order operator. Taking their commutator cancels the second-order terms and leaves another vector field. A reminder of vector fields is contained in Appendix <a href="{% post_url 2024-02-22-vector-fields-and-their-flows %}#app:flows" data-reference-type="ref" data-reference="app:flows">Vector Fields and Their Flows</a>.</p>

<p>Let {% raw %}<span class="math inline">\(X, Y\)</span>{% endraw %} be smooth vector fields on a smooth manifold {% raw %}<span class="math inline">\(M\)</span>{% endraw %}. Given a smooth real-valued function {% raw %}<span class="math inline">\(f \in \mathscr C^\infty (M)\)</span>{% endraw %}, we can apply {% raw %}<span class="math inline">\(X\)</span>{% endraw %} to {% raw %}<span class="math inline">\(f\)</span>{% endraw %} and obtain another smooth function, {% raw %}<span class="math inline">\(Xf\)</span>{% endraw %}. In turn, we can apply {% raw %}<span class="math inline">\(Y\)</span>{% endraw %} to this function, and obtain yet another smooth function {% raw %}<span class="math inline">\(YX f = Y(Xf)\)</span>{% endraw %}. But, {% raw %}<span class="math inline">\(f \mapsto YX f\)</span>{% endraw %} is generally not a vector field. An example is {% raw %}<span class="math inline">\(X = \pd{}{x}\)</span>{% endraw %} and {% raw %}<span class="math inline">\(Y = x \pd{}{y}\)</span>{% endraw %}, {% raw %}<span class="math inline">\(f(x,y)=x\)</span>{% endraw %} and {% raw %}<span class="math inline">\(g(x,y)=y\)</span>{% endraw %}. Then, {% raw %}<span class="math inline">\(XY(fg) = X(x^2) = 2x\)</span>{% endraw %}, but {% raw %}<span class="math inline">\(f XYg + gXY f = x\)</span>{% endraw %}, so the Leibniz rule does not hold. The following object, however, is a smooth vector field.</p>

<div id="result-12" class="definition" data-note-number="12" data-note-kind="Definition">
<p><strong>Definition 12</strong>.  Let {% raw %}<span class="math inline">\(M\)</span>{% endraw %} be a differentiable manifold. For any smooth vector fields {% raw %}<span class="math inline">\(X\)</span>{% endraw %} and {% raw %}<span class="math inline">\(Y\)</span>{% endraw %} along {% raw %}<span class="math inline">\(M\)</span>{% endraw %}, the <em>Lie bracket</em> of {% raw %}<span class="math inline">\(X\)</span>{% endraw %} and {% raw %}<span class="math inline">\(Y\)</span>{% endraw %} is a map {% raw %}<span class="math inline">\([\cdot,\cdot]\)</span>{% endraw %} on {% raw %}<span class="math inline">\(\mathscr X (M) \times \mathscr X(M)\)</span>{% endraw %}, defined as </p>

{% raw %}<div class="math display">\[[X,Y](f) = X(Yf) - Y(Xf) \text{ for all } f \in \mathscr C^\infty (M) ~.\]</div>{% endraw %}
</div>
<div id="result-13" class="proposition" data-note-number="13" data-note-kind="Proposition">
<p><strong>Proposition 13</strong>.  Let {% raw %}<span class="math inline">\(M\)</span>{% endraw %} be a differentiable manifold, and {% raw %}<span class="math inline">\(X,Y \in \mathscr X(M)\)</span>{% endraw %}. Then, {% raw %}<span class="math inline">\([X,Y]\)</span>{% endraw %} is a vector field.</p>

<p>The Leibniz calculation below proves that the bracket is a derivation. Its smoothness is also explicit: in a chart, the second derivatives of the test function cancel, leaving coefficients {% raw %}<span class="math inline">\(X^i\partial_iY^j-Y^i\partial_iX^j\)</span>{% endraw %}, which are smooth. Thus the derivation corresponds to a smooth tangent-vector field.</p>
</div>
<div class="proof">
<p><em>Proof.</em> Linearity follows from the definition. The product rule is the substantive check: the two mixed terms must cancel. For any {% raw %}<span class="math inline">\(f,g \in \mathscr C^\infty (M)\)</span>{% endraw %}, </p>

{% raw %}<div class="math display">\[\begin{aligned}
        [X,Y](fg) &amp;= XY (fg) - YX(fg) = X(f Yg + g Yf) - Y(f Xg + g Xf) \\
        &amp;= fXY g + Xf Yg + gX Yf + Xg Yf - fY Xg - Yf Xg - Yg Xf - gY Xf \\
        &amp;= f[X,Y]g + g[X,Y]f ~,
    
\end{aligned}\]</div>{% endraw %}
<p> as desired. ◻</p>

</div>
<p>The Lie bracket also admits representation in local coordinates. In particular, let {% raw %}<span class="math inline">\(\{x^i\}\)</span>{% endraw %} be local coordinate functions for {% raw %}<span class="math inline">\(M\)</span>{% endraw %}. Then, {% raw %}<span class="math inline">\(X = X^i \pd{}{{x^i}}\)</span>{% endraw %} and {% raw %}<span class="math inline">\(Y = Y^j \pd{}{{x^j}}\)</span>{% endraw %}, so we can write </p>

{% raw %}<div class="math display">\[\begin{aligned}
    [X,Y] = \left( X^i \dpd{{Y^j}}{{x^i}} - Y^i \dpd{{X^j}}{{x^i}} \right) \dpd{}{{x^j}} ~.
\end{aligned}\]</div>{% endraw %}
<div id="result-14" class="proposition" data-note-number="14" data-note-kind="Proposition">
<p><strong>Proposition 14</strong> (Properties of the Lie Bracket).  For all {% raw %}<span class="math inline">\(X,Y,Z \in \mathscr X(M)\)</span>{% endraw %},</p>

<ol>
<li><p>For all {% raw %}<span class="math inline">\(a,b \in \mathbb R\)</span>{% endraw %}, </p>

{% raw %}<div class="math display">\[\begin{aligned}
            [aX + bY, Z] &amp;= a[X,Z] + b[Y,Z] ~, \\
            [X, aY + bZ] &amp;= a[X,Y] + b[X,Z] ~.
        
\end{aligned}\]</div>{% endraw %}</li>
<li><p>(Skew-Symmetry) {% raw %}<span class="math inline">\([X,Y] = -[Y,X]\)</span>{% endraw %}.</p></li>
<li><p>(Jacobi’s Identity) {% raw %}<span class="math inline">\([X,[Y,Z]] + [Y,[Z,X]] + [Z,[X,Y]] = 0\)</span>{% endraw %}.</p></li>
<li><p>For all {% raw %}<span class="math inline">\(f,g \in \mathscr C^\infty (M)\)</span>{% endraw %}, </p>

{% raw %}<div class="math display">\[\begin{aligned}
            [fX, gY] = fg[X,Y] + (fXg) Y - (gYf) X ~.
        
\end{aligned}\]</div>{% endraw %}</li>
</ol>
</div>
<div class="proof">
<p><em>Proof.</em> (a) and (b) follow from definition. For (c), let {% raw %}<span class="math inline">\(f \in \mathscr C^\infty (M)\)</span>{% endraw %}. Direct calculations show that </p>

{% raw %}<div class="math display">\[\begin{aligned}
        [X,[Y,Z]](f) &amp;= [X,YZ-ZY](f) = [X,YZ](f) - [X,ZY](f) \\
        &amp;= XYZf - YZXf - XZYf + ZYXf ~.
    
\end{aligned}\]</div>{% endraw %}
<p> Analogously, </p>

{% raw %}<div class="math display">\[\begin{aligned}
        [Y,[Z,X]](f) &amp;= YZXf - ZXYf - YXZf + XZYf ~, \\
        [Z,[X,Y]](f) &amp;= ZXYf - XYZf - ZYXf + YXZf ~. 
    
\end{aligned}\]</div>{% endraw %}
<p> All terms cancel out upon adding these three identities. For (d), let {% raw %}<span class="math inline">\(h \in \mathscr C^\infty (M)\)</span>{% endraw %}. Then, direct calculations reveal that </p>

{% raw %}<div class="math display">\[\begin{aligned}
        [fX, gY](h) &amp;= (fXgY)(h) - (gYfX)(h) \\
        &amp;= fg XY(h) + f(Xg)Y (h) - gf YX (h) - g(Yf) X(h) \\
        &amp;= fg[X,Y](h) + (fXg)Y (h) - (gYf) X(h) ~,
    
\end{aligned}\]</div>{% endraw %}
<p> as desired. ◻</p>

</div>
<div id="prop:F-related-lie-bracket" class="proposition" data-note-number="15" data-note-kind="Proposition">
<p><strong>Proposition 15</strong>.  Let {% raw %}<span class="math inline">\(F:M \to N\)</span>{% endraw %} be a smooth map between differentiable manifolds {% raw %}<span class="math inline">\(M\)</span>{% endraw %} and {% raw %}<span class="math inline">\(N\)</span>{% endraw %}. Let {% raw %}<span class="math inline">\(X_i \in \mathscr X(M)\)</span>{% endraw %} and {% raw %}<span class="math inline">\(Y_i \in \mathscr X(N)\)</span>{% endraw %} for {% raw %}<span class="math inline">\(i=1,2\)</span>{% endraw %}. Suppose {% raw %}<span class="math inline">\(X_i\)</span>{% endraw %} is {% raw %}<span class="math inline">\(F\)</span>{% endraw %}-related to {% raw %}<span class="math inline">\(Y_i\)</span>{% endraw %} for {% raw %}<span class="math inline">\(i=1,2\)</span>{% endraw %}. Then, {% raw %}<span class="math inline">\([X_1,X_2]\)</span>{% endraw %} is {% raw %}<span class="math inline">\(F\)</span>{% endraw %}-related to {% raw %}<span class="math inline">\([Y_1,Y_2]\)</span>{% endraw %}.</p>

</div>
<div class="proof">
<p><em>Proof.</em> By Proposition <a href="{% post_url 2024-02-22-vector-fields-and-their-flows %}#prop:F-related-characterization" data-reference-type="ref" data-reference="prop:F-related-characterization">7</a>, and by the assumption that {% raw %}<span class="math inline">\(X_i\)</span>{% endraw %} and {% raw %}<span class="math inline">\(Y_i\)</span>{% endraw %} are {% raw %}<span class="math inline">\(F\)</span>{% endraw %}-related, we have </p>

{% raw %}<div class="math display">\[X_1 X_2 (f \circ F) = X_1 ((Y_2 f) \circ F) = (Y_1 Y_2 f) \circ F ~.\]</div>{% endraw %}
<p> Meanwhile, we have </p>

{% raw %}<div class="math display">\[X_2 X_1 (f \circ F) = (Y_2 Y_1 f) \circ F ~.\]</div>{% endraw %}
<p> Collecting these terms, we have </p>

{% raw %}<div class="math display">\[\begin{aligned}
        [X_1, X_2](f \circ F) &amp;= X_1 X_2 (f \circ F) - X_2 X_1 (f \circ F) =  (Y_1 Y_2 f) \circ F  - (Y_2 Y_1 f) \circ F \\
        &amp;= ([Y_1, Y_2] f) \circ F ~,
    
\end{aligned}\]</div>{% endraw %}
<p> concluding the proof. ◻</p>

</div>
<div id="result-16" class="corollary" data-note-number="16" data-note-kind="Corollary">
<p><strong>Corollary 16</strong>. </p>

<ol>
<li><p>Let {% raw %}<span class="math inline">\(F: M \to N\)</span>{% endraw %} be a diffeomorphism between differentiable manifolds {% raw %}<span class="math inline">\(M\)</span>{% endraw %} and {% raw %}<span class="math inline">\(N\)</span>{% endraw %}. Let {% raw %}<span class="math inline">\(X_1, X_2 \in \mathscr X(M)\)</span>{% endraw %}. Then, {% raw %}<span class="math inline">\(F_*[X_1,X_2] = [F_* X_1, F_* X_2]\)</span>{% endraw %}.</p></li>
<li><p>Suppose {% raw %}<span class="math inline">\(S\)</span>{% endraw %} is an immersed submanifold of {% raw %}<span class="math inline">\(M\)</span>{% endraw %}. If {% raw %}<span class="math inline">\(Y_1\)</span>{% endraw %} and {% raw %}<span class="math inline">\(Y_2\)</span>{% endraw %} are smooth vector fields on {% raw %}<span class="math inline">\(M\)</span>{% endraw %} tangent to {% raw %}<span class="math inline">\(S\)</span>{% endraw %}, then {% raw %}<span class="math inline">\([Y_1,Y_2]\)</span>{% endraw %} is also tangent to {% raw %}<span class="math inline">\(S\)</span>{% endraw %}.</p></li>
</ol>
</div>
<div class="proof">
<p><em>Proof.</em> For (a), the pushforward {% raw %}<span class="math inline">\(F_*X\)</span>{% endraw %} is smooth because {% raw %}<span class="math inline">\(F\)</span>{% endraw %} is a diffeomorphism and is, by definition, {% raw %}<span class="math inline">\(F\)</span>{% endraw %}-related to {% raw %}<span class="math inline">\(X\)</span>{% endraw %}. Proposition 15 gives the asserted equality.</p>
<p>For (b), write the immersion as {% raw %}<span class="math inline">\(\iota:S\to M\)</span>{% endraw %}, and interpret tangency branchwise: {% raw %}<span class="math inline">\(Y_i(\iota(s))\in d\iota_s(T_sS)\)</span>{% endraw %} for every {% raw %}<span class="math inline">\(s\in S\)</span>{% endraw %}. Since {% raw %}<span class="math inline">\(d\iota_s\)</span>{% endraw %} is injective, this specifies a unique lifted field {% raw %}<span class="math inline">\(X_i(s)\)</span>{% endraw %}. It is smooth, as seen in an immersion chart where {% raw %}<span class="math inline">\(\iota(u)=(u,0)\)</span>{% endraw %} and the tangential components of {% raw %}<span class="math inline">\(Y_i\)</span>{% endraw %} restrict smoothly to {% raw %}<span class="math inline">\(S\)</span>{% endraw %}. Proposition 15 now gives {% raw %}<span class="math inline">\(d\iota[X_1,X_2]=[Y_1,Y_2]\circ\iota\)</span>{% endraw %}, proving tangency even when the immersed image has more than one local branch. ◻</p>
</div>
<h3 data-note-section="3" id="affine-and-riemannian-connection">3. Affine and Riemannian Connection</h3>
<p>A connection extends directional differentiation to vector fields. Its two product rules distinguish the direction of differentiation from the field being differentiated.</p>

<div id="def:affine-connection" class="definition" data-note-number="17" data-note-kind="Definition">
<p><strong>Definition 17</strong>.  Let {% raw %}<span class="math inline">\(M\)</span>{% endraw %} be a differentiable manifold. An <em>affine connection</em> on {% raw %}<span class="math inline">\(M\)</span>{% endraw %}, denoted {% raw %}<span class="math inline">\(\nabla\)</span>{% endraw %}, is a bilinear map </p>

{% raw %}<span id="eq:affine-connection"></span><div class="math display">\[
        \begin{aligned}
            \nabla : \Gamma(TM) \times \Gamma(TM) &amp;\to \Gamma(TM) \\
            (X,Y) &amp;\mapsto \nabla_X Y
        \end{aligned}\tag{1}\]</div>{% endraw %}
<p> such that</p>

<ol>
<li><p>{% raw %}<span class="math inline">\(\nabla_{fX} Y = f \nabla_X Y\)</span>{% endraw %}</p></li>
<li><p>{% raw %}<span class="math inline">\(\nabla_X (fY) = f \nabla_X Y + X(f) Y\)</span>{% endraw %}</p></li>
</ol>
<p>for vector fields {% raw %}<span class="math inline">\(X,Y \in \Gamma(TM)\)</span>{% endraw %} and {% raw %}<span class="math inline">\(f \in \mathscr C^{\infty} (M)\)</span>{% endraw %}.</p>

</div>
<div id="result-18" class="definition" data-note-number="18" data-note-kind="Definition">
<p><strong>Definition 18</strong>.  Given an affine connection {% raw %}<span class="math inline">\(\nabla\)</span>{% endraw %},</p>

<ol>
<li><p>The map {% raw %}<span class="math inline">\(T : \Gamma(M) \times \Gamma(M) \to \Gamma(M)\)</span>{% endraw %}, defined {% raw %}<span class="math inline">\(T(X,Y) = \nabla_X Y - \nabla_Y X - [X,Y]\)</span>{% endraw %}, is called the <em>torsion tensor of {% raw %}<span class="math inline">\(\nabla\)</span>{% endraw %}</em>.</p></li>
<li><p>{% raw %}<span class="math inline">\(\nabla\)</span>{% endraw %} is <em>torsion-free</em> if {% raw %}<span class="math inline">\(T(X,Y) = 0\)</span>{% endraw %} for all {% raw %}<span class="math inline">\(X, Y \in \Gamma(M)\)</span>{% endraw %}.</p></li>
<li><p>If {% raw %}<span class="math inline">\(g\)</span>{% endraw %} is a Riemannian metric on manifold {% raw %}<span class="math inline">\(M\)</span>{% endraw %}, {% raw %}<span class="math inline">\(\nabla\)</span>{% endraw %} is called <em>metric with respect to {% raw %}<span class="math inline">\(g\)</span>{% endraw %}</em> if the following identity holds: </p>

{% raw %}<div class="math display">\[\begin{aligned}
            Z g(X,Y) = g(\nabla_Z X, Y) + g(X, \nabla_Z Y) \quad \forall X,Y,Z \in \Gamma(TM) ~.
        
\end{aligned}\]</div>{% endraw %}</li>
</ol>
</div>
<p>There is exactly <em>one</em> connection that is torsion-free and metric with respect to the Riemannian metric {% raw %}<span class="math inline">\(g\)</span>{% endraw %} on a differentiable manifold {% raw %}<span class="math inline">\(M\)</span>{% endraw %}.</p>

<div id="thm:levi-civita" class="theorem" data-note-number="19" data-note-kind="Theorem">
<p><strong>Theorem 19</strong> (Levi-Civita).  On each Riemannian manifold {% raw %}<span class="math inline">\((M,g)\)</span>{% endraw %}, there exists a unique metric, torsion-free connection. We call this the <em>Riemannian connection</em> or <em>Levi-Civita connection</em>. Furthermore, this unique connection is characterized through the identity </p>

{% raw %}<span id="eq:koszul-formula"></span><div class="math display">\[
        \begin{aligned}
        \langle \nabla_X Y , Z \rangle &amp;= \frac12 \left( X \langle Y, Z \rangle - Z \langle X, Y \rangle + Y \langle Z , X \rangle - \langle X, [Y,Z] \rangle + \langle Z, [X,Y] \rangle + \langle Y, [Z,X] \rangle \right) ~.
        \end{aligned}\tag{2}\]</div>{% endraw %}
<p> <a href="#eq:koszul-formula" data-reference-type="eqref" data-reference="eq:koszul-formula">(2)</a> is called the <em>Koszul formula</em>.</p>

<p><em>Proof of existence and uniqueness.</em> Metric compatibility gives the three identities for {% raw %}<span class="math inline">\(Xg(Y,Z)\)</span>{% endraw %}, {% raw %}<span class="math inline">\(Yg(Z,X)\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(Zg(X,Y)\)</span>{% endraw %}. Add the first two and subtract the third. Use torsion-freeness to replace {% raw %}<span class="math inline">\(\nabla_YX\)</span>{% endraw %} by {% raw %}<span class="math inline">\(\nabla_XY-[X,Y]\)</span>{% endraw %}, and similarly for the other two interchanges. Collecting terms yields exactly twice {% raw %}<span class="math inline">\(g(\nabla_XY,Z)\)</span>{% endraw %}, which is the displayed Koszul formula. Since the metric is nondegenerate, it determines {% raw %}<span class="math inline">\(\nabla_XY\)</span>{% endraw %} uniquely.</p>
<p>For existence, call the right-hand side {% raw %}<span class="math inline">\(K(X,Y,Z)\)</span>{% endraw %}. It is {% raw %}<span class="math inline">\(C^\infty(M)\)</span>{% endraw %}-linear in {% raw %}<span class="math inline">\(Z\)</span>{% endraw %}: expanding {% raw %}<span class="math inline">\(K(X,Y,fZ)\)</span>{% endraw %} by the product rule and {% raw %}<span class="math inline">\([X,fZ]=f[X,Z]+(Xf)Z\)</span>{% endraw %} makes every derivative-of-{% raw %}<span class="math inline">\(f\)</span>{% endraw %} term cancel. Thus {% raw %}<span class="math inline">\(Z\mapsto K(X,Y,Z)\)</span>{% endraw %} is a smooth one-form, and the inverse metric gives a unique smooth vector field {% raw %}<span class="math inline">\(\nabla_XY\)</span>{% endraw %}. Expanding the same formula gives</p>
<p> {% raw %}<div class="math display">\[K(fX,Y,Z)=fK(X,Y,Z),\quad K(X,fY,Z)=fK(X,Y,Z)+(Xf)g(Y,Z).\]</div>{% endraw %}</p>
<p> It is real-bilinear in {% raw %}<span class="math inline">\(X,Y\)</span>{% endraw %}, so these identities are the connection rules. Subtracting the formula with {% raw %}<span class="math inline">\(X,Y\)</span>{% endraw %} exchanged gives {% raw %}<span class="math inline">\(K(X,Y,Z)-K(Y,X,Z)=g([X,Y],Z)\)</span>{% endraw %}, proving torsion-freeness. Adding the formulas for {% raw %}<span class="math inline">\(K(X,Y,Z)\)</span>{% endraw %} and {% raw %}<span class="math inline">\(K(X,Z,Y)\)</span>{% endraw %} gives {% raw %}<span class="math inline">\(Xg(Y,Z)\)</span>{% endraw %}, proving metric compatibility. In coordinate fields the brackets vanish; solving for coefficients recovers</p>
<p> {% raw %}<div class="math display">\[\nabla_{\partial_i}\partial_j=\Gamma^k_{ij}\partial_k,\qquad \Gamma^k_{ij}=\frac12g^{k\ell}(\partial_i g_{j\ell}+\partial_jg_{i\ell}-\partial_\ell g_{ij}).\]</div>{% endraw %}</p>
<p> This constructs the connection and checks every required property. ◻</p>
</div>
<p>Through Theorem <a href="#thm:levi-civita" data-reference-type="ref" data-reference="thm:levi-civita">19</a>, we can do two things. One, we can define a geodesic through the Levi-Civita connection {% raw %}<span class="math inline">\(\nabla\)</span>{% endraw %}.</p>

<div id="prop:geodesic-nabla" class="proposition" data-note-number="20" data-note-kind="Proposition">
<p><strong>Proposition 20</strong>.  {% raw %}<span class="math inline">\(\gamma\)</span>{% endraw %} is a geodesic on {% raw %}<span class="math inline">\(M\)</span>{% endraw %} if {% raw %}<span class="math inline">\(\nabla_{\dot \gamma} \dot \gamma = 0\)</span>{% endraw %}, where {% raw %}<span class="math inline">\(\nabla\)</span>{% endraw %} is the Levi-Civita connection on {% raw %}<span class="math inline">\(M\)</span>{% endraw %}.</p>

</div>
<div class="proof">
<p><em>Proof.</em> For a vector field {% raw %}<span class="math inline">\(V=V^k(t)\partial_k\)</span>{% endraw %} along {% raw %}<span class="math inline">\(\gamma\)</span>{% endraw %}, the induced covariant derivative is</p>
<p> {% raw %}<div class="math display">\[D_tV=\left(\dot V^k+\Gamma^k_{ij}(\gamma(t))\dot\gamma^i V^j\right)\partial_k.\]</div>{% endraw %}</p>
<p> The derivative of the component is a time derivative; there is no extra factor {% raw %}<span class="math inline">\(\dot\gamma^i\)</span>{% endraw %} in front of it. Taking {% raw %}<span class="math inline">\(V=\dot\gamma\)</span>{% endraw %} yields</p>
<p> {% raw %}<div class="math display">\[D_t\dot\gamma=(\ddot\gamma^k+\Gamma^k_{ij}\dot\gamma^i\dot\gamma^j)\partial_k.\]</div>{% endraw %}</p>
<p> The coordinate basis is linearly independent, so this is zero exactly when each geodesic-equation component is zero. Hence the equivalence holds in both directions. ◻</p>
</div>
<h3 data-note-section="4" id="subsec:riemann-curvature">4. Riemann Curvature</h3>
<p>The connection also gives the curvature tensor. The correction by the Lie bracket makes the commutator of covariant derivatives tensorial, so its value at a point depends only on the tangent vectors there.</p>

<span id="eq:riemannian-curvature-tensor"></span>
<div id="result-21" class="definition" data-note-number="21" data-note-kind="Definition">
<p><strong>Definition 21 (Curvature convention).</strong> We use</p>
<p> {% raw %}<div class="math display">\[R(X,Y)Z=\nabla_Y\nabla_XZ-\nabla_X\nabla_YZ+\nabla_{[X,Y]}Z.\tag{3}\]</div>{% endraw %}</p>
<p> This is the negative of the convention with {% raw %}<span class="math inline">\(\nabla_X\nabla_Y\)</span>{% endraw %} first. The plus sign before the bracket is essential with the order chosen here: it is precisely what makes the expression tensorial. With this convention, sectional curvature is {% raw %}<span class="math inline">\(g(R(X,Y)X,Y)\)</span>{% endraw %} for an orthonormal pair.</p>
</div>
<div id="result-22" class="proposition" data-note-number="22" data-note-kind="Proposition">
<p><strong>Proposition 22</strong>.  The Riemann curvature on a differentiable manifold satisfies the following properties:</p>

<ol>
<li><p><em>Bilinearity</em>: for all smooth functions {% raw %}<span class="math inline">\(f,g\)</span>{% endraw %} on {% raw %}<span class="math inline">\(M\)</span>{% endraw %} and {% raw %}<span class="math inline">\(X,Y,Z \in \Gamma(M)\)</span>{% endraw %}, we have </p>

{% raw %}<div class="math display">\[\begin{aligned}
            R(fX + gY, Z) &amp;= f R(X,Z) + g R(Y,Z) \\
            R(X, fY + gZ) &amp;= f R(X,Y) + g R(X,Z) 
        
\end{aligned}\]</div>{% endraw %}</li>
<li><p><em>Linearity of the curvature operator</em>: for all smooth function {% raw %}<span class="math inline">\(f\)</span>{% endraw %} on {% raw %}<span class="math inline">\(M\)</span>{% endraw %} and {% raw %}<span class="math inline">\(X,Y,Z,W \in \Gamma(M)\)</span>{% endraw %}, we have </p>

{% raw %}<div class="math display">\[\begin{aligned}
            R(X,Y) (Z+W) &amp;= R(X,Y) Z + R(X,Y) W \\
            R(X,Y) fZ &amp;= f R(X,Y) Z
        
\end{aligned}\]</div>{% endraw %}</li>
</ol>
<p><em>Proof.</em> Additivity follows from the connection rules. For multiplication in the first slot, use {% raw %}<span class="math inline">\([fX,Y]=f[X,Y]-(Yf)X\)</span>{% endraw %}. The term {% raw %}<span class="math inline">\((Yf)\nabla_XZ\)</span>{% endraw %} from {% raw %}<span class="math inline">\(\nabla_Y(f\nabla_XZ)\)</span>{% endraw %} cancels the corresponding term from the bracket. Hence {% raw %}<span class="math inline">\(R(fX,Y)Z=fR(X,Y)Z\)</span>{% endraw %}. Skew-symmetry in {% raw %}<span class="math inline">\(X,Y\)</span>{% endraw %}, immediate from Definition 21, gives the second-slot statement.</p>
<p>For the third slot, expansion gives</p>
<p> {% raw %}<div class="math display">\[R(X,Y)(fZ)=fR(X,Y)Z+\{Y(Xf)-X(Yf)+[X,Y]f\}Z.\]</div>{% endraw %}</p>
<p> The mixed terms {% raw %}<span class="math inline">\((Xf)\nabla_YZ\)</span>{% endraw %} and {% raw %}<span class="math inline">\((Yf)\nabla_XZ\)</span>{% endraw %} cancel before this expression is obtained. The scalar coefficient shown is zero by the definition of the Lie bracket. Therefore {% raw %}<span class="math inline">\(R\)</span>{% endraw %} is {% raw %}<span class="math inline">\(C^\infty\)</span>{% endraw %}-linear in all three slots and defines a {% raw %}<span class="math inline">\((1,3)\)</span>{% endraw %}-tensor. ◻</p>
</div>
<p>Since {% raw %}<span class="math inline">\(R\)</span>{% endraw %} is tensorial, it makes sense to describe it through (any) coordinates. In particular, consider the coordinate vector fields {% raw %}<span class="math inline">\(X = \dpd{}{{x^i}}\)</span>{% endraw %}, {% raw %}<span class="math inline">\(Y = \dpd{}{{x^j}}\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(Z = \dpd{}{{x^{k}}}\)</span>{% endraw %}. This gives us a description of {% raw %}<span class="math inline">\(R\)</span>{% endraw %} in coordinates, which we denote {% raw %}<span class="math inline">\(R_{k\ell ij}\)</span>{% endraw %}.</p>

<span id="eq:riemann-curvature-coordinates"></span><span id="eq:riemann-curvature-coefficients"></span>
<div id="result-23" class="proposition" data-note-number="23" data-note-kind="Proposition">
<p><strong>Proposition 23 (Coordinate conventions).</strong> Write</p>
<p> {% raw %}<div class="math display">\[R(\partial_i,\partial_j)\partial_k=R^m_{ijk}\partial_m,\qquad R_{k\ell ij}:=g(R(\partial_i,\partial_j)\partial_\ell,\partial_k) =g_{km}R^m_{ij\ell}.\tag{4}\]</div>{% endraw %}</p>
<p> Then</p>
<p> {% raw %}<div class="math display">\[R^m_{ijk}=\partial_j\Gamma^m_{ik}-\partial_i\Gamma^m_{jk} +\Gamma^p_{ik}\Gamma^m_{jp}-\Gamma^p_{jk}\Gamma^m_{ip}.\tag{5}\]</div>{% endraw %}</p>
<p> The four-index order is fixed by the scalar-product definition, rather than inferred from a permutation of three-index subscripts.</p>
</div>
<div class="proof">
<p><em>Proof.</em> Let {% raw %}<span class="math inline">\(X = \dpd{}{{x^i}}\)</span>{% endraw %}, {% raw %}<span class="math inline">\(Y = \dpd{}{{x^j}}\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(Z = \dpd{}{{x^{k}}}\)</span>{% endraw %}. Since {% raw %}<span class="math inline">\(X,Y\)</span>{% endraw %} are coordinate vector fields, {% raw %}<span class="math inline">\([X,Y] =0\)</span>{% endraw %}. It remains to calculate the first two terms of <a href="#eq:riemannian-curvature-tensor" data-reference-type="eqref" data-reference="eq:riemannian-curvature-tensor">(3)</a>. Clearly, </p>

{% raw %}<div class="math display">\[\begin{aligned}
        \nabla_{{\partial}/{\partial{x^j}}} \nabla_{{\partial}/{\partial{x^i}}} \dpd{}{{x^{k}}} - \nabla_{{\partial}/{\partial{x^i}}} \nabla_{{\partial}/{\partial{x^j}}} \dpd{}{{x^{k}}} &amp;= \nabla_{{\partial}/{\partial{x^j}}} \Gamma_{ik}^{m} \dpd{}{{x^m}} - \nabla_{{\partial}/{\partial{x^i}}} \Gamma_{jk}^{m} \dpd{}{{x^m}} \\
        
        &amp;= \Gamma^p_{ik} \Gamma^m_{jp} \dpd{}{{x^m}} + \dpd{\Gamma_{ik}^m}{{x^j}} \dpd{}{{x^m}} - \left( \Gamma^p_{jk} \Gamma^m_{ip} \dpd{}{{x^m}} + \dpd{\Gamma_{jk}^m}{{x^i}} \dpd{}{{x^m}} \right) ~,
    
\end{aligned}\]</div>{% endraw %}
<p> and equating this with the left-hand side of <a href="#eq:riemann-curvature-coordinates" data-reference-type="eqref" data-reference="eq:riemann-curvature-coordinates">(4)</a> gives the desired result. ◻</p>

</div>
<span id="prop:symmetries-first-bianchi"></span>
<div id="prop:symmetries-riemannian-curvature-tensor" class="proposition" data-note-number="24" data-note-kind="Proposition">
<p><strong>Proposition 24 (Curvature symmetries).</strong> For the Levi–Civita connection,</p>
<p> {% raw %}<div class="math display">\[R(X,Y)Z=-R(Y,X)Z,\]</div>{% endraw %}</p>
<p></p>
<p> {% raw %}<div class="math display">\[R(X,Y)Z+R(Y,Z)X+R(Z,X)Y=0,\]</div>{% endraw %}</p>
<p></p>
<p> {% raw %}<div class="math display">\[g(R(X,Y)Z,W)=-g(R(X,Y)W,Z),\]</div>{% endraw %}</p>
<p></p>
<p> {% raw %}<div class="math display">\[g(R(X,Y)Z,W)=g(R(Z,W)X,Y).\]</div>{% endraw %}</p>
<p> In the four-index convention of Proposition 23, these read</p>
<p> {% raw %}<div class="math display">\[R_{k\ell ij}=-R_{k\ell ji},\quad R_{k\ell ij}+R_{ki j\ell}+R_{kj\ell i}=0,\quad R_{k\ell ij}=-R_{\ell kij},\quad R_{k\ell ij}=R_{ijk\ell}.\]</div>{% endraw %}</p>
</div>
<span id="eq:step1"></span><span id="eq:step2"></span><span id="eq:step3"></span><span id="eq:step4"></span><span id="eq:step5"></span><span id="eq:step6"></span>
<div class="proof">
<p><em>Proof.</em> First, interchanging {% raw %}<span class="math inline">\(X,Y\)</span>{% endraw %} in Definition 21 changes the sign of both the commutator and the bracket. For the first Bianchi identity it suffices, by tensoriality, to take coordinate fields at a point. Insert formula (5) and sum cyclically in {% raw %}<span class="math inline">\(i,j,k\)</span>{% endraw %}. The derivative terms cancel in pairs because {% raw %}<span class="math inline">\(\Gamma^m_{ij}=\Gamma^m_{ji}\)</span>{% endraw %}. The product terms cancel too: for instance {% raw %}<span class="math inline">\(\Gamma^p_{ik}\Gamma^m_{jp}\)</span>{% endraw %} cancels {% raw %}<span class="math inline">\(-\Gamma^p_{ki}\Gamma^m_{jp}\)</span>{% endraw %} from the next cyclic term. This proves the cyclic identity without any assumption that the fields commute away from that coordinate choice.</p>
<p>For skew-adjointness, apply the scalar operator {% raw %}<span class="math inline">\(YX-XY+[X,Y]\)</span>{% endraw %}, which is zero, to {% raw %}<span class="math inline">\(g(Z,W)\)</span>{% endraw %}. Metric compatibility expands this into</p>
<p> {% raw %}<div class="math display">\[0=g(R(X,Y)Z,W)+g(Z,R(X,Y)W);\]</div>{% endraw %}</p>
<p> the terms involving one derivative on each of {% raw %}<span class="math inline">\(Z,W\)</span>{% endraw %} cancel between the two orders. This gives the third symmetry.</p>
<p>For pair exchange, a direct normal-coordinate computation avoids an implicit permutation argument. At a chosen point {% raw %}<span class="math inline">\(p\)</span>{% endraw %}, {% raw %}<span class="math inline">\(g_{ij}=\delta_{ij}\)</span>{% endraw %}, {% raw %}<span class="math inline">\(\partial_k g_{ij}=0\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(\Gamma^m_{ij}=0\)</span>{% endraw %}. Insert the Christoffel formula into (5), then lower the output index according to (4). Cancellation of the {% raw %}<span class="math inline">\(g_{ij,k\ell}\)</span>{% endraw %} terms gives</p>
<p> {% raw %}<div class="math display">\[R_{ijk\ell}(p)=\frac12\bigl(g_{ik,j\ell}-g_{jk,i\ell}-g_{i\ell,jk}+g_{j\ell,ik}\bigr)(p).\tag{6}\]</div>{% endraw %}</p>
<p> Here commas denote ordinary partial derivatives. Exchanging the index pairs {% raw %}<span class="math inline">\((i,j)\)</span>{% endraw %} and {% raw %}<span class="math inline">\((k,\ell)\)</span>{% endraw %} leaves this expression unchanged, using symmetry of the metric and commutation of its mixed partials. Thus the pair-exchange identity holds at {% raw %}<span class="math inline">\(p\)</span>{% endraw %}. Since both sides are tensors and {% raw %}<span class="math inline">\(p\)</span>{% endraw %} was arbitrary, it holds everywhere in every chart. This computation also independently verifies the minus signs in both skew symmetries. ◻</p>
</div>
<div id="prop:second-bianchi-identity" class="proposition" data-note-number="25" data-note-kind="Proposition">
<p><strong>Proposition 25 (Second Bianchi identity).</strong> The covariant derivative of the curvature tensor satisfies</p>
<p> {% raw %}<div class="math display">\[(\nabla_XR)(Y,Z)W+(\nabla_YR)(Z,X)W+(\nabla_ZR)(X,Y)W=0.\]</div>{% endraw %}</p>
<p> The parentheses mean the tensor derivative:</p>
<p> {% raw %}<div class="math display">\[(\nabla_XR)(Y,Z)W=\nabla_X(R(Y,Z)W)-R(\nabla_XY,Z)W-R(Y,\nabla_XZ)W-R(Y,Z)\nabla_XW.\]</div>{% endraw %}</p>
<p> Without these correction terms the asserted identity is generally false for varying vector fields.</p>
</div>
<div class="proof">
<p><em>Proof.</em> The tensor-derivative expression is tensorial in all four arguments, so fix a point {% raw %}<span class="math inline">\(p\)</span>{% endraw %} and choose normal coordinates there. Use coordinate vectors for {% raw %}<span class="math inline">\(X,Y,Z,W\)</span>{% endraw %}. At {% raw %}<span class="math inline">\(p\)</span>{% endraw %}, covariant differentiation of the components is ordinary partial differentiation, since all Christoffel coefficients vanish. Differentiate the general formula (5), not an identity known only at a single point. A derivative of either quadratic Christoffel term contains an undifferentiated Christoffel factor and therefore vanishes at {% raw %}<span class="math inline">\(p\)</span>{% endraw %}. Thus</p>
<p> {% raw %}<div class="math display">\[\partial_a R^m_{bc d}(p)=\partial_a\partial_c\Gamma^m_{bd}(p)-\partial_a\partial_b\Gamma^m_{cd}(p).\]</div>{% endraw %}</p>
<p> Adding the corresponding expressions with {% raw %}<span class="math inline">\((a,b,c)\)</span>{% endraw %} replaced by {% raw %}<span class="math inline">\((b,c,a)\)</span>{% endraw %} and {% raw %}<span class="math inline">\((c,a,b)\)</span>{% endraw %} cancels all six terms by equality of mixed partial derivatives. This proves the required cyclic sum at {% raw %}<span class="math inline">\(p\)</span>{% endraw %}, and tensoriality proves it on the manifold. ◻</p>
</div>
<div id="lem:covariant-derivative-symmetry" class="lemma" data-note-number="26" data-note-kind="Lemma">
<p><strong>Lemma 26 (Commuting derivatives along a variation).</strong> Let {% raw %}<span class="math inline">\(F:(-\varepsilon,\varepsilon)\times[a,b]\to M\)</span>{% endraw %} be smooth, put {% raw %}<span class="math inline">\(S=\partial_sF\)</span>{% endraw %}, {% raw %}<span class="math inline">\(T=\partial_tF\)</span>{% endraw %}, and let {% raw %}<span class="math inline">\(V\)</span>{% endraw %} be a smooth vector field along {% raw %}<span class="math inline">\(F\)</span>{% endraw %}. Denoting the pullback covariant derivatives by {% raw %}<span class="math inline">\(D_s,D_t\)</span>{% endraw %}, our curvature convention gives</p>
<p> {% raw %}<div class="math display">\[D_tD_sV-D_sD_tV=R(S,T)V.\]</div>{% endraw %}</p>
<p> No immersion assumption on {% raw %}<span class="math inline">\(F\)</span>{% endraw %} is needed.</p>
</div>
<div class="proof">
<p><em>Proof.</em> In ambient coordinates {% raw %}<span class="math inline">\(x^i\)</span>{% endraw %}, write {% raw %}<span class="math inline">\(F^i=x^i\circ F\)</span>{% endraw %} and {% raw %}<span class="math inline">\(V=v^k\partial_k\)</span>{% endraw %}. Then</p>
<p> {% raw %}<div class="math display">\[(D_sv)^m=\partial_sv^m+\Gamma^m_{ik}(F)\,\partial_sF^i\,v^k,\]</div>{% endraw %}</p>
<p> and similarly for {% raw %}<span class="math inline">\(D_t\)</span>{% endraw %}. Expand {% raw %}<span class="math inline">\(D_tD_sV-D_sD_tV\)</span>{% endraw %}. Mixed second derivatives of {% raw %}<span class="math inline">\(v\)</span>{% endraw %} cancel; the terms involving first derivatives of {% raw %}<span class="math inline">\(v\)</span>{% endraw %} also cancel; and the coefficients of {% raw %}<span class="math inline">\(\partial_{st}F^i-\partial_{ts}F^i\)</span>{% endraw %} are zero. The remaining component is</p>
<p> {% raw %}<div class="math display">\[\partial_sF^i\,\partial_tF^j\,v^k \bigl(\partial_j\Gamma^m_{ik}-\partial_i\Gamma^m_{jk} +\Gamma^p_{ik}\Gamma^m_{jp}-\Gamma^p_{jk}\Gamma^m_{ip}\bigr).\]</div>{% endraw %}</p>
<p> By (5) this is the {% raw %}<span class="math inline">\(m\)</span>{% endraw %}-th component of {% raw %}<span class="math inline">\(R(S,T)V\)</span>{% endraw %}. This coordinate proof takes derivatives of the pullback bundle and never treats the parameter derivatives as independent ambient coordinate fields. ◻</p>
</div>
<div id="result-27" class="remark" data-note-number="27" data-note-kind="Remark">
<p><strong>Remark 27</strong>.  For the covariant derivative along a curve {% raw %}<span class="math inline">\(c:[a,b]\to M\)</span>{% endraw %}, it is frequently the case that texts write {% raw %}<span class="math inline">\(\frac{\Dif}{\Dif t}\)</span>{% endraw %} in place of {% raw %}<span class="math inline">\(\nabla_{\dif c/\!\dif t}\)</span>{% endraw %}. Wherever the context is clear, we write {% raw %}<span class="math inline">\(\nabla_{\dif/\!\dif t}\)</span>{% endraw %} for covariant derivative along curve {% raw %}<span class="math inline">\(c\)</span>{% endraw %} parametrized by {% raw %}<span class="math inline">\(t\)</span>{% endraw %} only. By analogy, in the sequel, we write {% raw %}<span class="math inline">\(\nabla_{\partial/\partial t}\)</span>{% endraw %} for covariant derivatives “in the {% raw %}<span class="math inline">\(t\)</span>{% endraw %} direction”, along variations parametrized by {% raw %}<span class="math inline">\((s,t)\)</span>{% endraw %}.</p>

</div>
<div id="result-28" class="remark" data-note-number="28" data-note-kind="Remark">
<p><strong>Remark 28 (Normal-coordinate Taylor terms).</strong> The later Jacobi-field calculation gives, in the four-index convention (4),</p>
<p> {% raw %}<div class="math display">\[g_{ij}(x)=\delta_{ij}-\frac13R_{ik\ell j}(p)x^kx^\ell+O(|x|^3).\]</div>{% endraw %}</p>
<p> The coefficients in this polynomial are evaluated at {% raw %}<span class="math inline">\(p\)</span>{% endraw %}. Taylor's theorem for the smooth metric, including its differentiated remainders, gives</p>
<p> {% raw %}<div class="math display">\[\partial_r g_{ij}(x)=-\frac13(R_{ir\ell j}(p)x^\ell+R_{ikrj}(p)x^k)+O(|x|^2),\]</div>{% endraw %}</p>
<p></p>
<p> {% raw %}<div class="math display">\[\partial_s\partial_rg_{ij}(x)=-\frac13(R_{irsj}(p)+R_{isrj}(p))+O(|x|).\]</div>{% endraw %}</p>
<p> The minus signs persist under differentiation, and the remainder order drops with each derivative. This conclusion uses a smooth Taylor remainder; differentiating an arbitrary big-O bound alone would not justify it. The next lemma is proved directly from the connection, so no circular use of this later Taylor expansion is needed.</p>
</div>
<span id="eq:curvature-normal-coordinates"></span>
<div id="result-29" class="lemma" data-note-number="29" data-note-kind="Lemma">
<p><strong>Lemma 29.</strong> In normal coordinates centred at {% raw %}<span class="math inline">\(p\)</span>{% endraw %}, with {% raw %}<span class="math inline">\(R_{ijk\ell}=g(R(\partial_k,\partial_\ell)\partial_j,\partial_i)\)</span>{% endraw %},</p>
<p> {% raw %}<div class="math display">\[R_{ijk\ell}(p)=\frac12\left(\partial_j\partial_\ell g_{ik}-\partial_i\partial_\ell g_{jk}-\partial_j\partial_k g_{i\ell}+\partial_i\partial_k g_{j\ell}\right)(0).\tag{7}\]</div>{% endraw %}</p>
</div>
<div class="proof">
<p><em>Proof.</em> At the origin, the quadratic Christoffel terms vanish and {% raw %}<span class="math inline">\(g_{im}=\delta_{im}\)</span>{% endraw %}, so</p>
<p> {% raw %}<div class="math display">\[R_{ijk\ell}=\partial_\ell\Gamma^i_{kj}-\partial_k\Gamma^i_{\ell j}.\]</div>{% endraw %}</p>
<p> Since {% raw %}<span class="math inline">\(\partial g^{im}(0)=0\)</span>{% endraw %}, differentiating the Christoffel formula at zero gives</p>
<p> {% raw %}<div class="math display">\[\partial_\ell\Gamma^i_{kj}=\frac12(g_{ji,k\ell}+g_{ki,j\ell}-g_{kj,i\ell}),\quad \partial_k\Gamma^i_{\ell j}=\frac12(g_{ji,\ell k}+g_{\ell i,jk}-g_{\ell j,ik}).\]</div>{% endraw %}</p>
<p> Subtract; the first terms cancel by equality of mixed partials, leaving (7). For a unit sphere, this convention gives {% raw %}<span class="math inline">\(R_{1221}=1\)</span>{% endraw %}, consistent with positive sectional curvature and the negative quadratic normal-coordinate metric term. ◻</p>
</div>

<p class="note-reading">Reading: Carmo (1992), Riemannian geometry.</p>


<nav class="note-related" aria-label="Related notes"><p>Related notes: <a href="{% post_url 2024-02-22-vector-fields-and-their-flows %}">Vector Fields and Their Flows</a>; <a href="{% post_url 2022-04-13-geodesics-and-the-energy-functional %}">Geodesics and the Energy Functional</a>; <a href="{% post_url 2023-01-24-jacobi-fields-and-conjugate-points %}">Jacobi Fields and Conjugate Points</a>.</p></nav>

<nav class="note-series" aria-label="Notes in this series"><p>Previous: <a href="{% post_url 2022-04-27-hopf-rinow %}">Hopf-Rinow</a> · Next: <a href="{% post_url 2022-06-07-frobenius-theorem %}">Frobenius Theorem</a></p></nav>

</div>
