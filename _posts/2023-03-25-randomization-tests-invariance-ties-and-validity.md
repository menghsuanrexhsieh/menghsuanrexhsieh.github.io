---
layout: "post"
title: "Randomization Tests: Invariance, Ties, and Validity"
date: "2023-03-25"
tags: ["statistics", "randomization inference"]
excerpt: "Exact randomization validity, conditional distribution limits, and the transfer of random critical values to local alternatives."
note_series: "Permutation and randomization inference"
note_source: "assets/notes/Overleaf Projects (32 items)/Permutation and Randomization Inference/stats.tex"
redirect_from: ["/2023/03/25/why-randomization-is-needed-at-ties/", "/2023/04/01/the-randomization-model/", "/2023/04/15/randomization-tests-and-their-validity/"]
---

<div class="note-content" markdown="0">
<p>A randomization test uses transformations that preserve the null distribution. Averaging its rejection rule over the transformation group proves finite-sample validity, with explicit randomization at ties. Local power additionally requires a limit for the randomization distribution and a change-of-measure argument for the observed statistic.</p>

<div data-note-section="title" id="the-need-for-randomization"></div>
<p>A sampling model and a treatment-assignment model provide different sources of randomness. For example, suppose independent units have independent components {% raw %}<span class="math inline">\(U_i\sim \mathcal{N}(\mu,\sigma_0^2)\)</span>{% endraw %} and {% raw %}<span class="math inline">\(V_i\sim \mathcal{N}(\omega,\sigma^2)\)</span>{% endraw %} for controls or {% raw %}<span class="math inline">\(\mathcal{N}(\nu,\sigma^2)\)</span>{% endraw %} for treatment. Their sums have means {% raw %}<span class="math inline">\(\mu+\omega\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\mu+\nu\)</span>{% endraw %}, and common variance {% raw %}<span class="math inline">\(\sigma_0^2+\sigma^2\)</span>{% endraw %}, so the usual two-sample normal theory applies.</p>
<p>If instead the unit components {% raw %}<span class="math inline">\(u_i\)</span>{% endraw %} are arbitrary fixed constants and the assignment is fixed, the density is
</p>
{% raw %}<div class="math display">\[(2\pi\sigma^2)^{-N/2}\exp\left\{-\frac1{2\sigma^2}\left[\sum_{i=1}^m(x_i-u_i-\omega)^2+\sum_{j=1}^n(y_j-u_{m+j}-\nu)^2\right]\right\}.\]</div>{% endraw %}
<p>
Every alternative distribution can be represented under the null by absorbing {% raw %}<span class="math inline">\(\nu-\omega\)</span>{% endraw %} into the treated units' {% raw %}<span class="math inline">\(u_i\)</span>{% endraw %}'s. Thus every level-{% raw %}<span class="math inline">\(\alpha\)</span>{% endraw %} test has power at most {% raw %}<span class="math inline">\(\alpha\)</span>{% endraw %} at every alternative in this unrestricted fixed-assignment model. The constant test {% raw %}<span class="math inline">\(\phi\equiv\alpha\)</span>{% endraw %} attains the bound. This does not prove that every optimal critical function is pointwise constant.</p>
<h2 id="the-randomization-model">1. Assignment and sampling models</h2>
<p>In the finite-population model, fix the units' control responses {% raw %}<span class="math inline">\(u_1,\ldots,u_N\)</span>{% endraw %}, select {% raw %}<span class="math inline">\(n\)</span>{% endraw %} units uniformly for treatment, and put the remaining {% raw %}<span class="math inline">\(m=N-n\)</span>{% endraw %} in control. There are {% raw %}<span class="math inline">\(\binom Nn\)</span>{% endraw %} assignments. Equivalently, randomly order all {% raw %}<span class="math inline">\(N\)</span>{% endraw %} units in {% raw %}<span class="math inline">\(N!\)</span>{% endraw %} ways and use the last {% raw %}<span class="math inline">\(n\)</span>{% endraw %} positions for treatment; each assignment then occurs {% raw %}<span class="math inline">\(m!n!\)</span>{% endraw %} times. Under the sharp null of no unit-level effect, the ordered response vector is a random permutation of {% raw %}<span class="math inline">\(u\)</span>{% endraw %}. Under a constant additive effect {% raw %}<span class="math inline">\(\Delta\)</span>{% endraw %}, its treated entries are increased by {% raw %}<span class="math inline">\(\Delta\)</span>{% endraw %}. This discrete design model requires no Gaussian noise or superpopulation sampling.</p>
<p>A separate noisy version adds independent {% raw %}<span class="math inline">\(\mathcal{N}(0,\sigma^2)\)</span>{% endraw %} errors to each response. With strata of sizes {% raw %}<span class="math inline">\(N_i=m_i+n_i\)</span>{% endraw %}, let {% raw %}<span class="math inline">\(G=\prod_i\mathfrak S_{N_i}\)</span>{% endraw %}, {% raw %}<span class="math inline">\(N=\sum_iN_i\)</span>{% endraw %}, and let {% raw %}<span class="math inline">\(a\in\{0,1\}^N\)</span>{% endraw %} mark the treatment positions. Averaging the conditional Gaussian density over the random ordering gives
</p>
{% raw %}<div class="math display">\[p_{\sigma,u,\omega,\Delta}(z)=\frac1{|G|}\sum_{g\in G}\gamma_\sigma(z-gu-\omega\mathbf1-\Delta a),\qquad\gamma_\sigma(v)=(2\pi\sigma^2)^{-N/2}e^{-\|v\|^2/(2\sigma^2)}.\]</div>{% endraw %}
<p>
The coordinates are conditionally independent given the assignment; mixing over assignments need not preserve independence. Under {% raw %}<span class="math inline">\(\Delta=0\)</span>{% endraw %}, put {% raw %}<span class="math inline">\(\zeta=u+\omega\mathbf1\)</span>{% endraw %} to obtain
</p>
{% raw %}<div class="math display">\[p_{\sigma,\zeta}(z)=\frac1{|G|}\sum_{g\in G}\gamma_\sigma(z-g\zeta).\]</div>{% endraw %}
<p>
Repeated values are counted with their group multiplicities. The following characterization is for this noisy density family and concerns Lebesgue-almost-everywhere validity. For the noiseless fixed-population model, validity for every fixed response vector instead requires the corresponding orbit bound at every vector.</p>
<div class="proposition" data-note-kind="Proposition" data-note-number="1" id="prop:randomization-critical-function-nominal-level">
<p><strong>Proposition 1.</strong> Let {% raw %}<span class="math inline">\(\phi:\mathbb R^N\to[0,1]\)</span>{% endraw %} be measurable and {% raw %}<span class="math inline">\(0\le\alpha\le1\)</span>{% endraw %}. The condition</p>
<span id="eq:randomization-critical-function-nominal-level-1"></span>
{% raw %}<div class="math display">\[\mathbb{E}_{\sigma,\zeta}\phi(Z)\le\alpha\quad\text{for every }\sigma&gt;0,\ \zeta\in\mathbb R^N\tag{1}\]</div>{% endraw %}
<p>is equivalent to</p>
<span id="eq:randomization-critical-function-nominal-level-2"></span>
{% raw %}<div class="math display">\[\psi(z):=\frac1{|G|}\sum_{g\in G}\phi(gz)\le\alpha\quad\text{for Lebesgue-almost every }z.\tag{2}\]</div>{% endraw %}
</div>
<p>The sufficiency follows by averaging over the group. For necessity, a Gaussian with small variance can concentrate near a density point of any positive-measure set where the orbit average is too large.</p>
<div class="lemma" data-note-kind="Lemma" data-note-number="2" id="lem:randomization-critical-function-approximation-arg">
<p><strong>Lemma 2.</strong> If {% raw %}<span class="math inline">\(A\subset\mathbb R^N\)</span>{% endraw %} is Lebesgue measurable with positive measure, then for every {% raw %}<span class="math inline">\(\eta&gt;0\)</span>{% endraw %} there are {% raw %}<span class="math inline">\(\mu\in\mathbb R^N\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\sigma&gt;0\)</span>{% endraw %} such that {% raw %}<span class="math inline">\(P\{\mu+\sigma W\in A\}&gt;1-\eta\)</span>{% endraw %}, where {% raw %}<span class="math inline">\(W\sim\mathcal{N}(0,I_N)\)</span>{% endraw %}.</p>
</div>
<div class="proof">
<p><em>Proof.</em> Take a Lebesgue density point {% raw %}<span class="math inline">\(\mu\)</span>{% endraw %} of {% raw %}<span class="math inline">\(A\)</span>{% endraw %}, and choose {% raw %}<span class="math inline">\(R\)</span>{% endraw %} with {% raw %}<span class="math inline">\(P\{\|W\|&gt;R\}&lt;\eta/2\)</span>{% endraw %}. Inside the ball {% raw %}<span class="math inline">\(B(\mu,R\sigma)\)</span>{% endraw %}, the Gaussian density is at most {% raw %}<span class="math inline">\((2\pi)^{-N/2}\sigma^{-N}\)</span>{% endraw %}. Thus</p>
<span id="eq:randomization-critical-function-approximation-inequality-1"></span><span id="eq:randomization-critical-function-approximation-inequality-2"></span>
{% raw %}<div class="math display">\[P\{\mu+\sigma W\in A^c\}\le P\{\|W\|&gt;R\}+(2\pi)^{-N/2}\sigma^{-N}|A^c\cap B(\mu,R\sigma)|.\tag{3}\]</div>{% endraw %}
<span id="eq:randomization-critical-function-approximation-inequality-3"></span><span id="eq:randomization-critical-function-approximation-inequality-4"></span>
{% raw %}<div class="math display">\[|A^c\cap B(\mu,R\sigma)|=o(\sigma^N),\qquad\sigma\downarrow0.\tag{4}\]</div>{% endraw %}
<p>The second term is below {% raw %}<span class="math inline">\(\eta/2\)</span>{% endraw %} for sufficiently small {% raw %}<span class="math inline">\(\sigma\)</span>{% endraw %}. The density-point argument applies whether the total measure of {% raw %}<span class="math inline">\(A\)</span>{% endraw %} is finite or infinite. □</p>
</div>
<div class="proof">
<p><em>Proof of Proposition <a data-reference="prop:randomization-critical-function-nominal-level" data-reference-type="ref" href="#prop:randomization-critical-function-nominal-level">1</a>.</em> The density is invariant under {% raw %}<span class="math inline">\(G\)</span>{% endraw %}, so {% raw %}<span class="math inline">\(\mathbb{E}_{\sigma,\zeta}\phi=\mathbb{E}_{\sigma,\zeta}\psi\)</span>{% endraw %}. This proves sufficiency of (2). In addition, invariance of {% raw %}<span class="math inline">\(\psi\)</span>{% endraw %} and the rotational invariance of the Gaussian kernel give</p>
{% raw %}<div class="math display">\[\mathbb{E}_{\sigma,\zeta}\phi(Z)=\int\psi(z)\gamma_\sigma(z-\zeta)\,dz.\]</div>{% endraw %}
<p>For necessity, suppose (1) holds but (2) fails. There is {% raw %}<span class="math inline">\(\delta&gt;0\)</span>{% endraw %} such that {% raw %}<span class="math inline">\(A=\{z:\psi(z)&gt;\alpha+\delta\}\)</span>{% endraw %} has positive measure. Choose {% raw %}<span class="math inline">\(\eta&lt;\delta/(\alpha+\delta)\)</span>{% endraw %}. Lemma 2 supplies a Gaussian center {% raw %}<span class="math inline">\(\zeta\)</span>{% endraw %} and scale {% raw %}<span class="math inline">\(\sigma\)</span>{% endraw %} assigning probability greater than {% raw %}<span class="math inline">\(1-\eta\)</span>{% endraw %} to {% raw %}<span class="math inline">\(A\)</span>{% endraw %}. Nonnegativity of {% raw %}<span class="math inline">\(\psi\)</span>{% endraw %} then yields</p>
{% raw %}<div class="math display">\[\mathbb{E}_{\sigma,\zeta}\phi(Z)&gt;(\alpha+\delta)(1-\eta)&gt;\alpha,\]</div>{% endraw %}
<p>a contradiction. The argument concerns the orbit average {% raw %}<span class="math inline">\(\psi\)</span>{% endraw %}, not the individual critical function {% raw %}<span class="math inline">\(\phi\)</span>{% endraw %}. □</p>
</div>
<p>For the treatment-sum statistic, increasing a treated outcome increases {% raw %}<span class="math inline">\(T(z)-T(gz)\)</span>{% endraw %} for every permutation {% raw %}<span class="math inline">\(g\)</span>{% endraw %}: the coefficient of that outcome is either zero or one. The randomized upper-rank rejection probability is therefore nondecreasing in each treated outcome. Coupling the same assignment and errors at effects zero and {% raw %}<span class="math inline">\(\Delta&gt;0\)</span>{% endraw %} gives power at least {% raw %}<span class="math inline">\(\alpha\)</span>{% endraw %} for the exactly calibrated rule constructed below. This argument permits ties and does not imply strict improvement for every design.</p>

