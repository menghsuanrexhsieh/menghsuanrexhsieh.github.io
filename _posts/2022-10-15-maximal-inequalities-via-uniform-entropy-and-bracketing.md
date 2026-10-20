---
layout: "post"
title: "Maximal Inequalities via Uniform Entropy and Bracketing"
date: "2022-10-15"
tags: ["statistics", "empirical processes"]
excerpt: "Conditional chaining bounds empirical-process suprema; population bracketing adds a scale-dependent truncation argument."
note_series: "Empirical processes"
note_source: "assets/notes/Overleaf Projects (32 items)/Empirical Process/stats.tex"
---

<div class="note-content" markdown="0">

<p>Symmetrization turns an empirical process into a random-sign process. Conditional on the observations, that process has subgaussian increments in the empirical quadratic norm, so chaining applies. There are two ways to make the resulting bound usable: control covering numbers uniformly over empirical measures, or use brackets measured under the population law. The latter route requires additional control of the pointwise approximation errors.</p>

<p>Let {% raw %}<span class="math inline">\(X_1,\ldots,X_n\)</span>{% endraw %} be i.i.d. with law {% raw %}<span class="math inline">\(P\)</span>{% endraw %}. For a function {% raw %}<span class="math inline">\(f\)</span>{% endraw %}, write {% raw %}<span class="math inline">\(Pf=\mathbb{E} f(X_1)\)</span>{% endraw %}, {% raw %}<span class="math inline">\(P_nf=n^{-1}\sum_{i=1}^n f(X_i)\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(\mathbb G_nf=\sqrt n(P_n-P)f\)</span>{% endraw %}. Rademacher variables are independent random signs, independent of the observations. See the <a href="{% post_url 2022-09-03-empirical-processes-tensorization-and-the-entropy-method %}">empirical-process setup</a> for measurability conventions.</p>

<div id="maximal-inequalities-via-uniform-entropy-and-bracketing" data-note-section="title">

</div>
<p>We apply the preceding maximal inequalities to the empirical process </p>

{% raw %}<div class="math display">\[\begin{aligned}
    \mathbb G_n (f) = \sqrt{n} (\widehat P_n - \mathbf P\,\,\!\!)(f) ~~\text{for } f \in \mathcal F ~,
\end{aligned}\]</div>{% endraw %}
<p>where {% raw %}<span class="math inline">\(\mathcal F\)</span>{% endraw %} is some function class. For real-valued functions in {% raw %}<span class="math inline">\(\mathcal F\)</span>{% endraw %} defined on {% raw %}<span class="math inline">\(\mathscr X\)</span>{% endraw %}, define the {% raw %}<span class="math inline">\(L^2(\widehat P_n)\)</span>{% endraw %}-seminorm by </p>

{% raw %}<div class="math display">\[\begin{aligned}
    \lVert f \rVert_{\widehat P_n, 2}^2 = \frac1n \sum_{1 \leq k \leq n} f(X_k)^2 ~.
\end{aligned}\]</div>{% endraw %}
<p> To investigate if a function class is large or small, it makes sense to want to link the idea of the entropy integral to the function class somehow. For example, suppose {% raw %}<span class="math inline">\(\mathcal F\)</span>{% endraw %} is a (measurable) uniformly bounded class of functions; we should be able to control the behaviour of {% raw %}<span class="math inline">\(\lVert \mathbb G_n \rVert_{\mathcal F}\)</span>{% endraw %} via its uniform bound (i.e. by the envelope of {% raw %}<span class="math inline">\(\mathcal F\)</span>{% endraw %}) times some potentially large “constants”. An envelope controls the size of each function but does not limit how many different functions can fit the sample. We therefore also need a restriction on the size of the class. We should at least expect the metric entropy (and therefore the covering number) to be finite. The conditional metric depends on the sample. Taking a supremum over discrete probability measures removes that dependence from the entropy bound. It’s referred to as the <em>uniform entropy condition</em>.</p>

<p>Suppose a function class {% raw %}<span class="math inline">\(\mathcal F\)</span>{% endraw %} has a measurable envelope function {% raw %}<span class="math inline">\(F\)</span>{% endraw %}. Add the constant function {% raw %}<span class="math inline">\(f \equiv 0\)</span>{% endraw %} to {% raw %}<span class="math inline">\(\mathcal F\)</span>{% endraw %}. Define the <em>uniform entropy integral</em> as </p>

{% raw %}<div class="math display">\[\begin{aligned}
    J (\delta, \mathcal F, F) \triangleq \int_0^\delta \sup_{R} \sqrt{1+\log N(\varepsilon \lVert F \rVert_{R,2}, \mathcal F \cup \{0\}, \lVert \cdot \rVert_{R,2})} \dif \varepsilon
\end{aligned}\]</div>{% endraw %}
<p> for any {% raw %}<span class="math inline">\(\delta &gt; 0\)</span>{% endraw %}. Here, the supremum is taken over all discrete probability measures {% raw %}<span class="math inline">\(R\)</span>{% endraw %} on {% raw %}<span class="math inline">\(\mathscr X\)</span>{% endraw %} (with finitely many nonzero values), with {% raw %}<span class="math inline">\(\lVert F \rVert_{R,2} = (\int F^2 \dif R)^{1/2} &gt; 0\)</span>{% endraw %}. The <em>uniform entropy condition</em> is (checking whether) {% raw %}<span class="math inline">\(J(1, \mathcal F, F) &lt; \infty\)</span>{% endraw %}. For this condition to have the possibility of holding true, {% raw %}<span class="math inline">\(\mathcal F\)</span>{% endraw %} must have finite covering number for all {% raw %}<span class="math inline">\(\varepsilon &gt; 0\)</span>{% endraw %}. That is not quite enough, since the integral can still diverge at zero. Therefore, we need to look at the behaviour as {% raw %}<span class="math inline">\(\varepsilon \to 0\)</span>{% endraw %} in the definition of the integral. We first show how this condition bounds the expected supremum; examples of classes satisfying it come later.</p>

<p>Assume throughout that the classes are pointwise measurable and their displayed envelopes have finite second moments, unless a different moment condition is stated. Equivalently, one may use outer expectations and the usual empirical-process measurability conventions. Define {% raw %}<span class="math inline">\(m_n=0\)</span>{% endraw %} if {% raw %}<span class="math inline">\(P_nF^2=0\)</span>{% endraw %}; all sample function values then vanish.</p>

<div id="thm:maximal-inequality-uniform-entropy" class="theorem" data-note-number="1" data-note-kind="Theorem">
<p><strong>Theorem 1</strong>.  Suppose {% raw %}<span class="math inline">\(\mathcal F\)</span>{% endraw %} is a function class with a measurable envelope function {% raw %}<span class="math inline">\(F\)</span>{% endraw %}. Then, for {% raw %}<span class="math inline">\(m_n \triangleq \sup_{f \in \mathcal F} \frac{\lVert f \rVert_{\widehat P_n, 2}}{\lVert F \rVert_{\widehat P_n, 2}}\)</span>{% endraw %}, </p>

{% raw %}<div class="math display">\[\begin{aligned}
        \mathbb{E} \lVert \mathbb G_n \rVert_{\mathcal F} \lesssim \mathbb{E} [ J(m_n, \mathcal F, F) \lVert F \rVert_{\widehat P_n, 2}] \lesssim J(1, \mathcal F, F) \lVert F \rVert_{\mathbf P\,\,\!\!, 2} ~.
    
\end{aligned}\]</div>{% endraw %}
</div>
<div id="result-2" class="remark" data-note-number="2" data-note-kind="Remark">
<p><strong>Remark 2</strong>.  Since {% raw %}<span class="math inline">\(m_n \leq 1\)</span>{% endraw %}, the second inequality makes sense. Two random quantities remain after conditioning on the data. First, {% raw %}<span class="math inline">\(m_n\)</span>{% endraw %} is random, as it is expressed in terms of the {% raw %}<span class="math inline">\(L^2(\widehat P_n)\)</span>{% endraw %} seminorm. Second, {% raw %}<span class="math inline">\(\lVert F \rVert_{\widehat P_n, 2}\)</span>{% endraw %} is random, so it is unclear how to bound it above <em>a priori</em> by {% raw %}<span class="math inline">\(\lVert F \rVert_{\mathbf P\,\,\!\!, 2}\)</span>{% endraw %}.</p>

</div>
<div class="proof"><p><em>Proof of Theorem 1.</em> Put {% raw %}<span class="math inline">\(Z_n(f)=n^{-1/2}\sum_i\varepsilon_i f(X_i)\)</span>{% endraw %}. The ghost-sample symmetrization inequality gives</p>
<span id="eq:symm"></span>{% raw %}<div class="math display">\[\mathbb{E}\|\mathbb G_n\|_{\mathcal F}\le2\mathbb{E}\|Z_n\|_{\mathcal F}.\tag{1}\]</div>{% endraw %}
<p>Conditional on the data, the Rademacher mgf bound gives, with {% raw %}<span class="math inline">\(d_n(f,g)=\|f-g\|_{P_n,2}\)</span>{% endraw %},</p>
<span id="eq:subg"></span>{% raw %}<div class="math display">\[P_\varepsilon(|Z_n(f)-Z_n(g)|&gt;t\mid X_1,\ldots,X_n)\le2e^{-t^2/(2d_n(f,g)^2)}.\tag{2}\]</div>{% endraw %}
<p>If {% raw %}<span class="math inline">\(d_n(f,g)=0\)</span>{% endraw %}, the increment is identically zero. Adjoin the zero function and let {% raw %}<span class="math inline">\(s_n=\sup_f\|f\|_{P_n,2}\)</span>{% endraw %}. The conditional diameter is at most {% raw %}<span class="math inline">\(2s_n\)</span>{% endraw %}. Conditional Dudley chaining therefore gives</p>
<span id="eq:dudley"></span>{% raw %}<div class="math display">\[\mathbb{E}_\varepsilon\|Z_n\|_{\mathcal F}\lesssim\int_0^{2s_n}\sqrt{\log N(u,\mathcal F\cup\{0\},d_n)}du
\le2\int_0^{s_n}\sqrt{1+\log N(u,\mathcal F\cup\{0\},d_n)}du.\tag{3}\]</div>{% endraw %}
<p>The last inequality uses the nonincreasing integrand. Rescale {% raw %}<span class="math inline">\(u=v\|F\|_{P_n,2}\)</span>{% endraw %} and use {% raw %}<span class="math inline">\(R=P_n\)</span>{% endraw %} in the uniform supremum. The result is bounded by {% raw %}<span class="math inline">\(2\|F\|_{P_n,2}J(m_n,\mathcal F,F)\)</span>{% endraw %}. Taking expectations proves the first assertion. Finally {% raw %}<span class="math inline">\(m_n\le1\)</span>{% endraw %} and Jensen give {% raw %}<span class="math inline">\(\mathbb{E}\sqrt{P_nF^2}\le\sqrt{PF^2}\)</span>{% endraw %}, proving the second. ◻</p></div>

<div id="rem:g-c-uniform-entropy" class="remark" data-note-number="3" data-note-kind="Remark"><p><strong>Remark 3</strong> (Revisiting <a href="{% post_url 2022-09-20-symmetrization-bracketing-and-covering-numbers %}#rem:g-c-concentration">Remark 6</a> of the symmetrization note). Suppose {% raw %}<span class="math inline">\(|f|\le M\)</span>{% endraw %}, and for all finitely supported probability measures {% raw %}<span class="math inline">\(R\)</span>{% endraw %} and {% raw %}<span class="math inline">\(0&lt;\varepsilon\le1\)</span>{% endraw %},</p>
{% raw %}<div class="math display">\[N(\varepsilon M,\mathcal F\cup\{0\},L^2(R))\le(A/\varepsilon)^v,\qquad A\ge e,\quad v\ge1.\]</div>{% endraw %}
<p>Then {% raw %}<span class="math inline">\(J(1)\lesssim\sqrt{v\log A}\)</span>{% endraw %}, because {% raw %}<span class="math inline">\(\int_0^1\sqrt{\log(1/u)}du&lt;\infty\)</span>{% endraw %}. Theorem 1 gives</p>
{% raw %}<div class="math display">\[\mathbb{E}\sup_f|(P_n-P)f|\lesssim M\sqrt{\frac{v\log A}{n}}.\]</div>{% endraw %}
<p>The entropy assumption must hold for empirical measures as well as for the population measure. A bound only in {% raw %}<span class="math inline">\(L^2(P)\)</span>{% endraw %} would not justify the conditional chaining step.</p></div>

<p>The following result uses information about {% raw %}<span class="math inline">\(\lVert F \rVert_{\mathbf P\,\,\!\!, 2}\)</span>{% endraw %}.</p>

<div id="thm:maximal-inequality-uniform-entropy-integral-uniform-boundedness" class="theorem" data-note-number="4" data-note-kind="Theorem">
<p><strong>Theorem 4</strong>.  Suppose {% raw %}<span class="math inline">\(0 &lt; \lVert F \rVert_{\mathbf P\,\,\!\!, 2} &lt; \infty\)</span>{% endraw %}, and let {% raw %}<span class="math inline">\(\sigma^2 &gt; 0\)</span>{% endraw %} be any positive constant such that {% raw %}<span class="math inline">\(\sup_{f \in \mathcal F} P f^2 \leq \sigma^2 \leq \lVert F \rVert_{\mathbf P\,\,\!\!, 2}^2\)</span>{% endraw %}. Set {% raw %}<span class="math inline">\(\delta = \frac{\sigma}{\lVert F \rVert_{\mathbf P\,\,\!\!, 2}}\)</span>{% endraw %} and {% raw %}<span class="math inline">\(M = \sqrt{\mathbb{E} \sup_{1 \leq k \leq n} F(X_k)^2}\)</span>{% endraw %}. Then, </p>

{% raw %}<div class="math display">\[\begin{aligned}
        \mathbb{E} \lVert \mathbb G_n \rVert_{\mathcal F} \lesssim J(\delta, \mathcal F, F) \lVert F \rVert_{\mathbf P\,\,\!\!, 2} + \frac{M J(\delta, \mathcal F, F)^2}{\delta^2 \sqrt{n}} ~.
    
\end{aligned}\]</div>{% endraw %}
</div>
<div class="proof">
<p><em>Proof.</em> Write {% raw %}<span class="math inline">\(A=\|F\|_{P,2}\)</span>{% endraw %}, {% raw %}<span class="math inline">\(B=(P_nF^2)^{1/2}\)</span>{% endraw %}, {% raw %}<span class="math inline">\(S=\sup_f(P_nf^2)^{1/2}\)</span>{% endraw %}, {% raw %}<span class="math inline">\(M_n=\max_iF(X_i)\)</span>{% endraw %}, and</p>
{% raw %}<div class="math display">\[R_X=\mathbb E_\varepsilon\sup_f\left|n^{-1/2}\sum_i\varepsilon_i f(X_i)\right|,\qquad Q=(\mathbb ES^2)^{1/2}.\]</div>{% endraw %}
<p>Conditional chaining, as in Theorem 1, gives {% raw %}<span class="math inline">\(R_X\leq C B J(S/B)\)</span>{% endraw %}, with zero assigned when {% raw %}<span class="math inline">\(B=0\)</span>{% endraw %}. Assume {% raw %}<span class="math inline">\(J(\delta)&lt;\infty\)</span>{% endraw %}; otherwise the claimed bound is automatic. The function {% raw %}<span class="math inline">\(J\)</span>{% endraw %} is increasing and concave, with {% raw %}<span class="math inline">\(J(0)=0\)</span>{% endraw %}, because its integrand is nonnegative and decreasing. Moreover {% raw %}<span class="math inline">\(\phi(x)=J(\sqrt x)^2\)</span>{% endraw %} is concave: at almost every positive {% raw %}<span class="math inline">\(x=r^2\)</span>{% endraw %}, its derivative is {% raw %}<span class="math inline">\((J(r)/r)J'(r)\)</span>{% endraw %}, a product of two nonnegative decreasing functions. Jensen under the probability measure with density {% raw %}<span class="math inline">\(B^2/A^2\)</span>{% endraw %} therefore yields</p>
{% raw %}<div class="math display">\[\mathbb E[B^2J(S/B)^2]\leq A^2J(Q/A)^2.\]</div>{% endraw %}
<p>This also follows by approximation at any nondifferentiable points. Consequently {% raw %}<span class="math inline">\((\mathbb ER_X^2)^{1/2}\leq C A J(Q/A)\)</span>{% endraw %}.</p>
<p>We use the elementary Rademacher contraction inequality {% raw %}<span class="math inline">\(\mathbb E_\varepsilon\sup_t|\sum_i\varepsilon_i\varphi_i(t_i)|\leq2L\mathbb E_\varepsilon\sup_t|\sum_i\varepsilon_i t_i|\)</span>{% endraw %}, where each {% raw %}<span class="math inline">\(\varphi_i(0)=0\)</span>{% endraw %} is {% raw %}<span class="math inline">\(L\)</span>{% endraw %}-Lipschitz on the relevant range. Here is a proof: for a finite index set, conditioning on all but one sign replaces its expected supremum by</p>
{% raw %}<div class="math display">\[\frac12\sup_{s,t}\{A_s+A_t+\varphi(s)-\varphi(t)\}\leq\frac12\sup_{s,t}\{A_s+A_t+L|s-t|\}=\frac12\bigl[\sup_s(A_s+Ls)+\sup_t(A_t-Lt)\bigr].\]</div>{% endraw %}
<p>The last equality uses symmetry in the pair {% raw %}<span class="math inline">\((s,t)\)</span>{% endraw %}. Iterating contracts the expected supremum without absolute values. Adjoin zero, bound the absolute supremum by the sum of the positive and negative suprema, and use symmetry of the signs to obtain the factor two. Increasing finite subsets gives the countable version.</p>
<p>Conditionally, squaring is {% raw %}<span class="math inline">\(2M_n\)</span>{% endraw %}-Lipschitz on {% raw %}<span class="math inline">\([-M_n,M_n]\)</span>{% endraw %}, so contraction and symmetrization of the squared class give</p>
{% raw %}<div class="math display">\[Q^2=\mathbb E\sup_fP_nf^2\leq\sigma^2+\frac1{\sqrt n}\mathbb E\sup_f|\mathbb G_nf^2|\leq\sigma^2+\frac8{\sqrt n}\mathbb E[M_nR_X]\leq\sigma^2+\frac{CMA}{\sqrt n}J(Q/A).\]</div>{% endraw %}
<p>All quantities are finite because {% raw %}<span class="math inline">\(S\leq B\)</span>{% endraw %}, {% raw %}<span class="math inline">\(PF^2&lt;\infty\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(\mathbb EM_n^2=M^2\leq nPF^2\)</span>{% endraw %}. Put {% raw %}<span class="math inline">\(z=Q/A\)</span>{% endraw %}, {% raw %}<span class="math inline">\(b=CM/(A\sqrt n)\)</span>{% endraw %}. Then {% raw %}<span class="math inline">\(z^2\leq\delta^2+bJ(z)\)</span>{% endraw %}. If {% raw %}<span class="math inline">\(z\leq\delta\)</span>{% endraw %}, monotonicity suffices. If {% raw %}<span class="math inline">\(z&gt;\delta\)</span>{% endraw %}, concavity gives {% raw %}<span class="math inline">\(J(z)\leq zJ(\delta)/\delta\)</span>{% endraw %}; divide the resulting inequality by {% raw %}<span class="math inline">\(z\)</span>{% endraw %} to obtain {% raw %}<span class="math inline">\(z\leq\delta+bJ(\delta)/\delta\)</span>{% endraw %}. Thus in either case</p>
{% raw %}<div class="math display">\[J(z)\leq J(\delta)\left(1+\frac{bJ(\delta)}{\delta^2}\right).\]</div>{% endraw %}
<p>Finally {% raw %}<span class="math inline">\(\mathbb E\|\mathbb G_n\|_{\mathcal F}\leq2\mathbb ER_X\leq C A J(z)\)</span>{% endraw %}, by symmetrization and the square-moment bound. Substitution gives exactly the two asserted terms. For pointwise measurable classes use their countable determining subclasses; the integrable envelope permits the required dominated limits. ◻</p>
</div>
<p>There are maximal inequalities that use bracketing numbers. However, the difficulty here is reversed from earlier: it is easier to use bracketing to prove the Glivenko-Cantelli theorem but much harder to use covering arguments. Here, bracketing results are much more difficult to prove. One difficulty is that bracketing provides pointwise control: a bracket {% raw %}<span class="math inline">\([l,u]\)</span>{% endraw %} requires {% raw %}<span class="math inline">\(l \leq u\)</span>{% endraw %} pointwise (for all {% raw %}<span class="math inline">\(x \in \mathscr X\)</span>{% endraw %}). In giving up pointwise control, the maximal inequalities using metric entropy were derived by considering <em>all</em> measures {% raw %}<span class="math inline">\(R\)</span>{% endraw %}, and taking the supremum over all such {% raw %}<span class="math inline">\(R\)</span>{% endraw %} supported on realizations of {% raw %}<span class="math inline">\(f(X_1), \dots, f(X_n)\)</span>{% endraw %}.</p>

<p>For bracketing, write {% raw %}<span class="math inline">\(\operatorname{Log}x=\max(1,\log x)\)</span>{% endraw %}. This convention keeps a nonzero bound even for a singleton class. Adding zero to the class is harmless and will be understood in each bracketing integral.</p>

<p>Because we have pointwise control, we can look at the <em>bracketing integral</em>, defined as </p>

{% raw %}<div class="math display">\[\begin{aligned}
    J_{[\:]} (\delta, \mathcal F, \lVert \cdot \rVert_{\mathbf P\,\,\!\!, 2}) = \int_0^\delta \sqrt{\operatorname{Log} N_{[\:]} (\varepsilon, \mathcal F \cup \{0\}, \lVert \cdot \rVert_{\mathbf P\,\,\!\!, 2})} \dif \varepsilon ~.
\end{aligned}\]</div>{% endraw %}
<p> The following result, while it looks innocuous, is difficult to prove directly.</p>

<div id="thm:maximal-inequality-bracketing-integral" class="theorem" data-note-number="5" data-note-kind="Theorem">
<p><strong>Theorem 5</strong>.  Suppose {% raw %}<span class="math inline">\(\mathcal F\)</span>{% endraw %} is a function class with a measurable envelope function {% raw %}<span class="math inline">\(F\)</span>{% endraw %}. Then, </p>

{% raw %}<div class="math display">\[\begin{aligned}
        \mathbb{E} \lVert \mathbb G_n \rVert_{\mathcal F} \lesssim J_{[\:]}(\lVert F \rVert_{\mathbf P\,\,\!\!, 2}, \mathcal F, \lVert \cdot \rVert_{\mathbf P\,\,\!\!, 2}) ~.
    
\end{aligned}\]</div>{% endraw %}
</div>
<p>However, we note that Theorem <a href="#thm:maximal-inequality-bracketing-integral" data-reference-type="ref" data-reference="thm:maximal-inequality-bracketing-integral">5</a> is a straightforward consequence of the following result, which is elementary in its statement but difficult to show.</p>

<div id="thm:maximal-inequality-bracketing-integral-prelim-behaviour" class="theorem" data-note-number="6" data-note-kind="Theorem"><p><strong>Theorem 6.</strong> Suppose {% raw %}<span class="math inline">\(Pf^2&lt;\delta^2\)</span>{% endraw %} for every {% raw %}<span class="math inline">\(f\in\mathcal F\)</span>{% endraw %}, with envelope {% raw %}<span class="math inline">\(F\)</span>{% endraw %}. Put</p>
{% raw %}<div class="math display">\[H(u)=\operatorname{Log}N_{[\:]}(u,\mathcal F\cup\{0\},L^2(P)),\quad J_{[\:]}(\delta)=\int_0^\delta\sqrt{H(u)}du,\quad a(\delta)=\frac{\delta}{\sqrt{H(\delta)}}.\]</div>{% endraw %}
<p>Then, with a universal implicit constant,</p>
{% raw %}<div class="math display">\[\mathbb{E}\|\mathbb G_n\|_{\mathcal F}\lesssim J_{[\:]}(\delta)+\sqrt n\,P[F\mathbf1\{F&gt;\sqrt n\,a(\delta)\}].\]</div>{% endraw %}
</div>
<p>The following proof expands the stopped-chain argument in van der Vaart, <a href="https://doi.org/10.1017/CBO9780511802256.020"><em>Asymptotic Statistics</em>, Lemma 19.34, pp. 286–288</a>. The finite-class estimate used below is Lemma 7. Refining bracket partitions changes their cardinalities, and the residual terms require their own empirical-process bound.</p>
<span id="eq:def-a-delta-corrected"></span><span id="eq:tail-bound-corrected"></span><span id="eq:reduce-to-truncated-class"></span><span id="eq:Delta-monotone"></span><span id="eq:L2-width"></span><span id="eq:def-aq-corrected"></span><span id="eq:chain-identity-corrected"></span><span id="eq:bound-main-sum-start"></span><span id="eq:bound-remainder-sum-start"></span><span id="eq:remainder-to-P"></span><span id="eq:remainder-bound-per-q"></span><span id="eq:remainder-sum-bound"></span><span id="eq:increment-infty"></span><span id="eq:increment-L2"></span><span id="eq:increment-bound-raw"></span><span id="eq:increment-bound-per-q"></span><span id="eq:increment-sum-bound"></span><span id="eq:base-term-bound"></span><span id="eq:dyadic-bound"></span><span id="eq:sum-to-integral"></span><span id="eq:truncated-class-final"></span><span id="eq:prelim-applied"></span><span id="eq:delta2-over-a"></span><span id="eq:J-lower"></span>
<div class="proof">
<p><em>Proof of Theorem 6.</em> We may assume {% raw %}<span class="math inline">\(J_{[\:]}(\delta)&lt;\infty\)</span>{% endraw %}. Put {% raw %}<span class="math inline">\(\tau=\sqrt n\,a(\delta)\)</span>{% endraw %}. The tail part satisfies</p>
{% raw %}<div class="math display">\[\mathbb E\sup_f|\mathbb G_n(f\mathbf1_{F&gt;\tau})|\leq2\sqrt n\,P[F\mathbf1_{F&gt;\tau}].\]</div>{% endraw %}
<p>For the remaining proof replace each function and its bracket endpoints by their products with {% raw %}<span class="math inline">\(\mathbf1_{F\leq\tau}\)</span>{% endraw %}. This does not increase bracket widths, so we may suppose {% raw %}<span class="math inline">\(|f|\leq F\leq\tau\)</span>{% endraw %}.</p>
<p><strong>Nested partitions and thresholds.</strong> Set {% raw %}<span class="math inline">\(r_q=4\delta\,2^{-q}\)</span>{% endraw %}, {% raw %}<span class="math inline">\(q\geq0\)</span>{% endraw %}, and let {% raw %}<span class="math inline">\(N_q\)</span>{% endraw %} be the original bracketing number at radius {% raw %}<span class="math inline">\(r_q\)</span>{% endraw %}. Turn each finite cover into a disjoint partition of the class, then refine all partitions through level {% raw %}<span class="math inline">\(q\)</span>{% endraw %}. There are at most {% raw %}<span class="math inline">\(K_q=\prod_{j=0}^qN_j\)</span>{% endraw %} cells. Within each nonempty refined cell, intersect its ancestral brackets, clipping endpoints to {% raw %}<span class="math inline">\([-F,F]\)</span>{% endraw %}. Its width {% raw %}<span class="math inline">\(\Delta_qf\)</span>{% endraw %}, constant over that cell as a function of the index {% raw %}<span class="math inline">\(f\)</span>{% endraw %}, obeys</p>
{% raw %}<div class="math display">\[0\leq\Delta_qf\leq\Delta_{q-1}f\leq2F,\qquad P(\Delta_qf)^2\leq r_q^2.\]</div>{% endraw %}
<p>Choose a representative {% raw %}<span class="math inline">\(\pi_qf\)</span>{% endraw %} from each cell. Then {% raw %}<span class="math inline">\(|f-\pi_qf|\leq\Delta_qf\)</span>{% endraw %}, {% raw %}<span class="math inline">\(|\pi_qf|\leq F\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(P(\pi_qf)^2&lt;\delta^2\)</span>{% endraw %}. Put {% raw %}<span class="math inline">\(L_q=1+\sum_{j=0}^q\log N_j\)</span>{% endraw %} and {% raw %}<span class="math inline">\(a_q=r_q/\sqrt{L_{q+1}}\)</span>{% endraw %}. Since {% raw %}<span class="math inline">\(N_0,N_1\leq N_{[\:]}(\delta)\)</span>{% endraw %}, {% raw %}<span class="math inline">\(L_1\leq3H(\delta)\)</span>{% endraw %}, so {% raw %}<span class="math inline">\(a_0\geq4\delta/\sqrt{3H(\delta)}&gt;2a(\delta)\)</span>{% endraw %}. In particular {% raw %}<span class="math inline">\(\Delta_0f\leq2F\leq\sqrt n a_0\)</span>{% endraw %}.</p>
<p>Let {% raw %}<span class="math inline">\(A_qf\)</span>{% endraw %} indicate that all width bounds {% raw %}<span class="math inline">\(\Delta_jf\leq\sqrt n a_j\)</span>{% endraw %}, {% raw %}<span class="math inline">\(0\leq j\leq q\)</span>{% endraw %}, hold at the point under consideration. Let {% raw %}<span class="math inline">\(B_qf=A_{q-1}f\,\mathbf1_{\Delta_qf&gt;\sqrt n a_q}\)</span>{% endraw %}, {% raw %}<span class="math inline">\(q\geq1\)</span>{% endraw %}, indicate the first failure. Thus {% raw %}<span class="math inline">\(A_0f=1\)</span>{% endraw %}. For every finite {% raw %}<span class="math inline">\(K\)</span>{% endraw %}, direct telescoping up to the first failure gives the exact identity</p>
{% raw %}<div class="math display">\[f-\pi_0f=\sum_{q=1}^K(\pi_qf-\pi_{q-1}f)A_{q-1}f+\sum_{q=1}^K(f-\pi_qf)B_qf+(f-\pi_Kf)A_Kf.\]</div>{% endraw %}
<p>The last term has absolute value at most {% raw %}<span class="math inline">\(\sqrt n a_K\)</span>{% endraw %}, so its empirical-process supremum is at most {% raw %}<span class="math inline">\(2n a_K\to0\)</span>{% endraw %} for fixed {% raw %}<span class="math inline">\(n\)</span>{% endraw %}. This justifies the infinite decomposition uniformly over the class without interchanging an expectation and a supremum.</p>
<p><strong>Retained increments.</strong> The function {% raw %}<span class="math inline">\(h_qf=(\pi_qf-\pi_{q-1}f)A_{q-1}f\)</span>{% endraw %} takes at most {% raw %}<span class="math inline">\(K_q\)</span>{% endraw %} distinct values, has {% raw %}<span class="math inline">\(|h_qf|\leq\sqrt n a_{q-1}\)</span>{% endraw %}, and has {% raw %}<span class="math inline">\(L^2(P)\)</span>{% endraw %}-norm at most {% raw %}<span class="math inline">\(r_{q-1}=2r_q\)</span>{% endraw %}. Lemma 7 therefore gives</p>
{% raw %}<div class="math display">\[\mathbb E\sup_f|\mathbb G_nh_qf|\leq C\{r_q\sqrt{L_q}+a_{q-1}L_q\}\leq C' r_q\sqrt{L_q},\]</div>{% endraw %}
<p>because {% raw %}<span class="math inline">\(a_{q-1}=2r_q/\sqrt{L_q}\)</span>{% endraw %}.</p>
<p><strong>Stopped residuals.</strong> Majorize {% raw %}<span class="math inline">\(|(f-\pi_qf)B_qf|\)</span>{% endraw %} by {% raw %}<span class="math inline">\(g_qf=\Delta_qf B_qf\)</span>{% endraw %}. This majorant has at most {% raw %}<span class="math inline">\(K_q\)</span>{% endraw %} values, {% raw %}<span class="math inline">\(L^2(P)\)</span>{% endraw %}-norm at most {% raw %}<span class="math inline">\(r_q\)</span>{% endraw %}, and sup-norm at most {% raw %}<span class="math inline">\(\sqrt n a_{q-1}\)</span>{% endraw %}, since widths decrease and the preceding level has not failed. Also</p>
{% raw %}<div class="math display">\[Pg_qf\leq\frac{P(\Delta_qf)^2}{\sqrt n a_q}\leq\frac{r_q^2}{\sqrt n a_q}.\]</div>{% endraw %}
<p>For any {% raw %}<span class="math inline">\(|h|\leq g\)</span>{% endraw %}, {% raw %}<span class="math inline">\(|\mathbb G_nh|\leq\sqrt n(P_n+P)g=\mathbb G_ng+2\sqrt n Pg\)</span>{% endraw %}. Consequently Lemma 7 applied to the <em>finite class of majorants</em> gives</p>
{% raw %}<div class="math display">\[\mathbb E\sup_f|\mathbb G_n((f-\pi_qf)B_qf)|\leq C\{r_q\sqrt{L_q}+a_{q-1}L_q+r_q^2/a_q\}\leq C' r_q\sqrt{L_{q+1}}.\]</div>{% endraw %}
<p>This bound retains the empirical fluctuation of the majorants; replacing it by the supremum of their population means would be invalid.</p>
<p><strong>Base term and summation.</strong> The class of {% raw %}<span class="math inline">\(\pi_0f\)</span>{% endraw %} has at most {% raw %}<span class="math inline">\(N_0\)</span>{% endraw %} elements, second moments below {% raw %}<span class="math inline">\(\delta^2\)</span>{% endraw %}, and absolute bound {% raw %}<span class="math inline">\(\tau\)</span>{% endraw %}. Lemma 7 bounds its expected supremum by {% raw %}<span class="math inline">\(C\{\delta\sqrt{H(\delta)}+a(\delta)H(\delta)\}\leq C'J_{[\:]}(\delta)\)</span>{% endraw %}. For the other terms,</p>
{% raw %}<div class="math display">\[\sqrt{L_{q+1}}\leq\sum_{j=0}^{q+1}\sqrt{H(r_j)},\qquad\sum_{q\geq1}r_q\sqrt{L_{q+1}}\leq C\sum_{j\geq0}r_j\sqrt{H(r_j)}.\]</div>{% endraw %}
<p>The second inequality follows by interchanging nonnegative sums and summing the geometric sequence {% raw %}<span class="math inline">\(\sum_{q\geq\max(1,j-1)}r_q\leq4r_j\)</span>{% endraw %}. The coarse terms {% raw %}<span class="math inline">\(j=0,1\)</span>{% endraw %} are bounded by {% raw %}<span class="math inline">\(6\delta\sqrt{H(\delta)}\leq6J_{[\:]}(\delta)\)</span>{% endraw %}. For {% raw %}<span class="math inline">\(j\geq2\)</span>{% endraw %}, monotonicity gives</p>
{% raw %}<div class="math display">\[r_j\sqrt{H(r_j)}\leq2\int_{r_j/2}^{r_j}\sqrt{H(u)}\,du.\]</div>{% endraw %}
<p>These intervals partition {% raw %}<span class="math inline">\((0,\delta]\)</span>{% endraw %}. Summing proves the desired bound for the truncated process, and adding its envelope tail proves Theorem 6. For a pointwise measurable class, a countable determining subclass gives the displayed ordinary expectations. The bracketing proof also holds for arbitrary classes of measurable functions with outer expectations: every retained-increment class and stopped-residual majorant class is finite, and the final residual has the deterministic uniform bound just proved. Taking outer expectations in those pointwise bounds requires no measurability of the original supremum. ◻</p>
</div>
<div id="lem:finite-class-bernstein" class="lemma" data-note-number="7" data-note-kind="Lemma"><p><strong>Lemma 7.</strong> For a nonempty finite class {% raw %}<span class="math inline">\(\mathcal H\)</span>{% endraw %} with {% raw %}<span class="math inline">\(Ph^2\le\sigma^2\)</span>{% endraw %} and {% raw %}<span class="math inline">\(|h|\le b\)</span>{% endraw %},</p>
{% raw %}<div class="math display">\[\mathbb{E}\sup_{h\in\mathcal H}|\mathbb G_nh|\lesssim\sigma\sqrt{\log(2|\mathcal H|)}+\frac{b\log(2|\mathcal H|)}{\sqrt n}.\]</div>{% endraw %}
</div>
<div class="proof"><p><em>Proof.</em> Centering gives {% raw %}<span class="math inline">\(|h-Ph|\le2b\)</span>{% endraw %} and variance at most {% raw %}<span class="math inline">\(\sigma^2\)</span>{% endraw %}. Bernstein's mgf bound, followed by log-sum-exp over both signs, yields for {% raw %}<span class="math inline">\(0&lt;t&lt;3\sqrt n/(2b)\)</span>{% endraw %},</p>
{% raw %}<div class="math display">\[\mathbb{E}\max_h|\mathbb G_nh|\le\frac{\log(2|\mathcal H|)}t+\frac{t\sigma^2}{2(1-2bt/(3\sqrt n))}.\]</div>{% endraw %}
<p>Take {% raw %}<span class="math inline">\(t\)</span>{% endraw %} of order {% raw %}<span class="math inline">\(\min\{\sqrt{\log(2|\mathcal H|)}/\sigma,\sqrt n/b\}\)</span>{% endraw %}, bounded away from the pole. If {% raw %}<span class="math inline">\(\sigma=0\)</span>{% endraw %}, all centered functions vanish almost surely. This proves the assertion, including singleton classes. The same proof applies to independent Rademacher sums, whose summands already have mean zero. ◻</p></div>
<div class="proof"><p><em>Proof of Theorem 5.</em> Put {% raw %}<span class="math inline">\(A=\|F\|_{P,2}\)</span>{% endraw %}. If {% raw %}<span class="math inline">\(A=0\)</span>{% endraw %}, pointwise measurability makes the empirical supremum zero almost surely. Otherwise apply Theorem 6 at {% raw %}<span class="math inline">\(\delta=3A\)</span>{% endraw %}. The one bracket {% raw %}<span class="math inline">\([-F,F]\)</span>{% endraw %} covers the class at this radius, so {% raw %}<span class="math inline">\(H(3A)=1\)</span>{% endraw %} and {% raw %}<span class="math inline">\(a(3A)=3A\)</span>{% endraw %}. Moreover,</p>
{% raw %}<div class="math display">\[\sqrt n\,P[F\mathbf1\{F&gt;3\sqrt n A\}]\le\frac{PF^2}{3A}=\frac A3.\]</div>{% endraw %}
<p>Since the entropy integrand is nonincreasing and at least one, {% raw %}<span class="math inline">\(J_{[\:]}(3A)\le3J_{[\:]}(A)\)</span>{% endraw %} and {% raw %}<span class="math inline">\(A\le J_{[\:]}(A)\)</span>{% endraw %}. Theorem 6 now gives the claimed global bound. ◻</p></div>

<h4 data-note-section="1" id="extensions">1. Extensions</h4>
<p>The next two maximal inequalities use the same bracketing integral under different moment assumptions. Their exact statements are Lemmas 19.36–19.37 of van der Vaart’s <a href="https://doi.org/10.1017/CBO9780511802256.020">Chapter 19, pp. 288–289</a>. Proofs are referenced there to Lemmas 3.4.2–3.4.3 and Chapter 2.14 of <span class="citation" data-cites="van_der_vaart_weak_2000">(<a href="#ref-van_der_vaart_weak_2000" role="doc-biblioref">Vaart and Wellner 2000</a>)</span> deals with these results.</p>

<div id="thm:maximal-inequality-bracketing-integral-uniformly-bounded-class" class="theorem" data-note-number="8" data-note-kind="Theorem">
<p><strong>Theorem 8</strong>.  Let {% raw %}<span class="math inline">\(\mathcal F\)</span>{% endraw %} be a function class of measurable functions {% raw %}<span class="math inline">\(f : \mathscr X \to \mathbb R\)</span>{% endraw %} such that {% raw %}<span class="math inline">\(\mathbf P\,\,\!\!f^2 &lt; \delta^2\)</span>{% endraw %} for all {% raw %}<span class="math inline">\(f \in \mathcal F\)</span>{% endraw %}. Let {% raw %}<span class="math inline">\(F\)</span>{% endraw %} be the envelope of {% raw %}<span class="math inline">\(\mathcal F\)</span>{% endraw %}. Suppose {% raw %}<span class="math inline">\(\lVert f \rVert_\infty \leq M\)</span>{% endraw %} for every {% raw %}<span class="math inline">\(f \in \mathcal F\)</span>{% endraw %}. Then, </p>

{% raw %}<div class="math display">\[\begin{aligned}
        \mathbb{E} \lVert \mathbb G_n \rVert_{\mathcal F} \lesssim J_{[\:]}(\delta, \mathcal F, \lVert \cdot \rVert_{\mathbf P\,\,\!\!, 2}) \left( 1 + M \frac{J_{[\:]}(\delta, \mathcal F, \lVert \cdot \rVert_{\mathbf P\,\,\!\!, 2})}{\delta^2 \sqrt{n}} \right) ~.
    
\end{aligned}\]</div>{% endraw %}
</div>
<div class="proof">
<p><em>Application of Lemma 19.36.</em> Apply van der Vaart's Lemma 19.36 (p. 288) to {% raw %}<span class="math inline">\(\mathcal F\cup\{0\}\)</span>{% endraw %}. Its variance radius is this {% raw %}<span class="math inline">\(\delta\)</span>{% endraw %}, its uniform bound is {% raw %}<span class="math inline">\(M\)</span>{% endraw %}, and its bracketing integral uses the same population {% raw %}<span class="math inline">\(L^2(P)\)</span>{% endraw %} widths and {% raw %}<span class="math inline">\(\operatorname{Log}\)</span>{% endraw %} convention. Taking the supremum over the original class only decreases the left side. A full stopped-bracketing derivation for this bounded case is given in the following note on local bracketing bounds.</p>
</div>
<div id="thm:maximal-inequality-bracketing-integral-bernstein-bounded-class" class="theorem" data-note-number="9" data-note-kind="Theorem">
<p><strong>Theorem 9</strong>.  Let {% raw %}<span class="math inline">\(\mathcal F\)</span>{% endraw %} be a function class of measurable functions {% raw %}<span class="math inline">\(f : \mathscr X \to \mathbb R\)</span>{% endraw %}. Let {% raw %}<span class="math inline">\(F\)</span>{% endraw %} be the envelope of {% raw %}<span class="math inline">\(\mathcal F\)</span>{% endraw %}. Define the <em>Bernstein size</em> (often called the Bernstein norm, although it is not homogeneous) </p>

{% raw %}<div class="math display">\[\begin{aligned}
        \lVert f \rVert_{P,B}^2 \triangleq 2 \mathbf P\,\,\!\!(e^{|f|} - 1 - |f|)
    
\end{aligned}\]</div>{% endraw %}
<p> for any measurable function {% raw %}<span class="math inline">\(f\)</span>{% endraw %}. Suppose {% raw %}<span class="math inline">\(\lVert f \rVert_{P,B} &lt; \delta\)</span>{% endraw %} for every {% raw %}<span class="math inline">\(f \in \mathcal F\)</span>{% endraw %}. Then, </p>

{% raw %}<div class="math display">\[\begin{aligned}
        \mathbb{E} \lVert \mathbb G_n \rVert_{\mathcal F} \lesssim J_{[\:]}(\delta, \mathcal F, \lVert \cdot \rVert_{\mathbf P\,\,\!\!, B}) \left( 1 + \frac{J_{[\:]}(\delta, \mathcal F, \lVert \cdot \rVert_{\mathbf P\,\,\!\!, B})}{\delta^2 \sqrt{n}} \right) ~.
    
\end{aligned}\]</div>{% endraw %}
</div>
<div class="proof">
<p><em>Application of Lemma 19.37.</em> This is Lemma 19.37 (p. 289) of the same chapter, applied to {% raw %}<span class="math inline">\(\mathcal F\cup\{0\}\)</span>{% endraw %}. Bracket width is measured by the displayed Bernstein size, with no assertion of homogeneity. Since {% raw %}<span class="math inline">\(e^u-1-u\geq u^2/2\)</span>{% endraw %} for {% raw %}<span class="math inline">\(u\geq0\)</span>{% endraw %}, a finite Bernstein size also ensures the individual {% raw %}<span class="math inline">\(L^2(P)\)</span>{% endraw %} integrability needed to center the process. The lemma's radius and entropy integral then agree with the displayed quantities. We use this strengthened bracketing inequality without proof; the squared-exponential moment condition is not replaced by an ordinary variance assumption.</p>
</div>
<div id="lem:symmetrization" class="lemma" data-note-number="10" data-note-kind="Lemma">
<p><strong>Lemma 10</strong> (Symmetrization).  Let {% raw %}<span class="math inline">\(\mathcal F\)</span>{% endraw %} be a (countable, or otherwise measurable) class of measurable {% raw %}<span class="math inline">\(f:\mathscr X\to\mathbb R\)</span>{% endraw %}. Let {% raw %}<span class="math inline">\(\varepsilon_1,\dots,\varepsilon_n\)</span>{% endraw %} be i.i.d. Rademacher signs, independent of {% raw %}<span class="math inline">\(X_1,\dots,X_n\)</span>{% endraw %}. Then </p>

{% raw %}<div class="math display">\[\mathbb{E}\Big[\big\|\mathbb G_n\big\|_{\mathcal F}\Big]
 \le  2\,\mathbb{E}\Big[\sup_{f\in\mathcal F}\Big|\frac1{\sqrt n}\sum_{i=1}^n
\varepsilon_i f(X_i)\Big|\Big].\]</div>{% endraw %}
</div>
<div class="proof">
<p><em>Proof.</em> Write {% raw %}<span class="math inline">\(Z_f \equiv \sqrt n(\widehat P_n - P)f = n^{-1/2}\sum_{i=1}^n (f(X_i)-\mathbf P\,\,\!\!f)\)</span>{% endraw %}. Let {% raw %}<span class="math inline">\(X_1&#x27;,\dots,X_n&#x27;\)</span>{% endraw %} be an i.i.d. auxiliary sample, independent of everything, with the same law {% raw %}<span class="math inline">\(\mathbf P\,\,\!\!\)</span>{% endraw %}. Then for each fixed {% raw %}<span class="math inline">\(f\)</span>{% endraw %}, </p>

{% raw %}<div class="math display">\[\mathbb{E}[Z_f] = 0,\qquad
Z_f = \frac1{\sqrt n}\sum_{i=1}^n\left(f(X_i)-\mathbb{E}[f(X_i&#x27;)]\right)
= \mathbb{E}&#x27;\Big[\frac1{\sqrt n}\sum_{i=1}^n\big(f(X_i)-f(X_i&#x27;)\big)\Big],\]</div>{% endraw %}
<p> where {% raw %}<span class="math inline">\(\mathbb{E}&#x27;\)</span>{% endraw %} is expectation over the auxiliary sample. By Jensen (outer expectation form if needed), </p>

{% raw %}<div class="math display">\[\mathbb{E}\Big[\sup_{f\in\mathcal F}|Z_f|\Big]
\le \mathbb{E}\mathbb{E}&#x27;\Big[\sup_{f\in\mathcal F}\Big|
\frac1{\sqrt n}\sum_{i=1}^n\big(f(X_i)-f(X_i&#x27;)\big)\Big|\Big].\]</div>{% endraw %}
<p> Independently swapping each pair {% raw %}<span class="math inline">\((X_i,X_i&#x27;)\)</span>{% endraw %} preserves its joint law. Thus, as processes indexed by the entire class, the following equality holds in the unconditional distribution (not conditional on the observed pairs): </p>

{% raw %}<div class="math display">\[\frac1{\sqrt n}\sum_{i=1}^n\big(f(X_i)-f(X_i&#x27;)\big)
 \stackrel{d}{=} 
\frac1{\sqrt n}\sum_{i=1}^n \varepsilon_i\big(f(X_i)-f(X_i&#x27;)\big),\]</div>{% endraw %}
<p> hence </p>

{% raw %}<div class="math display">\[\mathbb{E}\Big[\sup_{f\in\mathcal F}|Z_f|\Big]
\le \mathbb{E}\mathbb{E}&#x27;\Big[\sup_{f\in\mathcal F}\Big|
\frac1{\sqrt n}\sum_{i=1}^n \varepsilon_i\big(f(X_i)-f(X_i&#x27;)\big)\Big|\Big].\]</div>{% endraw %}
<p> Using subadditivity of {% raw %}<span class="math inline">\(\sup|\cdot|\)</span>{% endraw %} and symmetry of {% raw %}<span class="math inline">\((\varepsilon_i)\)</span>{% endraw %}, </p>

{% raw %}<div class="math display">\[\sup_{f}\Big|\sum_i \varepsilon_i(f(X_i)-f(X_i&#x27;))\Big|
\le
\sup_f\Big|\sum_i \varepsilon_i f(X_i)\Big|
+
\sup_f\Big|\sum_i \varepsilon_i f(X_i&#x27;)\Big|.\]</div>{% endraw %}
<p> Taking {% raw %}<span class="math inline">\(\mathbb{E}\mathbb{E}&#x27;\)</span>{% endraw %} and using that {% raw %}<span class="math inline">\((X_i&#x27;)\)</span>{% endraw %} has same law as {% raw %}<span class="math inline">\((X_i)\)</span>{% endraw %} and is independent of {% raw %}<span class="math inline">\((\varepsilon_i)\)</span>{% endraw %}, </p>

{% raw %}<div class="math display">\[\mathbb{E}\Big[\|\mathbb G_n\|_{\mathcal F}\Big]
\le
2\,\mathbb{E}\Big[\sup_{f\in\mathcal F}\Big|
\frac1{\sqrt n}\sum_{i=1}^n \varepsilon_i f(X_i)\Big|\Big].\]</div>{% endraw %}
<p> ◻</p>

</div>
<div id="refs" class="references csl-bib-body hanging-indent" data-entry-spacing="0" role="list">
<div id="ref-van_der_vaart_weak_2000" class="csl-entry" role="listitem">
Vaart, Aad W. van der, and Jon A. Wellner. 2000. <em>Weak Convergence and Empirical Processes: With Applications to Statistics</em>. Corr. 2. printing. Springer Series in Statistics. New York Berlin Heidelberg: Springer.
</div>
</div>

<nav class="note-related" aria-label="Related notes"><p>Related notes: <a href="{% post_url 2022-09-20-symmetrization-bracketing-and-covering-numbers %}">Symmetrization, Bracketing, and Covering Numbers</a>; <a href="{% post_url 2022-09-13-concentration-inequalities %}">Concentration Inequalities</a>.</p></nav>

<nav class="note-series" aria-label="Notes in this series"><p>Previous: <a href="{% post_url 2022-10-11-chaining %}">Chaining</a> · Next: <a href="{% post_url 2022-10-18-local-bracketing-bounds-from-bernsteins-inequality %}">Local Bracketing Bounds from Bernstein’s Inequality</a></p></nav>

</div>
