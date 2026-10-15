---
layout: "post"
title: "Bernstein’s Theorem and the Gauss Map"
date: "2023-12-03"
tags: ["math", "differential geometry"]
excerpt: "Combining all the ingredients above, we have a proof of the classical result due to Bernstein."
note_series: "Differential geometry"
note_source: "assets/notes/Differential Geometry - Notes/diff-geo.tex"
redirect_from: ["/2023/12/03/bernsteins-theorem/", "/2024/05/27/the-gauss-map-and-local-coordinates-on-minimal-graphs/"]
---

<div class="note-content" markdown="0">

<p>Throughout, manifolds and maps are smooth unless stated otherwise. On a Riemannian manifold, {% raw %}<span class="math inline">\(\nabla\)</span>{% endraw %} denotes the Levi–Civita connection. The needed local constructions start with <a href="{% post_url 2022-02-05-differentiable-manifolds-charts-constructions-and-examples %}">coordinate charts</a>.</p>

<div id="bernsteins-theorem" data-note-section="title">

</div>
<p>Bernstein’s theorem gives a rigidity result for minimal graphs over the whole plane: every such graph is a plane. The argument combines a curvature estimate with cutoff functions whose Dirichlet energies tend to zero. We say a graph {% raw %}<span class="math inline">\(\Sigma\)</span>{% endraw %} is entire if it is defined over all of {% raw %}<span class="math inline">\(\mathbb R^2\)</span>{% endraw %}. Here is one of the classical results that we wish to prove.</p>

<div id="thm:bernstein" class="theorem" data-note-number="1" data-note-kind="Theorem">
<p><strong>Theorem 1</strong> (Bernstein).  Let {% raw %}<span class="math inline">\(u : \mathbb R^2 \to \mathbb R\)</span>{% endraw %} be an entire solution to the minimal surface equation. Then, {% raw %}<span class="math inline">\(u(x,y) = ax + by + c\)</span>{% endraw %} for some constants {% raw %}<span class="math inline">\(a,b,c\in \mathbb R\)</span>{% endraw %}.</p>

</div>
<p>We use two geometric facts: the upward Gauss map takes values in a hemisphere, and minimal graphs have a uniform quadratic bound for their area inside ambient balls. The first gives a curvature estimate; the second makes logarithmic cutoff energies small. Both facts and the needed estimates are proved below. The Gauss-map coordinate calculations are in the final section of this note, rather than the unrelated projective-space appendix.</p>

<div id="lem:bernstein-prelim-curvature-estimate" class="lemma" data-note-number="2" data-note-kind="Lemma">
<p><strong>Lemma 2.</strong> Let {% raw %}<span class="math inline">\(u\in C^2(\Omega)\)</span>{% endraw %} solve the minimal surface equation and let {% raw %}<span class="math inline">\(\Sigma=\operatorname{Graph}(u)\)</span>{% endraw %}. For every compactly supported Lipschitz function {% raw %}<span class="math inline">\(\eta\)</span>{% endraw %} on {% raw %}<span class="math inline">\(\Sigma\)</span>{% endraw %}, with support away from its boundary,</p>
<p> {% raw %}<div class="math display">\[\int_\Sigma |B|^2\eta^2\,dA\leq16\int_\Sigma|\nabla_\Sigma\eta|^2\,dA.\]</div>{% endraw %}</p>
<p> Here {% raw %}<span class="math inline">\(B\)</span>{% endraw %}, also written {% raw %}<span class="math inline">\(\operatorname{II}\)</span>{% endraw %}, is the vector-valued second fundamental form. No bound on {% raw %}<span class="math inline">\(|\nabla u|\)</span>{% endraw %} is required.</p>
</div>

