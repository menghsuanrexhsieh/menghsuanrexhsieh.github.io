---
layout: "post"
title: "Vector Fields and Their Flows"
date: "2024-02-22"
tags: ["math", "differential geometry"]
excerpt: "Here is an important and fundamental result for smooth vector fields, which guarantees a lot of the discussions about vector fields will make sense."
note_series: "Differential geometry"
note_source: "assets/notes/Differential Geometry - Notes/diff-geo.tex"
redirect_from: ["/2024/02/22/vector-fields/", "/2024/03/07/flows-on-vector-fields/"]
---

<div class="note-content" markdown="0">

<p>A vector field assigns an infinitesimal direction of motion at each point. An integral curve follows those directions, and a flow collects the integral curves for all starting points. The passage from a field to its flow is governed locally by ordinary differential equations; global existence requires additional control.</p>

<p>We first describe vector fields as sections and as derivations on smooth functions. We then examine how smooth maps carry integral curves, and use uniqueness to obtain the composition law for a flow.</p>

<div id="app:flows" data-note-section="title">

</div>
<h3 data-note-section="1" id="vector-fields">1. Vector Fields</h3>
<p>Let {% raw %}<span class="math inline">\(M\)</span>{% endraw %} be a smooth Hausdorff, second-countable manifold without boundary; these assumptions remain in force throughout this note. A <em>vector field</em> {% raw %}<span class="math inline">\(X: M \to TM\)</span>{% endraw %} is a continuous assignment {% raw %}<span class="math inline">\(X(p) = X_p \in T_p M\)</span>{% endraw %} such that {% raw %}<span class="math inline">\(\Pi \circ X = \operatorname{id}_M\)</span>{% endraw %}, where {% raw %}<span class="math inline">\(\Pi : TM \to M\)</span>{% endraw %} is the projection map. A <em>smooth vector field</em> is a vector field such that the map {% raw %}<span class="math inline">\(X: M \to TM\)</span>{% endraw %} is smooth as a map between the smooth manifolds. In view of Definition <a href="{% post_url 2022-05-11-connections-lie-brackets-and-curvature %}#def:section" data-reference-type="ref" data-reference="def:section">4</a>, a vector field is a section of the tangent bundle.</p>

<p>Given {% raw %}<span class="math inline">\(M\)</span>{% endraw %} is a differentiable manifold, we can write </p>

{% raw %}<div class="math display">\[X_p = X^i (p) \dpd{}{{x^i}}\bigg|_p ~,\]</div>{% endraw %}
<p> where {% raw %}<span class="math inline">\(X^i (p)\)</span>{% endraw %} are smooth functions when the field is smooth. As an example, the continuous assignment </p>

{% raw %}<div class="math display">\[p \mapsto \dpd{}{{x^i}}\bigg|_p\]</div>{% endraw %}
<p> determines a vector field on an open neighbourhood {% raw %}<span class="math inline">\(U\)</span>{% endraw %} of {% raw %}<span class="math inline">\(p \in M\)</span>{% endraw %}, where {% raw %}<span class="math inline">\(\left( U, \{x^i\} \right)\)</span>{% endraw %} is a smooth chart. This is called the <em>coordinate vector field</em>. Now, we can also speak of vector fields defined “locally” on {% raw %}<span class="math inline">\(M\)</span>{% endraw %}. For this, let {% raw %}<span class="math inline">\(A \subset M\)</span>{% endraw %}. {% raw %}<span class="math inline">\(X: A \to TM\)</span>{% endraw %} is said to be a <em>vector field along {% raw %}<span class="math inline">\(A\)</span>{% endraw %}</em> if {% raw %}<span class="math inline">\(\Pi \circ X = \operatorname{id}_A\)</span>{% endraw %}. If, additionally, for each {% raw %}<span class="math inline">\(p \in A\)</span>{% endraw %}, there exists a neighbourhood {% raw %}<span class="math inline">\(V\)</span>{% endraw %} of {% raw %}<span class="math inline">\(p \in M\)</span>{% endraw %} <em>and</em> a smooth vector field {% raw %}<span class="math inline">\(\widetilde X\)</span>{% endraw %} on {% raw %}<span class="math inline">\(V\)</span>{% endraw %} that agrees with {% raw %}<span class="math inline">\(X\)</span>{% endraw %} on {% raw %}<span class="math inline">\(A \cap V\)</span>{% endraw %}, then {% raw %}<span class="math inline">\(X\)</span>{% endraw %} is said to be a <em>smooth vector field along {% raw %}<span class="math inline">\(A\)</span>{% endraw %}</em>.</p>

<p>The extension lemma lets us replace a field defined near a closed set by a global field with controlled support. This is useful whenever a local construction must be inserted into a global argument.</p>

<div id="lem:extension-smooth-vf" class="lemma" data-note-number="1" data-note-kind="Lemma">
<p><strong>Lemma 1</strong> (Extension Lemma for Smooth Vector Fields).  Let {% raw %}<span class="math inline">\(M\)</span>{% endraw %} be a differentiable manifold, and {% raw %}<span class="math inline">\(A \subset M\)</span>{% endraw %} be a closed subset. Let {% raw %}<span class="math inline">\(X\)</span>{% endraw %} be a smooth vector field along {% raw %}<span class="math inline">\(A\)</span>{% endraw %}. Given any open subset {% raw %}<span class="math inline">\(U \supset A\)</span>{% endraw %}, there exists a smooth vector field {% raw %}<span class="math inline">\(\widetilde X\)</span>{% endraw %} on {% raw %}<span class="math inline">\(M\)</span>{% endraw %} such that {% raw %}<span class="math inline">\(\widetilde X|_A = X\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\operatorname{spt} \widetilde X \subset U\)</span>{% endraw %}, where {% raw %}<span class="math inline">\(\operatorname{spt} \widetilde X = \overline{\{p \in M: \widetilde X_p \neq 0 \}}\)</span>{% endraw %}.</p>

</div>
<p><strong>Proof of the extension lemma.</strong> For each point of {% raw %}<span class="math inline">\(A\)</span>{% endraw %}, choose a local extension {% raw %}<span class="math inline">\(X_i\)</span>{% endraw %} on an open set {% raw %}<span class="math inline">\(V_i\subset U\)</span>{% endraw %}. Take a locally finite smooth partition of unity subordinate to the cover consisting of these sets and {% raw %}<span class="math inline">\(M\setminus A\)</span>{% endraw %}. For a partition function {% raw %}<span class="math inline">\(\rho_j\)</span>{% endraw %} supported in some {% raw %}<span class="math inline">\(V_{i(j)}\)</span>{% endraw %}, extend {% raw %}<span class="math inline">\(\rho_jX_{i(j)}\)</span>{% endraw %} by zero outside that set; for functions supported in {% raw %}<span class="math inline">\(M\setminus A\)</span>{% endraw %}, use the zero field. Their locally finite sum {% raw %}<span class="math inline">\(\widetilde X\)</span>{% endraw %} is smooth. At a point of {% raw %}<span class="math inline">\(A\)</span>{% endraw %}, the latter functions vanish and all local extensions agree with {% raw %}<span class="math inline">\(X\)</span>{% endraw %}, so {% raw %}<span class="math inline">\(\widetilde X=X\)</span>{% endraw %}. The union of the supports of the former functions is closed, because the family is locally finite, and is contained in {% raw %}<span class="math inline">\(U\)</span>{% endraw %}. It contains the support of {% raw %}<span class="math inline">\(\widetilde X\)</span>{% endraw %}, giving the required support control. {% raw %}<span class="math inline">\(\square\)</span>{% endraw %}</p>

<p>A particular application of Lemma <a href="#lem:extension-smooth-vf" data-reference-type="ref" data-reference="lem:extension-smooth-vf">1</a> is to the following result.</p>

<div id="result-2" class="proposition" data-note-number="2" data-note-kind="Proposition">
<p><strong>Proposition 2</strong>.  Let {% raw %}<span class="math inline">\(M\)</span>{% endraw %} be a differentiable manifold. For all {% raw %}<span class="math inline">\(p \in M\)</span>{% endraw %} and {% raw %}<span class="math inline">\(v \in T_p M\)</span>{% endraw %}, there exists a global, smooth vector field {% raw %}<span class="math inline">\(X\)</span>{% endraw %} on {% raw %}<span class="math inline">\(M\)</span>{% endraw %} such that {% raw %}<span class="math inline">\(X(p) = X_p = v\)</span>{% endraw %}.</p>

</div>
<div class="proof">
<p><em>Proof.</em> Note that the assignment {% raw %}<span class="math inline">\(p \mapsto v\)</span>{% endraw %} is a vector field along the set {% raw %}<span class="math inline">\(\{p\}\)</span>{% endraw %}. This assignment is smooth because it can be extended to a constant-coefficient vector field in a coordinate neighbourhood of {% raw %}<span class="math inline">\(p\)</span>{% endraw %}. Apply Lemma <a href="#lem:extension-smooth-vf" data-reference-type="ref" data-reference="lem:extension-smooth-vf">1</a> with {% raw %}<span class="math inline">\(A = \{p\}\)</span>{% endraw %} and {% raw %}<span class="math inline">\(U = M\)</span>{% endraw %} to conclude. ◻</p>

