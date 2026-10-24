---
layout: "post"
title: "Jacobi Fields and Conjugate Points"
date: "2023-01-24"
tags: ["math", "differential geometry"]
excerpt: "The first result we will discuss is a characterization of Jacobi fields: they are variation fields of variations through geodesics."
note_series: "Differential geometry"
note_source: "assets/notes/Differential Geometry - Notes/diff-geo.tex"
redirect_from: ["/2023/01/24/jacobi-fields/", "/2023/02/07/conjugate-points/"]
---

<div class="note-content" markdown="0">

<p>Let {% raw %}<span class="math inline">\((M,g)\)</span>{% endraw %} be a smooth Riemannian manifold, with Levi–Civita connection {% raw %}<span class="math inline">\(\nabla\)</span>{% endraw %}. See the <a href="{% post_url 2022-05-11-connections-lie-brackets-and-curvature %}">connection notes</a> for the notation.</p>

<div id="sec:jacobi-field" data-note-section="title">

</div>
<p>How does curvature affect neighbouring geodesics? The relation between geometry and topology for surfaces in {% raw %}<span class="math inline">\(\mathbb R^3\)</span>{% endraw %} suggests asking for analogous consequences in higher dimensions. Jacobi fields measure the first-order separation of a family of geodesics, turning this question into a linear differential equation along one geodesic. Roughly speaking, positive curvature causes nearby geodesics to converge, while negative curvature causes them to spread out. To understand the topological consequences from this fact, we need a quantitative way to measure the effect of curvature on a family of geodesics.</p>

<p>We begin by differentiating the geodesic equation with respect to the variation parameter. Interchanging covariant derivatives introduces curvature, giving the Jacobi equation.</p>

