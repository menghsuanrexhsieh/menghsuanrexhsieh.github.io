---
layout: "post"
title: "Martingales: Maximal and Upcrossing Inequalities"
date: "2023-01-07"
tags: ["probability theory", "martingales"]
excerpt: "Martingales: Maximal and Upcrossing Inequalities. Notes on martingale inequalities."
note_series: "Martingale inequalities"
note_source: "assets/notes/Overleaf Projects (32 items)/Martingales - Prob and Statistics/stats.tex"
---

<div class="note-content" markdown="0">

<p>A martingale has no predictable change in its conditional mean. Individual paths can nevertheless fluctuate widely. The two estimates developed here control different aspects of that fluctuation: a maximal inequality bounds the probability of a large excursion, while an upcrossing inequality bounds repeated passages between two levels. The latter will give almost-sure convergence.</p>

<div id="fundamental-results" data-note-section="title">

</div>
<div id="def:martingales" class="definition" data-note-number="1" data-note-kind="Definition">
<p><strong>Definition 1</strong> (Martingale).  Let {% raw %}<span class="math inline">\(X_1,X_2,\dots\)</span>{% endraw %} be a sequence of random variables on a probability space {% raw %}<span class="math inline">\((\Omega, \mathscr F, \mathop{\mathrm{\mathbf{P}\!\,}})\)</span>{% endraw %}. Let {% raw %}<span class="math inline">\(\mathscr F_1, \mathscr F_2, \dots\)</span>{% endraw %} be a sequence of {% raw %}<span class="math inline">\(\sigma\)</span>{% endraw %}-fields in {% raw %}<span class="math inline">\(\mathscr F\)</span>{% endraw %}. Then, the (double) sequence {% raw %}<span class="math inline">\(\{(X_n, \mathscr F_n)\}_{n \in \mathbb N}\)</span>{% endraw %} is called a <em>martingale</em> if the following conditions are satisfied for all {% raw %}<span class="math inline">\(n \in \mathbb N\)</span>{% endraw %}:</p>

<ol>
<li><p>({% raw %}<span class="math inline">\(\{\mathscr F_n\}\)</span>{% endraw %} form a <em>filtration</em>) {% raw %}<span class="math inline">\(\mathscr F_n \subset \mathscr F_{n+1}\)</span>{% endraw %};</p></li>
<li><p>({% raw %}<span class="math inline">\(\{X_n\}\)</span>{% endraw %} is <em>adapted to the filtration</em>) {% raw %}<span class="math inline">\(X_n\)</span>{% endraw %} is {% raw %}<span class="math inline">\(\mathscr F_n\)</span>{% endraw %}-measurable;</p></li>
<li><p>{% raw %}<span class="math inline">\(\mathbb{E}|X_n| &lt; \infty\)</span>{% endraw %}; and</p></li>
<li><p>{% raw %}<span class="math inline">\(\mathbb{E}[X_{n+1} \mid \mathscr F_n] = X_n\)</span>{% endraw %} with probability one.</p></li>
</ol>
</div>
<p>The filtration is part of the definition: a sequence is called a martingale <em>if it is a martingale relative to some sequence of {% raw %}<span class="math inline">\(\sigma\)</span>{% endraw %}-fields</em>. Therefore, the sequence of {% raw %}<span class="math inline">\(\sigma\)</span>{% endraw %}-fields {% raw %}<span class="math inline">\(\mathscr H_n = \sigma(X_1,\dots,X_n)\)</span>{% endraw %} also works for a process already known to be a martingale. The tower property gives the required conditional expectation when we pass to this smaller filtration. This is referred to as the <em>smallest {% raw %}<span class="math inline">\(\sigma\)</span>{% endraw %}-fields with respect to which {% raw %}<span class="math inline">\(X_n\)</span>{% endraw %} are a martingale</em>.</p>

<div id="result-2" class="remark" data-note-number="2" data-note-kind="Remark">
<p><strong>Remark 2</strong>.  Note that {% raw %}<span class="math inline">\(\mathbb{E}[X_{n+1} \mid \mathscr F_n] = X_n\)</span>{% endraw %} with probability one gives rise to the following relation for all {% raw %}<span class="math inline">\(n\)</span>{% endraw %}: </p>

