---
layout: "post"
title: "Hopf-Rinow"
date: "2022-04-27"
tags: ["math", "differential geometry"]
excerpt: "We begin to examine one of the most important consequences of the construction of geodesics."
note_series: "Differential geometry"
note_source: "assets/notes/Differential Geometry - Notes/diff-geo.tex"
---

<div class="note-content" markdown="0">

<p>Let {% raw %}<span class="math inline">\((M,g)\)</span>{% endraw %} be a connected smooth Riemannian manifold without boundary. Write {% raw %}<span class="math inline">\(\nabla\)</span>{% endraw %} for its Levi–Civita connection and {% raw %}<span class="math inline">\(T_pM\)</span>{% endraw %} for the tangent space at {% raw %}<span class="math inline">\(p\)</span>{% endraw %}. The coordinate conventions are those in <a href="{% post_url 2022-03-17-tangent-spaces-and-riemannian-metrics %}">tangent spaces and derivations</a>.</p>

<div id="hopf-rinow" data-note-section="title">

</div>
<p>The geodesic equation gives a solution for a short time from any initial position and velocity. Two global questions remain: can that solution continue indefinitely, and can two points be joined by a geodesic that realizes their distance? The Hopf–Rinow theorem relates these questions to completeness of the distance metric.</p>

<div id="thm:exp-map-extended" class="theorem" data-note-number="1" data-note-kind="Theorem">
<p><strong>Theorem 1</strong>.  On a compact, connected Riemannian manifold {% raw %}<span class="math inline">\(M\)</span>{% endraw %}, any {% raw %}<span class="math inline">\(p, q \in M\)</span>{% endraw %} can be joined by a minimizing geodesic. Furthermore, for any {% raw %}<span class="math inline">\(p \in M\)</span>{% endraw %}, {% raw %}<span class="math inline">\(\exp_p\)</span>{% endraw %} is defined on all of {% raw %}<span class="math inline">\(T_p M\)</span>{% endraw %}, and any geodesic may be extended indefinitely in all directions.</p>

</div>
<p>It turns out we can relax the requirement on {% raw %}<span class="math inline">\(M\)</span>{% endraw %} in Theorem <a href="#thm:exp-map-extended" data-reference-type="ref" data-reference="thm:exp-map-extended">1</a> substantially. We require {% raw %}<span class="math inline">\(M\)</span>{% endraw %} to be <em>geodesically complete</em>.</p>

<div id="def:geod-complete" class="definition" data-note-number="2" data-note-kind="Definition">
<p><strong>Definition 2</strong>.  A Riemannian manifold {% raw %}<span class="math inline">\(M\)</span>{% endraw %} is said to be <em>geodesically complete</em> if for all {% raw %}<span class="math inline">\(p \in M\)</span>{% endraw %}, {% raw %}<span class="math inline">\(\exp_p\)</span>{% endraw %} is well-defined on all of {% raw %}<span class="math inline">\(T_p M\)</span>{% endraw %}. Equivalently, the geodesic {% raw %}<span class="math inline">\(\gamma(t)\)</span>{% endraw %} with {% raw %}<span class="math inline">\(\gamma(0) = p\)</span>{% endraw %} is well-defined for all {% raw %}<span class="math inline">\(t \in \mathbb R\)</span>{% endraw %}.</p>

</div>
<p>The theorem compares three ways of controlling escape: convergence of Cauchy sequences, compactness of closed bounded sets, and existence of geodesics for all time. The minimizing-geodesic conclusion is what connects the metric and differential-equation descriptions.</p>

<div id="thm:hopf-rinow" class="theorem" data-note-number="3" data-note-kind="Theorem">
<p><strong>Theorem 3</strong> (Hopf-Rinow).  Let {% raw %}<span class="math inline">\(M\)</span>{% endraw %} be a connected Riemannian manifold without boundary, equipped with its Riemannian distance. The following are equivalent:</p>

