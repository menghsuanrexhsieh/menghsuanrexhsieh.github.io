---
layout: "post"
title: "Differentiable Manifolds: Charts, Constructions, and Examples"
date: "2022-02-05"
tags: ["math", "differential geometry"]
excerpt: "This section collects most of the preliminary details of classical differential geometry."
note_series: "Differential geometry"
note_source: "assets/notes/Differential Geometry - Notes/diff-geo.tex"
redirect_from: ["/2022/02/05/differentiable-manifolds-and-coordinate-charts/", "/2022/02/18/examples-and-constructions-of-differentiable-manifolds/"]
---

<div class="note-content" markdown="0">

<p><a href="#fn1" class="footnote-ref" id="fnref1" role="doc-noteref"><sup>1</sup></a></p>

<h2 data-note-section="1" id="sec:intro">1. Definition of Differentiable Manifolds</h2>
<p>Calculus on a curved space begins with a local observation: a small piece of a sphere can be described by ordinary Euclidean coordinates. Different descriptions overlap, so we must also know how to change coordinates. A smooth manifold packages these descriptions together with the compatibility needed for differentiation.</p>

<p>We first make this compatibility precise, then examine maps, orientations, and quotient constructions. The examples test the definitions in several ways: spheres admit explicit charts, projective spaces identify points, and Grassmannians use linear maps as coordinates.</p>

<div id="def:top-manifold" class="definition" data-note-number="1" data-note-kind="Definition">
<p><strong>Definition 1</strong>. A topological manifold of dimension {% raw %}<span class="math inline">\(d\)</span>{% endraw %} is a Hausdorff, second-countable space {% raw %}<span class="math inline">\(M\)</span>{% endraw %} such that every {% raw %}<span class="math inline">\(p\in M\)</span>{% endraw %} has an open neighbourhood {% raw %}<span class="math inline">\(U\)</span>{% endraw %} homeomorphic to an open subset {% raw %}<span class="math inline">\(U^{\prime}\subset\mathbb R^d\)</span>{% endraw %}. We write the homeomorphism as {% raw %}<span class="math inline">\(\varphi:U\to U^{\prime}\)</span>{% endraw %}. No metric is assumed in this definition.</p>
</div>
<div id="def:coordinates" class="definition" data-note-number="2" data-note-kind="Definition">
<p><strong>Definition 2</strong>.  The neighbourhood {% raw %}<span class="math inline">\(U\)</span>{% endraw %}, together with homeomorphism {% raw %}<span class="math inline">\(\varphi\)</span>{% endraw %}, as defined in Definition <a href="#def:top-manifold" data-reference-type="ref" data-reference="def:top-manifold">1</a>, is called <em>coordinate chart</em>. The pullback of the coordinate functions from {% raw %}<span class="math inline">\(\mathbb R^d\)</span>{% endraw %} is called <em>local coordinates</em>.</p>

