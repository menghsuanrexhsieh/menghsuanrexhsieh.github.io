---
layout: "post"
title: "Causal Inference from a Single Social Network"
date: "2024-03-19"
tags: ["econometrics", "networks"]
excerpt: "A single social network can contain many observations but far fewer independent pieces of information."
note_series: "Network interference"
note_source: "assets/notes/Overleaf Projects (32 items)/Notes for network interference: inference and design/ideas.tex"
redirect_from: ["/2024/03/19/causal-inference-for-social-network-data/", "/2024/04/04/network-structural-equations-and-identification/", "/2024/04/21/estimating-causal-parameters-on-a-network/"]
---

<div class="note-content" markdown="0">

<p>Suppose each observed outcome contains a disturbance shared with its neighbors. Adding more observations then adds some new information and some repeated information. The theory of <span class="citation" data-cites="ogburn_causal_2024">(<a href="#ref-ogburn_causal_2024" role="doc-biblioref">Ogburn et al. 2024</a>)</span> asks when an intervention mean can nevertheless be estimated with a normal limit from a single growing network.</p>

<h3 data-note-section="1" id="10-59-the-main-result">1. The main result</h3>
<p>Let {% raw %}<span class="math inline">\(K_{\max,n}\)</span>{% endraw %} be the largest network neighborhood size and let {% raw %}<span class="math inline">\(\psi_n\)</span>{% endraw %} be the intervention mean for the network of size {% raw %}<span class="math inline">\(n\)</span>{% endraw %}. Under the paper’s causal structure, summary-map, nuisance-estimation, moment, and dependence conditions:</p>

<div id="single-network-clt" class="theorem" data-note-number="1" data-note-kind="Theorem">
<p><strong>Theorem 1</strong>. If {% raw %}<span class="math inline">\(K_{\max,n}^2/n\to0\)</span>{% endraw %}, the proposed estimator has a normal limit</p>

{% raw %}<div class="math display">\[
\sqrt{C_n}(\widehat\psi_n-\psi_n)\Rightarrow \mathcal{N}(0,\sigma^2)
\]</div>{% endraw %}
<p>for an appropriate variance normalization satisfying {% raw %}<span class="math inline">\(n/K_{\max,n}^2\le C_n\le n\)</span>{% endraw %}.</p>

</div>
<p>Read the degree condition together with the model assumptions. It bounds how much local dependence can accumulate; identification, nuisance estimation, and moment control are separate requirements.</p>

<h3 data-note-section="2" id="10-59-why-squared-degree-appears">2. Why squared degree appears</h3>
<p>Suppose each unit’s influence contribution depends on its own neighborhood. Two contributions can be dependent when those neighborhoods overlap, even if the two focal units are not directly linked. A neighborhood of size at most {% raw %}<span class="math inline">\(K\)</span>{% endraw %} can overlap with roughly {% raw %}<span class="math inline">\(K^2\)</span>{% endraw %} others.</p>

<p>The distinction is visible in the variance of an average. Expanding the square gives</p>

{% raw %}<div class="math display">\[
\operatorname{Var}\!\left(\frac1n\sum_iD_i\right)
=\frac1{n^2}\sum_{i,j}\operatorname{Cov}(D_i,D_j).
\]</div>{% endraw %}
<p>There are at most order {% raw %}<span class="math inline">\(nK^2\)</span>{% endraw %} potentially nonzero covariance terms. If each is bounded, division by the squared sample size gives the upper scale {% raw %}<span class="math inline">\(K^2/n\)</span>{% endraw %}. This count explains why degree enters the normalization. Establishing a normal limit requires control of higher-order dependence as well, which is supplied by the paper’s CLT.</p>

<h3 data-note-section="3" id="10-59-identification-and-dependence-are-separate">3. Identification and dependence are separate</h3>
<p>Locality of dependence also needs to be distinguished from causal identification. A latent variable can affect nearby units only and still confound treatment and outcome. Restricting the distance over which dependence travels does not remove that confounding.</p>

