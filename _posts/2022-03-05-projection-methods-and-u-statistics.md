---
layout: "post"
title: "Projection Methods and U-Statistics"
date: "2022-03-05"
tags: ["statistics", "asymptotic theory"]
excerpt: "Projection Methods and U-Statistics. Notes on projections, u-statistics, and ranks."
note_series: "Projections, U-statistics, and ranks"
note_source: "assets/notes/Overleaf Projects (32 items)/Projections and U- and Sign-Statistics (Chapters 11-13)/main.tex"
redirect_from: ["/2022/03/05/l2-projections-and-conditional-expectations/", "/2022/04/16/u-statistics-and-their-projections/"]
---

<div class="note-content" markdown="0">

<p>Many statistics average terms that share observations, so their summands are dependent. Projection separates the part explained by individual observations from higher-order interactions. For a nondegenerate U-statistic, the first-order projection is a sum of independent terms and the remainder is smaller at the central-limit scale. We develop the orthogonal decomposition and then apply it to variance, rank, and association statistics.</p>

<div id="Sec:Projections" data-note-section="title"></div>

<p>If {% raw %}<span class="math inline">\(T_n-S_n\to_P0\)</span>{% endraw %} and {% raw %}<span class="math inline">\(S_n\Rightarrow Z\)</span>{% endraw %}, Slutsky's lemma gives {% raw %}<span class="math inline">\(T_n\Rightarrow Z\)</span>{% endraw %}. Orthogonal projection supplies useful approximations because it minimizes a mean square error and makes the error orthogonal to the approximation. We work in the real Hilbert space {% raw %}<span class="math inline">\(L^2(P)\)</span>{% endraw %}, identifying random variables equal almost surely, with inner product {% raw %}<span class="math inline">\(\langle U,V\rangle=E(UV)\)</span>{% endraw %}.</p>

<span id="Def:sS"></span>

<p>Let {% raw %}<span class="math inline">\(\mathsf S\)</span>{% endraw %} be a closed linear subspace of {% raw %}<span class="math inline">\(L^2(P)\)</span>{% endraw %}, and let {% raw %}<span class="math inline">\(T\in L^2(P)\)</span>{% endraw %}. The subspace is a chosen class of approximating variables; taking all of {% raw %}<span class="math inline">\(L^2(P)\)</span>{% endraw %} would give the trivial projection {% raw %}<span class="math inline">\(T\)</span>{% endraw %} itself.</p>

<div id="result-1" class="definition" data-note-number="1" data-note-kind="Definition">
<p><strong>Definition 1.</strong> The projection {% raw %}<span class="math inline">\(\widehat S\)</span>{% endraw %} of {% raw %}<span class="math inline">\(T\)</span>{% endraw %} onto {% raw %}<span class="math inline">\(\mathsf S\)</span>{% endraw %} is the element minimizing {% raw %}<span class="math inline">\(E(T-S)^2\)</span>{% endraw %} over {% raw %}<span class="math inline">\(S\in\mathsf S\)</span>{% endraw %}.</p>
</div>

<div id="result-2" class="proposition" data-note-number="2" data-note-kind="Proposition">
<p><strong>Proposition 2.</strong> The projection exists, is unique almost surely, and is characterized by
</p>
{% raw %}<div class="math display">\[\widehat S\in\mathsf S,\qquad E[(T-\widehat S)S]=0\quad(S\in\mathsf S).\]</div>{% endraw %}
<p>
If constants belong to {% raw %}<span class="math inline">\(\mathsf S\)</span>{% endraw %}, then {% raw %}<span class="math inline">\(E\widehat S=ET\)</span>{% endraw %}, and the residual is uncorrelated with every member of {% raw %}<span class="math inline">\(\mathsf S\)</span>{% endraw %}.</p>
</div>
<div class="proof">
<p><em>Proof.</em> Write {% raw %}<span class="math inline">\(d=\inf_{S\in\mathsf S}\|T-S\|_2\)</span>{% endraw %}, and choose a minimizing sequence {% raw %}<span class="math inline">\(S_j\)</span>{% endraw %}. The parallelogram identity gives
</p>
{% raw %}<div class="math display">\[\|S_j-S_k\|_2^2=2\|T-S_j\|_2^2+2\|T-S_k\|_2^2-4\left\|T-\frac{S_j+S_k}{2}\right\|_2^2\longrightarrow0,\]</div>{% endraw %}
<p>
because the last squared norm is at least {% raw %}<span class="math inline">\(d^2\)</span>{% endraw %}. Completeness and closedness give a limit {% raw %}<span class="math inline">\(\widehat S\in\mathsf S\)</span>{% endraw %} with distance {% raw %}<span class="math inline">\(d\)</span>{% endraw %}. For any {% raw %}<span class="math inline">\(S\in\mathsf S\)</span>{% endraw %}, the quadratic {% raw %}<span class="math inline">\(t\mapsto\|T-\widehat S-tS\|_2^2\)</span>{% endraw %} is minimized at zero, so its linear coefficient vanishes. Conversely, orthogonality gives
</p>
{% raw %}<div class="math display">\[\|T-S\|_2^2=\|T-\widehat S\|_2^2+\|\widehat S-S\|_2^2.\]</div>{% endraw %}
<p>
This proves optimality and uniqueness. Taking {% raw %}<span class="math inline">\(S=1\)</span>{% endraw %} proves equality of means; the covariance assertion then follows from the same orthogonality. ◻</p>
</div>