</div>
<p>In other words, Definition <a href="#def:coordinates" data-reference-type="ref" data-reference="def:coordinates">2</a> is saying, for all {% raw %}<span class="math inline">\(p \in M\)</span>{% endraw %}, there exists some neighbourhood {% raw %}<span class="math inline">\(U \subset M\)</span>{% endraw %} and homeomorphism {% raw %}<span class="math inline">\(h: U \to U&#x27; \subset \mathbb R^d\)</span>{% endraw %}.</p>

<div id="def:atlas" class="definition" data-note-number="3" data-note-kind="Definition">
<p><strong>Definition 3</strong>.  An <em>atlas</em>, denoted {% raw %}<span class="math inline">\(\mathcal A\)</span>{% endraw %}, is a collection of coordinate charts </p>

{% raw %}<span id="eq:atlas"></span><div class="math display">\[
        \mathcal A = \left\{ (U_\alpha, \varphi_\alpha) \right\}_{\alpha \in A}\tag{1}\]</div>{% endraw %}
<p> where {% raw %}<span class="math inline">\(\{U_\alpha\}_{\alpha \in A}\)</span>{% endraw %} form an open covering of {% raw %}<span class="math inline">\(M\)</span>{% endraw %}. {% raw %}<span class="math inline">\(A\)</span>{% endraw %} is some set of indices.</p>

</div>
<div id="def:locally-finite" class="definition" data-note-number="4" data-note-kind="Definition">
<p><strong>Definition 4</strong>. An atlas {% raw %}<span class="math inline">\(\{(U_\alpha,\varphi_\alpha)\}_{\alpha\in A}\)</span>{% endraw %} is <em>locally finite</em> if every {% raw %}<span class="math inline">\(p\in M\)</span>{% endraw %} has a neighbourhood that meets only finitely many chart domains {% raw %}<span class="math inline">\(U_\alpha\)</span>{% endraw %}. Requiring only that each point belong to finitely many domains is the weaker condition of point-finiteness.</p>
</div>
<div id="def:coordinate-transition" class="definition" data-note-number="5" data-note-kind="Definition">
<p><strong>Definition 5</strong>.  Let {% raw %}<span class="math inline">\(\mathcal A\)</span>{% endraw %} be a coordinate atlas for a topological manifold {% raw %}<span class="math inline">\(M\)</span>{% endraw %}. Assume that {% raw %}<span class="math inline">\((U_i,\varphi_i)\)</span>{% endraw %}, {% raw %}<span class="math inline">\((U_j,\varphi_j)\)</span>{% endraw %} are two elements of {% raw %}<span class="math inline">\(\mathcal A\)</span>{% endraw %}. The map </p>

{% raw %}<span id="eq:coordinate-transition"></span><div class="math display">\[\begin{aligned}
 
        \varphi_j \circ \varphi_i^{-1} : \varphi_i (U_i \cap U_j) \to \varphi_j (U_i \cap U_j)
    
\end{aligned}\tag{2}\]</div>{% endraw %}
<p> is a homemorphism between two open sets of {% raw %}<span class="math inline">\(\mathbb R^d\)</span>{% endraw %}. <a href="#eq:coordinate-transition" data-reference-type="eqref" data-reference="eq:coordinate-transition">(2)</a> is called the <em>coordinate transition function</em> of the charts.</p>

</div>
<p>Figure <a href="#fig:atlases" data-reference-type="ref" data-reference="fig:atlases">Differentiable Manifolds: Charts, Constructions, and Examples</a> shows the coordinate transition function. To compare two descriptions of the same point, first return from coordinates to the manifold, then apply the second chart.</p>

<figure class="note-diagram" id="fig:atlases" data-diagram="coordinate-transition" style="--diagram-width: 699px; --diagram-min-width: 524px">
<div class="note-diagram__canvas" tabindex="0" role="region" aria-label="Coordinate transition between two overlapping charts. Both coordinate domains lie in Euclidean space of the manifold dimension."><a href="{{ '/assets/images/notes/tikz/coordinate-transition.svg' | relative_url }}?v=7bdbd7796376" title="Open diagram at full size"><img src="{{ '/assets/images/notes/tikz/coordinate-transition.svg' | relative_url }}?v=7bdbd7796376" alt="Coordinate transition between two overlapping charts. Both coordinate domains lie in Euclidean space of the manifold dimension." loading="lazy" decoding="async"></a></div>
<figcaption>Coordinate transition between two overlapping charts. Both coordinate domains lie in Euclidean space of the manifold dimension.</figcaption>
</figure>
<div id="result-6" class="definition" data-note-number="6" data-note-kind="Definition">
<p><strong>Definition 6</strong>.  An atlas {% raw %}<span class="math inline">\(\mathcal A\)</span>{% endraw %} on {% raw %}<span class="math inline">\(M\)</span>{% endraw %} is <em>differentiable</em> if all coordinate chart transition functions are differentiable.</p>

</div>
<div id="def:equivalent-atlas" class="definition" data-note-number="7" data-note-kind="Definition">
<p><strong>Definition 7</strong>.  The coordinate atlases {% raw %}<span class="math inline">\(U = \{U_\alpha,\varphi_\alpha\}\)</span>{% endraw %}, {% raw %}<span class="math inline">\(V = \{V_\beta,\varphi_\beta\}\)</span>{% endraw %} are <em>equivalent</em> if </p>

{% raw %}<span id="eq:equivalent-atlas"></span><div class="math display">\[
        \begin{aligned}
            \varphi_\beta \circ \varphi_\alpha^{-1} &amp;: \varphi_\alpha (U_\alpha \cap V_\beta) \to \varphi_\beta (U_\alpha \cap V_\beta) \\
            
            \varphi_\alpha \circ \varphi_\beta^{-1} &amp;: \varphi_\beta (U_\alpha \cap V_\beta) \to \varphi_\alpha (U_\alpha \cap V_\beta)            
        \end{aligned}\tag{3}\]</div>{% endraw %}
<p> are diffeomorphisms.</p>

</div>
<div id="def:diff-structure" class="definition" data-note-number="8" data-note-kind="Definition">
<p><strong>Definition 8</strong>.  A <em>differentiable structure</em> (or <em>smooth structure</em>) on a manifold {% raw %}<span class="math inline">\(M\)</span>{% endraw %} is defined by an equivalence class of coordinate atlas, such that any coordinate transition function is a diffeomorphism.</p>

</div>
<div id="result-9" class="remark" data-note-number="9" data-note-kind="Remark">
<p><strong>Remark 9 (Maximal smooth atlas).</strong> Starting with a smooth atlas {% raw %}<span class="math inline">\(\mathcal A\)</span>{% endraw %}, collect every chart smoothly compatible with every chart of {% raw %}<span class="math inline">\(\mathcal A\)</span>{% endraw %}. This collection {% raw %}<span class="math inline">\(\mathcal A_{\max}\)</span>{% endraw %} is itself a smooth atlas: near a point in the overlap of two new charts, insert an original chart and express their transition as a composition of two smooth transitions. It is maximal because any further compatible chart already belongs to the collection. Thus every smooth atlas determines a unique maximal smooth atlas. Maximality rules out a <em>proper</em> compatible enlargement; it does not rule out equality, and a compatible atlas {% raw %}<span class="math inline">\(\mathcal B\)</span>{% endraw %} satisfies {% raw %}<span class="math inline">\(\mathcal B\subseteq\mathcal A_{\max}\)</span>{% endraw %}, not necessarily a strict inclusion.</p>
</div>
<div id="def:smooth-manifold" class="definition" data-note-number="10" data-note-kind="Definition">
<p><strong>Definition 10</strong>.  A <em>differentiable manifold</em> (or <em>smooth manifold</em>) is a manifold {% raw %}<span class="math inline">\(M\)</span>{% endraw %} equipped with differentiable structure.</p>

</div>
<h4 data-note-section="1.1" id="why-differentiable-manifolds">1.1. Why Differentiable Manifolds?</h4>
<p>On a smooth manifold {% raw %}<span class="math inline">\(M\)</span>{% endraw %}, we can do calculus for all functions {% raw %}<span class="math inline">\(f: M \to \mathbb R\)</span>{% endraw %} that are smooth/differentiable. We speak about the class of functions {% raw %}<span class="math inline">\(\mathscr C^{\infty}\)</span>{% endraw %} defined on {% raw %}<span class="math inline">\(M\)</span>{% endraw %}, and denote </p>

{% raw %}<div class="math display">\[\mathscr C^{\infty} (M) = \mathscr C^{\infty} (M,\mathbb R) = \left\{ f : M \to \mathbb R ~,~ \text{where $f$ is a smooth function} \right\} ~.\]</div>{% endraw %}
<p> There is usually no ambiguity in the use of {% raw %}<span class="math inline">\(\mathscr C^{\infty} (M)\)</span>{% endraw %}, because the context generally lends itself to using a real-valued function defined on a differentiable manifold {% raw %}<span class="math inline">\(M\)</span>{% endraw %}.</p>

<div id="result-11" class="remark" data-note-number="11" data-note-kind="Remark">
<p><strong>Remark 11.</strong> For a chart {% raw %}<span class="math inline">\(\varphi:U\to\varphi(U)\subset\mathbb R^d\)</span>{% endraw %}, the coordinate expression of {% raw %}<span class="math inline">\(f:M\to\mathbb R\)</span>{% endraw %} is {% raw %}<span class="math inline">\(f\circ\varphi^{-1}:\varphi(U)\to\mathbb R\)</span>{% endraw %}. We call {% raw %}<span class="math inline">\(f\)</span>{% endraw %} smooth when all these expressions are {% raw %}<span class="math inline">\(C^\infty\)</span>{% endraw %}. If {% raw %}<span class="math inline">\(\psi\)</span>{% endraw %} is a compatible chart, then on an overlap</p>
<p> {% raw %}<div class="math display">\[f\circ\psi^{-1}=(f\circ\varphi^{-1})\circ(\varphi\circ\psi^{-1}).\]</div>{% endraw %}</p>
<p> The transition on the right is smooth. Smoothness is local, so this identity proves that equivalent atlases define the same class {% raw %}<span class="math inline">\(C^\infty(M)\)</span>{% endraw %}. Throughout these notes, “differentiable” in an atlas means smooth, rather than merely once differentiable.</p>
</div>
<div id="def:oriented" class="definition" data-note-number="12" data-note-kind="Definition">
<p><strong>Definition 12</strong>.  An atlas of a differentiable manifold is <em>oriented</em> if all coordinate transition functions have positive functional determinants.</p>

</div>
<div id="rem:positive-functional-determinant" class="remark" data-note-number="13" data-note-kind="Remark">
<p><strong>Remark 13</strong>.  We denote the property of a coordinate transition function having positive functional determinant as {% raw %}<span class="math inline">\((\star)\)</span>{% endraw %}.</p>

</div>
<div id="result-14" class="definition" data-note-number="14" data-note-kind="Definition">
<p><strong>Definition 14</strong>.  A smooth manifold {% raw %}<span class="math inline">\(M\)</span>{% endraw %} is said to be <em>orientable</em> if there exists an oriented atlas, as defined in Definition <a href="#def:oriented" data-reference-type="ref" data-reference="def:oriented">12</a>.</p>

</div>
<div id="result-15" class="definition" data-note-number="15" data-note-kind="Definition">
<p><strong>Definition 15.</strong> On a fixed smooth manifold of positive dimension, an orientation is an equivalence class of oriented atlases compatible with its smooth structure. Two oriented atlases are equivalent when every transition between them has positive Jacobian determinant. An oriented manifold is a manifold together with this choice.</p>
</div>
<div id="result-16" class="remark" data-note-number="16" data-note-kind="Remark">
<p><strong>Remark 16.</strong> Two oriented atlases represent the same orientation precisely when their union is an oriented atlas. An orientation is additional data on a smooth structure, not a different smooth structure.</p>
</div>
<div id="lem:orient-connect" class="lemma" data-note-number="17" data-note-kind="Lemma">
<p><strong>Lemma 17.</strong> A connected orientable smooth manifold of positive dimension has exactly two orientations. The same assertion holds for a manifold with boundary, with the usual half-space charts.</p>
</div>
<div class="proof">
<p><em>Proof.</em> Fix an oriented atlas. At any point, compare another oriented atlas with it by the sign of a coordinate-transition determinant. Changing either chart multiplies the determinant by positive factors, so this sign is well-defined. It is locally constant because a nonzero continuous determinant cannot change sign on a sufficiently small connected neighbourhood. Connectedness therefore makes the sign constant on all of {% raw %}<span class="math inline">\(M\)</span>{% endraw %}.</p>
<p>The positive choice gives the original orientation. Composing every original chart with a fixed reflection of {% raw %}<span class="math inline">\(\mathbb R^d\)</span>{% endraw %} gives the negative choice: transitions are conjugated by reflections and still have positive determinant. These choices differ at every point, and the sign argument excludes a third orientation. For boundary charts, reflect a coordinate tangent to the boundary when possible; equivalently compare orientations of tangent frames, which also covers dimension one. ◻</p>
</div>
<div id="def:maps-manifolds" class="definition" data-note-number="18" data-note-kind="Definition">
<p><strong>Definition 18.</strong> A map {% raw %}<span class="math inline">\(h:M\to N\)</span>{% endraw %} of smooth manifolds is smooth if it is continuous and, for every pair of charts {% raw %}<span class="math inline">\(\varphi:U\to\mathbb R^d\)</span>{% endraw %}, {% raw %}<span class="math inline">\(\psi:V\to\mathbb R^e\)</span>{% endraw %}, its coordinate expression</p>
<p> {% raw %}<div class="math display">\[\psi\circ h\circ\varphi^{-1}:\varphi(U\cap h^{-1}(V))\longrightarrow\psi(V)\]</div>{% endraw %}</p>
<p> is smooth. Continuity ensures that the displayed domain is open. It suffices to check this in any pair of atlases, since other coordinate expressions are obtained by composing with smooth transition maps. Local finiteness is not required for this definition.</p>
</div>
<div id="result-19" class="remark" data-note-number="19" data-note-kind="Remark">
<p><strong>Remark 19</strong>.  Definition <a href="#def:maps-manifolds" data-reference-type="ref" data-reference="def:maps-manifolds">18</a> implies that smooth maps between differentiable manifolds depend on the smooth structures of {% raw %}<span class="math inline">\(M\)</span>{% endraw %} and {% raw %}<span class="math inline">\(N\)</span>{% endraw %}, but <em>not</em> on the chosen representative coordinate atlases. This is because of the definition of equivalence relation in Definition <a href="#def:diff-structure" data-reference-type="ref" data-reference="def:diff-structure">8</a>.</p>

</div>
<div id="result-20" class="definition" data-note-number="20" data-note-kind="Definition">
<p><strong>Definition 20</strong>.  Two differentiable manifolds are said to be <em>diffeomorphic</em> if there exists a smooth homeomorphism such that its inverse is smooth.</p>

</div>
<div id="lem:diffeo-orient" class="lemma" data-note-number="21" data-note-kind="Lemma">
<p><strong>Lemma 21</strong>.  Let {% raw %}<span class="math inline">\(M\)</span>{% endraw %}, {% raw %}<span class="math inline">\(N\)</span>{% endraw %} be differentiable manifolds. Let {% raw %}<span class="math inline">\(f : M \to N\)</span>{% endraw %} be a diffeomorphism. Then,</p>

<ol>
<li><p>{% raw %}<span class="math inline">\(M\)</span>{% endraw %} is orientable if and only if {% raw %}<span class="math inline">\(N\)</span>{% endraw %} is orientable.</p></li>
<li><p>If {% raw %}<span class="math inline">\(M\)</span>{% endraw %} and {% raw %}<span class="math inline">\(N\)</span>{% endraw %} are orientable and connected, then {% raw %}<span class="math inline">\(f\)</span>{% endraw %} induces either preserves or reverses orientation on {% raw %}<span class="math inline">\(N\)</span>{% endraw %}.</p></li>
</ol>
</div>
<div class="proof">
<p><em>Proof.</em> If {% raw %}<span class="math inline">\(\{(U_\alpha,\varphi_\alpha)\}\)</span>{% endraw %} is an oriented atlas on {% raw %}<span class="math inline">\(M\)</span>{% endraw %}, transport it to {% raw %}<span class="math inline">\(N\)</span>{% endraw %} as</p>
<p> {% raw %}<div class="math display">\[\{(f(U_\alpha),\varphi_\alpha\circ f^{-1})\}.\]</div>{% endraw %}</p>
<p> The transition between two transported charts is exactly {% raw %}<span class="math inline">\(\varphi_\beta\circ\varphi_\alpha^{-1}\)</span>{% endraw %}, so its determinant is positive. This gives an orientation of {% raw %}<span class="math inline">\(N\)</span>{% endraw %}; applying the same construction to {% raw %}<span class="math inline">\(f^{-1}\)</span>{% endraw %} proves the converse.</p>
<p>Now fix orientations on both connected manifolds. In oriented charts, {% raw %}<span class="math inline">\(\det D(\psi\circ f\circ\varphi^{-1})\)</span>{% endraw %} never vanishes, since the derivative of the inverse is its inverse matrix. Its sign is independent of the oriented charts and is locally constant. The sets where this sign is positive and negative are disjoint open sets whose union is {% raw %}<span class="math inline">\(M\)</span>{% endraw %}; connectedness forces one to be empty. Thus {% raw %}<span class="math inline">\(f\)</span>{% endraw %} either preserves the chosen orientations everywhere or reverses them everywhere. ◻</p>
</div>
<p>The definitions become more concrete when we construct charts. For an embedded surface, a parametrization supplies local coordinates; for a quotient, we must also check that the identifications preserve a local Euclidean description. The following examples illustrate both constructions.</p>

<div id="result-22" class="definition" data-note-number="22" data-note-kind="Definition">
<p><strong>Definition 22</strong>.  {% raw %}<span class="math inline">\(M^k \subset \mathbb R^d\)</span>{% endraw %} is a <em>regular surface on {% raw %}<span class="math inline">\(\mathbb R^d\)</span>{% endraw %}</em> if, for all {% raw %}<span class="math inline">\(p \in M^k\)</span>{% endraw %}, there exists a neighbourhood {% raw %}<span class="math inline">\(V\)</span>{% endraw %} of {% raw %}<span class="math inline">\(p\)</span>{% endraw %} in {% raw %}<span class="math inline">\(\mathbb R^d\)</span>{% endraw %} such that there is a map {% raw %}<span class="math inline">\(\mathrm{x} : U \subset \mathbb R^k \to M \cap V\)</span>{% endraw %}, where {% raw %}<span class="math inline">\(U\)</span>{% endraw %} is an open set, where</p>

<ol>
<li><p>{% raw %}<span class="math inline">\(\mathrm{x}\)</span>{% endraw %} is a differentiable homeomorphism.</p></li>
<li><p>{% raw %}<span class="math inline">\((\dif x)_q : \mathbb R^k \to \mathbb R^d\)</span>{% endraw %} is injective for all {% raw %}<span class="math inline">\(q \in U\)</span>{% endraw %}.</p></li>
</ol>
</div>
<div id="eg:n-sphere" class="example" data-note-number="23" data-note-kind="Example">
<p><strong>Example 23 ({% raw %}<span class="math inline">\(n\)</span>{% endraw %}-sphere).</strong> Write {% raw %}<span class="math inline">\(\mathbb S^n=\{x\in\mathbb R^{n+1}:|x|=1\}\)</span>{% endraw %}. For {% raw %}<span class="math inline">\(1\leq i\leq n+1\)</span>{% endraw %}, put {% raw %}<span class="math inline">\(U_i^\pm=\{x\in\mathbb S^n:\pm x_i&gt;0\}\)</span>{% endraw %}. Deleting coordinate {% raw %}<span class="math inline">\(i\)</span>{% endraw %} defines a chart {% raw %}<span class="math inline">\(h_i^\pm:U_i^\pm\to B^n(0,1)\)</span>{% endraw %}. Its inverse inserts</p>
<p> {% raw %}<div class="math display">\[x_i=\pm\sqrt{1-|u|^2}\]</div>{% endraw %}</p>
<p> into the vector {% raw %}<span class="math inline">\(u\in B^n(0,1)\)</span>{% endraw %}. Both directions are continuous, and the inverse is smooth because {% raw %}<span class="math inline">\(1-|u|^2&gt;0\)</span>{% endraw %}.</p>
<p>For the parametrization {% raw %}<span class="math inline">\(x_i^\pm=(h_i^\pm)^{-1}\)</span>{% endraw %}, deleting coordinate {% raw %}<span class="math inline">\(i\)</span>{% endraw %} from {% raw %}<span class="math inline">\(D x_i^\pm(u)v\)</span>{% endraw %} gives {% raw %}<span class="math inline">\(v\)</span>{% endraw %}. Therefore {% raw %}<span class="math inline">\(D x_i^\pm(u)v=0\)</span>{% endraw %} implies {% raw %}<span class="math inline">\(v=0\)</span>{% endraw %}, proving the required injectivity of the differential. Transition maps are compositions of coordinate deletion and these smooth inverse maps. The hemispheres cover the sphere, and the subspace topology is Hausdorff and second-countable. This verifies all manifold and regular-surface conditions.</p>
</div>
<div id="result-24" class="example" data-note-number="24" data-note-kind="Example">
<p><strong>Example 24</strong> (Example of manifolds).  {% raw %}<span class="math inline">\(\mathbb R^d\)</span>{% endraw %} is a prototypical example of a manifold.</p>

<p>The general linear group {% raw %}<span class="math inline">\(\operatorname{GL}_n (\mathbb R) = \left\{ A \in \mathcal M_n (\mathbb R) : \det A \neq 0 \right\}\)</span>{% endraw %} is a manifold.</p>

<p>The real projective space {% raw %}<span class="math inline">\(\mathbb RP^n=\mathbb S^n/(x\sim -x)\)</span>{% endraw %} has the quotient topology. Its projection {% raw %}<span class="math inline">\(\Pi(x)=[x]\)</span>{% endraw %} is two-to-one, so it is not a homeomorphism. For each {% raw %}<span class="math inline">\(i\)</span>{% endraw %}, let {% raw %}<span class="math inline">\(U_i^+=\{x\in\mathbb S^n:x_i&gt;0\}\)</span>{% endraw %} and {% raw %}<span class="math inline">\(V_i=\{[x]:x_i\ne0\}\)</span>{% endraw %}. Every point of {% raw %}<span class="math inline">\(V_i\)</span>{% endraw %} has exactly one representative in {% raw %}<span class="math inline">\(U_i^+\)</span>{% endraw %}.</p>
<p>The projection is open, since {% raw %}<span class="math inline">\(\Pi^{-1}(\Pi(O))=O\cup(-O)\)</span>{% endraw %} for every open {% raw %}<span class="math inline">\(O\subset\mathbb S^n\)</span>{% endraw %}. Thus {% raw %}<span class="math inline">\(\Pi|_{U_i^+}:U_i^+\to V_i\)</span>{% endraw %} is a homeomorphism. Coordinates on {% raw %}<span class="math inline">\(V_i\)</span>{% endraw %} are given by ratios:</p>
{% raw %}<div class="math display">\[\psi_i([x])=(x_1/x_i,\ldots,\widehat{x_i/x_i},\ldots,x_{n+1}/x_i)\in\mathbb R^n.\]</div>{% endraw %}
<p>Its inverse inserts {% raw %}<span class="math inline">\(1\)</span>{% endraw %} in the {% raw %}<span class="math inline">\(i\)</span>{% endraw %}th position, normalizes the resulting vector to unit length, and takes its equivalence class. On an overlap, the coordinate change divides each homogeneous coordinate by the nonzero coordinate chosen for the other chart. These rational functions are smooth on their domains, so {% raw %}<span class="math inline">\(\{(V_i,\psi_i)\}_{i=1}^{n+1}\)</span>{% endraw %} is a smooth atlas.</p>
<p>For completeness, the quotient is Hausdorff: two distinct antipodal pairs on the sphere are disjoint finite sets at positive Euclidean distance, and sufficiently small antipodally invariant neighbourhoods of the pairs are disjoint. Their images are disjoint open quotient neighbourhoods. Images of a countable basis of the sphere form a countable basis of the quotient because {% raw %}<span class="math inline">\(\Pi\)</span>{% endraw %} is open. This verifies the topological requirements as well as chart compatibility.</p>
<p>The sphere charts in Example <a href="#eg:n-sphere" data-reference-type="ref" data-reference="eg:n-sphere">23</a> give the equivalent local-coordinate construction.</p>
</div>
<div id="eg:group-manifold" class="example" data-note-number="25" data-note-kind="Example">
<p><strong>Example 25 (Free properly discontinuous actions).</strong> Let a discrete group {% raw %}<span class="math inline">\(G\)</span>{% endraw %} act on a smooth manifold {% raw %}<span class="math inline">\(M\)</span>{% endraw %} by diffeomorphisms, with {% raw %}<span class="math inline">\(ep=p\)</span>{% endraw %} and {% raw %}<span class="math inline">\((gh)p=g(hp)\)</span>{% endraw %}. Assume the action is free and proper: for every compact {% raw %}<span class="math inline">\(K\subset M\)</span>{% endraw %}, only finitely many {% raw %}<span class="math inline">\(g\in G\)</span>{% endraw %} satisfy {% raw %}<span class="math inline">\(gK\cap K\ne\varnothing\)</span>{% endraw %}. Define {% raw %}<span class="math inline">\(p\sim q\)</span>{% endraw %} when {% raw %}<span class="math inline">\(q=gp\)</span>{% endraw %} for <em>some</em> {% raw %}<span class="math inline">\(g\in G\)</span>{% endraw %}, and give {% raw %}<span class="math inline">\(M/G\)</span>{% endraw %} the quotient topology. Then the quotient map {% raw %}<span class="math inline">\(\Pi:M\to M/G\)</span>{% endraw %} is a smooth covering map and a local diffeomorphism.</p>
<p>First, each {% raw %}<span class="math inline">\(p\)</span>{% endraw %} has an open neighbourhood {% raw %}<span class="math inline">\(U\)</span>{% endraw %} with {% raw %}<span class="math inline">\(gU\cap U=\varnothing\)</span>{% endraw %} for all {% raw %}<span class="math inline">\(g\ne e\)</span>{% endraw %}. Choose a relatively compact neighbourhood of {% raw %}<span class="math inline">\(p\)</span>{% endraw %}; properness leaves only finitely many possible intersecting translates. Freeness gives {% raw %}<span class="math inline">\(gp\ne p\)</span>{% endraw %} for each nonidentity element in this finite set, so shrink the neighbourhood to separate each such pair. The remaining group elements were already excluded by the original compact neighbourhood.</p>
<p>The map {% raw %}<span class="math inline">\(\Pi\)</span>{% endraw %} is open, since {% raw %}<span class="math inline">\(\Pi^{-1}(\Pi(O))=\bigcup_g gO\)</span>{% endraw %} is open for open {% raw %}<span class="math inline">\(O\)</span>{% endraw %}. If {% raw %}<span class="math inline">\(p,q\in U\)</span>{% endraw %} have the same image, then {% raw %}<span class="math inline">\(q=gp\)</span>{% endraw %}; disjointness of translates forces {% raw %}<span class="math inline">\(g=e\)</span>{% endraw %}, hence {% raw %}<span class="math inline">\(p=q\)</span>{% endraw %}. Thus {% raw %}<span class="math inline">\(\Pi|_U\)</span>{% endraw %} is a homeomorphism onto the open set {% raw %}<span class="math inline">\(\Pi(U)\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(\Pi^{-1}(\Pi(U))\)</span>{% endraw %} is the disjoint union of the translates {% raw %}<span class="math inline">\(gU\)</span>{% endraw %}.</p>
<p>To check Hausdorffness, take points {% raw %}<span class="math inline">\(p,q\)</span>{% endraw %} in distinct orbits and compact neighbourhoods {% raw %}<span class="math inline">\(K_p,K_q\)</span>{% endraw %}. Only finitely many translates of {% raw %}<span class="math inline">\(K_p\)</span>{% endraw %} meet {% raw %}<span class="math inline">\(K_q\)</span>{% endraw %}, by applying properness to their union. Since no such translate sends {% raw %}<span class="math inline">\(p\)</span>{% endraw %} to {% raw %}<span class="math inline">\(q\)</span>{% endraw %}, shrink neighbourhoods {% raw %}<span class="math inline">\(U\ni p\)</span>{% endraw %}, {% raw %}<span class="math inline">\(V\ni q\)</span>{% endraw %} so that {% raw %}<span class="math inline">\(gU\cap V=\varnothing\)</span>{% endraw %} for all those finitely many elements. Then {% raw %}<span class="math inline">\(\Pi(U)\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\Pi(V)\)</span>{% endraw %} are disjoint open neighbourhoods. Images of a countable basis of {% raw %}<span class="math inline">\(M\)</span>{% endraw %} form a countable basis of the quotient.</p>
<p>Finally, transport charts through {% raw %}<span class="math inline">\(\Pi|_U\)</span>{% endraw %}. If two quotient charts overlap, their local lifts differ near any chosen point by one fixed group element {% raw %}<span class="math inline">\(g\)</span>{% endraw %}: shrink the second lift so that its image under {% raw %}<span class="math inline">\(g\)</span>{% endraw %} lies in the first lift. Their transition is then {% raw %}<span class="math inline">\(\varphi_1\circ g\circ\varphi_2^{-1}\)</span>{% endraw %}, which is smooth. This proves the assertion. The weaker pointwise disjoint-neighbourhood condition alone does not establish Hausdorffness; the properness assumption supplies that missing step.</p>
</div>
<div id="eg:RPn-orient" class="example" data-note-number="26" data-note-kind="Example">
<p><strong>Example 26 (Orientability of {% raw %}<span class="math inline">\(\mathbb RP^n\)</span>{% endraw %}).</strong> For {% raw %}<span class="math inline">\(n\geq1\)</span>{% endraw %}, the space {% raw %}<span class="math inline">\(\mathbb RP^n\)</span>{% endraw %} is orientable exactly when {% raw %}<span class="math inline">\(n\)</span>{% endraw %} is odd. The exceptional space {% raw %}<span class="math inline">\(\mathbb RP^0\)</span>{% endraw %} is a point and is orientable.</p>
<p>For a free properly discontinuous action, an orientation downstairs pulls back through the local diffeomorphism {% raw %}<span class="math inline">\(\Pi\)</span>{% endraw %} to an orientation upstairs preserved by every element of {% raw %}<span class="math inline">\(G\)</span>{% endraw %}. Conversely, an invariant orientation upstairs defines an orientation downstairs: choose a lift of a tangent frame, declare its sign there, and observe that changing the lift applies an orientation-preserving group element. Quotient charts therefore agree in sign. Only the acting group elements need preserve the orientation, not all diffeomorphisms of {% raw %}<span class="math inline">\(M\)</span>{% endraw %}.</p>
<p>Orient {% raw %}<span class="math inline">\(\mathbb S^n\)</span>{% endraw %} by its outward normal: a tangent frame {% raw %}<span class="math inline">\((v_1,\ldots,v_n)\)</span>{% endraw %} at {% raw %}<span class="math inline">\(x\)</span>{% endraw %} is positive exactly when {% raw %}<span class="math inline">\((x,v_1,\ldots,v_n)\)</span>{% endraw %} is positive in {% raw %}<span class="math inline">\(\mathbb R^{n+1}\)</span>{% endraw %}. The antipodal map sends this ambient frame to {% raw %}<span class="math inline">\((-x,-v_1,\ldots,-v_n)\)</span>{% endraw %}, multiplying its determinant by {% raw %}<span class="math inline">\((-1)^{n+1}\)</span>{% endraw %}. It preserves sphere orientation exactly when {% raw %}<span class="math inline">\(n\)</span>{% endraw %} is odd. For {% raw %}<span class="math inline">\(n\geq1\)</span>{% endraw %}, the sphere is connected and has only two orientations, and this sign is the same for either choice. Applying the quotient criterion to {% raw %}<span class="math inline">\(G=\{1,-1\}\)</span>{% endraw %} proves both directions.</p>
</div>
<div id="eg:grassmannian" class="example" data-note-number="27" data-note-kind="Example">
<p><strong>Example 27</strong> (Grassmannian).  For {% raw %}<span class="math inline">\(n,m \in \mathbb N\)</span>{% endraw %}, let {% raw %}<span class="math inline">\(G(n,m)\)</span>{% endraw %} denote the collection of {% raw %}<span class="math inline">\(n\)</span>{% endraw %}-dimensional subspaces of {% raw %}<span class="math inline">\(\mathbb R^{n+m}\)</span>{% endraw %}. We will construct charts to show that {% raw %}<span class="math inline">\(G(n,m)\)</span>{% endraw %} is an {% raw %}<span class="math inline">\(nm\)</span>{% endraw %}-dimensional manifold. The main observation is that a subspace transverse to a fixed complementary subspace is the graph of a unique linear map. The entries of that map will be our coordinates.</p>

<p>To start, endow {% raw %}<span class="math inline">\(G(n,m)\)</span>{% endraw %} with a standard topology, such as the quotient topology from the Stiefel manifold of {% raw %}<span class="math inline">\(n\)</span>{% endraw %}-frames (or the metric topology induced by identifying subspaces with their orthogonal projection matrices in {% raw %}<span class="math inline">\(\mathbb R^{(n+m) \times (n+m)}\)</span>{% endraw %}). Pick {% raw %}<span class="math inline">\(\Pi \in G(n,m)\)</span>{% endraw %}. Denote by {% raw %}<span class="math inline">\(\mathscr L(\Pi,\Pi^{\perp})\)</span>{% endraw %} the collection of linear maps between {% raw %}<span class="math inline">\(\Pi\)</span>{% endraw %} and its orthogonal complement.</p>

<ol>
<li><p>Construct a map from the space of linear maps {% raw %}<span class="math inline">\(\Pi \to \Pi^{\perp}\)</span>{% endraw %} to the space of Grassmannians. For every {% raw %}<span class="math inline">\(\Pi\)</span>{% endraw %}, define </p>

{% raw %}<div class="math display">\[\begin{aligned}
        \varphi_{\Pi} : \mathscr L (\Pi,\Pi^{\perp}) \to G(n,m) : \alpha \mapsto \left( \mathbb 1_{\Pi} \oplus \alpha \right) (\Pi) ~.
    
\end{aligned}\]</div>{% endraw %}
<p> We understand {% raw %}<span class="math inline">\(\left( \mathbb 1_{\Pi} \oplus \alpha \right)\)</span>{% endraw %} as a map {% raw %}<span class="math inline">\(\Pi \to \Pi \oplus \Pi^{\perp} = \mathbb R^{n+m}\)</span>{% endraw %}, by definition. In other words, the image of {% raw %}<span class="math inline">\(\alpha\)</span>{% endraw %} under {% raw %}<span class="math inline">\(\varphi_\Pi\)</span>{% endraw %} is its graph, i.e. {% raw %}<span class="math inline">\(\{y + \alpha(y) : y \in \Pi\}\)</span>{% endraw %}.</p>

<p>Clearly, {% raw %}<span class="math inline">\(\varphi_\Pi\)</span>{% endraw %} is injective. Since {% raw %}<span class="math inline">\(\dim \mathscr L(\Pi,\Pi^\perp) = nm\)</span>{% endraw %}, the image {% raw %}<span class="math inline">\(U_\Pi = \varphi_\Pi (\mathscr L(\Pi,\Pi^{\perp}))\)</span>{% endraw %} is an {% raw %}<span class="math inline">\(nm\)</span>{% endraw %}-dimensional coordinate neighborhood, and the collection of open sets {% raw %}<span class="math inline">\(\{U_\Pi\}_{\Pi \in G(n,m)}\)</span>{% endraw %} covers {% raw %}<span class="math inline">\(G(n,m)\)</span>{% endraw %}.</p></li>
<li><p>It remains to check compatibility on overlaps. Once this is done, the dimension of the coordinate space gives {% raw %}<span class="math inline">\(\dim G(n,m) = \dim \mathscr L(\Pi,\Pi^\perp) = nm\)</span>{% endraw %}. Take any {% raw %}<span class="math inline">\(\Pi,\Pi&#x27; \in G(n,m)\)</span>{% endraw %}, and let {% raw %}<span class="math inline">\(P&#x27;\)</span>{% endraw %} denote the orthogonal projection from {% raw %}<span class="math inline">\(\mathbb R^{n+m}\)</span>{% endraw %} onto {% raw %}<span class="math inline">\(\Pi&#x27;\)</span>{% endraw %}. The idea is to study the transition maps between the charts {% raw %}<span class="math inline">\(\varphi_\Pi\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\varphi_{\Pi&#x27;}\)</span>{% endraw %}.</p>

<p>To do so, let {% raw %}<span class="math inline">\(\alpha \in \mathscr L (\Pi, \Pi^{\perp})\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\beta \in \mathscr L (\Pi&#x27;, (\Pi&#x27;)^{\perp})\)</span>{% endraw %} be representations of the same subspace, such that {% raw %}<span class="math inline">\(\varphi_\Pi(\alpha) = \varphi_{\Pi&#x27;}(\beta)\)</span>{% endraw %}.</p>

<p><em>Claim 1: {% raw %}<span class="math inline">\(F = \varphi_{\Pi&#x27;}^{-1} \circ \varphi_{\Pi}\)</span>{% endraw %} is smooth.</em> This amounts to checking that {% raw %}<span class="math inline">\(\beta\)</span>{% endraw %} depends smoothly on {% raw %}<span class="math inline">\(\alpha\)</span>{% endraw %}. Note that {% raw %}<span class="math inline">\(F\)</span>{% endraw %} is a map between open subsets of spaces of linear maps. It is more convenient to write this down in terms of {% raw %}<span class="math inline">\(\Pi&#x27;\)</span>{% endraw %} and {% raw %}<span class="math inline">\((\Pi&#x27;)^{\perp}\)</span>{% endraw %}. Let the following block matrix represent the identity map on {% raw %}<span class="math inline">\(\mathbb R^{n+m}\)</span>{% endraw %} with respect to the direct sum decompositions {% raw %}<span class="math inline">\(\mathbb R^{n+m} = \Pi \oplus \Pi^{\perp}\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\mathbb R^{n+m} = \Pi&#x27; \oplus (\Pi&#x27;)^{\perp}\)</span>{% endraw %}: </p>

{% raw %}<div class="math display">\[\begin{aligned}
        \begin{pmatrix} a &amp; b \\ c &amp; d
        \end{pmatrix} : \Pi \oplus \Pi^{\perp} \to \Pi&#x27; \oplus (\Pi&#x27;)^{\perp} ~.
    
\end{aligned}\]</div>{% endraw %}
<p> It follows that the following maps </p>

{% raw %}<div class="math display">\[\begin{pmatrix} a &amp; b \\ c &amp; d
        \end{pmatrix} \begin{pmatrix}
            \mathbb 1_\Pi \\ \alpha
        \end{pmatrix} ~~\text{and}~~ \begin{pmatrix}
            \mathbb 1_{\Pi&#x27;} \\ \beta
        \end{pmatrix}\]</div>{% endraw %}
<p> have the same image in {% raw %}<span class="math inline">\(\mathbb R^{n+m}\)</span>{% endraw %}. As such, there exists some isomorphism {% raw %}<span class="math inline">\(G: \Pi \to \Pi&#x27;\)</span>{% endraw %} such that </p>

{% raw %}<div class="math display">\[\begin{pmatrix} a &amp; b \\ c &amp; d
        \end{pmatrix} \begin{pmatrix}
            \mathbb 1_\Pi \\ \alpha
        \end{pmatrix} = \begin{pmatrix}
            \mathbb 1_{\Pi&#x27;} \\ \beta
        \end{pmatrix} G ~.\]</div>{% endraw %}
<p> Collecting equations, we have </p>

{% raw %}<div class="math display">\[\begin{aligned}
        a + b \alpha &amp;= G \\
        c + d \alpha &amp;= \beta G
    
\end{aligned}\]</div>{% endraw %}
<p> which gives us the expression {% raw %}<span class="math inline">\(\beta = (c + d \alpha)(a + b \alpha)^{-1}\)</span>{% endraw %}. This expression shows {% raw %}<span class="math inline">\(\beta\)</span>{% endraw %} depends on {% raw %}<span class="math inline">\(\alpha\)</span>{% endraw %} smoothly, by Cramer’s rule for the inverse matrix. {% raw %}<span class="math inline">\(\diamondsuit\)</span>{% endraw %}</p>

<p><em>Claim 2: The map {% raw %}<span class="math inline">\(f_\alpha : \Pi \to \Pi&#x27;\)</span>{% endraw %} defined by {% raw %}<span class="math inline">\(f_\alpha(y) = P&#x27;(y + \alpha(y))\)</span>{% endraw %} is invertible.</em> This justifies the inverse matrix in the transition formula. We use the following elementary fact: if a subspace {% raw %}<span class="math inline">\(E \in G(n,m)\)</span>{% endraw %} satisfies {% raw %}<span class="math inline">\(E \cap (\Pi&#x27;)^\perp = \{0\}\)</span>{% endraw %}, then the restriction of {% raw %}<span class="math inline">\(P&#x27;\)</span>{% endraw %} to {% raw %}<span class="math inline">\(E\)</span>{% endraw %} is an isomorphism onto {% raw %}<span class="math inline">\(\Pi&#x27;\)</span>{% endraw %}. Since {% raw %}<span class="math inline">\(\dim E = n = \dim \Pi&#x27;\)</span>{% endraw %}, we only need to show injectivity. If {% raw %}<span class="math inline">\(e \in E\)</span>{% endraw %} and {% raw %}<span class="math inline">\(P&#x27;(e) = 0\)</span>{% endraw %}, then {% raw %}<span class="math inline">\(e \in (\Pi&#x27;)^\perp\)</span>{% endraw %}. But {% raw %}<span class="math inline">\(E \cap (\Pi&#x27;)^\perp = \{0\}\)</span>{% endraw %}, so {% raw %}<span class="math inline">\(e = 0\)</span>{% endraw %}. Thus {% raw %}<span class="math inline">\(P&#x27;|_E : E \to \Pi&#x27;\)</span>{% endraw %} is an isomorphism.</p>

<p>Now we can argue {% raw %}<span class="math inline">\(f_\alpha\)</span>{% endraw %} is invertible for any {% raw %}<span class="math inline">\(\alpha\)</span>{% endraw %} in the domain of {% raw %}<span class="math inline">\(F\)</span>{% endraw %}. Let {% raw %}<span class="math inline">\(E = \varphi_\Pi(\alpha)\)</span>{% endraw %}. Since {% raw %}<span class="math inline">\(\alpha\)</span>{% endraw %} is in the domain of {% raw %}<span class="math inline">\(F\)</span>{% endraw %}, {% raw %}<span class="math inline">\(E\)</span>{% endraw %} is in the image of {% raw %}<span class="math inline">\(\varphi_{\Pi&#x27;}\)</span>{% endraw %}, which precisely means {% raw %}<span class="math inline">\(E \cap (\Pi&#x27;)^\perp = \{0\}\)</span>{% endraw %}. By the property shown above, {% raw %}<span class="math inline">\(P&#x27;|_E : E \to \Pi&#x27;\)</span>{% endraw %} is an isomorphism. Since {% raw %}<span class="math inline">\(\mathbb 1_\Pi \oplus \alpha : \Pi \to E\)</span>{% endraw %} is also an isomorphism, their composition {% raw %}<span class="math inline">\(f_\alpha = P&#x27; \circ (\mathbb 1_\Pi \oplus \alpha)\)</span>{% endraw %} is therefore invertible. Notice that the {% raw %}<span class="math inline">\(\Pi&#x27;\)</span>{% endraw %} component of {% raw %}<span class="math inline">\(y + \alpha(y)\)</span>{% endraw %} is exactly {% raw %}<span class="math inline">\(a(y) + b(\alpha(y))\)</span>{% endraw %}, so {% raw %}<span class="math inline">\(f_\alpha = a + b\alpha = G\)</span>{% endraw %}, which explicitly justifies the invertibility of {% raw %}<span class="math inline">\(a + b\alpha\)</span>{% endraw %} in Claim 1. {% raw %}<span class="math inline">\(\diamondsuit\)</span>{% endraw %}</p></li>
<li><p>We can now show that for all {% raw %}<span class="math inline">\(y \in \Pi\)</span>{% endraw %}, {% raw %}<span class="math inline">\(y + \alpha(y) = f_\alpha (y) + \beta(f_\alpha (y))\)</span>{% endraw %}. By definition of {% raw %}<span class="math inline">\(\varphi_{\Pi&#x27;}\)</span>{% endraw %}, any element {% raw %}<span class="math inline">\(e \in E = \varphi_\Pi(\alpha) = \varphi_{\Pi&#x27;}(\beta)\)</span>{% endraw %} can be written uniquely as {% raw %}<span class="math inline">\(y&#x27; + \beta(y&#x27;)\)</span>{% endraw %} for some {% raw %}<span class="math inline">\(y&#x27; \in \Pi&#x27;\)</span>{% endraw %}. For {% raw %}<span class="math inline">\(e = y + \alpha(y)\)</span>{% endraw %}, applying {% raw %}<span class="math inline">\(P&#x27;\)</span>{% endraw %} gives {% raw %}<span class="math inline">\(P&#x27;(e) = P&#x27;(y&#x27; + \beta(y&#x27;)) = y&#x27;\)</span>{% endraw %} since {% raw %}<span class="math inline">\(\beta(y&#x27;) \in (\Pi&#x27;)^\perp\)</span>{% endraw %}. But by definition, {% raw %}<span class="math inline">\(P&#x27;(e) = f_\alpha(y)\)</span>{% endraw %}. Thus {% raw %}<span class="math inline">\(y&#x27; = f_\alpha(y)\)</span>{% endraw %}. Substituting this back into the decomposition of {% raw %}<span class="math inline">\(e\)</span>{% endraw %}, we get {% raw %}<span class="math inline">\(y + \alpha(y) = f_\alpha(y) + \beta(f_\alpha(y))\)</span>{% endraw %}. {% raw %}<span class="math inline">\(\diamondsuit\)</span>{% endraw %}</p>

<p>The claim directly above implies that </p>

{% raw %}<div class="math display">\[\begin{aligned}
        (\mathbb 1_{\Pi&#x27;} \oplus \beta) \circ f_\alpha = \mathbb 1_\Pi \oplus \alpha ~,
    
\end{aligned}\]</div>{% endraw %}
<p> i.e. {% raw %}<span class="math inline">\(\varphi_{\Pi&#x27;}(\beta) = \varphi_\Pi(\alpha)\)</span>{% endraw %}, or, equivalently, that {% raw %}<span class="math inline">\(F(\alpha) = \beta\)</span>{% endraw %}. As such, we have an exact description of the smooth transition maps and their domains.</p>

<p>The graph charts therefore form the atlas </p>

{% raw %}<div class="math display">\[\left\{ (U_\Pi, \varphi_\Pi^{-1}) \right\}_{\Pi \in G(n,m)} ~,\]</div>{% endraw %}
<p> but, in fact, we only need {% raw %}<span class="math inline">\(\binom{n+m}{n}\)</span>{% endraw %} of such charts to cover {% raw %}<span class="math inline">\(G(n,m)\)</span>{% endraw %} (for instance, by choosing {% raw %}<span class="math inline">\(\Pi\)</span>{% endraw %} to be the coordinate subspaces of {% raw %}<span class="math inline">\(\mathbb R^{n+m}\)</span>{% endraw %} spanned by subsets of the standard basis vectors).</p></li>
</ol>
<p>For {% raw %}<span class="math inline">\(n,m\geq1\)</span>{% endraw %}, the Grassmannian {% raw %}<span class="math inline">\(G(n,m)\)</span>{% endraw %} is orientable exactly when {% raw %}<span class="math inline">\(n+m\)</span>{% endraw %} is even. Here is the sign calculation. At a plane {% raw %}<span class="math inline">\(E\)</span>{% endraw %}, its tangent space is {% raw %}<span class="math inline">\(\operatorname{Hom}(E,E^\perp)\)</span>{% endraw %}, as the graph chart shows. Changing orthonormal bases of {% raw %}<span class="math inline">\(E\)</span>{% endraw %} and {% raw %}<span class="math inline">\(E^\perp\)</span>{% endraw %} by matrices {% raw %}<span class="math inline">\(A\in O(n)\)</span>{% endraw %}, {% raw %}<span class="math inline">\(B\in O(m)\)</span>{% endraw %} changes matrix coordinates by {% raw %}<span class="math inline">\(H\mapsto B^{-1}HA\)</span>{% endraw %}. The determinant of this linear map has sign {% raw %}<span class="math inline">\((\det A)^m(\det B)^n\)</span>{% endraw %}. If the two bases together have the fixed ambient orientation, then {% raw %}<span class="math inline">\(\det A\det B=1\)</span>{% endraw %}; the sign is therefore {% raw %}<span class="math inline">\((\det A)^{n+m}\)</span>{% endraw %}. When {% raw %}<span class="math inline">\(n+m\)</span>{% endraw %} is even this gives a well-defined continuous tangent orientation.</p>
<p>When {% raw %}<span class="math inline">\(n+m\)</span>{% endraw %} is odd, take {% raw %}<span class="math inline">\(E_0=\operatorname{span}(e_1,\ldots,e_n)\)</span>{% endraw %} and the closed path of planes spanned by {% raw %}<span class="math inline">\(\cos t\,e_1+\sin t\,e_{n+1},e_2,\ldots,e_n\)</span>{% endraw %}, for {% raw %}<span class="math inline">\(0\leq t\leq\pi\)</span>{% endraw %}. Complete it by the rotating normal vector {% raw %}<span class="math inline">\(-\sin t\,e_1+\cos t\,e_{n+1}\)</span>{% endraw %} and the other fixed normal vectors. At the endpoint, both basis-change determinants are {% raw %}<span class="math inline">\(-1\)</span>{% endraw %}; the tangent-frame determinant is {% raw %}<span class="math inline">\((-1)^{n+m}=-1\)</span>{% endraw %}. An orientation cannot return with opposite sign along a closed path. This proves nonorientability. If either {% raw %}<span class="math inline">\(n\)</span>{% endraw %} or {% raw %}<span class="math inline">\(m\)</span>{% endraw %} is zero, the Grassmannian is a point instead.</p>

<p>For the topology omitted in the chart construction, write {% raw %}<span class="math inline">\(L_\alpha=\binom{I}{\alpha}\)</span>{% endraw %}. Orthogonal projection onto its graph is</p>
<p> {% raw %}<div class="math display">\[P_{\operatorname{graph}\alpha}=L_\alpha(I+\alpha^*\alpha)^{-1}L_\alpha^*.\]</div>{% endraw %}</p>
<p> This is continuous in {% raw %}<span class="math inline">\(\alpha\)</span>{% endraw %}. In the block decomposition {% raw %}<span class="math inline">\(\Pi\oplus\Pi^\perp\)</span>{% endraw %}, its upper-left block is {% raw %}<span class="math inline">\((I+\alpha^*\alpha)^{-1}\)</span>{% endraw %} and lower-left block is {% raw %}<span class="math inline">\(\alpha(I+\alpha^*\alpha)^{-1}\)</span>{% endraw %}, so the inverse chart is the lower-left block times the inverse of the upper-left block. Invertibility is an open condition. Conversely, an invertible upper-left block implies that projection of the plane onto {% raw %}<span class="math inline">\(\Pi\)</span>{% endraw %} is surjective and hence an isomorphism. Thus {% raw %}<span class="math inline">\(U_\Pi\)</span>{% endraw %} is open and the graph parametrization is a homeomorphism. The projection-matrix topology is Hausdorff and second-countable as a subspace of a finite-dimensional matrix space. Finally, a full-rank matrix representing any plane has a nonzero {% raw %}<span class="math inline">\(n\)</span>{% endraw %}-row minor; the associated coordinate plane supplies one of the stated finite chart cover.</p>
</div>
<div id="result-28" class="example" data-note-number="28" data-note-kind="Example">
<p><strong>Example 28 (Stereographic projections).</strong> Let {% raw %}<span class="math inline">\(N=(0,\ldots,0,1)\)</span>{% endraw %} and {% raw %}<span class="math inline">\(S=-N\)</span>{% endraw %}. The line {% raw %}<span class="math inline">\(N+t(x-N)\)</span>{% endraw %} through {% raw %}<span class="math inline">\(N\)</span>{% endraw %} and {% raw %}<span class="math inline">\(x\ne N\)</span>{% endraw %} meets the hyperplane {% raw %}<span class="math inline">\(x_{n+1}=0\)</span>{% endraw %} when {% raw %}<span class="math inline">\(t=(1-x_{n+1})^{-1}\)</span>{% endraw %}. This gives</p>
<p> {% raw %}<div class="math display">\[\pi_N(x)=\frac{(x_1,\ldots,x_n)}{1-x_{n+1}},\qquad \pi_S(x)=\frac{(x_1,\ldots,x_n)}{1+x_{n+1}}.\]</div>{% endraw %}</p>
<p> The line lies in ambient Euclidean space, and its intersection with the hyperplane need not lie on the sphere. Solving for the inverse gives</p>
<p> {% raw %}<div class="math display">\[\pi_N^{-1}(u)=\left(\frac{2u}{1+|u|^2},\frac{|u|^2-1}{1+|u|^2}\right),\qquad \pi_S^{-1}(u)=\left(\frac{2u}{1+|u|^2},\frac{1-|u|^2}{1+|u|^2}\right).\]</div>{% endraw %}</p>
<p> These formulas prove bijectivity and smoothness in both directions. On the overlap {% raw %}<span class="math inline">\(u\ne0\)</span>{% endraw %}, the transition is {% raw %}<span class="math inline">\(u\mapsto u/|u|^2\)</span>{% endraw %}; its derivative has one radial eigenvalue {% raw %}<span class="math inline">\(-|u|^{-2}\)</span>{% endraw %} and {% raw %}<span class="math inline">\(n-1\)</span>{% endraw %} tangential eigenvalues {% raw %}<span class="math inline">\(|u|^{-2}\)</span>{% endraw %}. Its determinant is {% raw %}<span class="math inline">\(-|u|^{-2n}\)</span>{% endraw %}. Composing one chart with a reflection makes the transition determinant positive, explicitly proving orientability, also for {% raw %}<span class="math inline">\(n=1\)</span>{% endraw %} when the overlap is disconnected.</p>
<p>The antipodal map {% raw %}<span class="math inline">\(A(x)=-x\)</span>{% endraw %} is a diffeomorphism because {% raw %}<span class="math inline">\(A^2=\operatorname{id}\)</span>{% endraw %}. Its orientation sign is {% raw %}<span class="math inline">\((-1)^{n+1}\)</span>{% endraw %}, by the outward-normal calculation in Example 26.</p>
</div>
<div id="result-29" class="example" data-note-number="29" data-note-kind="Example">
<p><strong>Example 29 (Complex manifolds).</strong> A complex manifold of complex dimension {% raw %}<span class="math inline">\(d\)</span>{% endraw %} has charts in {% raw %}<span class="math inline">\(\mathbb C^d\)</span>{% endraw %} whose transition maps are holomorphic with holomorphic inverses. For a transition {% raw %}<span class="math inline">\(F\)</span>{% endraw %}, holomorphicity means {% raw %}<span class="math inline">\(\partial F^j/\partial\overline z^k=0\)</span>{% endraw %}; it does not mean {% raw %}<span class="math inline">\(\partial F^j/\partial z^k=0\)</span>{% endraw %}.</p>
<p>Write its complex derivative as {% raw %}<span class="math inline">\(A=B+iC\)</span>{% endraw %}. Its real derivative, in real and imaginary coordinates, is</p>
<p> {% raw %}<div class="math display">\[\begin{pmatrix}B&amp;-C\\ C&amp;B\end{pmatrix}.\]</div>{% endraw %}</p>
<p> After complexifying this real matrix and using the variables {% raw %}<span class="math inline">\(z=x+iy\)</span>{% endraw %}, {% raw %}<span class="math inline">\(\overline z=x-iy\)</span>{% endraw %}, it becomes block diagonal with blocks {% raw %}<span class="math inline">\(A\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\overline A\)</span>{% endraw %}. Consequently its real determinant is {% raw %}<span class="math inline">\(\det_{\mathbb C}A\,\overline{\det_{\mathbb C}A}=|\det_{\mathbb C}A|^2&gt;0\)</span>{% endraw %}; nonvanishing follows from the holomorphic inverse. Thus complex coordinate charts determine an orientation of the underlying real manifold.</p>
</div>
<div id="result-30" class="example" data-note-number="30" data-note-kind="Example">
<p><strong>Example 30</strong> ({% raw %}<span class="math inline">\(\mathbb CP^n\)</span>{% endraw %}).  The <strong>complex projective space {% raw %}<span class="math inline">\(\mathbb CP^n\)</span>{% endraw %}</strong> is the set </p>

{% raw %}<div class="math display">\[\begin{aligned}
        \mathbb CP^n \triangleq \{ \ell \subset \mathbb C^{n+1} : \ell \text{ is a $1$-dimensional complex subspace} \} ~.
    
\end{aligned}\]</div>{% endraw %}
<p> Let {% raw %}<span class="math inline">\(\mathbb C^*\)</span>{% endraw %} denote the multiplicative group of nonzero complex numbers, i.e. {% raw %}<span class="math inline">\(\mathbb C^* = \mathbb C \setminus \{0\}\)</span>{% endraw %} is endowed with the multiplication operation. In this notation, {% raw %}<span class="math inline">\(\mathbb CP^n \cong (\mathbb C^{n+1} \setminus \{0\}) / \mathbb C^*\)</span>{% endraw %}. The equivalence class of {% raw %}<span class="math inline">\(z \in \mathbb C^{n+1} \setminus \{0\}\)</span>{% endraw %} is given by </p>

{% raw %}<div class="math display">\[\begin{aligned}
        [z] \triangleq \{\lambda z : \lambda \in \mathbb C^*\} ~,
    
\end{aligned}\]</div>{% endraw %}
<p> so the associated line is given by {% raw %}<span class="math inline">\(\ell = \mathbb C z\)</span>{% endraw %}. It follows from inspection that an atlas on {% raw %}<span class="math inline">\(\mathbb CP^n\)</span>{% endraw %} is given by the open cover {% raw %}<span class="math inline">\(U_i \triangleq \{[z] = [z_0 : \cdots : z_n] : z_i \neq 0\}\)</span>{% endraw %} for all {% raw %}<span class="math inline">\(i \in \{0,1,\cdots,n\}\)</span>{% endraw %}. The coordinate charts are {% raw %}<span class="math inline">\(\varphi_i : U_i \to \mathbb C^n\)</span>{% endraw %} given by </p>

{% raw %}<div class="math display">\[\begin{aligned}
        \varphi_i ([z]) \triangleq \left( \frac{z_0}{z_i} , \cdots, \frac{z_{i-1}}{z_i}, \frac{z_{i+1}}{z_i}, \cdots, \frac{z_n}{z_i} \right) ~.
    
\end{aligned}\]</div>{% endraw %}
<p>Each {% raw %}<span class="math inline">\(\varphi_i\)</span>{% endraw %} is a homeomorphism for the quotient topology. The ratio map on {% raw %}<span class="math inline">\(\{z_i\ne0\}\)</span>{% endraw %} is continuous and constant on complex lines, so it descends continuously through the quotient; the quotient projection is open because the saturation of an open set is the union of its nonzero scalar multiples. The inverse inserts {% raw %}<span class="math inline">\(1\)</span>{% endraw %} in coordinate {% raw %}<span class="math inline">\(i\)</span>{% endraw %} and then takes the equivalence class, hence is continuous. On an overlap with chart {% raw %}<span class="math inline">\(j\)</span>{% endraw %}, the denominator {% raw %}<span class="math inline">\(z_i\)</span>{% endraw %} is nonzero, and the transition formula is</p>

{% raw %}<div class="math display">\[\begin{gathered}
        \left( z_0, \cdots, z_{j-1}, z_{j+1}, \cdots, z_n \right) \\
        \overset{\varphi_j^{-1}}{\mapsto} [z_0 : \cdots : z_{j-1} : 1 : z_{j+1} : \cdots : z_n] \overset{\varphi_i}{\mapsto} \left( \frac{z_0}{z_i} , \cdots, \frac{z_{i-1}}{z_i}, \frac{z_{i+1}}{z_i}, \cdots, \frac{z_{j-1}}{z_i}, \frac{1}{z_i}, \frac{z_{j+1}}{z_i}, \cdots, \frac{z_n}{z_i} \right)
    
\end{gathered}\]</div>{% endraw %}
<p>The displayed ratios are holomorphic on the overlap {% raw %}<span class="math inline">\(z_i\ne0\)</span>{% endraw %}, and exchanging {% raw %}<span class="math inline">\(i\)</span>{% endraw %} and {% raw %}<span class="math inline">\(j\)</span>{% endraw %} supplies the holomorphic inverse. Holomorphicity follows from this formula, not from being a smooth diffeomorphism. These charts therefore give a complex manifold once the topological separation requirement is checked. One direct check sends {% raw %}<span class="math inline">\([z]\)</span>{% endraw %} to the Hermitian projection matrix {% raw %}<span class="math inline">\(zz^*/|z|^2\)</span>{% endraw %}: this is a continuous injective map from the quotient into a Hausdorff matrix space, so distinct points have disjoint open neighbourhoods. The finite chart cover gives second countability. The longer quotient-topology discussion appears in the note <em>Why Complex Projective Space Is Hausdorff</em>.</p>

</div>
<div id="eg:lie-group" class="example" data-note-number="31" data-note-kind="Example">
<p><strong>Example 31</strong> (Lie Group).  A Lie group combines a smooth manifold with a group operation compatible with its smooth structure. We return to this compatibility in Section <a href="{% post_url 2022-10-07-lie-groups-and-their-lie-algebras %}#sec:lie-group" data-reference-type="ref" data-reference="sec:lie-group">Lie Groups and Their Lie Algebras</a>. Here are the definition and some examples.</p>

<p>A <em>Lie group</em> {% raw %}<span class="math inline">\(G\)</span>{% endraw %} is a smooth manifold equipped with a group structure so that the group multiplication </p>

{% raw %}<span id="eq:group-multiplication"></span><div class="math display">\[
        m : G \times G \to G : (g_1,g_2) \mapsto g_1 g_2\tag{4}\]</div>{% endraw %}
<p> is a smooth map. Here are some basic examples of Lie groups:</p>

<ol>
<li><p>{% raw %}<span class="math inline">\(\mathbb R^n\)</span>{% endraw %} with addition operation.</p></li>
<li><p>{% raw %}<span class="math inline">\(\mathbb R^* = \mathbb R \setminus \{0\}\)</span>{% endraw %} with multiplication operation.</p></li>
<li><p>{% raw %}<span class="math inline">\(\mathbb S^1\)</span>{% endraw %} with multiplication operation.</p></li>
<li><p>{% raw %}<span class="math inline">\(\operatorname{GL}_n(\mathbb R)\)</span>{% endraw %} with matrix multiplication. So are {% raw %}<span class="math inline">\(\operatorname{SL}_n(\mathbb R)\)</span>{% endraw %}, {% raw %}<span class="math inline">\(\operatorname{SO}(n)\)</span>{% endraw %}, {% raw %}<span class="math inline">\(\operatorname{O}(n)\)</span>{% endraw %}, and so on, under matrix multiplication.</p></li>
</ol>
<p>The existence of a smooth structure does not by itself supply a compatible group operation. For example, the only spheres that admit a Lie group structure are {% raw %}<span class="math inline">\(\mathbb S^0\)</span>{% endraw %}, {% raw %}<span class="math inline">\(\mathbb S^1\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(\mathbb S^3\)</span>{% endraw %}; among all the <em>compact connected</em> 2-dimensional surfaces, the only one admits a Lie group structure is {% raw %}<span class="math inline">\(\mathbb T^2 = \mathbb S^1 \times \mathbb S^1\)</span>{% endraw %}. There are many constraints for a manifold to be a Lie group. For example, a Lie group must be analytic manifold, and the tangent bundle of a Lie group is always trivial: {% raw %}<span class="math inline">\(TG \cong G \times \mathbb R^n\)</span>{% endraw %}. In particular, any Lie group is <em>orientable</em>.</p>

<p>The usual definition also asks that inversion {% raw %}<span class="math inline">\(g\mapsto g^{-1}\)</span>{% endraw %} be smooth. It follows here from smooth multiplication and the inverse function theorem: the derivative in {% raw %}<span class="math inline">\(h\)</span>{% endraw %} of {% raw %}<span class="math inline">\(gh\)</span>{% endraw %} is the invertible derivative of a left translation, so the equation {% raw %}<span class="math inline">\(gh=e\)</span>{% endraw %} can locally be solved smoothly for {% raw %}<span class="math inline">\(h\)</span>{% endraw %}. These local solutions agree with the group inverse.</p>
<p>To see why the tangent bundle is trivial, choose a basis {% raw %}<span class="math inline">\(v_1,\ldots,v_d\)</span>{% endraw %} of {% raw %}<span class="math inline">\(T_eG\)</span>{% endraw %} and set {% raw %}<span class="math inline">\(X_i(g)=(dL_g)_e v_i\)</span>{% endraw %}. Multiplication is smooth, so these are smooth vector fields. Each {% raw %}<span class="math inline">\(L_g\)</span>{% endraw %} is a diffeomorphism, so they form a basis at every point. The map {% raw %}<span class="math inline">\((g,\sum a_iv_i)\mapsto\sum a_iX_i(g)\)</span>{% endraw %} is a smooth vector-bundle isomorphism, with inverse induced by {% raw %}<span class="math inline">\(dL_{g^{-1}}\)</span>{% endraw %}. Declaring this frame positive gives an orientation on every component. The classification statements about spheres and compact connected surfaces above are background results, rather than consequences of this frame construction.</p>
<p>For the background assertions, <a href="https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2019).pdf#page=95">Merry, <em>Differential Geometry</em> (2019), Remark 12.14</a>, gives the sphere restriction: a compact connected abelian Lie group is a torus, while a compact connected nonabelian Lie group has nonzero third real cohomology. The cohomology of a sphere therefore leaves only {% raw %}<span class="math inline">\(S^1\)</span>{% endraw %} or {% raw %}<span class="math inline">\(S^3\)</span>{% endraw %} among connected positive-dimensional spheres; {% raw %}<span class="math inline">\(S^0=\{1,-1\}\)</span>{% endraw %}, complex unit numbers, and unit quaternions give the three examples. These cohomology facts are external inputs to the classification.</p>
<p>For the surface claim, average an inner product on the two-dimensional Lie algebra over the adjoint action of the compact group. The result is invariant, so every {% raw %}<span class="math inline">\(\operatorname{ad}_X\)</span>{% endraw %} is skew-adjoint. Hence {% raw %}<span class="math inline">\([X,Y]\)</span>{% endraw %} is perpendicular to both {% raw %}<span class="math inline">\(X\)</span>{% endraw %} and {% raw %}<span class="math inline">\(Y\)</span>{% endraw %}; for a basis {% raw %}<span class="math inline">\(X,Y\)</span>{% endraw %} this forces {% raw %}<span class="math inline">\([X,Y]=0\)</span>{% endraw %}. The connected group is therefore abelian. Its exponential map is a local diffeomorphism and a homomorphism from {% raw %}<span class="math inline">\(\mathbb R^2\)</span>{% endraw %}, so its image is an open subgroup and hence the whole connected group. Its discrete kernel is a full lattice because the quotient is compact. Thus the group is a two-torus. Compactness and connectedness are essential to this statement.</p>
<p>The compatible real-analytic structure is a separate regularity theorem; see <a href="https://people.maths.ox.ac.uk/joyce/Nairobi2019/KirillovLieGroups.pdf#page=9">Kirillov, <em>Introduction to Lie Groups and Lie Algebras</em>, Remark 2.2</a>. It means that suitable analytic charts exist, not that every chart of the original smooth atlas is analytic.</p>
</div>
<div id="refs" class="references csl-bib-body hanging-indent" data-entry-spacing="0" role="list">
<div id="ref-carmo_riemannian_1992" class="csl-entry" role="listitem">
Carmo, Manfredo Perdigão do. 1992. <em>Riemannian Geometry</em>. Mathematics. Theory &amp; Applications. Boston: Birkhäuser.
</div>
<div id="ref-hatcher_algebraic_2002" class="csl-entry" role="listitem">
Hatcher, Allen. 2002. <em>Algebraic Topology</em>. Cambridge ; New York: Cambridge University Press.
</div>
</div>
<section id="footnotes" class="footnotes footnotes-end-of-document" role="doc-endnotes">
<hr />
<ol>
<li id="fn1"><p>All errors are mine. The main reference for this collection of notes is <span class="citation" data-cites="carmo_riemannian_1992">(<a href="#ref-carmo_riemannian_1992" role="doc-biblioref">Carmo 1992</a>)</span>. This collection of notes describes basic concepts in the study of differential geometry. Unless otherwise stated, this collection focuses on Riemannian geometry; throughout, “differential manifold” is used in place of “Riemannian manifold”. This collection is meant to be an introduction to Riemannian geometry, with emphases only on the fundamental building blocks of the study of Riemannian manifolds.<a href="#fnref1" class="footnote-back" role="doc-backlink">↩︎</a></p></li>
</ol>
</section>

<p class="note-reading">Reading: Carmo (1992), Riemannian geometry.</p>


<nav class="note-related" aria-label="Related notes"><p>Related notes: <a href="{% post_url 2024-05-14-why-complex-projective-space-is-hausdorff %}">Why Complex Projective Space Is Hausdorff</a>; <a href="{% post_url 2022-10-07-lie-groups-and-their-lie-algebras %}">Lie Groups and Their Lie Algebras</a>.</p></nav>

<nav class="note-series" aria-label="Notes in this series"><p>Next: <a href="{% post_url 2022-03-04-topological-tools-for-manifolds %}">Topological Tools for Manifolds</a></p></nav>

</div>