<ol>
<li><p><span id="thm:hopf-rinow-a" data-label="thm:hopf-rinow-a"></span> {% raw %}<span class="math inline">\(M\)</span>{% endraw %} is complete as a metric space.</p></li>
<li><p><span id="thm:hopf-rinow-b" data-label="thm:hopf-rinow-b"></span> Closed, bounded subsets of {% raw %}<span class="math inline">\(M\)</span>{% endraw %} are compact.</p></li>
<li><p><span id="thm:hopf-rinow-c" data-label="thm:hopf-rinow-c"></span> There exists {% raw %}<span class="math inline">\(p \in M\)</span>{% endraw %} such that {% raw %}<span class="math inline">\(\exp_p\)</span>{% endraw %} is defined on the entirety of {% raw %}<span class="math inline">\(T_p M\)</span>{% endraw %}.</p></li>
<li><p><span id="thm:hopf-rinow-d" data-label="thm:hopf-rinow-d"></span> {% raw %}<span class="math inline">\(M\)</span>{% endraw %} is geodesically complete.</p></li>
</ol>
<p>Furthermore, any one of <a href="#thm:hopf-rinow-a" data-reference-type="ref" data-reference="thm:hopf-rinow-a">3</a> through <a href="#thm:hopf-rinow-d" data-reference-type="ref" data-reference="thm:hopf-rinow-d">3</a> implies</p>