<p>The intervention formula uses measured covariates and specified treatment/outcome summaries. Correctly estimating these summaries does not compensate for a missing confounder or an incorrect exposure map. The <a href="{% post_url 2024-01-13-network-tmle-structural-models-dimension-reduction-and-inference %}">network TMLE construction</a> explains the targeting step once the identifying model is given.</p>

<h3 data-note-section="4" id="10-59-the-variance-must-follow-the-graph">4. The variance must follow the graph</h3>
<p>An i.i.d. variance estimator retains only the terms {% raw %}<span class="math inline">\(i=j\)</span>{% endraw %} in the display. Under overlapping neighborhoods, the omitted off-diagonal terms can be of the same order or larger. A valid variance procedure must estimate or otherwise account for the relevant covariance structure under the paper’s assumptions.</p>

<p>Conditioning on observed baseline covariates can change the target and remove some baseline-distribution uncertainty. It does not erase treatment and outcome dependence. The distinction should be fixed before deriving the influence function or reporting a standard error.</p>

<p>A hub illustrates why average degree is insufficient here. Many units may each have few neighbors while all sharing one highly connected neighbor. Their influence contributions can then contain the same disturbance.</p>

<h3 data-note-section="5" id="10-59-building-the-dependence-graph-for-influence-contributions">5. Building the dependence graph for influence contributions</h3>
<p>Let {% raw %}<span class="math inline">\(N_i\)</span>{% endraw %} denote the set of primitive disturbances needed to construct {% raw %}<span class="math inline">\(D_i\)</span>{% endraw %}. In a local model, disjoint disturbance sets imply independence. The relevant dependence graph joins {% raw %}<span class="math inline">\(i\)</span>{% endraw %} and {% raw %}<span class="math inline">\(j\)</span>{% endraw %} whenever {% raw %}<span class="math inline">\(N_i\cap N_j\ne\varnothing\)</span>{% endraw %}. It can be denser than the original social graph.</p>

<p>If each closed neighborhood has at most {% raw %}<span class="math inline">\(K\)</span>{% endraw %} vertices and the graph is undirected, then</p>

{% raw %}<div class="math display">\[
\#\{j:N_i\cap N_j\ne\varnothing\}
\leq\sum_{v\in N_i}\#\{j:v\in N_j\}\leq K^2.
\]</div>{% endraw %}
<p>With {% raw %}<span class="math inline">\(\mathbb{E} D_i=0\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\mathbb{E} D_i^2\leq M\)</span>{% endraw %}, Cauchy–Schwarz gives {% raw %}<span class="math inline">\(|\operatorname{Cov}(D_i,D_j)|\leq M\)</span>{% endraw %}. Hence</p>

{% raw %}<div class="math display">\[
\operatorname{Var}\left(n^{-1}\sum_iD_i\right)
\leq\frac{MnK^2}{n^2}=\frac{MK^2}{n}.
\]</div>{% endraw %}
<p>Overlapping neighborhoods identify the pairs that may contribute covariance. Some contributions may be small, zero, or negative, so the variance can be smaller than {% raw %}<span class="math inline">\(K^2/n\)</span>{% endraw %}. Its actual scale is set by their sum, with a nondegeneracy condition needed for a nonzero limiting variance.</p>

<h3 data-note-section="6" id="10-59-a-small-example-showing-the-missing-variance-term">6. A small example showing the missing variance term</h3>
<p>On a cycle, let {% raw %}<span class="math inline">\(\varepsilon_i\)</span>{% endraw %} be independent, centered, variance-one disturbances, and define {% raw %}<span class="math inline">\(D_i=\varepsilon_i+\varepsilon_{i+1}\)</span>{% endraw %} with cyclic indices. Each {% raw %}<span class="math inline">\(D_i\)</span>{% endraw %} has variance two and covariance one with each of its two neighbors. Therefore</p>

{% raw %}<div class="math display">\[
\operatorname{Var}\left(n^{-1}\sum_iD_i\right)
=\frac{2n+2n}{n^2}=\frac4n.
\]</div>{% endraw %}
<p>The same answer follows from {% raw %}<span class="math inline">\(\sum_iD_i=2\sum_i\varepsilon_i\)</span>{% endraw %}. Keeping only individual squared contributions would target {% raw %}<span class="math inline">\(2/n\)</span>{% endraw %}, half the true variance. The network is sparse and the rate is still {% raw %}<span class="math inline">\(\sqrt n\)</span>{% endraw %}; sparsity alone does not justify ignoring its covariance terms.</p>

