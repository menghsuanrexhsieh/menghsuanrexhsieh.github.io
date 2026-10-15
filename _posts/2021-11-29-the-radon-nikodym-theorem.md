---
layout: "post"
title: "The Radon-Nikodym Theorem"
date: "2021-11-29"
tags: ["probability theory", "statistics"]
excerpt: "The Radon–Nikodym theorem constructs a density by maximising its mass; Hahn’s decomposition shows why no absolutely continuous remainder can remain."
note_series: "Probability and statistics"
note_source: "assets/notes/Overleaf Projects (32 items)/Statistics and Prob Theory - Notes/stats.tex"
---

<div class="note-content" markdown="0">

<div id="the-radon-nikodym-theorem" data-note-section="title">

</div>
<p>If {% raw %}<span class="math inline">\(f\)</span>{% endraw %} is a nonnegative measurable function on a probability space (a measure space, more generally), say {% raw %}<span class="math inline">\((\Omega, \mathscr F, \mathop{\mathrm{\mathbf{P}}})\)</span>{% endraw %}, then {% raw %}<span class="math inline">\(\mathbf Q (A) = \int_A f \dif \mathop{\mathrm{\mathbf{P}}}\)</span>{% endraw %} defines another measure on the same probability space. This means {% raw %}<span class="math inline">\(\mathbf Q\)</span>{% endraw %} has a density {% raw %}<span class="math inline">\(f\)</span>{% endraw %} with respect to {% raw %}<span class="math inline">\(\mathop{\mathrm{\mathbf{P}}}\)</span>{% endraw %}. In other words, for all {% raw %}<span class="math inline">\(A \in \mathscr F\)</span>{% endraw %}, {% raw %}<span class="math inline">\(\mathop{\mathrm{\mathbf{P}}}(A) = 0\)</span>{% endraw %} implies {% raw %}<span class="math inline">\(\mathbf Q(A) = 0\)</span>{% endraw %}. The converse asks whether every measure that vanishes on the original null sets can be obtained by integrating a density. This is true if {% raw %}<span class="math inline">\(\mathop{\mathrm{\mathbf{P}}}\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\mathbf Q\)</span>{% endraw %} are {% raw %}<span class="math inline">\(\sigma\)</span>{% endraw %}-finite. The proof constructs the largest density whose integral stays below the target measure, then shows that no residual mass remains.</p>


<p>We use a <em>finite signed measure</em> {% raw %}<span class="math inline">\(\nu\)</span>{% endraw %}: a countably additive real set function on {% raw %}<span class="math inline">\(\mathscr F\)</span>{% endraw %} with finite total variation, that is, {% raw %}<span class="math inline">\(\sup_{(A_i)}\sum_i|\nu(A_i)|&lt;\infty\)</span>{% endraw %}, where the supremum is over finite measurable partitions of {% raw %}<span class="math inline">\(\Omega\)</span>{% endraw %}. A difference of two finite positive measures has this property. Finite additivity alone would not justify the limits of sets used below.</p>

<div id="result-1" class="lemma" data-note-number="1" data-note-kind="Lemma">
<p><strong>Lemma 1</strong>. If {% raw %}<span class="math inline">\(A_n\uparrow A\)</span>{% endraw %} or {% raw %}<span class="math inline">\(A_n\downarrow A\)</span>{% endraw %}, then {% raw %}<span class="math inline">\(\nu(A_n)\to\nu(A)\)</span>{% endraw %}.</p>

</div>
<div class="proof">
<p><em>Proof.</em> For an increasing sequence, write its union as the disjoint union of its successive differences and use countable additivity. The corresponding series converges absolutely by finite total variation. For a decreasing sequence, apply the increasing case to complements and subtract from {% raw %}<span class="math inline">\(\nu(\Omega)\)</span>{% endraw %}.</p>

<p>◻</p>
</div>
<p>Hahn’s decomposition separates a signed measure into a region on which every measurable subset has nonnegative mass and a region on which every measurable subset has nonpositive mass.</p>


