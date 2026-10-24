---
layout: "post"
title: "Random Matrices: Eigenvalue and Operator-Norm Bounds"
date: "2022-12-17"
tags: ["statistics", "empirical processes"]
excerpt: "To start, we prove the spectral theorem for self-adjoint operators on finite-dimensional Hilbert spaces."
note_series: "Empirical processes"
note_source: "assets/notes/Overleaf Projects (32 items)/Empirical Process/stats.tex"
redirect_from: ["/2022/12/17/random-matrix-theory/", "/2022/12/20/minimax-formulation-of-eigenvalues/", "/2022/12/24/eigenvalue-inequalities/", "/2022/12/27/statistics-of-random-matrices/", "/2026/06/16/random-matrix-theory/"]
---

<div class="note-content" markdown="0">

<p>To estimate a random matrix norm, we first express it as a supremum of scalar quantities. Linear algebra supplies the variational formulas; concentration and covering numbers then control the supremum. We develop these ingredients for eigenvalues and singular values, followed by a second approach that bounds the norm through traces of high powers.</p>

<span id="sec:rmt"></span>
<p>Throughout, eigenvalues of an {% raw %}<span class="math inline">\(n\times n\)</span>{% endraw %} Hermitian matrix are ordered {% raw %}<span class="math inline">\(\lambda_1\ge\cdots\ge\lambda_n\)</span>{% endraw %}. Thus {% raw %}<span class="math inline">\(\lambda_1\)</span>{% endraw %} is the largest eigenvalue and satisfies {% raw %}<span class="math inline">\(\lambda_1(A+B)\le\lambda_1(A)+\lambda_1(B)\)</span>{% endraw %}; the smallest eigenvalue satisfies the reverse superadditivity inequality. The distinction matters in every variational formula below.</p>

<h3 data-note-section="1" id="the-spectral-theorem">1. The Spectral Theorem</h3>

<div id="thm:spectral" class="theorem" data-note-number="1" data-note-kind="Theorem">
<p>Theorem 1 (Spectral theorem). A self-adjoint operator {% raw %}<span class="math inline">\(T\)</span>{% endraw %} on an {% raw %}<span class="math inline">\(n\)</span>{% endraw %}-dimensional complex Hilbert space has an orthonormal basis of eigenvectors, with real eigenvalues.</p>
</div>

