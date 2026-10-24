---
layout: "post"
title: "Probability Spaces, Independence, and Countable Constructions"
date: "2021-10-02"
tags: ["probability theory", "statistics"]
excerpt: "Probability theory relies on the following fact about extensions of measures."
note_series: "Probability and statistics"
note_source: "assets/notes/Overleaf Projects (32 items)/Statistics and Prob Theory - Notes/stats.tex"
redirect_from: ["/2021/10/02/probability-spaces-and-countable-constructions/", "/2021/10/21/independence/"]
---

<div class="note-content" markdown="0">

<p>An infinite sequence of experiments requires more than a list of finite-dimensional probabilities. We must specify which events are measurable, extend probabilities to those events, and understand which properties of independence survive countable constructions. Cylinder sets provide the starting point. The extension theorem, Borel–Cantelli lemmas, and zero-one law then address these three questions.</p>

<div id="fundamental-facts" data-note-section="title">

</div>
<p>Let {% raw %}<span class="math inline">\((\Omega,\mathscr F,\mathop{\mathrm{\mathbf{P}}})\)</span>{% endraw %} denote a probability space.</p>

<div id="result-1" class="definition" data-note-number="1" data-note-kind="Definition">
<p><strong>Definition 1</strong>.  A class of subsets of {% raw %}<span class="math inline">\(\Omega\)</span>{% endraw %}, denoted {% raw %}<span class="math inline">\(\mathcal F\)</span>{% endraw %}, is called a <em>field</em> (in the algebraic sense) if (i) {% raw %}<span class="math inline">\(\Omega \in \mathcal F\)</span>{% endraw %}, (ii) {% raw %}<span class="math inline">\(A \in \mathcal F \Rightarrow A^c \in \mathcal F\)</span>{% endraw %}, and (iii) {% raw %}<span class="math inline">\(A,B \in \mathcal F \Rightarrow A \cup B \in \mathcal F\)</span>{% endraw %}. A <em>{% raw %}<span class="math inline">\(\sigma\)</span>{% endraw %}-field</em> is a field with the additional requirement that (iv) if {% raw %}<span class="math inline">\(A_i \in \mathcal F\)</span>{% endraw %} for all {% raw %}<span class="math inline">\(i \in \mathbb N\)</span>{% endraw %}, then {% raw %}<span class="math inline">\(\bigcup_{i \in \mathbb N} A_i \in \mathcal F\)</span>{% endraw %}.</p>

</div>
<h3 data-note-section="1" id="denumerable-probabilities">1. Denumerable Probabilities</h3>
<p>Let {% raw %}<span class="math inline">\(S\)</span>{% endraw %} be a finite set (say, consisting of possible outcomes of an experiment). Let {% raw %}<span class="math inline">\(\Omega = S^\infty\)</span>{% endraw %} be the space of infinite sequences of elements of {% raw %}<span class="math inline">\(S\)</span>{% endraw %}, i.e. {% raw %}<span class="math inline">\(\omega \in \Omega\)</span>{% endraw %} takes the form </p>

{% raw %}<div class="math display">\[\omega = (z_1(\omega), z_2(\omega), \dots ) ~.\]</div>{% endraw %}
<p> Here, {% raw %}<span class="math inline">\(z_k (\omega) \in S\)</span>{% endraw %} for all {% raw %}<span class="math inline">\(\omega \in S^\infty\)</span>{% endraw %} and {% raw %}<span class="math inline">\(k \geq 1\)</span>{% endraw %}. One can think of this as repeating a simple experiment, represented by {% raw %}<span class="math inline">\(S\)</span>{% endraw %}, infinitely often.</p>

<p>Some nomenclature from geometry carries over to this setting. Each {% raw %}<span class="math inline">\(z_k : S^\infty \to S\)</span>{% endraw %} is called a <em>coordinate function</em> or <em>canonical projection</em>. Letting {% raw %}<span class="math inline">\(S^n \triangleq \underbrace{S \times \dots \times S}_{n \text{ times}}\)</span>{% endraw %}, we write {% raw %}<span class="math inline">\((s_1,\dots,s_n) \in S^n\)</span>{% endraw %} to denote an element of {% raw %}<span class="math inline">\(S^n\)</span>{% endraw %}. We can write realizations of a {% raw %}<span class="math inline">\(n\)</span>{% endraw %}-sequence as </p>

{% raw %}<div class="math display">\[\{ \omega : (z_1(\omega),\dots,z_n(\omega)) = (s_1,\dots,s_n) \} ~,\]</div>{% endraw %}
<p> which represents the event that the first {% raw %}<span class="math inline">\(n\)</span>{% endraw %} repetitions of the experiment are given by the outcomes {% raw %}<span class="math inline">\(s_1,\dots,s_n\)</span>{% endraw %}. Accordingly, for {% raw %}<span class="math inline">\(H \subset S^n\)</span>{% endraw %}, we define a <em>cylinder of rank {% raw %}<span class="math inline">\(n\)</span>{% endraw %}</em> to be </p>