<p>For another illustration, suppose contributions are identical within independent groups of size {% raw %}<span class="math inline">\(h\)</span>{% endraw %}. The mean is an average of {% raw %}<span class="math inline">\(n/h\)</span>{% endraw %} independent group shocks, so its variance is proportional to {% raw %}<span class="math inline">\(h/n\)</span>{% endraw %}. A bound based on {% raw %}<span class="math inline">\(K^2/n\)</span>{% endraw %} can be loose for this graph. The theorem supplies a sufficient regime and a permissible normalization range, rather than a universal formula for an effective sample size.</p>

<p>A linear disturbance model gives another way to calculate the covariance sum exactly. Let {% raw %}<span class="math inline">\(D_i=\sum_j b_{ij}\varepsilon_j\)</span>{% endraw %}, where the primitive {% raw %}<span class="math inline">\(\varepsilon_j\)</span>{% endraw %} are independent with mean zero and variances {% raw %}<span class="math inline">\(\sigma_j^2\)</span>{% endraw %}. Rearranging the average gives</p>

{% raw %}<div class="math display">\[
\frac1n\sum_iD_i
=\frac1n\sum_j\left(\sum_i b_{ij}\right)\varepsilon_j,
\qquad
\operatorname{Var}\left(\frac1n\sum_iD_i\right)
=\frac1{n^2}\sum_j\sigma_j^2\left(\sum_i b_{ij}\right)^2.
\]</div>{% endraw %}
<p>The diagonal-only calculation would instead give {% raw %}<span class="math inline">\(n^{-2}\sum_j\sigma_j^2\sum_i b_{ij}^2\)</span>{% endraw %}. Its error is the sum of the omitted products {% raw %}<span class="math inline">\(2b_{ij}b_{\ell j}\)</span>{% endraw %} for contributions sharing disturbance {% raw %}<span class="math inline">\(j\)</span>{% endraw %}. This identifies the source of dependence more directly than the presence of an edge between the focal units.</p>

<p>If {% raw %}<span class="math inline">\(b_{ij}\)</span>{% endraw %} indicates membership in a closed neighborhood of an undirected graph and {% raw %}<span class="math inline">\(\sigma_j^2=1\)</span>{% endraw %}, the exact variance is {% raw %}<span class="math inline">\(n^{-2}\sum_j(d_j+1)^2\)</span>{% endraw %}. On a regular graph of degree {% raw %}<span class="math inline">\(d\)</span>{% endraw %}, this is {% raw %}<span class="math inline">\((d+1)^2/n\)</span>{% endraw %}, whereas keeping only the diagonal gives {% raw %}<span class="math inline">\((d+1)/n\)</span>{% endraw %}. This example uses unnormalized neighborhood sums, whose individual variances grow with degree; it is not an example satisfying a uniform variance bound for arbitrarily growing {% raw %}<span class="math inline">\(d\)</span>{% endraw %}. It illustrates why both the weights and the graph matter.</p>

<p>In this linear example, rearrangement reduces the problem to an independent weighted sum. A CLT can then be checked by controlling large weighted shocks relative to the total variance. Nonlinear network influence functions generally do not admit this rearrangement; the single-network theory must control their dependence directly and also bound the nuisance-estimation remainder.</p>

<h3 data-note-section="7" id="10-59-why-a-variance-bound-is-not-yet-a-clt">7. Why a variance bound is not yet a CLT</h3>
<p>For independent observations, controlling each large summand and the total variance can be enough for a Lindeberg argument. With dependence, products involving connected collections of indices also matter. A connected collection of {% raw %}<span class="math inline">\(r\)</span>{% endraw %} vertices can be built by choosing a root, then attaching each new vertex to any previously selected vertex.</p>

<p>If the dependence graph has maximum degree {% raw %}<span class="math inline">\(\Delta\)</span>{% endraw %}, the number of such ordered constructions is at most</p>