<p>Proof. The Rayleigh quotient {% raw %}<span class="math inline">\(v^*Tv\)</span>{% endraw %} is real for every unit vector and attains a maximum on the compact unit sphere. Let {% raw %}<span class="math inline">\(v\)</span>{% endraw %} be a maximizer, with value {% raw %}<span class="math inline">\(\lambda\)</span>{% endraw %}. For any {% raw %}<span class="math inline">\(w\perp v\)</span>{% endraw %}, differentiate the quotient at {% raw %}<span class="math inline">\((v+tw)/\|v+tw\|\)</span>{% endraw %}, first with real {% raw %}<span class="math inline">\(t\)</span>{% endraw %}, and then with {% raw %}<span class="math inline">\(w\)</span>{% endraw %} replaced by {% raw %}<span class="math inline">\(iw\)</span>{% endraw %}. The two derivatives show {% raw %}<span class="math inline">\(\Re(w^*Tv)=\Im(w^*Tv)=0\)</span>{% endraw %}. Hence {% raw %}<span class="math inline">\(Tv\)</span>{% endraw %} lies in the span of {% raw %}<span class="math inline">\(v\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(Tv=\lambda v\)</span>{% endraw %}. Moreover {% raw %}<span class="math inline">\(v^*Tw=(Tv)^*w=0\)</span>{% endraw %} for every {% raw %}<span class="math inline">\(w\perp v\)</span>{% endraw %}, so {% raw %}<span class="math inline">\(v^\perp\)</span>{% endraw %} is invariant under {% raw %}<span class="math inline">\(T\)</span>{% endraw %}, and its restriction remains self-adjoint. Induction on dimension supplies an orthonormal eigenbasis there. The base cases of dimension zero and one are immediate. Each eigenvalue is real because {% raw %}<span class="math inline">\(v^*Tv\)</span>{% endraw %} is real. ◻</p>

<h3 data-note-section="2" id="minimax-formulation-of-eigenvalues">2. Minimax Formulation of Eigenvalues</h3>

<div id="thm:courant-fischer-minimax" class="theorem" data-note-number="2" data-note-kind="Theorem">
<p>Theorem 2 (Courant–Fischer). For {% raw %}<span class="math inline">\(1\le k\le n\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[\lambda_k(A)=\max_{\dim W=k}\ \min_{v\in W,\|v\|=1}v^*Av
=\min_{\dim W=n-k+1}\ \max_{v\in W,\|v\|=1}v^*Av.\]</div>{% endraw %}
</div>

<span id="eq:courant-fischer-minimax-1"></span><span id="eq:courant-fischer-minimax-2"></span>

<p>Proof. Let {% raw %}<span class="math inline">\(u_1,\ldots,u_n\)</span>{% endraw %} be an eigenbasis in descending order. The space {% raw %}<span class="math inline">\(W_+=\operatorname{span}(u_1,\ldots,u_k)\)</span>{% endraw %} has minimum Rayleigh quotient {% raw %}<span class="math inline">\(\lambda_k\)</span>{% endraw %}. Conversely, every {% raw %}<span class="math inline">\(k\)</span>{% endraw %}-dimensional space meets {% raw %}<span class="math inline">\(\operatorname{span}(u_k,\ldots,u_n)\)</span>{% endraw %} nontrivially, since their dimensions sum to {% raw %}<span class="math inline">\(n+1\)</span>{% endraw %}. A unit vector in the intersection has quotient at most {% raw %}<span class="math inline">\(\lambda_k\)</span>{% endraw %}, proving the first equality. For the second, {% raw %}<span class="math inline">\(W_-=\operatorname{span}(u_k,\ldots,u_n)\)</span>{% endraw %} has maximum {% raw %}<span class="math inline">\(\lambda_k\)</span>{% endraw %}, and every space of dimension {% raw %}<span class="math inline">\(n-k+1\)</span>{% endraw %} meets {% raw %}<span class="math inline">\(\operatorname{span}(u_1,\ldots,u_k)\)</span>{% endraw %}. A unit vector in that intersection has quotient at least {% raw %}<span class="math inline">\(\lambda_k\)</span>{% endraw %}. Equivalently one can apply the first formula to {% raw %}<span class="math inline">\(-A\)</span>{% endraw %}, remembering {% raw %}<span class="math inline">\(\lambda_j(-A)=-\lambda_{n-j+1}(A)\)</span>{% endraw %}. ◻</p>

<h3 data-note-section="3" id="eigenvalue-inequalities">3. Eigenvalue Inequalities</h3>

<span id="eq:weyl-ineq"></span>
<p>Weyl's inequality states that, if {% raw %}<span class="math inline">\(i+j-1\le n\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[\lambda_{i+j-1}(A+B)\le\lambda_i(A)+\lambda_j(B).\]</div>{% endraw %}

<p>Indeed, intersect the spectral subspaces of {% raw %}<span class="math inline">\(A\)</span>{% endraw %} with eigenvalues at most {% raw %}<span class="math inline">\(\lambda_i(A)\)</span>{% endraw %} and of {% raw %}<span class="math inline">\(B\)</span>{% endraw %} with eigenvalues at most {% raw %}<span class="math inline">\(\lambda_j(B)\)</span>{% endraw %}. Their intersection has dimension at least {% raw %}<span class="math inline">\(n-i-j+2\)</span>{% endraw %}, and every unit vector in it has {% raw %}<span class="math inline">\((A+B)\)</span>{% endraw %}-quotient at most the proposed bound. The Courant–Fischer minimum-over-subspaces formula proves the upper eigenvalue bound. Applying that bound to the negatives of both matrices supplies the corresponding lower inequalities.</p>

<span id="eq:ky-fan"></span>
<p>Ky Fan's inequality is</p>

{% raw %}<div class="math display">\[\sum_{i=1}^k\lambda_i(A+B)\le\sum_{i=1}^k\lambda_i(A)+\sum_{i=1}^k\lambda_i(B).\]</div>{% endraw %}

<p>For a rank-{% raw %}<span class="math inline">\(k\)</span>{% endraw %} orthogonal projection {% raw %}<span class="math inline">\(P\)</span>{% endraw %}, expand in an eigenbasis of {% raw %}<span class="math inline">\(A\)</span>{% endraw %}: {% raw %}<span class="math inline">\(\operatorname{Tr}(PA)=\sum_i\lambda_i(A)p_i\)</span>{% endraw %}, where {% raw %}<span class="math inline">\(p_i=\|Pu_i\|^2\in[0,1]\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\sum_i p_i=k\)</span>{% endraw %}. Moving weight toward the larger eigenvalues shows {% raw %}<span class="math inline">\(\sum_i\lambda_i(A)p_i\le\sum_{i\le k}\lambda_i(A)\)</span>{% endraw %}; projection onto the top {% raw %}<span class="math inline">\(k\)</span>{% endraw %} eigenvectors attains equality. Thus</p>

{% raw %}<div class="math display">\[\sum_{i=1}^k\lambda_i(A)=\max_{P=P^*=P^2,\ \operatorname{rank}P=k}\operatorname{Tr}(PA).\]</div>{% endraw %}

<p>Apply this formula to {% raw %}<span class="math inline">\(A+B\)</span>{% endraw %} and bound the two trace terms separately. In particular {% raw %}<span class="math inline">\(k=1\)</span>{% endraw %} gives largest-eigenvalue subadditivity.</p>

<p>The variational formulas also give the perturbation bound</p>

{% raw %}<div class="math display">\[|\lambda_i(A+B)-\lambda_i(A)|\le\|B\|_{\rm op},\]</div>{% endraw %}

<p>because {% raw %}<span class="math inline">\(-\|B\|_{\rm op}\le v^*Bv\le\|B\|_{\rm op}\)</span>{% endraw %} uniformly on the unit sphere. This proves continuity of all ordered eigenvalues and permits approximation in the next argument.</p>

<p>Lidskii's inequality extends the sum bound to any increasing index set {% raw %}<span class="math inline">\(1\le i_1&lt;\cdots&lt;i_k\le n\)</span>{% endraw %}:</p>

{% raw %}<div class="math display">\[\sum_{j=1}^k\bigl[\lambda_{i_j}(A+B)-\lambda_{i_j}(A)\bigr]\le\sum_{j=1}^k\lambda_j(B).\]</div>{% endraw %}

<p>Here is a proof that includes eigenvalue crossings. First suppose {% raw %}<span class="math inline">\(A\)</span>{% endraw %} has distinct eigenvalues and consider {% raw %}<span class="math inline">\(C(t)=A+tB\)</span>{% endraw %}, {% raw %}<span class="math inline">\(0\le t\le1\)</span>{% endraw %}. The discriminant of its characteristic polynomial is a polynomial in {% raw %}<span class="math inline">\(t\)</span>{% endraw %}, nonzero at zero; hence it vanishes only at finitely many parameters. Between them, every ordered eigenvalue is differentiable by the implicit function theorem. A differentiable local unit eigenvector can be chosen by applying the spectral projection</p>

{% raw %}<div class="math display">\[P_i(t)=\prod_{\ell\ne i}\frac{C(t)-\lambda_\ell(C(t))I}{\lambda_i(C(t))-\lambda_\ell(C(t))}\]</div>{% endraw %}

<p>to a fixed vector with nonzero projection, then normalizing. Differentiating the eigenvector equation gives {% raw %}<span class="math inline">\(\lambda_i'(t)=u_i(t)^*Bu_i(t)\)</span>{% endraw %}. The chosen {% raw %}<span class="math inline">\(k\)</span>{% endraw %} eigenvectors are orthonormal, so the projection trace formula bounds their derivative sum by {% raw %}<span class="math inline">\(\sum_{j\le k}\lambda_j(B)\)</span>{% endraw %}. Integrate on each interval of simple spectrum and use continuity at the finitely many crossing points. Finally approximate a general {% raw %}<span class="math inline">\(A\)</span>{% endraw %} by Hermitian matrices with simple spectrum, obtained by perturbing its eigenvalues in an eigenbasis. The perturbation bound passes the inequality to the limit. For {% raw %}<span class="math inline">\(k=n\)</span>{% endraw %}, equality follows directly from the trace.</p>

<h3 data-note-section="4" id="singular-value-decomposition">4. Singular Value Decomposition</h3>

<div id="result-3" class="proposition" data-note-number="3" data-note-kind="Proposition">
<p>Proposition 3 (Singular value decomposition). For {% raw %}<span class="math inline">\(A:\mathbb C^p\to\mathbb C^n\)</span>{% endraw %}, let {% raw %}<span class="math inline">\(r=\operatorname{rank}A\)</span>{% endraw %}. There are orthonormal families {% raw %}<span class="math inline">\(u_1,\ldots,u_r\)</span>{% endraw %} in {% raw %}<span class="math inline">\(\mathbb C^p\)</span>{% endraw %}, {% raw %}<span class="math inline">\(v_1,\ldots,v_r\)</span>{% endraw %} in {% raw %}<span class="math inline">\(\mathbb C^n\)</span>{% endraw %}, and positive {% raw %}<span class="math inline">\(\sigma_1\ge\cdots\ge\sigma_r\)</span>{% endraw %}, such that</p>

{% raw %}<div class="math display">\[Au_j=\sigma_jv_j,\qquad A^*v_j=\sigma_ju_j,\qquad A=\sum_{j=1}^r\sigma_jv_ju_j^*.\]</div>{% endraw %}

<p>In particular, {% raw %}<span class="math inline">\(A\)</span>{% endraw %} vanishes on the orthogonal complement of the span of all the {% raw %}<span class="math inline">\(u_j\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(\|A\|_{\rm op}=\sigma_1\)</span>{% endraw %} when {% raw %}<span class="math inline">\(r&gt;0\)</span>{% endraw %}, or zero when {% raw %}<span class="math inline">\(A=0\)</span>{% endraw %}.</p>
</div>

<p>Proof. The matrix {% raw %}<span class="math inline">\(A^*A\)</span>{% endraw %} is Hermitian positive semidefinite. Choose an orthonormal eigenbasis, with positive eigenvalues {% raw %}<span class="math inline">\(\sigma_j^2\)</span>{% endraw %} for {% raw %}<span class="math inline">\(j\le r\)</span>{% endraw %}, and put {% raw %}<span class="math inline">\(v_j=Au_j/\sigma_j\)</span>{% endraw %}. Then</p>

{% raw %}<div class="math display">\[v_i^*v_j=\frac{u_i^*A^*Au_j}{\sigma_i\sigma_j}=\mathbf1\{i=j\},\qquad A^*v_j=\sigma_ju_j.\]</div>{% endraw %}

<p>A zero eigenvalue gives {% raw %}<span class="math inline">\(\|Au\|^2=u^*A^*Au=0\)</span>{% endraw %}; therefore the remaining domain eigenvectors lie in the kernel. Expanding any vector in this basis gives the displayed decomposition. Completing both orthonormal families gives the usual rectangular diagonal matrix form; its additional singular values, up to {% raw %}<span class="math inline">\(\min(n,p)\)</span>{% endraw %}, are zero. In the adjoint relation the operator must be {% raw %}<span class="math inline">\(A^*\)</span>{% endraw %}, since {% raw %}<span class="math inline">\(v_j\)</span>{% endraw %} belongs to the codomain. ◻</p>

<h3 data-note-section="5" id="statistics-of-random-matrices">5. Statistics of Random Matrices</h3>

<p>We first consider a {% raw %}<span class="math inline">\(d\times d\)</span>{% endraw %} matrix {% raw %}<span class="math inline">\(M\)</span>{% endraw %} whose entries are independent, centered, and bounded in modulus by one. They may be complex. This model does not impose Hermitian symmetry: the independence of rows used below would otherwise fail. Constants denoted by {% raw %}<span class="math inline">\(c,C,A_0\)</span>{% endraw %} are positive and universal.</p>

<div id="lem:prelim-uniformly-bounded-subgassian-rm" class="lemma" data-note-number="4" data-note-kind="Lemma">
<p>Lemma 4. For every deterministic unit vector {% raw %}<span class="math inline">\(x\in\mathbb C^d\)</span>{% endraw %} and every {% raw %}<span class="math inline">\(A\ge A_0\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[P(\|Mx\|_2&gt;A\sqrt d)\le e^{-cA^2d}.\]</div>{% endraw %}

<p>For an arbitrary vector, replace the threshold by {% raw %}<span class="math inline">\(A\sqrt d\|x\|_2\)</span>{% endraw %}, with the zero vector handled separately.</p>
</div>

<p>Proof. In a row sum {% raw %}<span class="math inline">\(Z=\sum_j\xi_jx_j\)</span>{% endraw %}, each real part {% raw %}<span class="math inline">\(\Re(\xi_jx_j)\)</span>{% endraw %} is centered and lies in {% raw %}<span class="math inline">\([-|x_j|,|x_j|]\)</span>{% endraw %}. Hoeffding's scalar exponential bound yields {% raw %}<span class="math inline">\(P(|\Re Z|&gt;t)\le2e^{-t^2/2}\)</span>{% endraw %}, because {% raw %}<span class="math inline">\(\sum_j|x_j|^2=1\)</span>{% endraw %}. The same holds for the imaginary part. If {% raw %}<span class="math inline">\(|Z|&gt;t\)</span>{% endraw %}, one of these parts exceeds {% raw %}<span class="math inline">\(t/\sqrt2\)</span>{% endraw %}; hence {% raw %}<span class="math inline">\(P(|Z|&gt;t)\le4e^{-t^2/4}\)</span>{% endraw %}. The tail integration identity now gives</p>

{% raw %}<div class="math display">\[\mathbb E e^{|Z|^2/8}=1+\frac18\int_0^\infty e^{u/8}P(|Z|^2&gt;u)\,du\le5.\]</div>{% endraw %}

<p>The row sums {% raw %}<span class="math inline">\(Z_1,\ldots,Z_d\)</span>{% endraw %} are independent. Markov's inequality therefore gives</p>

{% raw %}<div class="math display">\[P\Bigl(\sum_i|Z_i|^2&gt;A^2d\Bigr)\le\exp\{d\log5-A^2d/8\}\le e^{-A^2d/16}\]</div>{% endraw %}

<p>once {% raw %}<span class="math inline">\(A^2\ge16\log5\)</span>{% endraw %}. The row-sum tail estimate proves <a href="#lem:prelim-uniformly-bounded-subgassian-rm">Lemma 4</a>, including its uniformity over deterministic unit vectors. ◻</p>

<div id="lem:prelim-eps-net-bigvee-bound" class="lemma" data-note-number="5" data-note-kind="Lemma">
<p>Lemma 5 (Net bound). If {% raw %}<span class="math inline">\(\mathcal{N}\)</span>{% endraw %} is an {% raw %}<span class="math inline">\(\epsilon\)</span>{% endraw %}-net of the unit sphere, with {% raw %}<span class="math inline">\(0&lt;\epsilon&lt;1\)</span>{% endraw %}, then every linear operator satisfies</p>

{% raw %}<div class="math display">\[\|M\|_{\rm op}\le\frac1{1-\epsilon}\max_{y\in\mathcal{N}}\|My\|_2.\]</div>{% endraw %}

<p>A {% raw %}<span class="math inline">\(1/2\)</span>{% endraw %}-net of the complex unit sphere can be chosen with at most {% raw %}<span class="math inline">\(5^{2d}\)</span>{% endraw %} points.</p>
</div>

<p>Proof. For each unit {% raw %}<span class="math inline">\(x\)</span>{% endraw %}, choose a net point {% raw %}<span class="math inline">\(y\)</span>{% endraw %} with {% raw %}<span class="math inline">\(\|x-y\|\le\epsilon\)</span>{% endraw %}. The triangle inequality gives {% raw %}<span class="math inline">\(\|Mx\|\le\|My\|+\epsilon\|M\|_{\rm op}\)</span>{% endraw %}. Take the supremum over {% raw %}<span class="math inline">\(x\)</span>{% endraw %} and rearrange. For the cardinality bound, identify {% raw %}<span class="math inline">\(\mathbb C^d\)</span>{% endraw %} with {% raw %}<span class="math inline">\(\mathbb R^{2d}\)</span>{% endraw %}, and take a maximal set with pairwise distances greater than {% raw %}<span class="math inline">\(\epsilon\)</span>{% endraw %}. The disjoint balls of radius {% raw %}<span class="math inline">\(\epsilon/2\)</span>{% endraw %} about its points lie in the ball of radius {% raw %}<span class="math inline">\(1+\epsilon/2\)</span>{% endraw %}. Comparing volumes bounds its size by {% raw %}<span class="math inline">\((1+2/\epsilon)^{2d}\)</span>{% endraw %}; maximality makes it an {% raw %}<span class="math inline">\(\epsilon\)</span>{% endraw %}-net. This uses the existence of a nearby net point for each {% raw %}<span class="math inline">\(x\)</span>{% endraw %}, not closeness of every pair of sphere points. ◻</p>

<div id="result-6" class="remark" data-note-number="6" data-note-kind="Remark">
<p>Remark 6. Apply Lemma 4 to the finitely many points of a {% raw %}<span class="math inline">\(1/2\)</span>{% endraw %}-net and use a union bound. For all sufficiently large {% raw %}<span class="math inline">\(A\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[P(\|M\|_{\rm op}&gt;A\sqrt d)\le5^{2d}\exp\{-A^2d/64\}\le e^{-cA^2d}.\]</div>{% endraw %}

<p>The extra constant in the lower threshold for {% raw %}<span class="math inline">\(A\)</span>{% endraw %} absorbs the entropy term {% raw %}<span class="math inline">\(2d\log5\)</span>{% endraw %}. Taking a supremum over the entire sphere inside a pointwise tail bound would not justify this step. Scaling handles uniformly bounded entries with another common bound.</p>
</div>

<div id="rem:moment-trick" class="example" data-note-number="7" data-note-kind="Example">
<p>Example 7 (The moment method). Now let {% raw %}<span class="math inline">\(M=(\xi_{ij})\)</span>{% endraw %} be Hermitian, with independent centered entries on and above the diagonal, {% raw %}<span class="math inline">\(\xi_{ji}=\overline{\xi_{ij}}\)</span>{% endraw %}, {% raw %}<span class="math inline">\(\mathbb E|\xi_{ij}|^2\le1\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(|\xi_{ij}|\le K\)</span>{% endraw %} for a deterministic {% raw %}<span class="math inline">\(K\ge1\)</span>{% endraw %}. Diagonal entries are real. The upper-triangular independence is the appropriate assumption for this model. For every positive integer {% raw %}<span class="math inline">\(q\)</span>{% endraw %}, the spectral theorem gives</p>

{% raw %}<div class="math display">\[\|M\|_{\rm op}^{2q}\le\operatorname{Tr}(M^{2q})=\sum_i\lambda_i(M)^{2q},\qquad P(\|M\|_{\rm op}&gt;u)\le u^{-2q}\mathbb E\operatorname{Tr}(M^{2q}).\]</div>{% endraw %}

<p>The trace is not the sum of the {% raw %}<span class="math inline">\(2q\)</span>{% endraw %}th powers of the diagonal entries. Matrix multiplication instead gives a sum over closed walks,</p>

{% raw %}<div class="math display">\[\operatorname{Tr}(M^4)=\sum_{i,j,k,\ell}\xi_{ij}\xi_{jk}\xi_{k\ell}\xi_{\ell i}.\]</div>{% endraw %}

<p>Regard each unordered pair as an edge, allowing a loop at a repeated vertex. An edge occurring exactly once makes the expectation zero, by centering and independence of different upper-triangular entries. A surviving length-four walk thus uses at most two distinct edges. Its graph is connected, so it has at most three vertices.</p>

<p>If two edges occur, each occurs twice. Independence and {% raw %}<span class="math inline">\(\mathbb E|\xi|^2\le1\)</span>{% endraw %} bound the absolute expected product by one, whether or not the two occurrences are conjugated. There are at most {% raw %}<span class="math inline">\(C d^3\)</span>{% endraw %} such walks: for each of the finitely many equality patterns among four indices, choose at most three labels. If only one edge occurs, there are at most {% raw %}<span class="math inline">\(C d^2\)</span>{% endraw %} walks, and their absolute expectation is at most</p>

{% raw %}<div class="math display">\[\mathbb E|\xi|^4\le K^2\mathbb E|\xi|^2\le K^2.\]</div>{% endraw %}

<p>This includes diagonal loops. Therefore</p>

{% raw %}<div class="math display">\[\mathbb E\operatorname{Tr}(M^4)\le C(d^3+d^2K^2),\qquad P(\|M\|_{\rm op}&gt;u)\le\frac{C(d^3+d^2K^2)}{u^4}.\]</div>{% endraw %}

<p>For {% raw %}<span class="math inline">\(K=O(\sqrt d)\)</span>{% endraw %}, this gives {% raw %}<span class="math inline">\(\|M\|_{\rm op}=O_P(d^{3/4})\)</span>{% endraw %}. More explicitly, confidence {% raw %}<span class="math inline">\(1-\eta\)</span>{% endraw %} is obtained at a threshold {% raw %}<span class="math inline">\([C(d^3+d^2K^2)/\eta]^{1/4}\)</span>{% endraw %}. The fourth-moment calculation is a coarse bound; sharper norm scales require control of higher trace moments or another argument. The independent-entry net proof above cannot be applied by treating the rows of a Hermitian matrix as independent. Higher moments and their closed-walk structure will also drive the semicircle-law proof in the next post.</p>
</div>
<nav class="note-series" aria-label="Notes in this series"><p>Previous: <a href="{% post_url 2022-12-10-nonparametric-least-squares-and-rates-of-convergence %}">Nonparametric Least Squares and Rates of Convergence</a> · Next: <a href="{% post_url 2022-12-31-universality %}">Universality</a></p></nav>

</div>