<div class="proof">
<p><em>Proof.</em> Orient {% raw %}<span class="math inline">\(\Sigma\)</span>{% endraw %} by its upward normal {% raw %}<span class="math inline">\(N\)</span>{% endraw %}. It takes values in the open upper hemisphere {% raw %}<span class="math inline">\(\{(X,Y,Z)\in\mathbb S^2:Z&gt;0\}\)</span>{% endraw %}. Let {% raw %}<span class="math inline">\(\omega\)</span>{% endraw %} be the standard outward-oriented sphere area form. A bounded primitive, rather than contractibility alone, is essential. An explicit choice is</p>
<p> {% raw %}<div class="math display">\[\alpha=\frac{-Y\,dX+X\,dY}{1+Z}.\]</div>{% endraw %}</p>
<p> In polar coordinates on the sphere, {% raw %}<span class="math inline">\(Z=\cos\theta\)</span>{% endraw %}, this is {% raw %}<span class="math inline">\((1-\cos\theta)d\phi\)</span>{% endraw %}, so {% raw %}<span class="math inline">\(d\alpha=\sin\theta\,d\theta\wedge d\phi=\omega\)</span>{% endraw %}, and</p>
<p> {% raw %}<div class="math display">\[|\alpha|=\frac{1-\cos\theta}{\sin\theta}=\tan(\theta/2)\leq1 \quad(0\leq\theta&lt;\pi/2).\]</div>{% endraw %}</p>
<p> The Cartesian formula is smooth at the north pole, removing the polar-coordinate singularity.</p>
<p>The Gauss equation and minimality give {% raw %}<span class="math inline">\(K=-|B|^2/2\)</span>{% endraw %}, and the signed Jacobian formula gives {% raw %}<span class="math inline">\(N^*\omega=K\,dA\)</span>{% endraw %}, with these orientations. Hence</p>
<p> {% raw %}<span id="eq:second-fund-form-estimate"></span><div class="math display">\[|B|^2\,dA=-2N^*\omega=-2\,d(N^*\alpha).\tag{1}\]</div>{% endraw %}
<p></p>
<p> {% raw %}<span id="eq:gauss-map-form-estimate"></span><div class="math display">\[|N^*\alpha|\leq |dN|=|B|.\tag{2}\]</div>{% endraw %}</p></p>
<p> For a smooth compactly supported {% raw %}<span class="math inline">\(\eta\)</span>{% endraw %}, Stokes and Cauchy–Schwarz therefore imply</p>
<p> {% raw %}<span id="eq:step3-est"></span><div class="math display">\[\begin{aligned} \int_\Sigma\eta^2|B|^2\,dA &amp;=4\int_\Sigma\eta\,d\eta\wedge N^*\alpha\\ &amp;\leq4\left(\int_\Sigma\eta^2|B|^2\,dA\right)^{1/2} \left(\int_\Sigma|\nabla_\Sigma\eta|^2\,dA\right)^{1/2}. \end{aligned}\tag{3}\]</div>{% endraw %}</p>
<p> If the first integral is zero there is nothing to prove; otherwise divide by its square root and square. This gives the stated constant {% raw %}<span class="math inline">\(16\)</span>{% endraw %}. For a primitive bounded by {% raw %}<span class="math inline">\(C_\alpha\)</span>{% endraw %}, the constant would be {% raw %}<span class="math inline">\(16C_\alpha^2\)</span>{% endraw %}, not {% raw %}<span class="math inline">\(16C_\alpha\)</span>{% endraw %}.</p>
<p>Lipschitz tests follow by smooth approximation in {% raw %}<span class="math inline">\(W^{1,2}\)</span>{% endraw %} on a fixed compact support. For a {% raw %}<span class="math inline">\(C^2\)</span>{% endraw %} graph, {% raw %}<span class="math inline">\(N\)</span>{% endraw %} is {% raw %}<span class="math inline">\(C^1\)</span>{% endraw %}; the pullback/exterior-derivative identity used here holds weakly, by approximating {% raw %}<span class="math inline">\(N\)</span>{% endraw %} in {% raw %}<span class="math inline">\(C^1\)</span>{% endraw %} on compact coordinate patches. Thus the proof does not require unmentioned third derivatives of {% raw %}<span class="math inline">\(u\)</span>{% endraw %}. ◻</p>
</div>
<div id="result-3" class="remark" data-note-number="3" data-note-kind="Remark">
<p><strong>Remark 3</strong>.  Lemma <a href="#lem:bernstein-prelim-curvature-estimate" data-reference-type="ref" data-reference="lem:bernstein-prelim-curvature-estimate">2</a> tells us that we can bound the total curvature of the graph in terms of the energy of a cutoff function {% raw %}<span class="math inline">\(\eta\)</span>{% endraw %}. We will use the following strategy: it is possible to choose a sequence of cutoff functions, {% raw %}<span class="math inline">\(\eta\)</span>{% endraw %}, such that this sequence converges to one, but has energy converging to zero. This will be referred to as the <em>logarithm cutoff trick</em>.</p>