{% raw %}<div class="math display">\[\int_A X_{n+1} \dif \mathop{\mathrm{\mathbf{P}\!\,}}= \int_A X_n \dif \mathop{\mathrm{\mathbf{P}\!\,}}\quad \text{for all } A \in \mathscr F_n ~.\]</div>{% endraw %}
<p> This requirement follows because {% raw %}<span class="math inline">\(X_n\)</span>{% endraw %} is {% raw %}<span class="math inline">\(\mathscr F_n\)</span>{% endraw %}-measurable. Since {% raw %}<span class="math inline">\(\mathscr F_n\)</span>{% endraw %} is a nested sequence of {% raw %}<span class="math inline">\(\sigma\)</span>{% endraw %}-fields, it follows that {% raw %}<span class="math inline">\(\int_A X_n \dif \mathop{\mathrm{\mathbf{P}\!\,}}= \int_A X_{n+1} \dif \mathop{\mathrm{\mathbf{P}\!\,}}= \dots = \int_A X_{n+k} \dif \mathop{\mathrm{\mathbf{P}\!\,}}\)</span>{% endraw %} for any {% raw %}<span class="math inline">\(k \geq 1\)</span>{% endraw %}, with probability one. So, {% raw %}<span class="math inline">\(X_n\)</span>{% endraw %} is a version of {% raw %}<span class="math inline">\(\mathbb{E}[X_{n+k} \mid \mathscr F_n]\)</span>{% endraw %} for any {% raw %}<span class="math inline">\(k \geq 1\)</span>{% endraw %}, with probability one.</p>

</div>
<div id="result-3" class="remark" data-note-number="3" data-note-kind="Remark">
<p><strong>Remark 3</strong>.  It is equivalent to give the defining conditions of a martingale using <em>differences</em>; to do so, let {% raw %}<span class="math inline">\(\Delta_n = X_n - X_{n-1}\)</span>{% endraw %}, with {% raw %}<span class="math inline">\(\Delta_1 = X_1\)</span>{% endraw %}. Then, by linearity, the condition {% raw %}<span class="math inline">\(\mathbb{E}[X_{n+1} \mid \mathscr F_n] = X_n\)</span>{% endraw %} is equivalent to {% raw %}<span class="math inline">\(\mathbb{E}[\Delta_{n+1} \mid \mathscr F_n] = 0\)</span>{% endraw %}, by linearity. Therefore, the sets {% raw %}<span class="math inline">\(X_1, \dots, X_n\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\Delta_1, \dots, \Delta_n\)</span>{% endraw %} generate the <em>same</em> {% raw %}<span class="math inline">\(\sigma\)</span>{% endraw %}-field.</p>