<h2 id="randomization-tests">2. Group invariance and exact tests</h2>
<div class="remark" data-note-kind="Remark" data-note-number="3" id="result-3">
<p><strong>Remark 3.</strong> Randomization can refer to allocating treatments before observations are collected, or to recomputing a statistic under transformations during analysis. Randomization calibration during analysis is exact only when the transformations preserve the relevant null law. A permutation-calibrated two-sample t statistic can therefore have exact null size for a common nonnormal distribution, while ordinary Student-t critical values generally do not.</p>
</div>
<div class="assumption" data-note-kind="Assumption" data-note-number="4" id="as:randomization-hypothesis">
<p><strong>Assumption 4.</strong> Let {% raw %}<span class="math inline">\(G\)</span>{% endraw %} be a finite group of measurable bijections of a measurable sample space {% raw %}<span class="math inline">\((\mathcal X,\mathcal A)\)</span>{% endraw %}. For every null distribution {% raw %}<span class="math inline">\(P\)</span>{% endraw %} and every {% raw %}<span class="math inline">\(g\in G\)</span>{% endraw %}, assume {% raw %}<span class="math inline">\(gX\stackrel d=X\)</span>{% endraw %} under {% raw %}<span class="math inline">\(P\)</span>{% endraw %}. Each null law itself must be invariant; merely mapping one null law into some other member of the null family is insufficient.</p>
</div>
<div class="example" data-note-kind="Example" data-note-number="5" id="result-5">
<p><strong>Example 5.</strong> For two independent i.i.d. samples from the same distribution, the pooled sample is i.i.d., so its joint law is invariant under every coordinate permutation. Equality of means alone does not ensure this exchangeability.</p>
</div>
<span id="eq:randomization-test-function"></span>
<span id="eq:property-of-randomization-test"></span>
<p>Let {% raw %}<span class="math inline">\(M=|G|\)</span>{% endraw %}, and order the multiset {% raw %}<span class="math inline">\(T(gx)\)</span>{% endraw %} as {% raw %}<span class="math inline">\(T^{(1)}(x)\le\cdots\le T^{(M)}(x)\)</span>{% endraw %}. For {% raw %}<span class="math inline">\(0&lt;\alpha&lt;1\)</span>{% endraw %}, set {% raw %}<span class="math inline">\(k=M-\lfloor M\alpha\rfloor\)</span>{% endraw %}, {% raw %}<span class="math inline">\(c(x)=T^{(k)}(x)\)</span>{% endraw %}, and
</p>
{% raw %}<div class="math display">\[M^+(x)=\#\{g:T(gx)&gt;c(x)\},\quad M^0(x)=\#\{g:T(gx)=c(x)\},\quad a(x)=\frac{M\alpha-M^+(x)}{M^0(x)}.\]</div>{% endraw %}
<p>
Here {% raw %}<span class="math inline">\(M^+\le M-k=\lfloor M\alpha\rfloor\)</span>{% endraw %} and {% raw %}<span class="math inline">\(M^++M^0\ge M-k+1&gt;M\alpha\)</span>{% endraw %}. Thus {% raw %}<span class="math inline">\(M^0&gt;0\)</span>{% endraw %} and {% raw %}<span class="math inline">\(0\le a\le1\)</span>{% endraw %}. Define
</p>
{% raw %}<div class="math display">\[\phi(x)=\mathbf1\{T(x)&gt;c(x)\}+a(x)\mathbf1\{T(x)=c(x)\}.\]</div>{% endraw %}
<p>
For any {% raw %}<span class="math inline">\(h\in G\)</span>{% endraw %}, right multiplication {% raw %}<span class="math inline">\(g\mapsto gh\)</span>{% endraw %} permutes the group, so {% raw %}<span class="math inline">\(T^{(j)}(hx)=T^{(j)}(x)\)</span>{% endraw %} for every order index {% raw %}<span class="math inline">\(j\)</span>{% endraw %}. This is a group identity and requires no distributional assumption. The cutoff and tie counts are invariant as well. Hence, at every {% raw %}<span class="math inline">\(x\)</span>{% endraw %},
</p>
{% raw %}<div class="math display">\[\sum_{g\in G}\phi(gx)=M^+(x)+a(x)M^0(x)=M\alpha.\]</div>{% endraw %}

<span id="eq:randomization-test-is-level-alpha"></span>
<div class="proposition" data-note-kind="Proposition" data-note-number="6" id="prop:randomization-test-is-level-alpha">
<p><strong>Proposition 6.</strong> Under Assumption 4, the preceding randomized test has {% raw %}<span class="math inline">\(E_P\phi(X)=\alpha\)</span>{% endraw %} for every null {% raw %}<span class="math inline">\(P\)</span>{% endraw %}.</p>
<p>Proof. Average the invariant null expectations: {% raw %}<span class="math inline">\(E_P\phi=M^{-1}\sum_gE_P\phi(gX)=E_P[M^{-1}\sum_g\phi(gX)]=\alpha\)</span>{% endraw %}. This remains valid with ties, fixed points, and repeated statistic values, since the average is over group elements.</p>
</div>
<div class="remark" data-note-kind="Remark" data-note-number="7" id="result-7">
<p><strong>Remark 7.</strong> The orbit {% raw %}<span class="math inline">\(Gx=\{gx:g\in G\}\)</span>{% endraw %} contains the sample points obtainable from {% raw %}<span class="math inline">\(x\)</span>{% endraw %}. Orbits partition the sample space. To make conditioning precise even when individual orbits have probability zero, use the invariant sigma-field
</p>
{% raw %}<div class="math display">\[\mathcal I=\{A\in\mathcal A:g^{-1}A=A\text{ for every }g\in G\}.\]</div>{% endraw %}
<p>
The following conditional-expectation identity avoids interpreting conditioning on a zero-probability event directly.</p>
</div>
<span id="eq:formula-conditional-dist-permutation-model"></span>
<span id="eq:formula-conditional-dist-randomization-1"></span>
<span id="eq:formula-conditional-dist-randomization-2"></span>
<span id="eq:formula-conditional-dist-randomization-3"></span>
<div class="theorem" data-note-kind="Theorem" data-note-number="8" id="thm:conditional-dist-permutation-model-is-uniform">
<p><strong>Theorem 8.</strong> For every bounded measurable {% raw %}<span class="math inline">\(f\)</span>{% endraw %}, under an invariant null law,
</p>
{% raw %}<div class="math display">\[E_P[f(X)\mid\mathcal I]=\frac1M\sum_{g\in G}f(gX)\quad\text{almost surely}.\]</div>{% endraw %}
<p>
In particular, taking {% raw %}<span class="math inline">\(f(x)=\mathbf1\{T(x)\in B\}\)</span>{% endraw %} gives the conditional law of the statistic for every Borel set {% raw %}<span class="math inline">\(B\)</span>{% endraw %}.</p>
<p>Proof. The average {% raw %}<span class="math inline">\(Af(x)=M^{-1}\sum_gf(gx)\)</span>{% endraw %} is measurable and invariant, so all its measurable level sets belong to {% raw %}<span class="math inline">\(\mathcal I\)</span>{% endraw %}. The individual summands need not be invariant or {% raw %}<span class="math inline">\(\mathcal I\)</span>{% endraw %}-measurable. For {% raw %}<span class="math inline">\(E\in\mathcal I\)</span>{% endraw %}, null invariance gives
</p>
{% raw %}<div class="math display">\[\int_EAf\,dP=\frac1M\sum_g E_P[\mathbf1_E(X)f(gX)]=\frac1M\sum_gE_P[\mathbf1_E(gX)f(gX)]=\int_E f\,dP.\]</div>{% endraw %}
<p>
These are the defining properties of conditional expectation.</p>
<p>On a standard Borel sample space this average also defines a conditional probability kernel. Each distinct point in the orbit is attained by exactly {% raw %}<span class="math inline">\(|\operatorname{Stab}(x)|\)</span>{% endraw %} group elements: the maps sending {% raw %}<span class="math inline">\(x\)</span>{% endraw %} to a fixed orbit point form a coset of its stabilizer. Thus the kernel is uniform on distinct orbit points even when {% raw %}<span class="math inline">\(M&gt;|Gx|\)</span>{% endraw %}. Its pushforward under {% raw %}<span class="math inline">\(T\)</span>{% endraw %} assigns mass in proportion to the multiplicities of statistic values, not necessarily uniformly over distinct values.</p>
</div>
<div class="example" data-note-kind="Example" data-note-number="9" id="eg:independence-tests">
<p><strong>Example 9.</strong> For i.i.d. pairs {% raw %}<span class="math inline">\((Y_i,Z_i)\)</span>{% endraw %}, under independence the joint law is {% raw %}<span class="math inline">\(P_Y^{\otimes n}\otimes P_Z^{\otimes n}\)</span>{% endraw %}. Permuting only the {% raw %}<span class="math inline">\(Z\)</span>{% endraw %}-coordinates leaves this product law unchanged, so {% raw %}<span class="math inline">\(((Y_i,Z_{\pi(i)}))_{i=1}^n\)</span>{% endraw %} is a valid transformation group. No densities or continuity are needed. In a bivariate normal model, zero correlation implies independence; in a general model, zero correlation alone does not establish the permutation null.</p>
</div>
<div class="remark" data-note-kind="Remark" data-note-number="10" id="rem:define-randomization-p-value">
<p><strong>Remark 10.</strong> The conservative upper-tail p-value is
</p>
{% raw %}<div class="math display">\[\widehat p=\frac1M\#\{g:T(gX)\ge T(X)\}.\]</div>{% endraw %}
<p>
To prove {% raw %}<span class="math inline">\(P(\widehat p\le s)\le s\)</span>{% endraw %}, fix an orbit and list its statistic levels from largest to smallest, with multiplicities {% raw %}<span class="math inline">\(b_1,b_2,\ldots\)</span>{% endraw %}. At level {% raw %}<span class="math inline">\(j\)</span>{% endraw %}, the p-value is {% raw %}<span class="math inline">\((b_1+\cdots+b_j)/M\)</span>{% endraw %}. The total multiplicity of all levels with p-value at most {% raw %}<span class="math inline">\(s\)</span>{% endraw %} is therefore at most {% raw %}<span class="math inline">\(Ms\)</span>{% endraw %}. Conditional averaging from Theorem 8, followed by expectation, proves superuniformity.</p>
<p>For an exactly uniform randomized p-value, let {% raw %}<span class="math inline">\(V\)</span>{% endraw %} be an independent uniform variable and use
</p>
{% raw %}<div class="math display">\[p_V=\frac{\#\{g:T(gX)&gt;T(X)\}+V\#\{g:T(gX)=T(X)\}}M.\]</div>{% endraw %}
<p>
Conditional on level {% raw %}<span class="math inline">\(j\)</span>{% endraw %}, this is uniform on the interval of length {% raw %}<span class="math inline">\(b_j/M\)</span>{% endraw %} between the preceding and current cumulative counts. That level itself has probability {% raw %}<span class="math inline">\(b_j/M\)</span>{% endraw %}, so the mixture is uniform on {% raw %}<span class="math inline">\([0,1]\)</span>{% endraw %}. Rejecting {% raw %}<span class="math inline">\(p_V\le\alpha\)</span>{% endraw %} gives exactly the cutoff randomization above.</p>
</div>
<span id="eq:randomization-distribution"></span>
<h2 id="randomization-conditional-limits">3. Conditional distribution limits</h2><p>For large-sample analysis let {% raw %}<span class="math inline">\(X^n\sim P_n\)</span>{% endraw %}, with a finite group {% raw %}<span class="math inline">\(G_n\)</span>{% endraw %}, statistic {% raw %}<span class="math inline">\(T_n\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(M_n=|G_n|\)</span>{% endraw %}. Define
</p>
{% raw %}<div class="math display">\[\widehat R_n(t)=\frac1{M_n}\sum_{g\in G_n}\mathbf1\{T_n(gX^n)\le t\},\qquad\widehat r_n(p)=\inf\{t:\widehat R_n(t)\ge p\}.\]</div>{% endraw %}
<p>The quantile is the generalized inverse of {% raw %}<span class="math inline">\(\widehat R_n\)</span>{% endraw %}. A uniform group element {% raw %}<span class="math inline">\(G_n^*\)</span>{% endraw %}, independent of the data, satisfies {% raw %}<span class="math inline">\(\widehat R_n(t)=P\{T_n(G_n^*X^n)\le t\mid X^n\}\)</span>{% endraw %}. Conditional convergence of this cdf is the hypothesis needed for random critical values.</p>

<span id="thm:asymptotic-randomization-test-1"></span>
<span id="thm:asymptotic-randomization-test-2"></span>
<span id="eq:weak-cvgce-in-prob-randomization-distribution"></span>
<span id="eq:consistency-randomization-distribution"></span>

<div class="theorem" data-note-kind="Theorem" data-note-number="11" id="thm:asymptotic-randomization-test">
<p><strong>Theorem 11.</strong> Let {% raw %}<span class="math inline">\(G_n^*,G_n^{*\prime}\)</span>{% endraw %} be independent uniform group elements, independent of {% raw %}<span class="math inline">\(X^n\)</span>{% endraw %}. The joint convergence
</p>
{% raw %}<div class="math display">\[(T_n(G_n^*X^n),T_n(G_n^{*\prime}X^n))\Rightarrow(Z,Z'),\]</div>{% endraw %}
<p>
where {% raw %}<span class="math inline">\(Z,Z'\)</span>{% endraw %} are independent with common cdf {% raw %}<span class="math inline">\(R\)</span>{% endraw %}, is equivalent to {% raw %}<span class="math inline">\(\widehat R_n(t)\xrightarrow{P} R(t)\)</span>{% endraw %} at every continuity point of {% raw %}<span class="math inline">\(R\)</span>{% endraw %}. If {% raw %}<span class="math inline">\(r=R^{-1}(p)\)</span>{% endraw %} is finite and {% raw %}<span class="math inline">\(R\)</span>{% endraw %} is continuous and strictly increasing at that quantile, then {% raw %}<span class="math inline">\(\widehat r_n(p)\xrightarrow{P} r\)</span>{% endraw %}.</p>
<p>Proof. Conditional on the data the two transformed statistics are independent, each with cdf {% raw %}<span class="math inline">\(\widehat R_n\)</span>{% endraw %}. Thus
</p>
{% raw %}<div class="math display">\[E\widehat R_n(t)=P(T_n(G_n^*X^n)\le t),\quad E\widehat R_n(t)^2=P(T_n(G_n^*X^n)\le t,T_n(G_n^{*\prime}X^n)\le t).\]</div>{% endraw %}
<p>
Joint convergence at continuity points gives limits {% raw %}<span class="math inline">\(R(t)\)</span>{% endraw %} and {% raw %}<span class="math inline">\(R(t)^2\)</span>{% endraw %}, so the variance tends to zero and hence {% raw %}<span class="math inline">\(\widehat R_n(t)\to R(t)\)</span>{% endraw %} in {% raw %}<span class="math inline">\(L^2\)</span>{% endraw %}.</p>
<p>Conversely, bounded convergence in probability implies convergence in {% raw %}<span class="math inline">\(L^1\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(0\le\widehat R_n\le1\)</span>{% endraw %}. Therefore for continuity points {% raw %}<span class="math inline">\(s,t\)</span>{% endraw %},
</p>
{% raw %}<div class="math display">\[P(T_n(G_n^*X^n)\le s,T_n(G_n^{*\prime}X^n)\le t)=E[\widehat R_n(s)\widehat R_n(t)]\longrightarrow R(s)R(t).\]</div>{% endraw %}
<p>
These rectangle probabilities identify the product limit distribution; marginal convergence supplies tightness, proving joint weak convergence.</p>
<p>For the quantile, choose continuity points {% raw %}<span class="math inline">\(a,b\)</span>{% endraw %} with {% raw %}<span class="math inline">\(r-\varepsilon&lt;a&lt;r&lt;b&lt;r+\varepsilon\)</span>{% endraw %} and {% raw %}<span class="math inline">\(R(a)&lt;p&lt;R(b)\)</span>{% endraw %}. With probability tending to one, {% raw %}<span class="math inline">\(\widehat R_n(a)&lt;p&lt;\widehat R_n(b)\)</span>{% endraw %}, which forces {% raw %}<span class="math inline">\(a&lt;\widehat r_n(p)\le b\)</span>{% endraw %}. This proves convergence and explains the strictness assumption at the quantile.</p>
<p>The transformed statistics are independent conditionally on the data, not generally unconditionally. The theorem asks that their shared-data dependence disappear in the limit; marginal normality alone would not establish this.</p>
</div>
<p><em>Remark.</em> In <a href="#thm:asymptotic-randomization-test">Theorem 11</a>, the coordinates of {% raw %}<span class="math inline">\(X^n\)</span>{% endraw %} are not assumed to be i.i.d. The auxiliary uniform group elements satisfy the independence conditions stated in the theorem.</p>
<span id="thm:asymptotic-normality-of-randomization-test-1"></span>
<span id="thm:asymptotic-normality-of-randomization-test-2"></span>
<div class="theorem" data-note-kind="Theorem" data-note-number="12" id="thm:asymptotic-normality-of-randomization-test">
<p><strong>Theorem 12.</strong> Let the group consist of all {% raw %}<span class="math inline">\(2^n\)</span>{% endraw %} coordinate sign vectors. Suppose {% raw %}<span class="math inline">\(P\)</span>{% endraw %} is symmetric about zero and, under its i.i.d. product law,
</p>
{% raw %}<div class="math display">\[T_n=\frac1{\sqrt n}\sum_i\psi_P(X_i)+o_P(1),\]</div>{% endraw %}
<p>
where {% raw %}<span class="math inline">\(\psi_P\)</span>{% endraw %} is odd and {% raw %}<span class="math inline">\(0&lt;\sigma_P^2=E_P\psi_P^2&lt;\infty\)</span>{% endraw %}. Then {% raw %}<span class="math inline">\(\widehat R_n(t)\xrightarrow{P}\Phi(t/\sigma_P)\)</span>{% endraw %} for every {% raw %}<span class="math inline">\(t\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(\widehat r_n(1-\alpha)\xrightarrow{P}\sigma_Pz_{1-\alpha}\)</span>{% endraw %}.</p>
<p>For a general {% raw %}<span class="math inline">\(P\)</span>{% endraw %}, let {% raw %}<span class="math inline">\(\widetilde P\)</span>{% endraw %} be the distribution of {% raw %}<span class="math inline">\(\epsilon X\)</span>{% endraw %}, with an independent uniform sign. Its cdf is
</p>
{% raw %}<div class="math display">\[\widetilde F(t)=\frac{F(t)+1-F((-t)-)}2.\]</div>{% endraw %}
<p>
The left limit is necessary when {% raw %}<span class="math inline">\(P\)</span>{% endraw %} has atoms. If the same asymptotic linearity holds under {% raw %}<span class="math inline">\(\widetilde P\)</span>{% endraw %}, with an odd influence function and positive finite variance {% raw %}<span class="math inline">\(\sigma_{\widetilde P}^2\)</span>{% endraw %}, the randomization cdf and quantile under {% raw %}<span class="math inline">\(P\)</span>{% endraw %} converge to {% raw %}<span class="math inline">\(\Phi(t/\sigma_{\widetilde P})\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\sigma_{\widetilde P}z_{1-\alpha}\)</span>{% endraw %}.</p>
<p>Proof. Use independent sign vectors {% raw %}<span class="math inline">\((\epsilon_i)\)</span>{% endraw %} and {% raw %}<span class="math inline">\((\epsilon_i')\)</span>{% endraw %}, independent of the data. Under symmetry, each transformed sample has law {% raw %}<span class="math inline">\(P^{\otimes n}\)</span>{% endraw %}, so both transformed remainders tend to zero in probability; a union bound makes this joint. Oddness gives
</p>
{% raw %}<div class="math display">\[(T_n(\epsilon X),T_n(\epsilon'X))=\frac1{\sqrt n}\sum_i(\epsilon_i\psi_P(X_i),\epsilon_i'\psi_P(X_i))+o_P(1).\]</div>{% endraw %}
<p>
The summand vectors are i.i.d., centered, and have covariance matrix {% raw %}<span class="math inline">\(\sigma_P^2 I_2\)</span>{% endraw %}: their cross moment is {% raw %}<span class="math inline">\(E\epsilon_iE\epsilon_i' E\psi_P(X_i)^2=0\)</span>{% endraw %}. The bivariate CLT therefore gives independent normal limits, and Theorem 11 applies.</p>
<p>For arbitrary {% raw %}<span class="math inline">\(P\)</span>{% endraw %}, its symmetrization has the same absolute-value distribution. The full sign-randomization multiset depends only on the absolute sample, so the random cdf and its quantile have identical laws under {% raw %}<span class="math inline">\(P^{\otimes n}\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\widetilde P^{\otimes n}\)</span>{% endraw %}. Apply the first part to the symmetrized sampling law {% raw %}<span class="math inline">\(\widetilde P^{\otimes n}\)</span>{% endraw %}. Oddness must be imposed in this part too. For example, {% raw %}<span class="math inline">\(T_n=n^{-1/2}\sum_i(X_i^2-E X_i^2)\)</span>{% endraw %} has an even influence function and is unchanged by sign flips. Its randomization cdf is a random point mass, and cannot converge to a nondegenerate deterministic normal cdf. This shows why asymptotic linearity without oddness is insufficient.</p>
</div>
<h2 id="randomization-local-power">4. Contiguity and local power</h2>
<div class="lemma" id="randomization-kernel-contiguity">
<p><strong>Lemma (Contiguity after common randomization).</strong> Suppose {% raw %}<span class="math inline">\(Q_n\lhd P_n\)</span>{% endraw %} on the data space. Let {% raw %}<span class="math inline">\(K_n(x,du)\)</span>{% endraw %} be the same conditional law of auxiliary randomness under both experiments. Then {% raw %}<span class="math inline">\(Q_nK_n\lhd P_nK_n\)</span>{% endraw %} on the enlarged space.</p>
</div>
<p><em>Proof.</em> For an event {% raw %}<span class="math inline">\(A_n\)</span>{% endraw %} in the enlarged space, put {% raw %}<span class="math inline">\(f_n(x)=K_n(x,\{u:(x,u)\in A_n\})\)</span>{% endraw %}. If {% raw %}<span class="math inline">\(E_{P_n}f_n\to0\)</span>{% endraw %}, then {% raw %}<span class="math inline">\(P_n(f_n&gt;\varepsilon)\le E_{P_n}f_n/\varepsilon\to0\)</span>{% endraw %}. Contiguity gives {% raw %}<span class="math inline">\(Q_n(f_n&gt;\varepsilon)\to0\)</span>{% endraw %}, while {% raw %}<span class="math inline">\(E_{Q_n}f_n\le\varepsilon+Q_n(f_n&gt;\varepsilon)\)</span>{% endraw %}. Let {% raw %}<span class="math inline">\(n\to\infty\)</span>{% endraw %} and then {% raw %}<span class="math inline">\(\varepsilon\downarrow0\)</span>{% endraw %}. {% raw %}<span class="math inline">\(\square\)</span>{% endraw %}</p>
<p>This lemma covers independent tie-breaking variables and data-dependent Monte Carlo draws, provided the simulation rule conditional on the data is unchanged.</p>
<div class="proposition" id="randomization-qmd-power">
<p><strong>Proposition (Local power from an influence function).</strong> In a QMD model at {% raw %}<span class="math inline">\(\theta_0\)</span>{% endraw %}, suppose under {% raw %}<span class="math inline">\(P_{\theta_0}^{\otimes n}\)</span>{% endraw %} that {% raw %}<span class="math display">\[
T_n=\frac1{\sqrt n}\sum_i\psi(X_i)+o_P(1),\quad
E_0\psi=0,\quad 0&lt;E_0\psi^2=\sigma^2&lt;\infty,
\qquad\widehat r_n(1-\alpha)\xrightarrow{P}\sigma z_{1-\alpha}.
\]</span>{% endraw %} Write {% raw %}<span class="math inline">\(c=E_0[\psi\dot\ell_{\theta_0}^\top]\)</span>{% endraw %}. For {% raw %}<span class="math inline">\(\theta_n=\theta_0+h_n/\sqrt n\)</span>{% endraw %}, {% raw %}<span class="math inline">\(h_n\to h\)</span>{% endraw %}, the upper-tail randomization test, including any tie rule, has limiting power {% raw %}<span class="math display">\[
1-\Phi\left(z_{1-\alpha}-\frac{ch}{\sigma}\right).
\]</span>{% endraw %}</p>
</div>
<p><em>Proof.</em> The joint CLT and third lemma give {% raw %}<span class="math inline">\(T_n\Rightarrow\mathcal{N}(ch,\sigma^2)\)</span>{% endraw %} under the alternatives, after contiguity transfers the remainder. Contiguity also transfers the critical-value limit. The <a href="{% post_url 2022-04-16-asymptotic-power-relative-efficiency-and-optimal-tests %}#local-power-random-cutoff">random-cutoff lemma</a> gives the rejection limit and shows that boundary randomization has vanishing effect. For auxiliary simulation, apply the preceding kernel lemma. {% raw %}<span class="math inline">\(\square\)</span>{% endraw %}</p>
<p>The critical-value assumption must be established under the null, for example by Theorems 11–12. The unconditional CLT for {% raw %}<span class="math inline">\(T_n\)</span>{% endraw %} does not establish it.</p>
<div class="example" data-note-kind="Example" data-note-number="13" id="eg:one-sample-test-symmetry">
<p><strong>Example 13.</strong> Take {% raw %}<span class="math inline">\(T_n=\sqrt n\overline X_n=n^{-1/2}\sum_iX_i\)</span>{% endraw %}. For any mean-zero distribution with finite positive variance {% raw %}<span class="math inline">\(\sigma^2\)</span>{% endraw %}, symmetrization leaves {% raw %}<span class="math inline">\(EX^2=\sigma^2\)</span>{% endraw %} unchanged, and {% raw %}<span class="math inline">\(\psi(x)=x\)</span>{% endraw %} is odd. Theorem 12 gives a randomization critical value converging to {% raw %}<span class="math inline">\(\sigma z_{1-\alpha}\)</span>{% endraw %}. The ordinary CLT gives {% raw %}<span class="math inline">\(T_n\Rightarrow \mathcal{N}(0,\sigma^2)\)</span>{% endraw %}. Hence the rejection probability tends to {% raw %}<span class="math inline">\(\alpha\)</span>{% endraw %}.</p>
<p>The possible boundary randomization makes no difference to this limit. For a deterministic limit {% raw %}<span class="math inline">\(c\)</span>{% endraw %} of the critical values,
</p>
{% raw %}<div class="math display">\[P(T_n=\widehat r_n)\le P(|\widehat r_n-c|&gt;\varepsilon)+P(|T_n-c|\le\varepsilon).\]</div>{% endraw %}
<p>
The first term vanishes, and the limsup of the second tends to zero as {% raw %}<span class="math inline">\(\varepsilon\downarrow0\)</span>{% endraw %} because the limiting normal law is continuous. Thus the test is exact under symmetry, and pointwise asymptotically level {% raw %}<span class="math inline">\(\alpha\)</span>{% endraw %} under the wider mean-zero finite-variance null. This is not a uniform assertion over all such distributions, nor does the mean statistic detect every asymmetric distribution.</p>
<p>Under {% raw %}<span class="math inline">\(X_i\sim \mathcal{N}(h/\sqrt n,\sigma^2)\)</span>{% endraw %}, the observed statistic has exactly the law {% raw %}<span class="math inline">\(\mathcal{N}(h,\sigma^2)\)</span>{% endraw %}. The likelihood ratio relative to the centered product model is
</p>
{% raw %}<div class="math display">\[L_n=\exp\left\{\frac h{\sigma^2}T_n-\frac{h^2}{2\sigma^2}\right\}.\]</div>{% endraw %}
<p>
Under the null, {% raw %}<span class="math inline">\(E_0L_n^2=e^{h^2/\sigma^2}\)</span>{% endraw %}, uniformly in {% raw %}<span class="math inline">\(n\)</span>{% endraw %}. Cauchy–Schwarz therefore gives {% raw %}<span class="math inline">\(P_h(A_n)\le e^{h^2/(2\sigma^2)}P_0(A_n)^{1/2}\)</span>{% endraw %}, explicitly proving contiguity and transfer of the critical-value limit. The limiting power is
</p>
{% raw %}<div class="math display">\[1-\Phi\left(z_{1-\alpha}-\frac h\sigma\right).\]</div>{% endraw %}
<p>
This matches the ordinary t-test under the same normal local model, giving efficacy {% raw %}<span class="math inline">\(1/\sigma\)</span>{% endraw %} and Pitman relative efficiency one in that comparison.</p>
</div>
<nav aria-label="Related notes" class="note-related"><p>Related notes: <a href="{% post_url 2023-02-25-confidence-bounds-conditioning-and-unbiased-tests %}">Confidence Bounds, Conditioning, and Unbiased Tests</a>.</p></nav>
<nav aria-label="Notes in this series" class="note-series"><p>Previous: <a href="{% post_url 2023-02-25-confidence-bounds-conditioning-and-unbiased-tests %}">Confidence Bounds, Conditioning, and Unbiased Tests</a> · Next: <a href="{% post_url 2025-12-15-conditional-stochastic-dominance-with-nearest-observations %}">Conditional Stochastic Dominance with Nearest Observations</a></p></nav>
</div>