{% raw %}<div class="math display">\[
n\prod_{j=1}^{r-1}(j\Delta)
=n(r-1)!\Delta^{r-1}.
\]</div>{% endraw %}
<p>The factor {% raw %}<span class="math inline">\(j\)</span>{% endraw %} is essential: a new vertex may attach to any of the {% raw %}<span class="math inline">\(j\)</span>{% endraw %} previous vertices, not only to the last one. A path count would miss branching configurations. Moment bounds control the size of the corresponding terms, and the paper’s dependence assumptions and normalization make the relevant errors negligible.</p>

<p>Pair counting thus establishes a variance bound but leaves a further question: do higher-order terms permit normal approximation? The disturbance assumptions and moment bounds in the formal CLT answer that question. A sparse covariance pattern by itself does not.</p>

<h3 data-note-section="8" id="10-59-a-hub-can-violate-a-local-noise-argument">8. A hub can violate a local-noise argument</h3>
<p>Consider a star where every leaf contribution contains the same centered hub disturbance {% raw %}<span class="math inline">\(H\)</span>{% endraw %}:</p>

{% raw %}<div class="math display">\[
D_i=H+\varepsilon_i,\qquad i=1,\ldots,n-1.
\]</div>{% endraw %}
<p>Their average converges to {% raw %}<span class="math inline">\(H\)</span>{% endraw %} rather than zero if {% raw %}<span class="math inline">\(\operatorname{Var}(H)&gt;0\)</span>{% endraw %}. Even though the original graph has average degree close to two, all leaf neighborhoods overlap at the hub. The maximum degree is of order {% raw %}<span class="math inline">\(n\)</span>{% endraw %}, and the theorem’s degree condition fails.</p>

<p>Each leaf repeats the hub shock, so averaging over leaves cannot remove it. Measured baseline covariates can only remove the uncertainty they explain. If the unobserved shock also affects treatment, it can invalidate identification in addition to preventing the proposed CLT.</p>

<h3 data-note-section="9" id="10-59-matching-nuisance-rates-and-the-target">9. Matching nuisance rates and the target</h3>
<p>An asymptotically linear expansion takes the form</p>

{% raw %}<div class="math display">\[
\widehat\psi_n-\psi_n=\frac1n\sum_iD_{n,i}+R_n.
\]</div>{% endraw %}
<p>The normal approximation requires {% raw %}<span class="math inline">\(\sqrt{C_n}R_n=o_p(1)\)</span>{% endraw %}, not merely {% raw %}<span class="math inline">\(R_n=o_p(1)\)</span>{% endraw %}. Product-rate conditions for outcome and assignment estimates are one way to control a second-order remainder; dependent empirical-process terms need their own bounds or a splitting scheme that supplies the needed separation.</p>

<p>One can instead define the intervention mean conditional on the realized baseline network. This removes the baseline-distribution contribution to that target and its gradient, while treatment and outcome randomness can remain dependent. The choice of conditional or unconditional target must therefore precede the variance calculation.</p>

<div id="refs" class="references csl-bib-body hanging-indent" data-entry-spacing="0" role="list">
<div id="ref-ogburn_causal_2024" class="csl-entry" role="listitem">
Ogburn, Elizabeth L., Oleg Sofrygin, Iván Díaz, and Mark J. Van Der Laan. 2024. <span>“Causal Inference for Social Network Data.”</span> <em>Journal of the American Statistical Association</em> 119 (545): 597–611. <a href="https://doi.org/10.1080/01621459.2022.2131557">https://doi.org/10.1080/01621459.2022.2131557</a>.
</div>
</div>

<nav class="note-series" aria-label="Notes in this series"><p>Previous: <a href="{% post_url 2024-01-13-network-tmle-structural-models-dimension-reduction-and-inference %}">Network TMLE: Structural Models, Dimension Reduction, and Inference</a> · Next: <a href="{% post_url 2024-06-26-two-stage-experiments-under-partial-interference-effects-variance-and-limits %}">Two-Stage Experiments under Partial Interference: Effects, Variance, and Limits</a></p></nav>

</div>
