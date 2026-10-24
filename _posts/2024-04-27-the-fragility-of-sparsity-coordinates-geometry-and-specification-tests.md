---
layout: "post"
title: "The Fragility of Sparsity: Coordinates, Geometry, and Specification Tests"
date: "2024-04-27"
tags: ["econometrics", "machine learning"]
excerpt: "A regression's control space is unchanged by an invertible change of basis."
note_series: "The fragility of sparsity"
note_source: "assets/notes/Overleaf Projects (32 items)/Notes on Sparsity (Kolesar Ulrich S)/stats.tex"
redirect_from: ["/2025/03/08/the-fragility-of-sparsity-setup/", "/2025/03/08/why-sparsity-depends-on-coordinates/", "/2025/03/27/random-rotations-and-sparse-coefficients/", "/2025/04/16/reference-categories-and-sparsity/", "/2025/05/05/ols-and-semiparametric-efficiency/", "/2025/05/05/testing-sparsity-through-efficient-estimator-comparisons/", "/2025/05/05/the-fragility-of-sparsity-coordinates-geometry-and-specification-tests/", "/2025/05/25/testing-sparsity-by-comparing-estimators/", "/2025/06/14/auxiliary-geometry-behind-sparsity-tests/"]
---

<div class="note-content" markdown="0">

<p>Changing coordinates can leave a regression’s fitted control space unchanged and alter which coefficients are zero. Variable selection depends on those zeros. <span class="citation" data-cites="kolesar_fragility_2024"><a href="#ref-kolesar_fragility_2024" role="doc-biblioref">Kolesár, Müller, and Roelsgaard (2024)</a></span> study this dependence on representation and ask what supports the coordinates in which sparsity is assumed.</p>

