---
layout: "post"
title: "Central Limit Theorem with Random Number of Summands"
date: "2022-05-02"
tags: ["probability theory", "statistics"]
excerpt: "A particularly insightful exercise is to prove the following result."
note_series: "Probability and statistics"
note_source: "assets/notes/Overleaf Projects (32 items)/Statistics and Prob Theory - Notes/stats.tex"
---

<div class="note-content" markdown="0">

<div id="central-limit-theorem-with-random-number-of-summands" data-note-section="title">

</div>
<p>A sum may be observed at a random index, for instance when the number of observations depends on the data. Replacing that index by a nearby deterministic one introduces an increment of the partial-sum process. The main problem is to show that this increment is small on the central-limit scale.</p>

<div id="thm:random-summands-clt" class="theorem" data-note-number="1" data-note-kind="Theorem">
<p><strong>Theorem 1</strong>. Let {% raw %}<span class="math inline">\((X_i)_{i\geq1}\)</span>{% endraw %} be i.i.d. with mean zero and variance one, and let {% raw %}<span class="math inline">\(S_k=\sum_{i=1}^kX_i\)</span>{% endraw %}. Let {% raw %}<span class="math inline">\(\nu_n\)</span>{% endraw %} be positive integer-valued random variables on the same probability space. If {% raw %}<span class="math inline">\(\nu_n/n\xrightarrow{P}\nu\)</span>{% endraw %} for a random variable satisfying {% raw %}<span class="math inline">\(0&lt;\nu&lt;\infty\)</span>{% endraw %} almost surely, then {% raw %}<span class="math inline">\(S_{\nu_n}/\sqrt{\nu_n}\Rightarrow \mathcal{N}(0,1)\)</span>{% endraw %}. Independence between the index and the observations is not required.</p>

</div>
<p>The proof separates the random index from the fluctuation of the partial sums. An approximation lemma first records when small errors multiplied by bounded-in-probability terms leave a limiting distribution unchanged. A maximal inequality will then control the error caused by changing the index.</p>

<span id="as:A1-cvg-dist-random-sum"></span><span id="as:A2-cvg-dist-random-sum"></span><span id="as:A3-cvg-dist-random-sum"></span><span id="eq:-c"></span><span id="eq:-d"></span><span id="eq:-e"></span><span id="eq:-f"></span><span id="eq:-g"></span><span id="eq:-h"></span>
<div id="lem:cvg-in-dist-random-variable-sum" class="lemma" data-note-number="2" data-note-kind="Lemma">
<p><strong>Lemma 2</strong>. Suppose {% raw %}<span class="math inline">\(A_n=X_{m,n}+\sum_{j=1}^kY_{m,n}^{(j)}Z_{m,n}^{(j)}\)</span>{% endraw %}, where {% raw %}<span class="math inline">\(k\)</span>{% endraw %} is fixed. Assume {% raw %}<span class="math inline">\(X_{m,n}\Rightarrow F\)</span>{% endraw %} as {% raw %}<span class="math inline">\(n\to\infty\)</span>{% endraw %} for each fixed {% raw %}<span class="math inline">\(m\)</span>{% endraw %}, and, for each {% raw %}<span class="math inline">\(\varepsilon&gt;0\)</span>{% endraw %} and {% raw %}<span class="math inline">\(j\)</span>{% endraw %},</p>

</div>
{% raw %}<div class="math display">\[\lim_{m\to\infty}\limsup_{n\to\infty}P(|Y_{m,n}^{(j)}|&gt;\varepsilon)=0,\qquad\lim_{M\to\infty}\limsup_{m\to\infty}\limsup_{n\to\infty}P(|Z_{m,n}^{(j)}|&gt;M)=0.\]</div>{% endraw %}<p>Then {% raw %}<span class="math inline">\(A_n\Rightarrow F\)</span>{% endraw %}.</p>

<div class="proof">
<p><em>Proof.</em></p>

