---
layout: "post"
title: "Parallel Transport"
date: "2022-08-14"
tags: ["math", "differential geometry"]
excerpt: "Parallel Transport. Notes on differential geometry."
note_series: "Differential geometry"
note_source: "assets/notes/Differential Geometry - Notes/diff-geo.tex"
---

<div class="note-content" markdown="0">

<p>Let {% raw %}<span class="math inline">\((M,g)\)</span>{% endraw %} be a smooth Riemannian manifold. Write {% raw %}<span class="math inline">\(\nabla\)</span>{% endraw %} for its Levi–Civita connection and {% raw %}<span class="math inline">\(T_pM\)</span>{% endraw %} for the tangent space at {% raw %}<span class="math inline">\(p\)</span>{% endraw %}. The coordinate conventions are those in <a href="{% post_url 2022-03-17-tangent-spaces-and-riemannian-metrics %}">tangent spaces and derivations</a>.</p>

<div id="subsec:parallel-transport" data-note-section="title">

</div>
<p>A connection gives a way to keep a tangent vector parallel while its base point moves along a curve. The resulting transport compares the tangent spaces at the endpoints. Although the transport preserves inner products for the Levi–Civita connection, it can depend on the path taken. Again, details related to flows on vector fields can be found in Appendix <a href="{% post_url 2024-02-22-vector-fields-and-their-flows %}#app:flows" data-reference-type="ref" data-reference="app:flows">Vector Fields and Their Flows</a>.</p>

<div id="result-1" class="definition" data-note-number="1" data-note-kind="Definition">
<p><strong>Definition 1</strong>.  <em>Vector field along curve {% raw %}<span class="math inline">\(c\)</span>{% endraw %}</em>, denoted {% raw %}<span class="math inline">\(X\)</span>{% endraw %}, where {% raw %}<span class="math inline">\(c : I \to M\)</span>{% endraw %} and {% raw %}<span class="math inline">\(I \subset \mathbb R\)</span>{% endraw %}, is a map {% raw %}<span class="math inline">\(X: I \to TM\)</span>{% endraw %} such that {% raw %}<span class="math inline">\(X(t) \in T_{c(t)} M\)</span>{% endraw %} for all {% raw %}<span class="math inline">\(t \in I\)</span>{% endraw %}.</p>

