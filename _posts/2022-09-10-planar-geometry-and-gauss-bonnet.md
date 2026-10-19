---
layout: "post"
title: "Planar Geometry and Gauss-Bonnet"
date: "2022-09-10"
tags: ["math", "differential geometry"]
excerpt: "The following statement is one of the most important results in the study of planar geometry."
note_series: "Differential geometry"
note_source: "assets/notes/Differential Geometry - Notes/diff-geo.tex"
---

<div class="note-content" markdown="0">

<p>Let {% raw %}<span class="math inline">\((M,g)\)</span>{% endraw %} be a smooth Riemannian manifold. Write {% raw %}<span class="math inline">\(\nabla\)</span>{% endraw %} for its Levi–Civita connection and {% raw %}<span class="math inline">\(T_pM\)</span>{% endraw %} for the tangent space at {% raw %}<span class="math inline">\(p\)</span>{% endraw %}. The coordinate conventions are those in <a href="{% post_url 2022-03-17-tangent-spaces-and-riemannian-metrics %}">tangent spaces and derivations</a>.</p>

<div id="planar-geometry-and-gauss-bonnet" data-note-section="title">

</div>
<p>On a surface there is only one tangent two-plane at each point, so sectional curvature becomes a function of the point. The Gauss–Bonnet theorem shows that its integral is constrained by topology. To reach this global statement, we first express curvature using an orthonormal frame and then relate it to the turning of a boundary curve.</p>

<p>The Schur theorems (Theorems <a href="{% post_url 2022-08-27-sectional-curvature-ricci-curvature-and-space-forms %}#thm:schur" data-reference-type="ref" data-reference="thm:schur">7</a> and <a href="{% post_url 2022-08-27-sectional-curvature-ricci-curvature-and-space-forms %}#thm:schur-ricci" data-reference-type="ref" data-reference="thm:schur-ricci">8</a>) tell us what happens when the ambient dimension of the manifold, {% raw %}<span class="math inline">\(n\)</span>{% endraw %}, is greater than or equal to 3. These clearly fail in {% raw %}<span class="math inline">\(n=2\)</span>{% endraw %}, because the sectional curvature (Gauss curvature!) need not be constant. But, {% raw %}<span class="math inline">\(n=2\)</span>{% endraw %} has historically been the dominant area of study—the study of planar geometry greatly preceded the modern study of differentiable manifolds. There are many simplifications, and many rigid results, in the study of surfaces in {% raw %}<span class="math inline">\(\mathbb R^3\)</span>{% endraw %} (which turns out to be generalizable to studying {% raw %}<span class="math inline">\(2\)</span>{% endraw %}-manifolds).</p>

<p>At each point of a Riemannian surface there is just one tangent two-plane. Thus its sectional curvature is a function {% raw %}<span class="math inline">\(K(p)\)</span>{% endraw %}; the quotient defining sectional curvature requires linearly independent {% raw %}<span class="math inline">\(X,Y\)</span>{% endraw %}. Gram–Schmidt applied to coordinate vector fields produces a smooth orthonormal <em>frame</em>, generally not a coordinate frame. If {% raw %}<span class="math inline">\(X=x_1E_1+x_2E_2\)</span>{% endraw %} and {% raw %}<span class="math inline">\(Y=y_1E_1+y_2E_2\)</span>{% endraw %}, curvature symmetries give</p>