{% raw %}<div class="math display">\[A = \{ \omega: (z_1(\omega),\dots,z_n(\omega)) \in H \} ~.\]</div>{% endraw %}
<p> Clearly, if we let {% raw %}<span class="math inline">\(\mathcal C_0\)</span>{% endraw %} denote the class of cylinders of all ranks, then {% raw %}<span class="math inline">\(\mathcal C_0\)</span>{% endraw %} is a field.</p>

<p>In what follows, we adopt the standard notation: for a collection of sets {% raw %}<span class="math inline">\(A_n\)</span>{% endraw %} and another set {% raw %}<span class="math inline">\(A\)</span>{% endraw %}, we write {% raw %}<span class="math inline">\(A_n \uparrow A\)</span>{% endraw %} to mean {% raw %}<span class="math inline">\(A_1 \subset A_2 \subset \dots\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(A = \bigcup_{i \in \mathbb N} A_i\)</span>{% endraw %}. Furthermore, we write {% raw %}<span class="math inline">\(A_n \downarrow A\)</span>{% endraw %} to mean {% raw %}<span class="math inline">\(A_1 \supset A_2 \supset \dots\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(A = \bigcap_{i \in \mathbb N} A_i\)</span>{% endraw %}.</p>

<div id="lem:intersection-of-cylinders-nonempty" class="lemma" data-note-number="2" data-note-kind="Lemma">
<p><strong>Lemma 2</strong>.  Let {% raw %}<span class="math inline">\(A_n\)</span>{% endraw %} denote nonempty cylinders. If {% raw %}<span class="math inline">\(A_n \downarrow A\)</span>{% endraw %}, then {% raw %}<span class="math inline">\(A\)</span>{% endraw %} is nonempty.</p>

</div>
<div class="proof">
<p><em>Proof.</em> Choose {% raw %}<span class="math inline">\(\omega^{(n)}\in A_n\)</span>{% endraw %}. Because {% raw %}<span class="math inline">\(S\)</span>{% endraw %} is finite, infinitely many of these sequences have the same first coordinate. Among that subsequence, infinitely many have the same second coordinate; continue recursively. The diagonal subsequence {% raw %}<span class="math inline">\(\omega^{(n_j)}\)</span>{% endraw %}, with increasing {% raw %}<span class="math inline">\(n_j\)</span>{% endraw %}, eventually has each of its first {% raw %}<span class="math inline">\(r\)</span>{% endraw %} coordinates fixed, for every {% raw %}<span class="math inline">\(r\)</span>{% endraw %}. Let {% raw %}<span class="math inline">\(\omega\in S^\infty\)</span>{% endraw %} have those fixed coordinates.</p>
<p>Fix {% raw %}<span class="math inline">\(m\)</span>{% endraw %}, and let {% raw %}<span class="math inline">\(r_m\)</span>{% endraw %} be the rank of the cylinder {% raw %}<span class="math inline">\(A_m\)</span>{% endraw %}. For sufficiently large {% raw %}<span class="math inline">\(j\)</span>{% endraw %}, both {% raw %}<span class="math inline">\(n_j\geq m\)</span>{% endraw %} and the first {% raw %}<span class="math inline">\(r_m\)</span>{% endraw %} coordinates of {% raw %}<span class="math inline">\(\omega^{(n_j)}\)</span>{% endraw %} equal those of {% raw %}<span class="math inline">\(\omega\)</span>{% endraw %}. Since {% raw %}<span class="math inline">\(\omega^{(n_j)}\in A_{n_j}\subseteq A_m\)</span>{% endraw %}, and membership in {% raw %}<span class="math inline">\(A_m\)</span>{% endraw %} depends only on those coordinates, {% raw %}<span class="math inline">\(\omega\in A_m\)</span>{% endraw %}. This holds for every {% raw %}<span class="math inline">\(m\)</span>{% endraw %}, so {% raw %}<span class="math inline">\(\omega\in\bigcap_mA_m\)</span>{% endraw %}. Finiteness of {% raw %}<span class="math inline">\(S\)</span>{% endraw %} provides the compactness needed for this elementary product argument. ◻</p>
</div>
<div id="result-3" class="theorem" data-note-number="3" data-note-kind="Theorem">
<p><strong>Theorem 3</strong>.  Every finitely additive probability measure on {% raw %}<span class="math inline">\(\mathcal C_0\)</span>{% endraw %} (field of cylinders in {% raw %}<span class="math inline">\(S^\infty\)</span>{% endraw %}) is countably additive.</p>

</div>
<div class="proof">
<p><em>Proof.</em> Let disjoint cylinders {% raw %}<span class="math inline">\(B_1,B_2,\ldots\)</span>{% endraw %} have union {% raw %}<span class="math inline">\(B\in\mathcal C_0\)</span>{% endraw %}. The remainders {% raw %}<span class="math inline">\(R_n=B\setminus\bigcup_{j=1}^nB_j\)</span>{% endraw %} are cylinders decreasing to the empty set. Lemma 2 implies that one of them, say {% raw %}<span class="math inline">\(R_N\)</span>{% endraw %}, must already be empty. Disjointness then forces {% raw %}<span class="math inline">\(B_j=\varnothing\)</span>{% endraw %} for {% raw %}<span class="math inline">\(j&gt;N\)</span>{% endraw %}, so finite additivity gives {% raw %}<span class="math inline">\(P(B)=\sum_{j=1}^NP(B_j)=\sum_{j\geq1}P(B_j)\)</span>{% endraw %}. This is precisely countable additivity on the field; it does not assert that an arbitrary countable union of cylinders is a cylinder. ◻</p>
</div>
<p>Specifying probabilities on events involving finitely many coordinates is only the first step. We also need probabilities for countable combinations of those events. The extension theorem gives a unique measure on the generated sigma-field.</p>

<div id="thm:P-unique-extension-to-sigma-field" class="theorem" data-note-number="4" data-note-kind="Theorem">
<p><strong>Theorem 4</strong>.  A nonnegative, countably additive set function on a field, with total mass one, admits a unique probability extension to the generated {% raw %}<span class="math inline">\(\sigma\)</span>{% endraw %}-field.</p>

</div>
<p>The extension is constructed by covering an arbitrary set with measurable sets whose probabilities are already known. Taking the cheapest such cover gives an outer measure; the measurability criterion identifies the sets on which this outer measure is additive.</p>

<ol>
<li><p>Let {% raw %}<span class="math inline">\(\mathop{\mathrm{\mathbf{P}}}\)</span>{% endraw %} denote a probability measure on a field {% raw %}<span class="math inline">\(\mathcal F_0\)</span>{% endraw %}, and let {% raw %}<span class="math inline">\(\sigma(\mathcal F_0)\)</span>{% endraw %} denote the generated {% raw %}<span class="math inline">\(\sigma\)</span>{% endraw %}-field.</p>

<p>For each subset {% raw %}<span class="math inline">\(A\)</span>{% endraw %} of {% raw %}<span class="math inline">\(\Omega\)</span>{% endraw %}, define the <em>outer measure</em> as </p>

{% raw %}<div class="math display">\[\mathop{\mathrm{\mathbf{P}}}^*(A) = \inf_{A_1,A_2,\dots} \sum_{n \in \mathbb N} \mathop{\mathrm{\mathbf{P}}}(A_n) ~,\]</div>{% endraw %}
<p> where the infimum is taken over all finite or countably infinite sequences of {% raw %}<span class="math inline">\(\mathcal F_0\)</span>{% endraw %}-sets satisfying {% raw %}<span class="math inline">\(A \subset \bigcup_{n \in \mathbb N} A_n\)</span>{% endraw %}. The infimum permits us to improve the bound by choosing more efficient covers. Overlap between the covering sets can cause overcounting, so covers of {% raw %}<span class="math inline">\(A\)</span>{% endraw %} with little overlap are often useful.</p></li>
<li><p>Define the <em>inner measure</em> as </p>

{% raw %}<div class="math display">\[\mathop{\mathrm{\mathbf{P}}}_* (A) = 1 - \mathop{\mathrm{\mathbf{P}}}^*(A^c) ~.\]</div>{% endraw %}
<p>For a probability measure, complementation turns outer approximation into inner approximation. If {% raw %}<span class="math inline">\(A\)</span>{% endraw %} is measurable, then {% raw %}<span class="math inline">\(P_*(A)=P(A)=P^*(A)\)</span>{% endraw %}. For instance, the rational numbers in the unit interval have both inner and outer measure zero: enumerate them and cover the {% raw %}<span class="math inline">\(j\)</span>{% endraw %}th rational by an interval of length less than {% raw %}<span class="math inline">\(\varepsilon 2^{-j}\)</span>{% endraw %}. Thus inner and outer measure can differ only for a nonmeasurable set; the set of normal numbers is not such an example.</p></li>
</ol>
<p>The Carathéodory criterion tests whether splitting any set along {% raw %}<span class="math inline">\(A\)</span>{% endraw %} preserves its outer measure. It requires the following identity for every subset {% raw %}<span class="math inline">\(E\subseteq\Omega\)</span>{% endraw %}:</p>

{% raw %}<div class="math display">\[\begin{aligned}
    \mathop{\mathrm{\mathbf{P}}}^*(A \cap E) + \mathop{\mathrm{\mathbf{P}}}^*(A^c \cap E) = \mathop{\mathrm{\mathbf{P}}}^* (E) ~.
\end{aligned}\]</div>{% endraw %}
<p> If this relation holds, we say the set {% raw %}<span class="math inline">\(A\)</span>{% endraw %} is <em>{% raw %}<span class="math inline">\(\mathop{\mathrm{\mathbf{P}}}^*\)</span>{% endraw %}-measurable</em>. The set function {% raw %}<span class="math inline">\(\mathop{\mathrm{\mathbf{P}}}^*\)</span>{% endraw %} requires the following four properties:</p>

<ol>
<li><p>{% raw %}<span class="math inline">\(\mathop{\mathrm{\mathbf{P}}}^*(\emptyset)=0\)</span>{% endraw %};</p></li>
<li><p>{% raw %}<span class="math inline">\(\mathop{\mathrm{\mathbf{P}}}^*\)</span>{% endraw %} is nonnegative;</p></li>
<li><p>{% raw %}<span class="math inline">\(\mathop{\mathrm{\mathbf{P}}}^*\)</span>{% endraw %} is monotone;</p></li>
<li><p>{% raw %}<span class="math inline">\(\mathop{\mathrm{\mathbf{P}}}^*\)</span>{% endraw %} is countably <em>subadditive</em>.</p></li>
</ol>
<p>Now, let {% raw %}<span class="math inline">\(\mathscr M\)</span>{% endraw %} denote the collection of {% raw %}<span class="math inline">\(\mathop{\mathrm{\mathbf{P}}}^*\)</span>{% endraw %}-measurable sets.</p>

<div id="lem:all-steps-extension-unique-to-sigma-field" class="lemma" data-note-number="5" data-note-kind="Lemma">
<p><strong>Lemma 5</strong>.  </p>

<ol>
<li><p>The class {% raw %}<span class="math inline">\(\mathscr M\)</span>{% endraw %} is a field.</p></li>
<li><p>If {% raw %}<span class="math inline">\(A_1,A_2,A_3,\dots\)</span>{% endraw %} is a(n) (in)finite sequence of disjoint sets in {% raw %}<span class="math inline">\(\mathscr M\)</span>{% endraw %}, then, for each {% raw %}<span class="math inline">\(E \subset \Omega\)</span>{% endraw %}, </p>

{% raw %}<div class="math display">\[\mathop{\mathrm{\mathbf{P}}}^*\left( E \cap \left( \bigcup_{n \in \mathbb N} A_n \right) \right) = \sum_{n \in \mathbb N} \mathop{\mathrm{\mathbf{P}}}^*\left( E \cap A_n \right) ~.\]</div>{% endraw %}</li>
<li><p>{% raw %}<span class="math inline">\(\mathscr M\)</span>{% endraw %} is a {% raw %}<span class="math inline">\(\sigma\)</span>{% endraw %}-field, and {% raw %}<span class="math inline">\(\mathop{\mathrm{\mathbf{P}}}^*\)</span>{% endraw %} restricted to {% raw %}<span class="math inline">\(\mathscr M\)</span>{% endraw %} is countably additive.</p></li>
<li><p>For the outer measure {% raw %}<span class="math inline">\(\mathop{\mathrm{\mathbf{P}}}^*\)</span>{% endraw %}, {% raw %}<span class="math inline">\(\mathcal F_0 \subset \mathscr M\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(\mathop{\mathrm{\mathbf{P}}}^*(A)=\mathop{\mathrm{\mathbf{P}}}(A)\)</span>{% endraw %} for {% raw %}<span class="math inline">\(A \in \mathcal F_0\)</span>{% endraw %}.</p></li>
</ol>
</div>
<div class="proof">
<p><em>Proof.</em> First verify that the covering construction is an outer measure. The empty cover gives {% raw %}<span class="math inline">\(P^*(\varnothing)=0\)</span>{% endraw %}, and nonnegativity and monotonicity follow directly. For sets {% raw %}<span class="math inline">\(E_j\)</span>{% endraw %}, choose a countable field-set cover of each whose cost is below {% raw %}<span class="math inline">\(P^*(E_j)+\varepsilon2^{-j}\)</span>{% endraw %}. Combining the covers gives</p>
{% raw %}<div class="math display">\[P^*\left(\bigcup_jE_j\right)\leq\sum_jP^*(E_j)+\varepsilon.\]</div>{% endraw %}
<p>Let {% raw %}<span class="math inline">\(\varepsilon\downarrow0\)</span>{% endraw %}. All outer measures here are at most one, since {% raw %}<span class="math inline">\(\Omega\)</span>{% endraw %} is an available cover.</p>
<p>The empty set satisfies the Carathéodory identity, and the identity is unchanged on replacing a set by its complement. If {% raw %}<span class="math inline">\(A,B\in\mathscr M\)</span>{% endraw %}, first split an arbitrary {% raw %}<span class="math inline">\(E\)</span>{% endraw %} along {% raw %}<span class="math inline">\(A\)</span>{% endraw %}, and then split both pieces along {% raw %}<span class="math inline">\(B\)</span>{% endraw %}. The resulting four-piece identity and subadditivity imply</p>
{% raw %}<div class="math display">\[P^*(E)\geq P^*(E\cap(A\cup B))+P^*(E\setminus(A\cup B)).\]</div>{% endraw %}
<p>The reverse inequality is always true by subadditivity, so {% raw %}<span class="math inline">\(A\cup B\in\mathscr M\)</span>{% endraw %}. Thus {% raw %}<span class="math inline">\(\mathscr M\)</span>{% endraw %} is a field.</p>
<p>For pairwise disjoint {% raw %}<span class="math inline">\(A_j\in\mathscr M\)</span>{% endraw %}, put {% raw %}<span class="math inline">\(U=\bigcup_{j\geq1}A_j\)</span>{% endraw %}. Repeated splitting gives, for every {% raw %}<span class="math inline">\(N\)</span>{% endraw %},</p>
{% raw %}<div class="math display">\[P^*(E)=\sum_{j=1}^NP^*(E\cap A_j)+P^*\left(E\setminus\bigcup_{j=1}^NA_j\right)
\geq\sum_{j=1}^NP^*(E\cap A_j)+P^*(E\setminus U).\]</div>{% endraw %}
<p>Let {% raw %}<span class="math inline">\(N\to\infty\)</span>{% endraw %}. Subadditivity on {% raw %}<span class="math inline">\(E\cap U\)</span>{% endraw %} shows that the right-hand side is at least {% raw %}<span class="math inline">\(P^*(E\cap U)+P^*(E\setminus U)\)</span>{% endraw %}. This proves {% raw %}<span class="math inline">\(U\in\mathscr M\)</span>{% endraw %}. Setting {% raw %}<span class="math inline">\(E\)</span>{% endraw %} in the same finite-splitting formula equal to {% raw %}<span class="math inline">\(E\cap U\)</span>{% endraw %} also gives</p>
{% raw %}<div class="math display">\[P^*(E\cap U)\geq\sum_{j=1}^NP^*(E\cap A_j).\]</div>{% endraw %}
<p>Pass to the supremum over {% raw %}<span class="math inline">\(N\)</span>{% endraw %} and use subadditivity for the reverse inequality, obtaining assertion (ii). Arbitrary countable unions can be made disjoint by taking successive differences, so {% raw %}<span class="math inline">\(\mathscr M\)</span>{% endraw %} is a sigma-field. Taking {% raw %}<span class="math inline">\(E=\Omega\)</span>{% endraw %} in (ii) gives countable additivity on it.</p>
<p>Finally let {% raw %}<span class="math inline">\(A\in\mathcal F_0\)</span>{% endraw %}. For any field-set cover {% raw %}<span class="math inline">\(E\subseteq\bigcup_nC_n\)</span>{% endraw %}, finite additivity gives</p>
{% raw %}<div class="math display">\[\sum_nP(C_n)=\sum_nP(C_n\cap A)+\sum_nP(C_n\setminus A)
\geq P^*(E\cap A)+P^*(E\setminus A).\]</div>{% endraw %}
<p>Taking the infimum over covers shows that {% raw %}<span class="math inline">\(A\in\mathscr M\)</span>{% endraw %}. The single-set cover gives {% raw %}<span class="math inline">\(P^*(A)\leq P(A)\)</span>{% endraw %}. Conversely, if {% raw %}<span class="math inline">\(A\subseteq\bigcup_n C_n\)</span>{% endraw %}, the disjoint field sets {% raw %}<span class="math inline">\(D_n=(A\cap C_n)\setminus\bigcup_{j&lt;n}C_j\)</span>{% endraw %} have union {% raw %}<span class="math inline">\(A\)</span>{% endraw %}. Countable additivity of the original set function gives</p>
{% raw %}<div class="math display">\[P(A)=\sum_nP(D_n)\leq\sum_nP(C_n).\]</div>{% endraw %}
<p>Taking the infimum proves {% raw %}<span class="math inline">\(P^*(A)=P(A)\)</span>{% endraw %}. This last step explains why countable additivity on the original field is necessary. ◻</p>
</div>
<div class="proof">
<p><em>Proof of Theorem 4.</em> Lemma 5 gives {% raw %}<span class="math inline">\(\mathcal F_0\subseteq\mathscr M\)</span>{% endraw %}, hence {% raw %}<span class="math inline">\(\sigma(\mathcal F_0)\subseteq\mathscr M\)</span>{% endraw %}, and restriction of {% raw %}<span class="math inline">\(P^*\)</span>{% endraw %} to this generated sigma-field is the desired extension. For uniqueness, if {% raw %}<span class="math inline">\(P_1,P_2\)</span>{% endraw %} are probability extensions, the class {% raw %}<span class="math inline">\(\{A:P_1(A)=P_2(A)\}\)</span>{% endraw %} contains {% raw %}<span class="math inline">\(\Omega\)</span>{% endraw %}, is closed under complements, and is closed under countable disjoint unions. It is therefore a Dynkin class containing the pi-system {% raw %}<span class="math inline">\(\mathcal F_0\)</span>{% endraw %}. The pi–lambda theorem implies that it contains {% raw %}<span class="math inline">\(\sigma(\mathcal F_0)\)</span>{% endraw %}, proving uniqueness. ◻</p>


</div>
<p>The Borel–Cantelli lemmas answer a different question about countably many events: do infinitely many of them occur? A finite sum of probabilities rules this out without any independence assumption. For independent events, a divergent sum forces infinitely many occurrences.</p>

<div id="lem:borel-cantelli" class="lemma" data-note-number="6" data-note-kind="Lemma">
<p><strong>Lemma 6</strong> (Borel-Cantelli).  </p>

<ol>
<li><p>If {% raw %}<span class="math inline">\(\sum_{n \in \mathbb N} \mathop{\mathrm{\mathbf{P}}}(A_n) &lt; \infty\)</span>{% endraw %}, then {% raw %}<span class="math inline">\(\mathop{\mathrm{\mathbf{P}}}(\limsup_{n\to\infty} A_n) = 0\)</span>{% endraw %}.</p></li>
<li><p>If {% raw %}<span class="math inline">\(\{A_n\}_{n \in \mathbb N}\)</span>{% endraw %} is a sequence of independent events, and {% raw %}<span class="math inline">\(\sum_{n \in \mathbb N} \mathop{\mathrm{\mathbf{P}}}(A_n)\)</span>{% endraw %} diverges, then {% raw %}<span class="math inline">\(\mathop{\mathrm{\mathbf{P}}}(\limsup_{n\to\infty} A_n) = 1\)</span>{% endraw %}.</p></li>
</ol>
</div>

<div class="proof">
<p><em>Proof.</em> For the first assertion, Tonelli’s theorem gives {% raw %}<span class="math inline">\(\mathbb{E}\sum_n1_{A_n}=\sum_nP(A_n)&lt;\infty\)</span>{% endraw %}. Hence only finitely many events occur almost surely.</p>
<p>For the second, fix {% raw %}<span class="math inline">\(M\)</span>{% endraw %}. Independence gives</p>

{% raw %}<div class="math display">\[P\left(\bigcap_{k=M}^N A_k^c\right)=\prod_{k=M}^N(1-P(A_k))\leq\exp\left(-\sum_{k=M}^NP(A_k)\right)\longrightarrow0.\]</div>{% endraw %}<p>Continuity from above therefore gives {% raw %}<span class="math inline">\(P(\bigcap_{k=M}^{\infty}A_k^c)=0\)</span>{% endraw %}. Thus {% raw %}<span class="math inline">\(P(\bigcup_{k=M}^{\infty}A_k)=1\)</span>{% endraw %} for each {% raw %}<span class="math inline">\(M\)</span>{% endraw %}. Intersecting these countably many probability-one events proves {% raw %}<span class="math inline">\(P(\limsup_n A_n)=1\)</span>{% endraw %}.</p>

<p>◻</p>
</div>

<div id="result-7" class="proposition" data-note-number="7" data-note-kind="Proposition">
<p><strong>Proposition 7</strong>. Put {% raw %}<span class="math inline">\(X=(X_1,\ldots,X_n):\Omega\to\mathbb R^n\)</span>{% endraw %}. Then {% raw %}<span class="math inline">\(\sigma(X)=\{X^{-1}(B):B\in\mathcal B(\mathbb R^n)\}\)</span>{% endraw %}. A real random variable {% raw %}<span class="math inline">\(Y\)</span>{% endraw %} is {% raw %}<span class="math inline">\(\sigma(X)\)</span>{% endraw %}-measurable if and only if {% raw %}<span class="math inline">\(Y=f(X)\)</span>{% endraw %} for a Borel function {% raw %}<span class="math inline">\(f:\mathbb R^n\to\mathbb R\)</span>{% endraw %}.</p>

</div>
<div class="proof">
<p><em>Proof.</em> The displayed collection is a sigma-field and is exactly the one generated by the coordinates of {% raw %}<span class="math inline">\(X\)</span>{% endraw %}. If {% raw %}<span class="math inline">\(Y\)</span>{% endraw %} is measurable for this sigma-field, choose finite-valued measurable {% raw %}<span class="math inline">\(Y_m\to Y\)</span>{% endraw %}. Each level set of {% raw %}<span class="math inline">\(Y_m\)</span>{% endraw %} is an inverse image under {% raw %}<span class="math inline">\(X\)</span>{% endraw %} of a Borel set. Making these Borel sets disjoint produces a Borel {% raw %}<span class="math inline">\(f_m\)</span>{% endraw %} with {% raw %}<span class="math inline">\(Y_m=f_m(X)\)</span>{% endraw %}. Define {% raw %}<span class="math inline">\(f(x)=\lim_m f_m(x)\)</span>{% endraw %} where the limit exists and is finite, and set it to zero elsewhere. This function is Borel and {% raw %}<span class="math inline">\(Y=f(X)\)</span>{% endraw %}. The reverse implication follows from measurability of compositions.</p>

<p>◻</p>
</div>
<p>A tail event is unaffected by discarding any finite initial segment. This makes it a natural object when studying eventual behaviour of an infinite sequence. Formally, let a sequence of events be denoted as {% raw %}<span class="math inline">\(A_1,A_2,A_3,\dots\)</span>{% endraw %} (with respect to a probability space {% raw %}<span class="math inline">\((\Omega, \mathscr F, \mathop{\mathrm{\mathbf{P}}})\)</span>{% endraw %}). Define </p>

{% raw %}<span id="eq:tail-sigma-field"></span><div class="math display">\[
    \mathscr F \triangleq \bigcap_{n \in \mathbb N} \sigma(A_n, A_{n+1}, \dots) ~.\tag{1}\]</div>{% endraw %}
<p> We call <a href="#eq:tail-sigma-field" data-reference-type="eqref" data-reference="eq:tail-sigma-field">(1)</a> the <em>tail {% raw %}<span class="math inline">\(\sigma\)</span>{% endraw %}-field associated with {% raw %}<span class="math inline">\(\{A_n,A_{n+1},\dots\}\)</span>{% endraw %}</em>. The elements of the tail {% raw %}<span class="math inline">\(\sigma\)</span>{% endraw %}-field are called <em>tail events</em>. For independent events, Kolmogorov’s zero-one law shows that every tail event has probability zero or one.</p>

<div id="thm:0-1-law" class="theorem" data-note-number="8" data-note-kind="Theorem">
<p><strong>Theorem 8</strong> (Zero-One Law).  Let {% raw %}<span class="math inline">\(A_1, A_2, \dots\)</span>{% endraw %} be a sequence of independent events. Then, for each event {% raw %}<span class="math inline">\(A\)</span>{% endraw %} in the tail {% raw %}<span class="math inline">\(\sigma\)</span>{% endraw %}-field, {% raw %}<span class="math inline">\(\mathop{\mathrm{\mathbf{P}}}(A)\)</span>{% endraw %} is either zero or one.</p>

</div>
<div class="proof">
<p><em>Proof.</em> Fix a tail event {% raw %}<span class="math inline">\(A\)</span>{% endraw %}, and put {% raw %}<span class="math inline">\(\mathscr G_n=\sigma(A_1,\ldots,A_n)\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\mathscr G_\infty=\sigma(A_1,A_2,\ldots)\)</span>{% endraw %}. Independence of finite collections, followed by the pi-system extension proved in Theorem 10, shows that {% raw %}<span class="math inline">\(\mathscr G_n\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\sigma(A_{n+1},A_{n+2},\ldots)\)</span>{% endraw %} are independent. Since {% raw %}<span class="math inline">\(A\)</span>{% endraw %} belongs to the latter sigma-field for every {% raw %}<span class="math inline">\(n\)</span>{% endraw %},</p>
{% raw %}<div class="math display">\[P(A\cap B)=P(A)P(B)\qquad\text{for every }B\in\bigcup_n\mathscr G_n.\]</div>{% endraw %}
<p>The union on the right is an algebra: two of its sets lie in some common {% raw %}<span class="math inline">\(\mathscr G_n\)</span>{% endraw %}. The class of all {% raw %}<span class="math inline">\(B\)</span>{% endraw %} satisfying the displayed identity is a Dynkin class, by the same complement/disjoint-union argument used in Theorem 10. It therefore contains {% raw %}<span class="math inline">\(\mathscr G_\infty\)</span>{% endraw %}. But {% raw %}<span class="math inline">\(A\in\mathscr G_\infty\)</span>{% endraw %}, so taking {% raw %}<span class="math inline">\(B=A\)</span>{% endraw %} yields {% raw %}<span class="math inline">\(P(A)=P(A)^2\)</span>{% endraw %}. The only solutions in {% raw %}<span class="math inline">\([0,1]\)</span>{% endraw %} are zero and one. ◻</p>
</div>
<h3 data-note-section="2" id="independence">2. Independence</h3>
<p>A sequence of real random variables is independent when the generated sigma-fields are independent. Here {% raw %}<span class="math inline">\(\sigma(X_i)=\{X_i^{-1}(H):H\in\mathcal B(\mathbb R)\}\)</span>{% endraw %}. Equivalently, for every finite selection of distinct indices and every choice of Borel sets, the following product identity holds (with the selected indices relabelled {% raw %}<span class="math inline">\(1,\ldots,n\)</span>{% endraw %}):</p>

{% raw %}<div class="math display">\[\begin{aligned}
    \mathop{\mathrm{\mathbf{P}}}(X_1 \in H_1, \dots, X_n \in H_n) = \mathop{\mathrm{\mathbf{P}}}(X_1 \in H_1) \cdots \mathop{\mathrm{\mathbf{P}}}(X_n \in H_n) ~.
\end{aligned}\]</div>{% endraw %}
<p> If we take {% raw %}<span class="math inline">\(H_i = \{x_i\}\)</span>{% endraw %}, then this is the familiar special case </p>

{% raw %}<div class="math display">\[\begin{aligned}
    \mathop{\mathrm{\mathbf{P}}}(X_1 = x_1,\dots,X_n = x_n) = \mathop{\mathrm{\mathbf{P}}}(X_1=x_1) \cdots \mathop{\mathrm{\mathbf{P}}}(X_n=x_n) ~,
\end{aligned}\]</div>{% endraw %}
<p>This point-mass identity characterizes independence for countably valued variables. For general real variables it is only a necessary condition; for continuous laws all its terms can vanish even under dependence.</p>

<p>Checking independence on every measurable set would be cumbersome. <a href="#thm:fundamental-thm-of-independence">Theorem 10</a> reduces the independence check to classes closed under finite intersections, then extends independence to the {% raw %}<span class="math inline">\(\sigma\)</span>{% endraw %}-fields generated by those classes.</p>

<div id="result-9" class="definition" data-note-number="9" data-note-kind="Definition">
<p><strong>Definition 9</strong>.  We often use <em>class</em> to refer to a collection of sets “following the same properties”, e.g. closed under finite intersections, countable unions, and so on. A collection of classes {% raw %}<span class="math inline">\(\{\mathscr K_1,\dots,\mathscr K_n\}\)</span>{% endraw %} in a given {% raw %}<span class="math inline">\(\sigma\)</span>{% endraw %}-field {% raw %}<span class="math inline">\(\mathscr F\)</span>{% endraw %} is <em>independent</em> if, for each choice of {% raw %}<span class="math inline">\(K_i \in \mathscr K_i\)</span>{% endraw %} for {% raw %}<span class="math inline">\(1 \leq i \leq n\)</span>{% endraw %}, {% raw %}<span class="math inline">\(K_1,\dots,K_n\)</span>{% endraw %} are <em>independent events</em>.</p>

</div>
<div id="thm:fundamental-thm-of-independence" class="theorem" data-note-number="10" data-note-kind="Theorem">
<p><strong>Theorem 10</strong>.  If each {% raw %}<span class="math inline">\(\mathscr K_i\)</span>{% endraw %} is a {% raw %}<span class="math inline">\(\pi\)</span>{% endraw %}-system (i.e. closed under finite intersections), and {% raw %}<span class="math inline">\(\mathscr K_1,\dots, \mathscr K_n\)</span>{% endraw %} are independent, then {% raw %}<span class="math inline">\(\sigma(\mathscr K_1), \dots, \sigma(\mathscr K_n)\)</span>{% endraw %} are independent.</p>

</div>
<div class="proof">
<p><em>Proof.</em> Add {% raw %}<span class="math inline">\(\Omega\)</span>{% endraw %} to each generating pi-system; this preserves the hypotheses because independence includes every subcollection. First fix {% raw %}<span class="math inline">\(K_2,\ldots,K_n\)</span>{% endraw %} in their generating classes, and let {% raw %}<span class="math inline">\(B=\bigcap_{i=2}^nK_i\)</span>{% endraw %}. Independence of these events gives {% raw %}<span class="math inline">\(P(B)=\prod_{i=2}^nP(K_i)\)</span>{% endraw %}. The class</p>
{% raw %}<div class="math display">\[\mathcal D=\{A\in\mathscr F:P(A\cap B)=P(A)P(B)\}\]</div>{% endraw %}
<p>is a Dynkin class: it contains {% raw %}<span class="math inline">\(\Omega\)</span>{% endraw %}, is closed under complements by subtracting from {% raw %}<span class="math inline">\(P(B)\)</span>{% endraw %}, and under disjoint countable unions by countable additivity. It contains {% raw %}<span class="math inline">\(\mathscr K_1\)</span>{% endraw %} by hypothesis, so the pi–lambda theorem gives {% raw %}<span class="math inline">\(\sigma(\mathscr K_1)\subseteq\mathcal D\)</span>{% endraw %}. This proves the product formula with the first coordinate allowed to range over its whole sigma-field. Repeat with the second coordinate, then the third, and so on. Choosing {% raw %}<span class="math inline">\(\Omega\)</span>{% endraw %} in unused coordinates proves the identities for all subcollections, which is independence of the generated sigma-fields. ◻</p>
</div>
<div id="result-11" class="theorem" data-note-number="11" data-note-kind="Theorem">
<p><strong>Theorem 11</strong>.  Suppose {% raw %}<span class="math inline">\(\{X_{i,j} : i \in \mathbb N, 1 \leq j \leq n_i\}\)</span>{% endraw %} is an array of <em>independent</em> random vectors. Let {% raw %}<span class="math inline">\(\mathscr F_i\)</span>{% endraw %} be the {% raw %}<span class="math inline">\(\sigma\)</span>{% endraw %}-field generated by the {% raw %}<span class="math inline">\(i\)</span>{% endraw %}th row. Then, {% raw %}<span class="math inline">\(\mathscr F_1, \mathscr F_2, \dots\)</span>{% endraw %} are independent.</p>

</div>
<div class="proof">
<p>The finite intersections of coordinate inverse images form a generating pi-system {% raw %}<span class="math inline">\(\mathscr H_i\)</span>{% endraw %} for each row sigma-field. Independence of all array entries gives the required product identities for every finite selection from different row pi-systems. Theorem 10 therefore makes the generated row sigma-fields independent. ◻</p>

</div>

<nav class="note-series" aria-label="Notes in this series"><p>Next: <a href="{% post_url 2021-11-09-convergence-and-large-sample-probability %}">Convergence and Large-Sample Probability</a></p></nav>

</div>
