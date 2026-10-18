---
layout: "post"
title: "Geodesics and the Energy Functional"
date: "2022-04-13"
tags: ["math", "differential geometry"]
excerpt: "Now we proceed to define geodesics as critical points of the energy functional."
note_series: "Differential geometry"
note_source: "assets/notes/Differential Geometry - Notes/diff-geo.tex"
redirect_from: ["/2022/04/13/geodesics/", "/2022/06/20/the-hamiltonian-formulation-of-geodesics/"]
---

<div class="note-content" markdown="0">

<p>Let {% raw %}<span class="math inline">\((M,g)\)</span>{% endraw %} be a smooth Riemannian manifold. Write {% raw %}<span class="math inline">\(\nabla\)</span>{% endraw %} for its Levi–Civita connection and {% raw %}<span class="math inline">\(T_pM\)</span>{% endraw %} for the tangent space at {% raw %}<span class="math inline">\(p\)</span>{% endraw %}. The coordinate conventions are those in <a href="{% post_url 2022-03-17-tangent-spaces-and-riemannian-metrics %}">tangent spaces and derivations</a>.</p>

<div id="geodesics" data-note-section="title">

</div>
<p>We now apply concepts developed in Section <a href="{% post_url 2022-03-17-tangent-spaces-and-riemannian-metrics %}#sec:tangent" data-reference-type="ref" data-reference="sec:tangent">Tangent Spaces and Riemannian Metrics</a> to study properties of smooth curves on differentiable manifolds {% raw %}<span class="math inline">\(M\)</span>{% endraw %}. Let {% raw %}<span class="math inline">\([a,b] \subset \mathbb R\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(\gamma : [a,b] \to M\)</span>{% endraw %} be a smooth curve. Define the <em>length</em> of {% raw %}<span class="math inline">\(\gamma\)</span>{% endraw %} as </p>

{% raw %}<span id="eq:length"></span><div class="math display">\[
    L(\gamma) = \int_a^b \lVert \gamma&#x27; (t) \rVert \dif t\tag{1}\]</div>{% endraw %}
<p> and the <em>energy</em> of {% raw %}<span class="math inline">\(\gamma\)</span>{% endraw %} as </p>

{% raw %}<span id="eq:energy"></span><div class="math display">\[
    E(\gamma) = \frac12 \int_a^b \lVert \gamma&#x27; (t) \rVert^2 \dif t ~.\tag{2}\]</div>{% endraw %}
<p> We can calculate both length and energy in local coordinates. To do so, let {% raw %}<span class="math inline">\((x^1,\cdots,x^d) = (x^1(\gamma(t)),\cdots,x^d(\gamma(t)))\)</span>{% endraw %}. Then, {% raw %}<span class="math inline">\(\dot{x}^i (t) = \dod{}{t} x^i (\gamma(t))\)</span>{% endraw %}, and </p>

{% raw %}<span id="eq:length-functional"></span><span id="eq:energy-functional-curve"></span><div class="math display">\[\begin{aligned}
     L(\gamma) &amp;= \int_a^b \sqrt{g_{ij}(x(\gamma(t))) \dot{x}^i (t) \dot{x}^j (t)} \dif t ~, \\
     E(\gamma) &amp;= \frac12 \int_a^b {g_{ij}(x(\gamma(t))) \dot{x}^i (t) \dot{x}^j (t)} \dif t ~.
\end{aligned}\tag{3}\]</div>{% endraw %}
<p> By way of notation, when {% raw %}<span class="math inline">\(\gamma(t)\)</span>{% endraw %} is a single-variable function, {% raw %}<span class="math inline">\(\gamma&#x27;(t)\)</span>{% endraw %} denotes its derivative. When a single-variable function is indexed with superscript (or sometimes subscripts), we use the time derivative notation to denote its derivative.</p>

<p>Assume {% raw %}<span class="math inline">\(M\)</span>{% endraw %} is connected for the distance discussion. For any two points {% raw %}<span class="math inline">\(p,q \in M\)</span>{% endraw %}, define the <em>distance</em> as </p>

{% raw %}<span id="eq:distance-pq"></span><div class="math display">\[
    d(p,q) = \inf \left\{ L(\gamma) : \gamma:[a,b] \to M \text{ where } \gamma(a) = p, \gamma(b) = q, \text{ and $\gamma$ is piecewise smooth} \right\} ~.\tag{4}\]</div>{% endraw %}
<p>Connectedness and local coordinate balls imply that any two points can be joined by a piecewise smooth curve: the set reachable from a fixed point is open, and its complement is open by the same local argument. Thus {% raw %}<span class="math inline">\(d(p,q)\)</span>{% endraw %} is finite. Reversing and concatenating curves prove symmetry and the triangle inequality.</p>
<p>For positivity and the topology, take coordinates {% raw %}<span class="math inline">\(x(p)=0\)</span>{% endraw %} and a closed coordinate ball {% raw %}<span class="math inline">\(\overline B_{2r}\)</span>{% endraw %} contained in the chart. Compactness and positive definiteness give constants {% raw %}<span class="math inline">\(0&lt;c\leq C\)</span>{% endraw %} such that {% raw %}<span class="math inline">\(c|v|^2\leq g_x(v,v)\leq C|v|^2\)</span>{% endraw %} there. Straight coordinate segments give {% raw %}<span class="math inline">\(d(p,q)\leq\sqrt C\,|x(q)|\)</span>{% endraw %} for {% raw %}<span class="math inline">\(q\in B_r\)</span>{% endraw %}. Any curve from {% raw %}<span class="math inline">\(p\)</span>{% endraw %} that first reaches the coordinate sphere of radius {% raw %}<span class="math inline">\(\rho\leq r\)</span>{% endraw %} has length at least {% raw %}<span class="math inline">\(\sqrt c\,\rho\)</span>{% endraw %}, by integrating its Euclidean speed up to first exit. A curve to {% raw %}<span class="math inline">\(q\in B_r\)</span>{% endraw %} either stays in the ball, with length at least {% raw %}<span class="math inline">\(\sqrt c|x(q)|\)</span>{% endraw %}, or exits it, with length at least {% raw %}<span class="math inline">\(\sqrt c r\)</span>{% endraw %}. These estimates give {% raw %}<span class="math inline">\(d(p,q)&gt;0\)</span>{% endraw %} for {% raw %}<span class="math inline">\(p\ne q\)</span>{% endraw %} and show that small coordinate balls and metric balls contain one another. Therefore {% raw %}<span class="math inline">\(d\)</span>{% endraw %} is a metric inducing the manifold topology.</p>

<div id="result-1" class="lemma" data-note-number="1" data-note-kind="Lemma">
<p><strong>Lemma 1 (Reparametrization).</strong> Let {% raw %}<span class="math inline">\(\psi:[\alpha,\beta]\to[a,b]\)</span>{% endraw %} be a smooth diffeomorphism of intervals, increasing or decreasing. Then {% raw %}<span class="math inline">\(L(\gamma\circ\psi)=L(\gamma)\)</span>{% endraw %}.</p>
<p><em>Proof.</em> The chain rule gives {% raw %}<span class="math inline">\(|(\gamma\circ\psi)'(s)|=|\gamma'(\psi(s))|\,|\psi'(s)|\)</span>{% endraw %}. Change variables in the length integral, reversing the integration bounds when {% raw %}<span class="math inline">\(\psi\)</span>{% endraw %} decreases. The absolute value exactly accounts for this reversal. Energy instead contains {% raw %}<span class="math inline">\(|\psi'|^2\)</span>{% endraw %}, so it is generally not invariant. ◻</p>
</div>
<p>Now, by way of notation, we write {% raw %}<span class="math inline">\(g^{ij} = (g_{ij})^{-1}\)</span>{% endraw %}. By direct calculations, we have {% raw %}<span class="math inline">\(g^{i\ell} g_{\ell j} = \delta^i_j\)</span>{% endraw %}. Furthermore, we write {% raw %}<span class="math inline">\(g_{j\ell,k} = \dpd{}{{x^{k}}} g_{j\ell}\)</span>{% endraw %}.</p>

<div id="result-2" class="definition" data-note-number="2" data-note-kind="Definition">
<p><strong>Definition 2</strong>.  The <em>Christoffel symbol</em> is defined as </p>

{% raw %}<div class="math display">\[\Gamma_{jk}^{i} = \frac12 g^{i\ell} (g_{j\ell,k} + g_{k\ell,j} - g_{jk,\ell})\]</div>{% endraw %}
<p> in local coordinates.</p>

</div>
<p>Length is unchanged by reparametrization, whereas energy also depends on how fast the curve is traversed. We obtain the geodesic equation by varying the energy with the endpoints fixed. The Euler–Lagrange calculation below turns this variational condition into a system of ordinary differential equations.</p>

<span id="eq:energy-functional"></span><span id="eq:euler-lagrange-ode"></span>
<div id="prop:euler-lagrange-ode" class="proposition" data-note-number="3" data-note-kind="Proposition">
<p><strong>Proposition 3.</strong> In a coordinate domain {% raw %}<span class="math inline">\(\Omega\)</span>{% endraw %}, let {% raw %}<span class="math inline">\(L(x,v)=\frac12g_{ij}(x)v^iv^j\)</span>{% endraw %} and</p>
<p> {% raw %}<div class="math display">\[I[x]=\int_a^b L(x(t),\dot x(t))\,dt.\tag{5}\]</div>{% endraw %}</p>
<p> A {% raw %}<span class="math inline">\(C^2\)</span>{% endraw %} curve with fixed endpoints is stationary for all smooth endpoint-zero variations if and only if</p>
<p> {% raw %}<div class="math display">\[\ddot x^i+\Gamma^i_{jk}(x)\dot x^j\dot x^k=0,\qquad 1\leq i\leq d.\tag{6}\]</div>{% endraw %}</p>
<p> In particular every local energy minimizer is stationary and satisfies this equation. Stationarity alone does not assert global minimization.</p>
</div>
<div id="result-4" class="definition" data-note-number="4" data-note-kind="Definition">
<p><strong>Definition 4</strong>.  A smooth curve {% raw %}<span class="math inline">\(\gamma : [a,b] \to M\)</span>{% endraw %} solving <a href="#eq:euler-lagrange-ode" data-reference-type="eqref" data-reference="eq:euler-lagrange-ode">(6)</a> is called <em>geodesic</em>.</p>

</div>
<span id="eq:euler-lagrange-odes"></span>
<div class="proof">
<p><em>Proof of Proposition 3.</em> Let {% raw %}<span class="math inline">\(v:[a,b]\to\mathbb R^d\)</span>{% endraw %} be smooth and zero at both endpoints. For sufficiently small {% raw %}<span class="math inline">\(\varepsilon\)</span>{% endraw %}, {% raw %}<span class="math inline">\(x+\varepsilon v\)</span>{% endraw %} stays in the coordinate domain, by compactness of the curve image and openness of the domain. Differentiation under the integral is valid for the smooth integrand on this compact parameter set. Thus</p>
<p> {% raw %}<div class="math display">\[\left.\frac d{d\varepsilon}I[x+\varepsilon v]\right|_0 =\int_a^b\left(\frac{\partial L}{\partial x^k}v^k+ \frac{\partial L}{\partial\dot x^k}\dot v^k\right)dt =\int_a^b\left(\frac{\partial L}{\partial x^k}-\frac d{dt}\frac{\partial L}{\partial\dot x^k}\right)v^kdt.\]</div>{% endraw %}</p>
<p> The boundary term vanishes because {% raw %}<span class="math inline">\(v(a)=v(b)=0\)</span>{% endraw %}. If the integral is zero for every such {% raw %}<span class="math inline">\(v\)</span>{% endraw %}, each continuous coefficient must vanish: a coefficient of fixed nonzero sign on a small interval can be tested against a nonnegative bump function supported there. This is the fundamental lemma of the calculus of variations, and gives</p>
<p> {% raw %}<div class="math display">\[\frac{\partial L}{\partial x^k}-\frac d{dt}\frac{\partial L}{\partial\dot x^k}=0.\tag{7}\]</div>{% endraw %}</p>
<p> Here {% raw %}<span class="math inline">\(\partial L/\partial\dot x^k=g_{kj}\dot x^j\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\partial L/\partial x^k=\frac12(\partial_k g_{ij})\dot x^i\dot x^j\)</span>{% endraw %}. Substituting gives</p>
<p> {% raw %}<div class="math display">\[g_{kj}\ddot x^j+(\partial_i g_{kj})\dot x^i\dot x^j-\frac12(\partial_k g_{ij})\dot x^i\dot x^j=0.\]</div>{% endraw %}</p>
<p> Symmetrize the middle coefficient in {% raw %}<span class="math inline">\(i,j\)</span>{% endraw %}, then multiply by {% raw %}<span class="math inline">\(g^{\ell k}\)</span>{% endraw %}. The coefficient of {% raw %}<span class="math inline">\(\dot x^i\dot x^j\)</span>{% endraw %} becomes {% raw %}<span class="math inline">\(\Gamma^\ell_{ij}\)</span>{% endraw %}, proving (6). Reversing the integration-by-parts calculation proves the converse. For a curve crossing several charts, use variations supported in individual coordinate intervals; the resulting equation is the coordinate form of {% raw %}<span class="math inline">\(\nabla_{\dot\gamma}\dot\gamma=0\)</span>{% endraw %}, so it agrees on overlaps. ◻</p>
</div>
<span id="eq:geod-one"></span><span id="eq:geod-two"></span>
<div id="result-5" class="example" data-note-number="5" data-note-kind="Example">
<p><strong>Example 5 (Geodesics of a round sphere).</strong> For a sphere of radius {% raw %}<span class="math inline">\(R&gt;0\)</span>{% endraw %}, use</p>
<p> {% raw %}<div class="math display">\[X(\theta,\varphi)=(R\sin\theta\cos\varphi,R\sin\theta\sin\varphi,R\cos\theta),\quad0&lt;\theta&lt;\pi.\]</div>{% endraw %}</p>
<p> The coordinate vectors have inner products {% raw %}<span class="math inline">\(\langle X_\theta,X_\theta\rangle=R^2\)</span>{% endraw %}, {% raw %}<span class="math inline">\(\langle X_\theta,X_\varphi\rangle=0\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(\langle X_\varphi,X_\varphi\rangle=R^2\sin^2\theta\)</span>{% endraw %}. Therefore</p>
<p> {% raw %}<div class="math display">\[ds^2=R^2(d\theta^2+\sin^2\theta\,d\varphi^2),\qquad (g_{ij})=\begin{pmatrix}R^2&amp;0\\0&amp;R^2\sin^2\theta\end{pmatrix},\quad (g^{ij})=\begin{pmatrix}R^{-2}&amp;0\\0&amp;R^{-2}\sin^{-2}\theta\end{pmatrix}.\]</div>{% endraw %}</p>
<p> The only nonzero first-kind symbols are {% raw %}<span class="math inline">\(\Gamma_{\theta\varphi,\varphi}=\Gamma_{\varphi\theta,\varphi}=R^2\sin\theta\cos\theta\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\Gamma_{\varphi\varphi,\theta}=-R^2\sin\theta\cos\theta\)</span>{% endraw %}. Raising the last index gives {% raw %}<span class="math inline">\(\Gamma^\theta_{\varphi\varphi}=-\sin\theta\cos\theta\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\Gamma^\varphi_{\theta\varphi}=\Gamma^\varphi_{\varphi\theta}=\cot\theta\)</span>{% endraw %}. Thus</p>
<p> {% raw %}<div class="math display">\[\ddot\theta-\sin\theta\cos\theta\,\dot\varphi^2=0,\qquad \ddot\varphi+2\cot\theta\,\dot\theta\dot\varphi=0.\tag{8}\]</div>{% endraw %}</p>
<p> The second equation, without division by {% raw %}<span class="math inline">\(\dot\varphi\)</span>{% endraw %}, is</p>
<p> {% raw %}<div class="math display">\[\frac d{dt}(\sin^2\theta\,\dot\varphi)=0,\qquad\sin^2\theta\,\dot\varphi=C.\]</div>{% endraw %}</p>
<p> The squared speed {% raw %}<span class="math inline">\(c^2=R^2(\dot\theta^2+\sin^2\theta\,\dot\varphi^2)\)</span>{% endraw %} is constant along a geodesic. When {% raw %}<span class="math inline">\(c&gt;0\)</span>{% endraw %}, rescale the affine parameter to arrange {% raw %}<span class="math inline">\(c=1\)</span>{% endraw %}. On an interval where {% raw %}<span class="math inline">\(\dot\theta\ne0\)</span>{% endraw %}, this yields</p>
<p> {% raw %}<div class="math display">\[\dot\theta=\pm R^{-1}\sqrt{1-R^2C^2/\sin^2\theta},\qquad \frac{d\varphi}{d\theta}=\pm\frac{RC}{\sin\theta\sqrt{\sin^2\theta-R^2C^2}}.\]</div>{% endraw %}</p>
<p> For {% raw %}<span class="math inline">\(0&lt;|RC|&lt;1\)</span>{% endraw %}, substitute {% raw %}<span class="math inline">\(u=RC\cot\theta/\sqrt{1-R^2C^2}\)</span>{% endraw %}. Integration gives {% raw %}<span class="math inline">\(\varphi=\varphi_0\pm\arccos u\)</span>{% endraw %}, so</p>
<p> {% raw %}<div class="math display">\[\sin\theta\cos(\varphi-\varphi_0)=\frac{RC}{\sqrt{1-R^2C^2}}\cos\theta.\]</div>{% endraw %}</p>
<p> In Cartesian coordinates this is the equation of a plane through the origin. Its intersection with the sphere is a great circle. The omitted cases are also great circles: {% raw %}<span class="math inline">\(C=0\)</span>{% endraw %} gives meridians, while {% raw %}<span class="math inline">\(|RC|=1\)</span>{% endraw %} forces {% raw %}<span class="math inline">\(\theta=\pi/2\)</span>{% endraw %} and gives the equator. A zero-speed geodesic is constant.</p>
<p>A coordinate-independent check completes the argument through poles and turning points. For an induced metric, the first variation gives that an energy-stationary curve has ambient acceleration perpendicular to the sphere: test against all endpoint-zero tangent fields and integrate the Euclidean energy by parts. Therefore {% raw %}<span class="math inline">\(\gamma''=\lambda\gamma\)</span>{% endraw %}. Differentiating {% raw %}<span class="math inline">\(|\gamma|^2=R^2\)</span>{% endraw %} twice gives {% raw %}<span class="math inline">\(\lambda=-c^2/R^2\)</span>{% endraw %}, while {% raw %}<span class="math inline">\(\langle\gamma'',\gamma'\rangle=0\)</span>{% endraw %} gives constant speed. Solving this constant-coefficient equation gives, for {% raw %}<span class="math inline">\(c&gt;0\)</span>{% endraw %},</p>
<p> {% raw %}<div class="math display">\[\gamma(t)=\cos(ct/R)\,\gamma(0)+\frac R c\sin(ct/R)\,\gamma'(0).\]</div>{% endraw %}</p>
<p> It stays in the two-plane spanned by its initial position and velocity. Conversely this formula has normal acceleration and hence satisfies the geodesic equation. Thus every nonconstant geodesic is an affinely parametrized great circle, not necessarily a unit-speed or globally minimizing arc.</p>
</div>
<div id="result-6" class="example" data-note-number="6" data-note-kind="Example">
<p><strong>Example 6</strong> (Poincaré Half-Plane).  The Poincaré half-plane, otherwise known as the upper-half plane, is </p>

{% raw %}<div class="math display">\[\mathbb{H} = \left\{ (x,y) \in \mathbb R^2 : y &gt; 0 \right\} ~.\]</div>{% endraw %}
<p> The Poincaré half-plane admits the metric </p>

{% raw %}<div class="math display">\[\dif s^2 = \frac{\dif x^2 + \dif y^2}{y^2} ~.\]</div>{% endraw %}
<p> Reading off the metric coefficients, we have </p>

{% raw %}<div class="math display">\[g_{ij} = \begin{pmatrix}
            \frac{1}{y^2} &amp; 0 \\ 0 &amp; \frac{1}{y^2}
        \end{pmatrix} ~,~ g^{ij} = \begin{pmatrix}
            y^2 &amp; 0 \\ 0 &amp; y^2
        \end{pmatrix} ~.\]</div>{% endraw %}
<p> Using the standard notation {% raw %}<span class="math inline">\(i,j \in \{1,2\}\)</span>{% endraw %}, the Christoffel symbols of the first kind are </p>

{% raw %}<div class="math display">\[\begin{aligned}
        \Gamma_{11,1} &amp;= \frac12 (0 + 0 - 0) = 0 \\
        \Gamma_{11,2} &amp;= \frac12 \left(0 + 0 - \left( -\frac{2}{y^3} \right) \right) = \frac{1}{y^3} \\
        \Gamma_{12,1} &amp;= -\frac{1}{y^3} \\
        \Gamma_{12,2} &amp;= 0 \\
        \Gamma_{22,1} &amp;= 0 \\
        \Gamma_{22,2} &amp;= -\frac{1}{y^3}
    
\end{aligned}\]</div>{% endraw %}
<p> and some symbols are omitted here by a symmetry argument. Raising the third index with the inverse metric, we obtain the Christoffel symbols of the second kind {% raw %}<span class="math inline">\(\Gamma_{ij}^k = g^{kl} \Gamma_{ij,l}\)</span>{% endraw %}: </p>

{% raw %}<div class="math display">\[\begin{aligned}
        \Gamma_{12}^1 = \Gamma_{21}^1 &amp;= g^{11} \Gamma_{12,1} = y^2 \left( -\frac{1}{y^3} \right) = -\frac{1}{y} \\
        \Gamma_{11}^2 &amp;= g^{22} \Gamma_{11,2} = y^2 \left( \frac{1}{y^3} \right) = \frac{1}{y} \\
        \Gamma_{22}^2 &amp;= g^{22} \Gamma_{22,2} = y^2 \left( -\frac{1}{y^3} \right) = -\frac{1}{y}
    
\end{aligned}\]</div>{% endraw %}
<p> with all other symbols being zero. For {% raw %}<span class="math inline">\(k=1,2\)</span>{% endraw %}, we obtain the following geodesic equations from {% raw %}<span class="math inline">\(\Ddot{x}^k + \Gamma_{ij}^k \dot{x}^i \dot{x}^j = 0\)</span>{% endraw %}: </p>

{% raw %}<div class="math display">\[\begin{aligned}
        \Ddot{x} + \Gamma_{12}^1 \dot{x} \dot{y} + \Gamma_{21}^1 \dot{x} \dot{y} &amp;= 0 \\
        \Ddot{y} + \Gamma_{11}^2 \dot{x}^2 + \Gamma_{22}^2 \dot{y}^2 &amp;= 0
    
\end{aligned}\]</div>{% endraw %}
<p> i.e. </p>

{% raw %}<span id="eq:geod-three"></span><span id="eq:geod-four"></span><div class="math display">\[\begin{aligned}
         \Ddot{x} - \frac{2 \dot x \dot y}{y} &amp;= 0 \\
         \Ddot{y} + \frac{\dot{x}^2 - \dot{y}^2}{y} &amp;= 0
    
\end{aligned}\tag{9}\]</div>{% endraw %}
<p>There are two cases. If {% raw %}<span class="math inline">\(\dot x = 0\)</span>{% endraw %}, then <a href="#eq:geod-three" data-reference-type="eqref" data-reference="eq:geod-three">(9)</a> is trivially satisfied, and <a href="#eq:geod-four" data-reference-type="eqref" data-reference="eq:geod-four">(9)</a> reads {% raw %}<span class="math inline">\(\Ddot{y} - \frac{\dot{y}^2}{y} = 0\)</span>{% endraw %}. This means {% raw %}<span class="math inline">\(x = \text{constant}\)</span>{% endraw %}, i.e. one type of geodesic is straight vertical lines in the upper-half plane.</p>

<p>Alternatively, if {% raw %}<span class="math inline">\(\dot x \neq 0\)</span>{% endraw %}, then <a href="#eq:geod-three" data-reference-type="eqref" data-reference="eq:geod-three">(9)</a> can be rewritten as {% raw %}<span class="math inline">\(\dod{}{t} \left( \frac{\dot x}{y^2} \right) = 0\)</span>{% endraw %}. This means {% raw %}<span class="math inline">\(\dot x = a y^2\)</span>{% endraw %} for some constant {% raw %}<span class="math inline">\(a \neq 0\)</span>{% endraw %}. Note that {% raw %}<span class="math inline">\(a = 0\)</span>{% endraw %} recovers the previous case. After rescaling a nonconstant geodesic to be parametrized by arclength, we obtain </p>

{% raw %}<div class="math display">\[\frac{\dot x^2 + \dot y^2}{y^2} = 1\]</div>{% endraw %}
<p> (because this chosen parametrization has unit speed). Therefore, by the chain rule, </p>

{% raw %}<div class="math display">\[\left( \dod{y}{x} \right)^2 = \frac{\dot y^2}{\dot x^2} = \frac{y^2 - \dot{x}^2}{\dot{x}^2}\]</div>{% endraw %}
<p> which, by substituting {% raw %}<span class="math inline">\(\dot x^2 = a^2 y^4\)</span>{% endraw %}, is equivalent to </p>

{% raw %}<div class="math display">\[\left( \dod{y}{x} \right)^2 = \frac{y^2 - a^2 y^4}{a^2 y^4} = \frac{1 - a^2 y^2}{a^2 y^2} \implies \dod{y}{x} = \pm \frac{\sqrt{1 - a^2 y^2}}{a y} ~.\]</div>{% endraw %}
<p> Separation of variables and integrating directly gives </p>

{% raw %}<div class="math display">\[\begin{aligned}
        \frac{\pm a y}{\sqrt{1 - a^2 y^2}} \dif y &amp;= \dif x \\
        \implies \mp \frac1a \sqrt{1-a^2 y^2} &amp;= x + b \\
        \implies \frac{1}{a^2} (1 - a^2 y^2) &amp;= (x+b)^2 \\
        \implies (x+b)^2 + y^2 &amp;= \frac{1}{a^2}
    
\end{aligned}\]</div>{% endraw %}
<p> which is the equation of a circle in {% raw %}<span class="math inline">\(\mathbb R^2\)</span>{% endraw %}. In the context of {% raw %}<span class="math inline">\(\mathbb{H}\)</span>{% endraw %}, this represents a semicircle. Therefore, another type of geodesic in {% raw %}<span class="math inline">\(\mathbb{H}\)</span>{% endraw %} is semicircles centred anywhere on the {% raw %}<span class="math inline">\(x\)</span>{% endraw %}-axis.</p>

<p>The vertical case also determines the parameter: {% raw %}<span class="math inline">\((\log y)''=0\)</span>{% endraw %}, so {% raw %}<span class="math inline">\(y(t)=y_0e^{ct}\)</span>{% endraw %} and {% raw %}<span class="math inline">\(x(t)=x_0\)</span>{% endraw %}; unit speed means {% raw %}<span class="math inline">\(|c|=1\)</span>{% endraw %}. In the circular case, the integrations are local between turning points of {% raw %}<span class="math inline">\(y\)</span>{% endraw %}. A global unit-speed parametrization of the upper semicircle of radius {% raw %}<span class="math inline">\(r\)</span>{% endraw %} centred at {% raw %}<span class="math inline">\(b\)</span>{% endraw %} is</p>
<p> {% raw %}<div class="math display">\[x(t)=b+r\tanh(t-t_0),\qquad y(t)=r\operatorname{sech}(t-t_0).\]</div>{% endraw %}</p>
<p> Direct differentiation gives {% raw %}<span class="math inline">\(\dot x/y^2=1/r\)</span>{% endraw %} and {% raw %}<span class="math inline">\((\dot x^2+\dot y^2)/y^2=1\)</span>{% endraw %}, and substitution verifies both geodesic equations, including the top point where {% raw %}<span class="math inline">\(\dot y=0\)</span>{% endraw %}. Reversing the parameter covers the other direction. The geodesic initial-value uniqueness theorem then shows that these curves, the vertical curves and the constant curves exhaust all possibilities.</p>
</div>
<p>The geodesic equation is a <em>coupled</em> second-order ODE. Written as a first-order system for {% raw %}<span class="math inline">\((x,\dot x)\)</span>{% endraw %}, its right-hand side is smooth, so each initial pair {% raw %}<span class="math inline">\((p,v)\)</span>{% endraw %} determines a unique maximal geodesic {% raw %}<span class="math inline">\(c_v\)</span>{% endraw %}, smoothly depending on its initial data wherever defined. Affine rescaling and uniqueness give</p>
<p> {% raw %}<div class="math display">\[c_{\lambda v}(t)=c_v(\lambda t)\]</div>{% endraw %}</p>
<p> whenever both sides are defined. Local existence and compactness of the unit sphere in {% raw %}<span class="math inline">\(T_pM\)</span>{% endraw %} supply a common small existence time for unit initial velocities. This time cannot be chosen arbitrarily close to one on an incomplete manifold. Instead, rescaling shows that sufficiently small initial velocities exist through time one; this is what makes the exponential map defined near zero.</p>
<div id="def:exp" class="definition" data-note-number="7" data-note-kind="Definition">
<p><strong>Definition 7.</strong> For {% raw %}<span class="math inline">\(p\in M\)</span>{% endraw %}, let {% raw %}<span class="math inline">\(V_p\subset T_pM\)</span>{% endraw %} be the set of initial velocities whose maximal geodesics exist through time one. The exponential map is</p>
<p> {% raw %}<div class="math display">\[\exp_p:V_p\longrightarrow M,\qquad\exp_p(v)=c_v(1).\]</div>{% endraw %}</p>
<p> The maximal-flow domain is open, so {% raw %}<span class="math inline">\(V_p\)</span>{% endraw %} is open; it contains zero and a neighbourhood of zero. It need not be all of {% raw %}<span class="math inline">\(T_pM\)</span>{% endraw %} without a completeness assumption.</p>
</div>
<div id="result-8" class="remark" data-note-number="8" data-note-kind="Remark">
<p><strong>Remark 8.</strong> The zero initial velocity produces the constant curve {% raw %}<span class="math inline">\(c_0(t)=p\)</span>{% endraw %}, defined for all times, so {% raw %}<span class="math inline">\(0\in V_p\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\exp_p(0)=p\)</span>{% endraw %}. Smooth dependence for the geodesic ODE makes {% raw %}<span class="math inline">\(\exp_p\)</span>{% endraw %} smooth on {% raw %}<span class="math inline">\(V_p\)</span>{% endraw %}. For {% raw %}<span class="math inline">\(v\in V_p\)</span>{% endraw %}, the scaling identity gives {% raw %}<span class="math inline">\(c_v(t)=\exp_p(tv)\)</span>{% endraw %} at every time for which the radial expression is defined.</p>
</div>
<div id="lem:exp-map-diffeom-local" class="lemma" data-note-number="9" data-note-kind="Lemma">
<p><strong>Lemma 9</strong>.  The exponential map at {% raw %}<span class="math inline">\(p \in M\)</span>{% endraw %} maps a neighbourhood of {% raw %}<span class="math inline">\(0 \in T_p M\)</span>{% endraw %} diffeomorphically onto a neighbourhood of {% raw %}<span class="math inline">\(p \in M\)</span>{% endraw %}.</p>

</div>
<div class="proof">
<p><em>Proof.</em> Identify {% raw %}<span class="math inline">\(T_0(T_pM)\)</span>{% endraw %} canonically with the vector space {% raw %}<span class="math inline">\(T_pM\)</span>{% endraw %}. Since {% raw %}<span class="math inline">\(\exp_p(tv)=c_v(t)\)</span>{% endraw %} near zero,</p>
<p> {% raw %}<div class="math display">\[(d\exp_p)_0(v)=\left.\frac d{dt}\right|_{t=0}\exp_p(tv)=c_v'(0)=v.\]</div>{% endraw %}</p>
<p> Thus the differential is the identity from {% raw %}<span class="math inline">\(T_0(T_pM)\)</span>{% endraw %} to {% raw %}<span class="math inline">\(T_pM\)</span>{% endraw %}, hence invertible. Smoothness of {% raw %}<span class="math inline">\(\exp_p\)</span>{% endraw %}, already supplied by ODE dependence, allows application of the inverse function theorem. It yields neighbourhoods of zero and {% raw %}<span class="math inline">\(p\)</span>{% endraw %} on which {% raw %}<span class="math inline">\(\exp_p\)</span>{% endraw %} is a diffeomorphism. ◻</p>
</div>
<p>Lemma <a href="#lem:exp-map-diffeom-local" data-reference-type="ref" data-reference="lem:exp-map-diffeom-local">9</a> gives us the ability to define <em>normal coordinates</em>. Because {% raw %}<span class="math inline">\(\exp_p\)</span>{% endraw %} is a diffeomorphism from a neighbourhood {% raw %}<span class="math inline">\(U\)</span>{% endraw %} of {% raw %}<span class="math inline">\(0 \in T_p M\)</span>{% endraw %} to neighbourhood {% raw %}<span class="math inline">\(V\)</span>{% endraw %} of {% raw %}<span class="math inline">\(p \in M\)</span>{% endraw %}, and that {% raw %}<span class="math inline">\(T_p M\)</span>{% endraw %} can be identified with the Euclidean space, {% raw %}<span class="math inline">\(\{\{U,V\}, \exp^{-1}\}\)</span>{% endraw %} is a local chart of {% raw %}<span class="math inline">\(M\)</span>{% endraw %} near {% raw %}<span class="math inline">\(p \in M\)</span>{% endraw %}. Now, fix an orthonormal basis of {% raw %}<span class="math inline">\(T_p M\)</span>{% endraw %}, i.e. let {% raw %}<span class="math inline">\(\{X^i\}\)</span>{% endraw %} be coordinates for {% raw %}<span class="math inline">\(U\)</span>{% endraw %}.</p>

<div id="def:normal-coordinates" class="definition" data-note-number="10" data-note-kind="Definition">
<p><strong>Definition 10</strong>.  The local chart {% raw %}<span class="math inline">\(\{U, \{x^1,\cdots,x^n\} \}\)</span>{% endraw %} is the <em>normal coordinates</em> system near {% raw %}<span class="math inline">\(p \in M\)</span>{% endraw %}.</p>

</div>
<p>Normal coordinates make geodesics through the centre into radial straight lines in the coordinate domain. More precisely, let {% raw %}<span class="math inline">\(X_p = x^i \pd{}{{x^i}}\)</span>{% endraw %} be a tangent vector in {% raw %}<span class="math inline">\(T_p M\)</span>{% endraw %}, and consider the geodesic {% raw %}<span class="math inline">\(\gamma(t) = \exp_p (t X_p)\)</span>{% endraw %}. Then, in normal coordinates, we can express {% raw %}<span class="math inline">\(\gamma(t) = (tx^1,\cdots,tx^n)\)</span>{% endraw %}, i.e. this is called the radial geodesic.</p>

<div id="lem:normal-coord-properties" class="lemma" data-note-number="11" data-note-kind="Lemma">
<p><strong>Lemma 11</strong> (Properties of Normal Coordinates).  Let {% raw %}<span class="math inline">\(\{U, \{x^1,\cdots,x^n\} \}\)</span>{% endraw %} be a normal coordinates system near {% raw %}<span class="math inline">\(p \in M\)</span>{% endraw %}. Then,</p>

<ol>
<li><p>{% raw %}<span class="math inline">\(g_{ij}(p) = \delta_{ij}\)</span>{% endraw %}.</p></li>
<li><p>{% raw %}<span class="math inline">\(\Gamma_{ij}^k(p) = 0\)</span>{% endraw %} for all {% raw %}<span class="math inline">\(i,j,k\)</span>{% endraw %}.</p></li>
<li><p>{% raw %}<span class="math inline">\(\pd{}{{x^k}} g_{ij}(p) = 0\)</span>{% endraw %}.</p></li>
</ol>
</div>
<div class="proof">
<p><em>Proof.</em> Choose the normal coordinates using an orthonormal basis {% raw %}<span class="math inline">\(e_1,\ldots,e_d\)</span>{% endraw %} of {% raw %}<span class="math inline">\(T_pM\)</span>{% endraw %}. The coordinate vector at the centre is {% raw %}<span class="math inline">\((d\exp_p)_0e_i=e_i\)</span>{% endraw %}, so {% raw %}<span class="math inline">\(g_{ij}(p)=\delta_{ij}\)</span>{% endraw %}.</p>
<p>For every initial vector {% raw %}<span class="math inline">\(v\)</span>{% endraw %}, the radial geodesic has coordinates {% raw %}<span class="math inline">\(tv\)</span>{% endraw %}. At {% raw %}<span class="math inline">\(t=0\)</span>{% endraw %}, its geodesic equation gives {% raw %}<span class="math inline">\(\Gamma^k_{ij}(p)v^iv^j=0\)</span>{% endraw %}. The Christoffel coefficients are symmetric in {% raw %}<span class="math inline">\(i,j\)</span>{% endraw %}. Taking {% raw %}<span class="math inline">\(v=e_i\)</span>{% endraw %} gives the diagonal coefficients zero; taking {% raw %}<span class="math inline">\(v=e_i+e_j\)</span>{% endraw %} then gives twice each off-diagonal coefficient zero. Hence all {% raw %}<span class="math inline">\(\Gamma^k_{ij}(p)\)</span>{% endraw %} vanish.</p>
<p>Metric compatibility gives the coordinate identity</p>
<p> {% raw %}<div class="math display">\[\partial_k g_{ij}=g_{\ell j}\Gamma^\ell_{ki}+g_{i\ell}\Gamma^\ell_{kj}.\]</div>{% endraw %}</p>
<p> It can also be checked directly by inserting the Christoffel formula and cancelling the three metric derivatives. At {% raw %}<span class="math inline">\(p\)</span>{% endraw %}, both terms vanish, yielding {% raw %}<span class="math inline">\(\partial_k g_{ij}(p)=0\)</span>{% endraw %}. ◻</p>
</div>
<div id="result-12" class="remark" data-note-number="12" data-note-kind="Remark">
<p><strong>Remark 12</strong> (Riemannian polar coordinates).  Let {% raw %}<span class="math inline">\(M\)</span>{% endraw %} be a differentiable manifold. Take any {% raw %}<span class="math inline">\(p \in M\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(r &gt; 0\)</span>{% endraw %} small enough such that the restriction of {% raw %}<span class="math inline">\(\exp_p\)</span>{% endraw %} to {% raw %}<span class="math inline">\(B_r(0) \subset T_p (M)\)</span>{% endraw %} is a diffeomorphism onto an open subset {% raw %}<span class="math inline">\(U \subset M\)</span>{% endraw %}. Let {% raw %}<span class="math inline">\((U, \{x^1,\cdots,x^n\})\)</span>{% endraw %} be the corresponding normal coordinates, and {% raw %}<span class="math inline">\((V, \{\varphi^1,\cdots,\varphi^{n-1}\})\)</span>{% endraw %} be a chart on {% raw %}<span class="math inline">\(\mathbb S^{n-1}\)</span>{% endraw %}, and define the “polar coordinates chart” {% raw %}<span class="math inline">\((\mathbb R^+ V, \{y^1,\cdots,y^n\})\)</span>{% endraw %} on {% raw %}<span class="math inline">\(\mathbb R^n\)</span>{% endraw %} by </p>

{% raw %}<div class="math display">\[\begin{aligned}
        \mathbb R^+ V \triangleq \{ rv : r \in \mathbb R^+, v \in V \} \text{ and } (y^1,\cdots,y^n) = \left( \lVert x \rVert, \varphi \left( \frac{x}{\lVert x \rVert} \right) \right) ~.
    
\end{aligned}\]</div>{% endraw %}
<p> By putting {% raw %}<span class="math inline">\(U&#x27; = x^{-1} (\mathbb R^+ V \cap B_r (0))\)</span>{% endraw %}, we have that {% raw %}<span class="math inline">\((U&#x27;, y \circ x)\)</span>{% endraw %} is a chart on {% raw %}<span class="math inline">\(M\)</span>{% endraw %}. We can explicit construct the Riemannian metric in this coordinates system {% raw %}<span class="math inline">\((U&#x27;, y \circ x)\)</span>{% endraw %}.</p>

<p>To do so, first, appealing to the definition of the exponential map, for any vector {% raw %}<span class="math inline">\(v \in T_p M\)</span>{% endraw %}, the curve </p>

{% raw %}<div class="math display">\[\begin{aligned}
        x(t) = tv \text{ for } |t| &lt; \frac{r}{\lVert v \rVert} 
    
\end{aligned}\]</div>{% endraw %}
<p> is a geodesic in {% raw %}<span class="math inline">\(M\)</span>{% endraw %} with respect to the chart {% raw %}<span class="math inline">\((U,x)\)</span>{% endraw %}. For all {% raw %}<span class="math inline">\(v \in V\)</span>{% endraw %} such that {% raw %}<span class="math inline">\(\lVert v \rVert = 1\)</span>{% endraw %}, we have that the curve {% raw %}<span class="math inline">\(x(t)\)</span>{% endraw %} reduces to {% raw %}<span class="math inline">\(y(t) = (t, \varphi(x))\)</span>{% endraw %} in the chart {% raw %}<span class="math inline">\((U&#x27;, y \circ x)\)</span>{% endraw %} (note such a curve {% raw %}<span class="math inline">\(y(t)\)</span>{% endraw %} is well-defined for {% raw %}<span class="math inline">\(t \in (0,r)\)</span>{% endraw %}).</p>

<p>With respect to the chart {% raw %}<span class="math inline">\((U&#x27;, y \circ x)\)</span>{% endraw %}, let {% raw %}<span class="math inline">\(\Gamma^k_{ij} (y)\)</span>{% endraw %} denote the Christoffel symbols, and {% raw %}<span class="math inline">\((h_{ij}(y))\)</span>{% endraw %} denote the matrix representing the Riemannian metric. Then, the geodesic equation reads </p>

{% raw %}<div class="math display">\[\begin{aligned}
        \ddot y^k (t) + \Gamma^k_{ij} (y(t)) \dot y^i (t) \dot y^j (t) = 0 \quad \text{for } t \in (0,r) \text{ and } i \in \{1, \cdots, n\} ~.
    
\end{aligned}\]</div>{% endraw %}
<p> Furthermore, </p>

{% raw %}<div class="math display">\[\begin{aligned}
        \Gamma^k_{ij} (y) = \frac12 h^{k\ell} (y) (h_{i\ell, j} (y) + h_{j\ell, i} (y) - h_{ij,\ell} (y)) \quad \text{for } y \in (0,r) ~.
    
\end{aligned}\]</div>{% endraw %}
<p> It is clear from definition and direct calculations that {% raw %}<span class="math inline">\(\Gamma^k_{11} (y(t)) = 0\)</span>{% endraw %} for all {% raw %}<span class="math inline">\(t \in (0,r)\)</span>{% endraw %} and {% raw %}<span class="math inline">\(i \in \{1,\cdots,n\}\)</span>{% endraw %}. This means that, by the definition of the Christoffel symbol, we have </p>

{% raw %}<div class="math display">\[\begin{aligned}
        h^{k\ell} (y) (2 h_{1\ell, 1}(y) - h_{11,\ell}(y)) = 0  \quad \text{for } y \in \Omega ~,
    
\end{aligned}\]</div>{% endraw %}
<p> where {% raw %}<span class="math inline">\(\Omega = (0,r) \times \varphi(V) \subset \mathbb R^n\)</span>{% endraw %}. Note that the conclusion above holds because, by unfixing {% raw %}<span class="math inline">\(v \in V\)</span>{% endraw %}, {% raw %}<span class="math inline">\(\Gamma^k_{11} (y) = 0\)</span>{% endraw %} for all {% raw %}<span class="math inline">\(y \in \Omega\)</span>{% endraw %}. Multiplying the Christoffel symbol equation by the metric {% raw %}<span class="math inline">\(h_{jk}\)</span>{% endraw %}, summing over {% raw %}<span class="math inline">\(k\)</span>{% endraw %}, and using the fact that the product of a metric and inverse metric is the Kronecker delta, we have </p>

{% raw %}<div class="math display">\[\begin{aligned}
        2 h_{1j, 1}(y) - h_{11,j}(y) = 0 \quad \text{for } y \in \Omega \text{ and } j \in \{1, \cdots, n\} ~.
    
\end{aligned}\]</div>{% endraw %}
<p> For {% raw %}<span class="math inline">\(j=1\)</span>{% endraw %}, this means {% raw %}<span class="math inline">\(h_{11,1} (y) \equiv 0\)</span>{% endraw %}. However, note that, by the change of coordinates formula, for all {% raw %}<span class="math inline">\(y \in \Omega\)</span>{% endraw %}, </p>

{% raw %}<div class="math display">\[\begin{aligned}
        h_{11}(y) = \dpd{{x^i}}{{y^1}} \dpd{{x^\ell}}{{y^1}} g_{i\ell} (x) ~.
    
\end{aligned}\]</div>{% endraw %}
<p> Separate the radial variable from the angular direction by writing </p>

{% raw %}<div class="math display">\[\begin{aligned}
        h_{11}(y) = z^i z^\ell g_{i\ell} (x) ~,
    
\end{aligned}\]</div>{% endraw %}
<p> where {% raw %}<span class="math inline">\(z = \varphi^{-1} (y^2, \cdots, y^n) \in \mathbb S^{n-1} \subset \mathbb R^n\)</span>{% endraw %}. Note the following features of {% raw %}<span class="math inline">\(h_{11}(y)\)</span>{% endraw %}: it is a constant as {% raw %}<span class="math inline">\(y^1\)</span>{% endraw %} varies on {% raw %}<span class="math inline">\((0,r)\)</span>{% endraw %}, but {% raw %}<span class="math inline">\((y^2, \cdots, y^n) \in \varphi(V)\)</span>{% endraw %} is fixed. However, for any fixed {% raw %}<span class="math inline">\((y^2, \cdots, y^n)\)</span>{% endraw %}, letting {% raw %}<span class="math inline">\(y^1 \to 0^+\)</span>{% endraw %} implies {% raw %}<span class="math inline">\(x \to 0 \in \mathbb R^n\)</span>{% endraw %}, so {% raw %}<span class="math inline">\(g_{i\ell} (x) \to \delta_{i\ell}\)</span>{% endraw %}. Because {% raw %}<span class="math inline">\(z\)</span>{% endraw %} is also fixed, we obtain </p>

{% raw %}<div class="math display">\[\begin{aligned}
        \lim\limits_{y^1 \to 0^+} h_{11}(y) = z^i z^\ell \lim\limits_{x \to 0} g_{i\ell}(x) = \sum_{1 \leq i \leq n} (z^i)^2 = 1 ~.
    
\end{aligned}\]</div>{% endraw %}
<p> Therefore, {% raw %}<span class="math inline">\(h_{11}(y) = 1\)</span>{% endraw %} for all {% raw %}<span class="math inline">\(y \in \Omega\)</span>{% endraw %}. We can now extend this argument for all {% raw %}<span class="math inline">\(i = k \geq 2\)</span>{% endraw %}, and we get </p>

{% raw %}<div class="math display">\[\begin{aligned}
        \dpd{}{{y^1}} h_{1j} (y) = 0 \quad \text{for } y \in \Omega \text{ and } j \in \{2, \cdots, n\} ~.
    
\end{aligned}\]</div>{% endraw %}
<p> Using the same arguments as before, we have, for {% raw %}<span class="math inline">\(w = \pd{}{{y^j}} \varphi^{-1} (y^2, \cdots, y^n) \in \mathbb R^n\)</span>{% endraw %}, that </p>

{% raw %}<div class="math display">\[\begin{aligned}
        h_{1j} (y) = z^i y^1 w^\ell g_{i\ell} (x) ~.
    
\end{aligned}\]</div>{% endraw %}
<p> Fixing {% raw %}<span class="math inline">\((y^2, \cdots, y^n) \in \varphi(V)\)</span>{% endraw %} and letting {% raw %}<span class="math inline">\(y^1 \to 0^+\)</span>{% endraw %}, we have that {% raw %}<span class="math inline">\(z\)</span>{% endraw %} and {% raw %}<span class="math inline">\(w\)</span>{% endraw %} are fixed as {% raw %}<span class="math inline">\(g_{i\ell} (x) \to \delta_{i\ell}\)</span>{% endraw %}. As such, </p>

{% raw %}<div class="math display">\[\begin{aligned}
        h_{1j}(y) = 0 \quad \text{for } y \in \Omega \text{ and } j \in \{2, \cdots, n\} ~.
    
\end{aligned}\]</div>{% endraw %}
<p> Collecting everything above, and appealing to the symmetry {% raw %}<span class="math inline">\(h_{i\ell} \equiv h_{\ell i}\)</span>{% endraw %}, we have </p>

{% raw %}<div class="math display">\[(h_{ij}(y)) = \begin{pmatrix}
            1 &amp; 0 &amp; \cdots &amp; 0 \\
            0 &amp; h_{22}(y) &amp; \cdots &amp; h_{2n}(y) \\
            \vdots &amp; \vdots &amp; \ddots &amp; \vdots \\
            0 &amp; h_{n2}(y) &amp; \cdots &amp; h_{nn}(y)
        \end{pmatrix} ~,\]</div>{% endraw %}
<p> The radial coefficient is one and the mixed radial-angular coefficients vanish. Thus the radial direction is orthogonal to the coordinate spheres.</p>

<p>The limit at radial coordinate zero is taken in the original normal chart, where the metric is smooth; the polar chart itself does not contain the centre. In particular, the angular coordinate vector contains the factor {% raw %}<span class="math inline">\(y^1\)</span>{% endraw %}, so the mixed term tends to zero even though an angular coordinate is undefined at the centre. Since the mixed term is constant along each fixed ray, that limit proves it vanishes everywhere on the punctured chart. This is the local Gauss lemma: radial speed is one and radial and angular directions are orthogonal.</p>
</div>
<h3 data-note-section="1" id="the-hamiltonian-formulation-of-geodesics">1. The Hamiltonian Formulation of Geodesics</h3>
<p>The first variation of the energy functional gives us Proposition <a href="#prop:euler-lagrange-ode" data-reference-type="ref" data-reference="prop:euler-lagrange-ode">3</a>. This system admits another formulation on the <em>cotangent bundle</em>. Let {% raw %}<span class="math inline">\(M\)</span>{% endraw %} be a differentiable manifold such that {% raw %}<span class="math inline">\(\dim M = d\)</span>{% endraw %}. By first locally trivializing {% raw %}<span class="math inline">\(T^* M\)</span>{% endraw %} by a chart, i.e. such that </p>

{% raw %}<div class="math display">\[\begin{aligned}
    T^* M\big|_{U} : U \times \mathbb R^d \to M 
\end{aligned}\]</div>{% endraw %}
<p> with coordinates {% raw %}<span class="math inline">\((x^1,\cdots,x^d,p_1,\cdots,p_d)\)</span>{% endraw %}, we can then define the <em>Hamiltonian</em> </p>

{% raw %}<span id="eq:hamiltonian"></span><div class="math display">\[
    H(x,p) = \frac12 g^{ij} (x) p_i p_j ~.\tag{10}\]</div>{% endraw %}
<div id="result-13" class="theorem" data-note-number="13" data-note-kind="Theorem">
<p><strong>Theorem 13</strong>.  The geodesic equations are equivalent to the following system of {% raw %}<span class="math inline">\(2d\)</span>{% endraw %} equations: </p>

{% raw %}<span id="eq:cogeodesic-1"></span><span id="eq:cogeodesic-2"></span><div class="math display">\[\begin{aligned}
 
        \dot x^i &amp;= \dpd{H}{{p_i}} ~~, \quad i \in \llbracket d \rrbracket ~, \\
         \dot p_i &amp;= -\dpd{H}{{x^i}} ~~, \quad i \in \llbracket d \rrbracket ~,
    
\end{aligned}\tag{11}\]</div>{% endraw %}
<p>Here {% raw %}<span class="math inline">\(\partial H/\partial p_i=g^{ij}p_j\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\partial H/\partial x^i=\frac12(\partial_i g^{jk})p_jp_k\)</span>{% endraw %}. The two terms from differentiating the symmetric quadratic form cancel the factor {% raw %}<span class="math inline">\(1/2\)</span>{% endraw %} in the momentum derivative.</p>

</div>
<div class="proof">
<p><em>Proof.</em> The first Hamilton equation gives {% raw %}<span class="math inline">\(\dot x^i=g^{ij}p_j\)</span>{% endraw %}, equivalently {% raw %}<span class="math inline">\(p_i=g_{ij}\dot x^j\)</span>{% endraw %}. Differentiating the identity {% raw %}<span class="math inline">\(g^{jk}g_{k\ell}=\delta^j_\ell\)</span>{% endraw %} gives</p>
{% raw %}<div class="math display">\[\partial_i g^{jk}=-g^{ja}(\partial_i g_{ab})g^{bk}.\]</div>{% endraw %}
<p>Substitute this into the second Hamilton equation, and also differentiate {% raw %}<span class="math inline">\(p_i=g_{ij}\dot x^j\)</span>{% endraw %} along the curve:</p>
{% raw %}<div class="math display">\[\dot p_i=\frac12(\partial_i g_{ab})\dot x^a\dot x^b
 =g_{ij}\ddot x^j+(\partial_k g_{ij})\dot x^k\dot x^j.\]</div>{% endraw %}
<p>Multiplying by {% raw %}<span class="math inline">\(g^{\ell i}\)</span>{% endraw %} and symmetrizing the coefficient of {% raw %}<span class="math inline">\(\dot x^a\dot x^b\)</span>{% endraw %} yields</p>
{% raw %}<div class="math display">\[\ddot x^\ell+\frac12g^{\ell i}
 (\partial_a g_{ib}+\partial_b g_{ia}-\partial_i g_{ab})\dot x^a\dot x^b=0.\]</div>{% endraw %}
<p>The coefficient is {% raw %}<span class="math inline">\(\Gamma^\ell_{ab}\)</span>{% endraw %}, so this is the geodesic equation. Conversely, given a geodesic {% raw %}<span class="math inline">\(x(t)\)</span>{% endraw %}, define {% raw %}<span class="math inline">\(p_i=g_{ij}\dot x^j\)</span>{% endraw %}. The first Hamilton equation holds by construction, and reversing the displayed calculation proves the second. Thus the equivalence holds in both directions. ◻</p>

</div>
<div id="result-14" class="definition" data-note-number="14" data-note-kind="Definition">
<p><strong>Definition 14</strong>.  The system determined by <a href="#eq:cogeodesic-1" data-reference-type="eqref" data-reference="eq:cogeodesic-1">(11)</a> and <a href="#eq:cogeodesic-2" data-reference-type="eqref" data-reference="eq:cogeodesic-2">(11)</a> is called the <em>cogeodesic flow</em> on {% raw %}<span class="math inline">\(T^* M\)</span>{% endraw %}.</p>

</div>
<p>Hamilton’s equations also show that the energy is constant along each integral curve: </p>

{% raw %}<div class="math display">\[\dod{H}{t} = H_{x^i} \dot x^i + H_{p_i} \dot p_i = - \dot p_i \dot x^i + \dot x^i \dot p_i = 0 ~.\]</div>{% endraw %}
<p> Furthermore, note that the cogeodesic flow maps {% raw %}<span class="math inline">\(\mathcal E_\lambda\)</span>{% endraw %} to {% raw %}<span class="math inline">\(\mathcal E_\lambda\)</span>{% endraw %} for every {% raw %}<span class="math inline">\(\lambda \geq 0\)</span>{% endraw %}, where </p>

{% raw %}<span id="eq:energy-level-set"></span><div class="math display">\[
    \mathcal E_\lambda \triangleq \left\{ (x,p) \in T^* M : H(x,p) = \lambda \right\} ~.\tag{12}\]</div>{% endraw %}
<p> <a href="#eq:energy-level-set" data-reference-type="eqref" data-reference="eq:energy-level-set">(12)</a> is often referred to as the <em>level set of the Hamiltonian energy</em>.</p>

<div id="result-15" class="remark" data-note-number="15" data-note-kind="Remark">
<p><strong>Remark 15</strong>.  If {% raw %}<span class="math inline">\(M\)</span>{% endraw %} is compact, then {% raw %}<span class="math inline">\(\mathcal E_\lambda\)</span>{% endraw %} is compact. To see this, this is equivalent to showing the sphere bundle {% raw %}<span class="math inline">\(\pi : SM \to M\)</span>{% endraw %} is compact for compact manifolds {% raw %}<span class="math inline">\(M\)</span>{% endraw %}. Let {% raw %}<span class="math inline">\(\{x_j,v_j\}\subset SM\)</span>{% endraw %} denote any sequence. By compactness of {% raw %}<span class="math inline">\(M\)</span>{% endraw %}, there is a subsequence and a limit point, i.e. some subsequence such that {% raw %}<span class="math inline">\(x_{j_k} \to x\)</span>{% endraw %}. Let {% raw %}<span class="math inline">\(U\)</span>{% endraw %} be a trivializing neighbourhood of {% raw %}<span class="math inline">\(x\)</span>{% endraw %}, i.e. {% raw %}<span class="math inline">\(\pi^{-1}(U) \cong U \times \mathbb S^{n-1}\)</span>{% endraw %}. It follows that {% raw %}<span class="math inline">\((x_j,v_j)\in U \times \mathbb S^{n-1}\)</span>{% endraw %}, by the fact that {% raw %}<span class="math inline">\(x_j \to x \in U\)</span>{% endraw %} for infinitely many {% raw %}<span class="math inline">\(j\)</span>{% endraw %}. Repeat the same argument for the compact manifold {% raw %}<span class="math inline">\(\mathbb S^{n-1}\)</span>{% endraw %}, we have a limit point and another subsequence such that {% raw %}<span class="math inline">\(v_{j_k} \to v\)</span>{% endraw %}. Therefore, any arbitrary sequence {% raw %}<span class="math inline">\(\{x_j,v_j\}\subset SM\)</span>{% endraw %} has an accumulation point in {% raw %}<span class="math inline">\(SM\)</span>{% endraw %}, hence {% raw %}<span class="math inline">\(SM\)</span>{% endraw %} is compact.</p>

<p>For {% raw %}<span class="math inline">\(\lambda&gt;0\)</span>{% endraw %}, the metric identifies the covector level {% raw %}<span class="math inline">\(H=\lambda\)</span>{% endraw %} with a sphere bundle of radius {% raw %}<span class="math inline">\(\sqrt{2\lambda}\)</span>{% endraw %}, so the subsequence argument applies after this identification. For {% raw %}<span class="math inline">\(\lambda=0\)</span>{% endraw %}, positive definiteness makes the level the zero section, which is homeomorphic to compact {% raw %}<span class="math inline">\(M\)</span>{% endraw %}. In the sphere-bundle argument, use a smooth local orthonormal frame (obtained by Gram–Schmidt from a coordinate frame); this identifies the varying metric unit spheres with one fixed {% raw %}<span class="math inline">\(S^{d-1}\)</span>{% endraw %}. The coordinate subsequence converges in that trivialization to a vector in the fibre over the limiting base point. Thus no uniform choice of global coordinates is being assumed.</p>
</div>

<p class="note-reading">Reading: Carmo (1992), Riemannian geometry.</p>


<nav class="note-related" aria-label="Related notes"><p>Related notes: <a href="{% post_url 2022-03-17-tangent-spaces-and-riemannian-metrics %}">Tangent Spaces and Riemannian Metrics</a>; <a href="{% post_url 2022-05-11-connections-lie-brackets-and-curvature %}">Connections, Lie Brackets, and Curvature</a>.</p></nav>

<nav class="note-series" aria-label="Notes in this series"><p>Previous: <a href="{% post_url 2022-03-17-tangent-spaces-and-riemannian-metrics %}">Tangent Spaces and Riemannian Metrics</a> · Next: <a href="{% post_url 2022-04-27-hopf-rinow %}">Hopf-Rinow</a></p></nav>

</div>