{% raw %}<div class="math display">\[\begin{aligned}
    \operatorname{Ric}(X,Y) 
    &amp;= \langle R( x_1 E_1 + x_2 E_2 ,E_1) (y_1 E_1 + y_2 E_2) , E_1 \rangle + \langle R( x_1 E_1 + x_2 E_2 , E_2) (y_1 E_1 + y_2 E_2) , E_2 \rangle \\
    &amp;= \langle R( x_2 E_2 , E_1 ) y_2 E_2 , E_1 \rangle + \langle R( x_1 E_1 , E_2) y_1 E_1 , E_2 \rangle \\
    &amp;= (x_1 y_1 + x_2 y_2) \kappa (E_1, E_2) = g(X,Y) \kappa (E_1, E_2) ~.
\end{aligned}\]</div>{% endraw %}
<p> The equalities follow from the fact that {% raw %}<span class="math inline">\(\{E_1,E_2\}\)</span>{% endraw %} is an orthonormal frame. The question is what is the sectional curvature in {% raw %}<span class="math inline">\(2\)</span>{% endraw %}-manifolds. The following theorem answers that: the sectional curvature agrees with the Gauss curvature (see Remark <a href="{% post_url 2022-12-14-the-second-fundamental-form-and-the-gauss-equations %}#rem:gauss-kronecker-mean-curvatures" data-reference-type="ref" data-reference="rem:gauss-kronecker-mean-curvatures">15</a>) on {% raw %}<span class="math inline">\(2\)</span>{% endraw %}-manifolds.</p>

<div id="thm:sectional-gauss-M2" class="theorem" data-note-number="1" data-note-kind="Theorem">
<p><strong>Theorem 1.</strong> On a Riemannian surface, {% raw %}<span class="math inline">\(K(p)=\kappa(X,Y)\)</span>{% endraw %} for every linearly independent pair in {% raw %}<span class="math inline">\(T_pM\)</span>{% endraw %}. For a surface isometrically immersed in {% raw %}<span class="math inline">\(\mathbb R^3\)</span>{% endraw %}, this intrinsic curvature equals the classical Gauss curvature, the determinant of its shape operator.</p>
</div>
<div id="rem:move-M-R2" class="remark" data-note-number="2" data-note-kind="Remark">
<p><strong>Remark 2 (Frames in a chart).</strong> Choose an oriented coordinate neighborhood {% raw %}<span class="math inline">\(U\)</span>{% endraw %} and pull the metric to its image in {% raw %}<span class="math inline">\(\mathbb R^2\)</span>{% endraw %}. Gram–Schmidt gives</p>
<p> {% raw %}<div class="math display">\[E_1=\frac{\partial_x}{|\partial_x|},\qquad E_2=\frac{\partial_y-\langle\partial_y,E_1\rangle E_1}{|\partial_y-\langle\partial_y,E_1\rangle E_1|}.\]</div>{% endraw %}</p>
<p> Both denominators are strictly positive, so the frame is smooth everywhere in the chart. A simple closed curve on a general surface need not bound a disk or lie in one chart. In the local Gauss–Bonnet argument we explicitly assume a compact disk with piecewise smooth regular boundary contained in such a chart. Its boundary need not be geodesic.</p>
</div>
<span id="eq:connection-form"></span>
<div id="result-3" class="remark" data-note-number="3" data-note-kind="Remark">
<p><strong>Remark 3 (Connection form).</strong> For an oriented orthonormal frame define</p>
<p> {% raw %}<div class="math display">\[\omega(V)=\langle\nabla_VE_1,E_2\rangle.\tag{1}\]</div>{% endraw %}</p>
<p> Metric compatibility, differentiated in the identities {% raw %}<span class="math inline">\(\langle E_i,E_j\rangle=\delta_{ij}\)</span>{% endraw %}, gives</p>
<p> {% raw %}<div class="math display">\[\nabla_VE_1=\omega(V)E_2,\qquad\nabla_VE_2=-\omega(V)E_1.\]</div>{% endraw %}</p>
<p> These signs follow from the displayed definition. Torsion-freeness therefore gives {% raw %}<span class="math inline">\([E_1,E_2]=-\omega(E_1)E_1-\omega(E_2)E_2\)</span>{% endraw %}.</p>
</div>
<div id="lem:Gaussian-curvature-connection-form" class="lemma" data-note-number="4" data-note-kind="Lemma">
<p><strong>Lemma 4</strong>.  Let {% raw %}<span class="math inline">\(M\)</span>{% endraw %} be a 2-manifold. Then, the Gauss curvature at {% raw %}<span class="math inline">\(p \in M\)</span>{% endraw %} is given by {% raw %}<span class="math inline">\(K(p) = E_2 (\omega(E_1)) - E_1 (\omega(E_2)) - \omega(E_1)^2 - \omega(E_2)^2 ~.\)</span>{% endraw %}</p>

