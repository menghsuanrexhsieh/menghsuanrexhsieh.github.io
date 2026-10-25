---
layout: "post"
title: "When Pre-Testing Yields Valid Inference"
date: "2024-07-28"
tags: ["econometrics", "asymptotic theory"]
excerpt: "The Gaussian correlation inequality explains why symmetric convex specification tests preserve asymptotic coverage under the maintained model."
note_series: "Specification tests and conditional inference"
note_source: "scripts/notes/paper-notes/pretesting-0.md"
---

<div class="note-content" markdown="0">

<p>A difference-in-differences estimate is often reported only after a pre-trends test fails to reject. The reported confidence interval is therefore evaluated in a sample selected by the pre-test. Its coverage depends on the joint distribution of the treatment-effect estimate and the estimated pre-trends.</p>

<p>The clever trick in <span class="citation" data-cites="dechaisemartin_pretests_2024">de Chaisemartin and D’Haultfœuille (<a href="#ref-dechaisemartin_pretests_2024" role="doc-biblioref">2024</a>)</span> is how they express coverage and passing the pre-tests as two symmetric convex events in the same centered Gaussian distribution. They apply the Gaussian correlation inequality to bound the joint probability from below, then divide by the probability of passing the pre-tests to establish conditional coverage. Their argument allows arbitrary correlation between the estimation error and the specification-test estimates.</p>

<p>Their result applies under the maintained assumptions that justify the original estimator. In the DID application, these include the parallel-trends restriction identifying the post-treatment effect. The analysis below follows the July 4, 2024 version of the paper.</p>

<h3 data-note-section="1" id="pretesting-0-reporting">1. Reporting after a specification test</h3>
<p>They consider inference on a parameter {% raw %}<span class="math inline">\(\beta_0\in\mathbb R^p\)</span>{% endraw %} based on an estimator {% raw %}<span class="math inline">\(\widehat\beta_n\)</span>{% endraw %}. Write {% raw %}<span class="math inline">\(\mathcal P_0\)</span>{% endraw %} for the set of data distributions under which the maintained model and the stated asymptotic approximation hold. Let {% raw %}<span class="math inline">\(\mathcal P_1\)</span>{% endraw %} be the set of distributions satisfying the tested restrictions. They assume</p>

{% raw %}<div class="math display">\[
P\in\mathcal P_0\quad\Longrightarrow\quad P\in\mathcal P_1.
\]</div>{% endraw %}
<p>For example, parallel trends across all dates implies zero pre-treatment differences in trends. The specification tests examine those pre-treatment restrictions. Identification of the treatment effect uses the restriction on the untreated post-treatment outcome as well.</p>

<p>For a fixed number {% raw %}<span class="math inline">\(J\)</span>{% endraw %} of specification tests, let {% raw %}<span class="math inline">\(T_{j,n}\)</span>{% endraw %} be the {% raw %}<span class="math inline">\(j\)</span>{% endraw %}th statistic and {% raw %}<span class="math inline">\(q_{j,n}\)</span>{% endraw %} its critical value. Define the event on which the researcher reports inference by</p>

{% raw %}<span id="eq:pt-reporting"></span><div class="math display">\[
S_n\triangleq\bigcap_{j=1}^J\{T_{j,n}\le q_{j,n}\}.

\tag{1}\]</div>{% endraw %}
<p>If {% raw %}<span class="math inline">\(\mathrm{CR}_n\)</span>{% endraw %} is a confidence region, the coverage probability of interest is</p>

{% raw %}<span id="eq:pt-coverage-ratio"></span><div class="math display">\[
\mathbb P_P(\beta_0\in\mathrm{CR}_n\mid S_n)
=\frac{\mathbb P_P(\beta_0\in\mathrm{CR}_n,\ S_n)}
       {\mathbb P_P(S_n)}.

\tag{2}\]</div>{% endraw %}
<p>Their null analysis holds {% raw %}<span class="math inline">\(P\in\mathcal P_0\)</span>{% endraw %} fixed; the notation below suppresses the subscript {% raw %}<span class="math inline">\(P\)</span>{% endraw %}. The procedure, the parameter, and the collection of specification tests are fixed before observing the sample. The statements concern the limit as {% raw %}<span class="math inline">\(n\to\infty\)</span>{% endraw %} at this distribution.</p>

<h3 data-note-section="2" id="pretesting-0-gaussian">2. Two convex sets in a joint Gaussian distribution</h3>
<p>They use the Gaussian correlation inequality of <span class="citation" data-cites="royen_gaussian_2014">Royen (<a href="#ref-royen_gaussian_2014" role="doc-biblioref">2014</a>)</span>, which states that, for a centered Gaussian probability measure {% raw %}<span class="math inline">\(\mu\)</span>{% endraw %} on a finite-dimensional Euclidean space and symmetric convex Borel sets {% raw %}<span class="math inline">\(A,B\)</span>{% endraw %},</p>

{% raw %}<span id="eq:pt-gci"></span><div class="math display">\[
\mu(A\cap B)\ge\mu(A)\mu(B).

\tag{3}\]</div>{% endraw %}
<p>Here {% raw %}<span class="math inline">\(-A\triangleq\{-a:a\in A\}\)</span>{% endraw %} and {% raw %}<span class="math inline">\(-B\triangleq\{-b:b\in B\}\)</span>{% endraw %} are the reflections of the two sets through the origin: every coordinate of every point changes sign. Symmetry means {% raw %}<span class="math inline">\(A=-A\)</span>{% endraw %} and {% raw %}<span class="math inline">\(B=-B\)</span>{% endraw %}, so a point belongs to either set exactly when its negative does. For example, reflecting {% raw %}<span class="math inline">\([1,2]\)</span>{% endraw %} gives {% raw %}<span class="math inline">\([-2,-1]\)</span>{% endraw %}, while reflecting {% raw %}<span class="math inline">\([-c,c]\)</span>{% endraw %} gives the same interval.</p>

<p>When {% raw %}<span class="math inline">\(A\)</span>{% endraw %} represents an event for a random vector {% raw %}<span class="math inline">\(X\)</span>{% endraw %}, its probability is {% raw %}<span class="math inline">\(\mathbb P(X\in A)\)</span>{% endraw %}. Reflection gives the event {% raw %}<span class="math inline">\(\{X\in -A\}=\{-X\in A\}\)</span>{% endraw %}, with the same interpretation for {% raw %}<span class="math inline">\(B\)</span>{% endraw %}. The complement of the event is {% raw %}<span class="math inline">\(\{X\notin A\}\)</span>{% endraw %}, written {% raw %}<span class="math inline">\(\{X\in A^c\}\)</span>{% endraw %}.</p>

<p>The inequality allows arbitrary correlation among the Gaussian random variables. They apply this result to the joint Gaussian limit of the estimation error and the specification-test estimates, as follows.</p>

<div id="pt-gaussian-coverage" class="proposition" data-note-number="1" data-note-kind="Proposition">
<p><strong>Proposition 1</strong>. (Conditional Gaussian coverage.) Let {% raw %}<span class="math inline">\((Z,W)\in\mathbb R^p\times\mathbb R^q\)</span>{% endraw %} be jointly centered Gaussian. Let {% raw %}<span class="math inline">\(C\subseteq\mathbb R^p\)</span>{% endraw %} and {% raw %}<span class="math inline">\(K\subseteq\mathbb R^q\)</span>{% endraw %} be symmetric convex Borel sets, with {% raw %}<span class="math inline">\(\mathbb P(W\in K)&gt;0\)</span>{% endraw %}. Then</p>

{% raw %}<span id="eq:pt-gaussian-coverage"></span><div class="math display">\[
\mathbb P(Z\in C\mid W\in K)\ge\mathbb P(Z\in C).

\tag{4}\]</div>{% endraw %}
</div>
<div class="proof">
<p><em>Proof.</em> Let {% raw %}<span class="math inline">\(\mu\)</span>{% endraw %} be the joint law of {% raw %}<span class="math inline">\((Z,W)\)</span>{% endraw %} and define</p>

{% raw %}<div class="math display">\[
A=C\times\mathbb R^q,
\qquad B=\mathbb R^p\times K.
\]</div>{% endraw %}
<p>The two sets are convex and symmetric about zero. Their probabilities satisfy</p>

