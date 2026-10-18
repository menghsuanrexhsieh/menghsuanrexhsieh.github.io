---
layout: "post"
title: "Uniform Laws via Entropy and Symmetrization"
date: "2022-10-29"
tags: ["statistics", "empirical processes"]
excerpt: "We need a preliminary step in order to establish the lower bound of Rademacher complexity."
note_series: "Empirical processes"
note_source: "assets/notes/Overleaf Projects (32 items)/Empirical Process/stats.tex"
redirect_from: ["/2022/10/29/more-on-the-uniform-law-of-large-numbers/", "/2022/11/01/uniform-law-of-large-numbers-via-symmetrization/", "/2026/06/16/more-on-the-uniform-law-of-large-numbers/"]
---

<div class="note-content" markdown="0">

<p>Uniform convergence requires the largest empirical error over a function class to vanish. A finite cover separates this error into approximation within the cover and fluctuation at the centers. Symmetrization lets us measure the latter by correlation with random signs. We will use these two descriptions to give sufficient conditions for a uniform law and to examine classes that can fit random signs too well.</p>

<p>Let {% raw %}<span class="math inline">\(X_1,\ldots,X_n\)</span>{% endraw %} be i.i.d. with law {% raw %}<span class="math inline">\(P\)</span>{% endraw %}. For a function {% raw %}<span class="math inline">\(f\)</span>{% endraw %}, write {% raw %}<span class="math inline">\(Pf=\mathbb{E} f(X_1)\)</span>{% endraw %}, {% raw %}<span class="math inline">\(P_nf=n^{-1}\sum_{i=1}^n f(X_i)\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(\mathbb G_nf=\sqrt n(P_n-P)f\)</span>{% endraw %}. Rademacher variables are independent random signs, independent of the observations. See the <a href="{% post_url 2022-09-03-empirical-processes-tensorization-and-the-entropy-method %}">empirical-process setup</a> for measurability conventions.</p>

<div id="sec:ulln" data-note-section="title">

</div>
<p>We now apply the maximal inequalities to prove a uniform law of large numbers. In particular, we can look at the phenomenon through <em>empirical (metric) entropy</em>. As always, we need to place some kind of restrictions on the function class {% raw %}<span class="math inline">\(\mathcal F\)</span>{% endraw %} we consider. The first result applies when {% raw %}<span class="math inline">\(\mathcal F\)</span>{% endraw %} is the class of <em>uniformly bounded</em> functions.</p>

<div id="lem:ulln-uniformly-bded" class="lemma" data-note-number="1" data-note-kind="Lemma">
<p><strong>Lemma 1</strong> (ULLN for uniformly bounded function classes).  Let {% raw %}<span class="math inline">\(\mathcal F\)</span>{% endraw %} be a function class of uniformly bounded functions, i.e. {% raw %}<span class="math inline">\(\sup_{f \in \mathcal F} \lVert f \rVert_\infty \leq R &lt; \infty\)</span>{% endraw %}. Suppose the following <em>{% raw %}<span class="math inline">\(L^2\)</span>{% endraw %} random entropy condition</em> holds: </p>

{% raw %}<span id="eq:random-entropy-condition-ulln"></span><div class="math display">\[\begin{aligned}
 
        \frac{\log N(\varepsilon, \mathcal F, \lVert \cdot \rVert_{\widehat P_n, 2})}{n} \xrightarrow{\mathbf P\,\,\!\!} 0 \quad \text{for all } \varepsilon &gt; 0 ~.
    
\end{aligned}\tag{1}\]</div>{% endraw %}
<p> Then, {% raw %}<span class="math inline">\(\mathcal F\)</span>{% endraw %} satisfies the uniform law of large numbers.</p>

</div>
<div class="proof">
<p><em>Proof.</em> We prove convergence in mean first. Given the observations, let {% raw %}<span class="math inline">\(g_1,\ldots,g_N\)</span>{% endraw %} be an internal {% raw %}<span class="math inline">\(\varepsilon\)</span>{% endraw %}-net in {% raw %}<span class="math inline">\(L^2(P_n)\)</span>{% endraw %}, where {% raw %}<span class="math inline">\(N=N(\varepsilon,\mathcal F,L^2(P_n))\)</span>{% endraw %}. Cauchy–Schwarz gives, for every sign vector,</p>
{% raw %}<div class="math display">\[\sup_{f\in\mathcal F}\left|\frac1n\sum_i\varepsilon_i f(X_i)\right|\le\varepsilon+\max_{j\le N}\left|\frac1n\sum_i\varepsilon_i g_j(X_i)\right|.\]</div>{% endraw %}
<p>Each net point has empirical norm at most {% raw %}<span class="math inline">\(R\)</span>{% endraw %}. The Rademacher mgf bound and the finite-class log-sum-exp inequality therefore give</p>
{% raw %}<div class="math display">\[R_n(X):=\mathbb E_\varepsilon\sup_f\left|\frac1n\sum_i\varepsilon_i f(X_i)\right|\le\min\left\{R,\ \varepsilon+R\sqrt{\frac{2\log(2N)}n}\right\}.\]</div>{% endraw %}
<p>The entropy hypothesis makes the second term converge in probability to {% raw %}<span class="math inline">\(\varepsilon\)</span>{% endraw %}, while {% raw %}<span class="math inline">\(0\le R_n(X)\le R\)</span>{% endraw %}. Boundedness converts this to {% raw %}<span class="math inline">\(\limsup_n\mathbb E R_n(X)\le\varepsilon\)</span>{% endraw %}: split the expectation according to {% raw %}<span class="math inline">\(R_n(X)&gt;\varepsilon+u\)</span>{% endraw %}, and then let {% raw %}<span class="math inline">\(u\downarrow0\)</span>{% endraw %}. Since {% raw %}<span class="math inline">\(\varepsilon&gt;0\)</span>{% endraw %} is arbitrary, {% raw %}<span class="math inline">\(\mathbb E R_n(X)\to0\)</span>{% endraw %}. Symmetrization yields {% raw %}<span class="math inline">\(\mathbb E D_n\le2\mathbb E R_n(X)\to0\)</span>{% endraw %}, where {% raw %}<span class="math inline">\(D_n=\|P_n-P\|_{\mathcal F}\)</span>{% endraw %}.</p>
<p>Changing one observation changes {% raw %}<span class="math inline">\(D_n\)</span>{% endraw %} by at most {% raw %}<span class="math inline">\(2R/n\)</span>{% endraw %}. Thus, for {% raw %}<span class="math inline">\(t&gt;0\)</span>{% endraw %},</p>
{% raw %}<div class="math display">\[P(D_n&gt;\mathbb E D_n+t)\le e^{-nt^2/(2R^2)}.\]</div>{% endraw %}
<p>For each fixed rational {% raw %}<span class="math inline">\(t&gt;0\)</span>{% endraw %}, this series is summable. Borel–Cantelli and {% raw %}<span class="math inline">\(\mathbb E D_n\to0\)</span>{% endraw %} imply {% raw %}<span class="math inline">\(D_n\to0\)</span>{% endraw %} almost surely. The case {% raw %}<span class="math inline">\(R=0\)</span>{% endraw %} is immediate. No almost-sure limit is assumed at the start. ◻</p>
</div>
<p>The bounded result gives a sufficient empirical-entropy condition for integrably enveloped classes by truncation.</p>


<div id="prop:ulln-l1-random-entropy" class="proposition" data-note-number="2" data-note-kind="Proposition">
<p><strong>Proposition 2</strong>.  Suppose the following <em>{% raw %}<span class="math inline">\(L^1\)</span>{% endraw %} random entropy condition</em> holds: </p>

{% raw %}<span id="eq:L1-random-entropy"></span><div class="math display">\[\begin{aligned}
 
        \frac{\log N(\varepsilon, \mathcal F, \lVert \cdot \rVert_{\widehat P_n, 1})}{n} \xrightarrow{\mathbf P\,\,\!\!} 0 \quad \text{for all } \varepsilon &gt; 0 ~,
    
\end{aligned}\tag{2}\]</div>{% endraw %}
<p> and that {% raw %}<span class="math inline">\(\int F \dif P &lt; \infty\)</span>{% endraw %}, where {% raw %}<span class="math inline">\(F\)</span>{% endraw %} is the envelope function of {% raw %}<span class="math inline">\(\mathcal F\)</span>{% endraw %}. Then, {% raw %}<span class="math inline">\(\mathcal F\)</span>{% endraw %} satisfies the uniform law of large numbers.</p>

</div>
<div class="proof">
<p><em>Proof.</em> For an integer {% raw %}<span class="math inline">\(M\ge1\)</span>{% endraw %}, set {% raw %}<span class="math inline">\(\mathcal F_M=\{f1\{F\le M\}:f\in\mathcal F\}\)</span>{% endraw %}. For {% raw %}<span class="math inline">\(f,g\in\mathcal F\)</span>{% endraw %},</p>
{% raw %}<div class="math display">\[P_n[(f-g)^21\{F\le M\}]\le2M P_n|f-g|.\]</div>{% endraw %}
<p>Truncating the centers of an {% raw %}<span class="math inline">\(L^1(P_n)\)</span>{% endraw %} net consequently gives</p>
{% raw %}<div class="math display">\[N(\eta,\mathcal F_M,L^2(P_n))\le N(\eta^2/(2M),\mathcal F,L^1(P_n)).\]</div>{% endraw %}
<p>Lemma 1 applies to every {% raw %}<span class="math inline">\(\mathcal F_M\)</span>{% endraw %}. On a common event of probability one, its uniform law and the scalar strong law for {% raw %}<span class="math inline">\(F1\{F&gt;M\}\)</span>{% endraw %} hold for every integer {% raw %}<span class="math inline">\(M\)</span>{% endraw %}. On this event,</p>
{% raw %}<div class="math display">\[\begin{aligned}\|P_n-P\|_{\mathcal F}&amp;\le\|P_n-P\|_{\mathcal F_M}+P_nF1\{F&gt;M\}+PF1\{F&gt;M\},\\\limsup_n\|P_n-P\|_{\mathcal F}&amp;\le2PF1\{F&gt;M\}.\end{aligned}\]</div>{% endraw %}
<p>Let {% raw %}<span class="math inline">\(M\to\infty\)</span>{% endraw %}. Integrability of {% raw %}<span class="math inline">\(F\)</span>{% endraw %} makes the right side vanish. The probability-one event is chosen before this limit, so the conclusion concerns all sufficiently large sample sizes, rather than a single random sample size. ◻</p>
</div>
<div id="result-3" class="remark" data-note-number="3" data-note-kind="Remark">
<p><strong>Remark 3 (necessity, with the measurability assumptions above).</strong> Suppose {% raw %}<span class="math inline">\(\sup_fP|f|&lt;\infty\)</span>{% endraw %} and {% raw %}<span class="math inline">\(D_n\to0\)</span>{% endraw %} almost surely. The minimal envelope {% raw %}<span class="math inline">\(F=\sup_f|f|\)</span>{% endraw %} must then be integrable. Indeed, put {% raw %}<span class="math inline">\(F_0=\sup_f|f-Pf|\)</span>{% endraw %}. For {% raw %}<span class="math inline">\(n\ge2\)</span>{% endraw %},</p>
{% raw %}<div class="math display">\[\frac{F_0(X_n)}n\le D_n+\frac{n-1}{n}D_{n-1}\longrightarrow0.\]</div>{% endraw %}
<p>The events {% raw %}<span class="math inline">\(\{F_0(X_n)&gt;n\}\)</span>{% endraw %} are independent. The converse Borel–Cantelli lemma implies {% raw %}<span class="math inline">\(\sum_nP(F_0&gt;n)&lt;\infty\)</span>{% endraw %}, hence {% raw %}<span class="math inline">\(PF_0&lt;\infty\)</span>{% endraw %}. Since {% raw %}<span class="math inline">\(F\le F_0+\sup_f|Pf|\)</span>{% endraw %}, we obtain {% raw %}<span class="math inline">\(PF&lt;\infty\)</span>{% endraw %}. An arbitrarily enlarged envelope need not be integrable; the assertion concerns the minimal envelope, or an integrable envelope chosen in its place.</p>
<p>For necessity of the entropy condition, use the converse Glivenko–Cantelli theorem, <a href="https://sites.stat.washington.edu/jaw/RESEARCH/TALKS/Delft/emp-proc-delft-big.pdf">Wellner’s Delft notes, Theorem 6.2, p. 36</a>: the empirical {% raw %}<span class="math inline">\(L^2\)</span>{% endraw %} entropy divided by {% raw %}<span class="math inline">\(n\)</span>{% endraw %} tends to zero for every bounded truncation {% raw %}<span class="math inline">\(\mathcal F_M\)</span>{% endraw %}. To pass to the original {% raw %}<span class="math inline">\(L^1\)</span>{% endraw %} entropy, choose {% raw %}<span class="math inline">\(M\)</span>{% endraw %} with {% raw %}<span class="math inline">\(PF1\{F&gt;M\}&lt;\varepsilon/8\)</span>{% endraw %}. Eventually {% raw %}<span class="math inline">\(P_nF1\{F&gt;M\}&lt;\varepsilon/4\)</span>{% endraw %} almost surely. Lift the centers of an {% raw %}<span class="math inline">\(\varepsilon/4\)</span>{% endraw %}-net for {% raw %}<span class="math inline">\(\mathcal F_M\)</span>{% endraw %} to their original functions; their {% raw %}<span class="math inline">\(L^1(P_n)\)</span>{% endraw %} errors are at most {% raw %}<span class="math inline">\(\varepsilon/4+2P_nF1\{F&gt;M\}&lt;\varepsilon\)</span>{% endraw %}. Thus the truncated converse implies the asserted full {% raw %}<span class="math inline">\(L^1\)</span>{% endraw %} entropy condition. This necessity argument uses the converse theorem, not Lemma 1 alone.</p>
</div>
<p>The next lemma is not used above. It is the chaining tail bound behind an alternative proof of Lemma <a href="#lem:ulln-uniformly-bded" data-reference-type="ref" data-reference="lem:ulln-uniformly-bded">1</a>, by symmetrization and Hoeffding’s inequality, and is recorded for reference.</p>

<span id="eq:symmetrization-constants-choice-eta"></span>
<div id="lem:symmetrization-constants" class="lemma" data-note-number="4" data-note-kind="Lemma">
<span id="eq:symmetrization-constants-bound1"></span><p><strong>Lemma 4 (truncated chaining tail bound).</strong> Fix the observations and let {% raw %}<span class="math inline">\(d_n(f,g)=\|f-g\|_{P_n,2}\)</span>{% endraw %}, with {% raw %}<span class="math inline">\(\sup_f\|f\|_{P_n,2}\le R\)</span>{% endraw %}, {% raw %}<span class="math inline">\(R&gt;0\)</span>{% endraw %}. Suppose a random multiplier vector {% raw %}<span class="math inline">\(\xi\)</span>{% endraw %} satisfies</p>
{% raw %}<div class="math display">\[P_\xi\left(\left|\sum_i\xi_iq_i\right|&gt;t\right)\le C_1\exp\left\{-\frac{t^2}{C_2^2\sum_iq_i^2}\right\}\qquad(q\in\mathbb R^n,t&gt;0).\]</div>{% endraw %}
<p>Let {% raw %}<span class="math inline">\(K&gt;0\)</span>{% endraw %}, {% raw %}<span class="math inline">\(0\le\varepsilon&lt;\eta\)</span>{% endraw %}, and put {% raw %}<span class="math inline">\(I=\int_{\varepsilon/(4K)}^R\sqrt{\log N(u,\mathcal F,d_n)}du\)</span>{% endraw %} when {% raw %}<span class="math inline">\(\varepsilon/K&lt;R\)</span>{% endraw %}. There is {% raw %}<span class="math inline">\(C=C(C_1,C_2)\)</span>{% endraw %} such that if</p>
{% raw %}<div class="math display">\[\sqrt n(\eta-\varepsilon)\ge C(R\vee I),\tag{3}\]</div>{% endraw %}
<p>then</p>
{% raw %}<div class="math display">\[P_\xi\left(\sup_f\left|\frac1n\sum_i\xi_if(X_i)\right|&gt;\eta,\ \frac1n\sum_i\xi_i^2\le K^2\right)\le C\exp\left\{-\frac{n(\eta-\varepsilon)^2}{C^2R^2}\right\}.\]</div>{% endraw %}
<p>If {% raw %}<span class="math inline">\(\varepsilon/K\ge R\)</span>{% endraw %}, the probability is zero by Cauchy–Schwarz. Rademacher signs satisfy the assumptions with {% raw %}<span class="math inline">\(C_1=2\)</span>{% endraw %}, {% raw %}<span class="math inline">\(C_2=\sqrt2\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(K=1\)</span>{% endraw %}.</p>
</div>
<div class="proof">
<p><em>Proof.</em> First assume {% raw %}<span class="math inline">\(0&lt;\varepsilon/K&lt;R\)</span>{% endraw %}. Put {% raw %}<span class="math inline">\(r_s=R2^{-s}\)</span>{% endraw %} and take the first {% raw %}<span class="math inline">\(S\)</span>{% endraw %} with {% raw %}<span class="math inline">\(r_S\le\varepsilon/K\)</span>{% endraw %}. Choose internal nets {% raw %}<span class="math inline">\(T_s\)</span>{% endraw %} of sizes {% raw %}<span class="math inline">\(N_s=N(r_s,\mathcal F,d_n)\)</span>{% endraw %}, and for each {% raw %}<span class="math inline">\(f\)</span>{% endraw %} choose {% raw %}<span class="math inline">\(\pi_sf\in T_s\)</span>{% endraw %} within {% raw %}<span class="math inline">\(r_s\)</span>{% endraw %}. Set {% raw %}<span class="math inline">\(\pi_0f=0\)</span>{% endraw %}. The first increment satisfies {% raw %}<span class="math inline">\(\|\pi_1f\|_{P_n,2}\le R\le3r_1\)</span>{% endraw %}; later increments have norm at most {% raw %}<span class="math inline">\(r_s+r_{s-1}=3r_s\)</span>{% endraw %}. This explicit zero base point is needed for the identity</p>
{% raw %}<div class="math display">\[\pi_Sf=\sum_{s=1}^S(\pi_sf-\pi_{s-1}f).\]</div>{% endraw %}
<p>There are at most {% raw %}<span class="math inline">\(N_s^2\)</span>{% endraw %} possible increments at level {% raw %}<span class="math inline">\(s\)</span>{% endraw %}, since the covering counts are nondecreasing along the sequence. For {% raw %}<span class="math inline">\(u\ge1\)</span>{% endraw %}, apply the assumed tail bound at threshold</p>
{% raw %}<div class="math display">\[b_s=3C_2r_s\sqrt{2\log N_s+su}\]</div>{% endraw %}
<p>to {% raw %}<span class="math inline">\(n^{-1/2}\sum_i\xi_i(\pi_sf-\pi_{s-1}f)(X_i)\)</span>{% endraw %}. A union bound over increments and levels gives failure probability at most</p>
{% raw %}<div class="math display">\[C_1\sum_{s=1}^Se^{-su}\le\frac{C_1e^{-u}}{1-e^{-u}}\le2C_1e^{-u}.\]</div>{% endraw %}
<p>On the complementary event, the normalized process at every finest net point is bounded by {% raw %}<span class="math inline">\(\sum_sb_s\)</span>{% endraw %}. By monotonicity of covering numbers,</p>
{% raw %}<div class="math display">\[\sum_{s=1}^Sr_s\sqrt{\log N_s}\le2\sum_{s=1}^S\int_{r_s/2}^{r_s}\sqrt{\log N(v,\mathcal F,d_n)}dv\le2I.\]</div>{% endraw %}
<p>The last inequality uses {% raw %}<span class="math inline">\(r_S&gt;\varepsilon/(2K)\)</span>{% endraw %}. Also {% raw %}<span class="math inline">\(\sum_sr_s\sqrt s\le R\sum_s s2^{-s}=2R\)</span>{% endraw %}. Therefore {% raw %}<span class="math inline">\(\sum_sb_s\le C_0(I+R\sqrt u)\)</span>{% endraw %}, for a constant depending only on {% raw %}<span class="math inline">\(C_2\)</span>{% endraw %}. On the event {% raw %}<span class="math inline">\(P_n\xi^2\le K^2\)</span>{% endraw %}, the discarded remainder is at most {% raw %}<span class="math inline">\(K d_n(f,\pi_Sf)\le\varepsilon\)</span>{% endraw %}. We have proved</p>
{% raw %}<div class="math display">\[P_\xi\left(\sup_f\left|n^{-1}\sum_i\xi_if(X_i)\right|&gt;\varepsilon+\frac{C_0}{\sqrt n}(I+R\sqrt u),\ P_n\xi^2\le K^2\right)\le2C_1e^{-u}.\]</div>{% endraw %}
<p>Choose {% raw %}<span class="math inline">\(u=n(\eta-\varepsilon)^2/(4C_0^2R^2)\)</span>{% endraw %}. Increasing the constant in (3) ensures {% raw %}<span class="math inline">\(u\ge1\)</span>{% endraw %} and {% raw %}<span class="math inline">\(C_0I/\sqrt n\le(\eta-\varepsilon)/2\)</span>{% endraw %}, proving the stated bound. For {% raw %}<span class="math inline">\(\varepsilon=0\)</span>{% endraw %}, use all levels and let {% raw %}<span class="math inline">\(S\to\infty\)</span>{% endraw %}; the remainder is bounded by {% raw %}<span class="math inline">\(Kr_S\to0\)</span>{% endraw %}, and the same series and integral estimates apply. If the required entropy integral is infinite the hypothesis cannot hold. ◻</p>
</div>
<p>We now look at a series of examples.</p>

<div id="result-5" class="lemma" data-note-number="5" data-note-kind="Lemma">
<p><strong>Lemma 5 (weighted monotone classes).</strong> Let {% raw %}<span class="math inline">\(\widetilde{\mathcal F}\)</span>{% endraw %} be a class of increasing functions {% raw %}<span class="math inline">\(\mathbb R\to[-1,1]\)</span>{% endraw %}, let {% raw %}<span class="math inline">\(F\)</span>{% endraw %} be measurable, and put {% raw %}<span class="math inline">\(\mathcal F=\{Fh:h\in\widetilde{\mathcal F}\}\)</span>{% endraw %}. For {% raw %}<span class="math inline">\(1\le p&lt;\infty\)</span>{% endraw %}, {% raw %}<span class="math inline">\(\|F\|_{Q,p}&lt;\infty\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(\varepsilon&gt;0\)</span>{% endraw %},</p>
{% raw %}<div class="math display">\[\log N_{[\:]}(\varepsilon,\mathcal F,L^p(Q))\le C_p\frac{\|F\|_{Q,p}}{\varepsilon}.\]</div>{% endraw %}
<p>The constant may depend on {% raw %}<span class="math inline">\(p\)</span>{% endraw %}. If {% raw %}<span class="math inline">\(P|F|&lt;\infty\)</span>{% endraw %}, the class satisfies the strong uniform law.</p>
</div>
<div class="proof">
<p><em>Proof.</em> Use the standard monotone bracketing theorem: bounded monotone functions have {% raw %}<span class="math inline">\(L^p(Q)\)</span>{% endraw %} bracketing entropy at most {% raw %}<span class="math inline">\(C_p/\varepsilon\)</span>{% endraw %}, uniformly over probability measures {% raw %}<span class="math inline">\(Q\)</span>{% endraw %}. This is the external input in <a href="https://sites.stat.washington.edu/jaw/RESEARCH/TALKS/Delft/emp-proc-delft-big.pdf">Wellner’s Delft notes, Theorem 9.4, p. 71</a> (van der Vaart–Wellner, Theorem 2.7.5).</p>
<p>Set {% raw %}<span class="math inline">\(A=\|F\|_{Q,p}\)</span>{% endraw %}. If {% raw %}<span class="math inline">\(A=0\)</span>{% endraw %}, the class is zero {% raw %}<span class="math inline">\(Q\)</span>{% endraw %}-almost everywhere and one bracket suffices, with width zero in {% raw %}<span class="math inline">\(L^p(Q)\)</span>{% endraw %}. Otherwise define {% raw %}<span class="math inline">\(d\widetilde Q=|F|^pA^{-p}dQ\)</span>{% endraw %}. A bracket {% raw %}<span class="math inline">\([l,u]\)</span>{% endraw %} for the monotone class induces endpoints {% raw %}<span class="math inline">\(\min(Fl,Fu)\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\max(Fl,Fu)\)</span>{% endraw %}; this reversal where {% raw %}<span class="math inline">\(F&lt;0\)</span>{% endraw %} preserves their pointwise order. Its width has norm</p>
{% raw %}<div class="math display">\[\left(Q[|F|^p|u-l|^p]\right)^{1/p}=A\|u-l\|_{\widetilde Q,p}.\]</div>{% endraw %}
<p>Choose monotone brackets of width {% raw %}<span class="math inline">\(\varepsilon/A\)</span>{% endraw %} and apply the external bound. The strong uniform law follows by taking {% raw %}<span class="math inline">\(p=1\)</span>{% endraw %}: finitely many {% raw %}<span class="math inline">\(L^1(P)\)</span>{% endraw %} brackets exist at every positive width, and the finite-bracket strong-law argument in the symmetrization note applies. ◻</p>
</div>
<div id="result-6" class="example" data-note-number="6" data-note-kind="Example">
<p><strong>Example 6 (Sobolev classes).</strong> For a fixed integer {% raw %}<span class="math inline">\(k\ge1\)</span>{% endraw %}, let {% raw %}<span class="math inline">\(\mathcal F\)</span>{% endraw %} consist of functions on {% raw %}<span class="math inline">\([0,1]\)</span>{% endraw %} whose derivatives through order {% raw %}<span class="math inline">\(k-1\)</span>{% endraw %} have the usual absolutely continuous Sobolev representatives, with {% raw %}<span class="math inline">\(\|f\|_\infty\le1\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\|f^{(k)}\|_2\le1\)</span>{% endraw %}. Then</p>
{% raw %}<div class="math display">\[\log N_{[\:]}(\varepsilon,\mathcal F,\|\cdot\|_\infty)\le C_k\varepsilon^{-1/k}.\]</div>{% endraw %}
<p>The external Sobolev entropy theorem bounds sup-norm covering entropy of a bounded {% raw %}<span class="math inline">\(W^{k,2}([0,1])\)</span>{% endraw %} ball by this order; see <a href="https://sites.stat.washington.edu/jaw/RESEARCH/TALKS/Delft/emp-proc-delft-big.pdf">Wellner, Theorem 9.2, p. 70</a>. Here its condition {% raw %}<span class="math inline">\(2&gt;1/k\)</span>{% endraw %} holds, and {% raw %}<span class="math inline">\(\|f\|_2+\|f^{(k)}\|_2\le2\)</span>{% endraw %}. A sup-norm cover with centers {% raw %}<span class="math inline">\(g_j\)</span>{% endraw %} and radius {% raw %}<span class="math inline">\(\varepsilon/2\)</span>{% endraw %} gives brackets {% raw %}<span class="math inline">\([g_j-\varepsilon/2,g_j+\varepsilon/2]\)</span>{% endraw %}; taking slightly smaller radii accommodates strict-width conventions. This explains the passage from covering to bracketing and the dependence of the constant on {% raw %}<span class="math inline">\(k\)</span>{% endraw %}.</p>
</div>
<div id="result-7" class="example" data-note-number="7" data-note-kind="Example">
<p><strong>Example 7 (bounded variation).</strong> For monotone functions {% raw %}<span class="math inline">\(\mathbb R\to[-1,1]\)</span>{% endraw %}, Lemma 5 with {% raw %}<span class="math inline">\(F=1\)</span>{% endraw %}, {% raw %}<span class="math inline">\(p=2\)</span>{% endraw %} gives {% raw %}<span class="math inline">\(\log N_{[\:]}(\varepsilon,L^2(P))\le C/\varepsilon\)</span>{% endraw %}. A monotone class is only one subclass of bounded variation. The same order holds for all {% raw %}<span class="math inline">\(f\)</span>{% endraw %} with {% raw %}<span class="math inline">\(|f|\le1\)</span>{% endraw %} and total variation at most one.</p>
<p>To see this, use the Jordan decomposition {% raw %}<span class="math inline">\(f=c+u-v\)</span>{% endraw %}, where {% raw %}<span class="math inline">\(c=f(-\infty)\in[-1,1]\)</span>{% endraw %} and {% raw %}<span class="math inline">\(u,v\)</span>{% endraw %} are increasing, take values in {% raw %}<span class="math inline">\([0,1]\)</span>{% endraw %}, and start at zero. Bracket {% raw %}<span class="math inline">\(u,v\)</span>{% endraw %} at width {% raw %}<span class="math inline">\(\varepsilon/3\)</span>{% endraw %} and cover {% raw %}<span class="math inline">\(c\)</span>{% endraw %} by intervals of length {% raw %}<span class="math inline">\(\varepsilon/3\)</span>{% endraw %}. The endpoints {% raw %}<span class="math inline">\(c^L+u^L-v^U\)</span>{% endraw %} and {% raw %}<span class="math inline">\(c^U+u^U-v^L\)</span>{% endraw %} give a bracket of width at most {% raw %}<span class="math inline">\(\varepsilon\)</span>{% endraw %}. Taking logarithms of the product count gives {% raw %}<span class="math inline">\(C/\varepsilon+\log(C/\varepsilon)\le C'/\varepsilon\)</span>{% endraw %} for small {% raw %}<span class="math inline">\(\varepsilon\)</span>{% endraw %}. Since {% raw %}<span class="math inline">\(\int_0^1\varepsilon^{-1/2}d\varepsilon&lt;\infty\)</span>{% endraw %} and the envelope is bounded, the bracketing Donsker theorem applies for every probability law {% raw %}<span class="math inline">\(P\)</span>{% endraw %}.</p>
</div>
<div id="result-8" class="example" data-note-number="8" data-note-kind="Example">
<p><strong>Example 8 (smooth functions on an unbounded domain).</strong> Partition {% raw %}<span class="math inline">\(\mathbb R^d\)</span>{% endraw %} into unit cubes {% raw %}<span class="math inline">\(I_j\)</span>{% endraw %}. Suppose each restriction belongs to a Hölder ball of smoothness {% raw %}<span class="math inline">\(\alpha=s+\beta\)</span>{% endraw %}, with integer {% raw %}<span class="math inline">\(s\ge0\)</span>{% endraw %}, {% raw %}<span class="math inline">\(0&lt;\beta\le1\)</span>{% endraw %}, and radius {% raw %}<span class="math inline">\(M_j\)</span>{% endraw %}. This means derivatives through order {% raw %}<span class="math inline">\(s\)</span>{% endraw %} are bounded by {% raw %}<span class="math inline">\(M_j\)</span>{% endraw %} and derivatives of order {% raw %}<span class="math inline">\(s\)</span>{% endraw %} have {% raw %}<span class="math inline">\(\beta\)</span>{% endraw %}-Hölder seminorm at most {% raw %}<span class="math inline">\(M_j\)</span>{% endraw %}. It includes the bound on the function itself. For {% raw %}<span class="math inline">\(1\le r&lt;\infty\)</span>{% endraw %}, {% raw %}<span class="math inline">\(V\ge d/\alpha\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(S=\sum_j(M_j^rP(I_j))^{V/(V+r)}&lt;\infty\)</span>{% endraw %},</p>
{% raw %}<div class="math display">\[\log N_{[\:]}(\varepsilon,\mathcal F,L^r(P))\le C_{\alpha,d,r,V}\varepsilon^{-V}S^{(V+r)/r}.\]</div>{% endraw %}
<p>Here is the allocation argument behind the bound. On a unit cube the Hölder entropy theorem gives at most {% raw %}<span class="math inline">\(\exp(Cu^{-V})\)</span>{% endraw %} brackets of uniform width {% raw %}<span class="math inline">\(uM_j\)</span>{% endraw %} for {% raw %}<span class="math inline">\(0&lt;u&lt;2\)</span>{% endraw %}; for {% raw %}<span class="math inline">\(u\ge2\)</span>{% endraw %}, the single bracket {% raw %}<span class="math inline">\([-M_j,M_j]\)</span>{% endraw %} suffices. See <a href="https://sites.stat.washington.edu/jaw/RESEARCH/TALKS/Delft/emp-proc-delft-big.pdf">Wellner, Theorem 9.1 and Corollaries 9.1–9.2, pp. 69–71</a> for this local entropy input. Put {% raw %}<span class="math inline">\(b_j=M_j^rP(I_j)\)</span>{% endraw %} and, when {% raw %}<span class="math inline">\(b_j&gt;0\)</span>{% endraw %}, choose</p>
{% raw %}<div class="math display">\[u_j=\frac{\varepsilon}{2S^{1/r}}b_j^{-1/(V+r)}.\]</div>{% endraw %}
<p>The combined bracket has {% raw %}<span class="math inline">\(r\)</span>{% endraw %}-th power width at most {% raw %}<span class="math inline">\(\sum_jb_ju_j^r=\varepsilon^r/2^r\)</span>{% endraw %}. Only finitely many {% raw %}<span class="math inline">\(u_j&lt;2\)</span>{% endraw %}, because {% raw %}<span class="math inline">\(\sum_jb_j^{V/(V+r)}&lt;\infty\)</span>{% endraw %}; therefore the product of the nontrivial bracket counts is finite. Its logarithm is at most</p>
{% raw %}<div class="math display">\[C\sum_{u_j&lt;2}u_j^{-V}\le C2^V\varepsilon^{-V}S^{V/r}\sum_jb_j^{V/(V+r)}.\]</div>{% endraw %}
<p>Cubes with {% raw %}<span class="math inline">\(b_j=0\)</span>{% endraw %} require only a zero-width-in-{% raw %}<span class="math inline">\(L^r(P)\)</span>{% endraw %} bracket, and {% raw %}<span class="math inline">\(S=0\)</span>{% endraw %} is immediate. For {% raw %}<span class="math inline">\(r=2\)</span>{% endraw %} and {% raw %}<span class="math inline">\(V&lt;2\)</span>{% endraw %}, finiteness of {% raw %}<span class="math inline">\(S\)</span>{% endraw %} also implies a square-integrable envelope, and the entropy integral is finite. The class is then {% raw %}<span class="math inline">\(P\)</span>{% endraw %}-Donsker by the bracketing theorem.</p>
</div>
<h3 data-note-section="1" id="uniform-law-of-large-numbers-via-symmetrization">1. Uniform Law of Large Numbers Via Symmetrization</h3>
<p>We can also obtain the uniform law through analyzing quantities that decide the behaviour of uniformity. An important quantity that underlies the study of uniform laws is the <em>Rademacher complexity</em> of the function class {% raw %}<span class="math inline">\(\mathcal F = \{f : \mathscr X \to \mathbb R\}\)</span>{% endraw %} considered. It turns out we ought to look at the following construction: let </p>

{% raw %}<div class="math display">\[\begin{aligned}
    \mathcal F (x) \triangleq \{ (f(x_1), \dots, f(x_n)) : f \in \mathcal F \}
\end{aligned}\]</div>{% endraw %}
<p> for some {% raw %}<span class="math inline">\(x = (x_1, \dots, x_n) \in \mathscr X^n\)</span>{% endraw %}. Based on this, we define the <em>empirical Rademacher complexity</em> as </p>

{% raw %}<div class="math display">\[\begin{aligned}
    \mathcal R \left( \frac{\mathcal F (x)}{n} \right) \triangleq \mathbb{E}_{\varepsilon} \sup_{f \in \mathcal F} \left| \frac1n \sum_{1 \leq k \leq n} \varepsilon_k f(x_k) \right| ~,
\end{aligned}\]</div>{% endraw %}
<p> where {% raw %}<span class="math inline">\(\varepsilon_1, \dots, \varepsilon_n\)</span>{% endraw %} are i.i.d. Rademacher random variables. The <em>deterministic</em> quantity from taking the expectation of {% raw %}<span class="math inline">\(\mathcal R(\cdot)\)</span>{% endraw %}, i.e. </p>

{% raw %}<div class="math display">\[\begin{aligned}
    \mathcal R_n (\mathcal F) \triangleq \mathbb{E}_X \mathbb{E}_\varepsilon \sup_{f \in \mathcal F} \left| \frac1n \sum_{1 \leq k \leq n} \varepsilon_k f(X_k) \right|
\end{aligned}\]</div>{% endraw %}
<p> is called the <em>Rademacher complexity of the function class {% raw %}<span class="math inline">\(\mathcal F\)</span>{% endraw %}</em>. Analyzing this quantity is one of the ways we can obtain the uniform law. The broad heuristic is as follows: a function class has high empirical complexity if we can <em>always</em> find a function that has a high correlation with a randomly drawn noise vector. Conversely, when the Rademacher complexity decays as a function of sample size, then it is impossible to find a function that correlates very highly in expectation with a randomly drawn noise vector. Ideally, we’d want a tight control on the <em>upper</em> bound of the Rademacher complexity. The reason is as follows.</p>

<div id="thm:upper-bound-radamacher-on-c-unif-bded-function-class" class="theorem" data-note-number="9" data-note-kind="Theorem">
<p><strong>Theorem 9</strong> (Uniformly bounded function class: upper bound on Rademacher complexity).  For any {% raw %}<span class="math inline">\(c\)</span>{% endraw %}-uniformly bounded class of functions {% raw %}<span class="math inline">\(\mathcal F\)</span>{% endraw %}, any positive integer {% raw %}<span class="math inline">\(n \in \mathbb N\)</span>{% endraw %}, and any scalar {% raw %}<span class="math inline">\(\delta \geq 0\)</span>{% endraw %}, we have </p>

{% raw %}<div class="math display">\[\begin{aligned}
        \lVert \widehat P_n - \mathbf P\,\,\!\!\rVert_{\mathcal F} \leq 2 \mathcal R_n (\mathcal F) + \delta 
    
\end{aligned}\]</div>{% endraw %}
<p> with {% raw %}<span class="math inline">\(\mathbf P\,\,\!\!\)</span>{% endraw %}-probability at least {% raw %}<span class="math inline">\(1 - e^{-\frac{n\delta^2}{2c^2}}\)</span>{% endraw %}. Consequently, if {% raw %}<span class="math inline">\(\mathcal R_n (\mathcal F) = o(1)\)</span>{% endraw %}, {% raw %}<span class="math inline">\(\lVert \widehat P_n - \mathbf P\,\,\!\!\rVert_{\mathcal F} \xrightarrow{\rm a.s.} 0\)</span>{% endraw %}.</p>

</div>
<p>To prove this result, we need a preliminary lemma.</p>

<div id="lem:supremum-convexity-bounds" class="lemma" data-note-number="10" data-note-kind="Lemma">
<p><strong>Lemma 10</strong> (Convex functions and supremum of random variables).  For any function {% raw %}<span class="math inline">\(f \in \mathcal F\)</span>{% endraw %} (any function class), {% raw %}<span class="math inline">\(\sup_{f \in \mathcal F} \mathbb{E} f(X) \leq \mathbb{E} \sup_{f \in \mathcal F} |f(X)|\)</span>{% endraw %}. If {% raw %}<span class="math inline">\(\Phi\)</span>{% endraw %} is any nondecreasing and convex function, then {% raw %}<span class="math inline">\(\sup_{f \in \mathcal F} \Phi (\mathbb{E} f(X)) \leq \mathbb{E} \Phi( \sup_{f \in \mathcal F} |f(X)| )\)</span>{% endraw %}.</p>

</div>
<div class="proof">
<p><em>Proof.</em> First, because {% raw %}<span class="math inline">\(f(X) \leq |f(X)| \leq \sup_{f \in \mathcal F} |f(X)|\)</span>{% endraw %} for all {% raw %}<span class="math inline">\(f \in \mathcal F\)</span>{% endraw %}, it follows that {% raw %}<span class="math inline">\(\mathbb{E} f(X) \leq \mathbb{E} \sup_{f \in \mathcal F} |f(X)|\)</span>{% endraw %}. Taking supremum on both sides yields the desired result. For the second result, since {% raw %}<span class="math inline">\(\Phi\)</span>{% endraw %} is assumed to be nondecreasing, we have </p>

{% raw %}<div class="math display">\[\begin{aligned}
        \Phi (\mathbb{E} f(X)) \leq \Phi(|\mathbb{E} f(X)|) \leq \Phi (\mathbb{E} |f(X)|) \leq \Phi \left( \sup_{f \in \mathcal F} \mathbb{E} |f(X)| \right)
    
\end{aligned}\]</div>{% endraw %}
<p> for any {% raw %}<span class="math inline">\(f \in \mathcal F\)</span>{% endraw %}. Note the final quantity on the rightmost side is deterministic. And, by the convexity of {% raw %}<span class="math inline">\(\Phi\)</span>{% endraw %}, we apply Jensen’s inequality to find that {% raw %}<span class="math inline">\(\sup_{f \in \mathcal F} \Phi (\mathbb{E} f(X)) \leq \mathbb{E} \Phi (\sup_{f \in \mathcal F} |f(X)|)\)</span>{% endraw %}, as desired. ◻</p>

</div>
<div class="proof">
<p><em>Proof of Theorem 9.</em> Put {% raw %}<span class="math inline">\(D_n=\sup_f|n^{-1}\sum_i(f(X_i)-Pf)|\)</span>{% endraw %}. If {% raw %}<span class="math inline">\(x,\widetilde x\)</span>{% endraw %} differ only in coordinate {% raw %}<span class="math inline">\(i\)</span>{% endraw %}, the supremum inequality {% raw %}<span class="math inline">\(|\sup a_f-\sup b_f|\le\sup|a_f-b_f|\)</span>{% endraw %} and cancellation of {% raw %}<span class="math inline">\(Pf\)</span>{% endraw %} give</p>
{% raw %}<div class="math display">\[|D_n(x)-D_n(\widetilde x)|\le\frac1n\sup_f|f(x_i)-f(\widetilde x_i)|\le\frac{2c}{n}.\]</div>{% endraw %}
<p>McDiarmid's inequality therefore yields {% raw %}<span class="math inline">\(P(D_n&gt;\mathbb ED_n+t)\le e^{-nt^2/(2c^2)}\)</span>{% endraw %} for {% raw %}<span class="math inline">\(t&gt;0\)</span>{% endraw %}. No maximizer needs to exist. To bound the mean, take an independent sample {% raw %}<span class="math inline">\(Y_1,\ldots,Y_n\)</span>{% endraw %}. Conditional Jensen gives</p>
{% raw %}<div class="math display">\[\mathbb ED_n\le\mathbb E_{X,Y}\sup_f\left|n^{-1}\sum_i(f(X_i)-f(Y_i))\right|.\]</div>{% endraw %}
<p>Swapping {% raw %}<span class="math inline">\(X_i,Y_i\)</span>{% endraw %} whenever an independent sign is negative preserves the joint law of the entire process indexed by {% raw %}<span class="math inline">\(f\)</span>{% endraw %}. Thus the last expectation equals the same expression with each difference multiplied by {% raw %}<span class="math inline">\(\varepsilon_i\)</span>{% endraw %}. The triangle inequality then bounds it by</p>
{% raw %}<div class="math display">\[\mathbb E_{X,\varepsilon}\sup_f\left|n^{-1}\sum_i\varepsilon_if(X_i)\right|+\mathbb E_{Y,\varepsilon}\sup_f\left|n^{-1}\sum_i\varepsilon_if(Y_i)\right|=2\mathcal R_n(\mathcal F).\]</div>{% endraw %}
<p>Combining the mean and concentration bounds proves the assertion. If {% raw %}<span class="math inline">\(\mathcal R_n\to0\)</span>{% endraw %}, then for each rational {% raw %}<span class="math inline">\(t&gt;0\)</span>{% endraw %}, eventually {% raw %}<span class="math inline">\(2\mathcal R_n&lt;t/2\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(\sum_nP(D_n&gt;t)&lt;\infty\)</span>{% endraw %}. Borel–Cantelli proves almost-sure convergence. If {% raw %}<span class="math inline">\(c=0\)</span>{% endraw %}, every quantity vanishes. ◻</p>
</div>
<p>Now, a natural question is: Theorem <a href="#thm:upper-bound-radamacher-on-c-unif-bded-function-class" data-reference-type="ref" data-reference="thm:upper-bound-radamacher-on-c-unif-bded-function-class">9</a> guarantees an upper bound on the Rademacher complexity; is there a lower bound to be obtained, at least in the class of {% raw %}<span class="math inline">\(c\)</span>{% endraw %}-uniformly bounded functions? The answer is yes.</p>

<div id="thm:lower-bound-radamacher-on-c-unif-bded-function-class" class="theorem" data-note-number="11" data-note-kind="Theorem">
<p><strong>Theorem 11 (lower bound on the uniform empirical error).</strong> For a measurable class with {% raw %}<span class="math inline">\(|f|\le c\)</span>{% endraw %}, {% raw %}<span class="math inline">\(c&gt;0\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(\delta\ge0\)</span>{% endraw %}, with probability at least {% raw %}<span class="math inline">\(1-e^{-n\delta^2/(2c^2)}\)</span>{% endraw %},</p>
{% raw %}<div class="math display">\[\|P_n-P\|_{\mathcal F}\ge\frac12\mathcal R_n(\mathcal F)-\frac{\sup_{f\in\mathcal F}|Pf|}{2\sqrt n}-\delta.\]</div>{% endraw %}
<p>Together with Theorem 9, this implies that a uniformly bounded class obeys the strong uniform law if and only if {% raw %}<span class="math inline">\(\mathcal R_n(\mathcal F)\to0\)</span>{% endraw %}.</p>
</div>
<p>We need a preliminary step in order to establish the lower bound of Rademacher complexity.</p>

<div id="lem:convex-bound-on-F-sup-norm-sandwich" class="lemma" data-note-number="12" data-note-kind="Lemma">
<p><strong>Lemma 12</strong>.  For all convex, nondecreasing real-valued function {% raw %}<span class="math inline">\(\Phi : \mathbb R \to \mathbb R\)</span>{% endraw %}, we have </p>

{% raw %}<div class="math display">\[\begin{aligned}
        \mathbb{E}_X \mathbb{E}_\varepsilon \Phi \left( \frac12 \lVert \mathbb S_n \rVert_{\overline{\mathcal F}} \right) \leq \mathbb{E}_X \Phi ( \lVert \widehat P_n - \mathbf P\,\,\!\!\rVert_{\mathcal F} ) \leq \mathbb{E}_X \mathbb{E}_{\varepsilon} \Phi (2 \lVert \mathbb S_n \rVert_{\mathcal F}) ~,
    
\end{aligned}\]</div>{% endraw %}
<p> where {% raw %}<span class="math inline">\(\mathbb S_n f \triangleq \frac1n \sum_{1 \leq k \leq n} \varepsilon_k f(X_k)\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\overline{\mathcal F} \triangleq \{ f - \mathbb{E} f : f \in \mathcal F \}\)</span>{% endraw %}.</p>

</div>
<div class="proof">
<p><em>Proof.</em> Write {% raw %}<span class="math inline">\(D(X)=\|P_n^X-P\|_{\mathcal F}\)</span>{% endraw %} and {% raw %}<span class="math inline">\(S(X,\varepsilon)=\|\mathbb S_n\|_{\mathcal F}\)</span>{% endraw %}, and let {% raw %}<span class="math inline">\(Y\)</span>{% endraw %} be an independent copy of the sample. Conditional Jensen, swapping pairs using the signs, and the triangle inequality give</p>
{% raw %}<div class="math display">\[\begin{aligned}\mathbb E\Phi(D(X))&amp;\le\mathbb E\Phi\left(\left\|n^{-1}\sum_i(f(X_i)-f(Y_i))\right\|_{\mathcal F}\right)\\&amp;=\mathbb E\Phi\left(\left\|n^{-1}\sum_i\varepsilon_i(f(X_i)-f(Y_i))\right\|_{\mathcal F}\right)\\&amp;\le\mathbb E\Phi(S(X,\varepsilon)+S(Y,\varepsilon))\\&amp;\le\frac12\mathbb E\Phi(2S(X,\varepsilon))+\frac12\mathbb E\Phi(2S(Y,\varepsilon))=\mathbb E\Phi(2S(X,\varepsilon)).\end{aligned}\]</div>{% endraw %}
<p>For the reverse direction, replace each {% raw %}<span class="math inline">\(Pf\)</span>{% endraw %} in {% raw %}<span class="math inline">\(\mathbb S_n(f-Pf)\)</span>{% endraw %} by the conditional expectation of {% raw %}<span class="math inline">\(f(Y_i)\)</span>{% endraw %}, and use conditional Jensen again. Swapping the pairs removes the signs. Consequently,</p>
{% raw %}<div class="math display">\[\begin{aligned}\mathbb E\Phi\left(\frac12\|\mathbb S_n\|_{\overline{\mathcal F}}\right)&amp;\le\mathbb E\Phi\left(\frac12\left\|n^{-1}\sum_i(f(X_i)-f(Y_i))\right\|_{\mathcal F}\right)\\&amp;\le\mathbb E\Phi\left(\frac12D(X)+\frac12D(Y)\right)\\&amp;\le\frac12\mathbb E\Phi(D(X))+\frac12\mathbb E\Phi(D(Y))=\mathbb E\Phi(D(X)).\end{aligned}\]</div>{% endraw %}
<p>The suprema and the nondecreasing convex function preserve each conditional Jensen inequality. Integrability is automatic for the bounded classes used here; otherwise the inequalities are understood when the expectations exist, or for nonnegative extended expectations. ◻</p>
</div>
<div class="proof">
<p><em>Proof of Theorem 11.</em> Set {% raw %}<span class="math inline">\(m=\sup_f|Pf|\)</span>{% endraw %}. Pointwise in {% raw %}<span class="math inline">\((X,\varepsilon)\)</span>{% endraw %},</p>
{% raw %}<div class="math display">\[\|\mathbb S_n\|_{\overline{\mathcal F}}\ge\|\mathbb S_n\|_{\mathcal F}-\frac mn\left|\sum_i\varepsilon_i\right|.\]</div>{% endraw %}
<p>Only after taking expectations may we use {% raw %}<span class="math inline">\(\mathbb E|\sum_i\varepsilon_i|\le\sqrt n\)</span>{% endraw %}, which follows from Cauchy–Schwarz and independence. Lemma 12 with {% raw %}<span class="math inline">\(\Phi(t)=t\)</span>{% endraw %} therefore gives</p>
{% raw %}<div class="math display">\[\mathbb ED_n\ge\frac12\mathbb E\|\mathbb S_n\|_{\overline{\mathcal F}}\ge\frac12\mathcal R_n(\mathcal F)-\frac{m}{2\sqrt n}.\]</div>{% endraw %}
<p>Apply the lower-tail version of the bounded-differences inequality for {% raw %}<span class="math inline">\(D_n\)</span>{% endraw %} to obtain the asserted probability bound. If the strong uniform law holds, {% raw %}<span class="math inline">\(0\le D_n\le2c\)</span>{% endraw %} implies {% raw %}<span class="math inline">\(\mathbb ED_n\to0\)</span>{% endraw %} by dominated convergence, and the last display implies {% raw %}<span class="math inline">\(\mathcal R_n\le2\mathbb ED_n+m/\sqrt n\to0\)</span>{% endraw %}. The converse is Theorem 9. ◻</p>
</div>
<div id="result-13" class="example" data-note-number="13" data-note-kind="Example">
<p><strong>Example 13 (finite subsets and failure of the uniform law).</strong> Let {% raw %}<span class="math inline">\(P\)</span>{% endraw %} be uniform on {% raw %}<span class="math inline">\([0,1]\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\mathcal F=\{1_S:S\subset[0,1],\ S\text{ finite}\}\)</span>{% endraw %}. Every {% raw %}<span class="math inline">\(S\)</span>{% endraw %} has {% raw %}<span class="math inline">\(P(S)=0\)</span>{% endraw %}, but the set of all observed sample points has empirical mass one. Thus</p>
{% raw %}<div class="math display">\[\|P_n-P\|_{\mathcal F}=1\quad\text{for every sample}.\]</div>{% endraw %}
<p>For distinct sample points, a finite set can include precisely the observations whose signs are positive, or precisely those whose signs are negative. Hence</p>
{% raw %}<div class="math display">\[\sup_{S\text{ finite}}\left|n^{-1}\sum_i\varepsilon_i1_S(X_i)\right|=\frac{\max(N_+,N_-)}n=\frac12+\frac1{2n}\left|\sum_i\varepsilon_i\right|.\]</div>{% endraw %}
<p>Distinctness holds almost surely, so {% raw %}<span class="math inline">\(\mathcal R_n=1/2+\mathbb E|\sum_i\varepsilon_i|/(2n)\ge1/2\)</span>{% endraw %}. These explicit formulas establish measurability of the suprema and directly prove failure of the uniform law. A vacuous upper bound alone would not prove failure.</p>
</div>
<div id="result-14" class="example" data-note-number="14" data-note-kind="Example">
<p><strong>Example 14</strong> (Linear classifiers). Let {% raw %}<span class="math inline">\(\mathcal F=\{x\mapsto\operatorname{sign}\langle\theta,x\rangle:\theta\in\mathbb R^d,\ \|\theta\|_2=1\}\)</span>{% endraw %}, with any fixed convention for the sign at zero. Suppose {% raw %}<span class="math inline">\(n\le d\)</span>{% endraw %} and {% raw %}<span class="math inline">\(x_1,\ldots,x_n\in\mathbb R^d\)</span>{% endraw %} are linearly independent. Form the matrix with these vectors as rows,</p>
{% raw %}<div class="math display">\[A=\begin{pmatrix}x_1^\top\\\vdots\\x_n^\top\end{pmatrix}\in\mathbb R^{n\times d}.\]</div>{% endraw %}
<p>The row rank is {% raw %}<span class="math inline">\(n\)</span>{% endraw %}, so {% raw %}<span class="math inline">\(AA^\top\)</span>{% endraw %} is invertible. Given any sign vector {% raw %}<span class="math inline">\(\varepsilon\in\{-1,1\}^n\)</span>{% endraw %}, choose {% raw %}<span class="math inline">\(\beta=A^\top(AA^\top)^{-1}\varepsilon\)</span>{% endraw %}. Then {% raw %}<span class="math inline">\(A\beta=\varepsilon\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\beta\ne0\)</span>{% endraw %}. The unit vector {% raw %}<span class="math inline">\(\theta=\beta/\|\beta\|_2\)</span>{% endraw %} therefore satisfies {% raw %}<span class="math inline">\(\operatorname{sign}\langle\theta,x_i\rangle=\varepsilon_i\)</span>{% endraw %} at every sample point. Consequently,</p>
{% raw %}<div class="math display">\[\mathbb{E}_\varepsilon\sup_{f\in\mathcal F}\left|\frac1n\sum_{i=1}^n\varepsilon_i f(x_i)\right|=1.\]</div>{% endraw %}
<p>The lower bound follows by using the interpolating classifier; the upper bound follows because each summand has absolute value one. Thus this sample can realize every labeling and the empirical complexity bound is vacuous. This shows the capacity to fit noise when the design has full row rank; it does not assert that every data distribution or every fitting rule must generalize poorly.</p>
</div>

<div id="refs" class="references csl-bib-body hanging-indent" data-entry-spacing="0" role="list">
<div id="ref-van_der_vaart_weak_2000" class="csl-entry" role="listitem">
Vaart, Aad W. van der, and Jon A. Wellner. 2000. <em>Weak Convergence and Empirical Processes: With Applications to Statistics</em>. Corr. 2. printing. Springer Series in Statistics. New York Berlin Heidelberg: Springer.
</div>
</div>

<nav class="note-related" aria-label="Related notes"><p>Related notes: <a href="{% post_url 2022-11-15-donsker-class %}">Donsker Class</a>; <a href="{% post_url 2022-09-13-concentration-inequalities %}">Concentration Inequalities</a>; <a href="{% post_url 2022-09-03-empirical-processes-tensorization-and-the-entropy-method %}">Empirical Processes, Tensorization, and the Entropy Method</a>.</p></nav>

<nav class="note-series" aria-label="Notes in this series"><p>Previous: <a href="{% post_url 2022-10-18-local-bracketing-bounds-from-bernsteins-inequality %}">Local Bracketing Bounds from Bernstein’s Inequality</a> · Next: <a href="{% post_url 2022-11-05-localization-and-the-uniform-law %}">Localization and the Uniform Law</a></p></nav>

</div>