<div id="thm:hahn-decomp" class="theorem" data-note-number="2" data-note-kind="Theorem">
<p><strong>Theorem 2</strong>. (Hahn). For a finite signed measure {% raw %}<span class="math inline">\(\nu\)</span>{% endraw %}, there is a measurable partition {% raw %}<span class="math inline">\(\Omega=A^+\sqcup A^-\)</span>{% endraw %} such that every measurable subset of {% raw %}<span class="math inline">\(A^+\)</span>{% endraw %} has nonnegative measure and every measurable subset of {% raw %}<span class="math inline">\(A^-\)</span>{% endraw %} has nonpositive measure.</p>

</div>
<div class="proof">
<p><em>Proof.</em></p>

<p>A set of maximal signed mass gives the decomposition: removing a negative subset or adding a positive subset of its complement would increase its mass. It remains to construct a maximiser.</p>

<p>Let {% raw %}<span class="math inline">\(s=\sup_{A\in\mathscr F}\nu(A)&lt;\infty\)</span>{% endraw %} and choose {% raw %}<span class="math inline">\(A_n\)</span>{% endraw %} with {% raw %}<span class="math inline">\(\nu(A_n)&gt;s-2^{-n}\)</span>{% endraw %}. Since {% raw %}<span class="math inline">\(\nu(B\cap A_n)\leq s\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[\nu(B\cup A_n)=\nu(B)+\nu(A_n)-\nu(B\cap A_n)\geq\nu(B)-2^{-n}.\]</div>{% endraw %}<p>Induction gives {% raw %}<span class="math inline">\(\nu(\bigcup_{n=m}^NA_n)\geq s-\sum_{n=m}^N2^{-n}\)</span>{% endraw %}. With {% raw %}<span class="math inline">\(U_m=\bigcup_{n\geq m}A_n\)</span>{% endraw %}, continuity from below yields {% raw %}<span class="math inline">\(\nu(U_m)\geq s-2^{1-m}\)</span>{% endraw %}. The sets {% raw %}<span class="math inline">\(U_m\)</span>{% endraw %} decrease, so continuity from above gives {% raw %}<span class="math inline">\(\nu(A^+)=s\)</span>{% endraw %} for {% raw %}<span class="math inline">\(A^+=\bigcap_mU_m\)</span>{% endraw %}. The maximality argument in the first paragraph proves the sign claims for {% raw %}<span class="math inline">\(A^+\)</span>{% endraw %} and {% raw %}<span class="math inline">\(A^-=\Omega\setminus A^+\)</span>{% endraw %}.</p>

<p>Explicitly, if {% raw %}<span class="math inline">\(B\subseteq A^+\)</span>{% endraw %} is measurable and {% raw %}<span class="math inline">\(\nu(B)&lt;0\)</span>{% endraw %}, then {% raw %}<span class="math inline">\(\nu(A^+\setminus B)=s-\nu(B)&gt;s\)</span>{% endraw %}, contradicting the definition of {% raw %}<span class="math inline">\(s\)</span>{% endraw %}. If {% raw %}<span class="math inline">\(B\subseteq A^-\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\nu(B)&gt;0\)</span>{% endraw %}, then disjoint additivity gives {% raw %}<span class="math inline">\(\nu(A^+\cup B)=s+\nu(B)&gt;s\)</span>{% endraw %}, the same contradiction. These arguments concern every measurable subset, which is stronger than merely requiring {% raw %}<span class="math inline">\(\nu(A^+)\geq0\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\nu(A^-)\leq0\)</span>{% endraw %}.</p>
<p>◻</p>

</div>
<p>By way of nomenclature, defining </p>

{% raw %}<span id="eq:upper-var"></span><span id="eq:lower-var"></span><span id="eq:jordan-decomp"></span><div class="math display">\[\begin{aligned}
    \nu^+ (A) &amp;\triangleq \nu(A \cap A^+) ~,  \\
    \nu^- (A) &amp;\triangleq -\nu(A \cap A^-) ~,  \\
    \nu(A) &amp;\triangleq \nu^+ (A) - \nu^- (A) ~,  
\end{aligned}\tag{1}\]</div>{% endraw %}
<p>Here {% raw %}<span class="math inline">\(\nu^+\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\nu^-\)</span>{% endraw %} are finite positive measures, called the positive and negative variations. Their difference {% raw %}<span class="math inline">\(\nu\)</span>{% endraw %} is a signed measure. This is the Jordan decomposition.</p>

<p>Two measures {% raw %}<span class="math inline">\(P,Q\)</span>{% endraw %} are mutually singular if there is a measurable {% raw %}<span class="math inline">\(S\)</span>{% endraw %} with {% raw %}<span class="math inline">\(P(S)=0\)</span>{% endraw %} and {% raw %}<span class="math inline">\(Q(S^c)=0\)</span>{% endraw %}. They need not have disjoint topological supports. We write {% raw %}<span class="math inline">\(Q\ll P\)</span>{% endraw %} if {% raw %}<span class="math inline">\(P(A)=0\)</span>{% endraw %} implies {% raw %}<span class="math inline">\(Q(A)=0\)</span>{% endraw %} for every measurable {% raw %}<span class="math inline">\(A\)</span>{% endraw %}. The construction below decomposes {% raw %}<span class="math inline">\(Q\)</span>{% endraw %} into a part with a density and a singular remainder; absolute continuity then forces the remainder to vanish.</p>

<div id="thm:radon-nikodym" class="theorem" data-note-number="3" data-note-kind="Theorem">
<p><strong>Theorem 3</strong> (Radon–Nikodym). Let {% raw %}<span class="math inline">\(P,Q\)</span>{% endraw %} be sigma-finite measures on the same measurable space, with {% raw %}<span class="math inline">\(Q\ll P\)</span>{% endraw %}. There is a nonnegative measurable {% raw %}<span class="math inline">\(f\)</span>{% endraw %} such that {% raw %}<span class="math inline">\(Q(A)=\int_A f\,dP\)</span>{% endraw %} for every measurable {% raw %}<span class="math inline">\(A\)</span>{% endraw %}. Any two such densities agree {% raw %}<span class="math inline">\(P\)</span>{% endraw %}-almost everywhere.</p>

</div>
<div id="result-4" class="remark" data-note-number="4" data-note-kind="Remark">
<p><strong>Remark 4</strong>.  Note that a density {% raw %}<span class="math inline">\(f\)</span>{% endraw %} is integrable with respect to {% raw %}<span class="math inline">\(\mathop{\mathrm{\mathbf{P}}}\)</span>{% endraw %} if and only if {% raw %}<span class="math inline">\(\mathbf Q\)</span>{% endraw %} is finite. But, note that {% raw %}<span class="math inline">\(\mathbf Q\)</span>{% endraw %} is assumed to be {% raw %}<span class="math inline">\(\sigma\)</span>{% endraw %}-finite; this means {% raw %}<span class="math inline">\(f &lt; \infty\)</span>{% endraw %} everywhere except on a set of measure zero. Therefore, we can restrict to analyzing the case where {% raw %}<span class="math inline">\(f\)</span>{% endraw %} is finite everywhere. This integral can be expressed as </p>

{% raw %}<div class="math display">\[\begin{aligned}
        \int_A h \dif \mathbf Q = \int_A h f \dif \mathop{\mathrm{\mathbf{P}}}\quad \text{for any } A \in \mathscr F ~,
    
\end{aligned}\]</div>{% endraw %}
<p>For this change-of-measure identity, {% raw %}<span class="math inline">\(h\)</span>{% endraw %} may be nonnegative measurable, or integrable with respect to {% raw %}<span class="math inline">\(Q\)</span>{% endraw %}. The density {% raw %}<span class="math inline">\(f=dQ/dP\)</span>{% endraw %} is the Radon–Nikodym derivative.</p>

</div>
<div class="proof">
<p><em>Proof.</em></p>

<p>First suppose {% raw %}<span class="math inline">\(P,Q\)</span>{% endraw %} are finite. Let {% raw %}<span class="math inline">\(\mathcal E=\{g\geq0:\ g\text{ measurable},\ \int_Ag\,dP\leq Q(A)\text{ for all }A\in\mathscr F\}\)</span>{% endraw %}. This class contains zero. For {% raw %}<span class="math inline">\(g,h\in\mathcal E\)</span>{% endraw %}, split an arbitrary measurable {% raw %}<span class="math inline">\(A\)</span>{% endraw %} into the two regions where each function is larger:</p>
{% raw %}<div class="math display">\[\begin{aligned}
\int_A\max(g,h)\,dP
&amp;=\int_{A\cap\{g\geq h\}}g\,dP+\int_{A\cap\{g&lt;h\}}h\,dP\\
&amp;\leq Q(A\cap\{g\geq h\})+Q(A\cap\{g&lt;h\})=Q(A).
\end{aligned}\]</div>{% endraw %}
<p>Thus {% raw %}<span class="math inline">\(\mathcal E\)</span>{% endraw %} is closed under finite maxima. If {% raw %}<span class="math inline">\(g_n\uparrow g\)</span>{% endraw %} with each {% raw %}<span class="math inline">\(g_n\in\mathcal E\)</span>{% endraw %}, monotone convergence on each {% raw %}<span class="math inline">\(A\)</span>{% endraw %} gives {% raw %}<span class="math inline">\(\int_Ag\,dP=\lim_n\int_Ag_n\,dP\leq Q(A)\)</span>{% endraw %}, so it is also closed under increasing limits.</p>


<p>Put {% raw %}<span class="math inline">\(\alpha=\sup_{g\in\mathcal E}\int g\,dP\leq Q(\Omega)\)</span>{% endraw %}. Choose {% raw %}<span class="math inline">\(g_n\in\mathcal E\)</span>{% endraw %} with {% raw %}<span class="math inline">\(\int g_n\,dP\to\alpha\)</span>{% endraw %}, and set {% raw %}<span class="math inline">\(f_n=\max(g_1,\ldots,g_n)\)</span>{% endraw %}, {% raw %}<span class="math inline">\(f=\lim_nf_n\)</span>{% endraw %}. Then {% raw %}<span class="math inline">\(f\in\mathcal E\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\int f\,dP=\alpha\)</span>{% endraw %}. Define the nonnegative finite residual measure</p>

{% raw %}<div class="math display">\[R(A)=Q(A)-\int_A f\,dP.\]</div>{% endraw %}<p>For each positive integer {% raw %}<span class="math inline">\(m\)</span>{% endraw %}, apply Hahn’s theorem to {% raw %}<span class="math inline">\(R-m^{-1}P\)</span>{% endraw %} and let {% raw %}<span class="math inline">\(H_m\)</span>{% endraw %} be its positive set. Every measurable {% raw %}<span class="math inline">\(E\subseteq H_m\)</span>{% endraw %} satisfies {% raw %}<span class="math inline">\(R(E)\geq m^{-1}P(E)\)</span>{% endraw %}. Consequently {% raw %}<span class="math inline">\(f+m^{-1}1_{H_m}\in\mathcal E\)</span>{% endraw %}. Maximality of {% raw %}<span class="math inline">\(f\)</span>{% endraw %} forces {% raw %}<span class="math inline">\(P(H_m)=0\)</span>{% endraw %}. Put {% raw %}<span class="math inline">\(N=\bigcup_mH_m\)</span>{% endraw %}. Then {% raw %}<span class="math inline">\(P(N)=0\)</span>{% endraw %}, while the negative-set property gives {% raw %}<span class="math inline">\(R(N^c)\leq m^{-1}P(N^c)\)</span>{% endraw %} for every {% raw %}<span class="math inline">\(m\)</span>{% endraw %}. Hence {% raw %}<span class="math inline">\(R(N^c)=0\)</span>{% endraw %}: the residual is singular. Under {% raw %}<span class="math inline">\(Q\ll P\)</span>{% endraw %}, we also have {% raw %}<span class="math inline">\(R\ll P\)</span>{% endraw %}, so {% raw %}<span class="math inline">\(R(N)=0\)</span>{% endraw %} and {% raw %}<span class="math inline">\(R=0\)</span>{% endraw %}.</p>

<p>For sigma-finite {% raw %}<span class="math inline">\(P,Q\)</span>{% endraw %}, choose measurable covers {% raw %}<span class="math inline">\(\Omega=\bigcup_r B_r=\bigcup_s C_s\)</span>{% endraw %} with {% raw %}<span class="math inline">\(P(B_r)&lt;\infty\)</span>{% endraw %} and {% raw %}<span class="math inline">\(Q(C_s)&lt;\infty\)</span>{% endraw %}. Enumerate the countably many intersections {% raw %}<span class="math inline">\(B_r\cap C_s\)</span>{% endraw %} as {% raw %}<span class="math inline">\(D_1,D_2,\ldots\)</span>{% endraw %}, and disjointify them by {% raw %}<span class="math inline">\(E_j=D_j\setminus\bigcup_{i&lt;j}D_i\)</span>{% endraw %}. Both measures are finite on every {% raw %}<span class="math inline">\(E_j\)</span>{% endraw %}. Apply the finite case to {% raw %}<span class="math inline">\(P_j(A)=P(A\cap E_j)\)</span>{% endraw %} and {% raw %}<span class="math inline">\(Q_j(A)=Q(A\cap E_j)\)</span>{% endraw %}, obtaining densities {% raw %}<span class="math inline">\(f_j\)</span>{% endraw %}. The measurable function {% raw %}<span class="math inline">\(f=\sum_jf_j\mathbf1_{E_j}\)</span>{% endraw %} then satisfies, by monotone convergence,</p>
{% raw %}<div class="math display">\[\int_Af\,dP=\sum_j\int_{A\cap E_j}f_j\,dP
=\sum_jQ(A\cap E_j)=Q(A).\]</div>{% endraw %}


<p>Finally, if {% raw %}<span class="math inline">\(f,g\)</span>{% endraw %} are two densities, on each {% raw %}<span class="math inline">\(E_j\)</span>{% endraw %} their integrals are finite. Integrating {% raw %}<span class="math inline">\(f-g\)</span>{% endraw %} over {% raw %}<span class="math inline">\(E_j\cap\{f&gt;g\}\)</span>{% endraw %} gives zero, hence {% raw %}<span class="math inline">\(P(E_j\cap\{f&gt;g\})=0\)</span>{% endraw %}. Interchange {% raw %}<span class="math inline">\(f,g\)</span>{% endraw %} and take the countable union to obtain {% raw %}<span class="math inline">\(P(f\ne g)=0\)</span>{% endraw %}.</p>

<p>To justify the finiteness and integration assertions in Remark 4, let {% raw %}<span class="math inline">\((C_j)\)</span>{% endraw %} cover {% raw %}<span class="math inline">\(\Omega\)</span>{% endraw %} with {% raw %}<span class="math inline">\(Q(C_j)&lt;\infty\)</span>{% endraw %}. If {% raw %}<span class="math inline">\(P(C_j\cap\{f=\infty\})&gt;0\)</span>{% endraw %}, then {% raw %}<span class="math inline">\(\int_{C_j}f\,dP=\infty\)</span>{% endraw %}, a contradiction. Thus {% raw %}<span class="math inline">\(P(f=\infty)=0\)</span>{% endraw %}; changing {% raw %}<span class="math inline">\(f\)</span>{% endraw %} to zero there gives a finite-valued version. The identity {% raw %}<span class="math inline">\(\int_Ah\,dQ=\int_Ahf\,dP\)</span>{% endraw %} holds first for indicators by the density formula, then for nonnegative simple functions by linearity, and for nonnegative measurable functions by monotone convergence. For integrable signed {% raw %}<span class="math inline">\(h\)</span>{% endraw %}, apply it to the positive and negative parts; both integrals are finite, so subtraction is valid.</p>
<p>◻</p>

</div>

<nav class="note-series" aria-label="Notes in this series"><p>Previous: <a href="{% post_url 2021-11-09-convergence-and-large-sample-probability %}">Convergence and Large-Sample Probability</a> · Next: <a href="{% post_url 2021-12-18-conditioning-and-conditional-expectation %}">Conditioning and Conditional Expectation</a></p></nav>

</div>
