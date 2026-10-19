---
layout: "post"
title: "Minimal Submanifolds and First Variation"
date: "2023-10-23"
tags: ["math", "differential geometry"]
excerpt: "Minimal Submanifolds and First Variation. Notes on differential geometry."
note_series: "Differential geometry"
note_source: "assets/notes/Differential Geometry - Notes/diff-geo.tex"
redirect_from: ["/2023/10/23/minimal-surfaces/", "/2023/11/05/minimal-submanifolds/", "/2023/11/19/consequences-of-the-first-variation-formula/"]
---

<div class="note-content" markdown="0">

<p>Throughout, manifolds and maps are smooth unless stated otherwise. On a Riemannian manifold, {% raw %}<span class="math inline">\(\nabla\)</span>{% endraw %} denotes the Levi–Civita connection. The needed local constructions start with <a href="{% post_url 2022-02-05-differentiable-manifolds-charts-constructions-and-examples %}">coordinate charts</a>.</p>

<div id="a-gentle-introduction-to-geometric-analysis-minimal-surfaces" data-note-section="title">

</div>
<p>A surface is stationary for area when every compactly supported deformation fixing its boundary has zero first variation. For a graph, this condition becomes a nonlinear differential equation; for a general submanifold, it becomes vanishing of the mean curvature vector.</p>

<p>Classical examples are the plane, the catenoid (Euler, 1741), and the helicoid (Meusnier, 1776). We derive both descriptions, beginning with graphs. A closed differential form then proves a stronger minimizing property for minimal graphs under the comparison hypotheses below. The final applications use harmonic coordinate functions and radial variations to obtain convex-hull and monotonicity results.</p>

<h3 data-note-section="1" id="minimal-surfaces">1. Minimal Surfaces</h3>
<p>To start, let {% raw %}<span class="math inline">\(u : \Omega \subset \mathbb R^2 \to \mathbb R\)</span>{% endraw %} be a {% raw %}<span class="math inline">\(\mathscr C^2\)</span>{% endraw %} function. Define a surface in {% raw %}<span class="math inline">\(\mathbb R^3\)</span>{% endraw %}, called the <em>graph</em> of {% raw %}<span class="math inline">\(u\)</span>{% endraw %}, as </p>

{% raw %}<span id="eq:graph"></span><div class="math display">\[
    \operatorname{Graph} (u) \triangleq \left\{ (x,y,z) \in \mathbb R^3 : z=u(x,y) \text{ for } (x,y) \in \Omega \right\} ~.\tag{1}\]</div>{% endraw %}
<p> Define the <em>area</em> of a surface in the usual sense, by </p>

{% raw %}<span id="eq:area-graph"></span><div class="math display">\[
    \operatorname{Area}(\operatorname{Graph}(u)) \triangleq \int_\Omega \left| \begin{pmatrix} 1 \\ 0 \\ u_x \end{pmatrix} \times \begin{pmatrix} 0 \\ 1 \\ u_y \end{pmatrix}  \right| = \int_\Omega \sqrt{1 + |\nabla u|^2} ~, \tag{2}\]</div>{% endraw %}
<p> and the unit normal vector is given by </p>

{% raw %}<span id="eq:unit-normal"></span><div class="math display">\[
    N = \frac{(-u_x,-u_y,1)}{\sqrt{1+|\nabla u|^2}} ~.\tag{3}\]</div>{% endraw %}
<p>To characterize stationarity, take {% raw %}<span class="math inline">\(\eta\in C_c^2(\Omega)\)</span>{% endraw %}, or on a compact domain impose {% raw %}<span class="math inline">\(\eta=0\)</span>{% endraw %} on its boundary. Then {% raw %}<span class="math inline">\(u+t\eta\)</span>{% endraw %} has the same boundary data. The area variation is finite on the support of {% raw %}<span class="math inline">\(\eta\)</span>{% endraw %}, even if the entire graph has infinite area. Differentiation under the integral is justified by compact support and continuity of the derivatives.</p>

{% raw %}<span id="eq:area-graph-perturbed"></span><div class="math display">\[
    \operatorname{Area}(\operatorname{Graph}(u + t\eta)) = \int_\Omega \sqrt{1 + |\nabla u + t \nabla \eta|^2} ~.\tag{4}\]</div>{% endraw %}
<p> We can then proceed to characterize the critical point of the area functional: direct calculations reveal </p>

{% raw %}<span id="eq:area-graph-perturbed-critical"></span><div class="math display">\[\begin{aligned}
 
    \dod{}{t}\Big|_{t=0} \operatorname{Area}(\operatorname{Graph}(u + t\eta)) = \int_\Omega \frac{\langle \nabla \eta, \nabla u \rangle}{\sqrt{1 + |\nabla u|^2}} = -\int_\Omega \eta \operatorname{div} \left( \frac{\nabla u}{\sqrt{1 + |\nabla u|^2}} \right) ~.
\end{aligned}\tag{5}\]</div>{% endraw %}
<p>If this first variation vanishes for every compactly supported test function {% raw %}<span class="math inline">\(\eta\)</span>{% endraw %}, integration by parts and the fundamental lemma give the minimal surface equation below. Conversely, that equation makes every such first variation zero. Thus the equation characterizes stationarity, and the calibration argument supplies the stronger minimizing conclusion.</p>