</div>
<span id="eq:cartan-structural-i-a"></span><span id="eq:cartan-structural-i-b"></span>
<div class="proof">
<p><em>Proof.</em> Put {% raw %}<span class="math inline">\(\omega_i=\omega(E_i)\)</span>{% endraw %}, and let {% raw %}<span class="math inline">\(\theta_i\)</span>{% endraw %} be the dual coframe. The exterior derivative formula and torsion-freeness give</p>
<p> {% raw %}<div class="math display">\[d\theta_1=\omega\wedge\theta_2,\qquad d\theta_2=-\omega\wedge\theta_1.\tag{2}\]</div>{% endraw %}</p>
<p> For example {% raw %}<span class="math inline">\(d\theta_1(E_1,E_2)=-\theta_1([E_1,E_2])=\omega_1\)</span>{% endraw %}, which is the value of the first right side. Expanding the product rule correctly as an identity of two-forms,</p>
<p> {% raw %}<div class="math display">\[d\omega=d\omega_1\wedge\theta_1+d\omega_2\wedge\theta_2+\omega_1d\theta_1+\omega_2d\theta_2=(E_1\omega_2-E_2\omega_1+\omega_1^2+\omega_2^2)\theta_1\wedge\theta_2.\]</div>{% endraw %}</p>
<p> With the convention {% raw %}<span class="math inline">\(R(X,Y)Z=\nabla_Y\nabla_XZ-\nabla_X\nabla_YZ+\nabla_{[X,Y]}Z\)</span>{% endraw %}, substitution of the connection formulas gives {% raw %}<span class="math inline">\(R(X,Y)E_1=-d\omega(X,Y)E_2\)</span>{% endraw %}. Consequently</p>
<p> {% raw %}<div class="math display">\[K=\langle R(E_1,E_2)E_1,E_2\rangle=-d\omega(E_1,E_2)=E_2\omega_1-E_1\omega_2-\omega_1^2-\omega_2^2.\]</div>{% endraw %}</p>
<p> Equivalently {% raw %}<span class="math inline">\(d\omega=-K\,dA\)</span>{% endraw %}, where {% raw %}<span class="math inline">\(dA=\theta_1\wedge\theta_2\)</span>{% endraw %}. This derives the needed structural equation directly. ◻</p>
</div>
<span id="eq:gaussian-curvature"></span>
<div class="proof"><p><em>Proof of Theorem 1.</em> Independence of the basis of the tangent plane follows from the sectional curvature formula. For the extrinsic statement choose a local unit normal {% raw %}<span class="math inline">\(\nu\)</span>{% endraw %}, write {% raw %}<span class="math inline">\(D_XY=\nabla_XY+h(X,Y)\nu\)</span>{% endraw %}, and use {% raw %}<span class="math inline">\(D_X\nu=-A X\)</span>{% endraw %}, so {% raw %}<span class="math inline">\(h(X,Y)=\langle AX,Y\rangle\)</span>{% endraw %}. The tangential part of the ambient flat-curvature identity yields, in our sign convention,</p>
<p> {% raw %}<div class="math display">\[R(X,Y)Z=h(X,Z)AY-h(Y,Z)AX.\]</div>{% endraw %}</p>
<p> Indeed the tangential part of {% raw %}<span class="math inline">\(D_YD_XZ\)</span>{% endraw %} is {% raw %}<span class="math inline">\(\nabla_Y\nabla_XZ-h(X,Z)AY\)</span>{% endraw %}, and subtracting the analogous term gives the displayed identity. Thus for an orthonormal pair,</p>
<p> {% raw %}<div class="math display">\[K=\langle R(E_1,E_2)E_1,E_2\rangle=h_{11}h_{22}-h_{12}^2=\det A.\tag{3}\]</div>{% endraw %}</p>
<p> Changing {% raw %}<span class="math inline">\(\nu\)</span>{% endraw %} changes both principal curvatures' signs and leaves their product unchanged. This proves that the intrinsic definition agrees with classical Gauss curvature. ◻</p></div>
<p>From Theorem <a href="#thm:sectional-gauss-M2" data-reference-type="ref" data-reference="thm:sectional-gauss-M2">1</a>, we can now replace statements about sectional curvature with Gauss curvature, whenever we work on {% raw %}<span class="math inline">\(2\)</span>{% endraw %}-manifolds. (There is some ambiguity with using surfaces and {% raw %}<span class="math inline">\(2\)</span>{% endraw %}-manifolds interchangeably; “surfaces” are generally used with reference to {% raw %}<span class="math inline">\(\mathbb R^3\)</span>{% endraw %} as the ambient space. We will largely ignore this distinction, but will be clear when some statement of the theorem is based on the study of surfaces in {% raw %}<span class="math inline">\(\mathbb R^3\)</span>{% endraw %}.)</p>