</div>
<div id="thm:parallel-transport" class="theorem" data-note-number="2" data-note-kind="Theorem">
<p><strong>Theorem 2.</strong> Let {% raw %}<span class="math inline">\(c:I\to M\)</span>{% endraw %} be a smooth curve and {% raw %}<span class="math inline">\(\nabla\)</span>{% endraw %} a smooth connection. There is a unique real-linear covariant derivative {% raw %}<span class="math inline">\(D_t\)</span>{% endraw %} on smooth vector fields along {% raw %}<span class="math inline">\(c\)</span>{% endraw %} such that</p>
<p> {% raw %}<div class="math display">\[D_t(fY)=f'Y+fD_tY\quad(f\in C^\infty(I)),\]</div>{% endraw %}</p>
<p> and, whenever {% raw %}<span class="math inline">\(Y(t)=X(c(t))\)</span>{% endraw %} for a smooth field {% raw %}<span class="math inline">\(X\)</span>{% endraw %} on a neighbourhood of the curve, {% raw %}<span class="math inline">\(D_tY=\nabla_{\dot c}X\)</span>{% endraw %}. The same construction applies on each smooth piece of a piecewise smooth curve.</p>
</div>
<div class="proof">
<p><em>Proof.</em> In local coordinates write {% raw %}<span class="math inline">\(Y(t)=Y^j(t)\partial_j|_{c(t)}\)</span>{% endraw %}. The required rules force</p>
<p> {% raw %}<div class="math display">\[D_tY=\left(\dot Y^k+\Gamma^k_{ij}(c(t))\dot c^iY^j\right)\partial_k.\]</div>{% endraw %}</p>
<p> Indeed each coordinate basis field extends to the chart, so the extension rule fixes its derivative; the product rule then fixes the derivative of every linear combination. This proves local uniqueness even for fields along a self-intersecting curve, which need not extend to a single ambient field.</p>
<p>Conversely, the displayed formula is linear and satisfies the product rule. If {% raw %}<span class="math inline">\(Y=X\circ c\)</span>{% endraw %}, the chain rule gives {% raw %}<span class="math inline">\(\dot Y^k=(\partial_iX^k)(c)\dot c^i\)</span>{% endraw %}, so the formula is exactly {% raw %}<span class="math inline">\(\nabla_{\dot c}X\)</span>{% endraw %}. Formulas from two charts agree on their overlap: express one coordinate frame as a smooth linear combination of the other, apply the product rule, and use the connection transformation law for the derivatives of those extending frame fields. Equivalently, uniqueness for the forced expression in any local frame identifies them. Thus the local operators patch to a global operator along {% raw %}<span class="math inline">\(c\)</span>{% endraw %}. ◻</p>
</div>
<div id="def:parallel-vector-field" class="definition" data-note-number="3" data-note-kind="Definition">
<p><strong>Definition 3</strong>.  A vector field {% raw %}<span class="math inline">\(X\)</span>{% endraw %} along a curve {% raw %}<span class="math inline">\(c\)</span>{% endraw %} is <em>parallel along {% raw %}<span class="math inline">\(c\)</span>{% endraw %}</em> if {% raw %}<span class="math inline">\(\frac{\Dif X}{\dif t} = 0\)</span>{% endraw %}.</p>

</div>
<div id="def:parallel-transport" class="definition" data-note-number="4" data-note-kind="Definition">
<p><strong>Definition 4 (Parallel transport).</strong> Fix {% raw %}<span class="math inline">\(t_0\in I\)</span>{% endraw %}. For {% raw %}<span class="math inline">\(v\in T_{c(t_0)}M\)</span>{% endraw %}, let {% raw %}<span class="math inline">\(X_v\)</span>{% endraw %} be the unique parallel field with {% raw %}<span class="math inline">\(X_v(t_0)=v\)</span>{% endraw %}. Parallel transport to time {% raw %}<span class="math inline">\(t\)</span>{% endraw %} is</p>
<p> {% raw %}<div class="math display">\[P_{t\leftarrow t_0}:T_{c(t_0)}M\to T_{c(t)}M,\qquad P_{t\leftarrow t_0}v=X_v(t).\]</div>{% endraw %}</p>
<p> When {% raw %}<span class="math inline">\(t_0=0\)</span>{% endraw %}, we abbreviate this to {% raw %}<span class="math inline">\(P_t\)</span>{% endraw %}. It maps an initial vector to a vector in the endpoint fibre, not to the entire field.</p>
<p>Existence and uniqueness follow from the linear system</p>
<p> {% raw %}<div class="math display">\[\dot X^k=-\Gamma^k_{ij}(c(t))\dot c^iX^j.\]</div>{% endraw %}</p>
<p> On every compact subinterval covered by one chart its coefficients are bounded; the estimate {% raw %}<span class="math inline">\(|X(t)|\leq |X(t_0)|\exp(\int\|A(s)\|ds)\)</span>{% endraw %} rules out finite-time blow-up. A finite chart subdivision covers any compact portion of the curve, and uniqueness patches the solutions. The resulting field exists at every time of {% raw %}<span class="math inline">\(I\)</span>{% endraw %}. Linearity of the equation makes {% raw %}<span class="math inline">\(P_{t\leftarrow t_0}\)</span>{% endraw %} linear. Uniqueness gives {% raw %}<span class="math inline">\(P_{u\leftarrow t}P_{t\leftarrow s}=P_{u\leftarrow s}\)</span>{% endraw %}, so reversed transport is its inverse.</p>
</div>
<div id="result-5" class="proposition" data-note-number="5" data-note-kind="Proposition">
<p><strong>Proposition 5</strong>.  The parallel transport defines an isometry from {% raw %}<span class="math inline">\(T_{c(0)} M\)</span>{% endraw %} to {% raw %}<span class="math inline">\(T_{c(t)} M\)</span>{% endraw %} for all {% raw %}<span class="math inline">\(t\)</span>{% endraw %}. More generally, if {% raw %}<span class="math inline">\(X\)</span>{% endraw %} and {% raw %}<span class="math inline">\(Y\)</span>{% endraw %} are vector fields along curve {% raw %}<span class="math inline">\(c\)</span>{% endraw %}, then </p>

{% raw %}<div class="math display">\[\begin{aligned}
        \dod{}{t} \langle X(t),Y(t) \rangle = \left\langle \frac{\Dif X(t)}{\dif t}, Y(t) \right\rangle + \left\langle X(t), \frac{\Dif Y(t)}{\dif t} \right\rangle ~.
    
\end{aligned}\]</div>{% endraw %}
<p><em>Proof.</em> Expand {% raw %}<span class="math inline">\(\langle X,Y\rangle=g_{ij}(c)X^iY^j\)</span>{% endraw %} and differentiate. The terms from {% raw %}<span class="math inline">\(\dot X\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\dot Y\)</span>{% endraw %} are immediate. Metric compatibility,</p>
<p> {% raw %}<div class="math display">\[\partial_k g_{ij}=g_{\ell j}\Gamma^\ell_{ki}+g_{i\ell}\Gamma^\ell_{kj},\]</div>{% endraw %}</p>
<p> rewrites the remaining metric-derivative term as the two connection terms in the stated identity. If {% raw %}<span class="math inline">\(X,Y\)</span>{% endraw %} are parallel, both right-hand terms vanish, so their inner product is constant. Transport is already a linear isomorphism by the preceding ODE argument; preservation of all inner products makes it an isometry. ◻</p>
</div>
<span id="eq:eq1"></span><span id="eq:eq2"></span><span id="eq:eq3"></span><span id="eq:eq4"></span><span id="eq:eq5"></span><span id="eq:eq6"></span>
<div id="result-6" class="example" data-note-number="6" data-note-kind="Example">
<p><strong>Example 6 (Transport around a latitude).</strong> On the round sphere of radius {% raw %}<span class="math inline">\(R\)</span>{% endraw %}, let {% raw %}<span class="math inline">\(\theta\)</span>{% endraw %} denote <em>colatitude</em>, measured from the north pole, and let {% raw %}<span class="math inline">\(\varphi\)</span>{% endraw %} denote longitude. Fix {% raw %}<span class="math inline">\(0&lt;\theta_0&lt;\pi\)</span>{% endraw %} and traverse the circle {% raw %}<span class="math inline">\(\theta=\theta_0\)</span>{% endraw %} with increasing {% raw %}<span class="math inline">\(\varphi\)</span>{% endraw %} from {% raw %}<span class="math inline">\(0\)</span>{% endraw %} to {% raw %}<span class="math inline">\(2\pi\)</span>{% endraw %}. The metric is {% raw %}<span class="math inline">\(R^2(d\theta^2+\sin^2\theta\,d\varphi^2)\)</span>{% endraw %}. Its relevant Christoffel symbols are</p>
<p> {% raw %}<div class="math display">\[\Gamma^\theta_{\varphi\varphi}=-\sin\theta\cos\theta,\qquad \Gamma^\varphi_{\theta\varphi}=\Gamma^\varphi_{\varphi\theta}=\cot\theta.\]</div>{% endraw %}</p>
<p> These follow from {% raw %}<span class="math inline">\(\partial_\theta g_{\varphi\varphi}=2R^2\sin\theta\cos\theta\)</span>{% endraw %}; all other derivatives needed here vanish. Taking longitude as the curve parameter, parallel transport is therefore</p>
<p> {% raw %}<div class="math display">\[\frac{dV^\theta}{d\varphi}-\sin\theta_0\cos\theta_0\,V^\varphi=0,\qquad \frac{dV^\varphi}{d\varphi}+\cot\theta_0\,V^\theta=0.\tag{1}\]</div>{% endraw %}</p>
<p> Use the orthonormal frame {% raw %}<span class="math inline">\(e_\theta=R^{-1}\partial_\theta\)</span>{% endraw %}, {% raw %}<span class="math inline">\(e_\varphi=(R\sin\theta_0)^{-1}\partial_\varphi\)</span>{% endraw %}. Writing {% raw %}<span class="math inline">\(V=a e_\theta+b e_\varphi\)</span>{% endraw %}, or {% raw %}<span class="math inline">\(a=RV^\theta\)</span>{% endraw %}, {% raw %}<span class="math inline">\(b=R\sin\theta_0V^\varphi\)</span>{% endraw %}, gives</p>
<p> {% raw %}<div class="math display">\[a'=\cos\theta_0\,b,\qquad b'=-\cos\theta_0\,a.\]</div>{% endraw %}</p>
<p> Consequently</p>
<p> {% raw %}<div class="math display">\[a''+\cos^2\theta_0\,a=0,\tag{2}\]</div>{% endraw %}</p>
<p></p>
<p> {% raw %}<div class="math display">\[b''+\cos^2\theta_0\,b=0.\tag{3}\]</div>{% endraw %}</p>
<p> The original first-order system couples the integration constants. For arbitrary initial components {% raw %}<span class="math inline">\((a_0,b_0)\)</span>{% endraw %}, its solution is</p>
<p> {% raw %}<div class="math display">\[\binom{a(\varphi)}{b(\varphi)}= \begin{pmatrix}\cos(\varphi\cos\theta_0)&amp;\sin(\varphi\cos\theta_0)\\ -\sin(\varphi\cos\theta_0)&amp;\cos(\varphi\cos\theta_0)\end{pmatrix} \binom{a_0}{b_0}.\]</div>{% endraw %}</p>
<p> In particular a unit initial vector {% raw %}<span class="math inline">\(e_\theta\)</span>{% endraw %} gives</p>
<p> {% raw %}<div class="math display">\[V^\theta(\varphi)=R^{-1}\cos(\varphi\cos\theta_0),\qquad V^\varphi(\varphi)=-\frac{\sin(\varphi\cos\theta_0)}{R\sin\theta_0}.\tag{4}\]</div>{% endraw %}</p>
<p> Its squared norm is {% raw %}<span class="math inline">\(a^2+b^2=1\)</span>{% endraw %}, as parallel transport requires. The coordinate frame agrees at longitudes zero and {% raw %}<span class="math inline">\(2\pi\)</span>{% endraw %}, so the signed rotation in the ordered frame {% raw %}<span class="math inline">\((e_\theta,e_\varphi)\)</span>{% endraw %} is {% raw %}<span class="math inline">\(-2\pi\cos\theta_0\)</span>{% endraw %} modulo {% raw %}<span class="math inline">\(2\pi\)</span>{% endraw %}. If latitude is {% raw %}<span class="math inline">\(\lambda=\pi/2-\theta_0\)</span>{% endraw %}, this is {% raw %}<span class="math inline">\(-2\pi\sin\lambda\)</span>{% endraw %}. A cosine comparison determines only an unsigned angle modulo sign; the first-order rotation matrix supplies the sign. At the equator the transport returns without rotation. The poles are outside these latitude coordinates, but the rotation tends to zero modulo {% raw %}<span class="math inline">\(2\pi\)</span>{% endraw %} as the loop shrinks to a pole. This is the geometric parallel-transport contribution to the idealized Foucault precession.</p>
</div>
<div id="result-7" class="remark" data-note-number="7" data-note-kind="Remark">
<p><strong>Remark 7</strong>.  It is common to use {% raw %}<span class="math inline">\(\nabla\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\frac{\Dif}{\dif t}\)</span>{% endraw %} interchangeably. For statements of results that involve differentiable (Riemannian) manifolds, {% raw %}<span class="math inline">\(\nabla\)</span>{% endraw %} will always mean the Levi-Civita connection, unless otherwise stated. The introduction of the notation {% raw %}<span class="math inline">\(\frac{\Dif}{\dif t}\)</span>{% endraw %} is to make clear the construction of this (uniquely defined!) operator.</p>

</div>
<p>The final application concerns geodesic symmetries. To ask whether reflecting geodesics through a point preserves the metric, we first define an isometry.</p>

<div id="def:isometry" class="definition" data-note-number="8" data-note-kind="Definition">
<p><strong>Definition 8</strong>.  Let {% raw %}<span class="math inline">\(M\)</span>{% endraw %}, {% raw %}<span class="math inline">\(N\)</span>{% endraw %} be differentiable manifolds. Let {% raw %}<span class="math inline">\(h : M \to N\)</span>{% endraw %} be a diffeomorphism. {% raw %}<span class="math inline">\(h\)</span>{% endraw %} is an <em>isometry</em> if for all {% raw %}<span class="math inline">\(p \in M\)</span>{% endraw %} and {% raw %}<span class="math inline">\(v,w \in T_p M\)</span>{% endraw %}, </p>

{% raw %}<div class="math display">\[\langle v,w \rangle_M = \langle \dif h(v), \dif h(w) \rangle_N\]</div>{% endraw %}
<p> where {% raw %}<span class="math inline">\(\langle \cdot,\cdot \rangle_M\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\langle \cdot,\cdot \rangle_N\)</span>{% endraw %} denote the Riemannian metrics on {% raw %}<span class="math inline">\(M\)</span>{% endraw %} and {% raw %}<span class="math inline">\(N\)</span>{% endraw %}, respectively.</p>

</div>
<div id="def:local-isometry" class="definition" data-note-number="9" data-note-kind="Definition">
<p><strong>Definition 9.</strong> A smooth map {% raw %}<span class="math inline">\(h:M\to N\)</span>{% endraw %} is a local isometry if every {% raw %}<span class="math inline">\(p\in M\)</span>{% endraw %} has an open neighbourhood {% raw %}<span class="math inline">\(U\)</span>{% endraw %} such that {% raw %}<span class="math inline">\(h|_U\)</span>{% endraw %} is a diffeomorphism onto an open subset of {% raw %}<span class="math inline">\(N\)</span>{% endraw %} and preserves the metric there. The map need not be globally one-to-one.</p>
</div>
<div id="rem:locally-symmetric-spaces-preserve-riemann-curvature" class="remark" data-note-number="10" data-note-kind="Remark">
<p><strong>Remark 10 (Locally symmetric spaces).</strong> Choose a normal neighbourhood {% raw %}<span class="math inline">\(U=\exp_p(B_\varepsilon(0))\)</span>{% endraw %}. The geodesic symmetry at its centre is</p>
<p> {% raw %}<div class="math display">\[s_p(\exp_pv)=\exp_p(-v).\]</div>{% endraw %}</p>
<p> It fixes {% raw %}<span class="math inline">\(p\)</span>{% endraw %}, squares to the identity, and has differential {% raw %}<span class="math inline">\((ds_p)_p=-I\)</span>{% endraw %}. A manifold is locally symmetric when each such map is an isometry on a sufficiently small neighbourhood. Equivalently, each point admits a local isometry fixing it with differential {% raw %}<span class="math inline">\(-I\)</span>{% endraw %}: an isometry preserves the Levi–Civita connection by the Koszul uniqueness theorem, hence takes the geodesic with initial data {% raw %}<span class="math inline">\((p,v)\)</span>{% endraw %} to the one with data {% raw %}<span class="math inline">\((p,-v)\)</span>{% endraw %}. A symmetric space has such symmetries as global isometries at every point.</p>
<p>We prove the equivalent curvature criterion {% raw %}<span class="math inline">\(\nabla R=0\)</span>{% endraw %}. An isometry preserves the connection, its curvature, and the covariant derivative of curvature. Thus, at a fixed point of a symmetry,</p>
<p> {% raw %}<div class="math display">\[(ds_p)_p\bigl((\nabla_XR)(Y,Z)W\bigr) =(\nabla_{(ds_p)X}R)((ds_p)Y,(ds_p)Z)(ds_p)W.\]</div>{% endraw %}</p>
<p> The left side is the negative of the original vector, whereas the four input signs on the right multiply to plus. The tensor must therefore be zero. Since every point is a symmetry centre, {% raw %}<span class="math inline">\(\nabla R=0\)</span>{% endraw %} everywhere.</p>
<p>Conversely assume {% raw %}<span class="math inline">\(\nabla R=0\)</span>{% endraw %}, and fix {% raw %}<span class="math inline">\(v,w\in T_pM\)</span>{% endraw %} with {% raw %}<span class="math inline">\(v\)</span>{% endraw %} small. Let {% raw %}<span class="math inline">\(\gamma_v(t)=\exp_p(tv)\)</span>{% endraw %} for {% raw %}<span class="math inline">\(0\leq t\leq1\)</span>{% endraw %}, and let {% raw %}<span class="math inline">\(P_v(t)\)</span>{% endraw %} be parallel transport along it. The variation {% raw %}<span class="math inline">\(\exp_p(t(v+sw))\)</span>{% endraw %} has variational field {% raw %}<span class="math inline">\(J_v\)</span>{% endraw %} satisfying</p>
<p> {% raw %}<div class="math display">\[D_t^2J_v+R(\dot\gamma_v,J_v)\dot\gamma_v=0,\qquad J_v(0)=0,\quad D_tJ_v(0)=w.\]</div>{% endraw %}</p>
<p> This equation follows by differentiating the geodesic equation and using Lemma 26 in the connections note, with the curvature convention used there. Its endpoint is {% raw %}<span class="math inline">\(J_v(1)=(d\exp_p)_v w\)</span>{% endraw %}.</p>
<p>Write {% raw %}<span class="math inline">\(j_v(t)=P_v(t)^{-1}J_v(t)\)</span>{% endraw %}. Parallelness of {% raw %}<span class="math inline">\(R\)</span>{% endraw %} and of {% raw %}<span class="math inline">\(\dot\gamma_v\)</span>{% endraw %} turns the equation into the constant-coefficient vector equation</p>
<p> {% raw %}<div class="math display">\[j_v''+R_p(v,j_v)v=0,\qquad j_v(0)=0,\quad j_v'(0)=w.\]</div>{% endraw %}</p>
<p> For {% raw %}<span class="math inline">\(-v\)</span>{% endraw %} with initial variation {% raw %}<span class="math inline">\(-w\)</span>{% endraw %}, the coefficient is unchanged, since {% raw %}<span class="math inline">\(R_p(-v,z)(-v)=R_p(v,z)v\)</span>{% endraw %}. Uniqueness of this linear ODE gives {% raw %}<span class="math inline">\(j_{-v,-w}=-j_{v,w}\)</span>{% endraw %}. Parallel transport preserves inner products, so, for any {% raw %}<span class="math inline">\(w_1,w_2\)</span>{% endraw %},</p>
<p> {% raw %}<div class="math display">\[\left\langle(d\exp_p)_{-v}(-w_1),(d\exp_p)_{-v}(-w_2)\right\rangle =\left\langle(d\exp_p)_v w_1,(d\exp_p)_v w_2\right\rangle.\]</div>{% endraw %}</p>
<p> Differentiating {% raw %}<span class="math inline">\(s_p\circ\exp_p(v)=\exp_p(-v)\)</span>{% endraw %} shows this is exactly metric preservation by {% raw %}<span class="math inline">\(ds_p\)</span>{% endraw %}. Since {% raw %}<span class="math inline">\(\exp_p\)</span>{% endraw %} is a diffeomorphism on the normal ball, {% raw %}<span class="math inline">\(s_p\)</span>{% endraw %} is a local isometry. This proves the converse directly; the later Cartan local-isometry theorem provides a more general version of the same Jacobi-field comparison. No globally unique minimizing geodesic between arbitrary points was assumed.</p>
</div>
<div id="refs" class="references csl-bib-body hanging-indent" data-entry-spacing="0" role="list">
<div id="ref-carmo_riemannian_1992" class="csl-entry" role="listitem">
Carmo, Manfredo Perdigão do. 1992. <em>Riemannian Geometry</em>. Mathematics. Theory &amp; Applications. Boston: Birkhäuser.
</div>
</div>

<p class="note-reading">Reading: Carmo (1992), Riemannian geometry.</p>


<nav class="note-related" aria-label="Related notes"><p>Related notes: <a href="{% post_url 2024-02-22-vector-fields-and-their-flows %}">Vector Fields and Their Flows</a>; <a href="{% post_url 2022-05-11-connections-lie-brackets-and-curvature %}">Connections, Lie Brackets, and Curvature</a>; <a href="{% post_url 2023-03-19-application-cartans-theorem %}">Application: Cartan’s Theorem</a>.</p></nav>

<nav class="note-series" aria-label="Notes in this series"><p>Previous: <a href="{% post_url 2022-07-31-first-variation-formula %}">First Variation Formula</a> · Next: <a href="{% post_url 2022-08-27-sectional-curvature-ricci-curvature-and-space-forms %}">Sectional Curvature, Ricci Curvature, and Space Forms</a></p></nav>

</div>