<p>Let {% raw %}<span class="math inline">\(R_{m,n}=A_n-X_{m,n}\)</span>{% endraw %}. For {% raw %}<span class="math inline">\(\delta,M&gt;0\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[P(|R_{m,n}|&gt;\delta)\leq\sum_{j=1}^kP(|Y_{m,n}^{(j)}|&gt;\delta/(kM))+\sum_{j=1}^kP(|Z_{m,n}^{(j)}|&gt;M).\]</div>{% endraw %}<p>First take {% raw %}<span class="math inline">\(n\to\infty\)</span>{% endraw %}, then {% raw %}<span class="math inline">\(m\to\infty\)</span>{% endraw %}, and finally {% raw %}<span class="math inline">\(M\to\infty\)</span>{% endraw %}. The error probability tends to zero. At a continuity point {% raw %}<span class="math inline">\(x\)</span>{% endraw %} of {% raw %}<span class="math inline">\(F\)</span>{% endraw %}, use</p>

{% raw %}<div class="math display">\[P(X_{m,n}\leq x-\delta)-P(|R_{m,n}|&gt;\delta)\leq P(A_n\leq x)\leq P(X_{m,n}\leq x+\delta)+P(|R_{m,n}|&gt;\delta).\]</div>{% endraw %}<p>Choose {% raw %}<span class="math inline">\(x\pm\delta\)</span>{% endraw %} to be continuity points, take the limits in the stated order, and let {% raw %}<span class="math inline">\(\delta\downarrow0\)</span>{% endraw %}.</p>

<p>◻</p>

</div>
<span id="eq:II-88"></span>
<div class="proof">
<p><em>Proof of the theorem.</em> We first prove the asymptotic independence fact needed when the index depends on the observations. Let {% raw %}<span class="math inline">\(A\)</span>{% endraw %} be any fixed event on the underlying probability space, and let {% raw %}<span class="math inline">\(H_n\)</span>{% endraw %} be uniformly bounded and measurable with respect to {% raw %}<span class="math inline">\(\sigma(X_j:j\geq k_n)\)</span>{% endraw %}, where {% raw %}<span class="math inline">\(k_n\to\infty\)</span>{% endraw %}. Put {% raw %}<span class="math inline">\(\mathscr F_\infty=\sigma(X_1,X_2,\ldots)\)</span>{% endraw %}, {% raw %}<span class="math inline">\(U=\mathbb E(\mathbf1_A\mid\mathscr F_\infty)\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(U_K=\mathbb E(\mathbf1_A\mid X_1,\ldots,X_K)\)</span>{% endraw %}. Conditional-expectation approximation gives {% raw %}<span class="math inline">\(\mathbb E|U-U_K|\to0\)</span>{% endraw %}. For {% raw %}<span class="math inline">\(k_n&gt;K\)</span>{% endraw %}, independence of disjoint blocks gives {% raw %}<span class="math inline">\(\mathbb E(U_KH_n)=\mathbb P(A)\mathbb EH_n\)</span>{% endraw %}. Consequently</p>
{% raw %}<div class="math display">\[|\mathbb E(\mathbf1_AH_n)-\mathbb P(A)\mathbb EH_n|
=|\mathbb E((U-U_K)H_n)|
\leq\sup_n\|H_n\|_\infty\,\mathbb E|U-U_K|\longrightarrow0,\]</div>{% endraw %}
<p>where {% raw %}<span class="math inline">\(n\to\infty\)</span>{% endraw %} is taken before {% raw %}<span class="math inline">\(K\to\infty\)</span>{% endraw %}. This argument also covers events {% raw %}<span class="math inline">\(A\)</span>{% endraw %} not generated by the observations. The conditional-expectation approximation itself follows by approximating the bounded {% raw %}<span class="math inline">\(\mathscr F_\infty\)</span>{% endraw %}-measurable variable {% raw %}<span class="math inline">\(U\)</span>{% endraw %} in {% raw %}<span class="math inline">\(L^1\)</span>{% endraw %} by functions of finitely many coordinates, and using the {% raw %}<span class="math inline">\(L^1\)</span>{% endraw %} contraction of conditional expectation.</p>
<p>For deterministic {% raw %}<span class="math inline">\(t&gt;0\)</span>{% endraw %}, put {% raw %}<span class="math inline">\(N_n=\lfloor nt\rfloor\)</span>{% endraw %} and discard the first {% raw %}<span class="math inline">\(\ell_n=\lfloor\sqrt n\rfloor\)</span>{% endraw %} summands. Their normalized sum has second moment {% raw %}<span class="math inline">\(\ell_n/N_n\to0\)</span>{% endraw %}. The remaining normalized sum obeys the ordinary i.i.d. CLT and is measurable with respect to a block whose first index tends to infinity. Applying the preceding fact to a bounded Lipschitz function {% raw %}<span class="math inline">\(h\)</span>{% endraw %} of that sum, and then restoring the discarded terms, proves</p>
{% raw %}<div class="math display">\[\mathbb E\left[\mathbf1_A h\left(\frac{S_{\lfloor nt\rfloor}}{\sqrt{\lfloor nt\rfloor}}\right)\right]
\longrightarrow\mathbb P(A)\mathbb Eh(Z),\qquad Z\sim\mathcal{N}(0,1).\tag{1}\]</div>{% endraw %}
<p>The error from restoring the terms is at most the Lipschitz constant times {% raw %}<span class="math inline">\(\sqrt{\ell_n/N_n}\)</span>{% endraw %}, by Cauchy–Schwarz.</p>
<p>Now fix {% raw %}<span class="math inline">\(0&lt;a&lt;b&lt;\infty\)</span>{% endraw %}. Partition {% raw %}<span class="math inline">\([a,b]\)</span>{% endraw %} into finitely many disjoint intervals {% raw %}<span class="math inline">\(I_j\)</span>{% endraw %} of length at most {% raw %}<span class="math inline">\(\delta&lt;a/4\)</span>{% endraw %}, assigning shared endpoints to just one interval. Set {% raw %}<span class="math inline">\(A_j=\{\nu\in I_j\}\)</span>{% endraw %}, choose the midpoint {% raw %}<span class="math inline">\(t_j\)</span>{% endraw %}, and write {% raw %}<span class="math inline">\(N_{j,n}=\lfloor nt_j\rfloor\)</span>{% endraw %}. Let {% raw %}<span class="math inline">\(A_0=\{\nu\notin[a,b]\}\)</span>{% endraw %}, and define</p>
{% raw %}<div class="math display">\[W_{n,\delta}=\sum_j\mathbf1_{A_j}\frac{S_{N_{j,n}}}{\sqrt{N_{j,n}}}
+\mathbf1_{A_0}\frac{S_n}{\sqrt n}.\]</div>{% endraw %}
<p>Equation (1), summed over this fixed finite partition, gives {% raw %}<span class="math inline">\(W_{n,\delta}\Rightarrow Z\)</span>{% endraw %}. In particular these approximants are tight, with asymptotic tail bounds independent of the partition because every fixed-partition limit is the same normal law.</p>
<p>On {% raw %}<span class="math inline">\(A_j\cap\{|\nu_n/n-\nu|\leq\delta\}\)</span>{% endraw %}, the two indices differ by at most {% raw %}<span class="math inline">\(L_n=\lceil2n\delta+2\rceil\)</span>{% endraw %} and are at least {% raw %}<span class="math inline">\(na/2\)</span>{% endraw %} for large {% raw %}<span class="math inline">\(n\)</span>{% endraw %}. For each {% raw %}<span class="math inline">\(j\)</span>{% endraw %}, let</p>
{% raw %}<div class="math display">\[B_{j,n}=\left\{\max_{|k-N_{j,n}|\leq L_n}|S_k-S_{N_{j,n}}|&gt;u\sqrt n\right\}.\]</div>{% endraw %}
<p>All indices in the window are positive for large {% raw %}<span class="math inline">\(n\)</span>{% endraw %}, since {% raw %}<span class="math inline">\(2\delta&lt;a/2\)</span>{% endraw %}. Kolmogorov's maximal inequality applied separately to the forward increments and to the backward increments in reverse order gives</p>
{% raw %}<div class="math display">\[\mathbb P(B_{j,n})\leq\frac{2L_n}{u^2n}\leq\frac{C(\delta+n^{-1})}{u^2}.\]</div>{% endraw %}
<p>The event {% raw %}<span class="math inline">\(B_{j,n}\)</span>{% endraw %} depends only on observations with indices at least {% raw %}<span class="math inline">\(N_{j,n}-L_n+1\to\infty\)</span>{% endraw %}. The asymptotic independence calculation therefore gives {% raw %}<span class="math inline">\(\mathbb P(A_j\cap B_{j,n})=\mathbb P(A_j)\mathbb P(B_{j,n})+o(1)\)</span>{% endraw %}. Summing over the fixed partition costs {% raw %}<span class="math inline">\(\sum_j\mathbb P(A_j)\leq1\)</span>{% endraw %}, rather than its number of cells. Since {% raw %}<span class="math inline">\(\mathbb P(|\nu_n/n-\nu|&gt;\delta)\to0\)</span>{% endraw %},</p>
{% raw %}<div class="math display">\[\limsup_n\mathbb P\left(\left|S_{\nu_n}-\sum_j\mathbf1_{A_j}S_{N_{j,n}}\right|&gt;u\sqrt n,\ a\leq\nu\leq b\right)
\leq\frac{C\delta}{u^2}.\tag{2}\]</div>{% endraw %}
<p>It remains to compare denominators. On the same good event in {% raw %}<span class="math inline">\(A_j\)</span>{% endraw %},</p>
{% raw %}<div class="math display">\[\frac{S_{\nu_n}}{\sqrt{\nu_n}}-\frac{S_{N_{j,n}}}{\sqrt{N_{j,n}}}
=\frac{S_{\nu_n}-S_{N_{j,n}}}{\sqrt{\nu_n}}
+\frac{S_{N_{j,n}}}{\sqrt{N_{j,n}}}
\left(\sqrt{\frac{N_{j,n}}{\nu_n}}-1\right),\]</div>{% endraw %}
{% raw %}<div class="math display">\[\left|\sqrt{\frac{N_{j,n}}{\nu_n}}-1\right|
=\frac{|N_{j,n}-\nu_n|}{\sqrt{\nu_n}(\sqrt{N_{j,n}}+\sqrt{\nu_n})}
\leq\frac{2L_n}{na}.\]</div>{% endraw %}
<p>The first error tends to zero in the iterated limit {% raw %}<span class="math inline">\(n\to\infty\)</span>{% endraw %}, {% raw %}<span class="math inline">\(\delta\downarrow0\)</span>{% endraw %}, by (2) and {% raw %}<span class="math inline">\(\nu_n\geq na/2\)</span>{% endraw %}; the second does so by the tightness of {% raw %}<span class="math inline">\(W_{n,\delta}\)</span>{% endraw %} and the displayed bound. Explicitly, for any {% raw %}<span class="math inline">\(\varepsilon&gt;0\)</span>{% endraw %},</p>
{% raw %}<div class="math display">\[\lim_{\delta\downarrow0}\limsup_n
\mathbb P\left(\left|\frac{S_{\nu_n}}{\sqrt{\nu_n}}-W_{n,\delta}\right|&gt;\varepsilon\right)
\leq\mathbb P(\nu\notin[a,b]).\]</div>{% endraw %}
<p>Apply the distribution-function sandwich from Lemma 2 to {% raw %}<span class="math inline">\(W_{n,\delta}\)</span>{% endraw %}, whose limit is normal. First take {% raw %}<span class="math inline">\(n\to\infty\)</span>{% endraw %}, then {% raw %}<span class="math inline">\(\delta\downarrow0\)</span>{% endraw %}, then {% raw %}<span class="math inline">\(a\downarrow0\)</span>{% endraw %} and {% raw %}<span class="math inline">\(b\uparrow\infty\)</span>{% endraw %}, and finally let the sandwich width tend to zero. The excluded probability vanishes because {% raw %}<span class="math inline">\(0&lt;\nu&lt;\infty\)</span>{% endraw %} almost surely, and the normal distribution function is continuous. This proves the claimed CLT. ◻</p>
</div>
<nav class="note-related" aria-label="Related notes"><p>Related notes: <a href="{% post_url 2022-06-29-moment-inequalities-and-random-series %}">Moment Inequalities and Random Series</a>.</p></nav>

<nav class="note-series" aria-label="Notes in this series"><p>Previous: <a href="{% post_url 2022-03-25-central-limit-theorems-and-worked-examples %}">Central Limit Theorems and Worked Examples</a> · Next: <a href="{% post_url 2022-05-22-normal-approximation-under-local-dependence %}">Normal Approximation under Local Dependence</a></p></nav>

</div>
