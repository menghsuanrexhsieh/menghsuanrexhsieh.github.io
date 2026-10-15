---
layout: "post"
title: "Lie Groups and Their Lie Algebras"
date: "2022-10-07"
tags: ["math", "differential geometry"]
excerpt: "This section details more about Lie groups, and some of its applications."
note_series: "Differential geometry"
note_source: "assets/notes/Differential Geometry - Notes/diff-geo.tex"
redirect_from: ["/2022/10/07/lie-groups-definitions-and-operations/", "/2022/11/03/lie-algebras/"]
---

<div class="note-content" markdown="0">

<div id="sec:lie-group" data-note-section="title">

</div>
<p>Lie groups describe symmetries that vary smoothly. Their group operation lets us translate tangent vectors from the identity to any other point, reducing many questions about vector fields to finite-dimensional linear algebra. For the definition, refer to Example <a href="{% post_url 2022-02-05-differentiable-manifolds-charts-constructions-and-examples %}#eg:lie-group" data-reference-type="ref" data-reference="eg:lie-group">31</a>. To motivate this study, note that a <em>group</em> was originally coined to describe <em>symmetries</em>. The collection of symmetries of any object is a group, and every group is the symmetries of some object. For example, the symmetry group of a square contains four rotations, two reflections in the midlines and two reflections in the diagonals, which is a finite group of eight elements (usually denoted by {% raw %}<span class="math inline">\(D_4\)</span>{% endraw %}, with the convention that its order is eight). Another simple example is a circle in the plane, whose symmetry group consists of all rotations and reflections, and can be identified with {% raw %}<span class="math inline">\(O(2)\)</span>{% endraw %}, the set of all two by two orthogonal matrices. The circle example leads to the compatibility between group operations and smooth structure. More precisely, a Lie group admits three structures</p>

<ul>
<li><p>an algebraic structure as a group,</p></li>
<li><p>a geometric structure as a topological manifold, and</p></li>
<li><p>a smooth structure so that one can do analysis on them.</p></li>
</ul>
<p>We construct the Lie algebra from left-invariant vector fields, identify its bracket for matrix groups, and explain how a group homomorphism acts on these infinitesimal data.</p>

<h3 data-note-section="1" id="basic-definitions-and-operations">1. Basic Definitions and Operations</h3>
<div id="lem:alt-characterization-lie-group" class="lemma" data-note-number="1" data-note-kind="Lemma">
<p><strong>Lemma 1</strong>.  If {% raw %}<span class="math inline">\(G\)</span>{% endraw %} is a smooth manifold with a group structure such that {% raw %}<span class="math inline">\(\eta : G \times G \to G : (g,h) \mapsto gh^{-1}\)</span>{% endraw %} is smooth, then {% raw %}<span class="math inline">\(G\)</span>{% endraw %} is a Lie group.</p>

