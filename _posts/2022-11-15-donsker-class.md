---
layout: "post"
title: "Donsker Class"
date: "2022-11-15"
tags: ["statistics", "empirical processes"]
excerpt: "Donsker Class. Notes on empirical processes."
note_series: "Empirical processes"
note_source: "assets/notes/Overleaf Projects (32 items)/Empirical Process/stats.tex"
redirect_from: ["/2026/06/16/donsker-class/"]
---

<div class="note-content" markdown="0">

<p>For any fixed finite collection of square-integrable functions, the multivariate central limit theorem describes their empirical errors. A Donsker theorem asks for convergence of the entire empirical process in the supremum norm. The extra requirement is tightness: nearby functions must have small empirical-process increments uniformly in the sample size. Entropy conditions give practical ways to verify this requirement.</p>

<p>Let {% raw %}<span class="math inline">\(X_1,\ldots,X_n\)</span>{% endraw %} be i.i.d. with law {% raw %}<span class="math inline">\(P\)</span>{% endraw %}. For a function {% raw %}<span class="math inline">\(f\)</span>{% endraw %}, write {% raw %}<span class="math inline">\(Pf=\mathbb{E} f(X_1)\)</span>{% endraw %}, {% raw %}<span class="math inline">\(P_nf=n^{-1}\sum_{i=1}^n f(X_i)\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(\mathbb G_nf=\sqrt n(P_n-P)f\)</span>{% endraw %}. Rademacher variables are independent random signs, independent of the observations. See the <a href="{% post_url 2022-09-03-empirical-processes-tensorization-and-the-entropy-method %}">empirical-process setup</a> for measurability conventions.</p>

<div id="sec:donsker" data-note-section="title">

</div>
<p>We now pass from uniform laws of large numbers to a uniform central limit theorem. Suppose {% raw %}<span class="math inline">\(X_1, \dots, X_n\)</span>{% endraw %} is an i.i.d. sample drawn from an unknown distribution {% raw %}<span class="math inline">\(\mathbf P\,\,\!\!\)</span>{% endraw %}. As before, define the empirical process </p>

{% raw %}<span id="eq:empirical-process"></span><div class="math display">\[\begin{aligned}
 
    \mathbb G_n f \triangleq \sqrt{n} (\widehat P_n - \mathbf P\,\,\!\!) (f)
\end{aligned}\tag{1}\]</div>{% endraw %}
<p> for any {% raw %}<span class="math inline">\(f \in \mathcal F\)</span>{% endraw %}, where {% raw %}<span class="math inline">\(\mathcal F\)</span>{% endraw %} is a class of measurable functions. By definition, {% raw %}<span class="math inline">\(\mathbb G_n f\)</span>{% endraw %} is a stochastic process. To discuss convergence of this process, we regard each bounded sample path as a point in a function space.</p>

<p>A sample-bounded process has paths in {% raw %}<span class="math inline">\(\ell^\infty(T)\)</span>{% endraw %}, the space of bounded functions with supremum norm. It suffices that boundedness hold outside a common null set, on which the process can be redefined. A map into a metric space {% raw %}<span class="math inline">\(S\)</span>{% endraw %} is Borel measurable when inverse images of Borel subsets of {% raw %}<span class="math inline">\(S\)</span>{% endraw %} are measurable. Its law is tight if for every {% raw %}<span class="math inline">\(\eta&gt;0\)</span>{% endraw %} some compact {% raw %}<span class="math inline">\(K\subset S\)</span>{% endraw %} has probability at least {% raw %}<span class="math inline">\(1-\eta\)</span>{% endraw %}.</p>

<p>An empirical process need not be Borel measurable as an {% raw %}<span class="math inline">\(\ell^\infty(T)\)</span>{% endraw %}-valued map, even when every coordinate is measurable. Accordingly, weak convergence below means {% raw %}<span class="math inline">\(\mathbb E^*H(X_n)\to\mathbb EH(X)\)</span>{% endraw %} for every bounded continuous {% raw %}<span class="math inline">\(H\)</span>{% endraw %}, where the limit is a tight Borel random element. Finite-dimensional convergence is ordinary convergence of the measurable coordinate vectors.</p>
<div id="thm:tight-random-element-iff-result" class="theorem" data-note-number="1" data-note-kind="Theorem">
<p><strong>Theorem 1</strong>.  Let {% raw %}<span class="math inline">\(\Omega_n = (\Omega_n, \mathfrak F_n, \widehat P_n)\)</span>{% endraw %} denote a sequence of probability spaces. Let {% raw %}<span class="math inline">\((T,d)\)</span>{% endraw %} be a metric space. A sequence of arbitrary maps {% raw %}<span class="math inline">\(X_n : \Omega_n \to \ell^\infty (T)\)</span>{% endraw %} converges weakly to a tight random element if and only if <em>both</em> of the following conditions are satisfied:</p>

<ol>
<li><p>(Convergence in distribution on {% raw %}<span class="math inline">\(\mathbb R^m\)</span>{% endraw %}) For all {% raw %}<span class="math inline">\((t_1, \dots, t_m) \in T^m\)</span>{% endraw %}, the random vector {% raw %}<span class="math inline">\((X_n(t_1), \dots, X_n(t_m))\)</span>{% endraw %} converges in distribution in {% raw %}<span class="math inline">\(\mathbb R^m\)</span>{% endraw %}.</p></li>
<li><p>(Asymptotic stochastic equicontinuity) There exists a semi-metric {% raw %}<span class="math inline">\(d\)</span>{% endraw %} such that {% raw %}<span class="math inline">\((T,d)\)</span>{% endraw %} is totally bounded and that, for all {% raw %}<span class="math inline">\(\varepsilon &gt; 0\)</span>{% endraw %}, </p>

{% raw %}<div class="math display">\[\begin{aligned}
            \lim\limits_{\delta \to 0} \limsup_{n\to\infty} \mathbf P\,\,\!\!^* \left( \sup_{s,t \in T : d(s,t) &lt; \delta} |X_n (s) - X_n (t)| &gt; \varepsilon \right) = 0 ~.
        
\end{aligned}\]</div>{% endraw %}</li>
</ol>
</div>
<p>Theorem 1 is the weak-convergence criterion in <a href="https://sites.stat.washington.edu/jaw/RESEARCH/TALKS/Delft/emp-proc-delft-big.pdf">Wellner’s Delft lectures, Chapter 1, Theorem 2.1, pp. 6–8 (2005 version)</a>. The following finite-grid argument explains how its hypotheses are used. Choose a finite {% raw %}<span class="math inline">\(\delta\)</span>{% endraw %}-net and a map {% raw %}<span class="math inline">\(\pi_\delta:T\to T\)</span>{% endraw %} taking values in that net with {% raw %}<span class="math inline">\(d(t,\pi_\delta t)&lt;\delta\)</span>{% endraw %}. Then</p>

{% raw %}<div class="math display">\[\|X_n-X_n\circ\pi_\delta\|_\infty\le\sup_{d(s,t)&lt;\delta}|X_n(s)-X_n(t)|.\]</div>{% endraw %}

<p>The grid processes converge by finite-dimensional convergence. The weak-convergence criterion in Theorem 1 constructs a tight limit {% raw %}<span class="math inline">\(X\)</span>{% endraw %} with uniformly {% raw %}<span class="math inline">\(d\)</span>{% endraw %}-continuous paths. Thus its grid approximations converge uniformly almost surely. For a test function {% raw %}<span class="math inline">\(H\)</span>{% endraw %} bounded by one and with Lipschitz constant one, the first approximation error is at most</p>

{% raw %}<div class="math display">\[\mathbb E^*|H(X_n)-H(X_n\circ\pi_\delta)|\le\varepsilon+2P^*(\|X_n-X_n\circ\pi_\delta\|_\infty&gt;\varepsilon).\]</div>{% endraw %}

<p>The corresponding limit error has the same bound. First pass {% raw %}<span class="math inline">\(n\to\infty\)</span>{% endraw %}, then {% raw %}<span class="math inline">\(\delta\downarrow0\)</span>{% endraw %}, and finally {% raw %}<span class="math inline">\(\varepsilon\downarrow0\)</span>{% endraw %}. This proves convergence for these test functions; the tight-limit characterization extends it to bounded continuous tests. The existence and tightness construction, and the converse implication, are supplied by Wellner’s Chapter 1, Theorem 2.1, cited above.</p>
<p>These definitions let us state the desired form of empirical-process convergence. In the setup above, we say {% raw %}<span class="math inline">\(\mathcal F\)</span>{% endraw %} is <em>{% raw %}<span class="math inline">\(\mathbf P\,\,\!\!\)</span>{% endraw %}-Donsker</em> if {% raw %}<span class="math inline">\(\{\mathbb G_n f : f \in \mathcal F\} \xrightarrow{d} T\)</span>{% endraw %}, where {% raw %}<span class="math inline">\(T\)</span>{% endraw %} is a tight random element in {% raw %}<span class="math inline">\(\ell^\infty (\mathcal F)\)</span>{% endraw %}. In other words, an empirical process maps from an underlying probability space to {% raw %}<span class="math inline">\(\ell^\infty (\mathcal F)\)</span>{% endraw %}, i.e. its sample paths are bounded. And, if some functions {% raw %}<span class="math inline">\(f_1, \dots, f_m \in \mathcal F\)</span>{% endraw %} are such that {% raw %}<span class="math inline">\(P f_i^2 &lt; \infty\)</span>{% endraw %} for all {% raw %}<span class="math inline">\(i \in \{1, \dots, m\}\)</span>{% endraw %}, we have </p>

{% raw %}<div class="math display">\[\begin{aligned}
    (\mathbb G_n f_1, \dots, \mathbb G_n f_m) \xrightarrow{d} (\mathbb G_P f_1, \dots, \mathbb G_P f_m) ~,
\end{aligned}\]</div>{% endraw %}
<p> where the limiting random vector follows a normal distribution with mean zero and variance given by {% raw %}<span class="math inline">\(\operatorname{Cov}(\mathbb G_P f_i,\mathbb G_P f_j)=P(f_if_j)-(Pf_i)(Pf_j)\)</span>{% endraw %}. We say a stochastic process {% raw %}<span class="math inline">\(\mathbb G_P\)</span>{% endraw %} is <em>Gaussian</em> if, for all {% raw %}<span class="math inline">\(f_1, \dots, f_m \in \mathcal F\)</span>{% endraw %}, {% raw %}<span class="math inline">\((\mathbb G_P f_1, \dots, \mathbb G_P f_m)\)</span>{% endraw %} is multivariate normal.</p>

<p>From Theorem <a href="#thm:tight-random-element-iff-result" data-reference-type="ref" data-reference="thm:tight-random-element-iff-result">1</a>, we can easily deduce the following.</p>

<div id="thm:tight-random-element-iff-result-for-functions" class="theorem" data-note-number="2" data-note-kind="Theorem">
<p><strong>Theorem 2</strong>.  Let {% raw %}<span class="math inline">\(\mathcal F\)</span>{% endraw %} denote the class of real-valued, measurable functions {% raw %}<span class="math inline">\(f: \mathscr X \to \mathbb R\)</span>{% endraw %}, such that {% raw %}<span class="math inline">\(\mathbf P\,\,\!\!f^2 &lt; \infty\)</span>{% endraw %} for all {% raw %}<span class="math inline">\(f \in \mathcal F\)</span>{% endraw %}. Suppose {% raw %}<span class="math inline">\(\sup_{f \in \mathcal F} |f - \mathbf P\,\,\!\!f| &lt; \infty\)</span>{% endraw %} for all {% raw %}<span class="math inline">\(x \in \mathscr X\)</span>{% endraw %}. Then, {% raw %}<span class="math inline">\(\{\mathbb G_n f : f \in \mathcal F\}\)</span>{% endraw %} converges weakly to a tight random element if and only if there exists a semi-metric {% raw %}<span class="math inline">\(d\)</span>{% endraw %} on {% raw %}<span class="math inline">\(\mathcal F\)</span>{% endraw %} such that {% raw %}<span class="math inline">\((\mathcal F, d)\)</span>{% endraw %} is totally bounded, and if, for all {% raw %}<span class="math inline">\(\varepsilon &gt; 0\)</span>{% endraw %}, the following asymptotic stochastic equicontinuity condition is satisfied: </p>

{% raw %}<div class="math display">\[\begin{aligned}
        \lim\limits_{\delta \to 0} \limsup_{n\to\infty} \mathbf P\,\,\!\!^* \left( \sup_{f,g \in \mathcal F : d(f,g) &lt; \delta} |\mathbb G_n (f - g)| &gt; \varepsilon \right) = 0 ~.
    
\end{aligned}\]</div>{% endraw %}
</div>
<p>To verify Theorem 2 directly from this criterion, take any {% raw %}<span class="math inline">\(f_1,\ldots,f_m\)</span>{% endraw %} and coefficients {% raw %}<span class="math inline">\(a_1,\ldots,a_m\)</span>{% endraw %}. The variable {% raw %}<span class="math inline">\(\sum_j a_j(f_j(X)-Pf_j)\)</span>{% endraw %} has finite variance, so the ordinary central limit theorem applies to its empirical average. Cramér–Wold therefore gives the displayed Gaussian vector and its covariance. The pointwise bound {% raw %}<span class="math inline">\(H(x)=\sup_f|f(x)-Pf|&lt;\infty\)</span>{% endraw %} ensures {% raw %}<span class="math inline">\(\|\mathbb G_n\|_{\mathcal F}\le n^{-1/2}\sum_i H(X_i)&lt;\infty\)</span>{% endraw %}; measurability of this envelope is not needed for that pathwise assertion. The two remaining conditions are exactly total boundedness and the displayed equicontinuity condition. In particular, being continuous as an individual function does not by itself make a class Donsker: the size of the entire class matters.</p>
<p>A <em>{% raw %}<span class="math inline">\(\mathbf P\,\,\!\!\)</span>{% endraw %}-Donsker class</em> deserves a close study because not all random elements are tight, and it is unclear that this condition is satisfied for classes of measurable functions we might be interested in (for example, for the class of continuous functions). The next two entropy criteria give sufficient conditions for a {% raw %}<span class="math inline">\(\mathbf P\,\,\!\!\)</span>{% endraw %}-Donsker class, using the tools we have discussed so far.</p>

<div id="thm:donsker-bracketing-entropy" class="theorem" data-note-number="3" data-note-kind="Theorem">
<p><strong>Theorem 3</strong> (Donsker).  Let {% raw %}<span class="math inline">\(\mathcal F\)</span>{% endraw %} be the class of measurable functions with square-integrable envelope function {% raw %}<span class="math inline">\(F\)</span>{% endraw %}. Suppose {% raw %}<span class="math inline">\(J_{[\:]} (1, \mathcal F, \lVert \cdot \rVert_{\mathbf P\,\,\!\!, 2}) &lt; \infty\)</span>{% endraw %}. Then, {% raw %}<span class="math inline">\(\mathcal F\)</span>{% endraw %} is {% raw %}<span class="math inline">\(\mathbf P\,\,\!\!\)</span>{% endraw %}-Donsker.</p>

</div>
<div class="proof">
<p><em>Proof.</em> Use the {% raw %}<span class="math inline">\(L^2(P)\)</span>{% endraw %} distance {% raw %}<span class="math inline">\(d(f,g)=\|f-g\|_{P,2}\)</span>{% endraw %}. Finiteness of the bracketing integral implies that every positive-radius bracketing number is finite: an infinite value at a positive radius would force the integral below that radius to diverge. Choosing one function from each nonempty bracket gives a finite cover, so {% raw %}<span class="math inline">\((\mathcal F,d)\)</span>{% endraw %} is totally bounded. We use outer expectations for suprema when needed, as permitted in the maximal inequality.</p>

<p>We need control of differences between nearby functions. Write {% raw %}<span class="math inline">\(\mathcal G=\mathcal F-\mathcal F\)</span>{% endraw %}. If {% raw %}<span class="math inline">\([l_i,u_i]\)</span>{% endraw %}, {% raw %}<span class="math inline">\(1\le i\le N\)</span>{% endraw %}, are brackets of {% raw %}<span class="math inline">\(L^2(P)\)</span>{% endraw %} width at most {% raw %}<span class="math inline">\(\varepsilon/2\)</span>{% endraw %}, then the {% raw %}<span class="math inline">\(N^2\)</span>{% endraw %} brackets</p>

{% raw %}<div class="math display">\[[l_i-u_j,u_i-l_j],\qquad 1\le i,j\le N,\]</div>{% endraw %}

<p>cover {% raw %}<span class="math inline">\(\mathcal G\)</span>{% endraw %}. Their widths are {% raw %}<span class="math inline">\((u_i-l_i)+(u_j-l_j)\)</span>{% endraw %}, with norm at most {% raw %}<span class="math inline">\(\varepsilon\)</span>{% endraw %}. Thus</p>

{% raw %}<div class="math display">\[N_{[\:]}(\varepsilon,\mathcal G,L^2(P))\le
N_{[\:]}(\varepsilon/2,\mathcal F\cup\{0\},L^2(P))^2.\]</div>{% endraw %}

<p>The envelope of {% raw %}<span class="math inline">\(\mathcal G\)</span>{% endraw %} is {% raw %}<span class="math inline">\(G=2F\)</span>{% endraw %}, which is square-integrable. With the convention {% raw %}<span class="math inline">\(\operatorname{Log}x=\max(1,\log x)\)</span>{% endraw %} used in the bracketing integral, the preceding bound gives</p>

{% raw %}<div class="math display">\[J_{[\:]}(\delta,\mathcal G,L^2(P))\le
2\sqrt2\,J_{[\:]}(\delta/2,\mathcal F,L^2(P))\longrightarrow0
\quad(\delta\downarrow0).\]</div>{% endraw %}

<p>Now put {% raw %}<span class="math inline">\(\mathcal G_\delta=\{f-g:f,g\in\mathcal F,\ \|f-g\|_{P,2}&lt;\delta\}\)</span>{% endraw %}. Every member has second moment below {% raw %}<span class="math inline">\(\delta^2\)</span>{% endraw %}. Its bracketing numbers are finite, so</p>

{% raw %}<div class="math display">\[a_\delta=\frac{\delta}{\sqrt{\operatorname{Log}N_{[\:]}(\delta,\mathcal G_\delta\cup\{0\},L^2(P))}}&gt;0.\]</div>{% endraw %}

<p>Apply Theorem <a href="{% post_url 2022-10-15-maximal-inequalities-via-uniform-entropy-and-bracketing %}#thm:maximal-inequality-bracketing-integral-prelim-behaviour" data-reference-type="ref" data-reference="thm:maximal-inequality-bracketing-integral-prelim-behaviour">6</a> with radius {% raw %}<span class="math inline">\(\delta\)</span>{% endraw %} and envelope {% raw %}<span class="math inline">\(G\)</span>{% endraw %}:</p>

{% raw %}<div class="math display">\[\mathbb E^*\|\mathbb G_n\|_{\mathcal G_\delta}\lesssim
J_{[\:]}(\delta,\mathcal G_\delta,L^2(P))
+\sqrt n\,P[G\mathbf1\{G&gt;\sqrt n\,a_\delta\}].\]</div>{% endraw %}

<p>For each fixed positive {% raw %}<span class="math inline">\(\delta\)</span>{% endraw %}, the tail term tends to zero, since</p>

{% raw %}<div class="math display">\[\sqrt n\,P[G\mathbf1\{G&gt;\sqrt n\,a_\delta\}]\le
a_\delta^{-1}P[G^2\mathbf1\{G&gt;\sqrt n\,a_\delta\}]\longrightarrow0.\]</div>{% endraw %}

<p>The limit follows from {% raw %}<span class="math inline">\(PG^2&lt;\infty\)</span>{% endraw %}. First let {% raw %}<span class="math inline">\(n\)</span>{% endraw %} tend to infinity and then let {% raw %}<span class="math inline">\(\delta\)</span>{% endraw %} decrease to zero. The entropy bound above yields</p>

{% raw %}<div class="math display">\[\lim_{\delta\downarrow0}\limsup_{n\to\infty}\mathbb E^*\|\mathbb G_n\|_{\mathcal G_\delta}=0.\]</div>{% endraw %}

<p>Markov's inequality now gives asymptotic stochastic equicontinuity in {% raw %}<span class="math inline">\(d\)</span>{% endraw %}. The envelope supplies finite second moments and sample boundedness, and the multivariate central limit theorem gives convergence of each finite collection of coordinates. Theorem <a href="#thm:tight-random-element-iff-result-for-functions" data-reference-type="ref" data-reference="thm:tight-random-element-iff-result-for-functions">2</a> therefore proves that {% raw %}<span class="math inline">\(\mathcal F\)</span>{% endraw %} is {% raw %}<span class="math inline">\(P\)</span>{% endraw %}-Donsker. ◻</p>

</div>
<p>We can also characterize a {% raw %}<span class="math inline">\(\mathbf P\,\,\!\!\)</span>{% endraw %}-Donsker class via uniform covering numbers.</p>

<div id="thm:donsker-uniform-covering" class="theorem" data-note-number="4" data-note-kind="Theorem">
<p><strong>Theorem 4</strong> (Donsker).  Let {% raw %}<span class="math inline">\(\mathcal F\)</span>{% endraw %} be a class of pointwise measurable functions with a measurable envelope function {% raw %}<span class="math inline">\(F\)</span>{% endraw %}. Suppose {% raw %}<span class="math inline">\(\mathbf P\,\,\!\!F^2 &lt; \infty\)</span>{% endraw %} and {% raw %}<span class="math inline">\(J(1, \mathcal F, F) &lt; \infty\)</span>{% endraw %}. Then, {% raw %}<span class="math inline">\(\mathcal F\)</span>{% endraw %} is {% raw %}<span class="math inline">\(\mathbf P\,\,\!\!\)</span>{% endraw %}-Donsker.</p>

</div>
<div class="proof">
<p><em>Proof of Theorem <a href="#thm:donsker-uniform-covering" data-reference-type="ref" data-reference="thm:donsker-uniform-covering">4</a>.</em> Set {% raw %}<span class="math inline">\(A=\|F\|_{P,2}\)</span>{% endraw %}. If {% raw %}<span class="math inline">\(A=0\)</span>{% endraw %}, the envelope makes the empirical process zero almost surely, so assume {% raw %}<span class="math inline">\(A&gt;0\)</span>{% endraw %}. We again use the semimetric {% raw %}<span class="math inline">\(d(f,g)=\|f-g\|_{P,2}\)</span>{% endraw %}. There are two requirements: finite covers in this population metric, and control of the empirical process on small {% raw %}<span class="math inline">\(d\)</span>{% endraw %}-balls.</p>

<p>First fix {% raw %}<span class="math inline">\(0&lt;\varepsilon&lt;1\)</span>{% endraw %}, and take any finite family {% raw %}<span class="math inline">\(f_1,\ldots,f_m\)</span>{% endraw %} whose pairwise {% raw %}<span class="math inline">\(d\)</span>{% endraw %}-distances exceed {% raw %}<span class="math inline">\(\varepsilon A\)</span>{% endraw %}. The law of large numbers applies simultaneously to the finitely many squared differences and to {% raw %}<span class="math inline">\(F^2\)</span>{% endraw %}. Thus there is a finitely supported empirical probability measure {% raw %}<span class="math inline">\(Q\)</span>{% endraw %} for which</p>

{% raw %}<div class="math display">\[Q(f_i-f_j)^2&gt;\frac12\varepsilon^2A^2\quad(i\ne j),\qquad
\frac12A^2&lt;QF^2&lt;2A^2.\]</div>{% endraw %}

<p>These functions are therefore separated by more than {% raw %}<span class="math inline">\((\varepsilon/2)\|F\|_{Q,2}\)</span>{% endraw %} in {% raw %}<span class="math inline">\(L^2(Q)\)</span>{% endraw %}. By the covering–packing comparison in Lemma <a href="{% post_url 2022-09-20-symmetrization-bracketing-and-covering-numbers %}#lem:covering-packing-comparisons" data-reference-type="ref" data-reference="lem:covering-packing-comparisons">8</a>,</p>

{% raw %}<div class="math display">\[m\le N\bigl((\varepsilon/4)\|F\|_{Q,2},\mathcal F\cup\{0\},L^2(Q)\bigr)
\le\sup_R N\bigl((\varepsilon/4)\|F\|_{R,2},\mathcal F\cup\{0\},L^2(R)\bigr)&lt;\infty.\]</div>{% endraw %}

<p>The last bound is independent of the selected family and follows from {% raw %}<span class="math inline">\(J(1,\mathcal F,F)&lt;\infty\)</span>{% endraw %}. A greedy {% raw %}<span class="math inline">\(\varepsilon A\)</span>{% endraw %}-packing must consequently terminate; a maximal one is a cover. This proves total boundedness without assuming in advance that a largest finite packing exists. Only second moments were used.</p>

<p>For equicontinuity, let {% raw %}<span class="math inline">\(\mathcal G_\delta=\{f-g:f,g\in\mathcal F,\ \|f-g\|_{P,2}&lt;\delta\}\)</span>{% endraw %}, with envelope {% raw %}<span class="math inline">\(2F\)</span>{% endraw %}. The strict population-norm restriction is useful for measurability: pointwise approximations from a countable subclass converge also in {% raw %}<span class="math inline">\(L^2(P)\)</span>{% endraw %}, by domination with {% raw %}<span class="math inline">\(F\)</span>{% endraw %}, so they eventually remain in {% raw %}<span class="math inline">\(\mathcal G_\delta\)</span>{% endraw %}. Hence this difference class is pointwise measurable; outer expectations give the same bounds.</p>

<p>A cover of {% raw %}<span class="math inline">\(\mathcal F\cup\{0\}\)</span>{% endraw %} gives a cover of its differences by taking every pair of centers. If centers are required to lie in {% raw %}<span class="math inline">\(\mathcal G_\delta\)</span>{% endraw %}, select one member from each nonempty covering cell; this at most doubles the radius. The following bound is valid with either convention:</p>

<span id="eq:finite-uniform-covering-entropy"></span>
{% raw %}<div class="math display">\[\sup_R N(\varepsilon\|2F\|_{R,2},\mathcal G_\delta\cup\{0\},L^2(R))
\le\left[\sup_R N\bigl((\varepsilon/2)\|F\|_{R,2},\mathcal F\cup\{0\},L^2(R)\bigr)\right]^2.\tag{2}\]</div>{% endraw %}

<p>Write {% raw %}<span class="math inline">\(J_F(s)=J(s,\mathcal F,F)\)</span>{% endraw %} and {% raw %}<span class="math inline">\(J_\delta(s)=J(s,\mathcal G_\delta,2F)\)</span>{% endraw %}. Taking square roots in <a href="#eq:finite-uniform-covering-entropy" data-reference-type="eqref" data-reference="eq:finite-uniform-covering-entropy">(2)</a> and integrating gives</p>

{% raw %}<div class="math display">\[J_\delta(s)\le2\sqrt2\,J_F(s/2).\]</div>{% endraw %}

<p>The conditional bound in Theorem <a href="{% post_url 2022-10-15-maximal-inequalities-via-uniform-entropy-and-bracketing %}#thm:maximal-inequality-uniform-entropy" data-reference-type="ref" data-reference="thm:maximal-inequality-uniform-entropy">1</a> involves a random empirical radius. We use its local variance refinement, Theorem <a href="{% post_url 2022-10-15-maximal-inequalities-via-uniform-entropy-and-bracketing %}#thm:maximal-inequality-uniform-entropy-integral-uniform-boundedness" data-reference-type="ref" data-reference="thm:maximal-inequality-uniform-entropy-integral-uniform-boundedness">4</a>, to express the bound in terms of the population radius. For {% raw %}<span class="math inline">\(0&lt;\delta\le2A\)</span>{% endraw %}, put {% raw %}<span class="math inline">\(\eta=\delta/(2A)\)</span>{% endraw %} and {% raw %}<span class="math inline">\(M_n=(\mathbb E\max_{i\le n}(2F(X_i))^2)^{1/2}\)</span>{% endraw %}. Every {% raw %}<span class="math inline">\(g\in\mathcal G_\delta\)</span>{% endraw %} satisfies {% raw %}<span class="math inline">\(Pg^2&lt;\delta^2\)</span>{% endraw %}, while {% raw %}<span class="math inline">\(\|2F\|_{P,2}=2A\)</span>{% endraw %}. The theorem gives</p>

<span id="eq:donsker-uniform-covering-final-inequality"></span>
{% raw %}<div class="math display">\[\mathbb E^*\|\mathbb G_n\|_{\mathcal G_\delta}\lesssim
2A\,J_\delta(\eta)+\frac{M_nJ_\delta(\eta)^2}{\eta^2\sqrt n}.\tag{3}\]</div>{% endraw %}

<p>It remains to check that the second term disappears for fixed {% raw %}<span class="math inline">\(\delta\)</span>{% endraw %}. For each {% raw %}<span class="math inline">\(K&gt;0\)</span>{% endraw %}, the elementary maximum bound gives</p>

{% raw %}<div class="math display">\[\frac1n\mathbb E\max_{i\le n}(2F(X_i))^2
\le\frac Kn+P[4F^2\mathbf1\{4F^2&gt;K\}].\]</div>{% endraw %}

<p>Let {% raw %}<span class="math inline">\(n\)</span>{% endraw %} tend to infinity and then {% raw %}<span class="math inline">\(K\)</span>{% endraw %} tend to infinity. Since {% raw %}<span class="math inline">\(PF^2&lt;\infty\)</span>{% endraw %}, this proves {% raw %}<span class="math inline">\(M_n/\sqrt n\to0\)</span>{% endraw %}. Consequently <a href="#eq:donsker-uniform-covering-final-inequality" data-reference-type="eqref" data-reference="eq:donsker-uniform-covering-final-inequality">(3)</a> and the entropy comparison imply</p>

{% raw %}<div class="math display">\[\limsup_{n\to\infty}\mathbb E^*\|\mathbb G_n\|_{\mathcal G_\delta}\lesssim
A\,J_F\!\left(\frac{\delta}{4A}\right)\longrightarrow0
\qquad(\delta\downarrow0).\]</div>{% endraw %}

<p>Markov's inequality proves asymptotic stochastic equicontinuity. Together with total boundedness and the finite-dimensional central limit theorem, Theorem <a href="#thm:tight-random-element-iff-result-for-functions" data-reference-type="ref" data-reference="thm:tight-random-element-iff-result-for-functions">2</a> gives the conclusion. The order of limits is {% raw %}<span class="math inline">\(n\to\infty\)</span>{% endraw %} at each fixed positive {% raw %}<span class="math inline">\(\delta\)</span>{% endraw %}, followed by {% raw %}<span class="math inline">\(\delta\downarrow0\)</span>{% endraw %}. ◻</p>

</div>

<nav class="note-related" aria-label="Related notes"><p>Related notes: <a href="{% post_url 2022-10-15-maximal-inequalities-via-uniform-entropy-and-bracketing %}">Maximal Inequalities via Uniform Entropy and Bracketing</a>; <a href="{% post_url 2022-09-20-symmetrization-bracketing-and-covering-numbers %}">Symmetrization, Bracketing, and Covering Numbers</a>.</p></nav>

<nav class="note-series" aria-label="Notes in this series"><p>Previous: <a href="{% post_url 2022-11-08-vc-dimension-and-uniform-entropy-bounds %}">VC Dimension and Uniform Entropy Bounds</a> · Next: <a href="{% post_url 2022-11-19-gaussian-process %}">Gaussian Process</a></p></nav>

</div>