<h3 data-note-section="1" id="22-0-what-the-rotation-result-says">1. What the rotation result says</h3>
<p>Consider {% raw %}<span class="math inline">\(Y_i=\beta D_i+W_i&#x27;\gamma+U_i\)</span>{% endraw %}. Write {% raw %}<span class="math inline">\(\Sigma=\mathbb{E}[W_iW_i&#x27;]\)</span>{% endraw %} and suppose its eigenvalues are bounded above and away from zero, with {% raw %}<span class="math inline">\(\|\gamma\|_2\asymp1\)</span>{% endraw %}. If {% raw %}<span class="math inline">\(\widetilde W_i=RW_i\)</span>{% endraw %} for an orthogonal matrix {% raw %}<span class="math inline">\(R\)</span>{% endraw %}, the same control function has coefficient vector {% raw %}<span class="math inline">\(R\gamma\)</span>{% endraw %}.</p>

<div id="sparsity-rotation" class="proposition" data-note-number="1" data-note-kind="Proposition">
<p><strong>Proposition 1</strong>. For a Haar-distributed rotation {% raw %}<span class="math inline">\(R\)</span>{% endraw %}, let</p>

{% raw %}<div class="math display">\[
r_s(R)\triangleq\min_{\|v\|_0\leq s}
\mathbb{E}[(W_i&#x27;\gamma-\widetilde W_i&#x27;v)^2\mid R].
\]</div>{% endraw %}
<p>For fixed constants in the approximation requirement {% raw %}<span class="math inline">\(r_s(R)\lesssim s/p\)</span>{% endraw %}, a random rotation is very unlikely to preserve a sparse approximation when {% raw %}<span class="math inline">\(s\)</span>{% endraw %} is small relative to {% raw %}<span class="math inline">\(p\)</span>{% endraw %}. Under the paper’s sparsity regime {% raw %}<span class="math inline">\(s=o(\sqrt p/\log p)\)</span>{% endraw %}, the probability decays on a super-exponential scale in {% raw %}<span class="math inline">\(p\)</span>{% endraw %}; its log is bounded above at the {% raw %}<span class="math inline">\(-p\log p\)</span>{% endraw %} scale.</p>

</div>
<p>The result concerns random representations of one fixed function. A scientifically chosen basis may still admit a sparse approximation; that choice requires a justification beyond invariance of the underlying regression.</p>

<h3 data-note-section="2" id="22-0-the-geometric-calculation">2. The geometric calculation</h3>
<p>Substituting the rotated variables leaves prediction error equal to</p>

{% raw %}<div class="math display">\[
r_s(R)=\min_{\|v\|_0\leq s}
(R\gamma-v)&#x27;R\Sigma R&#x27;(R\gamma-v).
\]</div>{% endraw %}
<p>The eigenvalue bounds turn prediction error into Euclidean approximation error. A Haar rotation sends {% raw %}<span class="math inline">\(\gamma/\|\gamma\|\)</span>{% endraw %} to a uniform point on the unit sphere, which can be represented as {% raw %}<span class="math inline">\(G/\|G\|\)</span>{% endraw %} for independent standard normal coordinates {% raw %}<span class="math inline">\(G_j\)</span>{% endraw %}.</p>

<p>Fix a support {% raw %}<span class="math inline">\(J\)</span>{% endraw %} of size {% raw %}<span class="math inline">\(s\)</span>{% endraw %}. The squared distance to its coordinate subspace is</p>

{% raw %}<div class="math display">\[
B_J\triangleq\frac{\sum_{j\notin J}G_j^2}{\sum_{j=1}^pG_j^2}
\sim\operatorname{Beta}\left(\frac{p-s}{2},\frac s2\right).
\]</div>{% endraw %}
<p>Thus, for a constant {% raw %}<span class="math inline">\(C\)</span>{% endraw %} determined by the eigenvalue and norm bounds,</p>

{% raw %}<div class="math display">\[
\mathbb P\{r_s(R)\leq Cs/p\}
\leq {p\choose s}\,
\mathbb P\{B_J\leq C&#x27;s/p\}.
\]</div>{% endraw %}
<p>For each support, almost all of a random direction’s mass must lie in {% raw %}<span class="math inline">\(s\)</span>{% endraw %} coordinates. A union bound compares the lower-tail factor {% raw %}<span class="math inline">\((s/p)^{(p-s)/2}\)</span>{% endraw %} with the number of supports, at most {% raw %}<span class="math inline">\((ep/s)^s\)</span>{% endraw %}. For small {% raw %}<span class="math inline">\(s\)</span>{% endraw %}, concentration near any one sparse subspace is too unlikely for the number of choices to compensate. The beta law applies to a fixed support; the union bound is what permits choosing the support after observing the vector.</p>

<p>Here is a coarse bound that makes the rate explicit. Put {% raw %}<span class="math inline">\(a=(p-s)/2\)</span>{% endraw %}, {% raw %}<span class="math inline">\(b=s/2\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(\epsilon=C&#x27;s/p\le1/2\)</span>{% endraw %}. The beta density gives</p>

{% raw %}<div class="math display">\[
\mathbb{P}(B_J\le\epsilon)
=\frac1{\mathrm B(a,b)}\int_0^\epsilon t^{a-1}(1-t)^{b-1}\,dt
\le\frac{\sqrt2\,\epsilon^a}{a\,\mathrm B(a,b)}.
\]</div>{% endraw %}
<p>For {% raw %}<span class="math inline">\(b\ge1\)</span>{% endraw %}, the factor {% raw %}<span class="math inline">\((1-t)^{b-1}\)</span>{% endraw %} is at most one; for {% raw %}<span class="math inline">\(b=1/2\)</span>{% endraw %}, it is at most {% raw %}<span class="math inline">\(\sqrt2\)</span>{% endraw %} on this interval. Bounding the beta integral below on {% raw %}<span class="math inline">\([1/4,1/2]\)</span>{% endraw %} shows {% raw %}<span class="math inline">\(\mathrm B(a,b)^{-1}\le e^{Cp}\)</span>{% endraw %} for {% raw %}<span class="math inline">\(1\le s\le p/2\)</span>{% endraw %}, with a numerical constant. Hence</p>

{% raw %}<div class="math display">\[
\log\mathbb{P}\{r_s(R)\le Cs/p\}
\le\frac{p-s}{2}\log(C&#x27;s/p)
+s\log(ep/s)+O(p).
\]</div>{% endraw %}
<p>Under the stated regime, the first term is negative with magnitude of order at least {% raw %}<span class="math inline">\(p\log p\)</span>{% endraw %}, while the support-count term is smaller. This proves a bound {% raw %}<span class="math inline">\(e^{-c p\log p}\)</span>{% endraw %} for some {% raw %}<span class="math inline">\(c&gt;0\)</span>{% endraw %} and large enough {% raw %}<span class="math inline">\(p\)</span>{% endraw %}. The calculation concerns a union over fixed supports; it does not pretend the support selected after seeing the rotation was fixed in advance.</p>

<p>A complementary calculation describes a typical rotated vector. First take {% raw %}<span class="math inline">\(\Sigma=I_p\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\|\gamma\|=1\)</span>{% endraw %}. If {% raw %}<span class="math inline">\(G_{(1)}^2\geq\cdots\geq G_{(p)}^2\)</span>{% endraw %} are the ordered squared Gaussian coordinates, then the best {% raw %}<span class="math inline">\(s\)</span>{% endraw %}-term approximation error is exactly</p>

{% raw %}<div class="math display">\[
r_s(R)=1-\frac{\sum_{j=1}^sG_{(j)}^2}{\sum_{j=1}^pG_j^2}.
\]</div>{% endraw %}
<p>The retained energy is at most {% raw %}<span class="math inline">\(s\max_jG_j^2/\sum_jG_j^2\)</span>{% endraw %}. A Gaussian tail bound and a union bound give</p>

{% raw %}<div class="math display">\[
\mathbb{P}\left(\max_jG_j^2&gt;2\log(2p/\eta)\right)\leq\eta.
\]</div>{% endraw %}
<p>Also {% raw %}<span class="math inline">\(\sum_jG_j^2/p\to1\)</span>{% endraw %}. Thus the retained fraction is {% raw %}<span class="math inline">\(O_p(s\log p/p)\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(r_s(R)\to1\)</span>{% endraw %} whenever {% raw %}<span class="math inline">\(s\log p/p\to0\)</span>{% endraw %}. Bounded eigenvalues extend this to prediction error up to fixed constants.</p>

<p>The two calculations answer different questions. The beta tail bounds the rare event of an unusually accurate sparse approximation; the maximum-coordinate bound shows that a typical small set retains little signal. The full control space has lost no information: OLS projects onto the same space after rotation. Coordinatewise selection changes because it discards directions according to the basis.</p>

<p>The variance cost of using all controls can likewise be made explicit in the Gaussian homoskedastic illustration below. If {% raw %}<span class="math inline">\(p/n\to\kappa\in(0,1)\)</span>{% endraw %}, then {% raw %}<span class="math inline">\(v&#x27;M_Wv\approx\tau^2n(1-\kappa)\)</span>{% endraw %} and {% raw %}<span class="math inline">\(v&#x27;v\approx\tau^2n\)</span>{% endraw %}. The variance of the OLS-minus-oracle difference is approximately</p>

{% raw %}<div class="math display">\[
\frac{\sigma_U^2}{\tau^2n}\frac{\kappa}{1-\kappa}.
\]</div>{% endraw %}
<p>With few controls relative to sample size, the two estimators may be close. Using many residual degrees of freedom increases the noise in their difference. Since both use the same outcomes, that scale must account for their covariance.</p>

<h3 data-note-section="3" id="22-0-other-changes-of-representation">3. Other changes of representation</h3>
<p>The paper also considers categorical reference choices and shifts of the origin in polynomial controls. These are familiar modelling choices, not arbitrary rotations. Under its categorical recoding scheme and regularity conditions, the chance of satisfying the required sparse approximation is exponentially small when a positive fraction of the relevant coordinates change.</p>

<p>For a polynomial, the issue can be seen without an asymptotic argument. A single term in one coordinate system becomes</p>

{% raw %}<div class="math display">\[
x^k=(\widetilde x+a)^k
=\sum_{j=0}^k {k\choose j}a^{k-j}\widetilde x^j.
\]</div>{% endraw %}
<p>The polynomial function is unchanged, yet its coefficient vector can change from one nonzero term to many. Changing an indicator reference category similarly changes which level differences are represented by zero coefficients.</p>

<p>The geometric objection concerns the assumptions behind <a href="{% post_url 2024-03-02-post-double-selection-orthogonality-assumptions-and-inference %}">post-double selection</a>. When unrestricted OLS is available, it also suggests a way to examine those assumptions.</p>

<h3 data-note-section="4" id="22-0-ols-as-a-specification-check">4. OLS as a specification check</h3>
<p>Use the model</p>

{% raw %}<div class="math display">\[
Y=D\beta+W\gamma+U,\qquad D=W\delta+\widetilde D,
\]</div>{% endraw %}
<p>with zero conditional means for the errors. Let {% raw %}<span class="math inline">\(P_W\)</span>{% endraw %} project onto the columns of {% raw %}<span class="math inline">\(W\)</span>{% endraw %}, {% raw %}<span class="math inline">\(M_W=I-P_W\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(\ddot D=M_WD\)</span>{% endraw %}.</p>

<div id="sparsity-ols" class="theorem" data-note-number="2" data-note-kind="Theorem">
<p><strong>Theorem 2</strong>. Under conditional independence across observations, uniformly bounded {% raw %}<span class="math inline">\(2+\eta\)</span>{% endraw %} moments of {% raw %}<span class="math inline">\(U_i\)</span>{% endraw %} and fourth moments of {% raw %}<span class="math inline">\(\widetilde D_i\)</span>{% endraw %}, conditional variances bounded away from zero, and {% raw %}<span class="math inline">\(\limsup p/n&lt;1\)</span>{% endraw %}, the paper establishes</p>

{% raw %}<div class="math display">\[
\frac{\widehat\beta_{\rm OLS}-\beta}{s_{\rm OLS}}\Rightarrow \mathcal{N}(0,1),
\qquad
s_{\rm OLS}^2=\frac{\sum_i\ddot D_i^2U_i^2}{(\ddot D&#x27;\ddot D)^2}.
\]</div>{% endraw %}
<p>For an estimator {% raw %}<span class="math inline">\(\widehat\beta_\star\)</span>{% endraw %} having the paper’s efficient sparse-model expansion, the appropriately standardized difference from OLS is also asymptotically normal. Feasible testing additionally requires the paper’s nuisance-approximation and variance-consistency conditions.</p>

</div>
<p>This is an oracle standard error because it contains {% raw %}<span class="math inline">\(U_i\)</span>{% endraw %}. With many controls, obtaining a feasible consistent estimate is a separate argument. The displayed CLT does not validate every residual-based variance formula.</p>

<h3 data-note-section="5" id="22-0-start-with-frischwaughlovell">5. Start with Frisch–Waugh–Lovell</h3>
<p>Partialling out {% raw %}<span class="math inline">\(W\)</span>{% endraw %} gives the exact identity</p>

{% raw %}<div class="math display">\[
\widehat\beta_{\rm OLS}-\beta
=\frac{\ddot D&#x27;U}{\ddot D&#x27;\ddot D}.
\]</div>{% endraw %}
<p>Conditional on {% raw %}<span class="math inline">\((D,W)\)</span>{% endraw %}, this is a weighted sum of centered independent errors. Its conditional variance is</p>

{% raw %}<div class="math display">\[
\frac{\sum_i\ddot D_i^2\mathbb{E}[U_i^2\mid D,W]}
     {(\ddot D&#x27;\ddot D)^2}.
\]</div>{% endraw %}
<p>The squared denominator matters for the variance and the Lyapunov normalization. Given the moment bounds, the remaining CLT requirement is that no residualized treatment observation dominate {% raw %}<span class="math inline">\(\sum_i\ddot D_i^2\)</span>{% endraw %}.</p>

<p>Quadratic-form bounds control this denominator because {% raw %}<span class="math inline">\(M_W\)</span>{% endraw %} is a projection. In particular, {% raw %}<span class="math inline">\(M_W^2=M_W\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\operatorname{tr}(M_W)=n-\operatorname{rank}(W)\)</span>{% endraw %} explain why some residual variation remains when {% raw %}<span class="math inline">\(p/n\)</span>{% endraw %} stays below one.</p>

<p>For example, suppose {% raw %}<span class="math inline">\(\widetilde D\mid W\sim \mathcal{N}(0,\tau^2I_n)\)</span>{% endraw %} and let {% raw %}<span class="math inline">\(r=\operatorname{rank}(W)\)</span>{% endraw %}. Then</p>

{% raw %}<div class="math display">\[
\mathbb{E}[\widetilde D&#x27;M_W\widetilde D\mid W]=\tau^2(n-r),
\qquad
\operatorname{Var}(\widetilde D&#x27;M_W\widetilde D\mid W)=2\tau^4(n-r).
\]</div>{% endraw %}
<p>The variance follows by diagonalizing the projection: it has {% raw %}<span class="math inline">\(n-r\)</span>{% endraw %} eigenvalues equal to one and the remainder equal to zero. The quadratic form is a sum of {% raw %}<span class="math inline">\(n-r\)</span>{% endraw %} independent squared Gaussian coordinates. Its relative variance is {% raw %}<span class="math inline">\(2/(n-r)\)</span>{% endraw %}, so it concentrates if {% raw %}<span class="math inline">\(n-r\to\infty\)</span>{% endraw %}. This illustrates the role of residual degrees of freedom without identifying the sample covariance of regressors with the population covariance.</p>

<p>For the weighted-error CLT, define {% raw %}<span class="math inline">\(w_i=\ddot D_i/(\ddot D&#x27;\ddot D)\)</span>{% endraw %} and {% raw %}<span class="math inline">\(V=\sum_iw_i^2\mathbb{E}[U_i^2\mid D,W]\)</span>{% endraw %}. If conditional {% raw %}<span class="math inline">\(2+\eta\)</span>{% endraw %} moments are uniformly bounded and conditional error variances are bounded below, the Lyapunov ratio obeys</p>

{% raw %}<div class="math display">\[
\frac{\sum_i|w_i|^{2+\eta}\mathbb{E}[|U_i|^{2+\eta}\mid D,W]}
     {V^{1+\eta/2}}
\lesssim
\left(\frac{\max_i\ddot D_i^2}{\sum_i\ddot D_i^2}\right)^{\eta/2}.
\]</div>{% endraw %}
<p>The final CLT step is therefore a bound on the largest contribution relative to the total. Invertibility of the regression matrix alone supplies no such bound.</p>

<h3 data-note-section="6" id="22-0-standardize-the-difference-not-each-estimator-separately">6. Standardize the difference, not each estimator separately</h3>
<p>The efficient expansion uses the population treatment residual {% raw %}<span class="math inline">\(\widetilde D_i\)</span>{% endraw %}. Subtracting it from the OLS expansion gives, to first order,</p>

{% raw %}<div class="math display">\[
\widehat\beta_{\rm OLS}-\widehat\beta_\star
=\sum_i Z_iU_i+o_P(s_H),
\qquad
Z_i\triangleq\frac{\ddot D_i}{\ddot D&#x27;\ddot D}
             -\frac{\widetilde D_i}{\widetilde D&#x27;\widetilde D},
\]</div>{% endraw %}
<p>with {% raw %}<span class="math inline">\(s_H^2=\sum_i Z_i^2U_i^2\)</span>{% endraw %}. The paper’s nondegeneracy condition on the control projection and its moment restrictions ensure a useful normal limit for this difference.</p>

<p>Subtracting influence weights before squaring preserves the covariance between the estimators. Thus {% raw %}<span class="math inline">\(Z_i^2U_i^2\)</span>{% endraw %} is the appropriate contribution for their difference; adding separate variance estimates would omit the covariance.</p>

<p>The cancellation is especially transparent with homoskedastic errors of variance {% raw %}<span class="math inline">\(\sigma_U^2\)</span>{% endraw %}. Temporarily use the oracle treatment residual {% raw %}<span class="math inline">\(v=\widetilde D\)</span>{% endraw %} and compare the two linear errors {% raw %}<span class="math inline">\((v&#x27;M_Wv)^{-1}v&#x27;M_WU\)</span>{% endraw %} and {% raw %}<span class="math inline">\((v&#x27;v)^{-1}v&#x27;U\)</span>{% endraw %}. Their conditional covariance is</p>

{% raw %}<div class="math display">\[
\sigma_U^2\frac{v&#x27;M_Wv}{(v&#x27;M_Wv)(v&#x27;v)}
=\frac{\sigma_U^2}{v&#x27;v}.
\]</div>{% endraw %}
<p>It equals the oracle estimator’s variance. The variance of the difference is therefore</p>

{% raw %}<div class="math display">\[
\sigma_U^2\left(\frac1{v&#x27;M_Wv}-\frac1{v&#x27;v}\right).
\]</div>{% endraw %}
<p>This is nonnegative because projecting out controls can only reduce the treatment sum of squares. It can also be much smaller than either variance separately. If the projection removes no component of {% raw %}<span class="math inline">\(v\)</span>{% endraw %}, the difference has zero variance and there is nothing to studentize. The paper’s nondegeneracy conditions rule out that case for its comparison test.</p>

<p>To make the statistic feasible, estimate the treatment residuals and outcome errors, obtaining {% raw %}<span class="math inline">\(\widehat Z_i\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\widehat U_i\)</span>{% endraw %}. What must be proved is</p>

{% raw %}<div class="math display">\[
\frac{\sum_i\widehat Z_i^2\widehat U_i^2}
     {\sum_iZ_i^2U_i^2}\xrightarrow{P}1.
\]</div>{% endraw %}
<p>Feasibility requires nuisance errors small relative to the variance of the estimator difference. Consistency in an unspecified norm gives no such comparison. The paper’s rate and variance conditions justify the studentized normal approximation.</p>

<p>Rejection challenges the sparse-model restrictions used to justify the efficient estimator in this comparison. Nonrejection establishes less: it does not certify that sparse approximation holds in other coordinate systems.</p>

<div id="refs" class="references csl-bib-body hanging-indent" data-entry-spacing="0" role="list">
<div id="ref-kolesar_fragility_2024" class="csl-entry" role="listitem">
Kolesár, Michal, Ulrich K. Müller, and Sebastian T. Roelsgaard. 2024. <span>“The Fragility of Sparsity.”</span> arXiv. <a href="https://arxiv.org/abs/2311.02299v4">https://arxiv.org/abs/2311.02299v4</a>.
</div>
</div>



</div>