</div>
<p>Following convention, if {% raw %}<span class="math inline">\(M\)</span>{% endraw %} is a differentiable manifold, then let {% raw %}<span class="math inline">\(\mathscr X (M)\)</span>{% endraw %} denote the collection of smooth vector fields on {% raw %}<span class="math inline">\(M\)</span>{% endraw %}. This is clearly a vector space, with respect to component-wise (pointwise) scalar multiplication and addition. The identity element of this vector space (under addition) is the zero vector field, whose value at each {% raw %}<span class="math inline">\(p \in M\)</span>{% endraw %} is {% raw %}<span class="math inline">\(0 \in T_p M\)</span>{% endraw %}. Finally, let {% raw %}<span class="math inline">\(f \in \mathscr C^\infty (M)\)</span>{% endraw %} and {% raw %}<span class="math inline">\(X \in \mathscr X(M)\)</span>{% endraw %}. Then, {% raw %}<span class="math inline">\(f X : M \to TM : p \mapsto (fX)_p = f(p) X_p\)</span>{% endraw %} is also a smooth vector field. Algebraically, {% raw %}<span class="math inline">\(\mathscr X(M)\)</span>{% endraw %} is a module over the ring {% raw %}<span class="math inline">\(\mathscr C^\infty (M)\)</span>{% endraw %}. With this knowledge, we can express a vector field {% raw %}<span class="math inline">\(X\)</span>{% endraw %} locally in terms of vector fields, as opposed to as vectors at a point, yielding the expression </p>

{% raw %}<div class="math display">\[X = X^i \dpd{}{{x^i}} ~,\]</div>{% endraw %}
<p> where {% raw %}<span class="math inline">\(X^i\)</span>{% endraw %} is the {% raw %}<span class="math inline">\(i\)</span>{% endraw %}th component function of {% raw %}<span class="math inline">\(X\)</span>{% endraw %} in the given coordinates.</p>

<p>A frame is a basis of each tangent space chosen as a family of vector fields. It need not arise from coordinate derivatives. To generalize, let {% raw %}<span class="math inline">\(M\)</span>{% endraw %} be a differentiable manifold of dimension {% raw %}<span class="math inline">\(m\)</span>{% endraw %}. An ordered {% raw %}<span class="math inline">\(n\)</span>{% endraw %}-tuple of vector fields, {% raw %}<span class="math inline">\((X_1,\cdots,X_n)\)</span>{% endraw %}, defined on some subset {% raw %}<span class="math inline">\(A \subset M\)</span>{% endraw %} is said to be <em>linearly independent</em> if {% raw %}<span class="math inline">\((X_1|_p,\cdots,X_n|_p)\)</span>{% endraw %} is a linearly independent {% raw %}<span class="math inline">\(n\)</span>{% endraw %}-tuple in {% raw %}<span class="math inline">\(T_p M\)</span>{% endraw %} at each {% raw %}<span class="math inline">\(p \in A\)</span>{% endraw %}. A {% raw %}<span class="math inline">\(n\)</span>{% endraw %}-tuple as above is said to <em>span the tangent bundle</em> if {% raw %}<span class="math inline">\((X_1|_p,\cdots,X_n|_p)\)</span>{% endraw %} spans {% raw %}<span class="math inline">\(T_p M\)</span>{% endraw %} at each {% raw %}<span class="math inline">\(p \in A\)</span>{% endraw %}. Accordingly, we say {% raw %}<span class="math inline">\((X_1|_p,\cdots,X_n|_p)\)</span>{% endraw %} defined on {% raw %}<span class="math inline">\(A \subset M\)</span>{% endraw %} is a <em>local frame for {% raw %}<span class="math inline">\(M\)</span>{% endraw %}</em> if it is <em>linearly independent and spans the tangent bundle</em>. Finally, a <em>global frame</em> is a local frame defined on {% raw %}<span class="math inline">\(A = M\)</span>{% endraw %}. A frame is said to be <em>smooth</em> if each vector field {% raw %}<span class="math inline">\(X_i\)</span>{% endraw %} is smooth.</p>

<p>A frame on an {% raw %}<span class="math inline">\(m\)</span>{% endraw %}-dimensional manifold has exactly {% raw %}<span class="math inline">\(m\)</span>{% endraw %} members. Given a Riemannian metric {% raw %}<span class="math inline">\(g\)</span>{% endraw %}, a frame {% raw %}<span class="math inline">\((X_1,\ldots,X_m)\)</span>{% endraw %} is <strong>orthonormal</strong> when {% raw %}<span class="math inline">\(g_p(X_i(p),X_j(p))=\delta_{ij}\)</span>{% endraw %}. This uses the chosen metric, not an arbitrary identification of {% raw %}<span class="math inline">\(T_pM\)</span>{% endraw %} with Euclidean space. For example, with the Euclidean metric on {% raw %}<span class="math inline">\(\mathbb R^2\setminus\{0\}\)</span>{% endraw %}, the following is a smooth global orthonormal frame:</p>

{% raw %}<div class="math display">\[X_1 = \frac{x}{r} \dpd{}{x} + \frac{y}{r} \dpd{}{y} ~~,~~ X_2 = -\frac{y}{r} \dpd{}{x} + \frac{x}{r} \dpd{}{y} ~~,~~ \text{where } r = \sqrt{x^2 + y^2} ~.\]</div>{% endraw %}
<p> {% raw %}<span class="math inline">\(X_1\)</span>{% endraw %} and {% raw %}<span class="math inline">\(X_2\)</span>{% endraw %} are unit vector fields tangent to radial lines and circles centred at the origin, respectively. For practical purposes, we almost always speak about <em>smooth local frames</em>; <em>smooth global frames</em> are rather rare. We say a differentiable manifold is <em>parallelizable</em> if it admits a smooth global frame.</p>

<div id="result-3" class="example" data-note-number="3" data-note-kind="Example">
<p><strong>Example 3.</strong> (Parallelizable manifolds.) The coordinate fields frame {% raw %}<span class="math inline">\(\mathbb R^n\)</span>{% endraw %}. On a Lie group {% raw %}<span class="math inline">\(G\)</span>{% endraw %}, choose a basis {% raw %}<span class="math inline">\(e_1,\ldots,e_m\)</span>{% endraw %} of {% raw %}<span class="math inline">\(T_eG\)</span>{% endraw %} and set {% raw %}<span class="math inline">\(X_i(g)=d(L_g)_e e_i\)</span>{% endraw %}. Left translation is a diffeomorphism and depends smoothly on {% raw %}<span class="math inline">\(g\)</span>{% endraw %}, so these fields form a smooth global frame. This includes {% raw %}<span class="math inline">\(\mathbb S^1\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\mathbb T^n\)</span>{% endraw %}.</p>
<p>Among positive-dimensional spheres, exactly {% raw %}<span class="math inline">\(\mathbb S^1,\mathbb S^3,\mathbb S^7\)</span>{% endraw %} are parallelizable. The exclusion of other dimensions follows from <a href="https://www.math.ens.psl.eu/~benoist/refs/Adams.pdf">Adams, <em>Vector fields on spheres</em>, Theorem 1.1 and the preceding construction, p. 603</a>. The positive examples come from multiplication in the complex numbers, quaternions, and octonions: at a unit element {% raw %}<span class="math inline">\(x\)</span>{% endraw %}, multiplying an orthonormal imaginary basis by {% raw %}<span class="math inline">\(x\)</span>{% endraw %} gives an orthonormal basis of {% raw %}<span class="math inline">\(x^\perp=T_x\mathbb S^{d-1}\)</span>{% endraw %}. The zero-dimensional sphere is also parallelizable, using the empty frame.</p>
<p>Only {% raw %}<span class="math inline">\(\mathbb S^1\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\mathbb S^3\)</span>{% endraw %} among these positive-dimensional spheres are Lie groups. Here is why {% raw %}<span class="math inline">\(\mathbb S^7\)</span>{% endraw %} is excluded. If it were a compact Lie group, averaging an inner product under the adjoint action would give a bi-invariant metric. An abelian connected compact Lie group is covered by its Lie algebra via the exponential map, so cannot be both simply connected and positive-dimensional. In the nonabelian case, the left-invariant three-form {% raw %}<span class="math inline">\(\omega(X,Y,Z)=\langle X,[Y,Z]\rangle\)</span>{% endraw %} is nonzero. Ad-invariance makes it alternating and, since {% raw %}<span class="math inline">\(\nabla_XY=\frac12[X,Y]\)</span>{% endraw %} for a bi-invariant metric, parallel: the three bracket terms in {% raw %}<span class="math inline">\(\nabla_X\omega\)</span>{% endraw %} cancel by Ad-invariance and Jacobi. Thus {% raw %}<span class="math inline">\(d\omega=\delta\omega=0\)</span>{% endraw %}. But {% raw %}<span class="math inline">\(H^3_{\mathrm{dR}}(\mathbb S^7)=0\)</span>{% endraw %}, so {% raw %}<span class="math inline">\(\omega=d\alpha\)</span>{% endraw %}; integration by parts gives {% raw %}<span class="math inline">\(\|\omega\|_{L^2}^2=\langle\alpha,\delta\omega\rangle_{L^2}=0\)</span>{% endraw %}, a contradiction. Unit complex numbers and unit quaternions give the remaining Lie groups.</p>
</div>

