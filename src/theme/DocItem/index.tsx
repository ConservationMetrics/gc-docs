/*
import React, {type ReactNode} from 'react';
import DocItem from '@theme-original/DocItem';
import type DocItemType from '@theme/DocItem';
import type {WrapperProps} from '@docusaurus/types';

type Props = WrapperProps<typeof DocItemType>;

export default function DocItemWrapper(props: Props): ReactNode {
  return (
    <>
      <DocItem {...props} />
    </>
  );
}
*/

import React from 'react';
import DocItem from '@theme-original/DocItem';
import type {Props} from '@theme/DocItem';
import Link from '@docusaurus/Link';

const ALLOWED_TAGS = ['itu-1', 'itu-2', 'itu-3', 'idm', 'icm', 'opu', 'tsp'];

export default function DocItemWrapper(props: Props): JSX.Element {
  // We get the data directly from props.content
  const {content: DocContent} = props;
  const {metadata} = DocContent;
  const {tags, frontMatter} = metadata;

  // 1. Homepage exclusion
  const isHomepage = frontMatter.is_homepage === true;

  // 2. Filter tags
  const filteredTags = tags.filter(tag => 
    ALLOWED_TAGS.includes(tag.label.toLowerCase())
  );

  return (
    <>
      {/* This renders the entire page. 
        If you want the tags below the title, we have to inject them 
        using a little bit of CSS or by wrapping the content specifically.
      */}
      <div className="custom-tags-container">
        {!isHomepage && filteredTags.length > 0 && (
          <div style={{
            display: 'flex', 
            gap: '8px', 
            marginBottom: '1rem', 
            marginTop: '0.5rem',
            flexWrap: 'wrap',
            maxWidth: 'var(--ifm-container-width)',
            margin: '0 auto',
            padding: '0 var(--ifm-spacing-horizontal)'
          }}>
            {filteredTags.map((tag) => (
              <Link
                key={tag.permalink}
                to={tag.permalink}
                className="badge badge--info"
                style={{
                  textDecoration: 'none',
                  padding: '4px 12px',
                  borderRadius: '4px',
                  fontSize: '0.8rem'
                }}>
                {tag.label.toUpperCase()}
              </Link>
            ))}
          </div>
        )}
      </div>

      <DocItem {...props} />
    </>
  );
}