<p>On a smooth regular boundary arc parametrized by arclength, let {% raw %}<span class="math inline">\(T=\gamma'\)</span>{% endraw %} and let {% raw %}<span class="math inline">\(N\)</span>{% endraw %} be the unit tangent vector to the surface obtained by a positive right-angle rotation of {% raw %}<span class="math inline">\(T\)</span>{% endraw %}. For the positively oriented boundary of a domain, {% raw %}<span class="math inline">\(N\)</span>{% endraw %} points inward. This is a normal to the <em>curve within the surface</em>, not an ambient surface normal.</p>

<div id="def:signed-curvature" class="definition" data-note-number="5" data-note-kind="Definition">
<p><strong>Definition 5</strong>.  The <em>signed curvature</em> is defined as </p>

{% raw %}<span id="eq:signed-curvature"></span><div class="math display">\[\begin{aligned}
 
        \kappa_N (t) = \langle \nabla_{\dif/\!\dif t} \gamma&#x27;(t), N(t) \rangle ~.
    
\end{aligned}\tag{4}\]</div>{% endraw %}
</div>
<div id="result-6" class="remark" data-note-number="6" data-note-kind="Remark">
<p><strong>Remark 6</strong>.  Differentiating {% raw %}<span class="math inline">\(\langle \gamma&#x27;,\gamma&#x27; \rangle \equiv 1\)</span>{% endraw %} yields {% raw %}<span class="math inline">\(2 \langle \nabla_{\dif/\!\dif t} \gamma&#x27;(t), \gamma&#x27;(t) \rangle = 0\)</span>{% endraw %}, implying {% raw %}<span class="math inline">\(\nabla_{\dif/\!\dif t} \gamma&#x27;(t) = \kappa_N (t) N(t)\)</span>{% endraw %}. This means if {% raw %}<span class="math inline">\(\gamma\)</span>{% endraw %} is curving toward {% raw %}<span class="math inline">\(\Omega\)</span>{% endraw %}, then {% raw %}<span class="math inline">\(\kappa_N (t)\)</span>{% endraw %} is positive, and it is negative if {% raw %}<span class="math inline">\(\gamma\)</span>{% endraw %} is curving away from {% raw %}<span class="math inline">\(\Omega\)</span>{% endraw %}.</p>

</div>
<p>The local Gauss–Bonnet formula balances three quantities: curvature in the interior, geodesic curvature along the boundary, and the turning at corners. For a polygon with geodesic edges, the boundary integral vanishes and the formula becomes a relation between area curvature and angles.</p>

<div id="thm:gauss-bonnet-formula" class="theorem" data-note-number="7" data-note-kind="Theorem">
<p><strong>Theorem 7 (Local Gauss–Bonnet).</strong> Let {% raw %}<span class="math inline">\(\Omega\)</span>{% endraw %} be a disk whose closure lies in an oriented coordinate chart of a smooth Riemannian surface. Suppose its positively oriented boundary is a simple closed piecewise smooth regular curve, with signed exterior turning angles {% raw %}<span class="math inline">\(\varepsilon_i\)</span>{% endraw %}. Then</p>
<p> {% raw %}<div class="math display">\[\int_\Omega K\,dA+\int_{\partial\Omega}\kappa_N\,ds+\sum_i\varepsilon_i=2\pi.\]</div>{% endraw %}</p>
<p> The disk hypothesis is essential to this right side; for a general compact surface with boundary it becomes {% raw %}<span class="math inline">\(2\pi\chi(\Omega)\)</span>{% endraw %}.</p>
</div>
<div class="proof">
<p><em>Proof.</em> On each smooth arc lift the angle of the unit tangent relative to the oriented frame to a real function {% raw %}<span class="math inline">\(\theta\)</span>{% endraw %}, so</p>
<p> {% raw %}<div class="math display">\[T=\cos\theta E_1+\sin\theta E_2,\qquad N=-\sin\theta E_1+\cos\theta E_2.\]</div>{% endraw %}</p>
<p> Differentiate along arclength using Remark 3 to obtain {% raw %}<span class="math inline">\(\nabla_TT=(\theta'+\omega(T))N\)</span>{% endraw %}; hence {% raw %}<span class="math inline">\(\kappa_N=\theta'+\omega(T)\)</span>{% endraw %}. At each corner include the signed change from the incoming to outgoing tangent. The turning-number theorem for a positively oriented simple plane curve says that the sum of these jumps and the changes along the arcs is {% raw %}<span class="math inline">\(2\pi\)</span>{% endraw %}. This theorem also applies to our frame: Gram–Schmidt gives a field of orientation-preserving triangular changes of basis, homotopic through such changes to the identity on the disk, so it cannot change the boundary tangent's winding number.</p>
<p>Integrating and summing the arcs now gives</p>
<p> {% raw %}<div class="math display">\[\int_{\partial\Omega}\kappa_N\,ds+\sum_i\varepsilon_i=2\pi+\int_{\partial\Omega}\omega=2\pi+\int_\Omega d\omega=2\pi-\int_\Omega K\,dA.\]</div>{% endraw %}</p>
<p> The middle equality is Stokes' theorem for a piecewise smooth disk; the last is the structural equation proved above. For geodesic edges {% raw %}<span class="math inline">\(\kappa_N=0\)</span>{% endraw %}, so curvature is exactly the angle excess over the Euclidean polygon formula. ◻</p>
</div>
<p>To pass from the local formula to the whole surface, take a finite smooth triangulation and subdivide until each closed triangle lies in a coordinate chart. A smooth triangulation is a collection of smoothly parametrized curved triangles meeting along whole edges or vertices. Its existence for compact smooth surfaces is a triangulation theorem, not a consequence of the definition. We use it as a topological input. For a surface <em>without boundary</em>, each edge belongs to exactly two triangles.</p>

<div id="result-8" class="definition" data-note-number="8" data-note-kind="Definition">
<p><strong>Definition 8</strong>.  Let {% raw %}<span class="math inline">\(M\)</span>{% endraw %} be a triangulated 2-manifold. The <em>Euler characteristic of {% raw %}<span class="math inline">\(M\)</span>{% endraw %} with respect to the given triangulation</em> is </p>

{% raw %}<div class="math display">\[\chi (M) = V - E + F ~,\]</div>{% endraw %}
<p> where {% raw %}<span class="math inline">\(V\)</span>{% endraw %} is the number of vertices in the triangulation, {% raw %}<span class="math inline">\(E\)</span>{% endraw %} is the number of edges, and {% raw %}<span class="math inline">\(F\)</span>{% endraw %} is the number of faces (or, the interiors of the triangles).</p>

</div>
<div id="thm:gauss-bonnet-thm" class="theorem" data-note-number="9" data-note-kind="Theorem">
<p><strong>Theorem 9</strong>.  Let {% raw %}<span class="math inline">\(M\)</span>{% endraw %} be a differentiable, smoothly triangulated, compact, boundaryless {% raw %}<span class="math inline">\(2\)</span>{% endraw %}-manifold. Then, </p>

{% raw %}<div class="math display">\[\int_M K \dif \operatorname{Vol}_g = 2 \pi \chi (M) ~,\]</div>{% endraw %}
<p> where {% raw %}<span class="math inline">\(K\)</span>{% endraw %} is the Gauss curvature of {% raw %}<span class="math inline">\(g\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(\dif \operatorname{Vol}_g\)</span>{% endraw %} is the density.</p>

</div>
<div class="proof">
<p><em>Proof.</em> First suppose {% raw %}<span class="math inline">\(M\)</span>{% endraw %} is connected and oriented. Apply the local formula to every triangle. A common edge has opposite boundary orientations in its two triangles, so their signed geodesic-curvature integrals cancel. If {% raw %}<span class="math inline">\(\theta_{ij}\)</span>{% endraw %} are the interior corner angles, the exterior angles are {% raw %}<span class="math inline">\(\pi-\theta_{ij}\)</span>{% endraw %}, and therefore</p>
<p> {% raw %}<div class="math display">\[\int_M K\,dA+3\pi F-\sum_{i,j}\theta_{ij}=2\pi F.\]</div>{% endraw %}</p>
<p> The triangles fill a neighborhood of every vertex, so the angles around each vertex sum to {% raw %}<span class="math inline">\(2\pi\)</span>{% endraw %}. Thus {% raw %}<span class="math inline">\(\int_MK\,dA=2\pi V-\pi F\)</span>{% endraw %}. Counting the two incidences of each edge gives {% raw %}<span class="math inline">\(3F=2E\)</span>{% endraw %}, and hence</p>
<p> {% raw %}<div class="math display">\[2\pi V-\pi F=2\pi(V-E+F)=2\pi\chi(M).\]</div>{% endraw %}</p>
<p></p>
<p>For a nonorientable connected surface, form the orientation double cover: its points are pairs {% raw %}<span class="math inline">\((p,o)\)</span>{% endraw %}, where {% raw %}<span class="math inline">\(o\)</span>{% endraw %} is one of the two orientations of {% raw %}<span class="math inline">\(T_pM\)</span>{% endraw %}. Local oriented frames give smooth sheets; they also give the cover a canonical orientation. The cover is connected, since a disconnected double cover would select an orientation continuously on {% raw %}<span class="math inline">\(M\)</span>{% endraw %}. Pull back the metric along {% raw %}<span class="math inline">\(\pi:\widetilde M\to M\)</span>{% endraw %}. This is a locally isometric metric, not an assertion of conformality between metrics on the same manifold. Local isometry preserves curvature and area densities, so integration over the two sheets gives</p>
<p> {% raw %}<div class="math display">\[\int_{\widetilde M}\widetilde K\,dA_{\widetilde g}=2\int_MK\,dA_g.\]</div>{% endraw %}</p>
<p>Subdivide the triangulation so that each closed triangle lies in an evenly covered neighbourhood. For a triangle {% raw %}<span class="math inline">\(\sigma:\Delta\to M\)</span>{% endraw %}, choose a vertex {% raw %}<span class="math inline">\(v\)</span>{% endraw %} of {% raw %}<span class="math inline">\(\Delta\)</span>{% endraw %}. Each of the two points over {% raw %}<span class="math inline">\(\sigma(v)\)</span>{% endraw %} determines a lift {% raw %}<span class="math inline">\(\widetilde\sigma_1,\widetilde\sigma_2\)</span>{% endraw %}. Each lift is injective: equality of two of its values would, after projection, contradict injectivity of {% raw %}<span class="math inline">\(\sigma\)</span>{% endraw %}. Their images are disjoint. Indeed, an intersection would project to the same point of the triangle, and uniqueness of lifts on the connected domain {% raw %}<span class="math inline">\(\Delta\)</span>{% endraw %} would make the two lifts agree, contrary to their distinct values at {% raw %}<span class="math inline">\(v\)</span>{% endraw %}.</p>
<p>The two lifted triangles exhaust the preimage of the original triangle. Their restrictions to edges agree with the corresponding edge lifts by uniqueness, so the lifted triangles form a triangulation of {% raw %}<span class="math inline">\(\widetilde M\)</span>{% endraw %}. Every vertex, open edge, and open face has exactly two lifts. Consequently,</p>
{% raw %}<div class="math display">\[\widetilde V=2V,\qquad\widetilde E=2E,\qquad\widetilde F=2F,\qquad
\chi(\widetilde M)=2V-2E+2F=2\chi(M).\]</div>{% endraw %}
<p>Apply the oriented formula upstairs and divide by two. Finally a compact manifold has finitely many components; add their formulas. ◻</p>
</div>
<div id="result-10" class="remark" data-note-number="10" data-note-kind="Remark">
<p><strong>Remark 10</strong>.  For compact 2-manifolds, Gauss–Bonnet determines the total curvature from the Euler characteristic. Combined with the classification of compact surfaces, it therefore restricts the possible signs of curvature. Recall that the classification theorem tells us every compact, connected, boundaryless, orientable 2-manifold {% raw %}<span class="math inline">\(M\)</span>{% endraw %} is homeomorphic to a sphere or a connected sum of {% raw %}<span class="math inline">\(n\)</span>{% endraw %} tori, and every nonorientable one is homeomorphic to a connected sum of {% raw %}<span class="math inline">\(n\)</span>{% endraw %} copies of the real projective plane {% raw %}<span class="math inline">\(\mathbb R P^2\)</span>{% endraw %} ({% raw %}<span class="math inline">\(n\)</span>{% endraw %} is called the <em>genus</em> of {% raw %}<span class="math inline">\(M\)</span>{% endraw %}).</p>

</div>
<div id="result-11" class="theorem" data-note-number="11" data-note-kind="Theorem">
<p><strong>Theorem 11</strong> (Consequences of the Gauss-Bonnet Theorem: Classification).  Let {% raw %}<span class="math inline">\((M,g)\)</span>{% endraw %} be a compact, connected, boundaryless, differentiable 2-manifold with Gauss curvature {% raw %}<span class="math inline">\(K\)</span>{% endraw %}. Then,</p>

<ol>
<li><p>If {% raw %}<span class="math inline">\(M\)</span>{% endraw %} is homeomorphic to the sphere or the projective plane, then {% raw %}<span class="math inline">\(K &gt; 0\)</span>{% endraw %} somewhere.</p></li>
<li><p>If {% raw %}<span class="math inline">\(M\)</span>{% endraw %} is homeomorphic to the torus or the Klein bottle, then {% raw %}<span class="math inline">\(K \equiv 0\)</span>{% endraw %}, or {% raw %}<span class="math inline">\(K\)</span>{% endraw %} takes on both positive and negative values.</p></li>
<li><p>If {% raw %}<span class="math inline">\(M\)</span>{% endraw %} is any other compact surface, then {% raw %}<span class="math inline">\(K &lt; 0\)</span>{% endraw %} somewhere.</p></li>
</ol>
<p><em>Proof.</em> The classification of closed connected surfaces gives {% raw %}<span class="math inline">\(\chi=2-2g\)</span>{% endraw %} in the orientable case and {% raw %}<span class="math inline">\(\chi=2-h\)</span>{% endraw %} for a connected sum of {% raw %}<span class="math inline">\(h\geq1\)</span>{% endraw %} projective planes. Thus the three cases have positive, zero, and negative Euler characteristic respectively. Gauss–Bonnet fixes the sign of {% raw %}<span class="math inline">\(\int K\,dA\)</span>{% endraw %}. A continuous nonnegative function that is positive at one point has strictly positive integral, since it is bounded below on a small disk; the same argument applies to {% raw %}<span class="math inline">\(-K\)</span>{% endraw %}. This proves all three alternatives. ◻</p>
</div>
<div id="result-12" class="theorem" data-note-number="12" data-note-kind="Theorem">
<p><strong>Theorem 12</strong> (Consequences of the Gauss-Bonnet Theorem: Homotopy Group).  Let {% raw %}<span class="math inline">\((M,g)\)</span>{% endraw %} be a compact, connected, boundaryless, differentiable 2-manifold with Gauss curvature {% raw %}<span class="math inline">\(K\)</span>{% endraw %}.</p>

<ol>
<li><p>If {% raw %}<span class="math inline">\(K &gt; 0\)</span>{% endraw %} everywhere on {% raw %}<span class="math inline">\(M\)</span>{% endraw %}, then the universal covering manifold of {% raw %}<span class="math inline">\(M\)</span>{% endraw %} is homeomorphic to {% raw %}<span class="math inline">\(\mathbb S^2\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(\pi_1 (M)\)</span>{% endraw %} is either trivial or isomorphic to the group {% raw %}<span class="math inline">\(\mathbb Z / 2\mathbb Z\)</span>{% endraw %}.</p></li>
<li><p>If {% raw %}<span class="math inline">\(K \leq 0\)</span>{% endraw %} everywhere on {% raw %}<span class="math inline">\(M\)</span>{% endraw %}, then the universal covering manifold of {% raw %}<span class="math inline">\(M\)</span>{% endraw %} is homeomorphic to {% raw %}<span class="math inline">\(\mathbb R^2\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(\pi_1 (M)\)</span>{% endraw %} is infinite.</p></li>
</ol>
<p><em>Proof.</em> If {% raw %}<span class="math inline">\(K&gt;0\)</span>{% endraw %}, the integral is positive, so the preceding classification leaves only {% raw %}<span class="math inline">\(S^2\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\mathbb RP^2\)</span>{% endraw %}. Their simply connected covers are {% raw %}<span class="math inline">\(S^2\)</span>{% endraw %}, and their fundamental groups are respectively trivial and the antipodal deck group {% raw %}<span class="math inline">\(\mathbb Z/2\mathbb Z\)</span>{% endraw %}.</p>
<p>If {% raw %}<span class="math inline">\(K\leq0\)</span>{% endraw %}, lift the metric to the universal cover. Compactness makes the base complete, and geodesics lift to show that the cover is complete. The Cartan–Hadamard theorem, proved later in these notes, makes its exponential map a diffeomorphism from {% raw %}<span class="math inline">\(\mathbb R^2\)</span>{% endraw %}. If the fundamental group were finite, this universal cover would be a finite cover of a compact space and hence compact, contrary to its being {% raw %}<span class="math inline">\(\mathbb R^2\)</span>{% endraw %}. The nonpositive conclusion therefore uses completeness and Cartan–Hadamard in addition to Gauss–Bonnet. ◻</p>
</div>
<div id="refs" class="references csl-bib-body hanging-indent" data-entry-spacing="0" role="list">
<div id="ref-do_carmo_differential_1994" class="csl-entry" role="listitem">
Carmo, Manfredo Perdigão do. 1994. <em>Differential Forms and Applications</em>. Universitext. Berlin ; New York: Springer-Verlag.
</div>
</div>

<p class="note-reading">Reading: Carmo (1992), Riemannian geometry.</p>


<nav class="note-related" aria-label="Related notes"><p>Related notes: <a href="{% post_url 2022-08-27-sectional-curvature-ricci-curvature-and-space-forms %}">Sectional Curvature, Ricci Curvature, and Space Forms</a>; <a href="{% post_url 2022-12-14-the-second-fundamental-form-and-the-gauss-equations %}">The Second Fundamental Form and the Gauss Equations</a>.</p></nav>

<nav class="note-series" aria-label="Notes in this series"><p>Previous: <a href="{% post_url 2022-08-27-sectional-curvature-ricci-curvature-and-space-forms %}">Sectional Curvature, Ricci Curvature, and Space Forms</a> · Next: <a href="{% post_url 2022-10-07-lie-groups-and-their-lie-algebras %}">Lie Groups and Their Lie Algebras</a></p></nav>

</div>