<p>Vector fields are important because they are <em>derivations on {% raw %}<span class="math inline">\(\mathscr C^\infty (M)\)</span>{% endraw %}</em>. Let {% raw %}<span class="math inline">\(f\)</span>{% endraw %} be a smooth real-valued function defined on an open subset {% raw %}<span class="math inline">\(U \subset M\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(X \in \mathscr X(M)\)</span>{% endraw %}. Define a function {% raw %}<span class="math inline">\(Xf : U \to \mathbb R\)</span>{% endraw %} by </p>

{% raw %}<div class="math display">\[(Xf)(p) = X_p f ~.\]</div>{% endraw %}
<p> In other words, {% raw %}<span class="math inline">\(Xf\)</span>{% endraw %} is obtained from applying the action of {% raw %}<span class="math inline">\(X_p\)</span>{% endraw %} on a real-valued function {% raw %}<span class="math inline">\(f\)</span>{% endraw %}. This definition makes sense locally, because the action of a tangent vector is determined by the values of the function in a neighbourhood. In other words, for an open subset {% raw %}<span class="math inline">\(V \subset U\)</span>{% endraw %}, we have {% raw %}<span class="math inline">\((Xf)|_V = X(f|_V)\)</span>{% endraw %}. Applying this definition multiple times yields the following result.</p>

<div id="prop:smooth-vector-field-characterization" class="proposition" data-note-number="4" data-note-kind="Proposition">
<p><strong>Proposition 4</strong>.  Let {% raw %}<span class="math inline">\(M\)</span>{% endraw %} be a differentiable manifold. Then, the following are equivalent:</p>

<ol>
<li><p>{% raw %}<span class="math inline">\(X\)</span>{% endraw %} is a smooth vector field.</p></li>
<li><p>For every {% raw %}<span class="math inline">\(f \in \mathscr C^\infty (M)\)</span>{% endraw %}, {% raw %}<span class="math inline">\(Xf\)</span>{% endraw %} is a smooth function on {% raw %}<span class="math inline">\(M\)</span>{% endraw %}.</p></li>
<li><p>For every open subset {% raw %}<span class="math inline">\(U \subset M\)</span>{% endraw %} and {% raw %}<span class="math inline">\(f \in \mathscr C^\infty (U)\)</span>{% endraw %}, {% raw %}<span class="math inline">\(Xf\)</span>{% endraw %} is a smooth function on {% raw %}<span class="math inline">\(U\)</span>{% endraw %}.</p></li>
</ol>
</div>
<p><strong>Proof of Proposition 4.</strong> In local coordinates, {% raw %}<span class="math inline">\(Xf=\sum_iX^i\partial_if\)</span>{% endraw %}, so (1) implies (3), which implies (2). Conversely, fix a chart {% raw %}<span class="math inline">\(U\)</span>{% endraw %} and a smaller neighbourhood {% raw %}<span class="math inline">\(W\)</span>{% endraw %} of a point, and choose a smooth cutoff {% raw %}<span class="math inline">\(\chi\)</span>{% endraw %} supported in {% raw %}<span class="math inline">\(U\)</span>{% endraw %} with {% raw %}<span class="math inline">\(\chi=1\)</span>{% endraw %} on {% raw %}<span class="math inline">\(W\)</span>{% endraw %}. Extend {% raw %}<span class="math inline">\(\chi x^i\)</span>{% endraw %} by zero to a global smooth function {% raw %}<span class="math inline">\(f_i\)</span>{% endraw %}. On {% raw %}<span class="math inline">\(W\)</span>{% endraw %}, {% raw %}<span class="math inline">\(Xf_i=X^i\)</span>{% endraw %}. Assumption (2) therefore makes every coordinate coefficient smooth near every point, proving (1). {% raw %}<span class="math inline">\(\square\)</span>{% endraw %}</p>

<p>A particular consequence of Proposition <a href="#prop:smooth-vector-field-characterization" data-reference-type="ref" data-reference="prop:smooth-vector-field-characterization">4</a> is that {% raw %}<span class="math inline">\(X\)</span>{% endraw %} induces an endomorphism on {% raw %}<span class="math inline">\(\mathscr C^\infty (M)\)</span>{% endraw %}, defined as {% raw %}<span class="math inline">\(f \mapsto Xf\)</span>{% endraw %}. This map is clearly linear over {% raw %}<span class="math inline">\(\mathbb R\)</span>{% endraw %}. Furthermore, the Leibniz rule holds: {% raw %}<span class="math inline">\(X(fg) = f Xg + g Xf\)</span>{% endraw %}. Any map satisfying these conditions is called a <em>derivation</em>. We can also say that <em>any</em> derivation must be induced by some smooth vector field.</p>

<div id="prop:derivation-vector-field-characterization" class="proposition" data-note-number="5" data-note-kind="Proposition">
<p><strong>Proposition 5</strong>.  Let {% raw %}<span class="math inline">\(M\)</span>{% endraw %} be a differentiable manifold. A map {% raw %}<span class="math inline">\(D : \mathscr C^\infty (M) \to \mathscr C^\infty (M)\)</span>{% endraw %} is a derivation if and only if {% raw %}<span class="math inline">\(Df = Xf\)</span>{% endraw %} for some {% raw %}<span class="math inline">\(X \in \mathscr X(M)\)</span>{% endraw %}.</p>

</div>
<p><strong>Proof of Proposition 5.</strong> A smooth vector field is a derivation by the ordinary product rule. Conversely, let {% raw %}<span class="math inline">\(D\)</span>{% endraw %} be an {% raw %}<span class="math inline">\(\mathbb R\)</span>{% endraw %}-linear derivation. The identity {% raw %}<span class="math inline">\(D1=D(1\cdot1)=2D1\)</span>{% endraw %} gives {% raw %}<span class="math inline">\(D1=0\)</span>{% endraw %}. If {% raw %}<span class="math inline">\(h\)</span>{% endraw %} vanishes near {% raw %}<span class="math inline">\(p\)</span>{% endraw %}, choose a smooth cutoff {% raw %}<span class="math inline">\(\chi\)</span>{% endraw %} equal to one near {% raw %}<span class="math inline">\(p\)</span>{% endraw %} and supported where {% raw %}<span class="math inline">\(h=0\)</span>{% endraw %}. Since {% raw %}<span class="math inline">\(h=(1-\chi)h\)</span>{% endraw %}, the product rule gives {% raw %}<span class="math inline">\(Dh(p)=0\)</span>{% endraw %}. Thus {% raw %}<span class="math inline">\(Df(p)\)</span>{% endraw %} depends only on the germ of {% raw %}<span class="math inline">\(f\)</span>{% endraw %} at {% raw %}<span class="math inline">\(p\)</span>{% endraw %}.</p>
<p>In a coordinate ball about {% raw %}<span class="math inline">\(p\)</span>{% endraw %}, the fundamental theorem of calculus gives Hadamard’s formula</p>
{% raw %}<div class="math display">\[f(x)-f(p)=\sum_i(x^i-x^i(p))h_i(x),\qquad h_i(p)=\partial_i f(p).\]</div>{% endraw %}

<p>Locality allows all functions in this identity to be replaced by global cutoff extensions before applying {% raw %}<span class="math inline">\(D\)</span>{% endraw %} at {% raw %}<span class="math inline">\(p\)</span>{% endraw %}. The product rule then yields</p>
{% raw %}<div class="math display">\[Df(p)=\sum_i a_i(p)\partial_i f(p),\qquad a_i(p)=D(\chi x^i)(p),\]</div>{% endraw %}

<p>where the same cutoff is one on a neighbourhood of {% raw %}<span class="math inline">\(p\)</span>{% endraw %}. On that neighbourhood each {% raw %}<span class="math inline">\(a_i\)</span>{% endraw %} is smooth. Hence {% raw %}<span class="math inline">\(X=\sum_i a_i\partial_i\)</span>{% endraw %} is a smooth local field, and the identity {% raw %}<span class="math inline">\(Xf=Df\)</span>{% endraw %} makes the fields agree on chart overlaps. They define a global field; testing coordinate functions also proves uniqueness. {% raw %}<span class="math inline">\(\square\)</span>{% endraw %}</p>

<p>We sometimes identify smooth vector fields on {% raw %}<span class="math inline">\(M\)</span>{% endraw %} with derivations of {% raw %}<span class="math inline">\(\mathscr C^\infty (M)\)</span>{% endraw %}, using the same letter for both the vector field (thought of as a smooth map {% raw %}<span class="math inline">\(M \to TM\)</span>{% endraw %}), and the derivation (thought of as a linear endomorphism of {% raw %}<span class="math inline">\(\mathscr C^\infty (M)\)</span>{% endraw %}).</p>

<p>We can now discuss more about vector fields in relation to smooth maps. In particular, let {% raw %}<span class="math inline">\(F : M \to N\)</span>{% endraw %} be a smooth map between differentiable manifolds, and {% raw %}<span class="math inline">\(X \in \mathscr X(M)\)</span>{% endraw %}. Then, at each {% raw %}<span class="math inline">\(p \in M\)</span>{% endraw %}, we can define {% raw %}<span class="math inline">\((\dif F)_p (X_p) \in T_{F(p)} N\)</span>{% endraw %} by <em>applying</em> the differential of {% raw %}<span class="math inline">\(F\)</span>{% endraw %} to {% raw %}<span class="math inline">\(X_p\)</span>{% endraw %}. But, this need not be a vector field on {% raw %}<span class="math inline">\(N\)</span>{% endraw %}; in fact, in general, it is not. This motivates the following definition.</p>

<div id="result-6" class="definition" data-note-number="6" data-note-kind="Definition">
<p><strong>Definition 6</strong>.  Let {% raw %}<span class="math inline">\(F : M \to N\)</span>{% endraw %} be a smooth map between differentiable manifolds, {% raw %}<span class="math inline">\(X \in \mathscr X(M)\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(Y \in \mathscr X(N)\)</span>{% endraw %}. Then, {% raw %}<span class="math inline">\(X\)</span>{% endraw %} and {% raw %}<span class="math inline">\(Y\)</span>{% endraw %} are <em>{% raw %}<span class="math inline">\(F\)</span>{% endraw %}-related</em> if, at each {% raw %}<span class="math inline">\(p \in M\)</span>{% endraw %}, </p>

{% raw %}<div class="math display">\[(\dif F)_p (X_p) = Y_{F(p)} ~.\]</div>{% endraw %}
</div>
<p>A straightforward calculation shows that, if {% raw %}<span class="math inline">\(F : \mathbb R \to \mathbb R^2\)</span>{% endraw %} defined by {% raw %}<span class="math inline">\(F(t) = (\cos t, \sin t)\)</span>{% endraw %}, then {% raw %}<span class="math inline">\(\od{}{t} \in \mathscr X(\mathbb R)\)</span>{% endraw %} is {% raw %}<span class="math inline">\(F\)</span>{% endraw %}-related to {% raw %}<span class="math inline">\(Y \in \mathscr X(\mathbb R^2)\)</span>{% endraw %} defined as {% raw %}<span class="math inline">\(Y = x \pd{}{y} - y \pd{}{x}\)</span>{% endraw %}.</p>

<div id="prop:F-related-characterization" class="proposition" data-note-number="7" data-note-kind="Proposition">
<p><strong>Proposition 7</strong>.  Let {% raw %}<span class="math inline">\(F : M \to N\)</span>{% endraw %} be a smooth map between differentiable manifolds, {% raw %}<span class="math inline">\(X \in \mathscr X(M)\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(Y \in \mathscr X(N)\)</span>{% endraw %}. Then, {% raw %}<span class="math inline">\(X\)</span>{% endraw %} and {% raw %}<span class="math inline">\(Y\)</span>{% endraw %} are <span>{% raw %}<span class="math inline">\(F\)</span>{% endraw %}-related</span> if and only if, for any smooth real-valued function {% raw %}<span class="math inline">\(f\)</span>{% endraw %} defined on an open subset of {% raw %}<span class="math inline">\(N\)</span>{% endraw %}, we have </p>

{% raw %}<div class="math display">\[X(f \circ F) = (Yf) \circ F ~.\]</div>{% endraw %}
</div>
<div class="proof">
<p><em>Proof.</em> For any {% raw %}<span class="math inline">\(p \in M\)</span>{% endraw %} and any smooth, real-valued function {% raw %}<span class="math inline">\(f\)</span>{% endraw %} defined in a sufficiently small neighbourhood of {% raw %}<span class="math inline">\(F(p)\)</span>{% endraw %}, we have </p>

{% raw %}<div class="math display">\[\begin{aligned}
        X(f \circ F)(p) &amp;= X_p(f \circ F) = (\dif F)_p (X_p) f ~, \\
        (Yf) \circ F(p) &amp;= (Yf)(F(p)) = Y_{F(p)} f ~.
    
\end{aligned}\]</div>{% endraw %}
<p> The two expressions are equal for all {% raw %}<span class="math inline">\(f\)</span>{% endraw %} if and only if {% raw %}<span class="math inline">\(X\)</span>{% endraw %} and {% raw %}<span class="math inline">\(Y\)</span>{% endraw %} are {% raw %}<span class="math inline">\(F\)</span>{% endraw %}-related. ◻</p>

</div>
<p>We note that {% raw %}<span class="math inline">\(F\)</span>{% endraw %}-related vector fields are <em>unique</em> if {% raw %}<span class="math inline">\(F\)</span>{% endraw %} is a diffeomorphism.</p>

<div id="prop:unique-F-related-diffeomorphism" class="proposition" data-note-number="8" data-note-kind="Proposition">
<p><strong>Proposition 8</strong>.  Let {% raw %}<span class="math inline">\(F : M \to N\)</span>{% endraw %} be a diffeomorphism between differentiable manifolds, and {% raw %}<span class="math inline">\(X \in \mathscr X(M)\)</span>{% endraw %}. Then, there exists a unique smooth vector field on {% raw %}<span class="math inline">\(N\)</span>{% endraw %}, denoted {% raw %}<span class="math inline">\(Y\)</span>{% endraw %}, that is <span>{% raw %}<span class="math inline">\(F\)</span>{% endraw %}-related</span> to {% raw %}<span class="math inline">\(X\)</span>{% endraw %}.</p>

</div>
<div class="proof">
<p><em>Proof.</em> If {% raw %}<span class="math inline">\(F\)</span>{% endraw %} is a diffeomorphism, we define {% raw %}<span class="math inline">\(Y\)</span>{% endraw %} via </p>

{% raw %}<div class="math display">\[Y_q = (\dif F)_{F^{-1}(q)} (X_{F^{-1}(q)}) \quad \text{for all } q \in N ~.\]</div>{% endraw %}
<p> {% raw %}<span class="math inline">\(Y\)</span>{% endraw %} is clearly {% raw %}<span class="math inline">\(F\)</span>{% endraw %}-related to {% raw %}<span class="math inline">\(X\)</span>{% endraw %}. Furthermore, {% raw %}<span class="math inline">\(Y\)</span>{% endraw %} is the composition of the maps {% raw %}<span class="math inline">\(N \xrightarrow{F^{-1}} M \xrightarrow{X} TM \xrightarrow{\dif F} TN\)</span>{% endraw %}, implying {% raw %}<span class="math inline">\(Y\)</span>{% endraw %} is a smooth map as a composition of smooth maps. The displayed formula is forced at every point because the diffeomorphism is onto, which also proves uniqueness. ◻</p>

</div>
<div id="result-9" class="definition" data-note-number="9" data-note-kind="Definition">
<p><strong>Definition 9</strong>.  The unique vector field obtained in Proposition <a href="#prop:unique-F-related-diffeomorphism" data-reference-type="ref" data-reference="prop:unique-F-related-diffeomorphism">8</a> is called the <em>pushforward of {% raw %}<span class="math inline">\(X\)</span>{% endraw %} by {% raw %}<span class="math inline">\(F\)</span>{% endraw %}</em>. This is denoted {% raw %}<span class="math inline">\(F_* X\)</span>{% endraw %}. We define this explicitly by {% raw %}<span class="math inline">\((F_* X)_q = (\dif F)_{F^{-1}(q)} (X_{F^{-1}(q)})\)</span>{% endraw %}.</p>

</div>
<div id="result-10" class="corollary" data-note-number="10" data-note-kind="Corollary">
<p><strong>Corollary 10</strong>.  Let {% raw %}<span class="math inline">\(F : M \to N\)</span>{% endraw %} be a diffeomorphism and {% raw %}<span class="math inline">\(X\in \mathscr X(M)\)</span>{% endraw %}. For any {% raw %}<span class="math inline">\(f \in \mathscr C^\infty (N)\)</span>{% endraw %}, </p>

{% raw %}<div class="math display">\[((F_* X) f) \circ F = X(f \circ F) ~.\]</div>{% endraw %}
</div>
<h3 data-note-section="2" id="flows-on-vector-fields">2. Flows on Vector Fields</h3>
<p>Let {% raw %}<span class="math inline">\(M\)</span>{% endraw %} be a differentiable manifold of dimension {% raw %}<span class="math inline">\(n\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(I \subset \mathbb R\)</span>{% endraw %} be an interval. Let {% raw %}<span class="math inline">\(\gamma : I \to M\)</span>{% endraw %} be a curve. For all {% raw %}<span class="math inline">\(t \in I\)</span>{% endraw %}, it is clear that {% raw %}<span class="math inline">\(\gamma&#x27;(t) \in T_{\gamma(t)} M\)</span>{% endraw %}. As before, let {% raw %}<span class="math inline">\(V\)</span>{% endraw %} be a vector field along {% raw %}<span class="math inline">\(M\)</span>{% endraw %}—or, equivalently, a section of tangent bundle. This motivates the following definition.</p>

<div id="result-11" class="definition" data-note-number="11" data-note-kind="Definition">
<p><strong>Definition 11</strong>.  Let {% raw %}<span class="math inline">\(V\)</span>{% endraw %} be a vector field along {% raw %}<span class="math inline">\(M\)</span>{% endraw %}. An <em>integral curve of {% raw %}<span class="math inline">\(V\)</span>{% endraw %}</em> is a differentiable curve {% raw %}<span class="math inline">\(\gamma : I \to M\)</span>{% endraw %} such that {% raw %}<span class="math inline">\(\gamma&#x27;(t) = V_{\gamma(t)}\)</span>{% endraw %} for all {% raw %}<span class="math inline">\(t \in I\)</span>{% endraw %}.</p>

</div>
<p>We can write integral curves in local coordinates. Let {% raw %}<span class="math inline">\(U \subset M\)</span>{% endraw %} be an open, smooth domain with coordinates {% raw %}<span class="math inline">\(\{x^1,\cdots,x^n\}\)</span>{% endraw %}. Then, the integral curve condition becomes </p>

{% raw %}<div class="math display">\[\dot \gamma^i \dpd{}{{x^i}}\bigg|_{\gamma(t)} = V^i (\gamma(t)) \dpd{}{{x^i}}\bigg|_{\gamma(t)} \text{ for all } 1 \leq i \leq n ~.\]</div>{% endraw %}
<p> In other words, locally, integral curves are solutions to a system of ODEs. Standard results in existence and uniqueness of solutions to systems of ODEs yield the following statements.</p>

<div id="result-12" class="proposition" data-note-number="12" data-note-kind="Proposition">
<p><strong>Proposition 12.</strong> For every smooth field {% raw %}<span class="math inline">\(V\)</span>{% endraw %} and {% raw %}<span class="math inline">\(p\in M\)</span>{% endraw %}, there is a unique integral curve near time zero with {% raw %}<span class="math inline">\(\gamma(0)=p\)</span>{% endraw %}.</p>
<p><strong>Proof.</strong> In a chart the equation is {% raw %}<span class="math inline">\(\dot x^i=V^i(x)\)</span>{% endraw %} with {% raw %}<span class="math inline">\(x(0)=x(p)\)</span>{% endraw %}. Smoothness makes the right-hand side locally Lipschitz, so the local existence and uniqueness theorem for ODEs applies. Shrink the time interval so the solution stays in the chart, then apply the inverse coordinate map. Chart changes preserve the equation by the chain rule, and uniqueness consequently holds on overlapping coordinate neighbourhoods. {% raw %}<span class="math inline">\(\square\)</span>{% endraw %}</p>
<p>We use the ODE theorems on local existence, uniqueness, and smooth dependence on time and the initial point; see <a href="https://www.mat.univie.ac.at/~gerald/ftp/book-ode/ode.pdf">Teschl, <em>Ordinary Differential Equations and Dynamical Systems</em>, Theorems 2.2 and 2.10, pp. 38 and 46–47</a>. Our coordinate right-hand sides are smooth, so they meet both hypotheses.</p>
</div>
<div id="prop:rescaling-flows" class="proposition" data-note-number="13" data-note-kind="Proposition">
<p><strong>Proposition 13.</strong> If {% raw %}<span class="math inline">\(\gamma:J\to M\)</span>{% endraw %} is an integral curve of {% raw %}<span class="math inline">\(V\)</span>{% endraw %} and {% raw %}<span class="math inline">\(a\in\mathbb R\)</span>{% endraw %}, put {% raw %}<span class="math inline">\(\widetilde J=\{t:at\in J\}\)</span>{% endraw %}. Whenever this set is nonempty, {% raw %}<span class="math inline">\(\widetilde\gamma(t)=\gamma(at)\)</span>{% endraw %} is an integral curve of {% raw %}<span class="math inline">\(aV\)</span>{% endraw %}.</p>
<p><strong>Proof.</strong> For {% raw %}<span class="math inline">\(t\in\widetilde J\)</span>{% endraw %} and a smooth local function {% raw %}<span class="math inline">\(f\)</span>{% endraw %},</p>
{% raw %}<div class="math display">\[\widetilde\gamma&#39;(t)f=\frac{d}{dt}f(\gamma(at))=a\gamma&#39;(at)f=(aV)_{\widetilde\gamma(t)}f.\]</div>{% endraw %}

<p>When {% raw %}<span class="math inline">\(a=0\)</span>{% endraw %} and {% raw %}<span class="math inline">\(0\in J\)</span>{% endraw %}, this is the constant curve on all of {% raw %}<span class="math inline">\(\mathbb R\)</span>{% endraw %}; if {% raw %}<span class="math inline">\(0\notin J\)</span>{% endraw %}, the proposed domain is empty. {% raw %}<span class="math inline">\(\square\)</span>{% endraw %}</p>
</div>
<div id="prop:translating-flows" class="proposition" data-note-number="14" data-note-kind="Proposition">
<p><strong>Proposition 14.</strong> If {% raw %}<span class="math inline">\(\gamma:J\to M\)</span>{% endraw %} is an integral curve of {% raw %}<span class="math inline">\(V\)</span>{% endraw %} and {% raw %}<span class="math inline">\(b\in\mathbb R\)</span>{% endraw %}, then {% raw %}<span class="math inline">\(\widetilde\gamma(t)=\gamma(t+b)\)</span>{% endraw %} on {% raw %}<span class="math inline">\(\widetilde J=J-b\)</span>{% endraw %} is an integral curve of {% raw %}<span class="math inline">\(V\)</span>{% endraw %}.</p>
<p><strong>Proof.</strong> For {% raw %}<span class="math inline">\(t\in J-b\)</span>{% endraw %},</p>
{% raw %}<div class="math display">\[\widetilde\gamma&#39;(t)f=(f\circ\gamma)&#39;(t+b)=V_{\gamma(t+b)}f=V_{\widetilde\gamma(t)}f.\]</div>{% endraw %}

<p>In particular, when {% raw %}<span class="math inline">\(b\in J\)</span>{% endraw %} this curve starts at {% raw %}<span class="math inline">\(\gamma(b)\)</span>{% endraw %}. The domain and the argument of {% raw %}<span class="math inline">\(\gamma\)</span>{% endraw %} must use the same sign. {% raw %}<span class="math inline">\(\square\)</span>{% endraw %}</p>
</div>

<div id="result-15" class="proposition" data-note-number="15" data-note-kind="Proposition">
<p><strong>Proposition 15</strong>.  Let {% raw %}<span class="math inline">\(M\)</span>{% endraw %} and {% raw %}<span class="math inline">\(N\)</span>{% endraw %} be differentiable manifolds. Let {% raw %}<span class="math inline">\(F: M \to N\)</span>{% endraw %} be a smooth map. Then, {% raw %}<span class="math inline">\(X \in \mathscr X(M)\)</span>{% endraw %} and {% raw %}<span class="math inline">\(Y \in \mathscr X(N)\)</span>{% endraw %} are {% raw %}<span class="math inline">\(F\)</span>{% endraw %}-related if and only if {% raw %}<span class="math inline">\(F\)</span>{% endraw %} takes integral curves of {% raw %}<span class="math inline">\(X\)</span>{% endraw %} to integral curves of {% raw %}<span class="math inline">\(Y\)</span>{% endraw %}, i.e. if {% raw %}<span class="math inline">\(\gamma\)</span>{% endraw %} is an integral curve of {% raw %}<span class="math inline">\(X\)</span>{% endraw %}, then {% raw %}<span class="math inline">\(F \circ \gamma\)</span>{% endraw %} is an integral curve of {% raw %}<span class="math inline">\(Y\)</span>{% endraw %}.</p>

</div>
<div class="proof">
<p><em>Proof.</em> For the “only if” direction, set {% raw %}<span class="math inline">\(\sigma = F \circ \gamma\)</span>{% endraw %}. Then, </p>

{% raw %}<div class="math display">\[\begin{aligned}
        \sigma&#x27;(t) = (F \circ \gamma)&#x27;(t) &amp;= (\dif F)_{\gamma(t)} (\gamma&#x27;(t)) \\
        &amp;= (\dif F)_{\gamma(t)} (X_{\gamma(t)}) = Y_{F(\gamma(t))} = Y_{\sigma(t)} ~,
    
\end{aligned}\]</div>{% endraw %}
<p> where the fourth equality follows from {% raw %}<span class="math inline">\(F\)</span>{% endraw %}-relatedness.</p>

<p>For the “if” direction, let {% raw %}<span class="math inline">\(p \in M\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(\gamma : (-\varepsilon,\varepsilon) \to M\)</span>{% endraw %} be an integral curve such that {% raw %}<span class="math inline">\(\gamma(0) = p\)</span>{% endraw %}. It follows from direct calculations that </p>

{% raw %}<div class="math display">\[\begin{aligned}
        Y_{F(p)} = (F \circ \gamma)&#x27; (p) &amp;= (\dif F)_p (\gamma&#x27;(0)) = (\dif F)_p (X_p) ~,
    
\end{aligned}\]</div>{% endraw %}
<p> i.e. {% raw %}<span class="math inline">\(X\)</span>{% endraw %} and {% raw %}<span class="math inline">\(Y\)</span>{% endraw %} are {% raw %}<span class="math inline">\(F\)</span>{% endraw %}-related. ◻</p>

</div>
<p>We now collect the integral curves into maps indexed by time. We do so by first fixing any “time” {% raw %}<span class="math inline">\(t \in \mathbb R\)</span>{% endraw %}, and looking at the integral curve as it travels across the manifold. To do so, for simplicity, let {% raw %}<span class="math inline">\(M\)</span>{% endraw %} be a differentiable manifold, and {% raw %}<span class="math inline">\(V\)</span>{% endraw %} be a smooth vector field with the property that, for all {% raw %}<span class="math inline">\(p \in M\)</span>{% endraw %}, there is a unique integral curve {% raw %}<span class="math inline">\(\kappa^{(p)} : \mathbb R \to M\)</span>{% endraw %} starting at {% raw %}<span class="math inline">\(p\)</span>{% endraw %}, i.e. {% raw %}<span class="math inline">\(\kappa^{(p)}(0)=p\)</span>{% endraw %}. By fixing a time {% raw %}<span class="math inline">\(t\)</span>{% endraw %}, we define the map {% raw %}<span class="math inline">\(\kappa_t (p) = \kappa^{(p)} (t)\)</span>{% endraw %}. Doing so for each {% raw %}<span class="math inline">\(t\)</span>{% endraw %}, this is a map {% raw %}<span class="math inline">\(\kappa_t : M \to M\)</span>{% endraw %} for all {% raw %}<span class="math inline">\(t \in \mathbb R\)</span>{% endraw %}. Note that, by Proposition <a href="#prop:translating-flows" data-reference-type="ref" data-reference="prop:translating-flows">14</a>, the map {% raw %}<span class="math inline">\(t \mapsto \kappa^{(p)}(t+s)\)</span>{% endraw %} is an integral curve starting at {% raw %}<span class="math inline">\(q=\kappa^{(p)}(s)\)</span>{% endraw %}; since integral curves are assumed to be unique, we must have {% raw %}<span class="math inline">\(\kappa^{(q)}(t) = \kappa^{(p)}(t+s)\)</span>{% endraw %}. In other words, {% raw %}<span class="math inline">\(\kappa_t \circ\kappa_s (p) = \kappa_{t+s} (p)\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(\kappa_0 (p) = \kappa^{(p)}(0) = p\)</span>{% endraw %}. Therefore, the map {% raw %}<span class="math inline">\(\kappa : \mathbb R \times M \to M\)</span>{% endraw %} is an action of the additive group {% raw %}<span class="math inline">\(\mathbb R\)</span>{% endraw %} on {% raw %}<span class="math inline">\(M\)</span>{% endraw %}.</p>

<div id="result-16" class="definition" data-note-number="16" data-note-kind="Definition">
<p><strong>Definition 16</strong>.  A <em>global flow</em>, or <em>one-parameter group action</em>, on a differentiable manifold {% raw %}<span class="math inline">\(M\)</span>{% endraw %} is a continuous left-{% raw %}<span class="math inline">\(\mathbb R\)</span>{% endraw %} action on {% raw %}<span class="math inline">\(M\)</span>{% endraw %}, i.e. a continuous map {% raw %}<span class="math inline">\(\kappa : \mathbb R \times M \to M\)</span>{% endraw %} such that {% raw %}<span class="math inline">\(\kappa(t,\kappa(s,p)) = \kappa(s+t,p)\)</span>{% endraw %} for all {% raw %}<span class="math inline">\(s,t \in \mathbb R\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(\kappa(0,p) = p\)</span>{% endraw %}.</p>

</div>
<div id="result-17" class="remark" data-note-number="17" data-note-kind="Remark">
<p><strong>Remark 17</strong>.  Note that the image of the curve {% raw %}<span class="math inline">\(\kappa^{(p)}\)</span>{% endraw %}, as defined earlier, is the orbit of {% raw %}<span class="math inline">\(p\)</span>{% endraw %} under the group action.</p>

</div>
<div id="result-18" class="definition" data-note-number="18" data-note-kind="Definition">
<p><strong>Definition 18</strong>.  Let {% raw %}<span class="math inline">\(\kappa : \mathbb R \times M \to M\)</span>{% endraw %} be a smooth global flow on a differentiable manifold {% raw %}<span class="math inline">\(M\)</span>{% endraw %}. For each {% raw %}<span class="math inline">\(p \in M\)</span>{% endraw %}, define {% raw %}<span class="math inline">\(V_p = \dot \kappa^{(p)} (0)\)</span>{% endraw %}. The vector field, defined as the assignment {% raw %}<span class="math inline">\(p \mapsto V_p\)</span>{% endraw %}, is called the <em>infinitesimal generator of {% raw %}<span class="math inline">\(\kappa\)</span>{% endraw %}</em>.</p>

</div>
<div id="prop:infinitesimal-generator-integral-curve-characterization" class="proposition" data-note-number="19" data-note-kind="Proposition">
<p><strong>Proposition 19</strong>.  Let {% raw %}<span class="math inline">\(\kappa : \mathbb R \times M \to M\)</span>{% endraw %} be a smooth global flow on a differentiable manifold {% raw %}<span class="math inline">\(M\)</span>{% endraw %}. The infinitesimal generator {% raw %}<span class="math inline">\(V\)</span>{% endraw %} of {% raw %}<span class="math inline">\(\kappa\)</span>{% endraw %} is a smooth vector field on {% raw %}<span class="math inline">\(M\)</span>{% endraw %}. Furthermore, each curve {% raw %}<span class="math inline">\(\kappa^{(p)}\)</span>{% endraw %} is an integral curve of {% raw %}<span class="math inline">\(V\)</span>{% endraw %}.</p>

</div>
<div class="proof">
<p><em>Proof.</em> First, we show that {% raw %}<span class="math inline">\(V\)</span>{% endraw %} is smooth. It suffices to show that {% raw %}<span class="math inline">\(Vf\)</span>{% endraw %} is smooth for every smooth real-valued function {% raw %}<span class="math inline">\(f\)</span>{% endraw %}, defined on some open subset {% raw %}<span class="math inline">\(U \subset M\)</span>{% endraw %}. It follows from direct calculation that for any {% raw %}<span class="math inline">\(p \in U\)</span>{% endraw %}, </p>

{% raw %}<div class="math display">\[\begin{aligned}
        Vf (p) = V_p f = \dot \kappa^{(p)} (0) f = \dod{}{t}\bigg|_{t=0} f(\kappa^{(p)}(t)) = \dpd{}{t}\bigg|_{(0,p)} f(\kappa(t,p)) ~,
    
\end{aligned}\]</div>{% endraw %}
<p> where the partial derivative with respect to {% raw %}<span class="math inline">\(t\)</span>{% endraw %} is smooth because {% raw %}<span class="math inline">\(f(\kappa(t,p))\)</span>{% endraw %} is a smooth, as a composition of smooth maps. Therefore, {% raw %}<span class="math inline">\(Vf(p)\)</span>{% endraw %} depends smoothly on {% raw %}<span class="math inline">\(p\)</span>{% endraw %}, and so is {% raw %}<span class="math inline">\(V\)</span>{% endraw %}.</p>

<p>Then, we show {% raw %}<span class="math inline">\(\kappa^{(p)}\)</span>{% endraw %} is an integral curve of {% raw %}<span class="math inline">\(V\)</span>{% endraw %}. Fix an arbitrary {% raw %}<span class="math inline">\(t_0 \in \mathbb R\)</span>{% endraw %}, and set {% raw %}<span class="math inline">\(q = \kappa^{(p)} (t_0) = \kappa_{t_0} (p)\)</span>{% endraw %}. Applying the group law, </p>

{% raw %}<div class="math display">\[\begin{aligned}
        \kappa^{(q)}(t) = \kappa_t (q) = \kappa_t (\kappa_{t_0} (p)) = \kappa_{t + t_0} (p) = \kappa^{(p)}(t+t_0) ~.
    
\end{aligned}\]</div>{% endraw %}
<p> Hence, for any smooth real-valued function {% raw %}<span class="math inline">\(f\)</span>{% endraw %} defined in a neighbourhood of {% raw %}<span class="math inline">\(q\)</span>{% endraw %}, the action of {% raw %}<span class="math inline">\(V_q\)</span>{% endraw %} on {% raw %}<span class="math inline">\(f\)</span>{% endraw %} is given by </p>

{% raw %}<div class="math display">\[\begin{aligned}
        V_q f = \dot \kappa^{(q)} (0) f = \dod{}{t}\bigg|_{t=0} f(\kappa^{(q)}(t)) = \dod{}{t}\bigg|_{t=0} f(\kappa^{(p)}(t+t_0)) = \dot \kappa^{(p)}(t_0) f ~,
    
\end{aligned}\]</div>{% endraw %}
<p> which demonstrates that {% raw %}<span class="math inline">\(\kappa^{(p)}\)</span>{% endraw %} is an integral curve of {% raw %}<span class="math inline">\(V\)</span>{% endraw %}, as desired. ◻</p>

</div>
<div id="result-20" class="example" data-note-number="20" data-note-kind="Example">
<p><strong>Example 20</strong>.  The vector field {% raw %}<span class="math inline">\(X = x \pd{}{y} - y \pd{}{x}\)</span>{% endraw %} induces the following flow on {% raw %}<span class="math inline">\(\mathbb R^2\)</span>{% endraw %}. In coordinates, let {% raw %}<span class="math inline">\(\gamma(t)= (x(t),y(t))\)</span>{% endraw %} denote a curve in {% raw %}<span class="math inline">\(\mathbb R^2\)</span>{% endraw %}. For {% raw %}<span class="math inline">\(\gamma\)</span>{% endraw %} to be an integral curve of {% raw %}<span class="math inline">\(X\)</span>{% endraw %}, the system of ODEs associated with {% raw %}<span class="math inline">\(\gamma\)</span>{% endraw %} is given by </p>

{% raw %}<div class="math display">\[\begin{aligned}
        x&#x27;(t) = -y(t) ~\text{ and }~ y&#x27;(t) = x(t) ~.
    
\end{aligned}\]</div>{% endraw %}
<p> This system admits the solution </p>

{% raw %}<div class="math display">\[\begin{aligned}
        x(t)= a\cos t - b \sin t ~\text{ and }~ y(t)= a\sin t + b \cos t ~.
    
\end{aligned}\]</div>{% endraw %}
<p> The integral curve is defined for all {% raw %}<span class="math inline">\(t \in \mathbb R\)</span>{% endraw %}. Therefore, the global flow generated by {% raw %}<span class="math inline">\(X\)</span>{% endraw %} is given by </p>

{% raw %}<div class="math display">\[\begin{aligned}
        \kappa_t (x,y) = (x \cos t - y \sin t, x \sin t + y \cos t ) ~.
    
\end{aligned}\]</div>{% endraw %}
<p> For each {% raw %}<span class="math inline">\(t \in \mathbb R\)</span>{% endraw %}, note that {% raw %}<span class="math inline">\(\kappa_t\)</span>{% endraw %} rotates the plane through an angle {% raw %}<span class="math inline">\(t\)</span>{% endraw %} about the origin.</p>

</div>
<p>While every smooth global flow gives rise to a smooth vector field whose integral curves are precisely the curves defined by the flow, the converse is not true. There are many examples of smooth vector fields whose integral curves are not defined for all {% raw %}<span class="math inline">\(t \in \mathbb R\)</span>{% endraw %}. For one example, let {% raw %}<span class="math inline">\(M=\mathbb R^2\)</span>{% endraw %} and {% raw %}<span class="math inline">\(V = x^2 \pd{}{x}\)</span>{% endraw %}. Then, the integral curve {% raw %}<span class="math inline">\(\gamma(t)=(x(t),y(t))\)</span>{% endraw %} is given by the pair of equations </p>

{% raw %}<div class="math display">\[\begin{aligned}
    x&#x27;(t) = x(t)^2 ~\text{ and }~ y&#x27;(t) = 0 ~.
\end{aligned}\]</div>{% endraw %}
<p>With initial value {% raw %}<span class="math inline">\((a,b)\)</span>{% endraw %}, the solution is {% raw %}<span class="math inline">\(x(t)=a/(1-at)\)</span>{% endraw %} and {% raw %}<span class="math inline">\(y(t)=b\)</span>{% endraw %}, on the connected interval {% raw %}<span class="math inline">\(1-at&gt;0\)</span>{% endraw %} containing zero (all of {% raw %}<span class="math inline">\(\mathbb R\)</span>{% endraw %} if {% raw %}<span class="math inline">\(a=0\)</span>{% endraw %}). In particular, the curve from {% raw %}<span class="math inline">\((1,0)\)</span>{% endraw %} is {% raw %}<span class="math inline">\((1/(1-t),0)\)</span>{% endraw %} on {% raw %}<span class="math inline">\((-\infty,1)\)</span>{% endraw %}. It cannot extend through time one: its first coordinate is unbounded there. Thus a smooth field need not generate a global flow, and the time interval of existence can depend on the initial point.</p>

<div id="result-21" class="definition" data-note-number="21" data-note-kind="Definition">
<p><strong>Definition 21</strong>.  Let {% raw %}<span class="math inline">\(M\)</span>{% endraw %} be a differentiable manifold. Then, a <em>flow domain for {% raw %}<span class="math inline">\(M\)</span>{% endraw %}</em> is an open subset {% raw %}<span class="math inline">\(\mathscr D \subset \mathbb R \times M\)</span>{% endraw %} such that for each {% raw %}<span class="math inline">\(p\)</span>{% endraw %}, {% raw %}<span class="math inline">\(\mathscr D^{(p)} \triangleq \{ t \in \mathbb R : (t,p) \in \mathscr D \}\)</span>{% endraw %} is an open interval containing {% raw %}<span class="math inline">\(0\)</span>{% endraw %}.</p>

</div>
<div id="result-22" class="definition" data-note-number="22" data-note-kind="Definition">
<p><strong>Definition 22</strong>.  A <em>flow</em> on {% raw %}<span class="math inline">\(M\)</span>{% endraw %} is a continuous map {% raw %}<span class="math inline">\(\kappa: \mathscr D \to M\)</span>{% endraw %} such that {% raw %}<span class="math inline">\(\kappa(0,p)=p\)</span>{% endraw %}, and for all {% raw %}<span class="math inline">\(s \in \mathscr D^{(p)}\)</span>{% endraw %} and {% raw %}<span class="math inline">\(t \in \mathscr D^{\kappa(s,p)}\)</span>{% endraw %} such that {% raw %}<span class="math inline">\(s+t \in \mathscr D^{(p)}\)</span>{% endraw %}, {% raw %}<span class="math inline">\(\kappa(t,\kappa(s,p)) = \kappa(t+s,p)\)</span>{% endraw %}.</p>

</div>
<div id="result-23" class="definition" data-note-number="23" data-note-kind="Definition">
<p><strong>Definition 23</strong>.  A <em>maximal integral curve</em> is an integral curve that cannot be extended to an integral curve on any larger open interval. Similarly, a <em>maximal flow</em> is a flow that admits no extension to a flow on a larger flow domain.</p>

</div>
<p>By these definitions, we define the “shifted manifold” </p>

{% raw %}<div class="math display">\[M_t = \{ p \in M : (t,p) \in \mathscr D \}\]</div>{% endraw %}
<p> along a flow {% raw %}<span class="math inline">\(\kappa\)</span>{% endraw %}. Therefore, {% raw %}<span class="math inline">\(p \in M_t \iff t \in \mathscr D^{(p)} \iff (t,p) \in \mathscr D\)</span>{% endraw %}. Furthermore, if {% raw %}<span class="math inline">\(\kappa\)</span>{% endraw %} is smooth, the infinitesimal generator of {% raw %}<span class="math inline">\(\kappa\)</span>{% endraw %} is defined by {% raw %}<span class="math inline">\(V_p = \dot \kappa^{(p)} (0)\)</span>{% endraw %}.</p>

<p>Using the differentiation argument from the proof of Proposition <a href="#prop:infinitesimal-generator-integral-curve-characterization" data-reference-type="ref" data-reference="prop:infinitesimal-generator-integral-curve-characterization">19</a>, we have the following result.</p>

<div id="prop:infinitesimal-generator-integral-curve-characterization-flow-domain" class="proposition" data-note-number="24" data-note-kind="Proposition">
<p><strong>Proposition 24.</strong> Let {% raw %}<span class="math inline">\(\kappa:\mathscr D\to M\)</span>{% endraw %} be a <strong>smooth</strong> flow. Its infinitesimal generator {% raw %}<span class="math inline">\(V_p=\partial_t\kappa(0,p)\)</span>{% endraw %} is smooth, and every {% raw %}<span class="math inline">\(t\mapsto\kappa(t,p)\)</span>{% endraw %} is an integral curve of {% raw %}<span class="math inline">\(V\)</span>{% endraw %}.</p>
<p><strong>Proof.</strong> Openness of {% raw %}<span class="math inline">\(\mathscr D\)</span>{% endraw %} supplies a product neighbourhood of {% raw %}<span class="math inline">\((0,p)\)</span>{% endraw %}, so the smoothness calculation in Proposition 19 applies locally. For {% raw %}<span class="math inline">\(s\in\mathscr D^{(p)}\)</span>{% endraw %}, both sides of {% raw %}<span class="math inline">\(\kappa(t,\kappa(s,p))=\kappa(t+s,p)\)</span>{% endraw %} are defined for sufficiently small {% raw %}<span class="math inline">\(t\)</span>{% endraw %}. Differentiate at {% raw %}<span class="math inline">\(t=0\)</span>{% endraw %} to obtain {% raw %}<span class="math inline">\(V_{\kappa(s,p)}=\partial_s\kappa(s,p)\)</span>{% endraw %}. A merely continuous flow does not justify these derivatives. {% raw %}<span class="math inline">\(\square\)</span>{% endraw %}</p>
</div>
<div id="thm:fundamental-thm-flows" class="theorem" data-note-number="25" data-note-kind="Theorem">
<p><strong>Theorem 25.</strong> (Fundamental theorem of flows.) Every smooth vector field {% raw %}<span class="math inline">\(V\)</span>{% endraw %} has a unique smooth maximal flow {% raw %}<span class="math inline">\(\kappa:\mathscr D\to M\)</span>{% endraw %} with generator {% raw %}<span class="math inline">\(V\)</span>{% endraw %}. Write {% raw %}<span class="math inline">\(I_p=\mathscr D^{(p)}\)</span>{% endraw %} and {% raw %}<span class="math inline">\(M_t=\{p:(t,p)\in\mathscr D\}\)</span>{% endraw %}. Then:</p>
<ol type="1">
<li>{% raw %}<span class="math inline">\(\kappa^{(p)}:I_p\to M\)</span>{% endraw %} is the unique maximal integral curve from {% raw %}<span class="math inline">\(p\)</span>{% endraw %}.</li>
<li>For {% raw %}<span class="math inline">\(s\in I_p\)</span>{% endraw %} and {% raw %}<span class="math inline">\(q=\kappa(s,p)\)</span>{% endraw %}, one has the exact equality {% raw %}<span class="math inline">\(I_q=I_p-s\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\kappa(t,q)=\kappa(t+s,p)\)</span>{% endraw %} on this interval.</li>
<li>{% raw %}<span class="math inline">\(M_t\)</span>{% endraw %} is open and {% raw %}<span class="math inline">\(\kappa_t:M_t\to M_{-t}\)</span>{% endraw %} is a diffeomorphism with inverse {% raw %}<span class="math inline">\(\kappa_{-t}\)</span>{% endraw %}.</li>
</ol>
<p><strong>Proof.</strong> Local uniqueness implies that two integral curves with the same initial value agree wherever both are defined: the equality set in their common interval is closed by continuity and open by local uniqueness. Union all intervals of solutions from {% raw %}<span class="math inline">\(p\)</span>{% endraw %} and glue these compatible curves. This gives a maximal open interval {% raw %}<span class="math inline">\(I_p\)</span>{% endraw %} containing zero and a unique maximal curve {% raw %}<span class="math inline">\(\gamma_p\)</span>{% endraw %}. Put {% raw %}<span class="math inline">\(\mathscr D=\{(t,p):t\in I_p\}\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\kappa(t,p)=\gamma_p(t)\)</span>{% endraw %}.</p>
<p>To prove that {% raw %}<span class="math inline">\(\mathscr D\)</span>{% endraw %} is open and {% raw %}<span class="math inline">\(\kappa\)</span>{% endraw %} is smooth, fix {% raw %}<span class="math inline">\((t_0,p_0)\in\mathscr D\)</span>{% endraw %}. The compact trajectory segment between times zero and {% raw %}<span class="math inline">\(t_0\)</span>{% endraw %} is covered by coordinate neighbourhoods in which the local ODE solution is smooth in time and its starting point. Divide the segment into finitely many sufficiently short time steps, each lying in one such neighbourhood. After shrinking a neighbourhood of {% raw %}<span class="math inline">\(p_0\)</span>{% endraw %}, continuity of each local solution ensures that its endpoint remains in the starting neighbourhood for the next step. Compose these finitely many smooth solution maps; the final step can vary in a small interval about its prescribed length. This constructs a smooth solution for all {% raw %}<span class="math inline">\((t,p)\)</span>{% endraw %} in a product neighbourhood of {% raw %}<span class="math inline">\((t_0,p_0)\)</span>{% endraw %}. Uniqueness identifies it with {% raw %}<span class="math inline">\(\kappa\)</span>{% endraw %}. The same construction with negative steps covers {% raw %}<span class="math inline">\(t_0&lt;0\)</span>{% endraw %}.</p>
<p>For {% raw %}<span class="math inline">\(s\in I_p\)</span>{% endraw %}, the shifted curve {% raw %}<span class="math inline">\(t\mapsto\gamma_p(t+s)\)</span>{% endraw %} starts at {% raw %}<span class="math inline">\(q=\gamma_p(s)\)</span>{% endraw %}. Uniqueness makes it the restriction of {% raw %}<span class="math inline">\(\gamma_q\)</span>{% endraw %}, giving {% raw %}<span class="math inline">\(I_p-s\subset I_q\)</span>{% endraw %}. The shifted curve is itself maximal: an extension would, after translating time back by {% raw %}<span class="math inline">\(s\)</span>{% endraw %}, extend {% raw %}<span class="math inline">\(\gamma_p\)</span>{% endraw %}. Thus the inclusion is equality and the flow law follows. Its derivative at zero is {% raw %}<span class="math inline">\(V\)</span>{% endraw %}.</p>
<p>Openness of {% raw %}<span class="math inline">\(\mathscr D\)</span>{% endraw %} gives openness of its slices {% raw %}<span class="math inline">\(M_t\)</span>{% endraw %}. The interval identity shows that {% raw %}<span class="math inline">\(q=\kappa_t(p)\)</span>{% endraw %} lies in {% raw %}<span class="math inline">\(M_{-t}\)</span>{% endraw %}, and the flow law gives {% raw %}<span class="math inline">\(\kappa_{-t}(q)=p\)</span>{% endraw %}; the converse follows with {% raw %}<span class="math inline">\(-t\)</span>{% endraw %}. Both maps are smooth restrictions of {% raw %}<span class="math inline">\(\kappa\)</span>{% endraw %}, proving the diffeomorphism assertion. Finally, any other smooth flow with generator {% raw %}<span class="math inline">\(V\)</span>{% endraw %} consists of integral curves by Proposition 24, hence is a restriction of {% raw %}<span class="math inline">\(\kappa\)</span>{% endraw %}. Maximality forces equality. {% raw %}<span class="math inline">\(\square\)</span>{% endraw %}</p>
<p><strong>A useful completeness criterion.</strong> A maximal integral curve cannot remain in a fixed compact set as it approaches a finite endpoint of its time interval. Indeed, finitely many local ODE neighbourhoods of that compact set give a uniform positive time of existence from every point in it; start sufficiently close to the endpoint and use uniqueness to extend the curve past it. Thus every smooth field on a compact manifold is complete. More generally, a compactly supported field is complete: outside its support the constant curve is the unique solution, so a nonconstant curve cannot pass through such a point and remains in the compact support.</p>
</div>

<p>The flow whose existence and uniqueness are asserted in the fundamental theorem is called the <em>flow generated by {% raw %}<span class="math inline">\(V\)</span>{% endraw %}</em>, or simply the flow of {% raw %}<span class="math inline">\(V\)</span>{% endraw %}. The term “infinitesimal generator” comes from the following heuristic: in a smooth chart, a good approximation to an integral curve can be obtained by composing many small straight-line motions, with the direction and length of each motion determined by the value of the vector field at the point arrived at in the previous step. This interpretation explains the name: the vector field specifies the velocity of the flow at time zero, and the group law transports that information to other times.</p>


<p class="note-reading">Reading: Carmo (1992), Riemannian geometry.</p>


<nav class="note-related" aria-label="Related notes"><p>Related notes: <a href="{% post_url 2022-05-11-connections-lie-brackets-and-curvature %}">Connections, Lie Brackets, and Curvature</a>.</p></nav>

<nav class="note-series" aria-label="Notes in this series"><p>Previous: <a href="{% post_url 2024-02-09-rectifiability %}">Rectifiability</a> · Next: <a href="{% post_url 2024-03-20-vector-bundles %}">Vector Bundles</a></p></nav>

</div>