<span id="eq:jacobi-equation"></span>
<div id="prop:jacobi-field-def" class="proposition" data-note-number="1" data-note-kind="Proposition">
<p><strong>Proposition 1.</strong> Let {% raw %}<span class="math inline">\(\Gamma(s,t)\)</span>{% endraw %} be a smooth variation for which every {% raw %}<span class="math inline">\(t\)</span>{% endraw %}-curve is an affinely parametrized geodesic, and set {% raw %}<span class="math inline">\(\gamma(t)=\Gamma(0,t)\)</span>{% endraw %}, {% raw %}<span class="math inline">\(J(t)=\partial_s\Gamma(0,t)\)</span>{% endraw %}. Then</p>
{% raw %}<div class="math display">\[D_t^2J+R(\gamma',J)\gamma'=0.\tag{1}\]</div>{% endraw %}
<p> This is the Jacobi equation in the convention {% raw %}<span class="math inline">\(R(X,Y)Z=\nabla_Y\nabla_XZ-\nabla_X\nabla_YZ+\nabla_{[X,Y]}Z\)</span>{% endraw %}.</p>
</div>
<div class="proof">
<p><em>Proof.</em> Write {% raw %}<span class="math inline">\(S=\partial_s\Gamma\)</span>{% endraw %} and {% raw %}<span class="math inline">\(T=\partial_t\Gamma\)</span>{% endraw %}, vector fields along the map, and let {% raw %}<span class="math inline">\(D_s,D_t\)</span>{% endraw %} denote the pullback covariant derivatives. In coordinates,</p>
{% raw %}<div class="math display">\[D_tT=\left(\partial_t^2x^k+\Gamma^k_{ij}\partial_tx^i\partial_tx^j\right)\partial_k=0\]</div>{% endraw %}
<p> by the geodesic equation. Torsion-freeness gives {% raw %}<span class="math inline">\(D_sT=D_tS\)</span>{% endraw %}, and the curvature commutator in our convention is {% raw %}<span class="math inline">\(D_tD_sV-D_sD_tV=R(S,T)V\)</span>{% endraw %}. Therefore</p>
{% raw %}<div class="math display">\[0=D_sD_tT=D_tD_sT-R(S,T)T=D_t^2S+R(T,S)T.\]</div>{% endraw %}
<p> Restriction to {% raw %}<span class="math inline">\(s=0\)</span>{% endraw %} proves (1). The pullback formulation is valid even when the variation map is not an immersion, so no independence of {% raw %}<span class="math inline">\(S,T\)</span>{% endraw %} is assumed. ◻</p>
</div>
<div id="result-2" class="remark" data-note-number="2" data-note-kind="Remark">
<p><strong>Remark 2.</strong> Primes on fields denote covariant differentiation along the geodesic. If another text uses {% raw %}<span class="math inline">\(R_{\mathrm{other}}=-R\)</span>{% endraw %}, its formula is {% raw %}<span class="math inline">\(J''+R_{\mathrm{other}}(J,\gamma')\gamma'=0\)</span>{% endraw %}. These are the same equation. With our convention a unit sphere has {% raw %}<span class="math inline">\(R(T,J)T=J\)</span>{% endraw %} for {% raw %}<span class="math inline">\(J\perp T\)</span>{% endraw %}, giving {% raw %}<span class="math inline">\(J''+J=0\)</span>{% endraw %}.</p>
</div>
<p>By Proposition <a href="#prop:jacobi-field-def" data-reference-type="ref" data-reference="prop:jacobi-field-def">1</a>, the Jacobi equation is linear and second order. Prescribing a field and its covariant derivative at one point therefore determines a solution along the given geodesic.</p>

<div id="prop:existence-uniquness-jacobi-fields" class="proposition" data-note-number="3" data-note-kind="Proposition">
<p><strong>Proposition 3</strong> (Existence and Uniqueness of Jacobi Fields).  Let {% raw %}<span class="math inline">\((M,g)\)</span>{% endraw %} be a differentiable manifold. Let {% raw %}<span class="math inline">\(I = [a,b] \subset \mathbb R\)</span>{% endraw %}, {% raw %}<span class="math inline">\(\gamma : I \to M\)</span>{% endraw %} be a geodesic, {% raw %}<span class="math inline">\(a \in I\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(p = \gamma(a)\)</span>{% endraw %}. For every pair of vectors {% raw %}<span class="math inline">\(v,w \in T_p M\)</span>{% endraw %}, there exists a unique Jacobi field {% raw %}<span class="math inline">\(J\)</span>{% endraw %} along {% raw %}<span class="math inline">\(\gamma\)</span>{% endraw %} such that {% raw %}<span class="math inline">\(J(a) = v\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\nabla_{\partial/\partial t} J(a) = w\)</span>{% endraw %}.</p>

</div>
<div class="proof">
<p><em>Proof.</em> Parallel transport an orthonormal basis along {% raw %}<span class="math inline">\(\gamma\)</span>{% endraw %} to obtain {% raw %}<span class="math inline">\(E_1,\ldots,E_d\)</span>{% endraw %} on the entire interval. Write {% raw %}<span class="math inline">\(J=j^iE_i\)</span>{% endraw %} and put</p>
{% raw %}<div class="math display">\[A^i{}_j(t)=\langle R(\gamma'(t),E_j(t))\gamma'(t),E_i(t)\rangle.\]</div>{% endraw %}
<p> The coefficients are smooth and {% raw %}<span class="math inline">\(A\)</span>{% endraw %} is symmetric by the curvature symmetries. Because the frame is parallel, (1) becomes {% raw %}<span class="math inline">\(j''+A(t)j=0\)</span>{% endraw %}. With {% raw %}<span class="math inline">\(z=(j,j')\)</span>{% endraw %}, this is the first-order linear system</p>
{% raw %}<div class="math display">\[z'=\begin{pmatrix}0&amp;I\\-A(t)&amp;0\end{pmatrix}z,\qquad z(a)=(v^i,w^i).\]</div>{% endraw %}
<p> Linear ODE existence and uniqueness give a local solution. On every compact subinterval the coefficient matrix is bounded, and Grönwall's inequality bounds {% raw %}<span class="math inline">\(|z(t)|\)</span>{% endraw %} by its initial norm times an exponential. Thus no finite-time blowup occurs and continuation covers {% raw %}<span class="math inline">\([a,b]\)</span>{% endraw %}. This proves existence and uniqueness for both specified initial vectors; the equations are coupled, not generally decoupled. ◻</p>
</div>
<div id="result-4" class="remark" data-note-number="4" data-note-kind="Remark">
<p><strong>Remark 4</strong>. The Jacobi equation is a linear second-order ODE along the geodesic. Prescribing {% raw %}<span class="math inline">\(J(a)\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\nabla_{\dot\gamma}J(a)\)</span>{% endraw %} determines a unique field throughout the geodesic interval. Conjugate points do not obstruct this initial-value problem. They obstruct the different problem of prescribing the two endpoint values {% raw %}<span class="math inline">\(J(a)\)</span>{% endraw %} and {% raw %}<span class="math inline">\(J(b)\)</span>{% endraw %}.</p>

</div>
<div id="result-5" class="lemma" data-note-number="5" data-note-kind="Lemma">
<p><strong>Lemma 5</strong>.  Let {% raw %}<span class="math inline">\((M,g)\)</span>{% endraw %} be a differentiable manifold of dimension {% raw %}<span class="math inline">\(d\)</span>{% endraw %}. Let {% raw %}<span class="math inline">\(\gamma\)</span>{% endraw %} be a geodesic in {% raw %}<span class="math inline">\(M\)</span>{% endraw %}. Let {% raw %}<span class="math inline">\(\mathscr J (\gamma)\)</span>{% endraw %} denote the collection of all Jacobi fields along {% raw %}<span class="math inline">\(\gamma\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(\mathscr X (\gamma)\)</span>{% endraw %} denote the collection of smooth vector fields along {% raw %}<span class="math inline">\(\gamma\)</span>{% endraw %}. Then, {% raw %}<span class="math inline">\(\mathscr J(\gamma)\)</span>{% endraw %} is a {% raw %}<span class="math inline">\(2d\)</span>{% endraw %}-dimensional linear subspace of {% raw %}<span class="math inline">\(\mathscr X(\gamma)\)</span>{% endraw %}.</p>

</div>
<div class="proof">
<p><em>Proof.</em> Linearity of the subspace follows from the linearity of the Jacobi equation. The map {% raw %}<span class="math inline">\(\Phi : \mathscr J(\gamma) \to T_p M \oplus T_p M : J \mapsto (J(a), \nabla_{\partial/\partial t} J(a))\)</span>{% endraw %}, for {% raw %}<span class="math inline">\(p = \gamma(a)\)</span>{% endraw %}, is linear and bijective by Proposition <a href="#prop:existence-uniquness-jacobi-fields" data-reference-type="ref" data-reference="prop:existence-uniquness-jacobi-fields">3</a>. This concludes the argument. ◻</p>

</div>
<p>We can characterize Jacobi fields along a geodesic {% raw %}<span class="math inline">\(\gamma\)</span>{% endraw %} as the variation fields of a variation along geodesics.</p>

<span id="eq:jacobi-field-characterization"></span>
<div id="prop:characterization-jacobi-field" class="proposition" data-note-number="6" data-note-kind="Proposition">
<p><strong>Proposition 6.</strong> Every Jacobi field {% raw %}<span class="math inline">\(J\)</span>{% endraw %} along a geodesic {% raw %}<span class="math inline">\(\gamma:[a,b]\to M\)</span>{% endraw %}, {% raw %}<span class="math inline">\(a&lt;b\)</span>{% endraw %}, is realized by <em>some</em> smooth variation through affinely parametrized geodesics:</p>
{% raw %}<div class="math display">\[\Gamma(0,t)=\gamma(t),\qquad J(t)=\partial_s\Gamma(0,t).\tag{2}\]</div>{% endraw %}
<p> Conversely, every such variation field is Jacobi. Different Jacobi fields generally require different variations.</p>
</div>
<span id="eq:jacobi-variation-field"></span>
<div class="proof">
<p><em>Proof.</em> The converse was proved in Proposition 1. To realize prescribed {% raw %}<span class="math inline">\(J\)</span>{% endraw %}, choose a smooth curve {% raw %}<span class="math inline">\(z(s)\)</span>{% endraw %} with {% raw %}<span class="math inline">\(z(0)=\gamma(a)\)</span>{% endraw %}, {% raw %}<span class="math inline">\(z'(0)=J(a)\)</span>{% endraw %}. Parallel transport {% raw %}<span class="math inline">\(\gamma'(a)\)</span>{% endraw %} and {% raw %}<span class="math inline">\(J'(a)\)</span>{% endraw %} along {% raw %}<span class="math inline">\(z\)</span>{% endraw %}, obtaining {% raw %}<span class="math inline">\(V(s),W(s)\)</span>{% endraw %}. Set</p>
{% raw %}<div class="math display">\[\Gamma(s,t)=\exp_{z(s)}\bigl((t-a)(V(s)+sW(s))\bigr).\tag{3}\]</div>{% endraw %}
<p> There is one common small interval in {% raw %}<span class="math inline">\(s\)</span>{% endraw %} on which this is defined for every {% raw %}<span class="math inline">\(t\in[a,b]\)</span>{% endraw %}: the original geodesic extends a little beyond its compact interval, and the open domain and smooth dependence of the geodesic flow contain a product neighborhood of its compact trajectory. Thus finitely many local flow neighborhoods supply a uniform permitted change in initial data. Completeness of {% raw %}<span class="math inline">\(M\)</span>{% endraw %} is unnecessary.</p>
<p>Clearly {% raw %}<span class="math inline">\(\Gamma(0,t)=\gamma(t)\)</span>{% endraw %}. Its field {% raw %}<span class="math inline">\(F=\partial_s\Gamma|_{s=0}\)</span>{% endraw %} is Jacobi by Proposition 1, and</p>
{% raw %}<div class="math display">\[F(a)=z'(0)=J(a),\qquad F'(a)=D_s\partial_t\Gamma(0,a)=D_s(V+sW)|_{s=0}=W(0)=J'(a).\]</div>{% endraw %}
<p> Here torsion-freeness exchanges {% raw %}<span class="math inline">\(D_t\partial_s\Gamma\)</span>{% endraw %} and {% raw %}<span class="math inline">\(D_s\partial_t\Gamma\)</span>{% endraw %}; parallelness kills the derivatives of {% raw %}<span class="math inline">\(V,W\)</span>{% endraw %}. Initial-value uniqueness gives {% raw %}<span class="math inline">\(F=J\)</span>{% endraw %} on the whole interval. ◻</p>
</div>
<div id="prop:jacobi-invariant-local-isometries" class="proposition" data-note-number="7" data-note-kind="Proposition">
<p><strong>Proposition 7.</strong> If {% raw %}<span class="math inline">\(\varphi:(M,g)\to(\widetilde M,\widetilde g)\)</span>{% endraw %} is a local isometry, {% raw %}<span class="math inline">\(\widetilde\gamma=\varphi\circ\gamma\)</span>{% endraw %} on the <em>same</em> interval {% raw %}<span class="math inline">\(I\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(\widetilde J(t)=d\varphi_{\gamma(t)}J(t)\)</span>{% endraw %}, then {% raw %}<span class="math inline">\(J\)</span>{% endraw %} is Jacobi if and only if {% raw %}<span class="math inline">\(\widetilde J\)</span>{% endraw %} is Jacobi.</p>
</div>
<span id="eq:isometry_connection"></span><span id="eq:isometry_curvature"></span>
<div class="proof">
<p><em>Proof.</em> On a neighborhood where {% raw %}<span class="math inline">\(\varphi\)</span>{% endraw %} is an isometry onto its image, pulling back the target Levi–Civita connection preserves metric compatibility and torsion-freeness. Uniqueness of that connection gives</p>
{% raw %}<div class="math display">\[d\varphi(\nabla_XY)=\widetilde\nabla_{d\varphi X}(d\varphi Y),\qquad d\varphi(R(X,Y)Z)=\widetilde R(d\varphi X,d\varphi Y)d\varphi Z.\tag{4}\]</div>{% endraw %}
<p> These identities are used locally or along the curve; no global pushforward field on the target is presumed. Applying the first twice and the second once gives</p>
{% raw %}<div class="math display">\[d\varphi\bigl(J''+R(\gamma',J)\gamma'\bigr)=\widetilde J''+\widetilde R(\widetilde\gamma',\widetilde J)\widetilde\gamma'.\]</div>{% endraw %}
<p> Because each {% raw %}<span class="math inline">\(d\varphi\)</span>{% endraw %} is invertible, either side vanishes if and only if the other does. Geometrically the forward implication also follows by composing a realizing geodesic variation with {% raw %}<span class="math inline">\(\varphi\)</span>{% endraw %}; the covariant identity supplies both directions without any global inverse. ◻</p>
</div>
<p>Uniqueness identifies the Jacobi field obtained by varying the initial velocity of a geodesic. This relates Jacobi fields to the differential of the exponential map.</p>

<div id="cor:jacobi-field-characterization" class="corollary" data-note-number="8" data-note-kind="Corollary">
<p><strong>Corollary 8</strong>.  Let {% raw %}<span class="math inline">\(M\)</span>{% endraw %} be a differentiable manifold, and {% raw %}<span class="math inline">\(\gamma : [0,a] \to M\)</span>{% endraw %} be a geodesic. Then, a Jacobi field along {% raw %}<span class="math inline">\(\gamma\)</span>{% endraw %} with {% raw %}<span class="math inline">\(J(0)=0\)</span>{% endraw %} is given by {% raw %}<span class="math inline">\(J(t) = (\dif\, \exp_p)_{t \gamma&#x27;(0)} (tJ&#x27;(0))\)</span>{% endraw %}.</p>

<p>Here {% raw %}<span class="math inline">\(p=\gamma(0)\)</span>{% endraw %}, and tangent spaces of the vector space {% raw %}<span class="math inline">\(T_pM\)</span>{% endraw %} are canonically identified with {% raw %}<span class="math inline">\(T_pM\)</span>{% endraw %}. To prove the formula, vary the initial velocity: {% raw %}<span class="math inline">\(\Gamma(s,t)=\exp_p(t(\gamma'(0)+sJ'(0)))\)</span>{% endraw %}. Differentiating in {% raw %}<span class="math inline">\(s\)</span>{% endraw %} yields the displayed field, whose initial data are {% raw %}<span class="math inline">\(0,J'(0)\)</span>{% endraw %}. Initial-value uniqueness identifies it with {% raw %}<span class="math inline">\(J\)</span>{% endraw %}.</p>
</div>
<p>The next identity describes the tangential component of a Jacobi field. It is useful for separating changes of parametrization from transverse separation of geodesics.</p>

<div id="lem:linear-jacobi-field" class="lemma" data-note-number="9" data-note-kind="Lemma">
<p><strong>Lemma 9</strong>.  Let {% raw %}<span class="math inline">\(J\)</span>{% endraw %} be a Jacobi field along the geodesic {% raw %}<span class="math inline">\(\gamma:[0,a] \to M\)</span>{% endraw %}. Then, </p>

{% raw %}<span id="eq:linear-jacobi-field"></span><div class="math display">\[
        \langle J(t), \gamma&#x27;(t) \rangle = \langle J&#x27;(0), \gamma&#x27;(0) \rangle t + \langle J(0), \gamma&#x27;(0) \rangle ~,~ \quad t \in [0,a] ~.\tag{5}\]</div>{% endraw %}
</div>
<div class="proof">
<p><em>Proof.</em> Since the geodesic velocity is parallel,</p>
{% raw %}<div class="math display">\[\frac{d^2}{dt^2}\langle J,\gamma'\rangle=\langle J'',\gamma'\rangle=-\langle R(\gamma',J)\gamma',\gamma'\rangle=0.\]</div>{% endraw %}
<p> The last equality is skew-adjointness in the two inner-product slots. Thus this scalar function is affine, and its initial value and derivative give (5). ◻</p>
</div>
<span id="eq:expansion-jacobi-field"></span><span id="eq:expansion-metric-normal"></span>
<div id="thm:taylor-expansions-jacobi-metric" class="theorem" data-note-number="10" data-note-kind="Theorem">
<p><strong>Theorem 10.</strong> Let {% raw %}<span class="math inline">\(\gamma(t)=\exp_p(tv)\)</span>{% endraw %}, and let {% raw %}<span class="math inline">\(J(t)=(d\exp_p)_{tv}(tw)\)</span>{% endraw %}, with {% raw %}<span class="math inline">\(|w|=1\)</span>{% endraw %}. Then</p>
{% raw %}<div class="math display">\[|J(t)|^2=t^2-\frac13\langle R(v,w)v,w\rangle t^4+O(t^5).\tag{6}\]</div>{% endraw %}
<p> In normal coordinates built from an orthonormal basis at {% raw %}<span class="math inline">\(p\)</span>{% endraw %},</p>
{% raw %}<div class="math display">\[g_{ij}(x)=\delta_{ij}-\frac13R_{ik\ell j}(p)x^kx^\ell+O(|x|^3),\qquad R_{abcd}=\langle R(\partial_c,\partial_d)\partial_b,\partial_a\rangle.\tag{7}\]</div>{% endraw %}
<p> Stating the index convention is essential: the corresponding formula in a convention with opposite curvature sign has correspondingly different indices or sign.</p>
</div>
<div class="proof">
<p><em>Proof.</em> Put {% raw %}<span class="math inline">\(q(t)=|J(t)|^2\)</span>{% endraw %}. The initial data are {% raw %}<span class="math inline">\(J(0)=0,J'(0)=w\)</span>{% endraw %}. The Jacobi equation gives {% raw %}<span class="math inline">\(J''(0)=0\)</span>{% endraw %}; differentiating it gives</p>
{% raw %}<div class="math display">\[J'''(0)=-R(v,w)v,\]</div>{% endraw %}
<p> since all terms involving {% raw %}<span class="math inline">\(J(0)\)</span>{% endraw %} or {% raw %}<span class="math inline">\(D_t\gamma'\)</span>{% endraw %} vanish. Metric compatibility and repeated product differentiation now yield</p>
{% raw %}<div class="math display">\[q(0)=q'(0)=0,\quad q''(0)=2,\quad q'''(0)=0,\quad q^{(4)}(0)=2\bigl(\langle J^{(4)},J\rangle+4\langle J''',J'\rangle+3|J''|^2\bigr)_{t=0}=-8\langle R(v,w)v,w\rangle.\]</div>{% endraw %}
<p> Taylor's theorem, with {% raw %}<span class="math inline">\(4!=24\)</span>{% endraw %}, proves (6). For arbitrary {% raw %}<span class="math inline">\(w\)</span>{% endraw %}, its first term is {% raw %}<span class="math inline">\(t^2|w|^2\)</span>{% endraw %}.</p>
<p>To obtain (7) without assuming the expansion we seek, use the same field in normal coordinates. There {% raw %}<span class="math inline">\(\Gamma(s,t)\)</span>{% endraw %} has coordinate vector {% raw %}<span class="math inline">\(t(v+sw)\)</span>{% endraw %}, so {% raw %}<span class="math inline">\(J(t)=tw^i\partial_i|_{tv}\)</span>{% endraw %} and</p>
{% raw %}<div class="math display">\[t^2g_{ij}(tv)w^iw^j=t^2|w|^2-\frac13\langle R(v,w)v,w\rangle t^4+O(t^5).\]</div>{% endraw %}
<p> Dividing by {% raw %}<span class="math inline">\(t^2\)</span>{% endraw %}, comparing the ordinary Taylor coefficients of the smooth metric at zero, and polarizing in {% raw %}<span class="math inline">\(w\)</span>{% endraw %} determines the constant, linear and quadratic coefficients. Since</p>
{% raw %}<div class="math display">\[\langle R(v,w)v,w\rangle=R_{ik\ell j}w^iv^kv^\ell w^j,\]</div>{% endraw %}
<p> the quadratic term is the one in (7). Smooth multivariable Taylor expansion makes the remaining term uniformly {% raw %}<span class="math inline">\(O(|x|^3)\)</span>{% endraw %} for directions in the compact unit sphere. This explains why a one-ray calculation determines the full metric expansion. ◻</p>
</div>
<h3 data-note-section="1" id="conjugate-points">1. Conjugate Points</h3>
<p>The exponential map gives normal coordinates near {% raw %}<span class="math inline">\(p\)</span>{% endraw %} because its differential at the origin is the identity. Indeed, for {% raw %}<span class="math inline">\(w\in T_pM\)</span>{% endraw %}, the curve {% raw %}<span class="math inline">\(t\mapsto\exp_p(tw)\)</span>{% endraw %} has initial velocity {% raw %}<span class="math inline">\(w\)</span>{% endraw %}, so {% raw %}<span class="math inline">\((\dif\exp_p)_0w=w\)</span>{% endraw %}. Thus {% raw %}<span class="math inline">\(0\)</span>{% endraw %} is a regular point, and the inverse function theorem gives a neighbourhood of {% raw %}<span class="math inline">\(0\)</span>{% endraw %} on which {% raw %}<span class="math inline">\(\exp_p\)</span>{% endraw %} is a diffeomorphism. Farther out in its domain the differential may become singular. Jacobi fields characterize those singularities.</p>

<div id="def:conjugate-point" class="definition" data-note-number="11" data-note-kind="Definition">
<p><strong>Definition 11</strong>.  Let {% raw %}<span class="math inline">\(M\)</span>{% endraw %} be a differentiable manifold, {% raw %}<span class="math inline">\(\gamma: I \to M\)</span>{% endraw %} be a geodesic, {% raw %}<span class="math inline">\(a,b \in I,\ a&lt;b\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(p = \gamma(a)\)</span>{% endraw %}, {% raw %}<span class="math inline">\(q = \gamma(b)\)</span>{% endraw %}. {% raw %}<span class="math inline">\(p\)</span>{% endraw %} and {% raw %}<span class="math inline">\(q\)</span>{% endraw %} are said to be <em>conjugate along {% raw %}<span class="math inline">\(\gamma\)</span>{% endraw %}</em> if there exists a Jacobi field vanishing at {% raw %}<span class="math inline">\(t=a\)</span>{% endraw %} and {% raw %}<span class="math inline">\(t=b\)</span>{% endraw %}, but not identically zero. The <em>order</em> or <em>multiplicity of conjugacy</em> is the dimension of the space of Jacobi fields vanishing at {% raw %}<span class="math inline">\(p\)</span>{% endraw %} and {% raw %}<span class="math inline">\(q\)</span>{% endraw %}.</p>

</div>
<div id="result-12" class="remark" data-note-number="12" data-note-kind="Remark">
<p><strong>Remark 12.</strong> Fields with {% raw %}<span class="math inline">\(J(a)=0\)</span>{% endraw %} form a {% raw %}<span class="math inline">\(d\)</span>{% endraw %}-dimensional space, parametrized by {% raw %}<span class="math inline">\(J'(a)\)</span>{% endraw %}. For a nonconstant geodesic, Lemma 9 says {% raw %}<span class="math inline">\(\langle J,\gamma'\rangle\)</span>{% endraw %} is affine; if it vanishes at two distinct times, it is identically zero. Thus a field vanishing at both endpoints satisfies {% raw %}<span class="math inline">\(J'(a)\perp\gamma'(a)\)</span>{% endraw %}, leaving at most {% raw %}<span class="math inline">\(d-1\)</span>{% endraw %} independent initial derivatives. The tangential component might be identically zero; it is only a nonzero affine component that has at most one zero.</p>
<p>The bound is sharp on the unit {% raw %}<span class="math inline">\(d\)</span>{% endraw %}-sphere: along a unit-speed great circle, each parallel normal field {% raw %}<span class="math inline">\(E_i\)</span>{% endraw %} gives {% raw %}<span class="math inline">\(J_i(t)=\sin(t-a)E_i(t)\)</span>{% endraw %}, which vanishes at {% raw %}<span class="math inline">\(a,a+\pi\)</span>{% endraw %}, yielding {% raw %}<span class="math inline">\(d-1\)</span>{% endraw %} independent fields. A constant geodesic has {% raw %}<span class="math inline">\(J''=0\)</span>{% endraw %}, so a field vanishing at two distinct times is zero and there are no conjugate times.</p>
</div>
<p>The definition of conjugate points allow us to characterize them as <em>critical points</em> of {% raw %}<span class="math inline">\(\exp_p\)</span>{% endraw %}.</p>

<div id="result-13" class="proposition" data-note-number="13" data-note-kind="Proposition">
<p><strong>Proposition 13</strong>.  Let {% raw %}<span class="math inline">\(M\)</span>{% endraw %} be a differentiable manifold, {% raw %}<span class="math inline">\(p \in M\)</span>{% endraw %}, {% raw %}<span class="math inline">\(v \in U \subset T_p M\)</span>{% endraw %}. Let {% raw %}<span class="math inline">\(\gamma = \gamma_v : [0,a] \to M\)</span>{% endraw %} be the geodesic segment {% raw %}<span class="math inline">\(\gamma(t) = \exp_p (\frac{t}{a}v)\)</span>{% endraw %}. Let {% raw %}<span class="math inline">\(q = \gamma(a) = \exp_p (v)\)</span>{% endraw %}. Then, {% raw %}<span class="math inline">\(v\)</span>{% endraw %} is a critical point of {% raw %}<span class="math inline">\(\exp_p\)</span>{% endraw %} if and only if {% raw %}<span class="math inline">\(q\)</span>{% endraw %} is conjugate to {% raw %}<span class="math inline">\(p\)</span>{% endraw %} along {% raw %}<span class="math inline">\(\gamma\)</span>{% endraw %}. Furthermore, the order of conjugacy of {% raw %}<span class="math inline">\(q\)</span>{% endraw %} to {% raw %}<span class="math inline">\(p\)</span>{% endraw %} is given by the dimension of the kernel of the linear map {% raw %}<span class="math inline">\((\dif \exp_p)_v\)</span>{% endraw %}.</p>

<p>The interval parameter here satisfies {% raw %}<span class="math inline">\(a&gt;0\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(v\)</span>{% endraw %} belongs to the domain of {% raw %}<span class="math inline">\(\exp_p\)</span>{% endraw %}. Before rescaling to {% raw %}<span class="math inline">\(a=1\)</span>{% endraw %}, the kernel correspondence is explicitly</p>
{% raw %}<div class="math display">\[w\longmapsto J_w(t)=(d\exp_p)_{(t/a)v}\bigl((t/a)w\bigr),\qquad J_w'(0)=w/a,\quad J_w(a)=(d\exp_p)_v w.\]</div>{% endraw %}
<p> Thus {% raw %}<span class="math inline">\(w\ne0\)</span>{% endraw %} implies a nonzero field by its initial derivative; this supplies the nontriviality in both directions of the proof. The identification {% raw %}<span class="math inline">\(T_v(T_pM)\cong T_pM\)</span>{% endraw %} is canonical for a vector space and requires no chart choice.</p>
</div>
<div class="proof">
<p><em>Proof.</em> Without loss, let {% raw %}<span class="math inline">\(a=1\)</span>{% endraw %}. Suppose that {% raw %}<span class="math inline">\(v\)</span>{% endraw %} is a critical point of {% raw %}<span class="math inline">\(\exp_p\)</span>{% endraw %}. Then, there exists a nonzero vector {% raw %}<span class="math inline">\(w \in T_v(T_p M)\)</span>{% endraw %} such that {% raw %}<span class="math inline">\((\dif \exp_p)_v (w) = 0\)</span>{% endraw %}. Identifying {% raw %}<span class="math inline">\(T_v(T_p M)\)</span>{% endraw %} with {% raw %}<span class="math inline">\(T_p M\)</span>{% endraw %} via charts as usual, {% raw %}<span class="math inline">\(w \in T_p M\)</span>{% endraw %}. Define the variation of geodesic {% raw %}<span class="math inline">\(\gamma\)</span>{% endraw %} by {% raw %}<span class="math inline">\(\Gamma(s,t) = \exp_p (t(v + sw))\)</span>{% endraw %}. Let {% raw %}<span class="math inline">\(J(t) = \partial_s \Gamma(s,t)|_{s=0}\)</span>{% endraw %} denote the variation field. Direct calculations reveal that {% raw %}<span class="math inline">\(J(1) = 0\)</span>{% endraw %}, i.e. {% raw %}<span class="math inline">\(J\)</span>{% endraw %} is a nontrivial Jacobi field vanishing at {% raw %}<span class="math inline">\(t=0\)</span>{% endraw %} and {% raw %}<span class="math inline">\(t=1\)</span>{% endraw %}, establishing the conclusion that {% raw %}<span class="math inline">\(q\)</span>{% endraw %} is conjugate to {% raw %}<span class="math inline">\(p\)</span>{% endraw %} along {% raw %}<span class="math inline">\(\gamma\)</span>{% endraw %}.</p>

<p>For the converse, if {% raw %}<span class="math inline">\(q\)</span>{% endraw %} is conjugate to {% raw %}<span class="math inline">\(p\)</span>{% endraw %} along {% raw %}<span class="math inline">\(\gamma\)</span>{% endraw %}, then there is some nontrivial Jacobi field {% raw %}<span class="math inline">\(J\)</span>{% endraw %} along {% raw %}<span class="math inline">\(\gamma\)</span>{% endraw %} such that {% raw %}<span class="math inline">\(J(0) = 0\)</span>{% endraw %} and {% raw %}<span class="math inline">\(J(1) = 0\)</span>{% endraw %}. Proposition <a href="#prop:characterization-jacobi-field" data-reference-type="ref" data-reference="prop:characterization-jacobi-field">6</a> tells us that {% raw %}<span class="math inline">\(J\)</span>{% endraw %} is the variation field of a variation of geodesic {% raw %}<span class="math inline">\(\gamma\)</span>{% endraw %}, of the form <a href="#eq:jacobi-field-characterization" data-reference-type="eqref" data-reference="eq:jacobi-field-characterization">(2)</a> with {% raw %}<span class="math inline">\(w = \nabla_{\partial/\partial t} J(0) \in T_p M\)</span>{% endraw %} and {% raw %}<span class="math inline">\((\dif \exp_p)_v (w) = J(1) = 0\)</span>{% endraw %}. Therefore, {% raw %}<span class="math inline">\(v\)</span>{% endraw %} is a critical point of {% raw %}<span class="math inline">\(\exp_p\)</span>{% endraw %}.</p>

<p>For the multiplicity assertion in <a href="#result-13">Proposition 13</a>, again, without loss, let {% raw %}<span class="math inline">\(a=1\)</span>{% endraw %}. Note that the order of conjugacy of {% raw %}<span class="math inline">\(q\)</span>{% endraw %} is equal to the number of linearly independent Jacobi fields {% raw %}<span class="math inline">\(J_1,\cdots,J_k\)</span>{% endraw %} vanishing at {% raw %}<span class="math inline">\(t=0\)</span>{% endraw %} and {% raw %}<span class="math inline">\(t=1\)</span>{% endraw %}. A straightforward calculation shows that {% raw %}<span class="math inline">\(J_1,\cdots,J_k\)</span>{% endraw %} are linearly independent if and only if {% raw %}<span class="math inline">\(J&#x27;_1 (0), \cdots, J&#x27;_k (0)\)</span>{% endraw %} are linearly independent in {% raw %}<span class="math inline">\(T_p M\)</span>{% endraw %}. (To rigorously see this, note that any linear combination {% raw %}<span class="math inline">\(J = c_1 J_1 + \cdots + c_k J_k\)</span>{% endraw %} is a Jacobi field with {% raw %}<span class="math inline">\(J(0) = 0\)</span>{% endraw %}. By the uniqueness of solutions to the Jacobi equation, {% raw %}<span class="math inline">\(J \equiv 0\)</span>{% endraw %} if and only if {% raw %}<span class="math inline">\(J&#x27;(0) = c_1 J&#x27;_1(0) + \cdots + c_k J&#x27;_k(0) = 0\)</span>{% endraw %}. This yields the equivalence of linear independence.) By the preceding construction, it follows that the order of conjugacy of {% raw %}<span class="math inline">\(q\)</span>{% endraw %} is exactly equal to the dimension of the kernel of {% raw %}<span class="math inline">\((\dif \exp_p)_v\)</span>{% endraw %}. ◻</p>

</div>
<p>Initial values always determine a unique Jacobi field. To prescribe endpoint values instead, consider the linear endpoint-evaluation map on the space of Jacobi fields. Its kernel consists exactly of fields vanishing at both endpoints; this is where conjugate points enter.</p>

<div id="result-14" class="proposition" data-note-number="14" data-note-kind="Proposition">
<p><strong>Proposition 14</strong> (Conjugate points and the Jacobi boundary-value problem).  Let {% raw %}<span class="math inline">\((M,g)\)</span>{% endraw %} be a differentiable manifold of dimension {% raw %}<span class="math inline">\(n\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(\gamma : [a,b] \to M\)</span>{% endraw %} be a geodesic (segment). The two-point boundary problem for Jacobi fields along {% raw %}<span class="math inline">\(\gamma\)</span>{% endraw %} is <em>uniquely solvable</em> for every pair of vectors {% raw %}<span class="math inline">\(v \in T_{\gamma(a)} M\)</span>{% endraw %} and {% raw %}<span class="math inline">\(w \in T_{\gamma(b)} M\)</span>{% endraw %} if and only if {% raw %}<span class="math inline">\(\gamma(a)\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\gamma(b)\)</span>{% endraw %} are not conjugate along {% raw %}<span class="math inline">\(\gamma\)</span>{% endraw %}.</p>

<p>Here {% raw %}<span class="math inline">\(a&lt;b\)</span>{% endraw %}. In the conjugate case the same equal-dimension linear algebra also shows that not every endpoint pair is attainable: a nonzero kernel forces a proper image. For attainable data, adding a kernel field gives all the nonunique solutions.</p>
</div>
<div class="proof">
<p><em>Proof.</em> Let {% raw %}<span class="math inline">\(\mathcal J\)</span>{% endraw %} be the {% raw %}<span class="math inline">\(2n\)</span>{% endraw %}-dimensional space of Jacobi fields along {% raw %}<span class="math inline">\(\gamma\)</span>{% endraw %}, identified with initial data {% raw %}<span class="math inline">\((J(a),\nabla_{\dot\gamma}J(a))\)</span>{% endraw %}. The endpoint map</p>
{% raw %}<div class="math display">\[\mathscr T:\mathcal J\longrightarrow T_{\gamma(a)}M\times T_{\gamma(b)}M,\qquad J\longmapsto(J(a),J(b))\]</div>{% endraw %}
<p>is linear between spaces of equal finite dimension. Its kernel is zero exactly when the endpoints are not conjugate. In that case it is an isomorphism, giving existence and uniqueness for every endpoint pair. If the endpoints are conjugate, a nonzero element of the kernel and the zero field have the same zero endpoint values, so uniqueness fails. ◻</p>

</div>

<p class="note-reading">Reading: Carmo (1992), Riemannian geometry.</p>


<nav class="note-series" aria-label="Notes in this series"><p>Previous: <a href="{% post_url 2022-12-14-the-second-fundamental-form-and-the-gauss-equations %}">The Second Fundamental Form and the Gauss Equations</a> · Next: <a href="{% post_url 2023-02-20-second-variation-and-minimizing-geodesics %}">Second Variation and Minimizing Geodesics</a></p></nav>

</div>