</div>
<div class="proof">
<p><em>Proof.</em> Let {% raw %}<span class="math inline">\(f: G \to G \times G : g \mapsto (e,g)\)</span>{% endraw %} be a map. {% raw %}<span class="math inline">\(f\)</span>{% endraw %} is smooth because of its smoothness in both components. Clearly, the inverse map {% raw %}<span class="math inline">\(i : G \to G : g \mapsto g^{-1}\)</span>{% endraw %} can be written as {% raw %}<span class="math inline">\(i = \eta \circ f\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(i\)</span>{% endraw %} is smooth as the composition of smooth maps. It follows that {% raw %}<span class="math inline">\(\operatorname{id} \times i : G \times G \to G \times G : (g,h) \mapsto (g,h^{-1})\)</span>{% endraw %} is smooth, as it is smooth in both components. Finally, set {% raw %}<span class="math inline">\(m = \eta \circ (\operatorname{id} \times i)\)</span>{% endraw %}, which is clearly the multiplication map, and is smooth as the composition of smooth maps. ◻</p>

</div>
<p>Let {% raw %}<span class="math inline">\(G\)</span>{% endraw %} be a Lie group. On {% raw %}<span class="math inline">\(G\)</span>{% endraw %}, we can define some operations. In particular, for all {% raw %}<span class="math inline">\(a,b \in G\)</span>{% endraw %}, </p>

{% raw %}<div class="math display">\[\begin{aligned}
    L_a : G \to G &amp;: g \mapsto a g \\
    R_b : G \to G &amp;: g \mapsto g b
\end{aligned}\]</div>{% endraw %}
<p> denote <em>left translation (left multiplication)</em> and <em>right translation (right multiplication)</em>, respectively. It is clear that {% raw %}<span class="math inline">\(L_a^{-1} = L_{a^{-1}}\)</span>{% endraw %} and {% raw %}<span class="math inline">\(R_b^{-1} = R_{b^{-1}}\)</span>{% endraw %}, i.e. {% raw %}<span class="math inline">\(L_a\)</span>{% endraw %} and {% raw %}<span class="math inline">\(R_b\)</span>{% endraw %} are diffeomorphisms. Furthermore, these operations are commutative: {% raw %}<span class="math inline">\(L_a R_b = R_b L_a\)</span>{% endraw %}. Finally, collecting the maps introduced in the proof of Lemma <a href="#lem:alt-characterization-lie-group" data-reference-type="ref" data-reference="lem:alt-characterization-lie-group">1</a>, we have </p>

{% raw %}<div class="math display">\[\begin{aligned}
    m: G \times G \to G &amp;: (g,h) \mapsto gh \\
    i: G \to G &amp;: g \mapsto g^{-1}
\end{aligned}\]</div>{% endraw %}
<p> are the <em>multiplication</em> and <em>inverse</em> maps.</p>

<div id="lem:dif-multiplication-lie" class="lemma" data-note-number="2" data-note-kind="Lemma">
<p><strong>Lemma 2</strong>.  For any {% raw %}<span class="math inline">\(a,b \in G\)</span>{% endraw %} and any {% raw %}<span class="math inline">\((X_a,Y_b) \in T_a G \times T_b G \cong T_{(a,b)} (G \times G)\)</span>{% endraw %}, we have </p>

{% raw %}<div class="math display">\[\dif m (X_a,Y_b) = \dif m_{a,b} (X_a,Y_b) = (\dif R_b)_a (X_a) + (\dif L_a)_b (Y_b) ~.\]</div>{% endraw %}
</div>
<div class="proof">
<p><em>Proof.</em> The tangent space of a product splits as a direct sum, so linearity gives</p>
<p> {% raw %}<div class="math display">\[dm_{(a,b)}(X,Y)=dm_{(a,b)}(X,0)+dm_{(a,b)}(0,Y).\]</div>{% endraw %}</p>
<p> On the first slice multiplication is {% raw %}<span class="math inline">\(R_b\)</span>{% endraw %}, and on the second it is {% raw %}<span class="math inline">\(L_a\)</span>{% endraw %}. This proves the formula, with both terms in {% raw %}<span class="math inline">\(T_{ab}G\)</span>{% endraw %}. Equivalently, testing on a smooth function {% raw %}<span class="math inline">\(f\)</span>{% endraw %} gives {% raw %}<span class="math inline">\(X(f\circ R_b)+Y(f\circ L_a)\)</span>{% endraw %}; derivatives act on these functions before they are evaluated at the base points. ◻</p>
</div>
<div id="result-3" class="lemma" data-note-number="3" data-note-kind="Lemma">
<p><strong>Lemma 3.</strong> If a smooth manifold is an abstract group and its multiplication is smooth, then its inverse map is smooth. Thus inversion need not be separately assumed in this equivalent definition of a Lie group.</p>
</div>
<div class="proof">
<p><em>Proof.</em> For each fixed {% raw %}<span class="math inline">\(a\)</span>{% endraw %}, translation {% raw %}<span class="math inline">\(L_a\)</span>{% endraw %} and its set-theoretic inverse {% raw %}<span class="math inline">\(L_{a^{-1}}\)</span>{% endraw %} are smooth by smoothness of multiplication. This does not yet assume smooth dependence of {% raw %}<span class="math inline">\(a^{-1}\)</span>{% endraw %} on {% raw %}<span class="math inline">\(a\)</span>{% endraw %}. Let {% raw %}<span class="math inline">\(F(a,b)=(a,ab)\)</span>{% endraw %}. It is bijective, and</p>
<p> {% raw %}<div class="math display">\[dF_{(a,b)}(X,Y)=(X,dR_bX+dL_aY).\]</div>{% endraw %}</p>
<p> Given {% raw %}<span class="math inline">\((U,V)\)</span>{% endraw %}, solve uniquely {% raw %}<span class="math inline">\(X=U\)</span>{% endraw %} and {% raw %}<span class="math inline">\(Y=(dL_a)^{-1}(V-dR_bU)\)</span>{% endraw %}; hence the differential is invertible. The inverse function theorem makes {% raw %}<span class="math inline">\(F\)</span>{% endraw %} a local diffeomorphism everywhere. Its local inverses agree with its unique global set-theoretic inverse, making that inverse smooth. Finally</p>
<p> {% raw %}<div class="math display">\[g\longmapsto(g,e)\longmapsto F^{-1}(g,e)=(g,g^{-1})\longmapsto g^{-1}\]</div>{% endraw %}</p>
<p> is a composition of smooth maps. ◻</p>
</div>
<div id="def:lie-subgroup" class="definition" data-note-number="4" data-note-kind="Definition">
<p><strong>Definition 4</strong>.  Let {% raw %}<span class="math inline">\(G\)</span>{% endraw %} be a Lie group. A subset {% raw %}<span class="math inline">\(H \subset G\)</span>{% endraw %} is a <em>Lie subgroup</em> if {% raw %}<span class="math inline">\(H\)</span>{% endraw %} is (immersed) submanifold of {% raw %}<span class="math inline">\(G\)</span>{% endraw %}, and the group operation on {% raw %}<span class="math inline">\(H\)</span>{% endraw %} is smooth (with respect to its own differentiable structure).</p>

<p>Here {% raw %}<span class="math inline">\(H\)</span>{% endraw %} must be a subgroup as well as an injectively immersed manifold, and its manifold topology may be finer than the subspace topology. Multiplication is smooth in that topology; Lemma 3 then gives smooth inversion.</p>
</div>
<p>The Lie bracket of vector fields suggests an algebraic definition. It retains bilinearity, skew-symmetry, and the Jacobi identity, without requiring a manifold.</p>

<div id="def:lie-algebra" class="definition" data-note-number="5" data-note-kind="Definition">
<p><strong>Definition 5</strong>.  A <em>Lie algebra</em> is a vector space {% raw %}<span class="math inline">\(V\)</span>{% endraw %} with the bilinear bracket operation {% raw %}<span class="math inline">\([\cdot,\cdot] : V \times V \to V\)</span>{% endraw %} such that for all {% raw %}<span class="math inline">\(X,Y,Z \in V\)</span>{% endraw %},</p>

<ol>
<li><p>(Skew-Symmetry) {% raw %}<span class="math inline">\([X,Y]=-[Y,X]\)</span>{% endraw %},</p></li>
<li><p>(Jacobi’s Identity) {% raw %}<span class="math inline">\([X,[Y,Z]] + [Y,[Z,X]] + [Z,[X,Y]] = 0\)</span>{% endraw %}.</p></li>
</ol>
<p>All Lie algebras here are over {% raw %}<span class="math inline">\(\mathbb R\)</span>{% endraw %}, so skew-symmetry implies {% raw %}<span class="math inline">\([X,X]=0\)</span>{% endraw %}. The bracket is bilinear over constants, not over arbitrary smooth functions when the vectors are vector fields.</p>
</div>
<div id="rem:left-invariant-tangent-space-identity" class="remark" data-note-number="6" data-note-kind="Remark">
<p><strong>Remark 6</strong> (The Left-Invariant Property on Tangent Space at Identity).  Let {% raw %}<span class="math inline">\(e \in G\)</span>{% endraw %} denote the identity element of the Lie group {% raw %}<span class="math inline">\(G\)</span>{% endraw %}. Consider {% raw %}<span class="math inline">\(a \in G\)</span>{% endraw %}, {% raw %}<span class="math inline">\(X_e \in T_e G\)</span>{% endraw %}, and the left translation {% raw %}<span class="math inline">\(L_a\)</span>{% endraw %} acting on {% raw %}<span class="math inline">\(X_e\)</span>{% endraw %}. By ongoing discussions, translations in {% raw %}<span class="math inline">\(G\)</span>{% endraw %} define canonical identifications between the tangent spaces to {% raw %}<span class="math inline">\(G\)</span>{% endraw %} at different point. In particular, {% raw %}<span class="math inline">\(\dif L_a : T_g G \to T_{ag} G\)</span>{% endraw %} for any {% raw %}<span class="math inline">\(g \in G\)</span>{% endraw %}. This property allow us to consider <em>invariant tensors</em>, the most important case being that of <em>vector fields</em>.</p>

<p>We say a vector field {% raw %}<span class="math inline">\(X\)</span>{% endraw %} on {% raw %}<span class="math inline">\(G\)</span>{% endraw %} is <em>left-invariant</em> if {% raw %}<span class="math inline">\((\dif L_a)_b (X_b) = X_{ab}\)</span>{% endraw %} for all {% raw %}<span class="math inline">\(a,b \in G\)</span>{% endraw %}. This definition is sensible because, by direct calculation and properties discussed, {% raw %}<span class="math inline">\((\dif L_a)_b (X_b) = (\dif L_a)_b (\dif L_b) (X_e) = (\dif L_{ab}) (X_e) = X_{ab}\)</span>{% endraw %}. Clearly, this condition is saying {% raw %}<span class="math inline">\((\dif L_a) \circ X = X \circ L_a\)</span>{% endraw %} for every {% raw %}<span class="math inline">\(a \in G\)</span>{% endraw %}; equivalently, {% raw %}<span class="math inline">\(X\)</span>{% endraw %} is {% raw %}<span class="math inline">\(L_a\)</span>{% endraw %}-related to itself, or {% raw %}<span class="math inline">\(L_{a^*} X = X\)</span>{% endraw %} (since {% raw %}<span class="math inline">\(L_a\)</span>{% endraw %} is a diffeomorphism), for all {% raw %}<span class="math inline">\(a \in G\)</span>{% endraw %}. Collecting the discussion above, it follows that <em>any</em> {% raw %}<span class="math inline">\(X_e \in T_e G\)</span>{% endraw %} determines a left-invariant vector field {% raw %}<span class="math inline">\(X\)</span>{% endraw %} on {% raw %}<span class="math inline">\(G\)</span>{% endraw %}. The converse also holds: any left-invariant vector field {% raw %}<span class="math inline">\(X\)</span>{% endraw %} admits a unique determination by its “value” at {% raw %}<span class="math inline">\(e \in G\)</span>{% endraw %}, i.e. by {% raw %}<span class="math inline">\(X(a) = (\dif L_a) (X_e)\)</span>{% endraw %}. Therefore, it makes sense to define the following object: </p>

{% raw %}<span id="eq:lie-algebra-left-invariant"></span><div class="math display">\[
        \mathfrak g \triangleq \left\{ X \in \Gamma(TG) : X \text{ is left-invariant}  \right\}\tag{1}\]</div>{% endraw %}
<p> as a vector subspace of {% raw %}<span class="math inline">\(\Gamma(TG)\)</span>{% endraw %}. Finally, by ongoing discussion, as a vector space, {% raw %}<span class="math inline">\(\mathfrak g \cong T_e G\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\dim \mathfrak g = \dim G\)</span>{% endraw %}, because the map {% raw %}<span class="math inline">\(\mathfrak g \ni X \mapsto X_e\)</span>{% endraw %} defines is a linear isomorphism between {% raw %}<span class="math inline">\(\mathfrak g\)</span>{% endraw %} and {% raw %}<span class="math inline">\(T_e G\)</span>{% endraw %}.</p>

</div>
<p>We will not pursue the following point currently, but note that {% raw %}<span class="math inline">\(\Gamma(TG)\)</span>{% endraw %} admits a Lie bracket operation that turns it into an infinite-dimensional Lie algebra. For now, we show that {% raw %}<span class="math inline">\(\mathfrak g\)</span>{% endraw %} admits a bracket operation that turns it into a Lie algebra.</p>

<div id="prop:lie-bracket-left-invariant" class="proposition" data-note-number="7" data-note-kind="Proposition">
<p><strong>Proposition 7</strong>.  If {% raw %}<span class="math inline">\(X, Y \in \mathfrak g\)</span>{% endraw %}, then {% raw %}<span class="math inline">\([X,Y] \in \mathfrak g\)</span>{% endraw %}.</p>

</div>
<div class="proof">
<p><em>Proof.</em> Left invariance says {% raw %}<span class="math inline">\(X(f\circ L_a)=(Xf)\circ L_a\)</span>{% endraw %}, and the analogous identity holds for {% raw %}<span class="math inline">\(Y\)</span>{% endraw %}. Apply {% raw %}<span class="math inline">\(X\)</span>{% endraw %} to the identity for {% raw %}<span class="math inline">\(Y\)</span>{% endraw %}, subtract the reversed identity, and obtain</p>
<p> {% raw %}<div class="math display">\[[X,Y](f\circ L_a)=([X,Y]f)\circ L_a.\]</div>{% endraw %}</p>
<p> At {% raw %}<span class="math inline">\(b\)</span>{% endraw %}, the left side equals {% raw %}<span class="math inline">\(d(L_a)_b([X,Y]_b)f\)</span>{% endraw %}, whereas the right side is {% raw %}<span class="math inline">\([X,Y]_{ab}f\)</span>{% endraw %}. Equality for all smooth test functions proves left invariance. Bilinearity, antisymmetry and Jacobi are inherited from the bracket of vector fields. ◻</p>
</div>
<p>Note that there is a much more general statement: for any {% raw %}<span class="math inline">\(a \in G\)</span>{% endraw %}, </p>

{% raw %}<div class="math display">\[\begin{aligned}
    (L_{a^*}) [X,Y] = [L_{a^*}X, L_{a^*}Y] = [X,Y] ~.
\end{aligned}\]</div>{% endraw %}
<p> This follows from general properties of the bracket along with the fact that {% raw %}<span class="math inline">\(L_a\)</span>{% endraw %} is a (local) diffeomorphism. By Proposition <a href="#prop:lie-bracket-left-invariant" data-reference-type="ref" data-reference="prop:lie-bracket-left-invariant">7</a>, we can state the following definition.</p>

<div id="result-8" class="definition" data-note-number="8" data-note-kind="Definition">
<p><strong>Definition 8</strong>.  {% raw %}<span class="math inline">\(\mathfrak g\)</span>{% endraw %} in <a href="#eq:lie-algebra-left-invariant" data-reference-type="eqref" data-reference="eq:lie-algebra-left-invariant">(1)</a>, together with the Lie bracket operation, is the <em>Lie algebra</em> of the Lie group {% raw %}<span class="math inline">\(G\)</span>{% endraw %}.</p>

</div>
<div id="prop:lie-algebra-is-finite-dim" class="proposition" data-note-number="9" data-note-kind="Proposition">
<p><strong>Proposition 9</strong> (Lie algebra is finite-dimensional).  Let {% raw %}<span class="math inline">\(G\)</span>{% endraw %} be a Lie group, and {% raw %}<span class="math inline">\(\mathfrak g\)</span>{% endraw %} be the Lie algebra of {% raw %}<span class="math inline">\(G\)</span>{% endraw %}. Then, the evaluation map {% raw %}<span class="math inline">\(\mathcal E: \mathfrak g \to T_e G : X \mapsto X_e\)</span>{% endraw %} is a <em>vector space isomorphism</em>. Therefore, {% raw %}<span class="math inline">\(\mathfrak g\)</span>{% endraw %} is finite-dimensional, with dimension equal to {% raw %}<span class="math inline">\(\dim G\)</span>{% endraw %}.</p>

</div>
<div class="proof">
<p><em>Proof.</em> Clearly, {% raw %}<span class="math inline">\(\mathcal E\)</span>{% endraw %} is linear over {% raw %}<span class="math inline">\(\mathbb R\)</span>{% endraw %}, and this is an injective map. The latter follows because if {% raw %}<span class="math inline">\(\mathcal E(X) = 0\)</span>{% endraw %} for some {% raw %}<span class="math inline">\(X \in \mathfrak g\)</span>{% endraw %}, then the left-invariance of {% raw %}<span class="math inline">\(X\)</span>{% endraw %} implies {% raw %}<span class="math inline">\(X_g = (\dif L_g)_e (X_e) = 0\)</span>{% endraw %}, i.e. {% raw %}<span class="math inline">\(X = 0\)</span>{% endraw %}. Now, it remains to show {% raw %}<span class="math inline">\(\mathcal E\)</span>{% endraw %} is surjective.</p>

<p>To do so, for every {% raw %}<span class="math inline">\(V \in T_e G\)</span>{% endraw %}, define </p>

{% raw %}<div class="math display">\[\widetilde V\big|_g = (\dif L_g)_e (V) ~~\text{for any } g \in G ~.\]</div>{% endraw %}
<p> Clearly, if there is a left-invariant vector field on G whose value at the identity is {% raw %}<span class="math inline">\(V\)</span>{% endraw %}, it has to be given by this formula. Note that the smoothness property of {% raw %}<span class="math inline">\(\widetilde V\)</span>{% endraw %} is straightforward to show; we prove it separately, in Lemma <a href="#lem:livf-is-smooth" data-reference-type="ref" data-reference="lem:livf-is-smooth">10</a>. Finally, clearly, because {% raw %}<span class="math inline">\(L_h \circ L_g = L_{hg}\)</span>{% endraw %} for all {% raw %}<span class="math inline">\(h,g \in G\)</span>{% endraw %}, we have </p>

{% raw %}<div class="math display">\[\begin{aligned}
        (\dif L_h)_g (\widetilde V\big|_g) = (\dif L_h)_g \circ (\dif L_g)_e (V) &amp;= (\dif\, (L_h \circ L_g))_e (V) = (\dif L_{hg})_e (V) = \widetilde V\big|_{hg} ~,
    
\end{aligned}\]</div>{% endraw %}
<p> as desired. Therefore, {% raw %}<span class="math inline">\(\widetilde V \in \mathfrak g\)</span>{% endraw %}. To conclude, note that {% raw %}<span class="math inline">\(L_e\)</span>{% endraw %} is the identity map of {% raw %}<span class="math inline">\(G\)</span>{% endraw %}, it follows that {% raw %}<span class="math inline">\(\mathcal E(\widetilde V) = \widetilde V\big|_e = V\)</span>{% endraw %}. This shows the surjectivity of {% raw %}<span class="math inline">\(\mathcal E\)</span>{% endraw %}. ◻</p>

</div>
<p>The only remaining point is smoothness of the field obtained by translating a tangent vector. To complete the proof of Proposition <a href="#prop:lie-algebra-is-finite-dim" data-reference-type="ref" data-reference="prop:lie-algebra-is-finite-dim">9</a>, we provide the following result.</p>

<div id="lem:livf-is-smooth" class="lemma" data-note-number="10" data-note-kind="Lemma">
<p><strong>Lemma 10</strong>.  Every left invariant vector field {% raw %}<span class="math inline">\(X\)</span>{% endraw %} on {% raw %}<span class="math inline">\(G\)</span>{% endraw %} is smooth.</p>

</div>
<div class="proof">
<p><em>Proof.</em> Fix {% raw %}<span class="math inline">\(V=X_e\)</span>{% endraw %}, and choose a smooth curve {% raw %}<span class="math inline">\(c(t)\)</span>{% endraw %} through {% raw %}<span class="math inline">\(e\)</span>{% endraw %} with velocity {% raw %}<span class="math inline">\(V\)</span>{% endraw %}. In a coordinate neighborhood of an arbitrary {% raw %}<span class="math inline">\(a_0\)</span>{% endraw %}, each coefficient of {% raw %}<span class="math inline">\(X\)</span>{% endraw %} is</p>
<p> {% raw %}<div class="math display">\[X(x^i)(a)=\left.\frac{\partial}{\partial t}\right|_{t=0}x^i(ac(t)).\]</div>{% endraw %}</p>
<p> For {% raw %}<span class="math inline">\(a\)</span>{% endraw %} near {% raw %}<span class="math inline">\(a_0\)</span>{% endraw %} and {% raw %}<span class="math inline">\(t\)</span>{% endraw %} sufficiently small the argument remains in the coordinate neighborhood. The map inside the derivative is jointly smooth in {% raw %}<span class="math inline">\((a,t)\)</span>{% endraw %}, so its partial derivative at {% raw %}<span class="math inline">\(t=0\)</span>{% endraw %} is smooth in {% raw %}<span class="math inline">\(a\)</span>{% endraw %}. Thus all coordinate coefficients are smooth. The test function must be defined near {% raw %}<span class="math inline">\(a\)</span>{% endraw %}, not merely near {% raw %}<span class="math inline">\(e\)</span>{% endraw %}. ◻</p>
</div>
<div id="result-11" class="example" data-note-number="11" data-note-kind="Example">
<p><strong>Example 11</strong> (Basic Examples of Lie Algebras).  The left-invariant vector fields on {% raw %}<span class="math inline">\(\mathbb R^n\)</span>{% endraw %} are precisely the constant vector fields, i.e. the linear combinations of coordinate vector fields (in the canonical coordinate system) with constant coefficients. The bracket of two constant vector fields on {% raw %}<span class="math inline">\(\mathbb R^n\)</span>{% endraw %} is zero. It follows that the Lie algebra of {% raw %}<span class="math inline">\(\mathbb R^n\)</span>{% endraw %} is {% raw %}<span class="math inline">\(\mathbb R^n\)</span>{% endraw %} itself with the null bracket. In general, a vector space equipped with the null bracket is called an <em>abelian Lie algebra</em>.</p>

<p>The Lie algebra of the direct product group {% raw %}<span class="math inline">\(G \times H\)</span>{% endraw %} is the direct sum of Lie algebras, {% raw %}<span class="math inline">\(\mathfrak g \oplus \mathfrak h\)</span>{% endraw %}, where the bracket is taken component-wise.</p>

<p>Indeed {% raw %}<span class="math inline">\(T_{(e_G,e_H)}(G\times H)=T_{e_G}G\oplus T_{e_H}H\)</span>{% endraw %}, and translating a pair of tangent vectors gives the two independent component fields. Their mixed derivatives vanish, so {% raw %}<span class="math inline">\([(X_1,Y_1),(X_2,Y_2)]=([X_1,X_2],[Y_1,Y_2])\)</span>{% endraw %}.</p>
</div>
<div id="ex:general-linear-group" class="example" data-note-number="12" data-note-kind="Example">
<p><strong>Example 12</strong> (Matrix Lie Group).  Let {% raw %}<span class="math inline">\(G = \operatorname{GL}_n(\mathbb R)\)</span>{% endraw %}. Recall this inherits its manifold structure as an open subset of the Euclidean space {% raw %}<span class="math inline">\(\mathcal M_n (\mathbb R)\)</span>{% endraw %}, i.e. the space of {% raw %}<span class="math inline">\(n \times n\)</span>{% endraw %} matrices with real entries. In particular, the tangent space at the identity {% raw %}<span class="math inline">\(T_e G = \mathcal M_n (\mathbb R)\)</span>{% endraw %}. Following convention, the Lie algebra associated with {% raw %}<span class="math inline">\(\operatorname{GL}_n (\mathbb R)\)</span>{% endraw %} is denoted {% raw %}<span class="math inline">\(\mathfrak{g}\)</span>{% endraw %}.</p>

<p>Here, we first show a definition of a Lie algebra of {% raw %}<span class="math inline">\(\mathcal M_n (\mathbb R)\)</span>{% endraw %}: following convention again, let {% raw %}<span class="math inline">\(\mathfrak{gl}\)</span>{% endraw %} denote the Lie algebra we obtain from associating {% raw %}<span class="math inline">\(\mathcal M_n (\mathbb R)\)</span>{% endraw %} with a bracket operation (to be defined below).</p>

<p>First, let {% raw %}<span class="math inline">\(A \in \mathfrak{gl} = \mathcal M_n (\mathbb R)\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(\widetilde A\)</span>{% endraw %} denotes the corresponding left-invariant vector field on {% raw %}<span class="math inline">\(G\)</span>{% endraw %}. For any {% raw %}<span class="math inline">\(g \in G\)</span>{% endraw %}, we have {% raw %}<span class="math inline">\(\widetilde A g = (\dif L_g)(A) = gA\)</span>{% endraw %} (matrix multiplication on the right hand side). In what follows, {% raw %}<span class="math inline">\(B \in \mathfrak{gl}\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\widetilde B\)</span>{% endraw %} denotes the corresponding left-invariant vector field on {% raw %}<span class="math inline">\(G\)</span>{% endraw %}.</p>

<p>We now determine the bracket operation. Using the ongoing notation, let the matrix entries {% raw %}<span class="math inline">\((X^{ij})\)</span>{% endraw %} denote the global coordinate system on the space of matrices. Then, {% raw %}<span class="math inline">\(\widetilde A = A_{ij} \pd{}{{X^{ij}}}\)</span>{% endraw %} is the corresponding tangent vector at {% raw %}<span class="math inline">\(T_e G\)</span>{% endraw %}. Therefore, the corresponding left-invariant vector at {% raw %}<span class="math inline">\(X \in G\)</span>{% endraw %} is given by {% raw %}<span class="math inline">\(\widetilde A|_X = X^{ik} A_{kj} \pd{}{{X^{ij}}}\big|_{X}\)</span>{% endraw %}. It follows that </p>

{% raw %}<div class="math display">\[\begin{aligned}
        [\widetilde A, \widetilde B] &amp;= \left[ X^{ik} A_{kj} \dpd{}{{X^{ij}}}, X^{pq} B_{qr} \dpd{}{{X^{pr}}}\right] \\
        &amp;= X^{ik} A_{kj} \dpd{}{{X^{ij}}} \Big( X^{pq} B_{qr} \Big) \dpd{}{{X^{pr}}} - X^{pq} B_{qr} \dpd{}{{X^{pr}}} \left( X^{ik} A_{kj} \right) \dpd{}{{X^{ij}}} \\
        &amp;= X^{ik} A_{kj} B_{jr} \dpd{}{{X^{ir}}} - X^{pq} B_{qr} A_{rj} \dpd{}{{X^{pj}}} \\
        &amp;= X^{ik} \left(  A_{kr} B_{rj} - B_{kr} A_{rj} \right) \dpd{}{{X^{ij}}} ~,
    
\end{aligned}\]</div>{% endraw %}
<p> where, again, the Einstein summation convention is used throughout. Evaluating this expression at the identity element (i.e. identity matrix), we have </p>

{% raw %}<div class="math display">\[\begin{aligned}
        [\widetilde A, \widetilde B]\big|_{e}
        &amp;= \left(  A_{ir} B_{rj} - B_{ir} A_{rj} \right) \dpd{}{{X^{ij}}}\bigg|_{e} ~.
    
\end{aligned}\]</div>{% endraw %}
<p> Therefore, the Lie bracket operation on {% raw %}<span class="math inline">\(\mathfrak{gl}\)</span>{% endraw %} is the matrix commutator {% raw %}<span class="math inline">\([A,B] = AB - BA\)</span>{% endraw %} for {% raw %}<span class="math inline">\(A, B \in \mathcal M_n (\mathbb R)\)</span>{% endraw %}. This is also known as the commutator bracket of matrices.</p>

</div>
<p>The matrix calculation identifies the two descriptions of the Lie algebra: left-invariant vector fields on the group and matrices with their commutator bracket.</p>

<div id="result-13" class="theorem" data-note-number="13" data-note-kind="Theorem">
<p><strong>Theorem 13.</strong> Evaluation at the identity identifies the Lie algebra of {% raw %}<span class="math inline">\(\operatorname{GL}_n(\mathbb R)\)</span>{% endraw %} with the vector space {% raw %}<span class="math inline">\(\mathcal M_n(\mathbb R)\)</span>{% endraw %} equipped with {% raw %}<span class="math inline">\([A,B]=AB-BA\)</span>{% endraw %}. This matrix Lie algebra is denoted {% raw %}<span class="math inline">\(\mathfrak{gl}_n(\mathbb R)\)</span>{% endraw %}. It is not the Lie algebra of the additive group of all matrices, whose bracket would be zero.</p>
</div>
<div class="proof">
<p><em>Proof.</em> Proposition 9 identifies invariant fields with their value in {% raw %}<span class="math inline">\(T_I\operatorname{GL}_n=\mathcal M_n\)</span>{% endraw %}. Under the open-subset tangent-space identification, {% raw %}<span class="math inline">\(\widetilde A(X)=XA\)</span>{% endraw %}. Differentiating these matrix-valued fields gives</p>
<p> {% raw %}<div class="math display">\[[\widetilde A,\widetilde B](X)=D\widetilde B_X(XA)-D\widetilde A_X(XB)=XAB-XBA.\]</div>{% endraw %}</p>
<p> Evaluation at {% raw %}<span class="math inline">\(I\)</span>{% endraw %} therefore preserves the bracket. In particular the matrix commutator inherits Jacobi from vector fields (it can also be checked by expanding its twelve terms). ◻</p>
</div>
<div id="result-14" class="corollary" data-note-number="14" data-note-kind="Corollary">
<p><strong>Corollary 14</strong>.  Every Lie group admits a left-invariant smooth global frame; therefore, every Lie group is parallelizable.</p>

</div>
<p>For the definition of parallelizable, see Appendix <a href="{% post_url 2024-02-22-vector-fields-and-their-flows %}#app:flows" data-reference-type="ref" data-reference="app:flows">Vector Fields and Their Flows</a>. Note that if {% raw %}<span class="math inline">\(G\)</span>{% endraw %} is a Lie group, a local or global frame consisting of left-invariant vector fields is called a <em>left-invariant frame</em>.</p>

<div class="proof">
<p><em>Proof.</em> Choose a basis {% raw %}<span class="math inline">\(v_1,\ldots,v_n\)</span>{% endraw %} of {% raw %}<span class="math inline">\(T_eG\)</span>{% endraw %}. The fields {% raw %}<span class="math inline">\(X_i(g)=d(L_g)_e v_i\)</span>{% endraw %} are smooth by Lemma 10. Because {% raw %}<span class="math inline">\(d(L_g)_e\)</span>{% endraw %} is a linear isomorphism, their values form a basis at every {% raw %}<span class="math inline">\(g\)</span>{% endraw %}. They give a global frame, or explicitly the bundle trivialization {% raw %}<span class="math inline">\((g,t)\mapsto\sum_i t_iX_i(g)\)</span>{% endraw %}. Its inverse is smooth by inversion of the frame matrix in each coordinate chart. ◻</p>
</div>
<h3 data-note-section="2" id="lie-algebras">2. Lie Algebras</h3>
<p>A smooth group homomorphism can be differentiated at the identity. Compatibility with translations extends this linear map to the corresponding left-invariant fields, and compatibility with Lie brackets makes it a Lie algebra homomorphism.</p>

<div id="thm:induced-lie-algebra-homomorphism" class="theorem" data-note-number="15" data-note-kind="Theorem">
<p><strong>Theorem 15</strong> (Induced Lie algebra homomorphism).  Let {% raw %}<span class="math inline">\(G\)</span>{% endraw %} and {% raw %}<span class="math inline">\(H\)</span>{% endraw %} be Lie groups, and {% raw %}<span class="math inline">\(\mathfrak g\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\mathfrak h\)</span>{% endraw %} be their Lie algebras. Let {% raw %}<span class="math inline">\(F: G \to H\)</span>{% endraw %} be a Lie group homomorphism. For every {% raw %}<span class="math inline">\(X \in \mathfrak g\)</span>{% endraw %}, there exists a unique vector field in {% raw %}<span class="math inline">\(\mathfrak h\)</span>{% endraw %} that is {% raw %}<span class="math inline">\(F\)</span>{% endraw %}-related to {% raw %}<span class="math inline">\(X\)</span>{% endraw %}. Denote such vector field by {% raw %}<span class="math inline">\(F_* X\)</span>{% endraw %}. The map {% raw %}<span class="math inline">\(F_* : \mathfrak g \to \mathfrak h\)</span>{% endraw %} is a Lie algebra homomorphism.</p>

</div>
<div class="proof">
<p><em>Proof.</em> Distinguish the identities {% raw %}<span class="math inline">\(e_G,e_H\)</span>{% endraw %}. Define</p>
<p> {% raw %}<div class="math display">\[(F_*X)_h=d(L_h)_{e_H}\bigl(dF_{e_G}(X_{e_G})\bigr),\qquad h\in H.\]</div>{% endraw %}</p>
<p> This is a smooth left-invariant field on all of {% raw %}<span class="math inline">\(H\)</span>{% endraw %}. Differentiating {% raw %}<span class="math inline">\(F\circ L_g=L_{F(g)}\circ F\)</span>{% endraw %} at {% raw %}<span class="math inline">\(e_G\)</span>{% endraw %} gives</p>
<p> {% raw %}<div class="math display">\[dF_gX_g=d(L_{F(g)})_{e_H}dF_{e_G}X_{e_G}=(F_*X)_{F(g)}.\]</div>{% endraw %}</p>
<p> Conversely any invariant field related to {% raw %}<span class="math inline">\(X\)</span>{% endraw %} must have the displayed value at {% raw %}<span class="math inline">\(e_H=F(e_G)\)</span>{% endraw %}, which determines it uniquely. Linearity follows from linearity of {% raw %}<span class="math inline">\(dF_{e_G}\)</span>{% endraw %}.</p>
<p>To verify the bracket, if {% raw %}<span class="math inline">\(U=F_*X\)</span>{% endraw %} and {% raw %}<span class="math inline">\(V=F_*Y\)</span>{% endraw %}, relatedness is the identity {% raw %}<span class="math inline">\(X(f\circ F)=(Uf)\circ F\)</span>{% endraw %} for every smooth local function {% raw %}<span class="math inline">\(f\)</span>{% endraw %} on {% raw %}<span class="math inline">\(H\)</span>{% endraw %}. Taking successive derivatives and subtracting yields {% raw %}<span class="math inline">\([X,Y](f\circ F)=([U,V]f)\circ F\)</span>{% endraw %}. Thus {% raw %}<span class="math inline">\([U,V]\)</span>{% endraw %} is related to {% raw %}<span class="math inline">\([X,Y]\)</span>{% endraw %}, and it is invariant by Proposition 7. Uniqueness proves {% raw %}<span class="math inline">\(F_*[X,Y]=[F_*X,F_*Y]\)</span>{% endraw %}. No surjectivity or injectivity of {% raw %}<span class="math inline">\(F\)</span>{% endraw %} was used. ◻</p>
</div>
<div id="result-16" class="remark" data-note-number="16" data-note-kind="Remark">
<p><strong>Remark 16</strong>.  Note that in the proof of Theorem <a href="#thm:induced-lie-algebra-homomorphism" data-reference-type="ref" data-reference="thm:induced-lie-algebra-homomorphism">15</a>, {% raw %}<span class="math inline">\(F\)</span>{% endraw %} is not necessarily a diffeomorphism. Even in the absence of {% raw %}<span class="math inline">\(F\)</span>{% endraw %} being a diffeomorphism, {% raw %}<span class="math inline">\(F_* X\)</span>{% endraw %} is a well-defined smooth vector field on {% raw %}<span class="math inline">\(H\)</span>{% endraw %}.</p>

</div>
<div id="result-17" class="lemma" data-note-number="17" data-note-kind="Lemma">
<p><strong>Lemma 17</strong> (Induced homomorphisms). </p>

<ol>
<li><p>The induced homomorphism of the identity map on {% raw %}<span class="math inline">\(G\)</span>{% endraw %}, denoted {% raw %}<span class="math inline">\((\operatorname{id}_G)_* : \mathfrak g \to \mathfrak g\)</span>{% endraw %}, is the identity of {% raw %}<span class="math inline">\(\mathfrak g\)</span>{% endraw %}.</p></li>
<li><p>If {% raw %}<span class="math inline">\(F : G \to H\)</span>{% endraw %} and {% raw %}<span class="math inline">\(E : H \to K\)</span>{% endraw %} are Lie group homomorphisms, then </p>

{% raw %}<div class="math display">\[\begin{aligned}
            (E \circ F)_* = E_* \circ F_* : \mathfrak g \to \mathfrak k ~,
        
\end{aligned}\]</div>{% endraw %}
<p> where {% raw %}<span class="math inline">\(\mathfrak g\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\mathfrak k\)</span>{% endraw %} are Lie algebras of {% raw %}<span class="math inline">\(G\)</span>{% endraw %} and {% raw %}<span class="math inline">\(K\)</span>{% endraw %}, respectively.</p></li>
<li><p>Isomorphic Lie groups have isomorphic Lie algebras.</p></li>
</ol>
<p><em>Proof.</em> At the identity these claims are {% raw %}<span class="math inline">\(d(\mathrm{id})=\mathrm{id}\)</span>{% endraw %} and the chain rule {% raw %}<span class="math inline">\(d(E\circ F)=dE\circ dF\)</span>{% endraw %}. Evaluation is an isomorphism, so the same identities hold for invariant fields. Apply the composition identity to a group isomorphism and its smooth inverse to obtain inverse Lie algebra homomorphisms. ◻</p>
</div>
<p>Note that if {% raw %}<span class="math inline">\(H\)</span>{% endraw %} is a Lie subgroup of {% raw %}<span class="math inline">\(G\)</span>{% endraw %}, we might hope that the Lie algebra of {% raw %}<span class="math inline">\(H\)</span>{% endraw %}, denoted {% raw %}<span class="math inline">\(\mathfrak h\)</span>{% endraw %}, is a Lie subalgebra of that of {% raw %}<span class="math inline">\(G\)</span>{% endraw %}. However, elements of {% raw %}<span class="math inline">\(\mathfrak h\)</span>{% endraw %} are vector fields on {% raw %}<span class="math inline">\(H\)</span>{% endraw %}, not on {% raw %}<span class="math inline">\(G\)</span>{% endraw %}! We can still view {% raw %}<span class="math inline">\(\mathfrak h\)</span>{% endraw %} is a subalgebra of {% raw %}<span class="math inline">\(\mathfrak g\)</span>{% endraw %} in some sense.</p>

<div id="thm:lie-algebra-of-subgroup" class="theorem" data-note-number="18" data-note-kind="Theorem">
<p><strong>Theorem 18</strong> (Lie algebra of a Lie subgroup).  Let {% raw %}<span class="math inline">\(H \subset G\)</span>{% endraw %} be a Lie subgroup of a Lie group {% raw %}<span class="math inline">\(G\)</span>{% endraw %}. Let {% raw %}<span class="math inline">\(\iota : H \xhookrightarrow{} G\)</span>{% endraw %} be the inclusion map. There exists a Lie subalgebra {% raw %}<span class="math inline">\(\mathfrak H \subset \mathfrak g\)</span>{% endraw %} that it is canonically isomorphic to {% raw %}<span class="math inline">\(\mathfrak h\)</span>{% endraw %}, such that </p>

{% raw %}<div class="math display">\[\begin{aligned}
        \mathfrak H = \iota_* (\mathfrak h) = \{X \in \mathfrak g : X_e \in T_e H \} ~.
    
\end{aligned}\]</div>{% endraw %}
</div>
<div class="proof">
<p><em>Proof.</em> Apply the preceding homomorphism theorem to the inclusion. Because the inclusion map {% raw %}<span class="math inline">\(\iota\)</span>{% endraw %} is a Lie group homomorphism, it follows that {% raw %}<span class="math inline">\(\iota_* (\mathfrak h)\)</span>{% endraw %} is a Lie subalgebra of {% raw %}<span class="math inline">\(\mathfrak g\)</span>{% endraw %}. This subalgebra is precisely the set of left-invariant vector fields on {% raw %}<span class="math inline">\(G\)</span>{% endraw %}, whose values at the identity are of the form {% raw %}<span class="math inline">\((\dif \iota)_e (v)\)</span>{% endraw %} for some {% raw %}<span class="math inline">\(v \in T_e H\)</span>{% endraw %}. The two characterizations of {% raw %}<span class="math inline">\(\mathfrak H\)</span>{% endraw %} given in the statement of the theorem are equivalent, because the differential {% raw %}<span class="math inline">\((\dif \iota)_e : T_e H \to T_e G\)</span>{% endraw %} is the inclusion of {% raw %}<span class="math inline">\(T_e H\)</span>{% endraw %} as a <em>subspace</em> of {% raw %}<span class="math inline">\(T_e G\)</span>{% endraw %}. By the injectivity of {% raw %}<span class="math inline">\((\dif \iota)_e\)</span>{% endraw %} on {% raw %}<span class="math inline">\(T_e H\)</span>{% endraw %}, it follows that {% raw %}<span class="math inline">\(\iota_*\)</span>{% endraw %} is injective on {% raw %}<span class="math inline">\(\mathfrak h\)</span>{% endraw %}. With surjectivity is obtained from definition, it follows that {% raw %}<span class="math inline">\(\iota_*\)</span>{% endraw %} is an isomorphism between {% raw %}<span class="math inline">\(\mathfrak h\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\mathfrak H\)</span>{% endraw %}. ◻</p>

</div>
<div id="result-19" class="remark" data-note-number="19" data-note-kind="Remark">
<p><strong>Remark 19</strong>.  Theorem <a href="#thm:lie-algebra-of-subgroup" data-reference-type="ref" data-reference="thm:lie-algebra-of-subgroup">18</a> tells us that whenever {% raw %}<span class="math inline">\(H\)</span>{% endraw %} is a Lie subgroup of {% raw %}<span class="math inline">\(G\)</span>{% endraw %}, we often identify {% raw %}<span class="math inline">\(\mathfrak h\)</span>{% endraw %} as a subalgebra of {% raw %}<span class="math inline">\(\mathfrak g\)</span>{% endraw %}. Note, again, elements of {% raw %}<span class="math inline">\(\mathfrak h\)</span>{% endraw %} are not themselves left-invariant vector fields on {% raw %}<span class="math inline">\(G\)</span>{% endraw %}. But, every element of {% raw %}<span class="math inline">\(\mathfrak h\)</span>{% endraw %} corresponds to a unique element of {% raw %}<span class="math inline">\(\mathfrak g\)</span>{% endraw %}, determined by its value at the identity. Furthermore, the injection of {% raw %}<span class="math inline">\(\mathfrak h\)</span>{% endraw %} into {% raw %}<span class="math inline">\(\mathfrak g\)</span>{% endraw %} determined by the association above respects Lie brackets.</p>

</div>

<p class="note-reading">Reading: Carmo (1992), Riemannian geometry.</p>


<nav class="note-related" aria-label="Related notes"><p>Related notes: <a href="{% post_url 2022-02-05-differentiable-manifolds-charts-constructions-and-examples %}">Differentiable Manifolds: Charts, Constructions, and Examples</a>; <a href="{% post_url 2024-02-22-vector-fields-and-their-flows %}">Vector Fields and Their Flows</a>.</p></nav>

<nav class="note-series" aria-label="Notes in this series"><p>Previous: <a href="{% post_url 2022-09-10-planar-geometry-and-gauss-bonnet %}">Planar Geometry and Gauss-Bonnet</a> · Next: <a href="{% post_url 2022-10-21-lie-subgroups-the-exponential-map-and-cartans-theorem %}">Lie Subgroups, the Exponential Map, and Cartan’s Theorem</a></p></nav>

</div>