<ol>
<li><p><span id="thm:hopf-rinow-e" data-label="thm:hopf-rinow-e"></span> Any two points {% raw %}<span class="math inline">\(p,q \in M\)</span>{% endraw %} can be joined by a minimizing geodesic.</p></li>
</ol>
<p>Two local facts used below follow from the radial-angular orthogonality established in normal coordinates. First, in a sufficiently small normal ball about {% raw %}<span class="math inline">\(x\)</span>{% endraw %}, a radial segment to {% raw %}<span class="math inline">\(\exp_x(v)\)</span>{% endraw %} has length {% raw %}<span class="math inline">\(|v|\)</span>{% endraw %} and minimizes length. Indeed, for a competing curve written in polar coordinates {% raw %}<span class="math inline">\((r(t),\theta(t))\)</span>{% endraw %}, its speed is at least {% raw %}<span class="math inline">\(|r'(t)|\)</span>{% endraw %}. Integrating from the centre to radius {% raw %}<span class="math inline">\(|v|\)</span>{% endraw %} gives the lower bound {% raw %}<span class="math inline">\(|v|\)</span>{% endraw %}. If a competing curve leaves a larger normal ball first, it already has at least the larger radius in length and cannot improve this bound. Limits from positive radius handle any passage through the centre. This also identifies a sufficiently small metric closed ball with the exponential image of a compact tangent-space ball.</p>
<p>Second, a length-minimizing pair of unit-speed geodesic segments cannot have a corner. To see this directly, use normal coordinates at the join and let the incoming and outgoing velocities be {% raw %}<span class="math inline">\(u\)</span>{% endraw %} and {% raw %}<span class="math inline">\(v\)</span>{% endraw %}, with {% raw %}<span class="math inline">\(|u|=|v|=1\)</span>{% endraw %}. Points at parameter distances {% raw %}<span class="math inline">\(\varepsilon\)</span>{% endraw %} on either side have coordinates {% raw %}<span class="math inline">\(-\varepsilon u\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\varepsilon v\)</span>{% endraw %}. Their coordinate straight segment has length {% raw %}<span class="math inline">\(\varepsilon|u+v|+o(\varepsilon)\)</span>{% endraw %}, since the metric tends uniformly to its Euclidean value on the shrinking coordinate ball. If {% raw %}<span class="math inline">\(u\ne v\)</span>{% endraw %}, then {% raw %}<span class="math inline">\(|u+v|&lt;2\)</span>{% endraw %}, and this is shorter than the broken segment of length {% raw %}<span class="math inline">\(2\varepsilon\)</span>{% endraw %}. Thus minimization forces {% raw %}<span class="math inline">\(u=v\)</span>{% endraw %}; ODE uniqueness then joins the two segments into one geodesic.</p>
</div>
<div class="proof">
<p><em>Proof.</em> We first prove the main geometric step under condition (c): if {% raw %}<span class="math inline">\(\exp_p\)</span>{% endraw %} is defined on all of {% raw %}<span class="math inline">\(T_pM\)</span>{% endraw %}, every {% raw %}<span class="math inline">\(q\in M\)</span>{% endraw %} can be joined to this {% raw %}<span class="math inline">\(p\)</span>{% endraw %} by a minimizing geodesic. The case {% raw %}<span class="math inline">\(p=q\)</span>{% endraw %} is immediate. Otherwise put {% raw %}<span class="math inline">\(r=d(p,q)&gt;0\)</span>{% endraw %}, and choose {% raw %}<span class="math inline">\(0&lt;\rho&lt;r\)</span>{% endraw %} so small that the closed ball of radius {% raw %}<span class="math inline">\(\rho\)</span>{% endraw %} lies in a normal neighbourhood of {% raw %}<span class="math inline">\(p\)</span>{% endraw %}. Its boundary sphere is compact. Choose {% raw %}<span class="math inline">\(p_0\)</span>{% endraw %} on that sphere minimizing {% raw %}<span class="math inline">\(d(p_0,q)\)</span>{% endraw %}.</p>
<p>Every path from {% raw %}<span class="math inline">\(p\)</span>{% endraw %} to {% raw %}<span class="math inline">\(q\)</span>{% endraw %} crosses this sphere. Its length is therefore at least {% raw %}<span class="math inline">\(\rho+d(p_0,q)\)</span>{% endraw %}. Taking the infimum over paths and using the reverse triangle inequality gives {% raw %}<span class="math inline">\(r=\rho+d(p_0,q)\)</span>{% endraw %}. Let {% raw %}<span class="math inline">\(v\)</span>{% endraw %} be the unit initial velocity of the radial geodesic from {% raw %}<span class="math inline">\(p\)</span>{% endraw %} to {% raw %}<span class="math inline">\(p_0\)</span>{% endraw %}, and continue it using (c):</p>
{% raw %}<span id="eq:hopf-rinow-minimizing-geodesic"></span><div class="math display">\[c(t)=\exp_p(tv),\qquad t\ge0.\tag{1}\]</div>{% endraw %}
<p>Define</p>
{% raw %}<div class="math display">\[T=\{t\in[0,r]:d(c(t),q)=r-t\}.\]</div>{% endraw %}
<p>This set is closed, and contains {% raw %}<span class="math inline">\(\rho\)</span>{% endraw %}. For {% raw %}<span class="math inline">\(t\in T\)</span>{% endraw %}, the triangle inequality gives</p>
{% raw %}<div class="math display">\[r\le d(p,c(t))+d(c(t),q)\le t+(r-t)=r.\]</div>{% endraw %}
<p>Thus {% raw %}<span class="math inline">\(d(p,c(t))=t\)</span>{% endraw %}, so the initial segment of {% raw %}<span class="math inline">\(c\)</span>{% endraw %} is minimizing. Let {% raw %}<span class="math inline">\(t_0=\max T\)</span>{% endraw %}. We claim {% raw %}<span class="math inline">\(t_0=r\)</span>{% endraw %}.</p>
<figure id="fig:hopf-rinow">

<figcaption>Construction of the minimizing geodesic.</figcaption>
</figure>
<p>If {% raw %}<span class="math inline">\(t_0&lt;r\)</span>{% endraw %}, choose {% raw %}<span class="math inline">\(0&lt;\delta&lt;r-t_0\)</span>{% endraw %} with the closed {% raw %}<span class="math inline">\(\delta\)</span>{% endraw %}-ball about {% raw %}<span class="math inline">\(c(t_0)\)</span>{% endraw %} inside a normal neighbourhood. The same compact-sphere argument gives a point {% raw %}<span class="math inline">\(y\)</span>{% endraw %} on its boundary such that</p>
{% raw %}<div class="math display">\[d(c(t_0),q)=\delta+d(y,q),\qquad r=t_0+\delta+d(y,q).\]</div>{% endraw %}
<p>Join {% raw %}<span class="math inline">\(c(t_0)\)</span>{% endraw %} to {% raw %}<span class="math inline">\(y\)</span>{% endraw %} by its radial unit-speed geodesic. Concatenating it with {% raw %}<span class="math inline">\(c|_{[0,t_0]}\)</span>{% endraw %} gives a path of length {% raw %}<span class="math inline">\(t_0+\delta\)</span>{% endraw %}, while the triangle inequality gives {% raw %}<span class="math inline">\(d(p,y)\ge r-d(y,q)=t_0+\delta\)</span>{% endraw %}. The concatenation is therefore minimizing. A minimizing broken geodesic has no corner: its small segment around a proposed corner lies in a convex normal neighbourhood, where it must equal the unique minimizing geodesic. Its velocities agree at the join. Uniqueness of the geodesic equation now implies {% raw %}<span class="math inline">\(y=c(t_0+\delta)\)</span>{% endraw %}, so {% raw %}<span class="math inline">\(t_0+\delta\in T\)</span>{% endraw %}, a contradiction. Hence {% raw %}<span class="math inline">\(t_0=r\)</span>{% endraw %}, {% raw %}<span class="math inline">\(c(r)=q\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(c|_{[0,r]}\)</span>{% endraw %} is minimizing.</p>
<p>We now establish the equivalences. Under (c), the preceding argument implies, for every {% raw %}<span class="math inline">\(R&gt;0\)</span>{% endraw %},</p>
{% raw %}<div class="math display">\[\overline B(p,R)=\exp_p\{v\in T_pM:|v|\le R\}.\]</div>{% endraw %}
<p>One inclusion follows from the length of a radial geodesic; the other follows from the minimizing geodesic just constructed. The tangent-space ball is compact, so its continuous image is compact. Every closed bounded subset of {% raw %}<span class="math inline">\(M\)</span>{% endraw %} is a closed subset of such a ball. This proves (c) implies (b).</p>
<p>Condition (b) implies (a): a Cauchy sequence is bounded, hence lies in a compact closed ball. It has a convergent subsequence, and the Cauchy property makes the entire sequence converge to the same limit.</p>
<p>For (a) implies (d), suppose a unit-speed geodesic {% raw %}<span class="math inline">\(c:(a,b)\to M\)</span>{% endraw %} has a finite maximal right endpoint {% raw %}<span class="math inline">\(b\)</span>{% endraw %}. The estimate {% raw %}<span class="math inline">\(d(c(t),c(u))\leq|t-u|\)</span>{% endraw %} shows that {% raw %}<span class="math inline">\(c(t)\)</span>{% endraw %} is Cauchy as {% raw %}<span class="math inline">\(t\uparrow b\)</span>{% endraw %}, hence converges to {% raw %}<span class="math inline">\(x\)</span>{% endraw %} by completeness. Choose a compact coordinate neighbourhood {% raw %}<span class="math inline">\(K\)</span>{% endraw %} of {% raw %}<span class="math inline">\(x\)</span>{% endraw %} whose interior contains {% raw %}<span class="math inline">\(x\)</span>{% endraw %}; eventually {% raw %}<span class="math inline">\(c(t)\in K\)</span>{% endraw %}. On {% raw %}<span class="math inline">\(K\)</span>{% endraw %}, positive definiteness gives a uniform lower metric bound {% raw %}<span class="math inline">\(g_y(v,v)\geq c_0|v|^2\)</span>{% endraw %}, so unit tangent vectors have bounded coordinate components. They form a closed subset of a compact base times a bounded closed vector ball, hence a compact subset of {% raw %}<span class="math inline">\(TM\)</span>{% endraw %}.</p>
<p>The geodesic vector field is smooth. Local ODE existence gives, around each point of this compact set of initial data, a neighbourhood and a common short existence interval. A finite subcover gives a single {% raw %}<span class="math inline">\(\varepsilon&gt;0\)</span>{% endraw %} valid for all these data. Starting at any {% raw %}<span class="math inline">\(t&gt;b-\varepsilon/2\)</span>{% endraw %} now gives a solution through {% raw %}<span class="math inline">\(t+\varepsilon&gt;b\)</span>{% endraw %}; it agrees with {% raw %}<span class="math inline">\(c\)</span>{% endraw %} on the overlap by uniqueness, contradicting maximality. Reverse time to treat the left endpoint. Constant geodesics already extend for all time, and nonconstant constant-speed geodesics are affine rescalings of unit-speed ones.</p>
<p>Finally (d) implies (c) directly. Under (d), the first argument applies at every base point, giving the minimizing-geodesic conclusion for every pair. A compact connected Riemannian manifold is complete as a metric space, so Theorem 1 follows as well. ◻</p>

</div>

<p class="note-reading">Reading: Carmo (1992), Riemannian geometry.</p>


<nav class="note-series" aria-label="Notes in this series"><p>Previous: <a href="{% post_url 2022-04-13-geodesics-and-the-energy-functional %}">Geodesics and the Energy Functional</a> · Next: <a href="{% post_url 2022-05-11-connections-lie-brackets-and-curvature %}">Connections, Lie Brackets, and Curvature</a></p></nav>

</div>