{% raw %}<span id="eq:minimal-surface-eq"></span><div class="math display">\[
    \operatorname{div} \left( \frac{\nabla u}{\sqrt{1 + |\nabla u|^2}} \right) = 0\tag{6}\]</div>{% endraw %}
<p>Thus {% raw %}<span class="math inline">\(u\)</span>{% endraw %} is stationary for compactly supported graph variations precisely when it satisfies <a href="#eq:minimal-surface-eq" data-reference-type="eqref" data-reference="eq:minimal-surface-eq">(6)</a>, the <strong>minimal surface equation in divergence form</strong>. The test functions {% raw %}<span class="math inline">\(\eta\)</span>{% endraw %} are compactly supported in {% raw %}<span class="math inline">\(\Omega\)</span>{% endraw %}, or vanish on the fixed boundary of the compact graph portion under consideration.</p>

<p>Stationarity of a minimal graph also yields a comparison with oriented surfaces in the same cylinder. Extend its upward unit normal {% raw %}<span class="math inline">\(N=(-u_x,-u_y,1)/W\)</span>{% endraw %}, {% raw %}<span class="math inline">\(W=\sqrt{1+|\nabla u|^2}\)</span>{% endraw %}, independently of the vertical coordinate. Define the two-form {% raw %}<span class="math inline">\(\omega(X,Y)=\det(X,Y,N)=\langle X\times Y,N\rangle\)</span>{% endraw %}. Its coordinate components are</p>
<p> {% raw %}<div class="math display">\[\omega(\partial_x,\partial_y)=W^{-1},\quad \omega(\partial_y,\partial_z)=-u_x/W,\quad \omega(\partial_x,\partial_z)=u_y/W,\]</div>{% endraw %}</p>
<p> so</p>
<p> {% raw %}<div class="math display">\[\omega=\frac{dx\wedge dy-u_x\,dy\wedge dz+u_y\,dx\wedge dz}{W}.\]</div>{% endraw %}</p>
<p> Since {% raw %}<span class="math inline">\(\omega=\iota_N(dx\wedge dy\wedge dz)\)</span>{% endraw %},</p>
<p> {% raw %}<div class="math display">\[d\omega=(\operatorname{div}_{\mathbb R^3}N)\,dx\wedge dy\wedge dz =-\operatorname{div}_{\mathbb R^2}\left(\frac{\nabla u}{W}\right)dx\wedge dy\wedge dz=0.\]</div>{% endraw %}</p>
<p> For an orthonormal pair {% raw %}<span class="math inline">\(X,Y\)</span>{% endraw %}, {% raw %}<span class="math inline">\(|\omega(X,Y)|\leq1\)</span>{% endraw %} by Cauchy–Schwarz. Equality in absolute value means that their plane is {% raw %}<span class="math inline">\(N^\perp\)</span>{% endraw %}; the value is {% raw %}<span class="math inline">\(+1\)</span>{% endraw %} for the orientation whose normal is {% raw %}<span class="math inline">\(N\)</span>{% endraw %}. In particular, {% raw %}<span class="math inline">\(\omega\)</span>{% endraw %} restricts to the area form on the upward-oriented graph. A closed form with this norm bound is called a calibration.</p>
<div id="result-1" class="theorem" data-note-number="1" data-note-kind="Theorem">
<p><strong>Theorem 1 (Minimal graph calibration).</strong> Let {% raw %}<span class="math inline">\(u\in C^2(\Omega)\)</span>{% endraw %} solve the minimal surface equation. Let {% raw %}<span class="math inline">\(\Gamma\)</span>{% endraw %} be a compact oriented portion of its graph, and let {% raw %}<span class="math inline">\(\Sigma\)</span>{% endraw %} be a compact oriented comparison surface in {% raw %}<span class="math inline">\(\Omega\times\mathbb R\)</span>{% endraw %}, with the same oriented boundary. Assume {% raw %}<span class="math inline">\(\Sigma-\Gamma\)</span>{% endraw %} bounds an oriented three-chain in the cylinder, so the surfaces are homologous there relative to their common boundary. Then</p>
<p> {% raw %}<div class="math display">\[\operatorname{Area}(\Gamma)\leq\operatorname{Area}(\Sigma).\]</div>{% endraw %}</p>
<p> The chain may be piecewise smooth. This formulation makes the finite-area and homology conditions used by Stokes explicit; it applies in particular to comparisons obtained by a compact deformation fixing the boundary.</p>
</div>
<div class="proof">
<p><em>Proof.</em> If {% raw %}<span class="math inline">\(\Sigma-\Gamma=\partial C\)</span>{% endraw %}, the closedness calculation gives</p>
<p> {% raw %}<div class="math display">\[\int_\Sigma\omega-\int_\Gamma\omega=\int_Cd\omega=0.\]</div>{% endraw %}</p>
<p> The graph orientation makes {% raw %}<span class="math inline">\(\int_\Gamma\omega=\operatorname{Area}(\Gamma)\)</span>{% endraw %}. On the comparison surface the pointwise bound {% raw %}<span class="math inline">\(\omega(e_1,e_2)\leq1\)</span>{% endraw %}, integrated against its area element, gives</p>
<p> {% raw %}<div class="math display">\[\operatorname{Area}(\Gamma)=\int_\Sigma\omega\leq\operatorname{Area}(\Sigma).\]</div>{% endraw %}</p>
<p> Equality requires agreement with the calibrated oriented plane almost everywhere. This proof compares all the specified homologous competitors, rather than just infinitesimal variations. ◻</p>
</div>

