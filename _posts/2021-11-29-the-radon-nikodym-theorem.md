---
layout: "post"
title: "The Radon-Nikodym Theorem"
date: "2021-11-29"
tags: ["probability theory", "statistics"]
excerpt: "Hahn and Jordan decomposition, the construction and uniqueness of Radon–Nikodym densities, and the Lebesgue decomposition of sigma-finite measures."
note_series: "Probability and statistics"
note_source: "assets/notes/Overleaf Projects (32 items)/Statistics and Prob Theory - Notes/stats.tex"
---

<div class="note-content" markdown="0">

<div id="the-radon-nikodym-theorem" data-note-section="title">

</div>
<p>Let {% raw %}<span class="math inline">\(P\)</span>{% endraw %} and {% raw %}<span class="math inline">\(Q\)</span>{% endraw %} be measures on {% raw %}<span class="math inline">\((\Omega,\mathscr F)\)</span>{% endraw %}. If a nonnegative measurable function {% raw %}<span class="math inline">\(f\)</span>{% endraw %} satisfies</p>

{% raw %}<div class="math display">\[
Q(A)=\int_A f\,dP,\qquad A\in\mathscr F,
\]</div>{% endraw %}
<p>then every {% raw %}<span class="math inline">\(P\)</span>{% endraw %}-null set is {% raw %}<span class="math inline">\(Q\)</span>{% endraw %}-null. The Radon–Nikodym theorem proves the converse when both measures are {% raw %}<span class="math inline">\(\sigma\)</span>{% endraw %}-finite. The density is unique up to {% raw %}<span class="math inline">\(P\)</span>{% endraw %}-null sets. Its construction also gives the Lebesgue decomposition of {% raw %}<span class="math inline">\(Q\)</span>{% endraw %} into an absolutely continuous measure and a singular measure.</p>

<p>For finite measures, we construct {% raw %}<span class="math inline">\(f\)</span>{% endraw %} by maximizing {% raw %}<span class="math inline">\(\int g\,dP\)</span>{% endraw %} over nonnegative functions satisfying {% raw %}<span class="math inline">\(gP\leq Q\)</span>{% endraw %}. Hahn’s decomposition then shows that {% raw %}<span class="math inline">\(Q-fP\)</span>{% endraw %} is singular. The <a href="#rn-appendix">appendix</a> proves the signed-measure results, extends the construction to {% raw %}<span class="math inline">\(\sigma\)</span>{% endraw %}-finite measures, and establishes uniqueness.</p>