</div>
<div id="rem:log-cutoff-trick" class="remark" data-note-number="4" data-note-kind="Remark">
<p><strong>Remark 4 (Logarithmic cutoffs).</strong> On {% raw %}<span class="math inline">\(\mathbb R^2\)</span>{% endraw %}, set</p>
<p> {% raw %}<div class="math display">\[\eta_N(r)= \begin{cases}1&amp;r\leq e^N,\\ 2-\log(r)/N&amp;e^N&lt;r&lt;e^{2N},\\ 0&amp;r\geq e^{2N}. \end{cases}\]</div>{% endraw %}</p>
<p> The cutoff is Lipschitz and {% raw %}<span class="math inline">\(|\nabla\eta_N|=1/(Nr)\)</span>{% endraw %} on its transition annulus. Therefore</p>
<p> {% raw %}<div class="math display">\[\int_{\mathbb R^2}|\nabla\eta_N|^2 =\frac{2\pi}{N^2}\int_{e^N}^{e^{2N}}\frac{dr}{r} =\frac{2\pi}{N}\longrightarrow0,\]</div>{% endraw %}</p>
<p> while {% raw %}<span class="math inline">\(\eta_N\to1\)</span>{% endraw %} on every fixed compact set.</p>
<p>More generally, suppose a surface has an exhaustion {% raw %}<span class="math inline">\(r\)</span>{% endraw %} with {% raw %}<span class="math inline">\(|\nabla_\Sigma r|\leq1\)</span>{% endraw %} almost everywhere, compact sublevels, and {% raw %}<span class="math inline">\(A(s)=\operatorname{Area}\{r&lt;s\}\leq C_0s^2\)</span>{% endraw %}. For integer {% raw %}<span class="math inline">\(N\)</span>{% endraw %}, divide the transition annulus into {% raw %}<span class="math inline">\(e^{j-1}&lt;r&lt;e^j\)</span>{% endraw %}, {% raw %}<span class="math inline">\(j=N+1,\ldots,2N\)</span>{% endraw %}. Then</p>
<p> {% raw %}<div class="math display">\[\int_\Sigma|\nabla_\Sigma\eta_N|^2 \leq\sum_{j=N+1}^{2N}\frac{e^{2-2j}}{N^2}\, \operatorname{Area}\{e^{j-1}&lt;r&lt;e^j\} \leq\frac{C_0e^2}{N}.\]</div>{% endraw %}</p>
<p> Quadratic growth refers to the area of <em>balls</em>, not the length or area of their boundary. The argument applies to intrinsic distance when intrinsic balls have this bound, and to extrinsic distance for the graphs considered below. It requires no pointwise bound on the lengths of distance spheres.</p>
</div>
<p><strong>Area bound for a minimal graph.</strong> Suppose {% raw %}<span class="math inline">\(\Omega\)</span>{% endraw %} contains the planar disk of radius {% raw %}<span class="math inline">\(b\)</span>{% endraw %}, and take {% raw %}<span class="math inline">\(0&lt;s&lt;b\)</span>{% endraw %}. The closed ambient ball {% raw %}<span class="math inline">\(\overline B_s(0)\subset\mathbb R^3\)</span>{% endraw %} projects compactly into {% raw %}<span class="math inline">\(\Omega\)</span>{% endraw %}. Extend {% raw %}<span class="math inline">\(N=(-u_x,-u_y,1)/\sqrt{1+|\nabla u|^2}\)</span>{% endraw %} vertically as before; then {% raw %}<span class="math inline">\(\operatorname{div}N=0\)</span>{% endraw %}. For a regular radius {% raw %}<span class="math inline">\(s\)</span>{% endraw %}, split {% raw %}<span class="math inline">\(B_s\)</span>{% endraw %} into the regions below and above the graph. Their spherical boundary portions, denoted {% raw %}<span class="math inline">\(S_-\)</span>{% endraw %} and {% raw %}<span class="math inline">\(S_+\)</span>{% endraw %}, need not be connected. Their common internal boundary is {% raw %}<span class="math inline">\(\Sigma\cap B_s\)</span>{% endraw %}, with outward normal {% raw %}<span class="math inline">\(N\)</span>{% endraw %} for the lower region and {% raw %}<span class="math inline">\(-N\)</span>{% endraw %} for the upper region.</p>
<p>Applying the divergence theorem separately gives</p>
<p> {% raw %}<div class="math display">\[\operatorname{Area}(\Sigma\cap B_s) =-\int_{S_-}\langle N,\nu\rangle\,dA =\int_{S_+}\langle N,\nu\rangle\,dA.\]</div>{% endraw %}</p>
<p> Because {% raw %}<span class="math inline">\(|N|=|\nu|=1\)</span>{% endraw %}, this area is no larger than either spherical portion's area. Those two areas add to {% raw %}<span class="math inline">\(4\pi s^2\)</span>{% endraw %}, so</p>
<p> {% raw %}<div class="math display">\[A(s):=\operatorname{Area}(\Sigma\cap B_s)\leq2\pi s^2.\]</div>{% endraw %}</p>
<p> Approximation by regular radii extends the estimate to all {% raw %}<span class="math inline">\(s&lt;b\)</span>{% endraw %}. This is the missing growth input for the cutoff argument; it uses neither a gradient bound nor Bernstein's conclusion. Compare <a href="https://arxiv.org/pdf/math/0504158v2">Colding–Minicozzi, §1.2, equation (1.21), p. 5</a>.</p>
<div id="prop:energy-graph-estimate" class="proposition" data-note-number="5" data-note-kind="Proposition">
<p><strong>Proposition 5.</strong> Let {% raw %}<span class="math inline">\(u\in C^2(\Omega)\)</span>{% endraw %} solve the minimal surface equation, let {% raw %}<span class="math inline">\(R&gt;0,\ \kappa&gt;1\)</span>{% endraw %}, and assume the open planar disk {% raw %}<span class="math inline">\(D_{\kappa R}(0)\)</span>{% endraw %} is contained in {% raw %}<span class="math inline">\(\Omega\)</span>{% endraw %}. For ambient balls in {% raw %}<span class="math inline">\(\mathbb R^3\)</span>{% endraw %},</p>
<p> {% raw %}<div class="math display">\[\int_{B_{\sqrt\kappa R}(0)\cap\operatorname{Graph}(u)}|B|^2\,dA \leq\frac{128\pi}{\log\kappa}.\]</div>{% endraw %}</p>
<p> The constant is universal; the graph need not pass through the ambient origin.</p>
</div>
<div class="proof">
<p><em>Proof.</em> Put {% raw %}<span class="math inline">\(a=\sqrt\kappa R\)</span>{% endraw %}, choose {% raw %}<span class="math inline">\(a&lt;b&lt;\kappa R\)</span>{% endraw %}, and let {% raw %}<span class="math inline">\(r=|x|\)</span>{% endraw %} on {% raw %}<span class="math inline">\(\Sigma=\operatorname{Graph}(u)\)</span>{% endraw %}. Define</p>
<p> {% raw %}<div class="math display">\[\eta(r)= \begin{cases}1&amp;r\leq a,\\ \log(b/r)/\log(b/a)&amp;a&lt;r&lt;b,\\ 0&amp;r\geq b. \end{cases}\]</div>{% endraw %}</p>
<p> Its support is compact in the graph because the closed planar disk of radius {% raw %}<span class="math inline">\(b\)</span>{% endraw %} lies inside {% raw %}<span class="math inline">\(\Omega\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(u\)</span>{% endraw %} is continuous there. Writing {% raw %}<span class="math inline">\(L=\log(b/a)\)</span>{% endraw %}, we have</p>
<p> {% raw %}<div class="math display">\[|\nabla_\Sigma\eta|=\frac{|\nabla_\Sigma r|}{Lr}\leq\frac1{Lr}.\]</div>{% endraw %}</p>
<p> There is no extra factor {% raw %}<span class="math inline">\(R\)</span>{% endraw %} when differentiating {% raw %}<span class="math inline">\(\log(r/R)\)</span>{% endraw %}.</p>
<p>The annular estimate in Remark 4 already gives the required decay when {% raw %}<span class="math inline">\(\kappa\)</span>{% endraw %} is large. To justify the displayed bound for <em>every</em> {% raw %}<span class="math inline">\(\kappa&gt;1\)</span>{% endraw %}, including thin annuli, use minimality once more. Since {% raw %}<span class="math inline">\(\Delta_\Sigma r^2=4\)</span>{% endraw %},</p>
<p> {% raw %}<div class="math display">\[\Delta_\Sigma\log r=\frac{2}{r^2}-\frac{2|x^\top|^2}{r^4} =\frac{2|x^\perp|^2}{r^4}\geq0\quad(r&gt;0).\]</div>{% endraw %}</p>
<p> Let {% raw %}<span class="math inline">\(v=\log(r/a)\)</span>{% endraw %} on {% raw %}<span class="math inline">\(a&lt;r&lt;b\)</span>{% endraw %}. Integration by parts, initially for regular radii, gives</p>
<p> {% raw %}<div class="math display">\[\begin{aligned} \int_{\Sigma\cap(B_b\setminus B_a)}|\nabla_\Sigma\log r|^2\,dA &amp;=\frac Lb\int_{\Sigma\cap\partial B_b}|\nabla_\Sigma r|\,d\sigma -\int_{\Sigma\cap(B_b\setminus B_a)}v\,\Delta_\Sigma\log r\,dA\\ &amp;\leq\frac Lb\int_{\Sigma\cap\partial B_b}|\nabla_\Sigma r|\,d\sigma =\frac{2L}{b^2}A(b)\leq4\pi L. \end{aligned}\]</div>{% endraw %}</p>
<p> The inner boundary term is zero because {% raw %}<span class="math inline">\(v=0\)</span>{% endraw %} at {% raw %}<span class="math inline">\(r=a\)</span>{% endraw %}. The flux identity in the equality is the divergence calculation {% raw %}<span class="math inline">\(2A(b)=b\int_{\partial B_b\cap\Sigma}|\nabla_\Sigma r|\)</span>{% endraw %} from monotonicity. Approximation by regular radii gives the estimate for arbitrary {% raw %}<span class="math inline">\(a,b\)</span>{% endraw %}.</p>
<p>Consequently {% raw %}<span class="math inline">\(\int_\Sigma|\nabla_\Sigma\eta|^2\leq4\pi/L\)</span>{% endraw %}. Lemma 2 yields</p>
<p> {% raw %}<div class="math display">\[\int_{\Sigma\cap B_a}|B|^2\leq16\int_\Sigma|\nabla_\Sigma\eta|^2 \leq\frac{64\pi}{\log(b/a)}.\]</div>{% endraw %}</p>
<p> Let {% raw %}<span class="math inline">\(b\uparrow\kappa R\)</span>{% endraw %}; then {% raw %}<span class="math inline">\(\log(b/a)\to\frac12\log\kappa\)</span>{% endraw %}, proving the assertion. This limit keeps every cutoff compactly supported even when the domain is assumed to contain only the open disk {% raw %}<span class="math inline">\(D_{\kappa R}\)</span>{% endraw %}. ◻</p>
</div>
<p>Apply the curvature estimate on larger and larger balls. The cutoff energy tends to zero, so the total squared second fundamental form must vanish on every fixed compact region.</p>

<div class="proof">
<p><em>Proof of Theorem 1.</em> Since the domain is the whole plane, Proposition 5 applies with {% raw %}<span class="math inline">\(R=1\)</span>{% endraw %} and every {% raw %}<span class="math inline">\(\kappa&gt;1\)</span>{% endraw %}:</p>
<p> {% raw %}<div class="math display">\[\int_{\Sigma\cap B_{\sqrt\kappa}}|B|^2\,dA\leq\frac{128\pi}{\log\kappa}.\]</div>{% endraw %}</p>
<p> Fix any finite ambient radius {% raw %}<span class="math inline">\(s\)</span>{% endraw %}. For all {% raw %}<span class="math inline">\(\sqrt\kappa&gt;s\)</span>{% endraw %}, nonnegativity gives</p>
<p> {% raw %}<div class="math display">\[0\leq\int_{\Sigma\cap B_s}|B|^2\,dA\leq\frac{128\pi}{\log\kappa}.\]</div>{% endraw %}</p>
<p> Sending {% raw %}<span class="math inline">\(\kappa\to\infty\)</span>{% endraw %} forces the integral on that fixed region to be zero. Since {% raw %}<span class="math inline">\(|B|^2\)</span>{% endraw %} is continuous and {% raw %}<span class="math inline">\(s\)</span>{% endraw %} was arbitrary, {% raw %}<span class="math inline">\(B\equiv0\)</span>{% endraw %} everywhere. For a graph with upward normal, {% raw %}<span class="math inline">\(\langle B(\partial_iF,\partial_jF),N\rangle=u_{ij}/\sqrt{1+|\nabla u|^2}\)</span>{% endraw %}, so all second partial derivatives of {% raw %}<span class="math inline">\(u\)</span>{% endraw %} vanish. Its gradient is constant on connected {% raw %}<span class="math inline">\(\mathbb R^2\)</span>{% endraw %}, giving {% raw %}<span class="math inline">\(u(x,y)=ax+by+c\)</span>{% endraw %}. ◻</p>
</div>
<h3 data-note-section="1" id="the-gauss-map-and-local-coordinates-on-minimal-graphs">1. The Gauss Map and Local Coordinates on Minimal Graphs</h3>
<p>For a connected oriented smooth surface {% raw %}<span class="math inline">\(\Sigma^2\subset\mathbb R^3\)</span>{% endraw %}, the chosen unit normal defines a smooth Gauss map {% raw %}<span class="math inline">\(N:\Sigma\to\mathbb S^2\)</span>{% endraw %}. Reversing orientation changes it to {% raw %}<span class="math inline">\(-N\)</span>{% endraw %}; a nonorientable surface has only local such choices. Since both {% raw %}<span class="math inline">\(T_x\Sigma\)</span>{% endraw %} and {% raw %}<span class="math inline">\(T_{N(x)}\mathbb S^2\)</span>{% endraw %} equal {% raw %}<span class="math inline">\(N(x)^\perp\)</span>{% endraw %} as vector subspaces of {% raw %}<span class="math inline">\(\mathbb R^3\)</span>{% endraw %}, the differential identifies with our shape operator:</p>
<p> {% raw %}<div class="math display">\[\langle dN(E_i),E_j\rangle =\langle D_{E_i}N,E_j\rangle=-\langle N,D_{E_i}E_j\rangle.\]</div>{% endraw %}</p>
<p> For a minimal surface, the symmetric operator {% raw %}<span class="math inline">\(dN\)</span>{% endraw %} has eigenvalues {% raw %}<span class="math inline">\(\kappa,-\kappa\)</span>{% endraw %}. Thus</p>
<p> {% raw %}<div class="math display">\[(dN)^*dN=\kappa^2I,\qquad |dN|^2=|B|^2=2\kappa^2=-2K,\qquad \det(dN)=K=-\kappa^2.\]</div>{% endraw %}</p>
<p> Away from flat points, the Gauss map is conformal and reverses orientation with the indicated surface/sphere orientations; at flat points its differential is zero, so the appropriate global statement is <em>weak</em> conformality. The signed area identity is {% raw %}<span class="math inline">\(N^*\omega=K\,dA\)</span>{% endraw %}. Its unsigned area counted with multiplicity is</p>
<p> {% raw %}<div class="math display">\[\int_\Sigma|\det dN|\,dA=-\int_\Sigma K\,dA =\frac12\int_\Sigma|B|^2\,dA,\]</div>{% endraw %}</p>
<p> whenever these integrals are finite (and also as nonnegative extended integrals). The area of the set {% raw %}<span class="math inline">\(N(\Sigma)\)</span>{% endraw %} alone can be smaller when the map has multiplicity.</p>
<p>For a graph {% raw %}<span class="math inline">\(F(x,y)=(x,y,u(x,y))\)</span>{% endraw %}, put {% raw %}<span class="math inline">\(p=\nabla u\)</span>{% endraw %} and {% raw %}<span class="math inline">\(W=\sqrt{1+|p|^2}\)</span>{% endraw %}. Its coordinate metric is</p>
<p> {% raw %}<div class="math display">\[g=I+pp^{\mathsf T}= \begin{pmatrix}1+u_x^2&amp;u_xu_y\\u_xu_y&amp;1+u_y^2\end{pmatrix}.\]</div>{% endraw %}</p>
<p> A vector perpendicular to {% raw %}<span class="math inline">\(p\)</span>{% endraw %} has eigenvalue {% raw %}<span class="math inline">\(1\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(p\)</span>{% endraw %} has eigenvalue {% raw %}<span class="math inline">\(1+|p|^2=W^2\)</span>{% endraw %}. If {% raw %}<span class="math inline">\(p=0\)</span>{% endraw %}, both eigenvalues are one. This direct eigenspace argument is necessary: elementary row operations do not generally preserve eigenvalues. The determinant is {% raw %}<span class="math inline">\(W^2\)</span>{% endraw %}, and</p>
<p> {% raw %}<div class="math display">\[g^{-1}=I-\frac{pp^{\mathsf T}}{W^2} =\frac1{W^2}\begin{pmatrix}1+u_y^2&amp;-u_xu_y\\-u_xu_y&amp;1+u_x^2\end{pmatrix}, \qquad dA=W\,dx\,dy.\]</div>{% endraw %}</p>
<p></p>
<p>The scalar normal components of the vector-valued second fundamental form are</p>
<p> {% raw %}<div class="math display">\[b_{xx}=\langle D_xF_x,N\rangle=u_{xx}/W,\quad b_{xy}=b_{yx}=\langle D_xF_y,N\rangle=u_{xy}/W,\quad b_{yy}=\langle D_yF_y,N\rangle=u_{yy}/W.\]</div>{% endraw %}</p>
<p> Our shape operator matrix is {% raw %}<span class="math inline">\(-g^{-1}b\)</span>{% endraw %}. Its trace vanishes exactly when</p>
<p> {% raw %}<div class="math display">\[(1+u_y^2)u_{xx}-2u_xu_yu_{xy}+(1+u_x^2)u_{yy}=0,\]</div>{% endraw %}</p>
<p> the nondivergence form of the minimal surface equation. The Gauss equation gives</p>
<p> {% raw %}<div class="math display">\[K=\frac{\det b}{\det g} =\frac{u_{xx}u_{yy}-u_{xy}^2}{W^4},\qquad K\,dA=\frac{u_{xx}u_{yy}-u_{xy}^2}{W^3}\,dx\,dy.\]</div>{% endraw %}</p>
<p> Equivalently, {% raw %}<span class="math inline">\(\langle N_x,F_x\rangle=-u_{xx}/W\)</span>{% endraw %}, {% raw %}<span class="math inline">\(\langle N_x,F_y\rangle=-u_{xy}/W\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(\langle N_y,F_y\rangle=-u_{yy}/W\)</span>{% endraw %}; these identities give the same determinant.</p>
<p>Finally</p>
<p> {% raw %}<div class="math display">\[|B|^2=b_{ij}b_{k\ell}g^{ik}g^{j\ell} =\frac1{W^2}\left|g^{-1/2}(\operatorname{Hess}_{\mathbb R^2}u)g^{-1/2}\right|_{\mathrm F}^2.\]</div>{% endraw %}</p>
<p> The eigenvalues of {% raw %}<span class="math inline">\(g^{-1}\)</span>{% endraw %} lie between {% raw %}<span class="math inline">\(W^{-2}\)</span>{% endraw %} and {% raw %}<span class="math inline">\(1\)</span>{% endraw %}. Diagonalize {% raw %}<span class="math inline">\(g^{-1}\)</span>{% endraw %} by a Euclidean orthogonal matrix; each squared entry of the transformed Hessian is multiplied by a product of two eigenvalues, between {% raw %}<span class="math inline">\(W^{-4}\)</span>{% endraw %} and {% raw %}<span class="math inline">\(1\)</span>{% endraw %}. Thus</p>
<p> {% raw %}<div class="math display">\[\frac{|\operatorname{Hess}_{\mathbb R^2}u|_{\mathrm F}^2}{(1+|\nabla u|^2)^3} \leq |B|^2 \leq\frac{|\operatorname{Hess}_{\mathbb R^2}u|_{\mathrm F}^2}{1+|\nabla u|^2} \leq 2\frac{|\operatorname{Hess}_{\mathbb R^2}u|_{\mathrm F}^2}{1+|\nabla u|^2}.\]</div>{% endraw %}</p>
<p> The final, weaker upper bound is the one recorded in the source; the preceding inequality gives its sharper constant.</p>
<p class="note-reading">Reading: Carmo (1992), Riemannian geometry.</p>


<nav class="note-related" aria-label="Related notes"><p>Related notes: <a href="{% post_url 2023-10-23-minimal-submanifolds-and-first-variation %}">Minimal Submanifolds and First Variation</a>.</p></nav>

<nav class="note-series" aria-label="Notes in this series"><p>Previous: <a href="{% post_url 2023-10-23-minimal-submanifolds-and-first-variation %}">Minimal Submanifolds and First Variation</a> · Next: <a href="{% post_url 2023-12-16-hausdorff-measure-lipschitz-maps-and-densities %}">Hausdorff Measure, Lipschitz Maps, and Densities</a></p></nav>

</div>