</div>
<div id="result-4" class="example" data-note-number="4" data-note-kind="Example">
<p><strong>Example 4</strong>.  Let {% raw %}<span class="math inline">\(\Omega = (0,1]\)</span>{% endraw %}, {% raw %}<span class="math inline">\(\mathscr F\)</span>{% endraw %} be the collection of Borel sets of {% raw %}<span class="math inline">\(\Omega\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(\mathop{\mathrm{\mathbf{P}\!\,}}\)</span>{% endraw %} be the Lebesgue measure over {% raw %}<span class="math inline">\(\mathscr F\)</span>{% endraw %}. Then, let {% raw %}<span class="math inline">\(\mathscr F_n\)</span>{% endraw %} be the (finite!) {% raw %}<span class="math inline">\(\sigma\)</span>{% endraw %}-field generated by the partition of {% raw %}<span class="math inline">\(\Omega\)</span>{% endraw %} into dyadic intervals, {% raw %}<span class="math inline">\((k2^{-n}, (k+1)2^{-n}]\)</span>{% endraw %} for {% raw %}<span class="math inline">\(k \in [0,2^n)\)</span>{% endraw %}. Let {% raw %}<span class="math inline">\(\nu\)</span>{% endraw %} be any finite positive Borel measure on {% raw %}<span class="math inline">\((0,1]\)</span>{% endraw %}. Its restriction to each finite sigma-field has the following Radon–Nikodym derivative with respect to Lebesgue measure: </p>

{% raw %}<div class="math display">\[X_n(\omega) = \frac{\nu((k2^{-n}, (k+1)2^{-n}])}{2^{-n}} \quad \text{for } \omega \in (k2^{-n}, (k+1)2^{-n}] ~.\]</div>{% endraw %}
<p> Clearly, {% raw %}<span class="math inline">\(X_n\)</span>{% endraw %} is a martingale with respect to {% raw %}<span class="math inline">\(\mathscr F_n\)</span>{% endraw %}. Note that {% raw %}<span class="math inline">\(A \in \mathscr F_n\)</span>{% endraw %} implies {% raw %}<span class="math inline">\(A \in \mathscr F_{n+1}\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(\int_A X_{n+1} \dif \mathop{\mathrm{\mathbf{P}\!\,}}= \nu(A)\)</span>{% endraw %} for any {% raw %}<span class="math inline">\(A \in \mathscr F_n\)</span>{% endraw %}.</p>

</div>
<div id="result-5" class="example" data-note-number="5" data-note-kind="Example">
<p><strong>Example 5</strong>.  Let {% raw %}<span class="math inline">\(X\)</span>{% endraw %} be an integrable random variable defined on {% raw %}<span class="math inline">\((\Omega, \mathscr F, \mathop{\mathrm{\mathbf{P}\!\,}})\)</span>{% endraw %}. Let {% raw %}<span class="math inline">\(\mathscr F_n\)</span>{% endraw %} be nondecreasing {% raw %}<span class="math inline">\(\sigma\)</span>{% endraw %}-fields in {% raw %}<span class="math inline">\(\mathscr F\)</span>{% endraw %}. If we let {% raw %}<span class="math inline">\(X_n = \mathbb{E}[X \mid \mathscr F_n]\)</span>{% endraw %}, the tower property of conditional expectations gives {% raw %}<span class="math inline">\(\mathbb{E}[X_{n+1} \mid \mathscr F_n] = X_n\)</span>{% endraw %}. Therefore, {% raw %}<span class="math inline">\(X_n\)</span>{% endraw %}, as defined, is a martingale relative to {% raw %}<span class="math inline">\(\mathscr F_n\)</span>{% endraw %}.</p>

</div>
<div id="result-6" class="example" data-note-number="6" data-note-kind="Example">
<p><strong>Example 6</strong> (Branching process). Let {% raw %}<span class="math inline">\(\{N_{n,k}:n,k\geq1\}\)</span>{% endraw %} be i.i.d. nonnegative integer-valued random variables with {% raw %}<span class="math inline">\(0&lt;m=\mathbb{E} N_{1,1}&lt;\infty\)</span>{% endraw %}. Set {% raw %}<span class="math inline">\(Z_0=1\)</span>{% endraw %} and {% raw %}<span class="math inline">\(Z_n=\sum_{k=1}^{Z_{n-1}}N_{n,k}\)</span>{% endraw %}, interpreting an empty sum as zero. With {% raw %}<span class="math inline">\(\mathscr F_n=\sigma(N_{j,k}:1\leq j\leq n,\ k\geq1)\)</span>{% endraw %}, independence of the next row gives {% raw %}<span class="math inline">\(\mathbb{E}[Z_{n+1}\mid\mathscr F_n]=mZ_n\)</span>{% endraw %}. Induction gives {% raw %}<span class="math inline">\(\mathbb{E} Z_n=m^n\)</span>{% endraw %}, so {% raw %}<span class="math inline">\(X_n=Z_n/m^n\)</span>{% endraw %} is an integrable martingale. It is also a martingale for the smaller natural filtration {% raw %}<span class="math inline">\(\sigma(Z_0,\ldots,Z_n)\)</span>{% endraw %}, by the tower property.</p>

</div>
<p>The conditional mean in the branching example can be checked without treating the random upper summation limit as deterministic. Nonnegativity permits conditional monotone convergence:</p>
{% raw %}<div class="math display">\[\mathbb E(Z_{n+1}\mid\mathscr F_n)
=\sum_{k\geq1}\mathbf1_{\{Z_n\geq k\}}\mathbb E(N_{n+1,k}\mid\mathscr F_n)
=m\sum_{k\geq1}\mathbf1_{\{Z_n\geq k\}}=mZ_n.\]</div>{% endraw %}
<p>The entire next row is independent of {% raw %}<span class="math inline">\(\mathscr F_n\)</span>{% endraw %}. Starting with {% raw %}<span class="math inline">\(Z_0=1\)</span>{% endraw %}, induction gives {% raw %}<span class="math inline">\(\mathbb EZ_n=m^n&lt;\infty\)</span>{% endraw %}, so the normalized variables satisfy all parts of the martingale definition.</p>
<div id="def:submartingales" class="definition" data-note-number="7" data-note-kind="Definition">
<p><strong>Definition 7</strong> (Submartingale).  Let {% raw %}<span class="math inline">\(X_1,X_2,\dots\)</span>{% endraw %} be a sequence of random variables on a probability space {% raw %}<span class="math inline">\((\Omega, \mathscr F, \mathop{\mathrm{\mathbf{P}\!\,}})\)</span>{% endraw %}. Let {% raw %}<span class="math inline">\(\mathscr F_1, \mathscr F_2, \dots\)</span>{% endraw %} be a sequence of {% raw %}<span class="math inline">\(\sigma\)</span>{% endraw %}-fields in {% raw %}<span class="math inline">\(\mathscr F\)</span>{% endraw %}. Then, the (double) sequence {% raw %}<span class="math inline">\(\{(X_n, \mathscr F_n)\}_{n \in \mathbb N}\)</span>{% endraw %} is called a <em>submartingale</em> if the following conditions are satisfied for all {% raw %}<span class="math inline">\(n \in \mathbb N\)</span>{% endraw %}:</p>

<ol>
<li><p>({% raw %}<span class="math inline">\(\{\mathscr F_n\}\)</span>{% endraw %} form a <em>filtration</em>) {% raw %}<span class="math inline">\(\mathscr F_n \subset \mathscr F_{n+1}\)</span>{% endraw %};</p></li>
<li><p>({% raw %}<span class="math inline">\(\{X_n\}\)</span>{% endraw %} is <em>adapted to the filtration</em>) {% raw %}<span class="math inline">\(X_n\)</span>{% endraw %} is {% raw %}<span class="math inline">\(\mathscr F_n\)</span>{% endraw %}-measurable;</p></li>
<li><p>{% raw %}<span class="math inline">\(\mathbb{E}|X_n| &lt; \infty\)</span>{% endraw %}; and</p></li>
<li><p>{% raw %}<span class="math inline">\(\mathbb{E}[X_{n+1} \mid \mathscr F_n] \geq X_n\)</span>{% endraw %} with probability one.</p></li>
</ol>
</div>
<p>By way of nomenclature, a sequence is called a <em>supermartingale</em> if {% raw %}<span class="math inline">\(\mathbb{E}[X_{n+1} \mid \mathscr F_n] \leq X_n\)</span>{% endraw %} with probability one.</p>

<div id="prop:convex-function-martingale-submartingale" class="proposition" data-note-number="8" data-note-kind="Proposition">
<p><strong>Proposition 8</strong>.  </p>

<ol>
<li><p><span id="prop:convex-function-martingale-submartingale-a" data-label="prop:convex-function-martingale-submartingale-a"></span> Let {% raw %}<span class="math inline">\(X_1,X_2,\dots\)</span>{% endraw %} be a martingale relative to {% raw %}<span class="math inline">\(\mathscr F_1, \mathscr F_2, \dots\)</span>{% endraw %}. If {% raw %}<span class="math inline">\(\varphi\)</span>{% endraw %} is a convex function, and {% raw %}<span class="math inline">\(\varphi(X_n)\)</span>{% endraw %} are integrable, then {% raw %}<span class="math inline">\(\varphi(X_1),\varphi(X_2),\dots\)</span>{% endraw %} form a submartingale relative to {% raw %}<span class="math inline">\(\mathscr F_1, \mathscr F_2, \dots\)</span>{% endraw %}.</p></li>
<li><p><span id="prop:convex-function-martingale-submartingale-b" data-label="prop:convex-function-martingale-submartingale-b"></span> Let {% raw %}<span class="math inline">\(X_1,X_2,\dots\)</span>{% endraw %} be a submartingale relative to {% raw %}<span class="math inline">\(\mathscr F_1, \mathscr F_2, \dots\)</span>{% endraw %}. If {% raw %}<span class="math inline">\(\varphi\)</span>{% endraw %} is a nondecreasing, convex function, and {% raw %}<span class="math inline">\(\varphi(X_n)\)</span>{% endraw %} are integrable, then {% raw %}<span class="math inline">\(\varphi(X_1),\varphi(X_2),\dots\)</span>{% endraw %} form a submartingale relative to {% raw %}<span class="math inline">\(\mathscr F_1, \mathscr F_2, \dots\)</span>{% endraw %}.</p></li>
</ol>
</div>
<div class="proof">
<p><em>Proof.</em> Conditional Jensen gives</p>
{% raw %}<div class="math display">\[\mathbb E(\varphi(X_{n+1})\mid\mathscr F_n)
\geq\varphi\bigl(\mathbb E(X_{n+1}\mid\mathscr F_n)\bigr).\]</div>{% endraw %}
<p>For a martingale the conditional mean inside {% raw %}<span class="math inline">\(\varphi\)</span>{% endraw %} equals {% raw %}<span class="math inline">\(X_n\)</span>{% endraw %}, proving the first assertion. For a submartingale it is at least {% raw %}<span class="math inline">\(X_n\)</span>{% endraw %}; the additional monotonicity assumption then gives the same lower bound {% raw %}<span class="math inline">\(\varphi(X_n)\)</span>{% endraw %}. Convex real functions are continuous, hence Borel, so adaptedness is preserved; integrability is assumed in both statements. Without monotonicity, the second implication can fail: take {% raw %}<span class="math inline">\(X_n=n\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\varphi(x)=-x\)</span>{% endraw %}. ◻</p>
</div>
<p>To control a path, we often stop it the first time it enters a specified set. The stopping rule must use only information available at that time. Let {% raw %}<span class="math inline">\(\tau\)</span>{% endraw %} be a random variable taking values in the positive integers together with infinity. We say {% raw %}<span class="math inline">\(\tau\)</span>{% endraw %} is a <em>stopping time</em> with respect to {% raw %}<span class="math inline">\(\{\mathscr F_n\}\)</span>{% endraw %} if {% raw %}<span class="math inline">\(\{\omega : \tau(\omega) = k\} \in \mathscr F_k\)</span>{% endraw %} for every finite {% raw %}<span class="math inline">\(k\)</span>{% endraw %}. Equivalently, we can rewrite the condition as {% raw %}<span class="math inline">\(\{\omega : \tau(\omega) \leq k\} \in \mathscr F_k\)</span>{% endraw %} for every finite {% raw %}<span class="math inline">\(k\)</span>{% endraw %}.</p>

<div id="prop:optional-sampling" class="proposition" data-note-number="9" data-note-kind="Proposition">
<p><strong>Proposition 9</strong> (Optional Sampling).  Let {% raw %}<span class="math inline">\(X_1,\dots,X_n\)</span>{% endraw %} be a submartingale with respect to {% raw %}<span class="math inline">\(\mathscr F_1, \dots, \mathscr F_n\)</span>{% endraw %}. Let {% raw %}<span class="math inline">\(\tau_1,\tau_2\)</span>{% endraw %} be stopping times satisfying {% raw %}<span class="math inline">\(1 \leq \tau_1 \leq \tau_2 \leq n\)</span>{% endraw %}. Then, {% raw %}<span class="math inline">\(X_{\tau_1}, X_{\tau_2}\)</span>{% endraw %} is a submartingale with respect to {% raw %}<span class="math inline">\(\mathscr F_{\tau_1}, \mathscr F_{\tau_2}\)</span>{% endraw %}.</p>

</div>
<div class="proof">
<p><em>Proof.</em> For a bounded stopping time {% raw %}<span class="math inline">\(\tau\)</span>{% endraw %}, define</p>
{% raw %}<div class="math display">\[\mathscr F_\tau=\{A\in\mathscr F:A\cap\{\tau=k\}\in\mathscr F_k\text{ for every }k\}.\]</div>{% endraw %}
<p>The finite sum {% raw %}<span class="math inline">\(X_\tau=\sum_{k=1}^nX_k\mathbf1_{\{\tau=k\}}\)</span>{% endraw %} is integrable and {% raw %}<span class="math inline">\(\mathscr F_\tau\)</span>{% endraw %}-measurable. If {% raw %}<span class="math inline">\(\tau_1\leq\tau_2\)</span>{% endraw %}, then {% raw %}<span class="math inline">\(\mathscr F_{\tau_1}\subseteq\mathscr F_{\tau_2}\)</span>{% endraw %}: intersect {% raw %}<span class="math inline">\(A\in\mathscr F_{\tau_1}\)</span>{% endraw %} with {% raw %}<span class="math inline">\(\{\tau_2=k\}\)</span>{% endraw %}, and split it over {% raw %}<span class="math inline">\(\{\tau_1=j\}\)</span>{% endraw %}, {% raw %}<span class="math inline">\(j\leq k\)</span>{% endraw %}.</p>
<p>For {% raw %}<span class="math inline">\(A\in\mathscr F_{\tau_1}\)</span>{% endraw %}, the pathwise telescoping identity is</p>
{% raw %}<div class="math display">\[(X_{\tau_2}-X_{\tau_1})\mathbf1_A
=\sum_{k=1}^{n-1}(X_{k+1}-X_k)\mathbf1_{A\cap\{\tau_1\leq k&lt;\tau_2\}}.\]</div>{% endraw %}
<p>Each event in the sum belongs to {% raw %}<span class="math inline">\(\mathscr F_k\)</span>{% endraw %}, because {% raw %}<span class="math inline">\(A\cap\{\tau_1\leq k\}\)</span>{% endraw %} is a finite union of {% raw %}<span class="math inline">\(\mathscr F_k\)</span>{% endraw %}-events and {% raw %}<span class="math inline">\(\{\tau_2&gt;k\}\in\mathscr F_k\)</span>{% endraw %}. Conditioning each summand on {% raw %}<span class="math inline">\(\mathscr F_k\)</span>{% endraw %} shows its expectation is nonnegative. Thus</p>
{% raw %}<div class="math display">\[\mathbb E(X_{\tau_2}\mathbf1_A)\geq\mathbb E(X_{\tau_1}\mathbf1_A)\qquad(A\in\mathscr F_{\tau_1}).\]</div>{% endraw %}
<p>The defining property of conditional expectation yields {% raw %}<span class="math inline">\(\mathbb E(X_{\tau_2}\mid\mathscr F_{\tau_1})\geq X_{\tau_1}\)</span>{% endraw %} almost surely. The bounded stopping times ensure every sum and expectation used here is finite; no unbounded optional-sampling assertion is being used. ◻</p>
</div>
<div id="thm:kolmogorov-submartingale" class="theorem" data-note-number="10" data-note-kind="Theorem">
<p><strong>Theorem 10</strong> (Kolmogorov).  Let {% raw %}<span class="math inline">\(\{(X_i,\mathscr F_i)\}_{1 \leq i \leq n}\)</span>{% endraw %} be a submartingale. Then, for any {% raw %}<span class="math inline">\(\varepsilon &gt; 0\)</span>{% endraw %}, </p>

{% raw %}<div class="math display">\[\mathop{\mathrm{\mathbf{P}\!\,}}\left( \max_{1 \leq k \leq n} X_k \geq \varepsilon \right) \leq \frac{\mathbb{E} |X_n|}{\varepsilon} ~.\]</div>{% endraw %}
</div>
<div class="proof">
<p><em>Proof.</em> Separate paths according to the first time they reach the threshold. The first-crossing events are disjoint, so their contributions can be added. Define the event </p>

{% raw %}<div class="math display">\[\begin{aligned}
        E = \left\{ \max_{1 \leq i \leq n} X_i \geq \varepsilon \right\} = \bigcup_{1 \leq i \leq n} \left\{ X_i \geq \varepsilon ~,~ \max_{1 \leq j &lt; i} X_j &lt; \varepsilon \right\} ~,
    
\end{aligned}\]</div>{% endraw %}
<p> where, going forward, we write {% raw %}<span class="math inline">\(E_i =\left\{ X_i \geq \varepsilon ~,~ \max_{1 \leq j &lt; i} X_j &lt; \varepsilon \right\}\)</span>{% endraw %}. Note that {% raw %}<span class="math inline">\(E_i\)</span>{% endraw %} is disjoint and {% raw %}<span class="math inline">\(\mathscr F_i\)</span>{% endraw %}-measurable. It then follows that </p>

{% raw %}<div class="math display">\[\begin{aligned}
        \varepsilon \mathop{\mathrm{\mathbf{P}\!\,}}\left( \max_{1 \leq k \leq n} X_k \geq \varepsilon \right) &amp;\leq \sum_{1 \leq i \leq n} \mathbb{E} [X_i \mathbb 1 \{E_i\}] \leq \sum_{1 \leq i \leq n} \mathbb{E} [\mathbb{E}[X_n \mid \mathscr F_i] \mathbb 1 \{E_i\}] \\
        &amp;= \sum_{1 \leq i \leq n} \mathbb{E} [\mathbb{E}[X_n \mathbb 1 \{E_i\} \mid \mathscr F_i]] \\
        &amp;= \sum_{1 \leq i \leq n} \mathbb{E} [X_n \mathbb 1\{E_i\}] = \mathbb{E} [X_n \mathbb 1 \{E\}] \leq \mathbb{E}|X_n| ~,
    
\end{aligned}\]</div>{% endraw %}
<p> which proves the bound. ◻</p>

</div>
<div id="thm:doob-martingale-cvg-simplest" class="theorem" data-note-number="11" data-note-kind="Theorem">
<p><strong>Theorem 11</strong> (Doob; Martingale Convergence).  Let {% raw %}<span class="math inline">\(X_1, X_2, \dots\)</span>{% endraw %} be a submartingale. Suppose {% raw %}<span class="math inline">\(K = \sup_{n \in \mathbb N} \mathbb{E} |X_n| &lt; \infty\)</span>{% endraw %}. Then, {% raw %}<span class="math inline">\(X_n \xrightarrow{\rm a.s.} X\)</span>{% endraw %}, where {% raw %}<span class="math inline">\(X\)</span>{% endraw %} is a random variable such that {% raw %}<span class="math inline">\(\mathbb{E}|X| \leq K\)</span>{% endraw %}.</p>

</div>
<p>The proof of Doob’s martingale convergence theorem controls repeated crossings between two levels. Fix real numbers {% raw %}<span class="math inline">\(a&lt;b\)</span>{% endraw %}. Define successive entrance times by</p>

{% raw %}<div class="math display">\[\tau_1=\inf\{j\geq1:X_j\leq a\},\qquad
\tau_{2r}=\inf\{j&gt;\tau_{2r-1}:X_j\geq b\},\qquad
\tau_{2r+1}=\inf\{j&gt;\tau_{2r}:X_j\leq a\}.\]</div>{% endraw %}

<p>The infimum of an empty set is infinity, and every later entrance time is then infinity. These are stopping times: each decision at time {% raw %}<span class="math inline">\(j\)</span>{% endraw %} depends only on the observations through {% raw %}<span class="math inline">\(j\)</span>{% endraw %}. The number of completed upcrossings by time {% raw %}<span class="math inline">\(n\)</span>{% endraw %} is {% raw %}<span class="math inline">\(\mathscr U_n=\sum_{r\geq1}\mathbb1_{\{\tau_{2r}\leq n\}}\)</span>{% endraw %}. It increases with {% raw %}<span class="math inline">\(n\)</span>{% endraw %}. The interval {% raw %}<span class="math inline">\([a,b]\)</span>{% endraw %} consists of values of the process, not observation times.</p>

<p>For an equivalent predictable description, put {% raw %}<span class="math inline">\(U_1=0\)</span>{% endraw %} and, for {% raw %}<span class="math inline">\(k\geq2\)</span>{% endraw %}, let {% raw %}<span class="math inline">\(U_k\)</span>{% endraw %} indicate whether the increment from {% raw %}<span class="math inline">\(k-1\)</span>{% endraw %} to {% raw %}<span class="math inline">\(k\)</span>{% endraw %} is taken during an unfinished crossing:</p>

{% raw %}<div class="math display">\[U_k=\begin{cases}
0,&amp;U_{k-1}=0,\ X_{k-1}&gt;a,\quad\text{or }U_{k-1}=1,\ X_{k-1}\geq b,\\
1,&amp;U_{k-1}=0,\ X_{k-1}\leq a,\quad\text{or }U_{k-1}=1,\ X_{k-1}&lt;b.
\end{cases}\]</div>{% endraw %}

<div id="lem:upcrossing-inequality" class="lemma" data-note-number="12" data-note-kind="Lemma">
<p><strong>Lemma 12</strong> (Upcrossing Inequality).  The number of upcrossings of a submartingale {% raw %}<span class="math inline">\(\{X_n, \mathscr F_n\}_{n \in \mathbb N}\)</span>{% endraw %}, denoted {% raw %}<span class="math inline">\(\mathscr U_n\)</span>{% endraw %} as above, satisfies </p>

{% raw %}<div class="math display">\[\mathbb{E} \mathscr U_n \leq \frac{\mathbb{E} |X_n| + |a|}{b-a} ~.\]</div>{% endraw %}
</div>
<div class="proof">
<p><em>Proof.</em> Let {% raw %}<span class="math inline">\(Y_k=(X_k-a)^+\)</span>{% endraw %} and {% raw %}<span class="math inline">\(c=b-a\)</span>{% endraw %}. Convexity and monotonicity show that {% raw %}<span class="math inline">\(Y\)</span>{% endraw %} is a nonnegative submartingale; this is the second part of <a href="#prop:convex-function-martingale-submartingale">Proposition 8</a>. The same entrance times describe crossings of {% raw %}<span class="math inline">\(Y\)</span>{% endraw %} from zero to at least {% raw %}<span class="math inline">\(c\)</span>{% endraw %}. The gain</p>

{% raw %}<div class="math display">\[G_n=\sum_{k=2}^n U_k(Y_k-Y_{k-1})\]</div>{% endraw %}

<p>is at least {% raw %}<span class="math inline">\(c\mathscr U_n\)</span>{% endraw %} on every path. Each completed holding interval begins at zero and ends at a value at least {% raw %}<span class="math inline">\(c\)</span>{% endraw %}; any unfinished interval also has nonnegative gain. Moreover, {% raw %}<span class="math inline">\(U_k\)</span>{% endraw %} is {% raw %}<span class="math inline">\(\mathscr F_{k-1}\)</span>{% endraw %}-measurable, so the submartingale property gives</p>

{% raw %}<div class="math display">\[\mathbb{E}\sum_{k=2}^n(1-U_k)(Y_k-Y_{k-1})\geq0.
\qquad
\mathbb{E} G_n\leq\mathbb{E}(Y_n-Y_1)\leq\mathbb{E} Y_n.\]</div>{% endraw %}

<p>Consequently {% raw %}<span class="math inline">\((b-a)\mathbb{E}\mathscr U_n\leq\mathbb{E}(X_n-a)^+\leq\mathbb{E}|X_n|+|a|\)</span>{% endraw %}, which proves the bound. ◻</p>

</div>
<div class="proof">
<p><em>Proof of <a href="#thm:doob-martingale-cvg-simplest">Theorem 11</a>.</em> For each rational pair {% raw %}<span class="math inline">\(a&lt;b\)</span>{% endraw %}, monotone convergence and the upcrossing bound give {% raw %}<span class="math inline">\(\mathbb{E}\mathscr U_\infty(a,b)\leq(K+|a|)/(b-a)&lt;\infty\)</span>{% endraw %}. Thus there are only finitely many such upcrossings almost surely. Take the intersection of these probability-one events over the countably many rational pairs. On that event the lower and upper limits of {% raw %}<span class="math inline">\(X_n\)</span>{% endraw %} agree; otherwise two rational numbers strictly between them would be crossed infinitely often. Hence the limit exists in the extended real line. Fatou’s lemma gives {% raw %}<span class="math inline">\(\mathbb{E}\liminf_n|X_n|\leq K\)</span>{% endraw %}, so the limit is finite almost surely and has expected absolute value at most {% raw %}<span class="math inline">\(K\)</span>{% endraw %}. ◻</p>

</div>

<nav class="note-series" aria-label="Notes in this series"><p>Next: <a href="{% post_url 2023-02-18-martingale-square-function-inequalities %}">Martingale Square-Function Inequalities</a></p></nav>

</div>