{% raw %}<div class="math display">\[
\begin{aligned}
\mu(A)&amp;=\mathbb P(Z\in C),\\
\mu(B)&amp;=\mathbb P(W\in K),\\
\mu(A\cap B)&amp;=\mathbb P(Z\in C,\ W\in K).
\end{aligned}
\]</div>{% endraw %}
<p>Substituting into the Gaussian correlation inequality and dividing by {% raw %}<span class="math inline">\(\mathbb P(W\in K)\)</span>{% endraw %} proves the result. {% raw %}<span class="math inline">\(\square\)</span>{% endraw %}</p>

</div>
<p>For a standard normal scalar {% raw %}<span class="math inline">\(Z\)</span>{% endraw %}, the interval {% raw %}<span class="math inline">\(C=[-z_{1-\alpha/2},z_{1-\alpha/2}]\)</span>{% endraw %} has probability {% raw %}<span class="math inline">\(1-\alpha\)</span>{% endraw %}. For {% raw %}<span class="math inline">\(Z\sim\mathcal{N}(0,I_p)\)</span>{% endraw %}, the ball</p>

{% raw %}<div class="math display">\[
C=\{z:z&#x27;z\le\chi^2_{p,1-\alpha}\}
\]</div>{% endraw %}
<p>has probability {% raw %}<span class="math inline">\(1-\alpha\)</span>{% endraw %}. Here {% raw %}<span class="math inline">\(z_u\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\chi^2_{p,u}\)</span>{% endraw %} denote the {% raw %}<span class="math inline">\(u\)</span>{% endraw %} quantiles of the standard normal and chi-squared distributions. Proposition <a href="#pt-gaussian-coverage">1</a> gives conditional coverage at least {% raw %}<span class="math inline">\(1-\alpha\)</span>{% endraw %} in either case. If {% raw %}<span class="math inline">\(Z\)</span>{% endraw %} and {% raw %}<span class="math inline">\(W\)</span>{% endraw %} are independent, the coverage probability equals {% raw %}<span class="math inline">\(1-\alpha\)</span>{% endraw %}.</p>

<h4 data-note-section="2.1" id="pretesting-0-acceptance-regions-for-specification-tests">2.1. Acceptance regions for specification tests</h4>
<p>A quadratic statistic {% raw %}<span class="math inline">\(T(w)=w&#x27;Aw\)</span>{% endraw %}, with {% raw %}<span class="math inline">\(A\)</span>{% endraw %} positive semidefinite, has acceptance region {% raw %}<span class="math inline">\(\{w:w&#x27;Aw\le q\}\)</span>{% endraw %}. Convexity follows from</p>

{% raw %}<div class="math display">\[
\lambda u&#x27;Au+(1-\lambda)v&#x27;Av
-(\lambda u+(1-\lambda)v)&#x27;A(\lambda u+(1-\lambda)v)
=\lambda(1-\lambda)(u-v)&#x27;A(u-v)\ge0
\]</div>{% endraw %}
<p>for {% raw %}<span class="math inline">\(0\le\lambda\le1\)</span>{% endraw %}. The equality {% raw %}<span class="math inline">\(T(-w)=T(w)\)</span>{% endraw %} gives symmetry.</p>

<p>Separate two-sided tests of coordinates produce the box {% raw %}<span class="math inline">\(\{w:|w_k|\le a_k,\ k=1,\ldots,q\}\)</span>{% endraw %}. More generally, a test of a linear contrast has an acceptance region {% raw %}<span class="math inline">\(|r&#x27;w|\le a\)</span>{% endraw %}, which is a strip between two parallel hyperplanes.</p>

<p>Suppose each statistic is a finite-valued convex function {% raw %}<span class="math inline">\(T_j:\mathbb R^q\to[0,\infty)\)</span>{% endraw %} satisfying {% raw %}<span class="math inline">\(T_j(-w)=T_j(w)\)</span>{% endraw %} and {% raw %}<span class="math inline">\(T_j(0)=0\)</span>{% endraw %}. Passing every test means</p>

{% raw %}<span id="eq:pt-intersection"></span><div class="math display">\[
W\in K,
\qquad
K\triangleq\bigcap_{j=1}^J\{w:T_j(w)\le q_j\}.

\tag{5}\]</div>{% endraw %}
<p>Each sublevel set is convex and symmetric, so their intersection has both properties. This intersection is the object to which Proposition <a href="#pt-gaussian-coverage">1</a> applies. The critical values determine its size and the probability of reporting inference.</p>

<h3 data-note-section="3" id="pretesting-0-scalar">3. One pre-test and one estimation error</h3>
<p>Let {% raw %}<span class="math inline">\(Z,W\)</span>{% endraw %} have standard normal marginals and correlation {% raw %}<span class="math inline">\(\rho\)</span>{% endraw %}, and retain the experiment when {% raw %}<span class="math inline">\(|W|\le a\)</span>{% endraw %}, where {% raw %}<span class="math inline">\(a&gt;0\)</span>{% endraw %}. For {% raw %}<span class="math inline">\(|\rho|&lt;1\)</span>{% endraw %}, write</p>

{% raw %}<span id="eq:pt-scalar-decomposition"></span><div class="math display">\[
Z=\rho W+s\varepsilon,
\qquad s\triangleq\sqrt{1-\rho^2},
\qquad W,\varepsilon\ \text{independent }\mathcal{N}(0,1).

\tag{6}\]</div>{% endraw %}
<p>Let {% raw %}<span class="math inline">\(\phi\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\Phi\)</span>{% endraw %} be the standard normal density and distribution function, and put {% raw %}<span class="math inline">\(D_a=2\Phi(a)-1\)</span>{% endraw %}.</p>

<div id="pt-scalar-moments" class="proposition" data-note-number="2" data-note-kind="Proposition">
<p><strong>Proposition 2</strong>. (Conditional mean and variance.) For {% raw %}<span class="math inline">\(-1\le\rho\le1\)</span>{% endraw %},</p>

{% raw %}<span id="eq:pt-scalar-moments"></span><div class="math display">\[
\mathbb{E}[Z\mid |W|\le a]=0,
\qquad
\operatorname{Var}(Z\mid |W|\le a)
=1-\rho^2\frac{2a\phi(a)}{D_a}.

\tag{7}\]</div>{% endraw %}
</div>
<div class="proof">
<p><em>Proof.</em> The truncated density of {% raw %}<span class="math inline">\(W\)</span>{% endraw %} is symmetric, so its conditional mean is zero. Since {% raw %}<span class="math inline">\(\phi&#x27;(w)=-w\phi(w)\)</span>{% endraw %}, integration by parts gives</p>

{% raw %}<div class="math display">\[
\begin{aligned}
\int_{-a}^a w^2\phi(w)\,dw
&amp;=[-w\phi(w)]_{-a}^a+\int_{-a}^a\phi(w)\,dw\\
&amp;=D_a-2a\phi(a).
\end{aligned}
\]</div>{% endraw %}
<p>Thus {% raw %}<span class="math inline">\(\operatorname{Var}(W\mid |W|\le a)=1-2a\phi(a)/D_a\)</span>{% endraw %}. Independence leaves {% raw %}<span class="math inline">\(\varepsilon\)</span>{% endraw %} standard normal after conditioning on {% raw %}<span class="math inline">\(|W|\le a\)</span>{% endraw %}. Applying the decomposition in <a href="#eq:pt-scalar-decomposition">(6)</a> yields</p>

{% raw %}<div class="math display">\[
\operatorname{Var}(Z\mid |W|\le a)
=\rho^2\left(1-\frac{2a\phi(a)}{D_a}\right)+(1-\rho^2).
\]</div>{% endraw %}
<p>When {% raw %}<span class="math inline">\(|\rho|=1\)</span>{% endraw %}, {% raw %}<span class="math inline">\(Z=\rho W\)</span>{% endraw %} almost surely and the same formulas follow directly. {% raw %}<span class="math inline">\(\square\)</span>{% endraw %}</p>

</div>
<p>The term {% raw %}<span class="math inline">\(\rho W\)</span>{% endraw %} is the component of the estimation error shared with the pre-test. Selection restricts this component, reducing the conditional variance by an amount proportional to {% raw %}<span class="math inline">\(\rho^2\)</span>{% endraw %}. Coverage can also be calculated directly.</p>

<div id="pt-scalar-coverage" class="proposition" data-note-number="3" data-note-kind="Proposition">
<p><strong>Proposition 3</strong>. (Central intervals.) For every {% raw %}<span class="math inline">\(a,c&gt;0\)</span>{% endraw %},</p>

{% raw %}<span id="eq:pt-scalar-coverage"></span><div class="math display">\[
\mathbb P(|Z|\le c\mid |W|\le a)\ge2\Phi(c)-1.

\tag{8}\]</div>{% endraw %}
<p>For {% raw %}<span class="math inline">\(|\rho|&lt;1\)</span>{% endraw %}, this probability equals</p>

{% raw %}<span id="eq:pt-scalar-integral"></span><div class="math display">\[
\frac1{D_a}\int_{-a}^a
\left[
\Phi\left(\frac{c-\rho w}{s}\right)
-\Phi\left(\frac{-c-\rho w}{s}\right)
\right]\phi(w)\,dw.

\tag{9}\]</div>{% endraw %}
</div>
<div class="proof">
<p><em>Proof.</em> Conditional on {% raw %}<span class="math inline">\(W=w\)</span>{% endraw %}, the variable {% raw %}<span class="math inline">\(Z\)</span>{% endraw %} has law {% raw %}<span class="math inline">\(\mathcal{N}(\rho w,s^2)\)</span>{% endraw %}. Its probability of falling in {% raw %}<span class="math inline">\([-c,c]\)</span>{% endraw %} is the expression in square brackets, denoted {% raw %}<span class="math inline">\(g(w)\)</span>{% endraw %}. Integration over the truncated density of {% raw %}<span class="math inline">\(W\)</span>{% endraw %} gives the formula.</p>

<p>The function {% raw %}<span class="math inline">\(g\)</span>{% endraw %} is even. Put {% raw %}<span class="math inline">\(r=|\rho|\)</span>{% endraw %}. For {% raw %}<span class="math inline">\(w\ge0\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
g&#x27;(w)=\frac r{s}\left[
\phi\left(\frac{c+rw}{s}\right)
-\phi\left(\frac{c-rw}{s}\right)
\right]\le0,
\]</div>{% endraw %}
<p>because {% raw %}<span class="math inline">\(|c+rw|\ge|c-rw|\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\phi\)</span>{% endraw %} decreases with the absolute value of its argument. Hence</p>

{% raw %}<div class="math display">\[
\mathbb{E}[g(W)\mid |W|\le a]
\ge\mathbb{E}[g(W)\mid |W|&gt;a].
\]</div>{% endraw %}
<p>The unconditional expectation is a weighted average of these two quantities. Therefore</p>

{% raw %}<div class="math display">\[
\mathbb{E}[g(W)\mid |W|\le a]
\ge\mathbb{E}[g(W)]
=\mathbb P(|Z|\le c).
\]</div>{% endraw %}
<p>If {% raw %}<span class="math inline">\(|\rho|=1\)</span>{% endraw %}, the conditional coverage is</p>

{% raw %}<div class="math display">\[
\frac{2\Phi(\min(a,c))-1}{2\Phi(a)-1}.
\]</div>{% endraw %}
<p>It equals one when {% raw %}<span class="math inline">\(a\le c\)</span>{% endraw %} and is at least {% raw %}<span class="math inline">\(2\Phi(c)-1\)</span>{% endraw %} when {% raw %}<span class="math inline">\(a&gt;c\)</span>{% endraw %}. {% raw %}<span class="math inline">\(\square\)</span>{% endraw %}</p>

</div>
<h3 data-note-section="4" id="pretesting-0-sample-inference">4. Conditional limits and Wald inference</h3>
<p>They obtain their asymptotic coverage result by applying the Gaussian argument to the joint limiting distribution. To transfer it to the sample, the joint and marginal probabilities in <a href="#eq:pt-coverage-ratio">(2)</a> must converge, and the limiting denominator must be positive. Positive critical values supply both properties in the finite-dimensional setting.</p>

<div id="pt-boundary" class="lemma" data-note-number="4" data-note-kind="Lemma">
<p><strong>Lemma 4</strong>. (Acceptance probability and boundary.) Let {% raw %}<span class="math inline">\(W\)</span>{% endraw %} be a centered Gaussian vector, and let {% raw %}<span class="math inline">\(T_1,\ldots,T_J\)</span>{% endraw %} be finite-valued, convex, even functions on {% raw %}<span class="math inline">\(\mathbb R^q\)</span>{% endraw %} with {% raw %}<span class="math inline">\(T_j(0)=0\)</span>{% endraw %}. For {% raw %}<span class="math inline">\(q_j&gt;0\)</span>{% endraw %}, define {% raw %}<span class="math inline">\(K\)</span>{% endraw %} as in <a href="#eq:pt-intersection">(5)</a>. Then</p>

{% raw %}<div class="math display">\[
\mathbb P(W\in K)&gt;0,
\qquad
\mathbb P\left(\max_j(T_j(W)-q_j)=0\right)=0.
\]</div>{% endraw %}
</div>
<div class="proof">
<p><em>Proof.</em> Let {% raw %}<span class="math inline">\(L\)</span>{% endraw %} be the linear support of {% raw %}<span class="math inline">\(W\)</span>{% endraw %}. On {% raw %}<span class="math inline">\(L\)</span>{% endraw %}, a nonconstant Gaussian vector has a strictly positive density with respect to Lebesgue measure of dimension {% raw %}<span class="math inline">\(\dim L\)</span>{% endraw %}. Finite convex functions on a Euclidean space are continuous. Since {% raw %}<span class="math inline">\(T_j(0)=0&lt;q_j\)</span>{% endraw %} for every {% raw %}<span class="math inline">\(j\)</span>{% endraw %}, a neighborhood of zero in {% raw %}<span class="math inline">\(L\)</span>{% endraw %} lies in the strict acceptance region. Its Gaussian probability is positive.</p>

<p>For any {% raw %}<span class="math inline">\(j\)</span>{% endraw %}, a point {% raw %}<span class="math inline">\(w\in L\)</span>{% endraw %} with {% raw %}<span class="math inline">\(T_j(w)=q_j\)</span>{% endraw %} belongs to the boundary in {% raw %}<span class="math inline">\(L\)</span>{% endraw %} of {% raw %}<span class="math inline">\(K_j=\{w\in L:T_j(w)\le q_j\}\)</span>{% endraw %}. Indeed, for {% raw %}<span class="math inline">\(t&gt;1\)</span>{% endraw %}, convexity and {% raw %}<span class="math inline">\(T_j(0)=0\)</span>{% endraw %} imply</p>

{% raw %}<div class="math display">\[
q_j=T_j(w)
\le t^{-1}T_j(tw),
\qquad T_j(tw)\ge tq_j&gt;q_j.
\]</div>{% endraw %}
<p>Points outside {% raw %}<span class="math inline">\(K_j\)</span>{% endraw %} therefore approach {% raw %}<span class="math inline">\(w\)</span>{% endraw %} along its ray from zero. The boundary of a convex set with nonempty interior in {% raw %}<span class="math inline">\(L\)</span>{% endraw %} has Lebesgue measure zero in {% raw %}<span class="math inline">\(L\)</span>{% endraw %}, and hence Gaussian probability zero. The event in the second conclusion is contained in the union of these {% raw %}<span class="math inline">\(J\)</span>{% endraw %} boundaries. If {% raw %}<span class="math inline">\(L=\{0\}\)</span>{% endraw %}, all the statistics equal zero almost surely and the conclusions follow from {% raw %}<span class="math inline">\(q_j&gt;0\)</span>{% endraw %}. {% raw %}<span class="math inline">\(\square\)</span>{% endraw %}</p>

</div>
<div id="pt-joint-limit" class="assumption" data-note-number="5" data-note-kind="Assumption">
<p><strong>Assumption 5</strong>. (Joint approximation.) At the maintained distribution, suppose</p>

{% raw %}<span id="eq:pt-joint-limit"></span><div class="math display">\[
(Z_n,W_n)\Rightarrow(Z,W),
\qquad
\begin{pmatrix}Z\\W\end{pmatrix}
\sim\mathcal{N}\left(0,
\begin{pmatrix}I_p&amp;R\\R&#x27;&amp;\Omega\end{pmatrix}\right).

\tag{10}\]</div>{% endraw %}
<p>The displayed covariance matrix is positive semidefinite. For {% raw %}<span class="math inline">\(j=1,\ldots,J\)</span>{% endraw %}, assume</p>

{% raw %}<div class="math display">\[
T_{j,n}=T_j(W_n)+o_P(1),
\qquad q_{j,n}\xrightarrow{P}q_j&gt;0,
\]</div>{% endraw %}
<p>where the functions {% raw %}<span class="math inline">\(T_j\)</span>{% endraw %} satisfy the conditions of Lemma <a href="#pt-boundary">4</a>. All random quantities are measurable.</p>

</div>
<div id="pt-sample-coverage" class="theorem" data-note-number="6" data-note-kind="Theorem">
<p><strong>Theorem 6</strong>. (Conditional asymptotic coverage.) Under Assumption <a href="#pt-joint-limit">5</a>, for any closed symmetric convex set {% raw %}<span class="math inline">\(C\subseteq\mathbb R^p\)</span>{% endraw %},</p>

{% raw %}<span id="eq:pt-sample-coverage"></span><div class="math display">\[
\lim_{n\to\infty}\mathbb P(Z_n\in C\mid S_n)
=\mathbb P(Z\in C\mid W\in K)
\ge\mathbb P(Z\in C).

\tag{11}\]</div>{% endraw %}
</div>
<div class="proof">
<p><em>Proof.</em> Define</p>

{% raw %}<div class="math display">\[
M_n\triangleq\max_j(T_{j,n}-q_{j,n}),
\qquad M\triangleq\max_j(T_j(W)-q_j).
\]</div>{% endraw %}
<p>Continuity of the {% raw %}<span class="math inline">\(T_j\)</span>{% endraw %}, joint convergence, and Slutsky’s theorem give {% raw %}<span class="math inline">\((Z_n,M_n)\Rightarrow(Z,M)\)</span>{% endraw %}. The boundary of {% raw %}<span class="math inline">\(C\times(-\infty,0]\)</span>{% endraw %} is contained in</p>

{% raw %}<div class="math display">\[
(\partial C\times\mathbb R)\ \cup\ (\mathbb R^p\times\{0\}).
\]</div>{% endraw %}
<p>A convex set’s boundary has Lebesgue measure zero in {% raw %}<span class="math inline">\(\mathbb R^p\)</span>{% endraw %}. Since {% raw %}<span class="math inline">\(Z\sim\mathcal{N}(0,I_p)\)</span>{% endraw %}, {% raw %}<span class="math inline">\(\mathbb P(Z\in\partial C)=0\)</span>{% endraw %}. Lemma <a href="#pt-boundary">4</a> gives {% raw %}<span class="math inline">\(\mathbb P(M=0)=0\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\mathbb P(M\le0)&gt;0\)</span>{% endraw %}. Convergence on continuity sets therefore yields</p>

{% raw %}<div class="math display">\[
\begin{aligned}
\mathbb P(Z_n\in C,S_n)&amp;\longrightarrow\mathbb P(Z\in C,M\le0),\\
\mathbb P(S_n)&amp;\longrightarrow\mathbb P(M\le0)&gt;0.
\end{aligned}
\]</div>{% endraw %}
<p>Taking the ratio proves the equality. Proposition <a href="#pt-gaussian-coverage">1</a> proves the inequality. {% raw %}<span class="math inline">\(\square\)</span>{% endraw %}</p>

</div>
<h4 data-note-section="4.1" id="pretesting-0-estimated-covariance-matrices">4.1. Estimated covariance matrices</h4>
<p>They also allow the covariance matrix to be consistently estimated. Let {% raw %}<span class="math inline">\(a_n\to\infty\)</span>{% endraw %} be a deterministic rate and suppose the joint approximation includes</p>

{% raw %}<span id="eq:pt-covariance"></span><div class="math display">\[
(a_n(\widehat\beta_n-\beta_0),W_n)\Rightarrow(U,W),
\qquad \operatorname{Var}(U)=V&gt;0,
\qquad \widehat V_n\xrightarrow{P}V.

\tag{12}\]</div>{% endraw %}
<p>Assume {% raw %}<span class="math inline">\(\widehat V_n\)</span>{% endraw %} is symmetric and positive definite with probability tending to one. Set</p>

{% raw %}<div class="math display">\[
Z_n=\widehat V_n^{-1/2}a_n(\widehat\beta_n-\beta_0).
\]</div>{% endraw %}
<p>In what follows, quantities involving {% raw %}<span class="math inline">\(\widehat V_n^{-1}\)</span>{% endraw %} or {% raw %}<span class="math inline">\(\widehat V_n^{-1/2}\)</span>{% endraw %} are defined on the event {% raw %}<span class="math inline">\(\{\widehat V_n\not\succ0\}\)</span>{% endraw %}, whose probability tends to zero. This allows Corollary <a href="#pt-wald">7</a> to be stated conditional only on {% raw %}<span class="math inline">\(S_n\)</span>{% endraw %}.</p>

<div id="pt-wald" class="corollary" data-note-number="7" data-note-kind="Corollary">
<p><strong>Corollary 7</strong>. (Wald confidence regions and tests.) Suppose <a href="#eq:pt-covariance">(12)</a> and the specification-test conditions of Assumption <a href="#pt-joint-limit">5</a> hold, with {% raw %}<span class="math inline">\((U,W)\)</span>{% endraw %} jointly centered Gaussian. Then the region</p>

{% raw %}<span id="eq:pt-wald-region"></span><div class="math display">\[
\mathrm{CR}_n\triangleq
\left\{b\in\mathbb R^p:
a_n^2(\widehat\beta_n-b)&#x27;\widehat V_n^{-1}(\widehat\beta_n-b)
\le\chi^2_{p,1-\alpha}\right\}

\tag{13}\]</div>{% endraw %}
<p>has limiting conditional coverage at least {% raw %}<span class="math inline">\(1-\alpha\)</span>{% endraw %}. Under {% raw %}<span class="math inline">\(H_0:\beta_0=b_0\)</span>{% endraw %}, the test that rejects when the displayed quadratic at {% raw %}<span class="math inline">\(b_0\)</span>{% endraw %} exceeds {% raw %}<span class="math inline">\(\chi^2_{p,1-\alpha}\)</span>{% endraw %} has limiting conditional rejection probability at most {% raw %}<span class="math inline">\(\alpha\)</span>{% endraw %}.</p>

</div>
<div class="proof">
<p><em>Proof.</em> The symmetric inverse square root is continuous at {% raw %}<span class="math inline">\(V&gt;0\)</span>{% endraw %}, so Slutsky’s theorem gives a standard normal marginal limit for {% raw %}<span class="math inline">\(Z_n\)</span>{% endraw %} and preserves its joint convergence with {% raw %}<span class="math inline">\(W_n\)</span>{% endraw %}. On the samples where {% raw %}<span class="math inline">\(\widehat V_n\)</span>{% endraw %} is positive definite, the coverage event is</p>

{% raw %}<div class="math display">\[
\{\beta_0\in\mathrm{CR}_n\}
=\{Z_n&#x27;Z_n\le\chi^2_{p,1-\alpha}\}.
\]</div>{% endraw %}
<p>Apply Theorem <a href="#pt-sample-coverage">6</a> to the centered ball {% raw %}<span class="math inline">\(C=\{z:z&#x27;z\le\chi^2_{p,1-\alpha}\}\)</span>{% endraw %}. The exceptional samples have conditional probability bounded by their unconditional probability divided by {% raw %}<span class="math inline">\(\mathbb P(S_n)\)</span>{% endraw %}, which tends to a positive number. Their contribution vanishes. Under the null, rejection is the complement of the coverage event. {% raw %}<span class="math inline">\(\square\)</span>{% endraw %}</p>

</div>
<p>For {% raw %}<span class="math inline">\(a_n=\sqrt n\)</span>{% endraw %}, the normalization is {% raw %}<span class="math inline">\(a_n^2=n\)</span>{% endraw %}. In the scalar case, the interval is</p>

{% raw %}<div class="math display">\[
\widehat\beta_n\ \pm\ z_{1-\alpha/2}\frac{\sqrt{\widehat V_n}}{a_n}.
\]</div>{% endraw %}
<p>A normalization by estimated standard errors can also be imposed directly through a joint limit for the studentized estimates. For local-polynomial RD estimators, this requires a joint Gaussian approximation with smoothing biases negligible after normalization or removed by a justified bias correction. Covariate-continuity and density-continuity estimates can enter {% raw %}<span class="math inline">\(W_n\)</span>{% endraw %} at their respective rates.</p>

<!--
<h3 data-note-section="5" id="pretesting-0-did">5. A three-period DID example</h3>
<p>Consider two groups observed at dates {% raw %}<span class="math inline">\(t=0,1,2\)</span>{% endraw %}. One group first receives treatment at date 2; the control group remains untreated. Before date 2, both groups’ observed outcomes equal their untreated potential outcomes. Let {% raw %}<span class="math inline">\(m_t\)</span>{% endraw %} be the treated-minus-control population mean outcome at date {% raw %}<span class="math inline">\(t\)</span>{% endraw %}. Under parallel trends in untreated outcomes, the pre-treatment contrast is {% raw %}<span class="math inline">\(\theta_0=m_1-m_0=0\)</span>{% endraw %} and the average treatment effect on the treated at date 2 is {% raw %}<span class="math inline">\(\beta_0=m_2-m_1\)</span>{% endraw %}.</p>

<p>For an explicit covariance calculation, suppose the estimated group differences satisfy</p>

{% raw %}<div class="math display">\[
\sqrt n(\widehat m_t-m_t)\Rightarrow\eta_t,
\qquad (\eta_0,\eta_1,\eta_2)\sim\mathcal{N}(0,vI_3),
\qquad v&gt;0.
\]</div>{% endraw %}
<p>This assumption describes independent limiting errors of equal variance across dates. Define</p>

{% raw %}<div class="math display">\[
\widehat\theta=\widehat m_1-\widehat m_0,
\qquad \widehat\beta=\widehat m_2-\widehat m_1.
\]</div>{% endraw %}
<p>The limiting errors are {% raw %}<span class="math inline">\(\eta_1-\eta_0\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\eta_2-\eta_1\)</span>{% endraw %}. Each has variance {% raw %}<span class="math inline">\(2v\)</span>{% endraw %}, and their covariance is</p>

{% raw %}<div class="math display">\[
\operatorname{Cov}(\eta_2-\eta_1,\eta_1-\eta_0)=-v.
\]</div>{% endraw %}
<p>Thus the standardized errors have correlation {% raw %}<span class="math inline">\(\rho=-1/2\)</span>{% endraw %}. The middle date enters the two contrasts with opposite signs. A two-sided pre-trends test selects {% raw %}<span class="math inline">\(|W|\le a\)</span>{% endraw %}, and Proposition <a href="#pt-scalar-coverage">3</a> gives the coverage of the reported treatment-effect interval. At {% raw %}<span class="math inline">\(a=z_{0.975}\)</span>{% endraw %}, the limiting conditional variance of the standardized treatment-effect error is</p>

{% raw %}<div class="math display">\[
1-\frac14\frac{2a\phi(a)}{0.95}\approx0.940.
\]</div>{% endraw %}
<p>With serial correlation, unequal group variances, or additional pre-treatment dates, the covariance calculation changes. Theorem <a href="#pt-sample-coverage">6</a> applies to the resulting joint centered Gaussian limit and to the symmetric convex acceptance region used by the pre-trends tests.</p>

<p>The same construction applies to overidentifying restrictions in GMM. Once the parameter estimate and the estimated moment restrictions have a joint centered Gaussian limit, a positive-semidefinite quadratic form in the restrictions produces a symmetric convex acceptance region. The weighting matrix determines the limiting distribution used to choose the pre-test critical value.</p>

<h3 data-note-section="6" id="pretesting-0-processes">6. Tests of a continuum of restrictions</h3>
<p>A specification test may examine moments {% raw %}<span class="math inline">\(Pf=0\)</span>{% endraw %} for every {% raw %}<span class="math inline">\(f\)</span>{% endraw %} in an infinite class {% raw %}<span class="math inline">\(\mathcal F\)</span>{% endraw %}. For observations {% raw %}<span class="math inline">\(U_1,\ldots,U_n\)</span>{% endraw %}, define</p>

{% raw %}<div class="math display">\[
P_nf\triangleq\frac1n\sum_{i=1}^n f(U_i),
\qquad Pf\triangleq\mathbb{E}[f(U_i)],
\qquad \mathbb G_nf\triangleq\sqrt n(P_nf-Pf).
\]</div>{% endraw %}
<p>The process {% raw %}<span class="math inline">\(\mathbb G_n\)</span>{% endraw %} collects the sampling errors of all these moments. Under the specification null, {% raw %}<span class="math inline">\(\sqrt nP_nf=\mathbb G_nf\)</span>{% endraw %} for {% raw %}<span class="math inline">\(f\in\mathcal F\)</span>{% endraw %}.</p>

<div id="pt-process-assumption" class="assumption" data-note-number="8" data-note-kind="Assumption">
<p><strong>Assumption 8</strong>. (Empirical-process approximation.) Suppose the observations are i.i.d. with law {% raw %}<span class="math inline">\(P\in\mathcal P_0\)</span>{% endraw %}, and</p>

{% raw %}<span id="eq:pt-linearization"></span><div class="math display">\[
\sqrt n(\widehat\beta_n-\beta_0)
=\frac1{\sqrt n}\sum_{i=1}^n\psi(U_i)+o_P(1),
\qquad P\psi=0,
\qquad P\|\psi\|^2&lt;\infty,
\qquad V\triangleq P(\psi\psi&#x27;)&gt;0.

\tag{14}\]</div>{% endraw %}
<p>The class {% raw %}<span class="math inline">\(\mathcal F\)</span>{% endraw %} satisfies {% raw %}<span class="math inline">\(Pf=0\)</span>{% endraw %} for every {% raw %}<span class="math inline">\(f\in\mathcal F\)</span>{% endraw %}. Let</p>

{% raw %}<div class="math display">\[
\mathcal H\triangleq\mathcal F\cup\{\psi_1,\ldots,\psi_p\}.
\]</div>{% endraw %}
<p>Assume {% raw %}<span class="math inline">\(\mathcal H\)</span>{% endraw %} is {% raw %}<span class="math inline">\(P\)</span>{% endraw %}-Donsker: {% raw %}<span class="math inline">\(\mathbb G_n\Rightarrow\mathbb G\)</span>{% endraw %} in {% raw %}<span class="math inline">\(\ell^\infty(\mathcal H)\)</span>{% endraw %}, where {% raw %}<span class="math inline">\(\mathbb G\)</span>{% endraw %} is a tight centered Gaussian process with covariance</p>

{% raw %}<div class="math display">\[
\mathbb{E}[\mathbb Gf\,\mathbb Gg]=P(fg)-Pf\,Pg.
\]</div>{% endraw %}
<p>Work with measurable random elements and a version of {% raw %}<span class="math inline">\(\mathbb G\)</span>{% endraw %} whose paths are uniformly continuous for the canonical semimetric</p>

{% raw %}<span id="eq:pt-semimetric"></span><div class="math display">\[
d(f,g)\triangleq
\left(P[(f-g-P(f-g))^2]\right)^{1/2}.

\tag{15}\]</div>{% endraw %}
<p>Assume {% raw %}<span class="math inline">\((\mathcal H,d)\)</span>{% endraw %} is totally bounded. For each {% raw %}<span class="math inline">\(j=1,\ldots,J\)</span>{% endraw %}, suppose</p>

{% raw %}<div class="math display">\[
T_{j,n}=T_j(\mathbb G_n|_{\mathcal F})+o_P(1),
\qquad q_{j,n}\xrightarrow{P}q_j&gt;0,
\]</div>{% endraw %}
<p>where {% raw %}<span class="math inline">\(T_j:\ell^\infty(\mathcal F)\to[0,\infty)\)</span>{% endraw %} is continuous in the supremum norm, convex, even, and satisfies {% raw %}<span class="math inline">\(T_j(0)=0\)</span>{% endraw %}.</p>

</div>
<p>These assumptions state the empirical-process properties used in the proof. The standard Donsker theory supplies total boundedness and a uniformly continuous version of the Gaussian limit; adjoining finitely many square-integrable influence-function coordinates preserves the Donsker property. See <span class="citation" data-cites="van_der_vaart_weak_2000">Vaart and Wellner (<a href="#ref-van_der_vaart_weak_2000" role="doc-biblioref">2000</a>)</span>, Sections 2.1 and 2.10. The expansion for {% raw %}<span class="math inline">\(T_{j,n}\)</span>{% endraw %} includes any first-order contribution from estimated nuisance parameters.</p>

<h4 data-note-section="6.1" id="pretesting-0-approximating-the-gaussian-paths">6.1. Approximating the Gaussian paths</h4>
<p>For {% raw %}<span class="math inline">\(\delta_m\downarrow0\)</span>{% endraw %}, choose a finite {% raw %}<span class="math inline">\(\delta_m\)</span>{% endraw %}-net {% raw %}<span class="math inline">\(\{f_{m,1},\ldots,f_{m,k_m}\}\)</span>{% endraw %} in {% raw %}<span class="math inline">\((\mathcal F,d)\)</span>{% endraw %}. For every {% raw %}<span class="math inline">\(f\in\mathcal F\)</span>{% endraw %}, choose a net point {% raw %}<span class="math inline">\(\pi_m f\)</span>{% endraw %} with {% raw %}<span class="math inline">\(d(f,\pi_m f)\le\delta_m\)</span>{% endraw %}, using a fixed rule to resolve ties. Define</p>

{% raw %}<div class="math display">\[
\mathbb G_m(f)\triangleq\mathbb G(\pi_m f).
\]</div>{% endraw %}
<p>Uniform continuity of the sample paths gives, almost surely,</p>

{% raw %}<span id="eq:pt-net"></span><div class="math display">\[
\|\mathbb G_m-\mathbb G\|_{\mathcal F}
\le
\sup_{d(f,g)\le\delta_m}|\mathbb Gf-\mathbb Gg|
\longrightarrow0.

\tag{16}\]</div>{% endraw %}
<p>Each {% raw %}<span class="math inline">\(\mathbb G_m\)</span>{% endraw %} is determined by a finite Gaussian vector. The map sending its coordinates to the function {% raw %}<span class="math inline">\(f\mapsto\mathbb G(\pi_m f)\)</span>{% endraw %} is linear and continuous in the supremum norm. Consequently, each {% raw %}<span class="math inline">\(T_j(\mathbb G_m)\)</span>{% endraw %} is a continuous convex even function of that vector. These are the properties required for the finite-dimensional Gaussian inequality.</p>

<h4 data-note-section="6.2" id="pretesting-0-continuity-at-the-critical-value">6.2. Continuity at the critical value</h4>
<p>Define the single functional</p>

{% raw %}<span id="eq:pt-process-functional"></span><div class="math display">\[
T(g)\triangleq\max_{1\le j\le J}\frac{T_j(g)}{q_j}.

\tag{17}\]</div>{% endraw %}
<p>It is continuous, convex, even, and zero at the origin. Passing every limiting test is the event {% raw %}<span class="math inline">\(T(\mathbb G)\le1\)</span>{% endraw %}. The following lemma justifies using this event in a conditional limit.</p>

<div id="pt-process-boundary" class="lemma" data-note-number="9" data-note-kind="Lemma">
<p><strong>Lemma 9</strong>. (Positive levels of a convex Gaussian functional.) Under the Gaussian-process and continuity conditions in Assumption <a href="#pt-process-assumption">8</a>, let {% raw %}<span class="math inline">\(T\)</span>{% endraw %} be as above. Then, for every {% raw %}<span class="math inline">\(t&gt;0\)</span>{% endraw %},</p>

{% raw %}<span id="eq:pt-process-boundary"></span><div class="math display">\[
\mathbb P(T(\mathbb G)\le t)&gt;0,
\qquad \mathbb P(T(\mathbb G)=t)=0.

\tag{18}\]</div>{% endraw %}
</div>
<div class="proof">
<p><em>Proof.</em> Every ball about zero has positive Gaussian probability, as follows. Tightness supplies a compact subset of {% raw %}<span class="math inline">\(\ell^\infty(\mathcal F)\)</span>{% endraw %} with positive probability. For any {% raw %}<span class="math inline">\(r&gt;0\)</span>{% endraw %}, cover that compact set by finitely many open balls of radius {% raw %}<span class="math inline">\(r/\sqrt2\)</span>{% endraw %}. At least one such ball, say {% raw %}<span class="math inline">\(B(x,r/\sqrt2)\)</span>{% endraw %}, has positive probability. For independent copies {% raw %}<span class="math inline">\(\mathbb G,\mathbb G&#x27;\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
\mathbb P\left(\left\|\frac{\mathbb G-\mathbb G&#x27;}{\sqrt2}\right\|_{\mathcal F}&lt;r\right)
\ge\mathbb P(\mathbb G\in B(x,r/\sqrt2))^2&gt;0.
\]</div>{% endraw %}
<p>The centered Gaussian random elements {% raw %}<span class="math inline">\((\mathbb G-\mathbb G&#x27;)/\sqrt2\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\mathbb G\)</span>{% endraw %} have the same law. Hence {% raw %}<span class="math inline">\(\mathbb P(\|\mathbb G\|_{\mathcal F}&lt;r)&gt;0\)</span>{% endraw %}. Continuity at zero and {% raw %}<span class="math inline">\(T(0)=0\)</span>{% endraw %} imply that {% raw %}<span class="math inline">\(H(t)\triangleq\mathbb P(T(\mathbb G)\le t)&gt;0\)</span>{% endraw %} for every {% raw %}<span class="math inline">\(t&gt;0\)</span>{% endraw %}.</p>

<p>To prove continuity, use the finite approximations above and set {% raw %}<span class="math inline">\(H_m(t)=\mathbb P(T(\mathbb G_m)\le t)\)</span>{% endraw %}. Factor the finite Gaussian vector through a standard normal vector {% raw %}<span class="math inline">\(X_m\)</span>{% endraw %}. Then {% raw %}<span class="math inline">\(T(\mathbb G_m)=h_m(X_m)\)</span>{% endraw %} for a continuous convex function {% raw %}<span class="math inline">\(h_m\)</span>{% endraw %}. The function</p>

{% raw %}<div class="math display">\[
(x,t)\longmapsto\mathbf1\{h_m(x)\le t\}\phi_{k}(x)
\]</div>{% endraw %}
<p>is log-concave: its positive set is the convex epigraph of {% raw %}<span class="math inline">\(h_m\)</span>{% endraw %}, and the normal density {% raw %}<span class="math inline">\(\phi_k\)</span>{% endraw %} is log-concave. Integration over {% raw %}<span class="math inline">\(x\)</span>{% endraw %} preserves log-concavity by Theorem 6 of <span class="citation" data-cites="prekopa_logconcave_1973">Prékopa (<a href="#ref-prekopa_logconcave_1973" role="doc-biblioref">1973</a>)</span>. Thus</p>

{% raw %}<div class="math display">\[
H_m(\lambda s+(1-\lambda)t)
\ge H_m(s)^\lambda H_m(t)^{1-\lambda},
\qquad 0&lt;\lambda&lt;1.
\]</div>{% endraw %}
<p>By <a href="#eq:pt-net">(16)</a> and continuity of {% raw %}<span class="math inline">\(T\)</span>{% endraw %}, {% raw %}<span class="math inline">\(T(\mathbb G_m)\to T(\mathbb G)\)</span>{% endraw %} almost surely. Therefore {% raw %}<span class="math inline">\(H_m(u)\to H(u)\)</span>{% endraw %} at every continuity point of {% raw %}<span class="math inline">\(H\)</span>{% endraw %}. For fixed {% raw %}<span class="math inline">\(s,t\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\lambda\)</span>{% endraw %}, choose {% raw %}<span class="math inline">\(\varepsilon_l\downarrow0\)</span>{% endraw %} so that {% raw %}<span class="math inline">\(s+\varepsilon_l\)</span>{% endraw %}, {% raw %}<span class="math inline">\(t+\varepsilon_l\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(\lambda s+(1-\lambda)t+\varepsilon_l\)</span>{% endraw %} are continuity points. This is possible because a distribution function has at most countably many discontinuities. Pass to the limit in {% raw %}<span class="math inline">\(m\)</span>{% endraw %} at these three points, then let {% raw %}<span class="math inline">\(l\to\infty\)</span>{% endraw %}. Right continuity gives</p>

{% raw %}<div class="math display">\[
H(\lambda s+(1-\lambda)t)
\ge H(s)^\lambda H(t)^{1-\lambda}.
\]</div>{% endraw %}
<p>Thus {% raw %}<span class="math inline">\(\log H\)</span>{% endraw %} is a finite concave function on {% raw %}<span class="math inline">\((0,\infty)\)</span>{% endraw %}, and every such function is continuous on that open interval. It follows that {% raw %}<span class="math inline">\(H\)</span>{% endraw %} is continuous there. {% raw %}<span class="math inline">\(\square\)</span>{% endraw %}</p>

</div>
<h4 data-note-section="6.3" id="pretesting-0-conditional-coverage-for-process-tests">6.3. Conditional coverage for process tests</h4>
<div id="pt-process-coverage" class="theorem" data-note-number="10" data-note-kind="Theorem">
<p><strong>Theorem 10</strong>. (Conditional inference with empirical-process tests.) Under Assumption <a href="#pt-process-assumption">8</a>, let {% raw %}<span class="math inline">\(Z=\mathbb G\psi\sim\mathcal{N}(0,V)\)</span>{% endraw %}. For every closed symmetric convex set {% raw %}<span class="math inline">\(C\subseteq\mathbb R^p\)</span>{% endraw %},</p>

{% raw %}<span id="eq:pt-process-coverage"></span><div class="math display">\[
\begin{aligned}
&amp;\lim_{n\to\infty}
\mathbb P\left(\sqrt n(\widehat\beta_n-\beta_0)\in C\mid S_n\right)\\
&amp;\qquad=
\mathbb P(Z\in C\mid T(\mathbb G)\le1)
\ge\mathbb P(Z\in C).
\end{aligned}

\tag{19}\]</div>{% endraw %}
</div>
<div class="proof">
<p><em>Proof.</em> For each {% raw %}<span class="math inline">\(m\)</span>{% endraw %}, the joint vector</p>

{% raw %}<div class="math display">\[
(\mathbb G\psi,\mathbb Gf_{m,1},\ldots,\mathbb Gf_{m,k_m})
\]</div>{% endraw %}
<p>is centered Gaussian. The event {% raw %}<span class="math inline">\(T(\mathbb G_m)\le1\)</span>{% endraw %} is a symmetric convex event in its last {% raw %}<span class="math inline">\(k_m\)</span>{% endraw %} coordinates. Proposition <a href="#pt-gaussian-coverage">1</a>, in its joint-probability form, gives</p>

{% raw %}<div class="math display">\[
\mathbb P(Z\in C,\ T(\mathbb G_m)\le1)
\ge\mathbb P(Z\in C)\mathbb P(T(\mathbb G_m)\le1).
\]</div>{% endraw %}
<p>The convergence {% raw %}<span class="math inline">\(T(\mathbb G_m)\to T(\mathbb G)\)</span>{% endraw %} holds almost surely, and Lemma <a href="#pt-process-boundary">9</a> gives {% raw %}<span class="math inline">\(\mathbb P(T(\mathbb G)=1)=0\)</span>{% endraw %}. The acceptance indicators therefore converge almost surely. Bounded convergence yields</p>

{% raw %}<div class="math display">\[
\mathbb P(Z\in C,\ T(\mathbb G)\le1)
\ge\mathbb P(Z\in C)\mathbb P(T(\mathbb G)\le1).
\]</div>{% endraw %}
<p>The last probability is positive by Lemma <a href="#pt-process-boundary">9</a>, so division proves the Gaussian-process inequality.</p>

<p>For the sample limit, write {% raw %}<span class="math inline">\(Z_n=\sqrt n(\widehat\beta_n-\beta_0)\)</span>{% endraw %} and</p>

{% raw %}<div class="math display">\[
M_n=\max_j\frac{T_{j,n}-q_{j,n}}{q_j}.
\]</div>{% endraw %}
<p>The denominators here are the positive limiting critical values. Assumption <a href="#pt-process-assumption">8</a>, the continuous mapping theorem, and Slutsky’s theorem imply</p>

{% raw %}<div class="math display">\[
(Z_n,M_n)\Rightarrow(Z,T(\mathbb G)-1).
\]</div>{% endraw %}
<p>Also, {% raw %}<span class="math inline">\(S_n=\{M_n\le0\}\)</span>{% endraw %}. The law of {% raw %}<span class="math inline">\(Z\)</span>{% endraw %} is nonsingular, so {% raw %}<span class="math inline">\(\mathbb P(Z\in\partial C)=0\)</span>{% endraw %}, and Lemma <a href="#pt-process-boundary">9</a> gives zero boundary probability for the acceptance event. The numerator and denominator in the conditional probability therefore converge to their Gaussian-process counterparts. Taking their ratio proves the equality. {% raw %}<span class="math inline">\(\square\)</span>{% endraw %}</p>

</div>
<p>If {% raw %}<span class="math inline">\(\widehat V_n\xrightarrow{P}V\)</span>{% endraw %}, augment the joint limit with {% raw %}<span class="math inline">\(\widehat V_n\)</span>{% endraw %} and apply the same argument to {% raw %}<span class="math inline">\(\widehat V_n^{-1/2}Z_n\)</span>{% endraw %}. This gives the Wald region in Corollary <a href="#pt-wald">7</a>, with {% raw %}<span class="math inline">\(a_n=\sqrt n\)</span>{% endraw %}, for the empirical-process specification tests as well.</p>

<h4 data-note-section="6.4" id="pretesting-0-kolmogorovsmirnov-and-cram-rvon-mises-statistics">6.4. Kolmogorov–Smirnov and Cramér–von Mises statistics</h4>
<p>For a bounded nonnegative deterministic weight {% raw %}<span class="math inline">\(w\)</span>{% endraw %}, a weighted Kolmogorov–Smirnov functional is</p>

{% raw %}<div class="math display">\[
T_{\mathrm{KS}}(g)\triangleq\sup_{f\in\mathcal F}w(f)|g(f)|.
\]</div>{% endraw %}
<p>The triangle inequality proves convexity, and the absolute value gives evenness. Its continuity follows from</p>

{% raw %}<div class="math display">\[
|T_{\mathrm{KS}}(g)-T_{\mathrm{KS}}(h)|
\le\|w\|_\infty\|g-h\|_{\mathcal F}.
\]</div>{% endraw %}
<p>If {% raw %}<span class="math inline">\(w_n\)</span>{% endraw %} is estimated and {% raw %}<span class="math inline">\(\|w_n-w\|_\infty=o_P(1)\)</span>{% endraw %}, replacing {% raw %}<span class="math inline">\(w_n\)</span>{% endraw %} by {% raw %}<span class="math inline">\(w\)</span>{% endraw %} changes the statistic by at most {% raw %}<span class="math inline">\(\|w_n-w\|_\infty\|\mathbb G_n\|_{\mathcal F}=o_P(1)\)</span>{% endraw %}, since weak convergence makes the process norm {% raw %}<span class="math inline">\(O_P(1)\)</span>{% endraw %}.</p>

<p>For an index set {% raw %}<span class="math inline">\(\mathcal X\)</span>{% endraw %}, write {% raw %}<span class="math inline">\(g(x)\)</span>{% endraw %} for the process evaluated at its corresponding index, and let {% raw %}<span class="math inline">\(\nu\)</span>{% endraw %} be a finite positive measure. Assume the paths are {% raw %}<span class="math inline">\(\nu\)</span>{% endraw %}-measurable. A Cramér–von Mises functional is</p>

{% raw %}<div class="math display">\[
T_{\mathrm{CvM}}(g)\triangleq\int_{\mathcal X}g(x)^2\,d\nu(x).
\]</div>{% endraw %}
<p>Convexity of the square and positivity of {% raw %}<span class="math inline">\(\nu\)</span>{% endraw %} give convexity of the integral. It is even and vanishes at zero. Factoring the difference of squares gives</p>

{% raw %}<div class="math display">\[
\begin{aligned}
|T_{\mathrm{CvM}}(g)-T_{\mathrm{CvM}}(h)|
&amp;\le\int|g(x)-h(x)|\,|g(x)+h(x)|\,d\nu(x)\\
&amp;\le\nu(\mathcal X)\|g-h\|_\infty
       (\|g\|_\infty+\|h\|_\infty).
\end{aligned}
\]</div>{% endraw %}
<p>The upper integral extends this functional to all bounded paths. Monotonicity and subadditivity of the upper integral give the same convexity and continuity bounds; on measurable paths it equals the displayed integral. Both functionals therefore satisfy the geometric and continuity requirements of Theorem <a href="#pt-process-coverage">10</a>.</p>

<h3 data-note-section="7" id="pretesting-0-local-violations">7. Local specification violations</h3>
<p>The centering assumption enters when the two events are placed around the mean of the Gaussian law. A local violation of a tested restriction shifts the pre-test estimate by an amount comparable to its standard error.</p>

<p>For a scalar example, suppose under a sequence of data distributions that</p>

{% raw %}<div class="math display">\[
\left(\frac{\widehat\beta_n-\beta_{0,n}}{\widehat s_{\beta,n}},
      \frac{\widehat\theta_n}{\widehat s_{\theta,n}}\right)
\Rightarrow(b+Z,\delta+W),
\]</div>{% endraw %}
<p>where {% raw %}<span class="math inline">\(Z,W\)</span>{% endraw %} are centered standard normals with correlation {% raw %}<span class="math inline">\(\rho\)</span>{% endraw %}. The constants {% raw %}<span class="math inline">\(b\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\delta\)</span>{% endraw %} are limiting biases measured in standard errors. A two-sided specification test retains the sample when {% raw %}<span class="math inline">\(|\delta+W|\le a\)</span>{% endraw %}. In the coordinates of the centered Gaussian vector, this event is</p>

{% raw %}<span id="eq:pt-shifted-selection"></span><div class="math display">\[
-a-\delta\le W\le a-\delta.

\tag{20}\]</div>{% endraw %}
<p>For {% raw %}<span class="math inline">\(\delta\ne0\)</span>{% endraw %}, the interval is centered at {% raw %}<span class="math inline">\(-\delta\)</span>{% endraw %}. Its effect on the estimation error can be computed from {% raw %}<span class="math inline">\(\mathbb{E}[Z\mid W]=\rho W\)</span>{% endraw %}.</p>

<div id="pt-local-bias" class="proposition" data-note-number="11" data-note-kind="Proposition">
<p><strong>Proposition 11</strong>. (Conditional mean in the shifted Gaussian experiment.) Put {% raw %}<span class="math inline">\(D_{a,\delta}=\Phi(a-\delta)-\Phi(-a-\delta)&gt;0\)</span>{% endraw %}. Then</p>

{% raw %}<span id="eq:pt-local-bias"></span><div class="math display">\[
\mathbb{E}[b+Z\mid |\delta+W|\le a]
=b+\rho\frac{\phi(a+\delta)-\phi(a-\delta)}{D_{a,\delta}}.

\tag{21}\]</div>{% endraw %}
</div>
<div class="proof">
<p><em>Proof.</em> For {% raw %}<span class="math inline">\(l=-a-\delta\)</span>{% endraw %} and {% raw %}<span class="math inline">\(u=a-\delta\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
\int_l^u w\phi(w)\,dw=\phi(l)-\phi(u).
\]</div>{% endraw %}
<p>Divide by {% raw %}<span class="math inline">\(\Phi(u)-\Phi(l)\)</span>{% endraw %}, use {% raw %}<span class="math inline">\(\phi(l)=\phi(a+\delta)\)</span>{% endraw %}, and apply {% raw %}<span class="math inline">\(\mathbb{E}[Z\mid W]=\rho W\)</span>{% endraw %}. {% raw %}<span class="math inline">\(\square\)</span>{% endraw %}</p>

</div>
<p>For {% raw %}<span class="math inline">\(\delta&gt;0\)</span>{% endraw %}, {% raw %}<span class="math inline">\(\phi(a+\delta)&lt;\phi(a-\delta)\)</span>{% endraw %}, so selection shifts the conditional mean of {% raw %}<span class="math inline">\(Z\)</span>{% endraw %} in the direction opposite to {% raw %}<span class="math inline">\(\rho\)</span>{% endraw %}. The formula describes the mean of the limiting Gaussian experiment. With uniformly integrable standardized estimation errors, the conditional sample means converge to this value.</p>

<p>Coverage can fall sharply in this experiment. Take {% raw %}<span class="math inline">\(b=0\)</span>{% endraw %}, {% raw %}<span class="math inline">\(Z=W\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(\delta&gt;a+c\)</span>{% endraw %}. On the reporting event,</p>

{% raw %}<div class="math display">\[
Z=W\le a-\delta&lt;-c,
\]</div>{% endraw %}
<p>so</p>

{% raw %}<div class="math display">\[
\mathbb P(|Z|\le c\mid |\delta+W|\le a)=0.
\]</div>{% endraw %}
<p>The reporting probability is {% raw %}<span class="math inline">\(D_{a,\delta}&gt;0\)</span>{% endraw %}, while unconditional coverage is {% raw %}<span class="math inline">\(2\Phi(c)-1\)</span>{% endraw %}. For correlations approaching one, the representation {% raw %}<span class="math inline">\(Z_\rho=\rho W+\sqrt{1-\rho^2}\,\varepsilon\)</span>{% endraw %} and bounded convergence show that conditional coverage approaches zero as well. Thus the same undercoverage occurs with a nonsingular joint covariance matrix. The shift in <a href="#eq:pt-shifted-selection">(20)</a> is of fixed size in the limiting experiment, as arises from a restriction violated at order {% raw %}<span class="math inline">\(n^{-1/2}\)</span>{% endraw %} when its standard error is of order {% raw %}<span class="math inline">\(n^{-1/2}\)</span>{% endraw %}.</p>

-->
<div id="refs" class="references csl-bib-body hanging-indent" data-entry-spacing="0" role="list">
<div id="ref-dechaisemartin_pretests_2024" class="csl-entry" role="listitem">
Chaisemartin, Clément de, and Xavier D’Haultfœuille. 2024. <span>“Under the Null of Valid Specification, Pre-Tests of Valid Specification Do Not Distort Inference.”</span> arXiv. <a href="https://arxiv.org/abs/2407.03725v1">https://arxiv.org/abs/2407.03725v1</a>.
</div>
<div id="ref-prekopa_logconcave_1973" class="csl-entry" role="listitem">
Prékopa, András. 1973. <span>“On Logarithmic Concave Measures and Functions.”</span> <em>Acta Scientiarum Mathematicarum</em> 34: 335–43. <a href="https://rutcor.rutgers.edu/Prekopa/pdf/SCIENT2.pdf">https://rutcor.rutgers.edu/Prekopa/pdf/SCIENT2.pdf</a>.
</div>
<div id="ref-royen_gaussian_2014" class="csl-entry" role="listitem">
Royen, Thomas. 2014. <span>“A Simple Proof of the Gaussian Correlation Conjecture Extended to Multivariate Gamma Distributions.”</span> <em>Far East Journal of Theoretical Statistics</em> 48: 139–45. <a href="https://arxiv.org/abs/1408.1028v2">https://arxiv.org/abs/1408.1028v2</a>.
</div>
<div id="ref-van_der_vaart_weak_2000" class="csl-entry" role="listitem">
Vaart, Aad W. van der, and Jon A. Wellner. 2000. <em>Weak Convergence and Empirical Processes: With Applications to Statistics</em>. Corr. 2. printing. Springer Series in Statistics. New York Berlin Heidelberg: Springer.
</div>
</div>

<nav class="note-series" aria-label="Notes in this series"><p></p></nav>

</div>