<h2 data-note-section="1" id="rn-setting">1. Measures, densities, and null sets</h2>
<p>Throughout, {% raw %}<span class="math inline">\(\mathscr F\)</span>{% endraw %} is a {% raw %}<span class="math inline">\(\sigma\)</span>{% endraw %}-algebra on {% raw %}<span class="math inline">\(\Omega\)</span>{% endraw %}, and all sets and functions under discussion are measurable. A positive measure takes values in {% raw %}<span class="math inline">\([0,\infty]\)</span>{% endraw %}, assigns zero to the empty set, and is countably additive. It is finite if {% raw %}<span class="math inline">\(P(\Omega)&lt;\infty\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(\sigma\)</span>{% endraw %}-finite if {% raw %}<span class="math inline">\(\Omega\)</span>{% endraw %} has a countable cover by sets of finite {% raw %}<span class="math inline">\(P\)</span>{% endraw %}-measure. The notation {% raw %}<span class="math inline">\(P,Q\)</span>{% endraw %} does not require either measure to be a probability measure. Nonnegative integrals may equal infinity; we use the convention {% raw %}<span class="math inline">\(0\cdot\infty=0\)</span>{% endraw %}.</p>

<p>For a nonnegative measurable {% raw %}<span class="math inline">\(f\)</span>{% endraw %}, write</p>

{% raw %}<div class="math display">\[
(fP)(A)\triangleq\int_A f\,dP.
\]</div>{% endraw %}
<p>This defines a positive measure: for disjoint {% raw %}<span class="math inline">\(A_n\)</span>{% endraw %}, monotone convergence applied to {% raw %}<span class="math inline">\(f\mathbf1_{\bigcup_{n=1}^k A_n}\)</span>{% endraw %} gives</p>

{% raw %}<div class="math display">\[
(fP)\left(\bigcup_{n=1}^\infty A_n\right)
=\lim_{k\to\infty}\sum_{n=1}^k\int_{A_n}f\,dP
=\sum_{n=1}^\infty(fP)(A_n).
\]</div>{% endraw %}
<p>The measure {% raw %}<span class="math inline">\(fP\)</span>{% endraw %} is finite exactly when {% raw %}<span class="math inline">\(f\in L^1(P)\)</span>{% endraw %}, and it is a probability measure exactly when {% raw %}<span class="math inline">\(\int_\Omega f\,dP=1\)</span>{% endraw %}.</p>

<p>We say that {% raw %}<span class="math inline">\(Q\)</span>{% endraw %} is <em>absolutely continuous with respect to</em> {% raw %}<span class="math inline">\(P\)</span>{% endraw %}, written {% raw %}<span class="math inline">\(Q\ll P\)</span>{% endraw %}, if</p>

{% raw %}<div class="math display">\[
P(A)=0\quad\Longrightarrow\quad Q(A)=0
\qquad\text{for every }A\in\mathscr F.
\]</div>{% endraw %}
<p>The identity {% raw %}<span class="math inline">\(Q=fP\)</span>{% endraw %} implies {% raw %}<span class="math inline">\(Q\ll P\)</span>{% endraw %} because the integral of a nonnegative function over a null set is zero. This implication does not require finiteness of either measure.</p>

<p>The measures {% raw %}<span class="math inline">\(P\)</span>{% endraw %} and {% raw %}<span class="math inline">\(Q\)</span>{% endraw %} are <em>mutually singular</em>, written {% raw %}<span class="math inline">\(Q\perp P\)</span>{% endraw %}, if some {% raw %}<span class="math inline">\(N\in\mathscr F\)</span>{% endraw %} satisfies</p>

{% raw %}<div class="math display">\[
P(N)=0,\qquad Q(N^c)=0.
\]</div>{% endraw %}
<p>Thus {% raw %}<span class="math inline">\(Q\)</span>{% endraw %} is concentrated on a {% raw %}<span class="math inline">\(P\)</span>{% endraw %}-null set. The definition uses only measurable sets; no topology on {% raw %}<span class="math inline">\(\Omega\)</span>{% endraw %} is assumed. If a positive measure {% raw %}<span class="math inline">\(R\)</span>{% endraw %} is both absolutely continuous and singular with respect to {% raw %}<span class="math inline">\(P\)</span>{% endraw %}, then {% raw %}<span class="math inline">\(R=0\)</span>{% endraw %}: singularity gives such an {% raw %}<span class="math inline">\(N\)</span>{% endraw %}, absolute continuity gives {% raw %}<span class="math inline">\(R(N)=0\)</span>{% endraw %}, and additivity gives {% raw %}<span class="math inline">\(R(\Omega)=0\)</span>{% endraw %}.</p>

<h2 data-note-section="2" id="rn-signed-measures">2. Finite signed measures and Hahn decomposition</h2>
<p>A <em>finite signed measure</em> is a countably additive function {% raw %}<span class="math inline">\(\nu:\mathscr F\to\mathbb R\)</span>{% endraw %} with finite total variation:</p>

{% raw %}<div class="math display">\[
V(\nu)\triangleq\sup_{(A_i)_{i=1}^k}\sum_{i=1}^k|\nu(A_i)|&lt;\infty,
\]</div>{% endraw %}
<p>where the supremum runs over finite measurable partitions of {% raw %}<span class="math inline">\(\Omega\)</span>{% endraw %}. If {% raw %}<span class="math inline">\(P,Q\)</span>{% endraw %} are finite positive measures, then {% raw %}<span class="math inline">\(\nu=Q-P\)</span>{% endraw %} is a finite signed measure, since every such partition satisfies</p>

{% raw %}<div class="math display">\[
\sum_{i=1}^k|Q(A_i)-P(A_i)|
\leq Q(\Omega)+P(\Omega).
\]</div>{% endraw %}
<div id="result-1" class="lemma" data-note-number="1" data-note-kind="Lemma">
<p><strong>Lemma 1</strong>. (Continuity on monotone sequences.) Let {% raw %}<span class="math inline">\(\nu\)</span>{% endraw %} be a finite signed measure. If {% raw %}<span class="math inline">\(A_n\uparrow A\)</span>{% endraw %} or {% raw %}<span class="math inline">\(A_n\downarrow A\)</span>{% endraw %}, then {% raw %}<span class="math inline">\(\nu(A_n)\to\nu(A)\)</span>{% endraw %}.</p>

</div>
<p>The proof in <a href="#rn-continuity-proof">Appendix 6.1</a> uses countable additivity and finite total variation. In particular, it does not assume that a signed measure is monotone under set inclusion.</p>

<p>A set {% raw %}<span class="math inline">\(H\)</span>{% endraw %} is <em>positive for</em> {% raw %}<span class="math inline">\(\nu\)</span>{% endraw %} if {% raw %}<span class="math inline">\(\nu(B)\geq0\)</span>{% endraw %} for every measurable {% raw %}<span class="math inline">\(B\subseteq H\)</span>{% endraw %}. A negative set is defined by the reverse inequality. The condition {% raw %}<span class="math inline">\(\nu(H)\geq0\)</span>{% endraw %} alone does not make {% raw %}<span class="math inline">\(H\)</span>{% endraw %} positive, since cancellation can conceal a subset of negative measure.</p>

<div id="thm:hahn-decomp" class="theorem" data-note-number="2" data-note-kind="Theorem">
<p><strong>Theorem 2</strong>. (Hahn decomposition.) For a finite signed measure {% raw %}<span class="math inline">\(\nu\)</span>{% endraw %}, there is a measurable partition {% raw %}<span class="math inline">\(\Omega=A^+\sqcup A^-\)</span>{% endraw %} such that {% raw %}<span class="math inline">\(A^+\)</span>{% endraw %} is positive and {% raw %}<span class="math inline">\(A^-\)</span>{% endraw %} is negative for {% raw %}<span class="math inline">\(\nu\)</span>{% endraw %}.</p>

</div>
<p>The <a href="#rn-hahn-proof">proof</a> constructs a set {% raw %}<span class="math inline">\(A^+\)</span>{% endraw %} attaining {% raw %}<span class="math inline">\(\sup_{A\in\mathscr F}\nu(A)\)</span>{% endraw %}. Removing a negative subset of {% raw %}<span class="math inline">\(A^+\)</span>{% endraw %} or adjoining a positive subset of its complement would increase its measure, which proves the two sign conditions.</p>

<div id="rn-jordan">

</div>
<p><strong>Jordan decomposition.</strong> Given a Hahn partition, define</p>

{% raw %}<span id="eq:upper-var"></span><span id="eq:lower-var"></span><span id="eq:jordan-decomp"></span><div class="math display">\[
\begin{aligned}
\nu^+(A)&amp;\triangleq\nu(A\cap A^+),\\
\nu^-(A)&amp;\triangleq-\nu(A\cap A^-),\\
\nu(A)&amp;=\nu^+(A)-\nu^-(A).
\end{aligned}

\tag{1}\]</div>{% endraw %}
<p>Then {% raw %}<span class="math inline">\(\nu^+\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\nu^-\)</span>{% endraw %} are finite positive measures with {% raw %}<span class="math inline">\(\nu^+\perp\nu^-\)</span>{% endraw %}. They are the unique mutually singular positive measures whose difference is {% raw %}<span class="math inline">\(\nu\)</span>{% endraw %}. The total variation measure {% raw %}<span class="math inline">\(|\nu|\triangleq\nu^++\nu^-\)</span>{% endraw %} satisfies</p>

{% raw %}<div class="math display">\[
|\nu|(A)=\sup_{(B_i)_{i=1}^k}\sum_{i=1}^k|\nu(B_i)|,
\]</div>{% endraw %}
<p>where the partitions are of {% raw %}<span class="math inline">\(A\)</span>{% endraw %}. In particular, {% raw %}<span class="math inline">\(|\nu|(\Omega)=V(\nu)\)</span>{% endraw %}.</p>

<p><a href="#rn-jordan-proof">Appendix 6.3</a> proves uniqueness and the partition formula. The Hahn partition can change on a {% raw %}<span class="math inline">\(|\nu|\)</span>{% endraw %}-null set; the measures {% raw %}<span class="math inline">\(\nu^+\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\nu^-\)</span>{% endraw %} are independent of that choice.</p>

<h2 data-note-section="3" id="rn-construction">3. Lebesgue decomposition and the density construction</h2>
<div id="thm:radon-nikodym" class="theorem" data-note-number="3" data-note-kind="Theorem">
<p><strong>Theorem 3</strong>. (Radon–Nikodym.) Let {% raw %}<span class="math inline">\(P,Q\)</span>{% endraw %} be {% raw %}<span class="math inline">\(\sigma\)</span>{% endraw %}-finite positive measures on {% raw %}<span class="math inline">\((\Omega,\mathscr F)\)</span>{% endraw %}, with {% raw %}<span class="math inline">\(Q\ll P\)</span>{% endraw %}. There is a nonnegative finite-valued measurable {% raw %}<span class="math inline">\(f\)</span>{% endraw %} such that</p>

{% raw %}<span id="eq:rn-density"></span><div class="math display">\[
Q(A)=\int_A f\,dP\qquad(A\in\mathscr F).

\tag{2}\]</div>{% endraw %}
<p>Any two densities agree {% raw %}<span class="math inline">\(P\)</span>{% endraw %}-almost everywhere. Their equivalence class is denoted by {% raw %}<span class="math inline">\(dQ/dP\)</span>{% endraw %} and called the Radon–Nikodym derivative.</p>

</div>
<div id="rn-lebesgue" class="theorem" data-note-number="4" data-note-kind="Theorem">
<p><strong>Theorem 4</strong>. (Lebesgue decomposition.) Let {% raw %}<span class="math inline">\(P,Q\)</span>{% endraw %} be {% raw %}<span class="math inline">\(\sigma\)</span>{% endraw %}-finite positive measures on {% raw %}<span class="math inline">\((\Omega,\mathscr F)\)</span>{% endraw %}. There is a unique pair of positive measures {% raw %}<span class="math inline">\(Q_{\mathrm{ac}},Q_{\mathrm{s}}\)</span>{% endraw %} such that</p>

{% raw %}<span id="eq:rn-lebesgue"></span><div class="math display">\[
Q=Q_{\mathrm{ac}}+Q_{\mathrm{s}},\qquad
Q_{\mathrm{ac}}\ll P,\qquad Q_{\mathrm{s}}\perp P.

\tag{3}\]</div>{% endraw %}
<p>Both components are {% raw %}<span class="math inline">\(\sigma\)</span>{% endraw %}-finite. There is a nonnegative finite-valued measurable {% raw %}<span class="math inline">\(f\)</span>{% endraw %} such that {% raw %}<span class="math inline">\(Q_{\mathrm{ac}}=fP\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(f\)</span>{% endraw %} is unique {% raw %}<span class="math inline">\(P\)</span>{% endraw %}-almost everywhere.</p>

</div>
<p>We first construct the decomposition for finite {% raw %}<span class="math inline">\(P,Q\)</span>{% endraw %}. Absolute continuity of {% raw %}<span class="math inline">\(Q\)</span>{% endraw %} is used only when deducing the Radon–Nikodym conclusion.</p>

<h3 data-note-section="3.1" id="rn-maximal-density">3.1. A density of maximal integral</h3>
<p>Consider the class</p>

{% raw %}<span id="eq:rn-admissible"></span><div class="math display">\[
\mathcal E\triangleq\left\{
 g:\Omega\to[0,\infty]\text{ measurable}:
 \int_A g\,dP\leq Q(A)\text{ for every }A\in\mathscr F
\right\}.

\tag{4}\]</div>{% endraw %}
<p>The condition is imposed on every measurable set. It ensures that {% raw %}<span class="math inline">\(Q-gP\)</span>{% endraw %} is a positive measure. The class contains zero, and each {% raw %}<span class="math inline">\(g\in\mathcal E\)</span>{% endraw %} has finite integral because {% raw %}<span class="math inline">\(\int_\Omega g\,dP\leq Q(\Omega)&lt;\infty\)</span>{% endraw %}.</p>

<p>For {% raw %}<span class="math inline">\(g,h\in\mathcal E\)</span>{% endraw %}, split an arbitrary {% raw %}<span class="math inline">\(A\)</span>{% endraw %} into the regions where each function is larger:</p>

{% raw %}<div class="math display">\[
\begin{aligned}
\int_A\max(g,h)\,dP
&amp;=\int_{A\cap\{g\geq h\}}g\,dP
 +\int_{A\cap\{g&lt;h\}}h\,dP\\
&amp;\leq Q(A\cap\{g\geq h\})+Q(A\cap\{g&lt;h\})
=Q(A).
\end{aligned}
\]</div>{% endraw %}
<p>Thus {% raw %}<span class="math inline">\(\mathcal E\)</span>{% endraw %} is closed under finite maxima. It is also closed under increasing limits: if {% raw %}<span class="math inline">\(g_n\in\mathcal E\)</span>{% endraw %} and {% raw %}<span class="math inline">\(g_n\uparrow g\)</span>{% endraw %}, monotone convergence gives</p>

{% raw %}<div class="math display">\[
\int_A g\,dP=\lim_{n\to\infty}\int_A g_n\,dP\leq Q(A)
\qquad(A\in\mathscr F).
\]</div>{% endraw %}
<p>Set</p>

{% raw %}<div class="math display">\[
\alpha\triangleq\sup_{g\in\mathcal E}\int_\Omega g\,dP
\leq Q(\Omega).
\]</div>{% endraw %}
<p>Choose {% raw %}<span class="math inline">\(g_n\in\mathcal E\)</span>{% endraw %} with {% raw %}<span class="math inline">\(\int g_n\,dP&gt;\alpha-2^{-n}\)</span>{% endraw %} and define</p>

{% raw %}<div class="math display">\[
f_n\triangleq\max(g_1,\ldots,g_n),\qquad
f\triangleq\lim_{n\to\infty}f_n.
\]</div>{% endraw %}
<p>The closure properties imply {% raw %}<span class="math inline">\(f_n,f\in\mathcal E\)</span>{% endraw %}. Since {% raw %}<span class="math inline">\(f\geq g_n\)</span>{% endraw %} for every {% raw %}<span class="math inline">\(n\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
\alpha-2^{-n}&lt;\int g_n\,dP\leq\int f\,dP\leq\alpha,
\]</div>{% endraw %}
<p>and hence {% raw %}<span class="math inline">\(\int f\,dP=\alpha\)</span>{% endraw %}. This integral is finite, so {% raw %}<span class="math inline">\(f&lt;\infty\)</span>{% endraw %} {% raw %}<span class="math inline">\(P\)</span>{% endraw %}-almost everywhere. Set {% raw %}<span class="math inline">\(f=0\)</span>{% endraw %} on the measurable null set where it is infinite; the change preserves all its integrals and membership in {% raw %}<span class="math inline">\(\mathcal E\)</span>{% endraw %}.</p>

<p>The maximizer also dominates each admissible {% raw %}<span class="math inline">\(g\)</span>{% endraw %} almost everywhere. Indeed, {% raw %}<span class="math inline">\(\max(f,g)\in\mathcal E\)</span>{% endraw %}, so</p>

{% raw %}<div class="math display">\[
0\leq\int(g-f)^+\,dP
=\int\max(f,g)\,dP-\int f\,dP
\leq\alpha-\alpha=0.
\]</div>{% endraw %}
<p>A nonnegative measurable function with zero integral vanishes almost everywhere: each set on which it is at least {% raw %}<span class="math inline">\(1/k\)</span>{% endraw %} has measure zero, and their countable union is its positive set. Therefore {% raw %}<span class="math inline">\(g\leq f\)</span>{% endraw %} {% raw %}<span class="math inline">\(P\)</span>{% endraw %}-almost everywhere. The exceptional set may depend on {% raw %}<span class="math inline">\(g\)</span>{% endraw %}.</p>

<h3 data-note-section="3.2" id="rn-residual">3.2. The residual measure is singular</h3>
<p>Define</p>

{% raw %}<span id="eq:rn-residual"></span><div class="math display">\[
R(A)\triangleq Q(A)-\int_A f\,dP.

\tag{5}\]</div>{% endraw %}
<p>Both terms are finite measures, so their difference is countably additive. The defining inequality for {% raw %}<span class="math inline">\(\mathcal E\)</span>{% endraw %} gives {% raw %}<span class="math inline">\(R(A)\geq0\)</span>{% endraw %} for every {% raw %}<span class="math inline">\(A\)</span>{% endraw %}. Thus {% raw %}<span class="math inline">\(R\)</span>{% endraw %} is a finite positive measure.</p>

<p>For each integer {% raw %}<span class="math inline">\(m\geq1\)</span>{% endraw %}, apply Hahn’s theorem to the finite signed measure {% raw %}<span class="math inline">\(R-m^{-1}P\)</span>{% endraw %}. Let {% raw %}<span class="math inline">\(H_m\)</span>{% endraw %} be a positive set in its Hahn partition. Then</p>

{% raw %}<div class="math display">\[
R(B)\geq m^{-1}P(B)\qquad(B\subseteq H_m),
\]</div>{% endraw %}
<p>while {% raw %}<span class="math inline">\(R(B)\leq m^{-1}P(B)\)</span>{% endraw %} for {% raw %}<span class="math inline">\(B\subseteq H_m^c\)</span>{% endraw %}. For every {% raw %}<span class="math inline">\(A\in\mathscr F\)</span>{% endraw %},</p>

{% raw %}<span id="eq:rn-increment"></span><div class="math display">\[
\begin{aligned}
\int_A\left(f+m^{-1}\mathbf1_{H_m}\right)\,dP
&amp;=\int_A f\,dP+m^{-1}P(A\cap H_m)\\
&amp;\leq\int_A f\,dP+R(A\cap H_m)\\
&amp;\leq\int_A f\,dP+R(A)=Q(A).
\end{aligned}

\tag{6}\]</div>{% endraw %}
<p>Consequently {% raw %}<span class="math inline">\(f+m^{-1}\mathbf1_{H_m}\in\mathcal E\)</span>{% endraw %}. Maximality of {% raw %}<span class="math inline">\(\alpha\)</span>{% endraw %} implies</p>

{% raw %}<div class="math display">\[
\alpha+m^{-1}P(H_m)
=\int\left(f+m^{-1}\mathbf1_{H_m}\right)\,dP
\leq\alpha,
\]</div>{% endraw %}
<p>so {% raw %}<span class="math inline">\(P(H_m)=0\)</span>{% endraw %}. Put {% raw %}<span class="math inline">\(N\triangleq\bigcup_{m\geq1}H_m\)</span>{% endraw %}. Countable subadditivity gives {% raw %}<span class="math inline">\(P(N)=0\)</span>{% endraw %}. Since {% raw %}<span class="math inline">\(N^c\subseteq H_m^c\)</span>{% endraw %} for every {% raw %}<span class="math inline">\(m\)</span>{% endraw %}, the negative-set inequality gives</p>

{% raw %}<div class="math display">\[
0\leq R(N^c)\leq m^{-1}P(N^c)\leq m^{-1}P(\Omega).
\]</div>{% endraw %}
<p>Letting {% raw %}<span class="math inline">\(m\to\infty\)</span>{% endraw %} yields {% raw %}<span class="math inline">\(R(N^c)=0\)</span>{% endraw %}. Hence {% raw %}<span class="math inline">\(R\perp P\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(Q=fP+R\)</span>{% endraw %} is the required decomposition in the finite case. <a href="#rn-sigma-finite-proof">Appendix 6.4</a> extends it to {% raw %}<span class="math inline">\(\sigma\)</span>{% endraw %}-finite measures; <a href="#rn-uniqueness-proof">Appendix 6.5</a> proves uniqueness of the components and density.</p>

<p>To deduce the Radon–Nikodym theorem, now assume {% raw %}<span class="math inline">\(Q\ll P\)</span>{% endraw %}. The decomposition gives {% raw %}<span class="math inline">\(0\leq Q_{\mathrm{s}}\leq Q\)</span>{% endraw %}, so {% raw %}<span class="math inline">\(Q_{\mathrm{s}}\ll P\)</span>{% endraw %}. Since {% raw %}<span class="math inline">\(Q_{\mathrm{s}}\perp P\)</span>{% endraw %} as well, {% raw %}<span class="math inline">\(Q_{\mathrm{s}}=0\)</span>{% endraw %}. Thus {% raw %}<span class="math inline">\(Q=fP\)</span>{% endraw %}, with the asserted uniqueness.</p>

<h2 data-note-section="4" id="rn-integration">4. Integration with respect to a density</h2>
<div id="result-4" class="proposition" data-note-number="5" data-note-kind="Proposition">
<p><strong>Proposition 5</strong>. (Change of measure.) Let {% raw %}<span class="math inline">\(P,Q\)</span>{% endraw %} be {% raw %}<span class="math inline">\(\sigma\)</span>{% endraw %}-finite positive measures with {% raw %}<span class="math inline">\(Q\ll P\)</span>{% endraw %}, and choose a nonnegative finite-valued version {% raw %}<span class="math inline">\(f\)</span>{% endraw %} of {% raw %}<span class="math inline">\(dQ/dP\)</span>{% endraw %}. For every nonnegative measurable {% raw %}<span class="math inline">\(h:\Omega\to[0,\infty]\)</span>{% endraw %} and every {% raw %}<span class="math inline">\(A\in\mathscr F\)</span>{% endraw %},</p>

{% raw %}<span id="eq:rn-integration"></span><div class="math display">\[
\int_A h\,dQ=\int_A hf\,dP,

\tag{7}\]</div>{% endraw %}
<p>with the convention {% raw %}<span class="math inline">\(0\cdot\infty=0\)</span>{% endraw %}. For real-valued measurable {% raw %}<span class="math inline">\(h\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
h\in L^1(Q)\quad\Longleftrightarrow\quad hf\in L^1(P),
\]</div>{% endraw %}
<p>and the same identity holds whenever these integrability conditions hold. In particular, {% raw %}<span class="math inline">\(f\in L^1(P)\)</span>{% endraw %} if and only if {% raw %}<span class="math inline">\(Q(\Omega)&lt;\infty\)</span>{% endraw %}.</p>

</div>
<div class="proof">
<p><em>Proof.</em> If {% raw %}<span class="math inline">\(h=\mathbf1_B\)</span>{% endraw %}, the density formula gives</p>

{% raw %}<div class="math display">\[
\int_A h\,dQ=Q(A\cap B)
=\int_{A\cap B}f\,dP=\int_A hf\,dP.
\]</div>{% endraw %}
<p>Finite linear combinations establish the identity for nonnegative simple functions. For nonnegative measurable {% raw %}<span class="math inline">\(h\)</span>{% endraw %}, choose simple {% raw %}<span class="math inline">\(h_n\uparrow h\)</span>{% endraw %}. The convention at {% raw %}<span class="math inline">\(f=0\)</span>{% endraw %} ensures {% raw %}<span class="math inline">\(h_nf\uparrow hf\)</span>{% endraw %}, so monotone convergence on both sides proves the identity, including when the integrals are infinite.</p>

<p>For real-valued {% raw %}<span class="math inline">\(h\)</span>{% endraw %}, apply the nonnegative case to {% raw %}<span class="math inline">\(|h|\)</span>{% endraw %}:</p>

{% raw %}<div class="math display">\[
\int|h|\,dQ=\int|h|f\,dP=\int|hf|\,dP.
\]</div>{% endraw %}
<p>This proves the equivalence of integrability. When the common value is finite, apply the identity to {% raw %}<span class="math inline">\(h^+\)</span>{% endraw %} and {% raw %}<span class="math inline">\(h^-\)</span>{% endraw %} and subtract. Finally, taking {% raw %}<span class="math inline">\(h=1\)</span>{% endraw %} and {% raw %}<span class="math inline">\(A=\Omega\)</span>{% endraw %} gives {% raw %}<span class="math inline">\(Q(\Omega)=\int f\,dP\)</span>{% endraw %}. {% raw %}<span class="math inline">\(\square\)</span>{% endraw %}</p>

</div>
<p>If {% raw %}<span class="math inline">\(P,Q\)</span>{% endraw %} are probability measures, these formulas read</p>

{% raw %}<div class="math display">\[
\mathbb{E}_P[f]=1,\qquad
\mathbb{E}_Q[h]=\mathbb{E}_P[hf]
\]</div>{% endraw %}
<p>for {% raw %}<span class="math inline">\(h\geq0\)</span>{% endraw %} or {% raw %}<span class="math inline">\(h\in L^1(Q)\)</span>{% endraw %}. The derivative therefore specifies the weight applied to {% raw %}<span class="math inline">\(P\)</span>{% endraw %} when integrating under {% raw %}<span class="math inline">\(Q\)</span>{% endraw %}.</p>

<h2 data-note-section="5" id="rn-examples">5. Examples and the role of the hypotheses</h2>
<h3 data-note-section="5.1" id="rn-discrete-example">5.1. Densities on a countable space</h3>
<p>Let {% raw %}<span class="math inline">\(\Omega=\mathbb N\)</span>{% endraw %}, {% raw %}<span class="math inline">\(\mathscr F=2^{\mathbb N}\)</span>{% endraw %}, and let {% raw %}<span class="math inline">\(P,Q\)</span>{% endraw %} have probability masses {% raw %}<span class="math inline">\(p_i,q_i\)</span>{% endraw %}. Absolute continuity holds exactly when {% raw %}<span class="math inline">\(p_i=0\)</span>{% endraw %} implies {% raw %}<span class="math inline">\(q_i=0\)</span>{% endraw %}. Necessity follows by testing singletons. For sufficiency, if {% raw %}<span class="math inline">\(P(A)=\sum_{i\in A}p_i=0\)</span>{% endraw %}, each {% raw %}<span class="math inline">\(p_i\)</span>{% endraw %} in the sum is zero, hence {% raw %}<span class="math inline">\(Q(A)=\sum_{i\in A}q_i=0\)</span>{% endraw %}.</p>

<p>Under this condition define</p>

{% raw %}<div class="math display">\[
f(i)=
\begin{cases}
q_i/p_i,&amp;p_i&gt;0,\\
0,&amp;p_i=0.
\end{cases}
\]</div>{% endraw %}
<p>Then for every {% raw %}<span class="math inline">\(A\subseteq\mathbb N\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
\int_A f\,dP=\sum_{i\in A}f(i)p_i
=\sum_{i\in A}q_i=Q(A).
\]</div>{% endraw %}
<p>The value assigned to {% raw %}<span class="math inline">\(f(i)\)</span>{% endraw %} when {% raw %}<span class="math inline">\(p_i=0\)</span>{% endraw %} does not affect the integral. If some {% raw %}<span class="math inline">\(p_i=0\)</span>{% endraw %} but {% raw %}<span class="math inline">\(q_i&gt;0\)</span>{% endraw %}, the density equation fails already on {% raw %}<span class="math inline">\(\{i\}\)</span>{% endraw %}.</p>

<h3 data-note-section="5.2" id="rn-mixture-example">5.2. A continuous measure with an atom</h3>
<p>On the Borel subsets of {% raw %}<span class="math inline">\([0,1]\)</span>{% endraw %}, let {% raw %}<span class="math inline">\(P=\lambda\)</span>{% endraw %} be Lebesgue measure and let</p>

{% raw %}<div class="math display">\[
Q=(1-a)\lambda+a\delta_0,\qquad 0&lt;a&lt;1.
\]</div>{% endraw %}
<p>Here {% raw %}<span class="math inline">\(\delta_0(A)=\mathbf1_A(0)\)</span>{% endraw %}. The Lebesgue decomposition is</p>

{% raw %}<div class="math display">\[
Q_{\mathrm{ac}}=(1-a)\lambda,\qquad Q_{\mathrm{s}}=a\delta_0,
\]</div>{% endraw %}
<p>because the first component has density {% raw %}<span class="math inline">\(1-a\)</span>{% endraw %} and the second is concentrated on the {% raw %}<span class="math inline">\(\lambda\)</span>{% endraw %}-null set {% raw %}<span class="math inline">\(\{0\}\)</span>{% endraw %}. There is no density of the whole measure {% raw %}<span class="math inline">\(Q\)</span>{% endraw %} with respect to {% raw %}<span class="math inline">\(\lambda\)</span>{% endraw %}: the density formula would give {% raw %}<span class="math inline">\(Q(\{0\})=0\)</span>{% endraw %}, whereas {% raw %}<span class="math inline">\(Q(\{0\})=a\)</span>{% endraw %}.</p>

<p>The reference measure matters. With {% raw %}<span class="math inline">\(M\triangleq\lambda+\delta_0\)</span>{% endraw %}, the whole measure has density</p>

{% raw %}<div class="math display">\[
\frac{dQ}{dM}(x)=
\begin{cases}
a,&amp;x=0,\\
1-a,&amp;x\in(0,1].
\end{cases}
\]</div>{% endraw %}
<p>Indeed, integrating over {% raw %}<span class="math inline">\(A\)</span>{% endraw %} gives {% raw %}<span class="math inline">\((1-a)\lambda(A)+a\mathbf1_A(0)=Q(A)\)</span>{% endraw %}. This also illustrates why singularity does not require disjoint topological supports: {% raw %}<span class="math inline">\(\lambda\)</span>{% endraw %} has support {% raw %}<span class="math inline">\([0,1]\)</span>{% endraw %}, while {% raw %}<span class="math inline">\(\delta_0\)</span>{% endraw %} has support {% raw %}<span class="math inline">\(\{0\}\)</span>{% endraw %}.</p>

<h3 data-note-section="5.3" id="rn-counting-example">5.3. Absolute continuity without a density</h3>
<p>On the same Borel space {% raw %}<span class="math inline">\([0,1]\)</span>{% endraw %}, take {% raw %}<span class="math inline">\(P\)</span>{% endraw %} to be counting measure and {% raw %}<span class="math inline">\(Q=\lambda\)</span>{% endraw %}. The only {% raw %}<span class="math inline">\(P\)</span>{% endraw %}-null set is the empty set, so {% raw %}<span class="math inline">\(Q\ll P\)</span>{% endraw %}. However, {% raw %}<span class="math inline">\(P\)</span>{% endraw %} is not {% raw %}<span class="math inline">\(\sigma\)</span>{% endraw %}-finite: its finite-measure sets are finite, and a countable union of finite sets cannot cover {% raw %}<span class="math inline">\([0,1]\)</span>{% endraw %}.</p>

<p>If {% raw %}<span class="math inline">\(Q=fP\)</span>{% endraw %} for some nonnegative measurable {% raw %}<span class="math inline">\(f\)</span>{% endraw %}, then every {% raw %}<span class="math inline">\(x\in[0,1]\)</span>{% endraw %} would satisfy</p>

{% raw %}<div class="math display">\[
0=Q(\{x\})=\int_{\{x\}}f\,dP=f(x).
\]</div>{% endraw %}
<p>Thus {% raw %}<span class="math inline">\(f\)</span>{% endraw %} would vanish everywhere, contradicting {% raw %}<span class="math inline">\(Q([0,1])=1\)</span>{% endraw %}. Absolute continuity alone therefore does not imply the existence of a density.</p>

<p>In the proof above, finiteness of both measures permits subtraction in the residual {% raw %}<span class="math inline">\(Q-fP\)</span>{% endraw %} and the bound {% raw %}<span class="math inline">\(R(N^c)\leq P(\Omega)/m\)</span>{% endraw %}. The {% raw %}<span class="math inline">\(\sigma\)</span>{% endraw %}-finite extension applies that argument on a countable partition where both measures are finite. Separately, {% raw %}<span class="math inline">\(\sigma\)</span>{% endraw %}-finiteness of {% raw %}<span class="math inline">\(Q\)</span>{% endraw %} ensures that a density is finite {% raw %}<span class="math inline">\(P\)</span>{% endraw %}-almost everywhere, as shown in <a href="#rn-uniqueness-proof">Appendix 6.5</a>.</p>

<h2 data-note-section="6" id="rn-appendix">6. Technical appendix</h2>
<h3 data-note-section="6.1" id="rn-continuity-proof">6.1. Continuity of finite signed measures</h3>
<div class="proof">
<p><em>Proof of Lemma 1.</em> Suppose {% raw %}<span class="math inline">\(A_n\uparrow A\)</span>{% endraw %}. Set {% raw %}<span class="math inline">\(D_1=A_1\)</span>{% endraw %} and {% raw %}<span class="math inline">\(D_n=A_n\setminus A_{n-1}\)</span>{% endraw %} for {% raw %}<span class="math inline">\(n\geq2\)</span>{% endraw %}. These sets are disjoint, with {% raw %}<span class="math inline">\(A=\bigcup_{n\geq1}D_n\)</span>{% endraw %}. For every {% raw %}<span class="math inline">\(k\)</span>{% endraw %}, the sets {% raw %}<span class="math inline">\(D_1,\ldots,D_k\)</span>{% endraw %} together with {% raw %}<span class="math inline">\(\Omega\setminus A_k\)</span>{% endraw %} form a finite partition, so</p>

{% raw %}<div class="math display">\[
\sum_{n=1}^k|\nu(D_n)|\leq V(\nu).
\]</div>{% endraw %}
<p>Hence {% raw %}<span class="math inline">\(\sum_n|\nu(D_n)|&lt;\infty\)</span>{% endraw %}. Countable additivity gives</p>

{% raw %}<div class="math display">\[
\nu(A)=\sum_{n=1}^\infty\nu(D_n)
=\lim_{k\to\infty}\sum_{n=1}^k\nu(D_n)
=\lim_{k\to\infty}\nu(A_k).
\]</div>{% endraw %}
<p>If {% raw %}<span class="math inline">\(A_n\downarrow A\)</span>{% endraw %}, then {% raw %}<span class="math inline">\(A_n^c\uparrow A^c\)</span>{% endraw %}. The increasing case and finiteness of {% raw %}<span class="math inline">\(\nu(\Omega)\)</span>{% endraw %} give</p>

{% raw %}<div class="math display">\[
\nu(A_n)=\nu(\Omega)-\nu(A_n^c)
\longrightarrow\nu(\Omega)-\nu(A^c)=\nu(A).
\]</div>{% endraw %}
<p>{% raw %}<span class="math inline">\(\square\)</span>{% endraw %}</p>

</div>
<h3 data-note-section="6.2" id="rn-hahn-proof">6.2. Construction of a Hahn partition</h3>
<div class="proof">
<p><em>Proof of Theorem 2.</em> Put</p>

{% raw %}<div class="math display">\[
s\triangleq\sup_{A\in\mathscr F}\nu(A).
\]</div>{% endraw %}
<p>The empty set gives {% raw %}<span class="math inline">\(s\geq0\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(|\nu(A)|\leq V(\nu)\)</span>{% endraw %} gives {% raw %}<span class="math inline">\(s&lt;\infty\)</span>{% endraw %}. Choose {% raw %}<span class="math inline">\(A_n\)</span>{% endraw %} such that {% raw %}<span class="math inline">\(\nu(A_n)&gt;s-2^{-n}\)</span>{% endraw %}. For any measurable {% raw %}<span class="math inline">\(B\)</span>{% endraw %}, finite additivity and the bound {% raw %}<span class="math inline">\(\nu(B\cap A_n)\leq s\)</span>{% endraw %} yield</p>

{% raw %}<div class="math display">\[
\nu(B\cup A_n)
=\nu(B)+\nu(A_n)-\nu(B\cap A_n)
\geq\nu(B)-2^{-n}.
\]</div>{% endraw %}
<p>Starting from {% raw %}<span class="math inline">\(\nu(A_m)&gt;s-2^{-m}\)</span>{% endraw %} and adjoining {% raw %}<span class="math inline">\(A_{m+1},\ldots,A_k\)</span>{% endraw %} successively gives</p>

{% raw %}<div class="math display">\[
\nu\left(\bigcup_{n=m}^k A_n\right)
\geq s-\sum_{n=m}^k2^{-n}.
\]</div>{% endraw %}
<p>For fixed {% raw %}<span class="math inline">\(m\)</span>{% endraw %}, the finite unions increase to {% raw %}<span class="math inline">\(U_m\triangleq\bigcup_{n\geq m}A_n\)</span>{% endraw %}. Lemma 1 therefore implies</p>

{% raw %}<div class="math display">\[
s\geq\nu(U_m)\geq s-\sum_{n=m}^\infty2^{-n}
=s-2^{1-m}.
\]</div>{% endraw %}
<p>The sets {% raw %}<span class="math inline">\(U_m\)</span>{% endraw %} decrease. Define {% raw %}<span class="math inline">\(A^+\triangleq\bigcap_{m\geq1}U_m\)</span>{% endraw %} and apply Lemma 1 again to obtain {% raw %}<span class="math inline">\(\nu(A^+)=s\)</span>{% endraw %}. Set {% raw %}<span class="math inline">\(A^-\triangleq\Omega\setminus A^+\)</span>{% endraw %}.</p>

<p>If some measurable {% raw %}<span class="math inline">\(B\subseteq A^+\)</span>{% endraw %} had {% raw %}<span class="math inline">\(\nu(B)&lt;0\)</span>{% endraw %}, then</p>

{% raw %}<div class="math display">\[
\nu(A^+\setminus B)=s-\nu(B)&gt;s,
\]</div>{% endraw %}
<p>contradicting the definition of {% raw %}<span class="math inline">\(s\)</span>{% endraw %}. Thus {% raw %}<span class="math inline">\(A^+\)</span>{% endraw %} is positive. If some measurable {% raw %}<span class="math inline">\(B\subseteq A^-\)</span>{% endraw %} had {% raw %}<span class="math inline">\(\nu(B)&gt;0\)</span>{% endraw %}, then disjoint additivity would give</p>

{% raw %}<div class="math display">\[
\nu(A^+\cup B)=s+\nu(B)&gt;s,
\]</div>{% endraw %}
<p>the same contradiction. Thus {% raw %}<span class="math inline">\(A^-\)</span>{% endraw %} is negative. {% raw %}<span class="math inline">\(\square\)</span>{% endraw %}</p>

</div>
<h3 data-note-section="6.3" id="rn-jordan-proof">6.3. Jordan decomposition and total variation</h3>
<div class="proof">
<p><em>Proof of the Jordan decomposition.</em> The sign properties of a Hahn partition imply {% raw %}<span class="math inline">\(\nu^+(A),\nu^-(A)\geq0\)</span>{% endraw %}. Countable additivity follows by restricting {% raw %}<span class="math inline">\(\nu\)</span>{% endraw %} to the two pieces, and finiteness follows from {% raw %}<span class="math inline">\(V(\nu)&lt;\infty\)</span>{% endraw %}. Additivity on {% raw %}<span class="math inline">\(A=(A\cap A^+)\sqcup(A\cap A^-)\)</span>{% endraw %} gives {% raw %}<span class="math inline">\(\nu=\nu^+-\nu^-\)</span>{% endraw %}. Also {% raw %}<span class="math inline">\(\nu^+(A^-)=\nu^-(A^+)=0\)</span>{% endraw %}, so the components are mutually singular.</p>

<p>For any measurable {% raw %}<span class="math inline">\(B\subseteq A\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
\nu(B)=\nu^+(B)-\nu^-(B)\leq\nu^+(A).
\]</div>{% endraw %}
<p>Equality is attained at {% raw %}<span class="math inline">\(B=A\cap A^+\)</span>{% endraw %}. Similarly, {% raw %}<span class="math inline">\(-\nu(B)\)</span>{% endraw %} attains its maximum at {% raw %}<span class="math inline">\(A\cap A^-\)</span>{% endraw %}. Therefore</p>

{% raw %}<span id="eq:rn-jordan-unique"></span><div class="math display">\[
\nu^+(A)=\sup_{B\subseteq A}\nu(B),\qquad
\nu^-(A)=\sup_{B\subseteq A}(-\nu(B)),

\tag{8}\]</div>{% endraw %}
<p>where the subsets are measurable. These expressions depend only on {% raw %}<span class="math inline">\(\nu\)</span>{% endraw %}.</p>

<p>To prove uniqueness among mutually singular positive decompositions, suppose {% raw %}<span class="math inline">\(\nu=\mu^+-\mu^-\)</span>{% endraw %} with {% raw %}<span class="math inline">\(\mu^+\perp\mu^-\)</span>{% endraw %}. Such a decomposition of a real-valued finite measure has finite components: at {% raw %}<span class="math inline">\(\Omega\)</span>{% endraw %}, an infinite component would make the difference infinite or undefined. Choose {% raw %}<span class="math inline">\(H\)</span>{% endraw %} with {% raw %}<span class="math inline">\(\mu^-(H)=0\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\mu^+(H^c)=0\)</span>{% endraw %}. For {% raw %}<span class="math inline">\(B\subseteq A\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
\nu(B)\leq\mu^+(A),\qquad
\nu(A\cap H)=\mu^+(A).
\]</div>{% endraw %}
<p>Hence {% raw %}<span class="math inline">\(\mu^+(A)=\sup_{B\subseteq A}\nu(B)=\nu^+(A)\)</span>{% endraw %}; the corresponding argument on {% raw %}<span class="math inline">\(H^c\)</span>{% endraw %} gives {% raw %}<span class="math inline">\(\mu^-=
\nu^-\)</span>{% endraw %}. This also proves independence of the initial Hahn partition.</p>

<p>For a finite measurable partition {% raw %}<span class="math inline">\((B_i)\)</span>{% endraw %} of {% raw %}<span class="math inline">\(A\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
\sum_i|\nu(B_i)|
\leq\sum_i\big(\nu^+(B_i)+\nu^-(B_i)\big)
=\nu^+(A)+\nu^-(A).
\]</div>{% endraw %}
<p>The partition {% raw %}<span class="math inline">\(A\cap A^+,A\cap A^-\)</span>{% endraw %} attains equality, proving the total variation formula.</p>

<p>Finally, let {% raw %}<span class="math inline">\(H^+,H^-\)</span>{% endraw %} be another Hahn partition. Every measurable subset of {% raw %}<span class="math inline">\(A^+\cap H^-\)</span>{% endraw %} has both nonnegative and nonpositive signed measure, and hence has measure zero. The partition formula gives {% raw %}<span class="math inline">\(|\nu|(A^+\cap H^-)=0\)</span>{% endraw %}. The same argument gives {% raw %}<span class="math inline">\(|\nu|(A^-\cap H^+)=0\)</span>{% endraw %}. Thus {% raw %}<span class="math inline">\(|\nu|(A^+\mathbin{\triangle}H^+)=0\)</span>{% endraw %}. Conversely, moving any measurable {% raw %}<span class="math inline">\(|\nu|\)</span>{% endraw %}-null set from one part to the other preserves both sign properties. {% raw %}<span class="math inline">\(\square\)</span>{% endraw %}</p>

</div>
<h3 data-note-section="6.4" id="rn-sigma-finite-proof">6.4. Extension to sigma-finite measures</h3>
<div class="proof">
<p><em>Existence in Theorem 4.</em> Choose countable measurable covers</p>

{% raw %}<div class="math display">\[
\Omega=\bigcup_{r\geq1}B_r=\bigcup_{s\geq1}C_s,
\qquad P(B_r)&lt;\infty,\qquad Q(C_s)&lt;\infty.
\]</div>{% endraw %}
<p>Enumerate the intersections {% raw %}<span class="math inline">\(B_r\cap C_s\)</span>{% endraw %} as {% raw %}<span class="math inline">\(D_1,D_2,\ldots\)</span>{% endraw %}, and set</p>

{% raw %}<span id="eq:rn-partition"></span><div class="math display">\[
E_1=D_1,\qquad
E_j\triangleq D_j\setminus\bigcup_{i&lt;j}D_i\quad(j\geq2).

\tag{9}\]</div>{% endraw %}
<p>The {% raw %}<span class="math inline">\(E_j\)</span>{% endraw %} form a measurable partition of {% raw %}<span class="math inline">\(\Omega\)</span>{% endraw %}, and both measures are finite on each piece. On the measurable space {% raw %}<span class="math inline">\(E_j\)</span>{% endraw %}, apply the finite construction to the restrictions of {% raw %}<span class="math inline">\(P\)</span>{% endraw %} and {% raw %}<span class="math inline">\(Q\)</span>{% endraw %}. It gives a nonnegative finite-valued measurable {% raw %}<span class="math inline">\(f_j:E_j\to[0,\infty)\)</span>{% endraw %} and a finite positive measure {% raw %}<span class="math inline">\(R_j\)</span>{% endraw %} such that</p>

{% raw %}<div class="math display">\[
Q(A\cap E_j)=\int_{A\cap E_j}f_j\,dP+R_j(A\cap E_j)
\qquad(A\in\mathscr F).
\]</div>{% endraw %}
<p>There is a measurable {% raw %}<span class="math inline">\(N_j\subseteq E_j\)</span>{% endraw %} with {% raw %}<span class="math inline">\(P(N_j)=0\)</span>{% endraw %} and {% raw %}<span class="math inline">\(R_j(E_j\setminus N_j)=0\)</span>{% endraw %}. Empty pieces can be assigned the zero function and zero measure.</p>

<p>Define {% raw %}<span class="math inline">\(f(\omega)=f_j(\omega)\)</span>{% endraw %} on {% raw %}<span class="math inline">\(E_j\)</span>{% endraw %}, and put</p>

{% raw %}<div class="math display">\[
R(A)\triangleq\sum_{j\geq1}R_j(A\cap E_j),\qquad
N\triangleq\bigcup_{j\geq1}N_j.
\]</div>{% endraw %}
<p>The function {% raw %}<span class="math inline">\(f\)</span>{% endraw %} is measurable because the partition is countable, and it is finite-valued because each {% raw %}<span class="math inline">\(f_j\)</span>{% endraw %} is. The sum defining {% raw %}<span class="math inline">\(R\)</span>{% endraw %} is a positive measure: for disjoint {% raw %}<span class="math inline">\(A_n\)</span>{% endraw %}, countable additivity of each {% raw %}<span class="math inline">\(R_j\)</span>{% endraw %} and interchange of nonnegative sums give {% raw %}<span class="math inline">\(R(\bigcup_n A_n)=\sum_nR(A_n)\)</span>{% endraw %}.</p>

<p>By countable additivity of {% raw %}<span class="math inline">\(Q\)</span>{% endraw %} and monotone convergence for the integrals,</p>

{% raw %}<div class="math display">\[
\begin{aligned}
Q(A)
&amp;=\sum_{j\geq1}Q(A\cap E_j)\\
&amp;=\sum_{j\geq1}\int_{A\cap E_j}f_j\,dP
 +\sum_{j\geq1}R_j(A\cap E_j)\\
&amp;=\int_A f\,dP+R(A).
\end{aligned}
\]</div>{% endraw %}
<p>Further, {% raw %}<span class="math inline">\(P(N)=0\)</span>{% endraw %} and {% raw %}<span class="math inline">\(R(N^c)=0\)</span>{% endraw %}, so {% raw %}<span class="math inline">\(R\perp P\)</span>{% endraw %}. The measure {% raw %}<span class="math inline">\(fP\)</span>{% endraw %} is absolutely continuous with respect to {% raw %}<span class="math inline">\(P\)</span>{% endraw %}. Both {% raw %}<span class="math inline">\(fP\)</span>{% endraw %} and {% raw %}<span class="math inline">\(R\)</span>{% endraw %} are bounded above by {% raw %}<span class="math inline">\(Q\)</span>{% endraw %}, and therefore are finite on every {% raw %}<span class="math inline">\(C_s\)</span>{% endraw %}. This proves their {% raw %}<span class="math inline">\(\sigma\)</span>{% endraw %}-finiteness and the existence of the decomposition. {% raw %}<span class="math inline">\(\square\)</span>{% endraw %}</p>

</div>
<h3 data-note-section="6.5" id="rn-uniqueness-proof">6.5. Finiteness and uniqueness</h3>
<div class="proof">
<p><em>Uniqueness in Theorems 3 and 4.</em> First, a density representing a {% raw %}<span class="math inline">\(\sigma\)</span>{% endraw %}-finite measure is finite almost everywhere. To see this, suppose {% raw %}<span class="math inline">\(M=fP\)</span>{% endraw %} is {% raw %}<span class="math inline">\(\sigma\)</span>{% endraw %}-finite and choose {% raw %}<span class="math inline">\(C_j\)</span>{% endraw %} covering {% raw %}<span class="math inline">\(\Omega\)</span>{% endraw %} with {% raw %}<span class="math inline">\(M(C_j)&lt;\infty\)</span>{% endraw %}. If {% raw %}<span class="math inline">\(P(C_j\cap\{f=\infty\})&gt;0\)</span>{% endraw %}, then {% raw %}<span class="math inline">\(\int_{C_j}f\,dP=\infty\)</span>{% endraw %}, a contradiction. Thus {% raw %}<span class="math inline">\(P(f=\infty)=0\)</span>{% endraw %}. Replacing {% raw %}<span class="math inline">\(f\)</span>{% endraw %} by zero on this measurable null set gives a finite-valued version without changing {% raw %}<span class="math inline">\(fP\)</span>{% endraw %}.</p>

<p>Now suppose</p>

{% raw %}<div class="math display">\[
Q=Q_{\mathrm{ac}}+Q_{\mathrm{s}}
=\widetilde Q_{\mathrm{ac}}+\widetilde Q_{\mathrm{s}}
\]</div>{% endraw %}
<p>are two decompositions with the asserted absolute continuity and singularity properties. Choose {% raw %}<span class="math inline">\(P\)</span>{% endraw %}-null sets {% raw %}<span class="math inline">\(N_1,N_2\)</span>{% endraw %} carrying {% raw %}<span class="math inline">\(Q_{\mathrm{s}},\widetilde Q_{\mathrm{s}}\)</span>{% endraw %}, respectively, and let {% raw %}<span class="math inline">\(N=N_1\cup N_2\)</span>{% endraw %}. Both absolutely continuous components vanish on {% raw %}<span class="math inline">\(N\)</span>{% endraw %}, and both singular components vanish on {% raw %}<span class="math inline">\(N^c\)</span>{% endraw %}. Hence, for every {% raw %}<span class="math inline">\(A\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
\begin{aligned}
Q_{\mathrm{ac}}(A)&amp;=Q(A\cap N^c)=\widetilde Q_{\mathrm{ac}}(A),\\
Q_{\mathrm{s}}(A)&amp;=Q(A\cap N)=\widetilde Q_{\mathrm{s}}(A).
\end{aligned}
\]</div>{% endraw %}
<p>These identities prove uniqueness without subtracting potentially infinite measures.</p>

<p>It remains to prove uniqueness of the density. Suppose {% raw %}<span class="math inline">\(fP=gP=Q_{\mathrm{ac}}\)</span>{% endraw %}. By the first paragraph, choose finite-valued versions of both functions. Use the partition {% raw %}<span class="math inline">\((E_j)\)</span>{% endraw %} from <a href="#rn-sigma-finite-proof">Appendix 6.4</a>. Since {% raw %}<span class="math inline">\(Q_{\mathrm{ac}}(E_j)\leq Q(E_j)&lt;\infty\)</span>{% endraw %}, both functions are integrable on each {% raw %}<span class="math inline">\(E_j\)</span>{% endraw %}. For {% raw %}<span class="math inline">\(j,k\geq1\)</span>{% endraw %}, set</p>

{% raw %}<div class="math display">\[
B_{jk}\triangleq E_j\cap\{f\geq g+1/k\}.
\]</div>{% endraw %}
<p>Equality of the measures {% raw %}<span class="math inline">\(fP\)</span>{% endraw %} and {% raw %}<span class="math inline">\(gP\)</span>{% endraw %} on this set gives</p>

{% raw %}<div class="math display">\[
0=\int_{B_{jk}}f\,dP-\int_{B_{jk}}g\,dP
=\int_{B_{jk}}(f-g)\,dP
\geq k^{-1}P(B_{jk}).
\]</div>{% endraw %}
<p>Both subtracted integrals are finite. Thus {% raw %}<span class="math inline">\(P(B_{jk})=0\)</span>{% endraw %}. Since the functions are finite-valued,</p>

{% raw %}<div class="math display">\[
\{f&gt;g\}=\bigcup_{j,k\geq1}B_{jk},
\]</div>{% endraw %}
<p>so {% raw %}<span class="math inline">\(P(f&gt;g)=0\)</span>{% endraw %}. Interchanging {% raw %}<span class="math inline">\(f,g\)</span>{% endraw %} gives {% raw %}<span class="math inline">\(P(g&gt;f)=0\)</span>{% endraw %}, and therefore {% raw %}<span class="math inline">\(P(f\ne g)=0\)</span>{% endraw %}. The null-set modifications made at the outset do not change this conclusion for the original versions. {% raw %}<span class="math inline">\(\square\)</span>{% endraw %}</p>

</div>
<p>For further reading, <a href="https://people.math.harvard.edu/~ctm/home/text/class/harvard/114/07/html/home/course/course.pdf#page=80">McMullen’s <em>Real Analysis</em> notes, Section 8</a>, discuss Hahn and Jordan decomposition and give a different construction of the Radon–Nikodym derivative. The <a href="{% post_url 2021-12-18-conditioning-and-conditional-expectation %}">next note</a> applies the theorem to conditional expectation.</p>


<nav class="note-series" aria-label="Notes in this series"><p>Previous: <a href="{% post_url 2021-11-09-convergence-and-large-sample-probability %}">Convergence and Large-Sample Probability</a> · Next: <a href="{% post_url 2021-12-18-conditioning-and-conditional-expectation %}">Conditioning and Conditional Expectation</a></p></nav>

</div>