<div id="result-3" class="theorem" data-note-number="3" data-note-kind="Theorem">
<p><strong>Theorem 3.</strong> Suppose {% raw %}<span class="math inline">\(\mathsf S_n\)</span>{% endraw %} contains constants, {% raw %}<span class="math inline">\(T_n\in L^2\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(\widehat S_n\)</span>{% endraw %} is its projection. Assume both variances are positive eventually and {% raw %}<span class="math inline">\(\operatorname{Var}(T_n)/\operatorname{Var}(\widehat S_n)\to1\)</span>{% endraw %}. Then
</p>
{% raw %}<div class="math display">\[\frac{T_n-ET_n}{\sqrt{\operatorname{Var}T_n}}-\frac{\widehat S_n-E\widehat S_n}{\sqrt{\operatorname{Var}\widehat S_n}}\longrightarrow0\quad\text{in }L^2,\]</div>{% endraw %}
<p>
and hence in probability.</p>
</div>
<div class="proof">
<p><em>Proof.</em> Put {% raw %}<span class="math inline">\(v_n=\operatorname{Var}T_n\)</span>{% endraw %} and {% raw %}<span class="math inline">\(w_n=\operatorname{Var}\widehat S_n\)</span>{% endraw %}. Orthogonality implies {% raw %}<span class="math inline">\(E(T_n-\widehat S_n)^2=v_n-w_n\)</span>{% endraw %}. The difference in the display is the sum of the residual divided by {% raw %}<span class="math inline">\(\sqrt{v_n}\)</span>{% endraw %} and {% raw %}<span class="math inline">\((\widehat S_n-E\widehat S_n)(v_n^{-1/2}-w_n^{-1/2})\)</span>{% endraw %}. These two terms are orthogonal, so its squared {% raw %}<span class="math inline">\(L^2\)</span>{% endraw %} norm is
</p>
{% raw %}<div class="math display">\[1-\frac{w_n}{v_n}+\left(\sqrt{\frac{w_n}{v_n}}-1\right)^2\longrightarrow0.\]</div>{% endraw %}
<p>◻</p>
</div>

<span id="Eq:HajekProjections"></span>

<p>For the remainder of the projection discussion, let {% raw %}<span class="math inline">\(X_1,\ldots,X_n\)</span>{% endraw %} be independent. They need not have the same distribution. Define the additive subspace
</p>
{% raw %}<div class="math display">\[\mathfrak S=\left\{\sum_{i=1}^ng_i(X_i):E g_i(X_i)^2&lt;\infty\right\}.\]</div>{% endraw %}
<p>
It is the orthogonal sum of the constants and the {% raw %}<span class="math inline">\(n\)</span>{% endraw %} centered coordinate spaces {% raw %}<span class="math inline">\(\{g_i(X_i):Eg_i=0\}\)</span>{% endraw %}. Each is closed, and a finite orthogonal sum is closed: convergence of a sum in {% raw %}<span class="math inline">\(L^2\)</span>{% endraw %} forces convergence of each component by Pythagoras.</p>

<div id="Def:HajekProjections" class="definition" data-note-number="4" data-note-kind="Definition">
<p><strong>Definition 4.</strong> Projection onto {% raw %}<span class="math inline">\(\mathfrak S\)</span>{% endraw %} is called the Hájek projection.</p>
</div>

<div id="Thm:HajekProjection" class="theorem" data-note-number="5" data-note-kind="Theorem">
<p><strong>Theorem 5.</strong> For {% raw %}<span class="math inline">\(T\in L^2\)</span>{% endraw %}, its Hájek projection is
</p>
{% raw %}<div class="math display">\[\widehat S=ET+\sum_{i=1}^n\{E[T\mid X_i]-ET\}=\sum_{i=1}^nE[T\mid X_i]-(n-1)ET.\]</div>{% endraw %}
</div>
<div class="proof">
<p><em>Proof.</em> The constant projection is {% raw %}<span class="math inline">\(ET\)</span>{% endraw %}. Conditional expectation is an {% raw %}<span class="math inline">\(L^2\)</span>{% endraw %} contraction, so each summand is square integrable and centered. For a centered {% raw %}<span class="math inline">\(g_i(X_i)\)</span>{% endraw %}, conditioning shows {% raw %}<span class="math inline">\(E[Tg_i]=E[E(T\mid X_i)g_i]\)</span>{% endraw %}. Every other centered coordinate term has zero inner product with {% raw %}<span class="math inline">\(g_i\)</span>{% endraw %}, by independence. Thus the displayed residual is orthogonal to all additive functions, and Proposition 2 applies. ◻</p>
</div>

<p>For {% raw %}<span class="math inline">\(A\subseteq[n]=\{1,\ldots,n\}\)</span>{% endraw %}, write {% raw %}<span class="math inline">\(E_AT=E[T\mid X_i:i\in A]\)</span>{% endraw %}, with {% raw %}<span class="math inline">\(E_\emptyset T=ET\)</span>{% endraw %}. Distinguish the full coordinate space {% raw %}<span class="math inline">\(L_A=L^2(\sigma(X_i:i\in A))\)</span>{% endraw %} from the canonical interaction space
</p>
{% raw %}<div class="math display">\[\mathcal H_A=\{g\in L_A:E_Bg=0\text{ for every }B\subsetneq A\},\qquad \mathcal H_\emptyset=\{\text{constants}\}.\]</div>{% endraw %}
<p>
The zero conditional means are part of the definition; arbitrary functions of {% raw %}<span class="math inline">\(X_A\)</span>{% endraw %} do not have this property. These spaces are closed since conditional expectations are continuous linear maps. Independence gives the commuting identity {% raw %}<span class="math inline">\(E_BE_AT=E_{A\cap B}T\)</span>{% endraw %}. To see it, first replace {% raw %}<span class="math inline">\(T\)</span>{% endraw %} by its conditional expectation on all coordinates; integrating a product of coordinate functions proves the identity, and approximation by finite linear combinations of such products extends it to {% raw %}<span class="math inline">\(L^2\)</span>{% endraw %}.</p>

<p>If {% raw %}<span class="math inline">\(A\ne B\)</span>{% endraw %}, choose, after interchanging them if needed, an index in {% raw %}<span class="math inline">\(A\setminus B\)</span>{% endraw %}. For {% raw %}<span class="math inline">\(g\in\mathcal H_A\)</span>{% endraw %}, the commuting identity gives {% raw %}<span class="math inline">\(E_Bg=E_{A\cap B}g=0\)</span>{% endraw %}. Hence {% raw %}<span class="math inline">\(E(gh)=0\)</span>{% endraw %} for every {% raw %}<span class="math inline">\(h\in\mathcal H_B\)</span>{% endraw %}. Thus distinct canonical interactions are orthogonal.</p>

<div id="result-6" class="theorem" data-note-number="6" data-note-kind="Theorem">
<p><strong>Theorem 6.</strong> The Hoeffding projection onto {% raw %}<span class="math inline">\(\mathcal H_A\)</span>{% endraw %} is
</p>
{% raw %}<div class="math display">\[P_AT=\sum_{B\subseteq A}(-1)^{|A|-|B|}E_BT.\]</div>{% endraw %}
<p>
Moreover,
</p>
{% raw %}<div class="math display">\[E_AT=\sum_{B\subseteq A}P_BT,\qquad L_A=\bigoplus_{B\subseteq A}\mathcal H_B.\]</div>{% endraw %}
<p>
In particular, if {% raw %}<span class="math inline">\(T\)</span>{% endraw %} is a function of all {% raw %}<span class="math inline">\(n\)</span>{% endraw %} coordinates, then {% raw %}<span class="math inline">\(T=\sum_{A\subseteq[n]}P_AT\)</span>{% endraw %} in {% raw %}<span class="math inline">\(L^2\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(\operatorname{Var}T=\sum_{A\ne\emptyset}E(P_AT)^2\)</span>{% endraw %}.</p>
</div>
<div class="proof">
<p><em>Proof.</em> Fix a proper subset {% raw %}<span class="math inline">\(C\subsetneq A\)</span>{% endraw %} and an index {% raw %}<span class="math inline">\(i\in A\setminus C\)</span>{% endraw %}. In {% raw %}<span class="math inline">\(E_CP_AT\)</span>{% endraw %}, pair each {% raw %}<span class="math inline">\(B\)</span>{% endraw %} not containing {% raw %}<span class="math inline">\(i\)</span>{% endraw %} with {% raw %}<span class="math inline">\(B\cup\{i\}\)</span>{% endraw %}. Their signs are opposite and their intersections with {% raw %}<span class="math inline">\(C\)</span>{% endraw %} coincide, so every pair cancels. Consequently {% raw %}<span class="math inline">\(E_CP_AT=0\)</span>{% endraw %} and {% raw %}<span class="math inline">\(P_AT\in\mathcal H_A\)</span>{% endraw %}.</p>

<p>For {% raw %}<span class="math inline">\(g\in\mathcal H_A\)</span>{% endraw %}, we have {% raw %}<span class="math inline">\(E[(T-E_AT)g]=0\)</span>{% endraw %} by conditioning on {% raw %}<span class="math inline">\(X_A\)</span>{% endraw %}. Every other term {% raw %}<span class="math inline">\(E_BT\)</span>{% endraw %}, {% raw %}<span class="math inline">\(B\subsetneq A\)</span>{% endraw %}, is orthogonal to {% raw %}<span class="math inline">\(g\)</span>{% endraw %}, since {% raw %}<span class="math inline">\(E_Bg=0\)</span>{% endraw %}. Thus {% raw %}<span class="math inline">\(E[(T-P_AT)g]=0\)</span>{% endraw %}, proving the projection formula.</p>

<p>To sum the components, the coefficient of {% raw %}<span class="math inline">\(E_CT\)</span>{% endraw %} in {% raw %}<span class="math inline">\(\sum_{B\subseteq A}P_BT\)</span>{% endraw %} is
</p>
{% raw %}<div class="math display">\[\sum_{B:C\subseteq B\subseteq A}(-1)^{|B|-|C|}=(1-1)^{|A|-|C|},\]</div>{% endraw %}
<p>
which is one when {% raw %}<span class="math inline">\(C=A\)</span>{% endraw %} and zero otherwise. This proves the identity and the direct-sum decomposition. It also proves the source's assertion that {% raw %}<span class="math inline">\(T\perp\mathcal H_B\)</span>{% endraw %} for every {% raw %}<span class="math inline">\(B\subseteq A\)</span>{% endraw %} implies {% raw %}<span class="math inline">\(E_AT=0\)</span>{% endraw %}. For a general {% raw %}<span class="math inline">\(T\)</span>{% endraw %}, the sum over {% raw %}<span class="math inline">\(B\subseteq A\)</span>{% endraw %} is {% raw %}<span class="math inline">\(E_AT\)</span>{% endraw %}, not {% raw %}<span class="math inline">\(T\)</span>{% endraw %} unless {% raw %}<span class="math inline">\(T\)</span>{% endraw %} is {% raw %}<span class="math inline">\(X_A\)</span>{% endraw %}-measurable. ◻</p>
</div>
<p>The first components are {% raw %}<span class="math inline">\(P_\emptyset T=ET\)</span>{% endraw %}, {% raw %}<span class="math inline">\(P_{\{i\}}T=E[T\mid X_i]-ET\)</span>{% endraw %}, and
</p>
{% raw %}<div class="math display">\[P_{\{i,j\}}T=E[T\mid X_i,X_j]-E[T\mid X_i]-E[T\mid X_j]+ET.\]</div>{% endraw %}
<p>
The projection on interactions of order at most {% raw %}<span class="math inline">\(p\)</span>{% endraw %} is {% raw %}<span class="math inline">\(\sum_{|A|\le p}P_AT\)</span>{% endraw %}.</p>

<h2 data-note-section="1" id="basics-of-unbiased-statistics">1. Basics of Unbiased Statistics</h2>

<p>Now let the observations be i.i.d., and let {% raw %}<span class="math inline">\(h\)</span>{% endraw %} be a measurable symmetric kernel of fixed order {% raw %}<span class="math inline">\(r\)</span>{% endraw %}. We estimate {% raw %}<span class="math inline">\(\theta=Eh(X_1,\ldots,X_r)\)</span>{% endraw %}. Symmetrizing a nonsymmetric kernel over its {% raw %}<span class="math inline">\(r!\)</span>{% endraw %} permutations preserves its expectation. Using only the first {% raw %}<span class="math inline">\(r\)</span>{% endraw %} observations wastes the rest of the sample; averaging over all subsets removes that dependence on the labels.</p>

<div id="Def:U-statistic-kernel-h" class="definition" data-note-number="7" data-note-kind="Definition">
<p><strong>Definition 7.</strong> For {% raw %}<span class="math inline">\(n\ge r\)</span>{% endraw %}, the U-statistic with kernel {% raw %}<span class="math inline">\(h\)</span>{% endraw %} is
</p>
{% raw %}<div class="math display">\[U_n=\binom nr^{-1}\sum_{\substack{A\subseteq[n]\\|A|=r}}h(X_A).\]</div>{% endraw %}
<p>
Here the arguments can be listed in increasing index order, since {% raw %}<span class="math inline">\(h\)</span>{% endraw %} is symmetric. Every summand has mean {% raw %}<span class="math inline">\(\theta\)</span>{% endraw %}, so {% raw %}<span class="math inline">\(EU_n=\theta\)</span>{% endraw %}.</p>
</div>

<p>When {% raw %}<span class="math inline">\(Eh^2&lt;\infty\)</span>{% endraw %}, Jensen's inequality applied pointwise to the average of {% raw %}<span class="math inline">\(h(X_A)-\theta\)</span>{% endraw %} gives {% raw %}<span class="math inline">\(\operatorname{Var}U_n\le\operatorname{Var}h(X_1,\ldots,X_r)\)</span>{% endraw %}; strict inequality is not automatic. For real observations, the conditional expectation identity is
</p>
{% raw %}<div class="math display">\[U_n=E[h(X_1,\ldots,X_r)\mid X_{(1)},\ldots,X_{(n)}].\]</div>{% endraw %}
<p>
Indeed, averaging over all permutations of the sample gives {% raw %}<span class="math inline">\(U_n\)</span>{% endraw %}, and exchangeability makes the conditional expectation of each permuted kernel the same given the ordered full sample. This remains true with ties. Conditioning only on a kernel evaluated at a few order statistics would not give this identity.</p>

<div id="result-8" class="example" data-note-number="8" data-note-kind="Example">
<p><strong>Example 8.</strong> The kernel {% raw %}<span class="math inline">\(h(x)=x\)</span>{% endraw %} gives the sample mean. With finite variance, its asymptotic normality is the usual i.i.d. central limit theorem.</p>
</div>

<div id="result-9" class="example" data-note-number="9" data-note-kind="Example">
<p><strong>Example 9.</strong> For {% raw %}<span class="math inline">\(h(x,y)=(x-y)^2/2\)</span>{% endraw %}, the parameter is {% raw %}<span class="math inline">\(\operatorname{Var}X\)</span>{% endraw %} and
</p>
{% raw %}<div class="math display">\[U_n=\frac1{n(n-1)}\sum_{i&lt;j}(X_i-X_j)^2=\frac1{n-1}\sum_i(X_i-\overline X_n)^2.\]</div>{% endraw %}
<p>
The identity follows by expanding the squares: {% raw %}<span class="math inline">\(\sum_{i&lt;j}(X_i-X_j)^2=n\sum_iX_i^2-(\sum_iX_i)^2\)</span>{% endraw %}. Finite second moment is enough for unbiasedness; applying the following square-integrable-kernel theorem to this example requires a finite fourth moment.</p>
</div>

<span id="Eq:U-projection"></span>

<p>Let {% raw %}<span class="math inline">\(h_1(x)=E[h(x,X_2,\ldots,X_r)]-\theta\)</span>{% endraw %}. Among the {% raw %}<span class="math inline">\(\binom nr\)</span>{% endraw %} subsets, exactly {% raw %}<span class="math inline">\(\binom{n-1}{r-1}\)</span>{% endraw %} contain a given index {% raw %}<span class="math inline">\(i\)</span>{% endraw %}. The others have conditional mean {% raw %}<span class="math inline">\(\theta\)</span>{% endraw %}, so
</p>
{% raw %}<div class="math display">\[E[U_n-\theta\mid X_i]=\frac rn h_1(X_i),\qquad \widehat U_n=\frac rn\sum_{i=1}^nh_1(X_i).\]</div>{% endraw %}
<p>
This is the Hájek projection of the centered statistic; {% raw %}<span class="math inline">\(EU_n=\theta\)</span>{% endraw %} and {% raw %}<span class="math inline">\(E\widehat U_n=0\)</span>{% endraw %}.</p>

<div id="Thm:U-statistic-thm1" class="theorem" data-note-number="10" data-note-kind="Theorem">
<p><strong>Theorem 10.</strong> If {% raw %}<span class="math inline">\(Eh(X_1,\ldots,X_r)^2&lt;\infty\)</span>{% endraw %}, then
</p>
{% raw %}<div class="math display">\[\sqrt n(U_n-\theta-\widehat U_n)\to0\quad\text{in }L^2,\qquad \sqrt n(U_n-\theta)\Rightarrow \mathcal{N}(0,r^2\zeta_1),\]</div>{% endraw %}
<p>
where {% raw %}<span class="math inline">\(\zeta_1=E h_1(X_1)^2\)</span>{% endraw %}. The result includes {% raw %}<span class="math inline">\(\zeta_1=0\)</span>{% endraw %}, with a point mass at zero as the limit; a different scaling may then be needed for a nondegenerate limit.</p>
</div>
<div class="proof">
<p><em>Proof.</em> For {% raw %}<span class="math inline">\(0\le c\le r\)</span>{% endraw %}, let {% raw %}<span class="math inline">\(\zeta_c\)</span>{% endraw %} be the covariance of two kernel evaluations sharing exactly {% raw %}<span class="math inline">\(c\)</span>{% endraw %} observations and using independent observations otherwise. Conditional independence given the shared variables gives
</p>
{% raw %}<div class="math display">\[\zeta_c=\operatorname{Var}(E[h(X_1,\ldots,X_r)\mid X_1,\ldots,X_c]),\quad \zeta_0=0.\]</div>{% endraw %}
<p>
Each is finite. Fix the first subset {% raw %}<span class="math inline">\(A\)</span>{% endraw %}. A second subset overlaps it in {% raw %}<span class="math inline">\(c\)</span>{% endraw %} indices in exactly {% raw %}<span class="math inline">\(\binom rc\binom{n-r}{r-c}\)</span>{% endraw %} ways. Consequently, with impossible binomial coefficients interpreted as zero,
</p>
{% raw %}<div class="math display">\[\operatorname{Var}U_n=\sum_{c=1}^r\frac{\binom rc\binom{n-r}{r-c}}{\binom nr}\zeta_c.\]</div>{% endraw %}
<p>
For fixed {% raw %}<span class="math inline">\(r\)</span>{% endraw %}, the coefficient for {% raw %}<span class="math inline">\(c=1\)</span>{% endraw %} is {% raw %}<span class="math inline">\(r^2/n+O(n^{-2})\)</span>{% endraw %}, by expanding its finite product of linear factors; the coefficient for {% raw %}<span class="math inline">\(c\ge2\)</span>{% endraw %} is {% raw %}<span class="math inline">\(O(n^{-c})\)</span>{% endraw %}, by comparing polynomial degrees. Therefore
</p>
{% raw %}<div class="math display">\[\operatorname{Var}U_n=\frac{r^2\zeta_1}{n}+O(n^{-2}).\]</div>{% endraw %}
<p>
The projection has variance exactly {% raw %}<span class="math inline">\(r^2\zeta_1/n\)</span>{% endraw %}. Orthogonality now gives {% raw %}<span class="math inline">\(E(U_n-\theta-\widehat U_n)^2=O(n^{-2})\)</span>{% endraw %}, proving the first assertion without dividing by a potentially zero variance. The i.i.d. CLT applied to {% raw %}<span class="math inline">\(h_1(X_i)\)</span>{% endraw %}, followed by Slutsky, proves the second. ◻</p>
</div>

<div id="result-11" class="example" data-note-number="11" data-note-kind="Example">
<p><strong>Example 11.</strong> For the signed-rank kernel {% raw %}<span class="math inline">\(h(x,y)=\mathbf1\{x+y&gt;0\}\)</span>{% endraw %}, put {% raw %}<span class="math inline">\(\theta=P(X_1+X_2&gt;0)\)</span>{% endraw %}. If {% raw %}<span class="math inline">\(F\)</span>{% endraw %} is the distribution function, then
</p>
{% raw %}<div class="math display">\[h_1(x)=1-F(-x)-\theta,\qquad \widehat U_n=-\frac2n\sum_i\{F(-X_i)-EF(-X_i)\}.\]</div>{% endraw %}
<p>
The strict inequality in the kernel explains the use of {% raw %}<span class="math inline">\(F(-x)\)</span>{% endraw %}, even when there are atoms.</p>

<p>Under the null that {% raw %}<span class="math inline">\(F\)</span>{% endraw %} is continuous and symmetric about zero, {% raw %}<span class="math inline">\(F(-x)=1-F(x)\)</span>{% endraw %}, {% raw %}<span class="math inline">\(\theta=1/2\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(F(X)\)</span>{% endraw %} is uniform on {% raw %}<span class="math inline">\((0,1)\)</span>{% endraw %}. Hence {% raw %}<span class="math inline">\(\zeta_1=1/12\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\sqrt n(U_n-1/2)\Rightarrow \mathcal{N}(0,1/3)\)</span>{% endraw %}. A one-sided test rejects when {% raw %}<span class="math inline">\(\sqrt{3n}(U_n-1/2)&gt;z_{1-\alpha}\)</span>{% endraw %}, where {% raw %}<span class="math inline">\(z_p=\Phi^{-1}(p)\)</span>{% endraw %}. Symmetry implies {% raw %}<span class="math inline">\(\theta=1/2\)</span>{% endraw %} here; that single probability equality does not characterize symmetry or ensure the same null variance.</p>

<p>Let {% raw %}<span class="math inline">\(R_i^+\)</span>{% endraw %} be the rank of {% raw %}<span class="math inline">\(|X_i|\)</span>{% endraw %}, and suppose the sample has no zeros or tied absolute values. Wilcoxon's statistic is {% raw %}<span class="math inline">\(W^+=\sum_iR_i^+\mathbf1\{X_i&gt;0\}\)</span>{% endraw %}. The diagonal part of each rank contributes {% raw %}<span class="math inline">\(\mathbf1\{X_i&gt;0\}\)</span>{% endraw %}. For each unordered pair, the remaining contribution is one precisely when the observation of larger absolute value is positive, which is equivalent to a positive pair sum. Thus
</p>
{% raw %}<div class="math display">\[W^+=\binom n2U_n+\sum_i\mathbf1\{X_i&gt;0\}.\]</div>{% endraw %}
<p>
Under the continuous symmetric null, {% raw %}<span class="math inline">\(EW^+=n(n+1)/4\)</span>{% endraw %}. The centered last sum is bounded in absolute value by {% raw %}<span class="math inline">\(n\)</span>{% endraw %}, hence is negligible after multiplication by {% raw %}<span class="math inline">\(n^{-3/2}\)</span>{% endraw %}. Since {% raw %}<span class="math inline">\(n^{-3/2}\binom n2=(\sqrt n/2)(1-1/n)\)</span>{% endraw %},
</p>
{% raw %}<div class="math display">\[n^{-3/2}(W^+-EW^+)\Rightarrow \mathcal{N}(0,1/12).\]</div>{% endraw %}
</div>

<div id="result-12" class="example" data-note-number="12" data-note-kind="Example">
<p><strong>Example 12.</strong> For i.i.d. bivariate observations {% raw %}<span class="math inline">\((X_i,Y_i)\)</span>{% endraw %}, Kendall's statistic is
</p>
{% raw %}<div class="math display">\[\tau_n=\frac4{n(n-1)}\sum_{i&lt;j}\mathbf1\{(X_i-X_j)(Y_i-Y_j)&gt;0\}-1.\]</div>{% endraw %}
<p>
Assume continuous marginals so ties have probability zero. It is the U-statistic with kernel twice the concordance indicator minus one. Write {% raw %}<span class="math inline">\(\theta=E\tau_n\)</span>{% endraw %}, {% raw %}<span class="math inline">\(F^\ell(x,y)=P(X&lt;x,Y&lt;y)\)</span>{% endraw %}, {% raw %}<span class="math inline">\(F^r(x,y)=P(X&gt;x,Y&gt;y)\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(q=F^\ell+F^r\)</span>{% endraw %}. Conditional concordance probability is {% raw %}<span class="math inline">\(q(x,y)\)</span>{% endraw %}, so the first kernel is {% raw %}<span class="math inline">\(h_1(x,y)=2q(x,y)-1-\theta\)</span>{% endraw %}. Thus
</p>
{% raw %}<div class="math display">\[\widehat U_n=\frac4n\sum_i\{q(X_i,Y_i)-Eq(X_i,Y_i)\},\qquad \sqrt n(\tau_n-\theta)\Rightarrow \mathcal{N}(0,4\operatorname{Var}h_1(X,Y)).\]</div>{% endraw %}
<p>
If {% raw %}<span class="math inline">\(X\)</span>{% endraw %} and {% raw %}<span class="math inline">\(Y\)</span>{% endraw %} are independent, {% raw %}<span class="math inline">\(A=F_X(X)\)</span>{% endraw %} and {% raw %}<span class="math inline">\(B=F_Y(Y)\)</span>{% endraw %} are independent uniforms, and {% raw %}<span class="math inline">\(q(X,Y)=AB+(1-A)(1-B)\)</span>{% endraw %}. Hence {% raw %}<span class="math inline">\(2q-1=(2A-1)(2B-1)\)</span>{% endraw %}, of mean zero and variance {% raw %}<span class="math inline">\((1/3)^2\)</span>{% endraw %}. Therefore {% raw %}<span class="math inline">\(\sqrt n\tau_n\Rightarrow \mathcal{N}(0,4/9)\)</span>{% endraw %}, and a two-sided level-{% raw %}<span class="math inline">\(\alpha\)</span>{% endraw %} asymptotic test rejects if {% raw %}<span class="math inline">\(\sqrt{9n/4}|\tau_n|&gt;z_{1-\alpha/2}\)</span>{% endraw %}. This detects departures with nonzero population Kendall correlation; zero correlation does not imply independence.</p>
</div>

<p>For two samples, let {% raw %}<span class="math inline">\(X_1,\ldots,X_m\)</span>{% endraw %} be i.i.d. from {% raw %}<span class="math inline">\(F\)</span>{% endraw %}, and independently let {% raw %}<span class="math inline">\(Y_1,\ldots,Y_n\)</span>{% endraw %} be i.i.d. from {% raw %}<span class="math inline">\(G\)</span>{% endraw %}. The distributions may differ. For a fixed kernel symmetric separately in its {% raw %}<span class="math inline">\(r\)</span>{% endraw %} first and {% raw %}<span class="math inline">\(s\)</span>{% endraw %} last arguments, define
</p>
{% raw %}<div class="math display">\[U_{m,n}=\frac1{\binom mr\binom ns}\sum_{|A|=r}\sum_{|B|=s}h(X_A,Y_B),\qquad\theta=Eh(X_1,\ldots,X_r,Y_1,\ldots,Y_s).\]</div>{% endraw %}
<p>
Let {% raw %}<span class="math inline">\(N=m+n\)</span>{% endraw %} and assume {% raw %}<span class="math inline">\(m/N\to\lambda\in(0,1)\)</span>{% endraw %}.</p>

<span id="Eq:HH_tilde"></span>

<p>Project on the additive space of square-integrable functions of the individual observations. The subset-counting argument gives
</p>
{% raw %}<div class="math display">\[\widehat U_{m,n}=\frac rm\sum_{i=1}^mh_{1,0}(X_i)+\frac sn\sum_{j=1}^nh_{0,1}(Y_j),\]</div>{% endraw %}
<p>
where {% raw %}<span class="math inline">\(h_{1,0}(x)=E[h(x,X_2,\ldots,X_r,Y_1,\ldots,Y_s)]-\theta\)</span>{% endraw %} and {% raw %}<span class="math inline">\(h_{0,1}(y)=E[h(X_1,\ldots,X_r,y,Y_2,\ldots,Y_s)]-\theta\)</span>{% endraw %}.</p>

<div id="Thm:U-statistic-thm2" class="theorem" data-note-number="13" data-note-kind="Theorem">
<p><strong>Theorem 13.</strong> If {% raw %}<span class="math inline">\(Eh^2&lt;\infty\)</span>{% endraw %}, then
</p>
{% raw %}<div class="math display">\[\sqrt N(U_{m,n}-\theta-\widehat U_{m,n})\to0\quad\text{in }L^2,\]</div>{% endraw %}
{% raw %}<div class="math display">\[\sqrt N(U_{m,n}-\theta)\Rightarrow N\left(0,\frac{r^2\zeta_{1,0}}\lambda+\frac{s^2\zeta_{0,1}}{1-\lambda}\right).\]</div>{% endraw %}
<p>
Here {% raw %}<span class="math inline">\(\zeta_{a,b}\)</span>{% endraw %} is the covariance of kernel evaluations sharing {% raw %}<span class="math inline">\(a\)</span>{% endraw %} of the {% raw %}<span class="math inline">\(X\)</span>{% endraw %}'s and {% raw %}<span class="math inline">\(b\)</span>{% endraw %} of the {% raw %}<span class="math inline">\(Y\)</span>{% endraw %}'s, with independent remaining coordinates. Equivalently it is the variance of the kernel's conditional expectation given those shared variables.</p>
</div>
<div class="proof">
<p><em>Proof.</em> Independently count the overlapping subsets in the two samples to obtain
</p>
{% raw %}<div class="math display">\[\operatorname{Var}U_{m,n}=\sum_{a=0}^r\sum_{b=0}^s\frac{\binom ra\binom{m-r}{r-a}}{\binom mr}\frac{\binom sb\binom{n-s}{s-b}}{\binom ns}\zeta_{a,b}.\]</div>{% endraw %}
<p>
The {% raw %}<span class="math inline">\((0,0)\)</span>{% endraw %} term is zero. The coefficients of {% raw %}<span class="math inline">\((1,0)\)</span>{% endraw %} and {% raw %}<span class="math inline">\((0,1)\)</span>{% endraw %} are {% raw %}<span class="math inline">\(r^2/m+O(N^{-2})\)</span>{% endraw %} and {% raw %}<span class="math inline">\(s^2/n+O(N^{-2})\)</span>{% endraw %}: the zero-overlap coefficient in the other sample is {% raw %}<span class="math inline">\(1+O(N^{-1})\)</span>{% endraw %}. All terms with {% raw %}<span class="math inline">\(a+b\ge2\)</span>{% endraw %} are {% raw %}<span class="math inline">\(O(N^{-2})\)</span>{% endraw %}. It follows that
</p>
{% raw %}<div class="math display">\[\operatorname{Var}U_{m,n}=\frac{r^2\zeta_{1,0}}m+\frac{s^2\zeta_{0,1}}n+O(N^{-2}).\]</div>{% endraw %}
<p>
The first two terms are exactly the projection variance, so orthogonality proves the remainder bound. The two independent sample means in the projection satisfy their respective CLTs; multiplying them by {% raw %}<span class="math inline">\(r\sqrt{N/m}\)</span>{% endraw %} and {% raw %}<span class="math inline">\(s\sqrt{N/n}\)</span>{% endraw %} gives the stated variance. This also covers a zero limiting variance. ◻</p>
</div>

<div id="result-14" class="example" data-note-number="14" data-note-kind="Example">
<p><strong>Example 14.</strong> For Mann–Whitney, {% raw %}<span class="math inline">\(h(x,y)=\mathbf1\{x\le y\}\)</span>{% endraw %}, {% raw %}<span class="math inline">\(r=s=1\)</span>{% endraw %}, and
</p>
{% raw %}<div class="math display">\[U_{m,n}=\frac1{mn}\sum_{i=1}^m\sum_{j=1}^n\mathbf1\{X_i\le Y_j\},\qquad\theta=P(X\le Y).\]</div>{% endraw %}
<p>
With {% raw %}<span class="math inline">\(F\)</span>{% endraw %} the cdf of {% raw %}<span class="math inline">\(X\)</span>{% endraw %} and {% raw %}<span class="math inline">\(G\)</span>{% endraw %} the cdf of {% raw %}<span class="math inline">\(Y\)</span>{% endraw %}, the centered projection is
</p>
{% raw %}<div class="math display">\[\widehat U_{m,n}=\frac1m\sum_i\{1-G(X_i-)-\theta\}+\frac1n\sum_j\{F(Y_j)-\theta\}.\]</div>{% endraw %}
<p>
The left limit is necessary for the weak inequality when {% raw %}<span class="math inline">\(G\)</span>{% endraw %} has atoms. For continuous {% raw %}<span class="math inline">\(G\)</span>{% endraw %}, this becomes the centered negative average of {% raw %}<span class="math inline">\(G(X_i)\)</span>{% endraw %} plus the centered average of {% raw %}<span class="math inline">\(F(Y_j)\)</span>{% endraw %}. Under {% raw %}<span class="math inline">\(F=G\)</span>{% endraw %} continuous, both first-kernel variances equal {% raw %}<span class="math inline">\(1/12\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\theta=1/2\)</span>{% endraw %}, giving
</p>
{% raw %}<div class="math display">\[\sqrt N(U_{m,n}-1/2)\Rightarrow N\left(0,\frac1{12\lambda(1-\lambda)}\right).\]</div>{% endraw %}
<p>
The null of equal distributions implies this centering, but {% raw %}<span class="math inline">\(P(X\le Y)=1/2\)</span>{% endraw %} by itself does not imply equal distributions.</p>
</div>

<nav class="note-series" aria-label="Notes in this series"><p>Next: <a href="{% post_url 2022-05-28-rank-and-signed-rank-statistics %}">Rank and Signed-Rank Statistics</a></p></nav>

</div>