<h3 data-note-section="2" id="minimal-submanifolds">2. Minimal Submanifolds</h3>
<p>Let {% raw %}<span class="math inline">\(\Sigma^k\subset(M^n,g)\)</span>{% endraw %} be a smooth immersed submanifold, with induced metric. We use the ambient Levi–Civita connection, not an arbitrary affine connection. For tangent vector fields {% raw %}<span class="math inline">\(X,Y\)</span>{% endraw %}, write</p>
<p> {% raw %}<div class="math display">\[\nabla^\Sigma_XY=(\nabla^M_XY)^\top,\qquad B(X,Y)=(\nabla^M_XY)^\perp.\]</div>{% endraw %}</p>
<p> Here {% raw %}<span class="math inline">\(B\)</span>{% endraw %} is the vector-valued second fundamental form, also denoted {% raw %}<span class="math inline">\(\operatorname{II}\)</span>{% endraw %} in the graph calculations. Torsion-freeness gives {% raw %}<span class="math inline">\(B(X,Y)=B(Y,X)\)</span>{% endraw %}, because {% raw %}<span class="math inline">\([X,Y]\)</span>{% endraw %} is tangent. For a local orthonormal normal frame {% raw %}<span class="math inline">\(N_\alpha\)</span>{% endraw %}, metric compatibility gives</p>
<p> {% raw %}<div class="math display">\[B(X,Y)=\sum_\alpha\langle\nabla^M_XY,N_\alpha\rangle N_\alpha =-\sum_\alpha\langle Y,\nabla^M_XN_\alpha\rangle N_\alpha.\]</div>{% endraw %}</p>
<p> With a tangent orthonormal frame {% raw %}<span class="math inline">\(E_1,\ldots,E_k\)</span>{% endraw %}, set</p>
<p> {% raw %}<div class="math display">\[|B|^2=\sum_{i,j=1}^k|B(E_i,E_j)|^2,\qquad H=\sum_{i=1}^k B(E_i,E_i).\]</div>{% endraw %}</p>
<p> Thus our mean curvature vector is the trace, without a factor {% raw %}<span class="math inline">\(1/k\)</span>{% endraw %}. The Gauss equation reads</p>
<p> {% raw %}<div class="math display">\[(K_\Sigma(X,Y)-K_M(X,Y))|X\wedge Y|^2 =\langle B(X,X),B(Y,Y)\rangle-|B(X,Y)|^2.\]</div>{% endraw %}</p>
<div id="result-2" class="remark" data-note-number="2" data-note-kind="Remark">
<p><strong>Remark 2.</strong> On a hypersurface with a chosen local unit normal {% raw %}<span class="math inline">\(N\)</span>{% endraw %}, our shape operator is {% raw %}<span class="math inline">\(S_NX=\nabla^M_XN\)</span>{% endraw %}. Its eigenvalues are {% raw %}<span class="math inline">\(\kappa_i\)</span>{% endraw %}. Since {% raw %}<span class="math inline">\(\langle B(X,Y),N\rangle=-\langle S_NX,Y\rangle\)</span>{% endraw %},</p>
<p> {% raw %}<div class="math display">\[\langle H,N\rangle=-\sum_{i=1}^{n-1}\kappa_i.\]</div>{% endraw %}</p>
<p> This agrees with the earlier convention {% raw %}<span class="math inline">\(\operatorname{II}_N(X,Y)=\langle S_NX,Y\rangle\)</span>{% endraw %}: that scalar form is the negative of the normal component of the vector-valued {% raw %}<span class="math inline">\(B\)</span>{% endraw %}. A global unit normal is unnecessary in higher codimension or for the first variation formula.</p>
</div>
<p>For any vector field {% raw %}<span class="math inline">\(V\)</span>{% endraw %} along {% raw %}<span class="math inline">\(\Sigma\)</span>{% endraw %}, including one with a normal component, define its tangential divergence by</p>
<p> {% raw %}<span id="eq:divergence"></span><span id="eq:laplacian"></span><div class="math display">\[\operatorname{div}_\Sigma V=\sum_{i=1}^k\langle\nabla^M_{E_i}V,E_i\rangle,\qquad \Delta_\Sigma f=\operatorname{div}_\Sigma(\operatorname{grad}_\Sigma f).\tag{7}\]</div>{% endraw %}</p>
<p> The first expression equals intrinsic divergence when {% raw %}<span class="math inline">\(V\)</span>{% endraw %} is tangent. For a normal field,</p>
<p> {% raw %}<div class="math display">\[\operatorname{div}_\Sigma V^\perp =-\sum_i\langle V^\perp,\nabla^M_{E_i}E_i\rangle=-\langle V,H\rangle.\]</div>{% endraw %}</p>
<p> Consequently</p>
<p> {% raw %}<div class="math display">\[\operatorname{div}_\Sigma V=\operatorname{div}_\Sigma V^\top-\langle V,H\rangle.\]</div>{% endraw %}</p>
<p> The minus sign follows from differentiating {% raw %}<span class="math inline">\(\langle V^\perp,E_i\rangle=0\)</span>{% endraw %}.</p>
<p>Let {% raw %}<span class="math inline">\(\Gamma:(-\epsilon,\epsilon)\times\Sigma\to M\)</span>{% endraw %} be a variation through immersions, with {% raw %}<span class="math inline">\(\Gamma(0,x)=x\)</span>{% endraw %}, compact support in the spatial variable, and fixed boundary if a boundary is present. Put {% raw %}<span class="math inline">\(V=\partial_t\Gamma|_{t=0}\)</span>{% endraw %}. In local coordinates {% raw %}<span class="math inline">\(x_1,\ldots,x_k\)</span>{% endraw %}, its induced metric and relative volume density are</p>
<p> {% raw %}<div class="math display">\[g_{ij}(t)=\langle\partial_i\Gamma,\partial_j\Gamma\rangle,\qquad \nu(t)=\frac{\sqrt{\det g(t)}}{\sqrt{\det g(0)}}.\]</div>{% endraw %}</p>
<p> Both determinants acquire the same squared Jacobian under a coordinate change, so the ratio is intrinsic. The varied volume is {% raw %}<span class="math inline">\(\int_\Sigma\nu(t)\,d\mu_\Sigma\)</span>{% endraw %}; for noncompact {% raw %}<span class="math inline">\(\Sigma\)</span>{% endraw %}, differentiate only its finite change on the compact support.</p>
<p>Jacobi's determinant identity and compatibility of the connection give</p>
<p> {% raw %}<div class="math display">\[\nu'(0)=\frac12g^{ij}(0)\,\partial_tg_{ij}(0),\qquad \partial_tg_{ij}(0)=\langle\nabla^M_{\partial_i}V,\partial_j\rangle+ \langle\partial_i,\nabla^M_{\partial_j}V\rangle.\]</div>{% endraw %}</p>
<p> The interchange {% raw %}<span class="math inline">\(D_t\partial_i\Gamma=D_i\partial_t\Gamma\)</span>{% endraw %} uses torsion-freeness of the pullback connection. Choose coordinates orthonormal at the point being evaluated. Then</p>
<p> {% raw %}<span id="eq:d-nu-t0-1"></span><div class="math display">\[\nu'(0)=\sum_{i=1}^k\langle\nabla^M_{E_i}V,E_i\rangle=\operatorname{div}_\Sigma V.\tag{8}\]</div>{% endraw %}
<p></p>
<p> {% raw %}<span id="eq:d-nu-t0-2"></span><div class="math display">\[\nu'(0)=\operatorname{div}_\Sigma V^\top-\langle V,H\rangle.\tag{9}\]</div>{% endraw %}</p></p>
<p> This is a pointwise density identity. Integrating, and applying the intrinsic divergence theorem to the tangential part, gives the first variation formula</p>
<p> {% raw %}<span id="eq:minimal-submanifold-equation"></span><div class="math display">\[\left.\frac d{dt}\right|_{0}\operatorname{Vol}(\Gamma_t(\Sigma)) =-\int_\Sigma\langle V,H\rangle\,d\mu_\Sigma +\int_{\partial\Sigma}\langle V,\eta\rangle\,d\sigma,\tag{10}\]</div>{% endraw %}</p>
<p> where {% raw %}<span class="math inline">\(\eta\)</span>{% endraw %} is the outward unit conormal in {% raw %}<span class="math inline">\(\Sigma\)</span>{% endraw %}. The boundary term vanishes for a fixed-boundary variation.</p>
<p>Thus {% raw %}<span class="math inline">\(H=0\)</span>{% endraw %} makes every such first variation zero. Conversely, every smooth compactly supported normal field in the interior can be realized by {% raw %}<span class="math inline">\(\Gamma(t,x)=\exp_x(tV(x))\)</span>{% endraw %} for sufficiently small {% raw %}<span class="math inline">\(t\)</span>{% endraw %}. If {% raw %}<span class="math inline">\(H\)</span>{% endraw %} were nonzero at an interior point, choosing {% raw %}<span class="math inline">\(V=\chi H\)</span>{% endraw %} with a nonnegative bump {% raw %}<span class="math inline">\(\chi\)</span>{% endraw %} there would give a strictly negative first variation. Hence stationarity is equivalent to {% raw %}<span class="math inline">\(H\equiv0\)</span>{% endraw %}, and continuity includes any boundary points. Such a submanifold is called <em>minimal</em>.</p>
<p>Equivalently, for all compactly supported ambient fields along {% raw %}<span class="math inline">\(\Sigma\)</span>{% endraw %} that vanish at its boundary,</p>
<p> {% raw %}<span id="eq:minimal-surface-characterization"></span><div class="math display">\[\int_\Sigma\operatorname{div}_\Sigma V\,d\mu_\Sigma=0.\tag{11}\]</div>{% endraw %}</p>
<p> The fields must allow normal components: testing only tangent fields would merely repeat the divergence theorem on every submanifold. This formulation can later be used to define stationarity for less regular geometric objects.</p>
<h3 data-note-section="3" id="consequences-of-the-first-variation-formula">3. Consequences of the First Variation Formula</h3>
<p>We next derive consequences of <a href="#eq:minimal-surface-characterization" data-reference-type="eqref" data-reference="eq:minimal-surface-characterization">(11)</a>. These will culminate in the theorem of Bernstein, treated in the next section. We look predominantly at minimal submanifolds {% raw %}<span class="math inline">\(\Sigma^k \subset \mathbb R^n\)</span>{% endraw %}, where {% raw %}<span class="math inline">\(k &lt; n\)</span>{% endraw %}. We drop the dependence of {% raw %}<span class="math inline">\(\Sigma\)</span>{% endraw %} on dimension {% raw %}<span class="math inline">\(k\)</span>{% endraw %}; unless otherwise stated, the {% raw %}<span class="math inline">\(\dim \Sigma = k\)</span>{% endraw %}.</p>

<p>A smooth function {% raw %}<span class="math inline">\(f\)</span>{% endraw %} on {% raw %}<span class="math inline">\(\Sigma\)</span>{% endraw %} is called <em>harmonic</em> if {% raw %}<span class="math inline">\(\Delta_\Sigma f=0\)</span>{% endraw %}. For a map into Euclidean space, harmonicity means that every coordinate function is harmonic. This definition gives a useful characterization of minimal submanifolds of Euclidean space.</p>
<div id="prop:minimal-harmonic" class="proposition" data-note-number="3" data-note-kind="Proposition">
<p><strong>Proposition 3</strong>.  {% raw %}<span class="math inline">\(\Sigma \subset \mathbb R^n\)</span>{% endraw %} is minimal if and only if the restrictions of the coordinate functions of {% raw %}<span class="math inline">\(\mathbb R^n\)</span>{% endraw %} to {% raw %}<span class="math inline">\(\Sigma\)</span>{% endraw %} are harmonic functions.</p>

<p>In fact the calculation proves the pointwise identity {% raw %}<span class="math inline">\(\Delta_\Sigma x_i=\langle H,e_i\rangle\)</span>{% endraw %}. Equality against every compactly supported test function implies equality pointwise, since both sides are continuous. The ambient coordinate vectors span the whole normal as well as tangent space, so vanishing of all coordinate Laplacians is equivalent to {% raw %}<span class="math inline">\(H=0\)</span>{% endraw %}.</p>
</div>
<div class="proof">
<p><em>Proof.</em> Let {% raw %}<span class="math inline">\(e_i = \nabla_{\mathbb R^n} x_i = \pd{}{{x_i}}\)</span>{% endraw %} denote the {% raw %}<span class="math inline">\(i\)</span>{% endraw %}th coordinate vector field on {% raw %}<span class="math inline">\(\mathbb R^n\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(\eta\)</span>{% endraw %} denote a smooth, compactly supported function on {% raw %}<span class="math inline">\(\Sigma\)</span>{% endraw %} that vanishes on {% raw %}<span class="math inline">\(\partial \Sigma\)</span>{% endraw %}. From the fact that {% raw %}<span class="math inline">\(e_i\)</span>{% endraw %} is constant vector field, it follows </p>

{% raw %}<div class="math display">\[\operatorname{div}_\Sigma (\eta e_i) = \langle \nabla_\Sigma \eta, e_i \rangle = \langle \nabla_\Sigma \eta, \nabla_\Sigma x_i \rangle ~.\]</div>{% endraw %}
<p> In other words, </p>

{% raw %}<div class="math display">\[\begin{aligned}
        \int_\Sigma \operatorname{div}_\Sigma (\eta e_i) &amp;= - \int_\Sigma \langle \eta e_i, H \rangle = \int_\Sigma \langle \nabla_\Sigma \eta, \nabla_\Sigma x_i \rangle = - \int_\Sigma \eta \Delta_\Sigma x_i ~.
    
\end{aligned}\]</div>{% endraw %}
<p> The conclusion follows directly. ◻</p>

</div>
<p>Recall that if {% raw %}<span class="math inline">\(\Sigma \subset \mathbb R^n\)</span>{% endraw %} is a compact subset, then the smallest convex set containing {% raw %}<span class="math inline">\(\Sigma\)</span>{% endraw %}, the convex hull of {% raw %}<span class="math inline">\(\Sigma\)</span>{% endraw %}, denoted {% raw %}<span class="math inline">\(\operatorname{Conv}(\Sigma)\)</span>{% endraw %}, is the intersection of all half-spaces containing {% raw %}<span class="math inline">\(\Sigma\)</span>{% endraw %}. The maximum principle for harmonic coordinate functions gives the convex-hull property.</p>

<div id="result-4" class="proposition" data-note-number="4" data-note-kind="Proposition">
<p><strong>Proposition 4</strong>.  If {% raw %}<span class="math inline">\(\Sigma \subset \mathbb R^n\)</span>{% endraw %} is a <em>compact</em> minimal submanifold, then {% raw %}<span class="math inline">\(\Sigma \subset \operatorname{Conv}(\partial \Sigma)\)</span>{% endraw %}.</p>

<p>Assume positive dimension and compactness as a manifold with boundary. A compact connected component without boundary cannot be minimally immersed in Euclidean space: every coordinate function would be harmonic and therefore constant on that component, contradicting immersion. Thus the maximum principle applies with a nonempty boundary on each component. Applying the stated half-space argument for every {% raw %}<span class="math inline">\(e,a\)</span>{% endraw %} containing the boundary gives the intersection of all those half-spaces, which is precisely its closed convex hull.</p>
</div>
<div class="proof">
<p><em>Proof.</em> Recall the half-space of {% raw %}<span class="math inline">\(\mathbb R^n\)</span>{% endraw %} can be written as </p>

{% raw %}<div class="math display">\[H \triangleq \{x \in \mathbb R^n : \langle x , e \rangle \leq a \} ~,\]</div>{% endraw %}
<p> where {% raw %}<span class="math inline">\(a \in \mathbb R\)</span>{% endraw %} and {% raw %}<span class="math inline">\(e \in \mathbb S^{n-1}\)</span>{% endraw %}. Then, the function {% raw %}<span class="math inline">\(\varphi(x) = \langle e, x \rangle\)</span>{% endraw %} is harmonic by Proposition <a href="#prop:minimal-harmonic" data-reference-type="ref" data-reference="prop:minimal-harmonic">3</a>, hence—by the maximum principle—{% raw %}<span class="math inline">\(\varphi(x)\)</span>{% endraw %} attains its maximum on {% raw %}<span class="math inline">\(\partial \Sigma\)</span>{% endraw %}. ◻</p>

</div>
<div id="result-5" class="remark" data-note-number="5" data-note-kind="Remark">
<p><strong>Remark 5.</strong> A supporting hyperplane for a compact minimal submanifold meets its boundary. Interior contact is possible only if the corresponding linear function is constant on that connected component, in which case the entire component lies in the hyperplane. Thus “first contact must be on the boundary” does not exclude simultaneous interior contact in the planar case.</p>
</div>
<div id="prop:monotonicity-formula" class="proposition" data-note-number="6" data-note-kind="Proposition">
<p><strong>Proposition 6</strong> (The Monotonicity Formula).  Suppose {% raw %}<span class="math inline">\(\Sigma \subset \mathbb R^n\)</span>{% endraw %} is a minimal submanifold, and {% raw %}<span class="math inline">\(x_0 \in \mathbb R^n\)</span>{% endraw %}. Then, for all {% raw %}<span class="math inline">\(0 &lt; s &lt; t\)</span>{% endraw %}, </p>

{% raw %}<span id="eq:monotonicity-formula"></span><div class="math display">\[\begin{aligned}
 
        \frac{\operatorname{Vol}(B_t(x_0)\cap \Sigma)}{t^k} - \frac{\operatorname{Vol}(B_s(x_0)\cap \Sigma)}{s^k} = \int_{(B_t(x_0)\setminus B_s(x_0)) \cap \Sigma} \frac{|(x-x_0)^\perp|^2}{|x-x_0|^{k+2}} ~.
    
\end{aligned}\tag{12}\]</div>{% endraw %}
<p>Here {% raw %}<span class="math inline">\(\Sigma^k\)</span>{% endraw %} is a smooth properly immersed minimal submanifold in a neighborhood of {% raw %}<span class="math inline">\(\overline B_R(x_0)\)</span>{% endraw %}, with no boundary there, and {% raw %}<span class="math inline">\(0&lt;s&lt;t&lt;R\)</span>{% endraw %}. Volume counts immersion multiplicity; in the embedded case it is the usual induced volume. Properness ensures compact integration domains. Boundary terms are required if the balls meet {% raw %}<span class="math inline">\(\partial\Sigma\)</span>{% endraw %}, so the displayed formula is not asserted across such a boundary.</p>
</div>

<div class="proof">
<p><em>Proof.</em> Put {% raw %}<span class="math inline">\(z=x-x_0\)</span>{% endraw %}, {% raw %}<span class="math inline">\(r=|z|\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(A(\rho)=\operatorname{Vol}(\Sigma\cap B_\rho(x_0))\)</span>{% endraw %}. Since {% raw %}<span class="math inline">\(D_Ez=E\)</span>{% endraw %} for every ambient vector,</p>
<p> {% raw %}<div class="math display">\[\nabla_\Sigma r^2=2z^\top,\qquad \operatorname{div}_\Sigma z=k,\qquad \Delta_\Sigma r^2=2\operatorname{div}_\Sigma z^\top=2k.\]</div>{% endraw %}</p>
<p> The last equality uses {% raw %}<span class="math inline">\(\operatorname{div}_\Sigma z^\perp=-\langle z,H\rangle=0\)</span>{% endraw %}. Away from {% raw %}<span class="math inline">\(z=0\)</span>{% endraw %},</p>
<p> {% raw %}<div class="math display">\[\nabla_\Sigma r=z^\top/r,\qquad |\nabla_\Sigma r|=|z^\top|/r.\]</div>{% endraw %}</p>
<p> For a regular radius {% raw %}<span class="math inline">\(\rho\)</span>{% endraw %}, the outward conormal of {% raw %}<span class="math inline">\(\Sigma\cap B_\rho\)</span>{% endraw %} is {% raw %}<span class="math inline">\(\nabla_\Sigma r/|\nabla_\Sigma r|\)</span>{% endraw %}. The divergence theorem gives</p>
<p> {% raw %}<div class="math display">\[kA(\rho)=\rho\int_{\Sigma\cap\partial B_\rho}|\nabla_\Sigma r|\,d\sigma =\int_{\Sigma\cap\partial B_\rho}|z^\top|\,d\sigma.\]</div>{% endraw %}</p>
<p> Coarea gives, for almost every radius,</p>
<p> {% raw %}<div class="math display">\[A'(\rho)=\int_{\Sigma\cap\partial B_\rho}\frac1{|\nabla_\Sigma r|}\,d\sigma =\int_{\Sigma\cap\partial B_\rho}\frac{\rho}{|z^\top|}\,d\sigma.\]</div>{% endraw %}</p>
<p> Combining these two identities, with all powers of {% raw %}<span class="math inline">\(\rho\)</span>{% endraw %} retained, yields</p>
<p> {% raw %}<span id="eq:apply-def-step4"></span><div class="math display">\[\begin{aligned} \frac d{d\rho}\bigl(\rho^{-k}A(\rho)\bigr) &amp;=\rho^{-k-1}\int_{\Sigma\cap\partial B_\rho} \left(\frac{\rho^2}{|z^\top|}-|z^\top|\right)d\sigma\\ &amp;=\rho^{-k-1}\int_{\Sigma\cap\partial B_\rho} \frac{|z^\perp|^2}{|z^\top|}\,d\sigma. \end{aligned}\tag{13}\]</div>{% endraw %}</p>
<p> Integrate from {% raw %}<span class="math inline">\(s\)</span>{% endraw %} to {% raw %}<span class="math inline">\(t\)</span>{% endraw %}. Coarea cancels the factor {% raw %}<span class="math inline">\(|\nabla_\Sigma r|=|z^\top|/r\)</span>{% endraw %}, giving</p>
<p> {% raw %}<div class="math display">\[t^{-k}A(t)-s^{-k}A(s) =\int_{\Sigma\cap(B_t\setminus B_s)} \frac{|z^\perp|^2}{r^{k+2}}\,d\mu_\Sigma.\]</div>{% endraw %}</p>
<p></p>
<p>To justify the almost-everywhere operations, the critical set of {% raw %}<span class="math inline">\(r\)</span>{% endraw %} away from zero has {% raw %}<span class="math inline">\(k\)</span>{% endraw %}-dimensional measure zero. Indeed, at almost every density point of the zero set of the smooth vector field {% raw %}<span class="math inline">\(\nabla_\Sigma r^2\)</span>{% endraw %}, its derivative vanishes: difference quotients along points of that zero set determine every direction. Its trace would then be zero, contradicting {% raw %}<span class="math inline">\(\Delta_\Sigma r^2=2k&gt;0\)</span>{% endraw %}. Coarea on the complement therefore shows that {% raw %}<span class="math inline">\(A\)</span>{% endraw %} is absolutely continuous on compact radius intervals away from zero. Sard's theorem supplies regular radii of full measure. Each level set has zero {% raw %}<span class="math inline">\(k\)</span>{% endraw %}-volume by the same argument, so continuity extends the integrated identity to every {% raw %}<span class="math inline">\(0&lt;s&lt;t&lt;R\)</span>{% endraw %}. The right side is nonnegative, proving monotonicity as well as the exact formula. ◻</p>
</div>

<div id="prop:mean-value-inequality" class="proposition" data-note-number="7" data-note-kind="Proposition">
<p><strong>Proposition 7 (Weighted monotonicity identity).</strong> Under the geometric hypotheses of Proposition 6, let {% raw %}<span class="math inline">\(f\in C^2(\Sigma)\)</span>{% endraw %}, put {% raw %}<span class="math inline">\(z=x-x_0,\ r=|z|\)</span>{% endraw %}, and let {% raw %}<span class="math inline">\(0&lt;s&lt;t&lt;R\)</span>{% endraw %}. Then</p>
<p> {% raw %}<span id="eq:mean-value-inequality"></span><div class="math display">\[\begin{aligned} t^{-k}\int_{\Sigma\cap B_t(x_0)}f\,d\mu-s^{-k}\int_{\Sigma\cap B_s(x_0)}f\,d\mu &amp;=\int_{\Sigma\cap(B_t(x_0)\setminus B_s(x_0))} f\,\frac{|z^\perp|^2}{r^{k+2}}\,d\mu\\ &amp;\quad+\frac12\int_s^t\rho^{-k-1} \int_{\Sigma\cap B_\rho(x_0)}(\rho^2-r^2)\Delta_\Sigma f\,d\mu\,d\rho. \end{aligned}\tag{14}\]</div>{% endraw %}</p>
<p> In particular, the normalized integrals are nondecreasing if {% raw %}<span class="math inline">\(f\geq0\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\Delta_\Sigma f\geq0\)</span>{% endraw %}.</p>
</div>
<div class="proof">
<p><em>Proof.</em> For a regular radius {% raw %}<span class="math inline">\(\rho\)</span>{% endraw %}, apply Green's identity to {% raw %}<span class="math inline">\(f\)</span>{% endraw %} and {% raw %}<span class="math inline">\(r^2\)</span>{% endraw %}, using {% raw %}<span class="math inline">\(\Delta_\Sigma r^2=2k\)</span>{% endraw %}, {% raw %}<span class="math inline">\(r^2=\rho^2\)</span>{% endraw %} on the boundary, and {% raw %}<span class="math inline">\(\int_{\partial D}\partial_\eta f=\int_D\Delta_\Sigma f\)</span>{% endraw %}. This gives</p>
<p> {% raw %}<div class="math display">\[2k\int_{\Sigma\cap B_\rho}f =2\rho\int_{\Sigma\cap\partial B_\rho}f|\nabla_\Sigma r| -\int_{\Sigma\cap B_\rho}(\rho^2-r^2)\Delta_\Sigma f.\]</div>{% endraw %}</p>
<p> Let {% raw %}<span class="math inline">\(G(\rho)=\rho^{-k}\int_{\Sigma\cap B_\rho}f\)</span>{% endraw %}. Weighted coarea and this identity give, almost everywhere,</p>
<p> {% raw %}<div class="math display">\[G'(\rho)=\rho^{-k-1}\int_{\Sigma\cap\partial B_\rho} f\,\frac{|z^\perp|^2}{|z^\top|} +\frac12\rho^{-k-1}\int_{\Sigma\cap B_\rho}(\rho^2-r^2)\Delta_\Sigma f.\]</div>{% endraw %}</p>
<p> Integrating the first term by coarea gives precisely the annular integral in the statement. The second term already has the required form. Compactness of the spatial domains and {% raw %}<span class="math inline">\(C^2\)</span>{% endraw %} regularity justify the weighted integrals and their absolute continuity, using the same zero-measure critical set as in Proposition 6. Notice that the annuli are level sets of the radial distance {% raw %}<span class="math inline">\(r\)</span>{% endraw %}, not of the arbitrary test function {% raw %}<span class="math inline">\(f\)</span>{% endraw %}. ◻</p>
</div>

<div id="result-8" class="corollary" data-note-number="8" data-note-kind="Corollary">
<p><strong>Corollary 8 (Mean value estimate).</strong> Let {% raw %}<span class="math inline">\(\Sigma^k\)</span>{% endraw %} be smoothly embedded and minimal near {% raw %}<span class="math inline">\(\overline B_s(x_0)\)</span>{% endraw %}, with compact intersection there and no boundary in a neighborhood of that closed ball, and let {% raw %}<span class="math inline">\(x_0\in\Sigma\)</span>{% endraw %}. If {% raw %}<span class="math inline">\(f\in C^2\)</span>{% endraw %} is nonnegative and</p>
<p> {% raw %}<div class="math display">\[\Delta_\Sigma f\geq-\lambda s^{-2}f,\qquad \lambda\geq0,\]</div>{% endraw %}</p>
<p> then, writing {% raw %}<span class="math inline">\(\omega_k=\operatorname{Vol}(B_1\subset\mathbb R^k)\)</span>{% endraw %},</p>
<p> {% raw %}<span id="eq:monotonicity-bound"></span><div class="math display">\[f(x_0)\leq\frac{e^{\lambda/4}}{\omega_k s^k} \int_{\Sigma\cap B_s(x_0)}f\,d\mu \leq\frac{e^{\lambda/2}}{\omega_k s^k}\int_{\Sigma\cap B_s(x_0)}f\,d\mu.\tag{15}\]</div>{% endraw %}</p>
<p> Thus the original stated constant {% raw %}<span class="math inline">\(e^{\lambda/2}\)</span>{% endraw %} is valid, and the calculation gives the stronger {% raw %}<span class="math inline">\(e^{\lambda/4}\)</span>{% endraw %}.</p>
</div>
<div class="proof">
<p><em>Proof.</em> Set {% raw %}<span class="math inline">\(G(t)=t^{-k}\int_{\Sigma\cap B_t(x_0)}f\)</span>{% endraw %}. The boundary term in the derivative identity of Proposition 7 is nonnegative. Since {% raw %}<span class="math inline">\(0\leq t^2-r^2\leq t^2\)</span>{% endraw %} on {% raw %}<span class="math inline">\(B_t(x_0)\)</span>{% endraw %},</p>
<p> {% raw %}<div class="math display">\[G'(t)\geq-\frac{\lambda}{2s^2}t^{-k-1} \int_{\Sigma\cap B_t(x_0)}(t^2-r^2)f \geq-\frac{\lambda t}{2s^2}G(t).\]</div>{% endraw %}</p>
<p> Hence {% raw %}<span class="math inline">\(e^{\lambda t^2/(4s^2)}G(t)\)</span>{% endraw %} is nondecreasing. This integrating-factor argument does not divide by {% raw %}<span class="math inline">\(G\)</span>{% endraw %}, so it also applies when {% raw %}<span class="math inline">\(f\)</span>{% endraw %} vanishes. Smoothness of the embedded submanifold and continuity of {% raw %}<span class="math inline">\(f\)</span>{% endraw %} give</p>
<p> {% raw %}<div class="math display">\[\lim_{t\downarrow0}G(t)=\omega_k f(x_0)\]</div>{% endraw %}</p>
<p> by expressing {% raw %}<span class="math inline">\(\Sigma\)</span>{% endraw %} locally as a graph over its tangent plane, whose derivative vanishes at {% raw %}<span class="math inline">\(x_0\)</span>{% endraw %}. Compare this limit with the value at {% raw %}<span class="math inline">\(s\)</span>{% endraw %} to obtain the estimate. ◻</p>
</div>
<div id="refs" class="references csl-bib-body hanging-indent" data-entry-spacing="0" role="list">
<div id="ref-carmo_riemannian_1992" class="csl-entry" role="listitem">
Carmo, Manfredo Perdigão do. 1992. <em>Riemannian Geometry</em>. Mathematics. Theory &amp; Applications. Boston: Birkhäuser.
</div>
</div>

<p class="note-reading">Reading: Carmo (1992), Riemannian geometry.</p>


<nav class="note-series" aria-label="Notes in this series"><p>Previous: <a href="{% post_url 2023-10-09-sphere-theorem %}">Sphere Theorem</a> · Next: <a href="{% post_url 2023-12-03-bernsteins-theorem-and-the-gauss-map %}">Bernstein’s Theorem and the Gauss Map</a></p></nav>

</div>
